import { React, Component } from 'react';

class ComposePanel extends Component {
   state = {
      message: {
         author: "",
         title: "",
         content: "",
         likes: 0,
         reported: false,
         liked: false,
         read: false,
         deleted: false
      }
   }

   handleAuthorChange = (event) => {
      const message = this.state.message;
      message.author = event.target.value;
      this.setState({ message });
   }

   handleTitleChange = (event) => {
      const message = this.state.message;
      message.title = event.target.value;
      this.setState({ message });
   }

   handleContentChange = (event) => {
      const message = this.state.message;
      message.content = event.target.value;
      this.setState({ message });
   }

   render() {
      return (
         <div>
            <div className="form-area">
               <form role="form">
                  <h2 className="" htmlFor="title" > Name </h2>

                  <div className="mt-3 mb-1 form-group">
                     <textarea onChange={this.handleAuthorChange} className="form-control" type="textarea" id="subject" placeholder="Anonymous" maxlength="10" rows="1"></textarea>
                  </div>
                  <small className="">For anonymity, please do not enter your real name</small>

                  <h2 className="mt-3" htmlFor="title"> Your Post </h2>
                  <div className="mt-3 mb-2 form-group">
                     <textarea onChange={this.handleTitleChange} className="form-control" type="textarea" id="subject" placeholder="Title" maxlength="150" rows="2"></textarea>
                  </div>
                  <div className="mt-3 mb-3 form-group">
                     <textarea onChange={this.handleContentChange} className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="1000" rows="7"></textarea>
                  </div>
                  <btn onClick={() => this.props.handleSubmit(this.state.message)} id="submit" name="submit" className="btn btn-outline-primary pull-right">
                     <div className="text-decoration-none">
                        Post
                     </div>
                  </btn>
               </form>
            </div>
         </div>
      );
   }
}

export default ComposePanel;