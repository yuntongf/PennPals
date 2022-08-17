// draws each message box
import Like from "./BoxComponents/Like";
import Hd from "./BoxComponents/Hd";
import Dropdown from "./BoxComponents/Dropdown";
import {Link, useNavigate} from "react-router-dom";
import {Popover} from 'bootstrap';
import ReplyPanel from "./BoxComponents/ReplyPanel";

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl))

const MessageBox = ({handleLike, message, id}) => {
   let classesRead = "card list-group-item list-group-item-action m-2 p-4 flex-column align-items-start";
   if (message.read) classesRead += " bg-gray bg-darken-sm"
   return (
      <div className={classesRead}>
      <Link to={`/MessageBoard/${id}`} class="bg-transparent border-0 card text-decoration-none text-reset">
         <Hd message={message}/>
         <small class="pull-right"> Aug 15 </small>
         <p className="mt-3 mb-5"> {message.content} </p>
      </Link>

      <Like message={message} handleLike={handleLike}/>
      <Dropdown message={message}/>

      <Link to={`/MessageBoard/${id}`}>
         <btn class="btn btn-outline-success mb-2" >Reply</btn>
      </Link>

         <div><small> single click to view, double click to like, hold to reply </small></div>
      </div>
   );
}
 
export default MessageBox;