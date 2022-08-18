// draws each message box
import Like from "./Like";
import Hd from "./Hd";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import ReportButton from "./ReportButton";

const MessageBox = ({ handleLike, handleReport, message, id }) => {
   let classesRead = "card list-group-item list-group-item-action m-2 p-4 flex-column align-items-start";
   if (message.read) classesRead += " bg-gray bg-darken-sm"
   return (
      <div className={classesRead}>
         <Link to={`/MessageBoard/${message._id}`} className="bg-transparent border-0 card text-decoration-none text-reset">
            <Hd message={message} />
            <small className="pull-right"> Aug 15 </small>
            <p className="mt-3 mb-5"> {message.content} </p>
         </Link>

         <Like message={message} handleLike={handleLike} />
         <Link to={`/MessageBoard/${message._id}`}>
            <btn className="btn btn-outline-success mb-2" >Reply</btn>
         </Link>

         <div className="col-12 d-flex justify-content-between">
            <div className="mt-1"><small> click to view, double click to like, hold to reply - not implemented </small></div>
            <ReportButton className="mt-1" message={message} handleReport={handleReport} />
         </div>
      </div>
   );
}

export default MessageBox;