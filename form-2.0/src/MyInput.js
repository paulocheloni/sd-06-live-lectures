import React, { Component } from 'react'

class MyInput extends Component {
  render() {
    const { handleChange, value } = this.props

    return (
      <label>
        Nome
        <input name="nome" onChange={handleChange} value={value} type="text" />;
      </label>
    )
  }
}

export default MyInput