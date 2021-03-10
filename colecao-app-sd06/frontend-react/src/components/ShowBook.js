import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import api from '../services/api';
import history from '../services/history';

import { Button } from 'rbx';

function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    api.getBookById(id).then(response => setBook(response));
  }, [id]);

  const handleDelete = () => {
    api.remove(id);

    history.push('/');
  }

  return (
    <>
      Detalhes do livro {id}

      <h1>{book.title}</h1>

      <Button.Group>
        <Button color='danger' onClick={handleDelete}>Excluir</Button>
      </Button.Group>
    </>
  );
}

export default ShowBook;