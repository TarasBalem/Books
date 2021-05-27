import React from "react";
import PropTypes from "prop-types";

const Book = ({book}) => {
  return (
    <li className="list-group-item">
      <h2>Title:{book.title}</h2>
      <p>Category:{book.categoryId}</p>
      <p>{book.desc}</p>
    </li>
  );
};

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
