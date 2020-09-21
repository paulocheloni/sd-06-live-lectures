import React from 'react';
import './App.css';
import Clock from './Clock'

class App extends React.Component {
  constructor() {
    super()

    this.handleMessage = this.handleMessage.bind(this)

    this.state = {
      showMessage: false
    }
  }

  handleMessage(showMessage) {
    this.setState({ showMessage })
  }

  render() {
    return (
      <div>
        <Clock handleMessage={this.handleMessage} />
        {this.state.showMessage ? <p>Multiplo de dez!</p> : ''}
      </div>
    )
  };
}

export default App;
