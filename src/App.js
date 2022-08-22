import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./components/large components/NavBar";
import NotFound from "./components/pages/NotFound";
import MessageReply from "./components/pages/MessageReply";
import MessageBoard from "./components/large components/MessageBoard";
import MessageCompose from "./components/pages/MessageCompose";
import { getMessages, addMessage, updateMessage, deleteMessage} from "./services/MessageService";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";


class App extends Component {
  state = {
    messages: [],
    replies: []
  };

  async componentDidMount() {
    const { data:message} = await getMessages();
    this.setState({messages:message});
  }

  handleSubmit = async (message) => {
    const originalMessages = this.state.messages;
    let msgs = [message, ...this.state.messages];
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
    } catch {
      alert("add failed...");
      this.setState(originalMessages);
    }
    
  } 


  handleReply = async (message) => {
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
    try {
      const {data} = await updateMessage(message);
      
    } catch {
      alert("add reply failed...");
      this.setState(originalMessages);
    }
  }

  handleLike = async (message) => {
    const originalMessages = this.state.messages;
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
                <MessageReply
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
