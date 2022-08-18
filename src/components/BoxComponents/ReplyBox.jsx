import ReportButton from "./ReportButton";
import Like from "./Like";

const ReplyBox = ({ reply, handleLike, handleReport }) => {
   let classesLike = "btn btn-sm me-2 col-1 btn-outline-dark";
   if (reply.liked) classesLike = "btn btn-sm me-2 btn-outline-danger";
   return (
      <div class="card m-2 col-12 bg-transparent border-0">
         <div clasName="d-flex justify-content-end">
            <h4 className="col-6 mt-3">
               <span>{reply.author}</span>
            </h4>
            <div className="mb-3">
               {reply.content}
            </div>
            <div clasName="m-2">
               <btn onClick={() => handleLike(reply, 'r')} className={classesLike} style={{ width: 60 }}>
                  <i>&#x2665;</i> {reply.likes}
               </btn>
               <btn className="btn btn-sm btn-outline-light" onClick={() => handleReport(reply, 'r')}>
                  <a style={{ color: "#F57774" }} className="text-decoration-none text-color-none" href="/MessageBoard">Report</a>
               </btn>
            </div>
         </div>
      </div>
   );
}

export default ReplyBox;