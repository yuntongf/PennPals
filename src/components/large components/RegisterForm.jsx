import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import BackButton from "../common/BackButton";
import { toast } from 'react-toastify';
import { register } from '../../services/UserService';

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .min(3)
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
    try {
      await register(this.state.data);
      toast.success('🦄 Auto logged in... You are all set!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      window.location = "/MessageBoard";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error('Registration failed...', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <div>
          <div className="mt-5 d-flex justify-content-center">
            <div className="col-6">
              <h2 className="mt-5 mb-5">Register</h2>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("password", "Password", "password")}
                <div className="mt-5 d-flex justify-content-between">
                  <btn onClick={() => this.doSubmit()} className="btn btn-primary">
                    Register
                  </btn>
                  <BackButton />
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
