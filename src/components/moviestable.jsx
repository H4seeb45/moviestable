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
      label: "Action",
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

      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
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
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default MoviesTable;
