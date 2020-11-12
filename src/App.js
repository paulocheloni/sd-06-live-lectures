import React from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';


class App extends React.Component {
  render() {
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
}


export default App;
