import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import { getUser } from "./services/UserService";
import { toastify, toastifySuccess } from "./services/ToastifyServices";
import { getMessages, addMessage, updateMessage, deleteMessage} from "./services/MessageService";
import NavBar from "./components/large components/NavBar";
import Logout from "./components/common/Logout";
import MessageCompose from "./components/pages/MessageCompose";
import NotFound from "./components/pages/NotFound";
import MessageReply from "./components/pages/MessageReply";
import MessageBoard from "./components/large components/MessageBoard/MessageBoard";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import MessagesContext from "./contexts/MessagesContext";
import UserContext from "./contexts/UserContexts";
class App extends Component {
  state = {
    messages: [],
    loggedIn:true
  };

  async componentDidMount() {
    try {
      const user = getUser();
      this.setState({user});
    } catch (ex) {
        toastify('🦄 Welcome! Please register for an account or log in.'); 
    }
    const { data:messages} = await getMessages();
    for (var message of messages) {
      var count = 0;
      for (var liked of getUser().liked) {
        if (message._id === liked) {
          count ++;
        }
      }
      if (count % 2 === 1) {
        message.liked = true
      } else {
        message.liked = false
      }
    }
    this.setState({messages:messages});
  }

  handleSubmit = async (message) => {
    const originalMessages = this.state.messages;
    try {
      const {data} = await addMessage(message);
      const messages = [data, ...this.state.messages];
      toastifySuccess('🦄 Posted!');
      this.setState({ messages });
    } catch {
      alert("add failed...");
      this.setState(originalMessages);
    }
    
  } 

  handleReply = async (message) => {
    const originalMessages = {...this.state.messages};
    let msgs = [...this.state.messages];
    const mesOther = msgs.filter((m) => (m._id!==message._id));
    msgs = [...mesOther, message];
    this.setState({ messages:msgs });
    toastifySuccess('🦄 Comment posted!')
    try {
      await updateMessage(message, getUser());
    } catch {
      alert("add reply failed...");
      this.setState(originalMessages);
    }
  }

  handleLike = async (message) => {
      const originalMessages = this.state.messages;
      const messages = [...this.state.messages];
      const [m] = messages.filter(me => me._id === message._id);
      m.replies = message.replies;
      this.setState({ messages });
      let user = getUser();
      user.liked.includes(message._id) ?
        user.liked = user.liked.filter((l) => l !== message._id)
        :
        user.liked = [...user.liked, message._id];
    try {
      const res = await updateMessage(m, user);
      localStorage.setItem("token", res.data.token);
    } catch {
      alert("update failed...")
      this.setState(originalMessages);
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
      await updateMessage(messages[id], getUser());
    } catch {
      alert("update failed...")
      this.setState(originalMessages);
    }
  }

  handleDelete = async (mes) => {
    if (!mes) return;
    const originalMessages = this.state.messages;
    const messages = this.state.messages.filter((m) => m._id !== mes._id);
    this.setState({messages});
    try {
      await deleteMessage(mes);
      toastifySuccess('🦄 Post deleted!')
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
        <NavBar user={this.state.user}/>
        <div className="content">
          <Routes>
            <Route
              path="/MessageBoard/:id"
              element={this.state.user ? 
                <UserContext.Provider value={this.state.user}>
                <UserContext.Provider value={this.state.user}>
                <MessagesContext.Provider value={
                  [(m) => this.handleLike(m), 
                  (m)=>this.handleReport(m), 
                  (m)=>this.handleReply(m), 
                  (m) => this.handleDelete(m)]}>
                <MessageReply
                  messages={this.state.messages}
                  handleLike={(m) => this.handleLike(m)}
                  handleReport={(m)=>this.handleReport(m)}
                  handleReply={(m)=>this.handleReply(m)}
                  handleDelete={(m) => this.handleDelete(m)}
                />
                </MessagesContext.Provider>
                </UserContext.Provider>
                </UserContext.Provider> 
                :
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
                <MessagesContext.Provider value={
                  [(m) => this.handleLike(m), 
                  (m)=>this.handleReport(m), 
                  (m)=>this.handleReply(m), 
                  (m) => this.handleDelete(m)]}>
                  <RegisterPage messages={this.state.messages}/>
                </MessagesContext.Provider>
              }
            />
            <Route
              path="/Login"
              element={
                <MessagesContext.Provider value={
                  [(m) => this.handleLike(m), 
                  (m)=>this.handleReport(m), 
                  (m)=>this.handleReply(m),
                  (m) => this.handleDelete(m)]}>
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
            <Route
              path="/liked"
              element={
                <UserContext.Provider value={this.state.user}>
                  <MessageBoard
                  messages={this.state.messages.filter((m) => getUser().liked.includes(m._id))}
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
                <Navigate to={this.state.user ? "/MessageBoard" : "/Login"} replace />
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
