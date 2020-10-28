import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'

import rootReducer from '../reducers'

export default function renderWithRedux(component, { initialState } = {}) {
    const store = createStore(rootReducer, initialState)
    const history = createMemoryHistory()

    return { 
      ...render(
        <Provider store={store}>
          <Router history={history}>
            {component}
          </Router>
        </Provider>
      ), 
      store, 
      history
    }
}
