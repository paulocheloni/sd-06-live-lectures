import React from 'react';
import './App.css';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.turnClockOff = this.turnClockOff.bind(this);
  }

  turnClockOff() {
    this.setState({ show: false });
  }

  render() {
    console.log('Render do componente Mom');
    return (
      <div className="App">
        <header className="App-header">
          {this.state.show && <Clock turnClockOff={this.turnClockOff} />}
        </header>
      </div>
    );
  }
}

export default App;
