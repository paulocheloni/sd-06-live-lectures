import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('renders my App', () => {
  const { getByText, history } = renderWithRouter(<App />);
  const personalInfo = getByText(/Página sobre mim/i);
  expect(personalInfo).toBeInTheDocument();

  fireEvent.click(getByText(/Deixe um comentário/i));

  const { pathname } = history.location;
  expect(pathname).toBe('/comments');
  const comment = getByText(/Comente!/i);
  expect(comment).toBeInTheDocument();
});

test('Se eu acessar uma pagina que não existe eu vou renderizar a página de 404', () => {
  const { getByText, history } = renderWithRouter(<App />);

  history.push('/pagina-que-nao-existe');

  expect(getByText(/Página não encontrada/i)).toBeInTheDocument();
});
