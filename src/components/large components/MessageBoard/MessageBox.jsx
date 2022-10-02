// draws each message box
import Like from "../../common/Like";
import Hd from "../../common/Hd";
import { Link } from "react-router-dom";
import ReportButton from "../../common/ReportButton";
import DeleteButton from "../../common/DeleteButton";
import { useContext } from 'react';
import UserContext from '../../../contexts/UserContexts';

const MessageBox = ({ handleLike, handleDelete, handleReport, message }) => {
   let classesRead = "card list-group-item list-group-item-action m-2 p-4 flex-column align-items-start";
   if (message.read) classesRead += " bg-gray bg-darken-sm"
   const user = useContext(UserContext);
   return (
      <div className={classesRead}>
         <Link to={`/MessageBoard/${message._id}`} className="bg-transparent border-0 card text-decoration-none text-reset">
            <div className="col-12 d-flex justify-content-between">
               <Hd message={message} />
               <small className="me-3 mt-2"> {message.date ? message.date : "Aug 15"} </small>
            </div>
            <p className="mt-3 mb-5"> {message.content} </p>
         </Link>

         <Like message={message} handleLike={handleLike} />
         <Link to={`/MessageBoard/${message._id}`}>
            <btn className="btn btn-outline-success mb-2" >Comment</btn>
         </Link>

         <div className="col-12 d-flex justify-content-between">
            <div className="mt-1"><small> click to view comments </small></div>
            <div>
               {/*<EditButton className="mt-1" message={message} handleEdit={handleEdit} />*/}
               <ReportButton className="mt-1" message={message} handleReport={handleReport} />
               {user ? user.username === 'admin' && <DeleteButton className="mt-1" message={message} handleDelete={handleDelete} /> : null}
            </div>
         </div>
      </div>
   );
}

export default MessageBox;