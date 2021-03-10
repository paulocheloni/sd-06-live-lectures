import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import api from '../services/api';
import history from '../services/history';

import { Link } from 'react-router-dom';
import { Container, Field, Label, Input, Button } from 'rbx';

function EditBook() {
  const { id } = useParams();
  const [ title, setTitle ] = useState('');

  useEffect(()=> {
    api.getBookById(id).then(({title}) => setTitle(title));
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.updateBook(id, title);

    history.push('/');
  }


  return <Container>
    <form onSubmit={handleSubmit}>
      <Field>
        <Label>Título</Label>
        <Input type='text' value={title} placeholder='Título' onChange={(e) => setTitle(e.target.value)} />
      </Field>

      <Button.Group>
        <Button color='primary'>Salvar</Button>
      
        <Button as={Link} to='/'>Voltar</Button>
      </Button.Group>
    </form>
  </Container>;
}

export default EditBook;