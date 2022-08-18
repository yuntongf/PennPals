import MessageBoxDetail from "./MessageBoxDetail";
import ReplyWritingBox from "../BoxComponents/ReplyWritingBox";
import ReplyDisplayBox from "../BoxComponents/ReplyDisplayBox";
import ReplyBoard from '../ReplyBoard';

const ReplyPanel = ({ message, replies, handleLike, handleReport, handleSubmit }) => {

   return (
      <div className="d-flex justify-content-between">
         <div className="list-group col-12">
            <MessageBoxDetail message={message} />
            <div className="list-group-item list-group-item-action p-3 flex-column align-items-start">
               <ReplyBoard replies={replies} handleLike={handleLike} handleReport={handleReport} handleSubmit={handleSubmit} />
            </div>
            <div className="list-group-item list-group-item-action p-3 flex-column align-items-start">
               <ReplyWritingBox handleSubmit={handleSubmit} />
            </div>
         </div>
      </div>
   );
}

export default ReplyPanel;