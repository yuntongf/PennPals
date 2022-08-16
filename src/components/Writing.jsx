import React, { Component } from 'react';
import {getMessages} from "../apis/fake_mes_service";

class Writing extends Component {
    state = { 
        messages : getMessages(),
        write: false,
    } 

    handleClick = (event) => {
        //console.log(event.target.dataset.remove);
        if (event.detail === 2) {
            //const _id = event.target.dataset.remove;
            this.setState({
                isClickedLike : !this.state.isClickedLike
            }); 
            console.log(this.state.isClickedLike);
        }
    }

    render() {
        const {write} = this.state;
        if (write === false) {
            return (
                <form className="card fixed-bottom m-3" >
                    <div className="card-body flex-column">
                        <div className="form-group col-9 mb-1 float-left">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Username">
                            </input>
                            <small className="form-text text-muted"> Please do not enter your real name</small>
                        </div>

                        <div className="form-group col-9 mb-1">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
                            </input>
                        </div>

                        <div className="form-check mb-1">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1">
                            </input>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me!</label>
                        </div>

                        <button type="submit" className="col-1 btn btn-primary mt-1">Login</button>
                    </div>
            </form>
            )
        } else {
            return (
                <p> now you can write </p>
            )
        }
    }
}

export default Writing;