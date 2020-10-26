import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

import { Provider } from  'react-redux' 
import store from './store'

function App() {
  return (
    <Provider store={ store }>
      <ProductList />
      <ShoppingCart />
    </Provider>
  );
}

export default App;
