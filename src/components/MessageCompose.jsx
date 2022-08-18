import ComposePanel from "./BoxComponents/ComposePanel";
import BackButton from "./BoxComponents/BackButton";
import MessageBoard from "./MessageBoard";

const MessageCompose = ({messages, handleLike, handleSubmit}) => {
   return ( 
      <div>
         <div className="col-8 d-flex justify-content-end">
               <div className="col-12">
                  <MessageBoard messages={messages} handleLike={handleLike} />
               </div>
            </div>
   
         <div className="offcanvas show offcanvas-end border-0 bg-transparent p-3" style={{width:580}} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="reply" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header mt-5" >
               <h1 className="me-4 mt-4"> </h1>
               <h5 className="me-4 mt-3"> Aug 15 </h5>
            </div>
            <div className="offcanvas-body">
               <div className="m-0"> 
                  <ComposePanel handleSubmit={handleSubmit}/>
               </div>
               <div className="mb-2 mt-4">
                  <BackButton/>
               </div>
            </div>
         </div>
      </div>
    );
}
 
export default MessageCompose;