import ReplyBox from "./BoxComponents/ReplyBox";
const ReplyBoard = ({ replies, handleLike, handleReport, handleSubmit }) => {
   console.log(replies);
   return (
      <div className="list-group mt-4">
         {replies.map(reply => (reply.deleted ? <small key={reply._id}></small> :
            <ReplyBox key={reply._id} reply={reply}
               handleLike={handleLike} handleReport={handleReport} handleSubmit={handleSubmit}>
            </ReplyBox>
         ))}
      </div>
   );
}

export default ReplyBoard;