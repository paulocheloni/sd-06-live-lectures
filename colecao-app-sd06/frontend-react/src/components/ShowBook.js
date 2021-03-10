import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import api from '../services/api';
import history from '../services/history';

import { Link } from 'react-router-dom';
import { Button, Title } from 'rbx';

function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    api.getBookById(id).then(response => {
      const bookFound = (response.ok) ? response.book : null;
      setBook(bookFound);
    });
  }, [id]);

  const handleDelete = () => {
    api.remove(id);

    history.push('/');
  }

  return (
    <>
      Detalhes do livro {id}

      {console.log(book)}

      { book !== null
        ? (<Title>{book.title}</Title>)
        : (<Title>Livro não encontrado</Title>)
      }
      

      <Button.Group>
        { book &&<Button color='danger' onClick={handleDelete}>Excluir</Button> }
        { book &&<Button color='primary' to={`/book/${id}/edit`} as={Link}>Editar</Button> }
        <Button color='' to='/' as={Link}>Voltar</Button>
      </Button.Group>
      
    </>
  );
}

export default ShowBook;