import React from "react";
import Movies from "./components/movies";
// import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import MovieForm from "./components/movieForm";
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
// import Auth from "./components/autentication/auth";
import NavBar from "./components/navtail";
import history from "./components/common/history";
import { PrivateRoute } from "./components/autentication/auth";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch history={history}>
        <PrivateRoute path="/" component={Movies} exact/>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/movies/:id" component={MovieForm} />
        <PrivateRoute path="/movies" component={Movies} />
        <PrivateRoute path="/customers" component={Customers} />
        {/* {<Redirect exact from="/" to="/movies" />} */}
        {/* <Route path="/customers" component={Customers} /> */}
        {/* <Route path="/rentals" component={Rentals} /> */}
        <Route path="/signup" component={SignupForm} />
        <Route path="*" render={NotFound} />
      </Switch>
    </React.Fragment>
  ); 
}

export default App;
