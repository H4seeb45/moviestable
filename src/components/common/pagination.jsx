import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = (props) => {
  const {
    itemCount,
    pageSize,
    currentPage,
    currentCount,
    onPageChange,
  } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage
                  ? "cursor page-item active"
                  : "cursor page-item"
              }
            >
              <button onClick={() => onPageChange(page)} className="page-link">
                {page}
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <h4>
          Showing {currentCount < pageSize ? "last" : "first"} {currentCount} of{" "}
          {itemCount} items.
        </h4>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  currentCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
