import './App.css';
import MessageBoard from './components/MessageBoard';
import MessagePage from './components/MessagePage';
import {Route, Routes} from 'react-router-dom';
import Writing from './components/Writing';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import axios from "axios";
import React, { Component } from 'react';
import {getMessages} from "./apis/fake_mes_service";
import { Navigate } from 'react-router-dom';

const apiEndPoint = "some link";

class App extends Component {
  state = { 
    // page : the page that we are on
    messages : getMessages(),
  } 

/*  state = {
    messages : []
  }

  async componentDidMount() {
    // async function to initialize data
    // pending > resolved or rejected
    const {data : messages} = await axios.get(apiEndPoint);
    this.setState({messages});
  }
  
  handleAdd = () => {

  }

  handleUpdate = () => {

  }

  handleDelete = () => {

  }*/

  handleLike = (message) => {
    // update likes
    const messages = [...this.state.messages];
    const id = messages.indexOf(message);
    messages[id].liked = !messages[id].liked;
    if (messages[id].liked) messages[id].likes = messages[id].likes + 1;
    else messages[id].likes = messages[id].likes - 1;
    this.setState({messages});
} 

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
    <div style={{overflow:'unset'}}>
      
      <NavBar style={{ position:'fixed', top:0}}/>
      <div className="content">
        <Routes>
          <Route path="/MessageBoard/:id" element = {<MessagePage messages = {this.state.messages} handleLike={(m) => this.handleLike(m)}/>}/>
          <Route path="/MessageBoard" element={<MessageBoard messages={this.state.messages} handleLike={(m) => this.handleLike(m)}/>}/>
          <Route path="/not-found" element={<NotFound/>}/>
          <Route path="/" element = {<MessageBoard messages = {this.state.messages} handleLike={(m) => this.handleLike(m)}/>}/>
          <Route path="*" element = {<Navigate to="/not-found" replace/>}/>
        </Routes>
      </div>
    </div>);
  }
}

export default App;
