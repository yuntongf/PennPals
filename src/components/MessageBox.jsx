// draws each message box

const MessageBox = ({handleClick, message}) => {
   return (
      <a href="#" onClick={() => handleClick(message._id)} className="list-group-item list-group-item-action p-3 flex-column align-items-start">
         <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1"> {message.title} </h5>
            <small > Aug 15 </small>
         </div>

         <p className="mb-1"> {message.content} </p>

         <btn className="btn btn-outline-secondary btn-sm" > 
            <i>&#x2665;</i> {message.isClickedLike ? message.likes : 'click to like'}
         </btn>

         <btn className="btn btn-outline-danger m-1 btn-sm" > report </btn>

         <div class="btn-group dropleft position-absolute bottom-0 end-0 m-1">
            <button type="button" class="btn btn-outline-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>

            <div class="dropdown-menu">
               <button class="dropdown-item" type="button">reply</button>
               <button class="dropdown-item" type="button">Something else here</button>
               <button class="dropdown-item btn-outline-danger" type="button">report</button>
            </div>
         </div>

         <div><small> single click to view, double click to like, hold to reply </small></div>
      </a>
   );
}
 
export default MessageBox;