import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: 'A science fiction novel...', rating: 4.5 },
    { id: 2, title: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Fiction', description: 'A novel...', rating: 4.0 },
    { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', description: 'A non-fiction...', rating: 4.8 }
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};
