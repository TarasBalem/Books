import React, {memo, useCallback, useMemo} from "react";
import {useSelector, useDispatch} from "react-redux";
import PropTypes from "prop-types";
import C from "../constants";

function useActiveBook(book) {
  const dispatch = useDispatch();
  const activeBook = useSelector((state) => state.activeBook);
  const isActive = useMemo(
    () => activeBook === book._id,
    [activeBook, book._id]
  );

  const setActive = useCallback(() => {
    dispatch({type: C.SELECT_BOOK, payload: {id: book._id}});
  }, [book._id, dispatch]);

  return {isActive, setActive};
}

const Book = ({book}) => {
  const {isActive, setActive} = useActiveBook(book);

  return (
    <li className="list-group-item">
      <h2 onClick={setActive}>Title:{book.title}</h2>
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

export default memo(Book);
