import MessageBox from './MessageBox';

const Board = ({ messages, handleLike, handleReport }) => {
   const { length: count } = messages;
   if (count === 0) {
      return (
         <div>
            <div className='m-5'></div>
            <div className='m-5'></div>
            <div className='m-5'></div>
            <h5 className='m-5'>
               No messages at the moment...
            </h5>
         </div>);
   } else {
      return (
         <div className="list-group mt-4 flex-column-reverse">
            {messages.map(message => (message.deleted ? <small key={message._id}></small> :
               <MessageBox key={message.author} message={message} id={messages.indexOf(message)}
                  handleLike={handleLike} handleReport={handleReport}>
               </MessageBox>
            ))}
         </div>
      );
   }
}

export default Board;