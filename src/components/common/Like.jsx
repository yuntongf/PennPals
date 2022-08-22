
const Like = ({ message, handleLike }) => {
   let classesLike = "btn mb-2 me-2 col-1 btn-outline-dark";
   const handleLikeMessage = () => {
      let msg = message;
      msg.liked = !msg.liked;
      if (msg.liked) msg.likes++;
      else msg.likes--;
      return handleLike(msg);
   }
   if (message.liked) classesLike = "btn me-2 mb-2 btn-outline-danger";
   return (
      <btn onClick={handleLikeMessage} className={classesLike} style={{ width: 70 }}>
         <i>&#x2665;</i> {message.likes}
      </btn>
   );
}

export default Like;