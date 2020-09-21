import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    console.log('Componente mãe parou de chamar o componente filho');
    console.log('Logo vamos desligar os setIntervals');
    clearInterval(this.timerID);
  }

  render() {
    const { turnClockOff } = this.props;

    return (
      <div>
        <h1>Relógio</h1>
        <h2>Agora são {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={() => turnClockOff()}>Desligar Relógio</button>
      </div>
    );
  }
}

export default Clock;
