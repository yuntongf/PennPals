import MessageBoxDetail from "./MessageBoxDetail";
import ReplyWritingBox from "./BoxComponents/ReplyWritingBox";
import ReplyDisplayBox from "./BoxComponents/ReplyDisplayBox";
import BackButton from "./BoxComponents/BackButton";
import {useParams} from "react-router-dom";
import NavBar from "./NavBar";
import MessageBoard from "./MessageBoard";
import ReplyPanel from "./BoxComponents/ReplyPanel"
import { Link } from "react-router-dom";

const MessagePage = ({messages, handleLike}) => {
   const {id} = useParams();
   const message = messages[id];
   return (
      <div>
         <div className="row g-0">
            <div className="col-8 d-flex justify-content-end">
               <div className="col-12">
                  <MessageBoard messages={messages} handleLike={handleLike} />
               </div>
            </div>

            <ReplyPanel message = {message}/>
         </div>

         <div class="offcanvas show offcanvas-end border-0 bg-transparent p-3" style={{width:550}} data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="reply" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
               <BackButton/>
            </div>
            <div class="offcanvas-body w-500">
               <ReplyPanel message={message}/>
            </div>
         </div>
      </div>
   );
}

export default MessagePage;