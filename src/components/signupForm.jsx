import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class SignupForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container mt-5 mx-auto">
        <div className="ml-8">
          <h1 className="text-primary">Register</h1>
          <form onSubmit={this.handleSubmit} className="mt-5">
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("SignUp")}
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
