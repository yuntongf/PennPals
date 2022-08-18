import ReplyBox from "./ReplyBox";
const ReplyDisplayBoard = ({ replies, handleLike, handleReport }) => {
   if (replies.length == 0) {
      return (
         <div className="mt-3">
            <p>You can be the first to reply!</p>
         </div>);
   } else {
      return (
         <div className="list-group ms-2 mt-0">
            {replies.map(reply => (reply.deleted ? <small key={reply._id}></small> :
               <ReplyBox key={reply._id} reply={reply}
                  handleLike={handleLike} handleReport={handleReport}>
               </ReplyBox>
            ))}
         </div>
      );
   }
}

export default ReplyDisplayBoard;