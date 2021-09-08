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
     
      <thead className="bg-green-200">
        <tr >
          {this.props.columns.map((column) => {
            return (
              // <th 
              //   className="cursor hover:bg-blue-300 hover:text-black"
              //   key={column.path || column.id}
              //   onClick={() => this.onRaise(column.path)}
              // >
              //   {column.label} {this.renderIcon(column)}
              // </th> 
                  <th
                    scope="col"
                    className="px-14 py-3 text-left text-xs font-medium text-green-600 uppercase tracking-wider"
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
