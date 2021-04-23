import React, { Component } from "react";
import _ from "lodash";
const Pagination = ({ itemCount, pageSize, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li key={page} className="page-item">
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
