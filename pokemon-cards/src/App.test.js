import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders my App', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Pokémon Cards/i);
  expect(title).toBeInTheDocument();
});

test('Verifica que o input recebe o valor "pikachu" quando quem usa o digita', () => {
  const { getByTestId } = render(<App />);

  const inputText = getByTestId('input-text');

  fireEvent.change(inputText, { target: { value: 'pikachu' } });
  expect(inputText).toHaveValue('pikachu');
});

test('Dado que eu chamo a API e ela retorna o que espero, verifica que exibo os dados na tela', async () => {
  const data = {
    cards: [{
      name: 'Charizard',
      types: ['Lightning'],
    }],
  };

/*
    fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
      .then((resolve) => resolve.json())
      .then((data) => this.setState({ data: data.cards[0] }));
*/

  global.fetch = jest.fn().mockResolvedValue(
    { json: jest.fn().mockResolvedValue(data) },
  );

  const { getByText, getByTestId, findByText } = render(<App />);
  const inputText = getByTestId('input-text');
  const searchButton = getByText(/Pesquisar/i);

  userEvent.type(inputText, 'Pikachu');
  fireEvent.click(searchButton);

  await findByText(/Pikachu/i);
  expect(getByText(/Lightning/i)).toBeInTheDocument();
  expect(global.fetch).toBeCalledWith(`https://api.pokemontcg.io/v1/cards?name=pikachu)
});
