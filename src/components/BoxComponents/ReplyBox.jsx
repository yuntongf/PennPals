import ReportButton from "./ReportButton";
import Like from "./Like";

const ReplyBox = ({ reply, handleLike, handleReport }) => {
   let classesLike = "btn btn-sm me-2 col-1 btn-outline-light";
   if (reply.liked) classesLike = "btn btn-sm me-2 btn-outline-danger";
   return (
      <div class="card col-12 bg-transparent border-0">
         <div clasName="d-flex justify-content-end">
            <h4 className="col-6 mt-3">
               <span>{reply.author}</span>
            </h4>
            <div className="col-12 d-flex justify-content-between">
               <div className="mb-2 p-0">
                  <p className="mb-1">{reply.content}</p>
               </div>
               <div clasName="m-1">
                  <btn onClick={() => handleLike(reply, 'r')} className={classesLike} style={{ width: 45, color: "#f05f61" }}>
                     <i>&#x2665;</i> {reply.likes}
                  </btn>
                  <btn className="btn btn-sm btn-outline-light" onClick={() => handleReport(reply, 'r')}>
                     <a style={{ color: "#607D8B" }} className="text-decoration-none text-color-none" href="/MessageBoard"><i>&#x2193;</i></a>
                  </btn>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ReplyBox;