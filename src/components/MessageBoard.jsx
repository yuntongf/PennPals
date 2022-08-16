import React, { Component } from 'react';
import {getMessages} from "../apis/fake_mes_service";
import MessageBox from "./MessageBox";

class MessageBoard extends Component {

    state = { 
        // page : the page that we are on
        messages : getMessages()
    } 

    handleClick = (event, message) => {
        // update likes
        const messages = [...this.state.messages];
        const id = messages.indexOf(message);
        if (event.detail == 2) {
            messages[id].liked = !messages[id].liked;
            this.setState({messages});
        } else if (event.detail == 1) {
            messages[id].read = true;
            this.setState({messages});
        }
    }


    render() { 
        // TODO: count > 10 then go to next page
        const {length : count} = this.state.messages;
        if (count === 0) {
            return <p>No messages at the moment...</p>;
        } else {
            return (
            <main>
                {/*<p> Showing {(count > 10 ? 10 : count)} out of {count}</p>*/}
                <div className="list-group col-6 m-5">
                    {this.state.messages.map(message=> (message.deleted ? <small key={message._id}></small> :
                        <MessageBox key={message._id} message={message} handleClick={this.handleClick}> 
                        </MessageBox>
                    ))
                    }
                </div>
            </main>
            );
        }
    }
}
 
export default MessageBoard;