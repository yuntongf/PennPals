import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class ReplyWritingBoard extends Component {
   state = {
      message: this.props.message,
      reply: {
         author: "",
         content: "",
         likes: 0,
         reported: false,
         deleted: false
      }
   }

   handleAuthorChange = (event) => {
      let reply = this.state.reply;
      reply.author = event.target.value;
      this.setState({ reply });
      console.log(this.state.reply.author);
   }

   handleContentChange = (event) => {
      let reply = this.state.reply;
      reply.content = event.target.value;
      this.setState({ reply });
      console.log(this.state.reply.content);
   }

   handleSubmit = () => {
      let msg = this.props.message;
      msg.replies = [...this.props.message.replies, this.state.reply];
      this.setState({ message: msg });
      return this.props.handleReply(this.state.message);
   }

   render() {

      return (
         <div>
            <div className="form-area">
               <form role="form">
                  {/*<h2 className="mt-3" htmlFor="title"> Your Comment </h2>*/}
                  <div className="m-2 mt-1 mb-0 form-group">
                     <textarea onChange={this.handleAuthorChange} className="form-control" type="textarea" id="subject" placeholder="Name" maxlength="140" rows="1"></textarea>
                  </div>
                  <small className="ms-2 mt-4 light ">Note: for anonymity, please do not use your real name</small>

                  <div className="mt-3 m-2 mb-3 form-group">
                     <textarea onChange={this.handleContentChange} className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                  </div>
                  <a href="/MessageBoard">
                     <btn onClick={this.handleSubmit} id="submit" name="submit" className="m-2 btn btn-outline-primary pull-right">
                        <div className="text-decoration-none">
                           Comment
                        </div>
                     </btn>
                  </a>
               </form>
            </div>
         </div>
      );
   }
}

export default ReplyWritingBoard;