import ReplyBox from "./ReplyBox";
const ReplyDisplayBoard = ({ message, handleLike, handleReport }) => {
   let replies = [...message.replies];
   console.log(replies);
   replies = replies.sort((a, b) => (b.likes - a.likes));
   if (replies.length == 0) {
      return (
         <div className="mt-3">
            <p>You can be the first to reply!</p>
         </div>);
   } else {
      return (
         <div className="list-group ms-2 mt-0">
            {replies.map(reply => (reply.deleted ? <small key={reply._id}></small> :
               <ReplyBox key={reply._id} reply={reply} message={message}
                  handleLike={handleLike} handleReport={handleReport}>
               </ReplyBox>

            ))}
         </div>
      );
   }
}

export default ReplyDisplayBoard;
