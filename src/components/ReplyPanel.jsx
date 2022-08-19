import ReplyWritingBoard from "./BoxComponents/ReplyWritingBoard";
import ReplyDisplayBoard from './BoxComponents/ReplyDisplayBoard';

const ReplyPanel = ({ message, handleLike, handleReport, handleReply }) => {
   return (
      <div className="d-flex justify-content-between">
         <div className="list-group col-12">
            <div className="list-group-item list-group-item-action">
               <ReplyDisplayBoard message={message} handleLike={handleLike} handleReport={handleReport} />
            </div>
            <div className="list-group-item list-group-item-action p-3 flex-column align-items-start">
               <ReplyWritingBoard message={message} handleReply={handleReply} />
            </div>
         </div>
      </div>
   );
}

export default ReplyPanel;