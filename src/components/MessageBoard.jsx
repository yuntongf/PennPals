import React, { Component } from 'react';
import MessageBox from "./BoxComponents/MessageBox";
import NavBar from './NavBar';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import Board from './BoxComponents/Board'

const MessageBoard = ({ messages, handleLike, handleReport }) => {
    return (
        <div className="col-12 d-flex justify-content-center me-5 pe-5">
            <div className="col-9">
                <Board messages={messages} handleLike={handleLike} handleReport={handleReport} />
            </div>
        </div>
    );
}

export default MessageBoard;