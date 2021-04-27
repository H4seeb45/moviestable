import React, { Component } from "react";
import getGenres from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import Genrelist from "./genrelist";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import "../styles/cursor.css";
import MoviesTable from "./moviestable";
import _ from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ id: "AllGenres", name: "All Genres" }, ...getGenres()],
    });
  }
  // Handling Events
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleMovieDelete = (movieToDelete) => {
    const newMoviesAferDelete = this.state.movies.filter(
      (movie) => movie._id !== movieToDelete._id
    );
    this.setState({ movies: newMoviesAferDelete });
  };

  handleListClick = (listName) => {
    this.setState({ selectedGenre: listName, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn });
  };

  render() {
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    const genreMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const count = genreMovies.length;

    const sorted = _.orderBy(
      genreMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);
    const currentCount = movies.length;

    if (count <= 0) return <h1>There are no movies to show.</h1>;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-2">
            {" "}
            <Genrelist
              items={genres}
              selectedItem={selectedGenre}
              listClick={this.handleListClick}
            ></Genrelist>
          </div>

          <div className="col">
            <Link
              className="btn btn-primary"
              to="/newmovie"
              style={{ marginBottom: 10 }}
            >
              New Movie
            </Link>
            <MoviesTable
              movies={movies}
              sortColumn={this.state.sortColumn}
              onSort={this.handleSort}
              movieDelete={this.handleMovieDelete}
            ></MoviesTable>

            <Pagination
              itemCount={count}
              currentPage={currentPage}
              pageSize={pageSize}
              currentCount={currentCount}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
