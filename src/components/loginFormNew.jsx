import {React} from "react";
import Form,{renderInput,renderButton} from "./common/form";




function LoginForm() {
  
  function doSubmit  (event) {

    console.log(event);
    event.preventDefault();
    console.log("Submitted");
    const username = event.target[0].value;
    const password = event.target[1].value;
    console.log(username);
    console.log(password);
    
    
  };

    return (
      <div className="container mt-3 mx-sm">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Wellcome to HA Product Rentals</h4>
          <p>Please enter your login credentials and sign-in.</p>
          <hr></hr>
          <p className="mb-0 alert alert-danger">Note: Product is still in beta. Report any errors at <b>"ahmed.haseeb56@gmail.com"</b></p>
        </div>
        <div className="ml-8">
          <h1 className="text-primary">Login</h1>
          <Form onSubmit={doSubmit} className="mt-5" >
            {renderInput("username", "Username")}
            {renderInput("password", "Password", "password")}
            {renderButton("Login")}
            </Form>
        </div>
      </div>
    );

  }

export default LoginForm;