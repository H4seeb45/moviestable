import React, { Component } from "react";
import TableBody from "./common/tablebody";
import TableHeader from "./common/tableheader";
class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      id: "action",
      content: (movie) => (
        <button
          onClick={() => this.props.movieDelete(movie)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColumn, onSort, movieDelete } = this.props;
    return (
      <table className="table table-responsive table-hover">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          raiseSort={onSort}
        />
        <TableBody
          items={movies}
          columns={this.columns}
          raiseDeleteItem={movieDelete}
        />
      </table>
    );
  }
}
export default MoviesTable;
