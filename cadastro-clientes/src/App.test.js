import React from 'react';
import { fireEvent } from '@testing-library/react';

import renderWithRedux from './helpers/renderWithRedux';

import App from './App';

describe('Cadastro de cliente', () => {
  it('Verifica a presença do texto na tela de cadastro', () => {
    const { getByText } = renderWithRedux(<App />)

    const homeText = getByText('Bem-vindo ao sistema de cadastramento!')
    expect(homeText).toBeInTheDocument()
  })

  it('Verifica o login de uma pessoa', () => {
    const { queryByText, queryByTestId } = renderWithRedux(<App />)

    fireEvent.click(queryByText('Faça seu Login'))

    const emailInput = queryByTestId('input-email')
    const passwordInput = queryByTestId('input-senha')
    const loginButton = queryByTestId('btn-login')

    fireEvent.change(emailInput, { target: { value: 'user@xablau.com'} })
    fireEvent.change(passwordInput, { target: { value: '1234'} })

    expect(emailInput.value).toBe('user@xablau.com')
    expect(passwordInput.value).toBe('1234')

    fireEvent.click(loginButton)
    expect(queryByText('Nenhum cliente cadastrado')).toBeInTheDocument()
  })

  it(`Verifica que, quando clico no botão de deletar, deleta-se uma pessoa usuária 
      já cadastrada`, () => {
        const initialState = {
          registerReducer: [
            { name: 'Red', age: '11', email: 'kantochampion@pokemon.net' }
          ]
        }

        const { queryByText, queryByTestId } = renderWithRedux(<App />, { initialState })

        fireEvent.click(queryByText('Faça seu Login'))

        const emailInput = queryByTestId('input-email')
        const passwordInput = queryByTestId('input-senha')
        const loginButton = queryByTestId('btn-login')
    
        fireEvent.change(emailInput, { target: { value: 'user@xablau.com'} })
        fireEvent.change(passwordInput, { target: { value: '1234'} })
        fireEvent.click(loginButton)

        const deleteButton1 = queryByTestId('button-remove-1')
        fireEvent.click(deleteButton1)

        expect(queryByText('Nenhum cliente cadastrado')).toBeInTheDocument()
      })
});
