import Like from "./BoxComponents/Like";
import Hd from "./BoxComponents/Hd";
import Dropdown from "./BoxComponents/Dropdown";
//import {handleClick} from "./MessageBoard";


const MessageBoxDetail = ({message}) => {
   return (
      <a className="list-group-item list-group-item-action p-3 flex-column align-items-start">
         <Hd message={message}/>
         <p className="mb-4 mt-4"> {message.content} </p>
         <Like message={message}/>
         <Dropdown message={message}/>
         <div><small> double click to like </small></div>
      </a>
      )
}

export default MessageBoxDetail;