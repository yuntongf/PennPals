import ComposePanel from "../large components/ComposePanel";
import BackButton from "../common/BackButton";
import MessageBoard from "../large components/MessageBoard";
import UserContext from "../contexts/UserContexts";
import React, { useContext } from "react";
import getDate from '../common/Date';

const MessageCompose = ({ messages, handleLike, handleSubmit, handleReport, handleDelete }) => {
   const user = useContext(UserContext);
   return (
      <div>
         <div className="col-12 d-flex justify-content-end">
            <span className="col-4">
               <MessageBoard messages={messages} handleLike={handleLike} handleReport={handleReport} handleDelete={handleDelete} />
            </span>
         </div>
         <div className="col-10 d-flex justify-content-start">
            <div className="offcanvas show offcanvas-start border-0 bg-transparent ps-5" style={{ width: 960 }} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="reply" aria-labelledby="offcanvasScrollingLabel">
               <div className="mb-0 me-3 mt-2 d-flex justify-content-end">
                  <div className="d-flex justify-content-end" style={{ width: 300 }}><BackButton /></div>
               </div>
               <div className="mt-5 offcanvas-header" >
                  <h1 className="ms-4 ms-0 mb-0 "> {`${user.username}'s Post`}</h1>
                  <h5 className="ms-4" style={{ height: 5 }}> {getDate()} </h5>
               </div>
               <div className="offcanvas-body">
                  <div className="ms-4">
                     <ComposePanel user={user} handleSubmit={handleSubmit} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MessageCompose;