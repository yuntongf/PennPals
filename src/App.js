import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import MessageBoard from "./components/MessageBoard";
import MessagePage from "./components/MessagePage";
import MessageCompose from "./components/MessageCompose";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
//import { getMessages } from "./apis/fake_mes_service";
import { getMessages, addMessage, updateMessage, deleteMessage} from "./services/MessageService";
import { Navigate } from "react-router-dom";
import http from "./services/HttpService";
import config from "./config.json";
import {addReply, getReplies} from './services/ReplyService';

//import http from "./services/HttpService";
//import config from "./config.json";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    // page : the page that we are on
    messages: [],
    replies: []
  };

  async componentDidMount() {
    const { data:message} = await getMessages();
    this.setState({messages:message});
    //const { data:reply } = await getReplies();
    //this.setState({replies:reply});
  }

  handleSubmit = async (message) => {
    const originalMessages = this.state.messages;
    let msgs = [message, ...this.state.messages];
    //this.setState({ messages: msgs});
    try {
    const {data} = await addMessage(message);
    const messages = [data, ...this.state.messages];
    toast.success('🦄 Posted!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    this.setState({ messages });
    //this.window.reload()
    } catch {
      alert("add failed...");
      this.setState(originalMessages);
    }
    
  } 


  handleReply = async (message) => {
    //console.log("when handlereply at top level the message is", message)
    const originalMessages = {...this.state.messages};
    let msgs = [...this.state.messages];
    console.log(message);
    const mesOther = msgs.filter((m) => (m._id!==message._id));
    msgs = [...mesOther, message];
    this.setState({ messages:msgs });
    toast.success('🦄 Comment posted!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    //this.setState({messages:msgs});
    try {
      const {data} = await updateMessage(message);
      //msgs[id] = data;
      //this.setState({ messages:msgs });
      
    } catch {
      alert("add reply failed...");
      this.setState(originalMessages);
    }
  }

  handleLike = async (message) => {
    const originalMessages = this.state.messages;
    // update likes
    const messages = [...this.state.messages];
    const id = messages.indexOf(message);
    messages[id].replies = message.replies;
    this.setState({ messages });
    try {
      await updateMessage(messages[id]);
    } catch {
      alert("update failed...")
    }

  };

  handleReport = async (m) => {
    const originalMessages = this.state.messages;
    // update likes
    const messages = [...this.state.messages];
    const id = messages.indexOf(m);
    messages[id].replies = m.replies;
    this.setState({ messages });
    try {
      await updateMessage(messages[id]);
    } catch {
      alert("update failed...")
      this.setState(originalMessages);
    }
  }

  handleDelete = async (mes) => {
    const originalMessages = this.state.messages;
    const messages = this.state.messages.filter((m) => m._id != mes._id);
    this.setState(messages);
    try {
      await deleteMessage(mes);
    } catch (e) {
      alert("delete failed...");
      if (e.response && e.response.status === 404) {
        alert("404 message does not exist");
      }
      this.setState(originalMessages);
    }
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <NavBar />
        <div className="content">
          <Routes>
            <Route
              path="/MessageBoard/:id"
              element={
                <MessagePage
                  messages={this.state.messages}
                  handleLike={(m) => this.handleLike(m)}
                  handleReport={(m)=>this.handleReport(m)}
                  handleReply={(m)=>this.handleReply(m)}
                  handleDelete={(m) => this.handleDelete(m)}
                />
              }
            />
            <Route
              path="/Compose"
              element={
                <MessageCompose
                  messages={this.state.messages}
                  handleLike={(m) => this.handleLike(m)}
                  handleSubmit={(m) => this.handleSubmit(m)}
                  handleReport={(m)=>this.handleReport(m)}
                  handleDelete={(m) => this.handleDelete(m)}
                />
              }
            />
            <Route
              path="/MessageBoard"
              element={
                <MessageBoard
                  messages={this.state.messages}
                  handleLike={(m) => this.handleLike(m)}
                  handleReport={(m) => this.handleReport(m)}
                  handleDelete={(m) => this.handleDelete(m)}
                />
              }
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route
              path="/"
              element={
                <MessageBoard
                  messages={this.state.messages}
                  handleLike={(m) => this.handleLike(m)}
                  handleReport={(m) => this.handleReport(m)}
                  handleDelete={(m) => this.handleDelete(m)}
                />
              }
            />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
