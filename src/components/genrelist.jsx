import React, { Component } from "react";

class Genrelist extends Component {
  render() {
    const { items, selectedItem, listClick } = this.props;
    if (items.length === 0) return <h3>No Genere Available</h3>;
    return (
      <ul className="list-group">
        {items.map((item) => {
          let listClasses =
            "list-group-item d-flex justify-content-between align-items-center cursor";
          return (
            <li
              onClick={() => listClick(item)}
              key={item._id || item.id}
              className={
                item._id === selectedItem._id
                  ? (listClasses += " active")
                  : listClasses
              }
            >
              {item.name}
              {/* <span class="badge bg-primary rounded-pill">14</span> */}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Genrelist;
