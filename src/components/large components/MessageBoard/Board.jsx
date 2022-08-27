import MessageBox from './MessageBox';

const Board = ({ messages, handleLike, handleReport, handleDelete }) => {
   if (!messages) return;
   else {
      const { length: count } = messages;
      messages = messages.sort((a, b) => (a._id).localeCompare(b._id));
      if (count === 0) {
         return (
            <div>
               <div className='m-5'></div>
               <div className='m-5'></div>
               <div className='m-5'></div>
               <h5 className='m-5'>

               </h5>
            </div>);
      } else {
         return (
            <div className="list-group mt-5 flex-column-reverse">
               {messages.map(message => (message.deleted ? <small key={message._id}></small> :
                  <MessageBox key={message.author} message={message}
                     handleLike={handleLike} handleReport={handleReport} handleDelete={handleDelete}>
                  </MessageBox>
               ))}
            </div>
         );
      }
   }
}

export default Board;