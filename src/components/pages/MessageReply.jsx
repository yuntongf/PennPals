import { useParams } from "react-router-dom";
import MessageBoard from "../large components/MessageBoard";
import OffCanvas from "../large components/OffCanvas";
import MessagesContext from "../contexts/MessagesContext";
import React, { Component, useEffect, useContext, useState } from "react";
import { getMessage, getMessages } from "../../services/MessageService";

const MessageReply = ({ messages, handleLike, handleReport, handleReply, handleDelete }) => {
   const { id } = useParams();
   let [message] = messages.filter((m) => m._id === id);
   /*const [messages, setMessages] = useState(null);
   const [message, setMessage] = useState(null);
   //[handleLike, handleReport, handleReply, handleDelete] = useContext(MessagesContext);
   useEffect(() => {
      async function getMes() {
         const { data: messages } = await getMessages();
         setMessages(messages);
         const { data: message } = await getMessage(id);
         setMessage(message);
      }
      if (message === null) {
         getMes();
      }
   }, []);
   */
   return (
      <div>
         <div className="col-9 d-flex justify-content-end">
            <span className="col-12 ms-0">
               <MessageBoard messages={messages} handleLike={handleLike} handleReport={handleReport} handleDelete={handleDelete} />
            </span>
            <span className="ms-0 pe-5 ps-0">
               <OffCanvas message={message} handleLike={handleLike} handleReport={handleReport} handleReply={handleReply} />
            </span>
         </div>
      </div>
   );
}

export default MessageReply;