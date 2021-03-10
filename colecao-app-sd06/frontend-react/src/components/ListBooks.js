import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import { Link } from 'react-router-dom';
import { List } from "rbx";
import api from '../services/api';

function ListBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.getBooks().then(books => setBooks(books))
  }, []);

  return (
    <>
      <h1>Lista de livros</h1>

      <List>
      {books.map(book => (
        <List.Item as={Link} key={book.id} to={`/book/${book.id}`}>{book.title}</List.Item>
      ))}
      </List>
    </>
  );
}

export default ListBooks;