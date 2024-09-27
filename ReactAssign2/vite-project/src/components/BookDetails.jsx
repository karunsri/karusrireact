import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import './BookDetails.css';

function BookDetails() {
  const { id } = useParams();
  const { books } = useContext(BookContext);
  const book = books.find((book) => book.id === Number(id));

  return (
    <div className='book-details'>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/browse">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;
