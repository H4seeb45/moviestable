import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand bg-info px-2 border-primary rounded" to="#">
        HA Product Rentals
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customers">
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rentals">
              Rentals
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              <button className="btn btn-primary">SignUp</button>
            </Link>
          </li>
        </ul>

        <form className="form-inline my-2 my-md-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
          ></input>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
