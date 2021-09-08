import React, { useState } from "react";
import Announcement from "./common/Announcement";
import Auth from "./autentication/auth";
import { ThingsProvider } from "./thingsContext";


function LoginForm() {
  var [active,setActive] = useState(true);
  // state = {
  //   data: { username: "", password: "" },
  //   errors: {},
    
  // };
  // schema = {
  //   username: Joi.string().required().label("Username"),
  //   password: Joi.string().required().label("Password"),
  // };

  function doSubmit (event) {

    
    event.preventDefault();
    
    const username = event.target[0].value;
    const password = event.target[1].value;

    Auth(username,password);
    
  };

  const handleClose =(event) => {
   setActive(false);
  }
    return (
      
      // <div className="container mt-3 mx-sm">
      //   <div className="alert alert-success" role="alert">
      //     <h4 className="alert-heading">Wellcome to HA Product Rentals</h4>
      //     <p>Please enter your login credentials and sign-in.</p>
      //     <hr></hr>
      //     <p className="mb-0 alert alert-danger">Note: Product is still in beta. Report any errors at <b>"ahmed.haseeb56@gmail.com"</b></p>
      //   </div>
      //   <div className="ml-8">
      //     <h1 className="text-primary">Login</h1>
      //     <form onSubmit={this.doSubmit} className="mt-5">
      //       {this.renderInput("username", "Username")}
      //       {this.renderInput("password", "Password", "password")}
      //       {this.renderButton("Login")}
      //     </form>
      //   </div>
      // </div>
      <>
      <ThingsProvider value={handleClose}>
        <Announcement active={active} closeClick={handleClose} />
      </ThingsProvider>
      <div class="min-h-screen bg-gray-900">
  <div class="mx-auto bg-indigo-200 md:w-2/5 w-2/3 mx-auto p-10 my-auto rounded-b">
    
      <div class=" bg-gradient-to-r from-green-400 to-blue-500 mx-auto text-center text-4xl font-bold text-gray-800 p-2 mb-8 rounded">
        Login
    </div>
    <div>
      <form onSubmit={doSubmit}>
        {/* <div class="bg-gray-800 px-2 py-0 rounded inline-block"> */}
          <label for="input" class="text-xl font-bold text-black tracking-wide">Username</label>
        {/* </div> */}
 
        <input type="text" id="input" placeholder="Username" class="placeholder-gray-400 font-sans tracking-wide my-2 md:flex w-full rounded p-2  border border-blue-500" />

        <div class="bg-blue-500 px-2 rounded inline-block mt-3">
          <label for="password" class="text-xl font-bold text-gray-100 tracking-wide">Password</label>
        </div>

        <input type="password" id="password" placeholder="Password" class="placeholder-gray-400 tracking-wide font-sans my-3 md:flex w-full rounded p-2 border border-blue-500" />

        <div class="flex space-between justify-center space-x-8">
          <button class="mt-4 text-xl font-bold bg-gray-900 rounded text-gray-100 tracking-wide px-6 py-2 border-b-2 border-blue-500 shadow hover:shadow-lg hover:bg-gray-800 hover:text-gray-300">Login</button>
          <button class="mt-4 text-xl font-bold bg-gray-900 rounded text-gray-100 tracking-wide px-6 py-2 border-b-2 border-blue-500 shadow hover:shadow-lg hover:bg-gray-800 hover:text-gray-300">Signup</button>
        </div>

      </form>
    </div>
  </div>
</div>
    </>
    );

  
}

export default LoginForm;
