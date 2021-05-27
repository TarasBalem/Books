import React from "react";
import {useSelector} from "react-redux";
import Book from "./Book";

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul className="list-group">
      {books.map((book) => (
        <Book key={book._id} book={book} />
      ))}
    </ul>
  );
};

BooksList.defaultProps = {
  books: [],
};

export default BooksList;
