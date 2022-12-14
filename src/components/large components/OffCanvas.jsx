import BackButton from "../common/BackButton";
import ReplyPanel from "./OffCanvas/ReplyPanel";

const OffCanvas = ({ message, handleLike, handleReport, handleReply }) => {
   if (message === null) return;
   else
      return (
         <div className="col-10 d-flex justify-content-start p-2">
            <div className="offcanvas show offcanvas-end border-0 bg-transparent pe-5" style={{ width: 560 }} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="reply" aria-labelledby="offcanvasScrollingLabel">
               <div className="mb-0 me-4 mt-2 d-flex justify-content-end">
                  <div className="d-flex justify-content-end" style={{ width: 300 }}><BackButton /></div>
               </div>
               <div className="mt-5 offcanvas-header" >
                  <h1 className="me-4 ms-0 mb-0 "> {message.title} </h1>
                  {/*<h5 className="me-4" style={{ height: 5 }}> Aug 15 </h5>*/}
               </div>
               <div className="offcanvas-body">
                  <div className="m-0">
                     <ReplyPanel message={message} handleLike={handleLike} handleReport={handleReport} handleReply={handleReply} />
                  </div>
               </div>
            </div>
         </div>
      );

}

export default OffCanvas;