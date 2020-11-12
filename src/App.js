import React from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';

function App() {
  return (
    <div className="App">
      <h1>
        Space Station
        {' '}
        <span className="yellow-font">Corn</span>
        {' '}
        Tracker
      </h1>
      <ISSLocation />
    </div>
  );
}

export default App;
