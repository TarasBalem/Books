import React, {memo, useCallback, useMemo} from "react";
import {useSelector, useDispatch} from "react-redux";
import PropTypes from "prop-types";
import C from "../constants";

function useActiveBook(book) {
  const dispatch = useDispatch();
  const activeBook = useSelector((state) => state.activeBook);
  const cats = useSelector((state) => state.cats);

  const catName = cats[book.categoryId].title;

  const isActive = useMemo(
    () => activeBook === book._id,
    [activeBook, book._id]
  );

  const setActive = useCallback(() => {
    dispatch({type: C.SELECT_BOOK, payload: {id: book._id}});
  }, [book._id, dispatch]);

  return {isActive, setActive, catName};
}

const Book = ({book}) => {
  const {isActive, setActive, catName} = useActiveBook(book);

  return (
    <li className="list-group-item">
      <h2 onClick={setActive}>Title:{book.title}</h2>
      <p>Category:{catName}</p>
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
