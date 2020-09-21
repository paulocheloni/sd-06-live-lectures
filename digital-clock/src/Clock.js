import React, { Component } from 'react'

class Clock extends Component {
  constructor() {
    super()
    console.log('constructor')

    this.state = {
      dataHora: new Date(),
      showMessage: false
    }
  }


  componentDidMount() {
    console.log('componentDidMount')
    setInterval(() => {
      this.setState({ dataHora: new Date() })
    }, 1000)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    return (
      <div>
        <p>{this.state.dataHora.toString()}</p>
        {this.state.showMessage ? <p>Multiplo de dez!</p> : ''}
      </div>
    )
  }
}

export default Clock