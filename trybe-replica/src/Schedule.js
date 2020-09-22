
import React, { Component } from 'react'

class Schedule extends Component {
  render() {
    console.log(this.props.match.params.classId)
    return (<p>Schedule</p>)
  }
}

export default Schedule