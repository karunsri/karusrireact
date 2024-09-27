import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const popularBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' }
];

function HomePage() {
  return (
    <div className='home'>
      <h1>Welcome to the Online Library</h1>
      <h2>Book Categories</h2>
      <ul>
        <li>Fiction</li>
        <li>Non-Fiction</li>
        <li>Sci-Fi</li>
      </ul>

      <h2>Popular Books</h2>
      <ul>
        {popularBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
