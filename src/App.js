import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
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
    const { data:reply } = await getReplies();
    this.setState({replies:reply});
  }

  /* Back end services
  handleAdd = async () => {
    const originalMessages = this.state.messages;
    const mes = {
      _id: 1,
      user: "August",
      author: "Apple",
      title: "Saying Hi",
      content: "Hi I'm Apple",
      likes: 0,
      reported: false,
      liked: true,
      read: false,
      deleted: false,
    };
    const messages = [mes, ...this.state.messages];
    this.setState({ messages });
    try {
      http.post(config.apiEndPoint, mes);
    } catch {
      alert("add failed...");
      this.setState(originalMessages);
    }
  };

  handleUpdate = async (mes) => {
    const originalMessages = this.state.messages;
    mes.likes++;
    let messages = [...this.state.messages];
    const index = messages.indexOf(mes);
    messages[index] = { ...mes };
    this.setState(messages);
    try {
      await http.put(`${config.apiEndPoint}/${mes._id}`, mes);
    } catch {
      alert("update failed...");
      this.setState(originalMessages);
    }
  };

  handleDelete = async (mes) => {
    const originalMessages = this.state.messages;
    const messages = this.state.messages.filter((m) => m._id != mes._id);
    try {
      await http.delete(`${config.apiEndPoint}/${mes._id}`);
    } catch (e) {
      alert("delete failed...");
      if (e.response && e.response.status === 404) {
        alert("message does not exist");
      }
      this.setState(messages);
    }
  };

  /*  state = {
    messages : []
  }

  async componentDidMount() {
    // async function to initialize data
    // pending > resolved or rejected
    const {data : messages} = await http.get(config.apiEndPoint);
    this.setState({messages});
  }
  
  handleAdd = () => {

  }

  handleUpdate = () => {

  }

  handleDelete = () => {

  }*/

  handleSubmit = async (message, t) => {
    if (t==='m'){
      const originalMessages = this.state.messages;
      try {
      const {data} = await addMessage(message);
      const messages = [data, ...this.state.messages];
      this.setState({ messages });
      //this.window.reload()
      } catch {
        alert("add failed...");
        this.setState(originalMessages);
      }
    } else if (t==='r') {
      const originalReplies = this.state.replies;
      try {
      const {data} = await addReply(message);
      const replies = [data, ...this.state.replies];
      this.setState({ replies });
      //this.window.reload()
      } catch {
        alert("add failed...");
        this.setState(originalReplies);
      }
    }
    // MessageServices.addMessage()
  };

  handleLike = async (message) => {
    const originalMessages = this.state.messages;
    // update likes
    const messages = [...this.state.messages];
    const id = messages.indexOf(message);
    messages[id].liked = !messages[id].liked;
    if (messages[id].liked) messages[id].likes = messages[id].likes + 1;
    else messages[id].likes = messages[id].likes - 1;
    this.setState({ messages });
    try {
      await updateMessage(messages[id]);
    } catch {
      alert("update failed...")
    }

  };

  handleReport = async (message) => {
    const originalMessages = this.state.messages;
    // update likes
    const messages = [...this.state.messages];
    const id = messages.indexOf(message);
    messages[id].reported = messages[id].reported + 1;
    messages[id].deleted = true;
    this.setState({ messages });
    try {
      await updateMessage(messages[id]);
    } catch {
      alert("update failed...")
    }
  }

  handleReportReply = async (message) => {
    const originalMessages = this.state.messages;
    // update likes
    const messages = [...this.state.messages];
    const id = messages.indexOf(message);
    messages[id].reported = messages[id].reported + 1;
    messages[id].deleted = true;
    this.setState({ messages });
    try {
      await updateMessage(messages[id]);
    } catch {
      alert("update failed...")
    }
  }

  handleDelete = async (mes) => {
    const originalMessages = this.state.messages;
    const messages = this.state.messages.filter((m) => m._id != mes._id);
    try {
      await deleteMessage(mes);
    } catch (e) {
      alert("delete failed...");
      if (e.response && e.response.status === 404) {
        alert("404 message does not exist");
      }
      this.setState(messages);
    }
  };

  render() {
    /* sticky navbar
    
    let navbar = document.getElementById("main-nav");
    let navPos = navbar.getBoundingClientRect().top;

    let timVine = document.getElementById("tim-vine");

    window.addEventListener("scroll", e => {
    let viewportHeight = window.innerHeight;
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
        navbar.classList.add('sticky');
        header.classList.add('navbarOffsetMargin');
    } else {
        navbar.classList.remove('sticky');
        header.classList.remove('navbarOffsetMargin');
        }
    });*/

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
                  replies={this.state.replies}
                  handleLike={(m, t) => this.handleLike(m, t)}
                  handleReport={(m, t)=>this.handleReport(m, t)}
                  handleSubmit={(m, t)=>this.handleSubmit(m, t)}
                />
              }
            />
            <Route
              path="/Compose"
              element={
                <MessageCompose
                  messages={this.state.messages}
                  handleLike={(m, t) => this.handleLike(m,t)}
                  handleSubmit={(m, t) => this.handleSubmit(m, t)}
                />
              }
            />
            <Route
              path="/MessageBoard"
              element={
                <MessageBoard
                  messages={this.state.messages}
                  handleLike={(m, t) => this.handleLike(m, t)}
                  handleReport={(m, t) => this.handleDelete(m, t)}
                />
              }
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route
              path="/"
              element={
                <MessageBoard
                  messages={this.state.messages}
                  handleLike={(m, t) => this.handleLike(m, t)}
                  handleReport={(m, t) => this.handleDelete(m, t)}
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
