import React, { Component } from 'react'
import MyInput from './MyInput'

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      nome: '',
      maiorDuvida: ''
    }
  }


  handleChange({ target }) {
    const { name } = target

    this.setState({
      [name]: target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <MyInput handleChange={this.handleChange} value={this.state.nome} />
          <label>
            Qual assunto de React te dá mais dúvida?
            <select name="maiorDuvida" value={this.state.value} onChange={this.handleChange}>
              <option value="props">Props</option>
              <option value="estado">Estado</option>
              <option value="eventos">Eventos</option>
              <option value="componentes">Componentes</option>
            </select>
          </label>
        </form>
      </div >
    )
  }
}

export default Form