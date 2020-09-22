import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import TrybePage from './TrybePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <TrybePage />
      </Router>
    )
  }
}

export default App;
