import React from "react";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import ToDo from "./components/todo";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Redirect exact from="/" to="/movies" />
        {/* <Route path="/customers" component={Customers} /> */}
        {/* <Route path="/rentals" component={Rentals} /> */}
        <Route path="/signup" component={SignupForm} />
        <Redirect to="/not-found" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
