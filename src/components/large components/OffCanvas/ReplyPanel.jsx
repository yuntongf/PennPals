import ReplyWritingBoard from "./ReplyPanel/ReplyWritingBoard";
import ReplyDisplayBoard from './ReplyPanel/ReplyDisplayBoard';
import UserContext from '../../contexts/UserContexts';
import React, { useContext } from "react";

const ReplyPanel = ({ message, handleLike, handleReport, handleReply }) => {
   const user = useContext(UserContext);
   if (message === null) return;
   return (
      <div className="d-flex justify-content-between">
         <div className="list-group col-12">
            <div className="list-group-item list-group-item-action">
               <ReplyDisplayBoard message={message} handleLike={handleLike} handleReport={handleReport} />
            </div>
            <div className="list-group-item list-group-item-action p-3 flex-column align-items-start">
               <ReplyWritingBoard user={user} message={message} handleReply={handleReply} />
            </div>
         </div>
      </div>
   );
}

export default ReplyPanel;