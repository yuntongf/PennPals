// draws each message box
import Like from "./BoxComponents/Like";
import Hd from "./BoxComponents/Hd";
import Dropdown from "./BoxComponents/Dropdown";

const MessageBox = ({handleClick, message}) => {

   let classesRead = "list-group-item list-group-item-action p-3 flex-column align-items-start";
   if (message.read) classesRead += " bg-gray bg-darken-sm"
   return (
      <a href="#" onClick={(event) => handleClick(event, message)} className={classesRead}>
         <Hd message={message}/>
         <p className="mb-1"> {message.content} </p>
         <Like message={message}/>
         <Dropdown message={message}/>
         <btn className="btn btn-outline-success m-1 col-3 btn-sm" > reply </btn>
         <div><small> single click to view, double click to like, hold to reply </small></div>
      </a>
   );
}
 
export default MessageBox;