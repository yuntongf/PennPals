import MessageBoxDetail from "../MessageBoxDetail";
import ReplyWritingBox from "../BoxComponents/ReplyWritingBox";
import ReplyDisplayBox from "../BoxComponents/ReplyDisplayBox";
import BackButton from "../BoxComponents/BackButton";

const ReplyPanel = ({message}) => {
   return ( 
      <body className="d-flex justify-content-around">
         <div className="list-group col-12">
            <MessageBoxDetail message = {message}/>
            <div className="list-group-item list-group-item-action p-3 flex-column align-items-start">
               <ReplyDisplayBox/>
            </div>
            <div className="list-group-item list-group-item-action p-3 flex-column align-items-start">
               <ReplyWritingBox/>
            </div>
            
         </div>
      </body>
    );
}
 
export default ReplyPanel;