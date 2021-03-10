import React, { useState } from 'react';

// import { Container } from './styles';

import { Link } from 'react-router-dom';

import { Field, Label, Input, Button } from 'rbx';

import history from '../services/history';
import api from '../services/api';


function AddBook() {
  const [title, setTile] = useState('');
  
  const handleSubmit = async () => {
    api.addBook(title);

    history.push('/');
  }
  
  return (
    <>
    <h1>Cadastrar livro</h1>
    
    <form onSubmit={handleSubmit}>
    <Field>
    <Label>Título</Label>
    <Input type="text" onChange={(e) => setTile(e.target.value)} />
    </Field>
    
    <Button.Group>
    <Button type='submit' color='primary'>Salvar</Button>
    <Button as={Link} to='/'>Voltar</Button>
    </Button.Group>
    </form>
    </>
    );
  }
  
  export default AddBook;