import { React, Component } from 'react';

class ComposePanel extends Component {
   state = {
      message: {
         author: this.props.user.username,
         title: "",
         content: "",
         likes: 0,
         reported: false,
         liked: false,
         read: false,
         deleted: false
      }
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
                  <div className="mt-4 mb-2 form-group">
                     <textarea onChange={this.handleTitleChange} className="form-control" type="textarea" id="subject" placeholder="Title" maxlength="6000" rows="3"></textarea>
                  </div>
                  <div className="mt-4 mb-4 form-group">
                     <textarea onChange={this.handleContentChange} className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="60000" rows="15"></textarea>
                  </div>
                  <btn onClick={() => this.props.handleSubmit(this.state.message)} id="submit" name="submit" className="btn btn-outline-success col-12">
                     <div className="text-decoration-none">
                        Post!
                     </div>
                  </btn>
               </form>
            </div>
         </div>
      );
   }
}

export default ComposePanel;