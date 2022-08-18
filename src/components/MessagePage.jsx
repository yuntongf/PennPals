import { useParams } from "react-router-dom";
import MessageBoard from "./MessageBoard";
import OffCanvas from "./BoxComponents/OffCanvas";

const MessagePage = ({ messages, handleLike, handleReport, handleReply }) => {
   const { id } = useParams();
   console.log(messages);
   //const message = messages[id];
   console.log(messages.filter((m) => m._id == id));

   return (
      <div>
         <div className="col-9 d-flex justify-content-end">
            <span className="col-12 ms-0">
               <MessageBoard messages={messages} handleLike={handleLike} handleReport={handleReport} />
            </span>
            <span className="ms-0 pe-5 ps-0">
               <OffCanvas messages={messages.filter((m) => m._id == id)} handleLike={handleLike} handleReport={handleReport} handleReply={handleReply} />
            </span>
         </div>
      </div>
   );
}

export default MessagePage;