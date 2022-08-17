import MessageBox from '../MessageBox';

const Board = ({messages, handleLike}) => {
   const {length : count} = messages;
   if (count === 0) {
      return (<p>No messages at the moment...</p>);
   } else {
      return (
         <div className="list-group mt-4">
            {messages.map(message=> (message.deleted ? <small key={message._id}></small> :
               <MessageBox key={message._id} message={message} id={messages.indexOf(message)}
               handleLike={handleLike}> 
               </MessageBox>
            ))}
         </div>
      );
   }
}

export default Board;