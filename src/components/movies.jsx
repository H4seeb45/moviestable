import React, { Component } from "react";
import { getMovies, getMovie } from "../services/fakeMovieService";
import Pagination from "./pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 2,
  };

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handlePageChange = (page) => {
    console.log(page);
  };
  render() {
    const count = this.state.movies.length;
    return (
      <div className="container">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie._id}</td>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemCount={count}
          pageSize={this.state.pageSize}
          onPageChange={() => this.handlePageChange()}
        />
      </div>
    );
  }
}

export default Movies;
