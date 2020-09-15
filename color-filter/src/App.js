import React from 'react';
import './App.css';
import colors from './data.js'

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      numeroDeXablaus: 0,
      textoDoFiltro: 'all'
    }
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeXablaus: estadoAnterior.numeroDeXablaus + 1
    }))
  }

  handleChange(event) {
    this.setState({ textoDoFiltro: event.target.value === '' ? 'all' : event.target.value })
  }

  render() {
    return (
      <div>
        <div><input type="text" onChange={this.handleChange} /></div>
        <div>{colors.filter((color) => [color.color, 'all'].includes(this.state.textoDoFiltro)).map((color, index) => (
          <div key={index}>{color.color}</div>))}
        </div>
        <button onClick={this.handleClick}>{this.state.numeroDeXablaus}</button>
      </div>
    );
  }
}

export default App;
