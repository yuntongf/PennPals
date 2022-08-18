
const MessageBoxDetail = ({ message }) => {

   return (
      <div>
         <btn>
            <body className="list-group-item list-group-item-action p-3 flex-column align-items-start">
               <p className="mb-4 mt-2"> {message.content} </p>
               <div><small> </small></div>
            </body>
         </btn>
      </div>
   )
}

export default MessageBoxDetail;