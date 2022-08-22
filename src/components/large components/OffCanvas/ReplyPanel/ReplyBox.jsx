const ReplyBox = ({ message, reply, handleLike, handleReport }) => {
   let classesLike = "btn btn-sm me-2 col-1 btn-outline-light";
   if (reply.liked) classesLike = "btn btn-sm me-2 btn-outline-danger";
   const repliesOther = message.replies.filter((r) => r._id != reply._id);

   const handleLikeReply = () => {
      let r = reply;
      r.liked = !reply.liked
      if (r.liked) r.likes++;
      else r.likes--;
      message.replies = [...repliesOther, r];
      return handleLike(message);
   }

   const handleReportReply = () => {
      let r = reply;
      reply.reported++;
      message.replies = [...repliesOther, r];
      return handleReport(message);
   }

   const handleDeleteReply = () => {
      message.replies = message.replies.filter((r) => (r !== reply));
      return handleLike(message);
   }

   return (
      <div class="card affix col-12 bg-transparent border-0">
         <div clasName="d-flex justify-content-end">
            <h4 className="col-6 mt-3">
               <span>{reply.author}</span>
            </h4>
            <div className="col-12 d-flex justify-content-between">
               <div className="mb-2 p-0">
                  <p className="mb-1">{reply.content}</p>
               </div>
               <div clasName="m-1">
                  <btn onClick={handleLikeReply} className={classesLike} style={{ width: 45, color: "#f05f61" }}>
                     <i>&#x2665;</i> {reply.likes}
                  </btn>
                  <btn className="btn btn-sm btn-outline-light" onClick={handleReportReply}>
                     <div style={{ color: "#607D8B" }} className="text-decoration-none text-color-none" ><i>&#x2193;</i>{reply.reported}</div>
                  </btn>
                  <btn className="btn btn-sm btn-outline-light" onClick={handleDeleteReply}>
                     <div style={{ color: "#607D8B" }} className="text-decoration-none text-color-none" >X</div>
                  </btn>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ReplyBox;