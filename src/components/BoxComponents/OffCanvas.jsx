import BackButton from "./BackButton";
import ReplyPanel from "./ReplyPanel";
import Like from "./Like";

const OffCanvas = ({ message, replies, handleLike, handleReport, handleSubmit }) => {
   console.log(message);
   return (
      <div className="offcanvas show offcanvas-end border-0 bg-transparent p-3" style={{ width: 580 }} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="reply" aria-labelledby="offcanvasScrollingLabel">
         <div className="offcanvas-header mt-5" >
            <h1 className="me-4 mt-5"> {message[0].title} </h1>
            <h5 className="me-4 mt-5" style={{ height: 5 }}> Aug 15 </h5>
         </div>
         <div className="offcanvas-body">
            <div className="m-0">
               <ReplyPanel replies={replies} message={message[0]} handleLike={handleLike} handleReport={handleReport} handleSubmit={handleSubmit} />
            </div>
            <div className="mb-2 mt-4">
               <BackButton />
            </div>
         </div>
      </div>
   );
}

export default OffCanvas;