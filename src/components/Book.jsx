import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {selectBookAction} from "../Actions";

const Book = ({book, toggle, isActive}) => {
  return (
    <li className="list-group-item">
      <h2 onClick={toggle}>Title:{book.title}</h2>
      <p>Category:{book.categoryId}</p>
      {isActive && <p>{book.desc}</p>}
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

function mapStateToProps(state, ownProps) {
  return {
    isActive: state.activeBook === ownProps.book._id,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggle: () => dispatch(selectBookAction(ownProps.book._id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
