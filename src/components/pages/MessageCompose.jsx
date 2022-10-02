import ComposePanel from "../large components/ComposePanel/ComposePanel";
import BackButton from "../common/BackButton";
import MessageBoard from "../large components/MessageBoard/MessageBoard";
import UserContext from "../../contexts/UserContexts";
import React, { useContext } from "react";
import getDate from '../common/Date';

const MessageCompose = ({ messages, handleLike, handleSubmit, handleReport, handleDelete }) => {
   const user = useContext(UserContext);
   return (
      <div>
         <div className="col-12 d-flex justify-content-around">
            <div className="d-lg-none col-10">

               <div className="mt-3" >
                  <h1 className="ms-4 ms-0 mb-0 "> {`${user.username}'s Post`}</h1>
                  <h5 className="ms-4" style={{ height: 5 }}> {getDate()} </h5>
               </div>
               <div className="">
                  <div className="ms-4">
                     <ComposePanel user={user} handleSubmit={handleSubmit} />
                  </div>
               </div>
            </div>
            <div className="offcanvas show offcanvas-end border-0 bg-transparent pe-5 d-none d-lg-block" style={{ width: "58%" }} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="reply" aria-labelledby="offcanvasScrollingLabel">
               <div className="mb-0 me-3 mt-2 d-flex justify-content-end">
                  <div className="d-flex justify-content-end"><BackButton /></div>
               </div>
               <div className="mt-3 offcanvas-header" >
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
         <div className="col-12 d-flex justify-content-start">
            <span style={{ width: "50%" }} className="d-none d-lg-block">
               <MessageBoard messages={messages} handleLike={handleLike} handleReport={handleReport} handleDelete={handleDelete} />
            </span>
         </div>
      </div>
   );
}

export default MessageCompose;