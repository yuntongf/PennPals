import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
class ReplyWritingBoard extends Component {
   state = {
      reply: {
         author: this.props.user.username,
         content: "",
         likes: 0,
         reported: false,
         deleted: false
      }
   }

   handleContentChange = (event) => {
      let reply = this.state.reply;
      reply.content = event.target.value;
      this.setState({ reply });
   }

   handleComment = () => {
      let msg = { ...this.props.message };
      msg.replies = [...msg.replies, this.state.reply];
      return this.props.handleReply(msg);
   }

   render() {

      return (
         <div>
            <div className="form-area">
               <form role="form">
                  {/*<h2 className="mt-3" htmlFor="title"> Your Comment </h2>*/}
                  <div className="m-2 mt-1 mb-0 ps-1 form-group">
                     <h5>{`${this.props.user.username}'s comment:`}</h5>
                  </div>

                  <div className="mt-3 m-2 mb-3 form-group">
                     <textarea onChange={this.handleContentChange} className="form-control" type="textarea" id="subject" placeholder="Your comment" maxlength="140" rows="7"></textarea>
                  </div>
                  <btn onClick={this.handleComment} id="submit" name="submit" className="m-2 btn btn-outline-primary pull-right">
                     <div className="text-decoration-none">
                        Comment
                     </div>
                  </btn>


               </form>
            </div>
         </div>
      );
   }
}

export default ReplyWritingBoard;