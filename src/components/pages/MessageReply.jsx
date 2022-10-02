import { useParams } from "react-router-dom";
import MessageBoard from "../large components/MessageBoard/MessageBoard";
import OffCanvas from "../large components/OffCanvas/OffCanvas";
import BackButton from "../common/BackButton";
import ReplyPanel from "../large components/OffCanvas/ReplyPanel/ReplyPanel";

const MessageReply = ({ messages, handleLike, handleReport, handleReply, handleDelete }) => {
   const { id } = useParams();
   let [message] = messages.filter((m) => m._id === id);
   return (
      <div>
         <div className="col-12 d-flex justify-content-start">
            <div className="d-lg-none col-12">
               <span className="ms-5 pe-5 ps-5">
                  <div className="mb-0 me-4 mt-2 d-flex justify-content-end">
                     <div className="d-flex justify-content-end" ><BackButton /></div>
                  </div>
                  <div className="mt-5 pe-5 ps-5" >
                     <h1 className="me-4 ms-0 mb-0 "> {message.title} </h1>
                  </div>
                  <div className="pe-5 ps-5">
                     <div className="m-0">
                        <ReplyPanel message={message} handleLike={handleLike} handleReport={handleReport} handleReply={handleReply} />
                     </div>
                  </div>

               </span>
            </div>
            <div className="col-12 d-none d-lg-block">
               <div className="ms-0 d-flex justify-content-start" style={{ width: "65%" }}>
                  <MessageBoard messages={messages} handleLike={handleLike} handleReport={handleReport} handleDelete={handleDelete} />
               </div>
               <span className="ms-0 pe-5 ps-0">
                  <OffCanvas message={message} handleLike={handleLike} handleReport={handleReport} handleReply={handleReply} />
               </span>
            </div>
         </div>
      </div>
   );
}

export default MessageReply;