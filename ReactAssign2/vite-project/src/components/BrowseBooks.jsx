import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import './BrowseBooks.css';

function BrowseBooks() {
  const [searchTerm, setSearchTerm] = useState('');
  const { books } = useContext(BookContext);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='browse-books'>
      <h1>Browse Books</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseBooks;
