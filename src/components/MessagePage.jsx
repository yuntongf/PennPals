import { useParams } from "react-router-dom";
import MessageBoard from "./MessageBoard";
import OffCanvas from "./BoxComponents/OffCanvas";
import ReplyDisplayBox from "./BoxComponents/ReplyDisplayBox";

const MessagePage = ({ replies, messages, handleLike, handleReport, handleSubmit }) => {
   const { id } = useParams();
   //const message = messages[id];
   console.log(messages.filter((m) => m._id == id));

   return (
      <div>
         <div className="col-8 d-flex justify-content-end">
            <div className="col-12">
               <MessageBoard messages={messages} handleLike={handleLike} handleReport={handleReport} />
            </div>
         </div>
         <OffCanvas replies={replies} message={messages.filter((m) => m._id == id)} handleLike={handleLike} handleReport={handleReport} handleSubmit={handleSubmit} />
      </div>
   );
}

export default MessagePage;