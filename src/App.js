import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./components/large components/NavBar";
import Logout from "./components/common/Logout";
import MessageCompose from "./components/pages/MessageCompose";
import MessagesContext from "./components/contexts/MessagesContext";
import NotFound from "./components/pages/NotFound";
import MessageReply from "./components/pages/MessageReply";
import MessageBoard from "./components/large components/MessageBoard";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import { getMessages, addMessage, updateMessage, deleteMessage} from "./services/MessageService";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "./components/contexts/UserContexts";
import getDate from './components/common/Date';
class App extends Component {
  state = {
    messages: [],
    loggedIn:true
  };

  async componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({user});
    } catch (ex) {
        toast('🦄 Welcome! Please register for an account or log in.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }); 
    }
    const { data:message} = await getMessages();
    this.setState({messages:message});
  }

  handleSubmit = async (message) => {
    message.date = getDate();
    const originalMessages = this.state.messages;
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
      //alert("add failed...");
      this.setState(originalMessages);
    }
    
  } 


  handleReply = async (message) => {
    if (!message) return;
    const originalMessages = {...this.state.messages};
    let msgs = [...this.state.messages];
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
      await updateMessage(message);
    } catch {
      //alert("add reply failed...");
      this.setState(originalMessages);
    }
  }

  handleLike = async (message) => {
    if (!message) return;
    else {
    const originalMessages = this.state.messages;
    const messages = [...this.state.messages];
    const [m] = messages.filter(me => me._id === message._id);
    m.replies = message.replies;
    this.setState({ messages });
    try {
      await updateMessage(m);
    } catch {
      //alert("update failed...")
    }
  }

  };

  handleReport = async (m) => {
    if (!m) return;
    const originalMessages = this.state.messages;
    const messages = [...this.state.messages];
    const id = messages.indexOf(m);
    messages[id].replies = m.replies;
    this.setState({ messages });
    try {
      await updateMessage(messages[id]);
    } catch {
      //alert("update failed...")
      this.setState(originalMessages);
    }
  }

  handleDelete = async (mes) => {
    if (!mes) return;
    const originalMessages = this.state.messages;
    const messages = this.state.messages.filter((m) => m._id !== mes._id);
    this.setState({messages});
    try {
      toast.success('🦄 Post deleted!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      await deleteMessage(mes);
    } catch (e) {
      //alert("delete failed...");
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
        <NavBar user={this.state.user}/>
        <div className="content">
          <Routes>
            <Route
              path="/MessageBoard/:id"
              element={this.state.user ? 
                <UserContext.Provider value={this.state.user}>
                <UserContext.Provider value={this.state.user}>
                <MessagesContext.Provider value={[(m) => this.handleLike(m), (m)=>this.handleReport(m), (m)=>this.handleReply(m), (m) => this.handleDelete(m)]}>
                <MessageReply
                  messages={this.state.messages}
                  handleLike={(m) => this.handleLike(m)}
                  handleReport={(m)=>this.handleReport(m)}
                  handleReply={(m)=>this.handleReply(m)}
                  handleDelete={(m) => this.handleDelete(m)}
                />
                </MessagesContext.Provider>
                </UserContext.Provider>
                </UserContext.Provider> :
                <LoginPage messages={this.state.messages}/>
              }
            />
            <Route
              path="/Compose"
              element={this.state.user ? 
                <UserContext.Provider value={this.state.user}>
                <MessageCompose
                  messages={this.state.messages}
                  handleLike={(m) => this.handleLike(m)}
                  handleSubmit={(m) => this.handleSubmit(m)}
                  handleReport={(m)=>this.handleReport(m)}
                  handleDelete={(m) => this.handleDelete(m)}
                />
                </UserContext.Provider> : 
                <LoginPage messages={this.state.messages}/>
              }
            />
            <Route
              path="/Register"
              element={
                <MessagesContext.Provider value={[(m) => this.handleLike(m), (m)=>this.handleReport(m), (m)=>this.handleReply(m), (m) => this.handleDelete(m)]}>
                <RegisterPage messages={this.state.messages}/>
                </MessagesContext.Provider>
              }
            />
            <Route
              path="/Login"
              element={
                <MessagesContext.Provider value={[(m) => this.handleLike(m), (m)=>this.handleReport(m), (m)=>this.handleReply(m), (m) => this.handleDelete(m)]}>
                <LoginPage messages={this.state.messages}/>
                </MessagesContext.Provider>
              }
            />
            <Route
              path="/Logout"
              element={<Logout/>}
            />
            <Route
              path="/MessageBoard"
              element={
                <UserContext.Provider value={this.state.user}>
                <MessageBoard
                  messages={this.state.messages}
                  handleLike={(m) => this.handleLike(m)}
                  handleReport={(m) => this.handleReport(m)}
                  handleDelete={(m) => this.handleDelete(m)}
                />
                </UserContext.Provider>
              }
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route
              path="/"
              element={
                <Navigate to="/MessageBoard" replace />
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
