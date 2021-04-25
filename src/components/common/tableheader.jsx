import React, { Component } from "react";
class TableHeader extends Component {
  // movies
  //sortColumn
  // onDelete
  // raiseSort

  onRaise = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.raiseSort(sortColumn);
  };
  renderIcon = (column) => {
    const sortColumn = this.props.sortColumn;
    if (column.path !== sortColumn.path) {
      console.log(column.path !== sortColumn.path);
      return "";
    }
    if (sortColumn.order === "asc") {
      console.log("column path = function path");
      return <i className="fa fa-cog fa-arrow-up"></i>;
    }

    return <i className="fa fa-cog fa-arrow-down"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => {
            return (
              <th
                className="cursor"
                key={column.path || column.id}
                onClick={() => this.onRaise(column.path)}
              >
                {column.label} {this.renderIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
