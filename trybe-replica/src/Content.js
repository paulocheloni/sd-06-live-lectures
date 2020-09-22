import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import Solutions from './Solutions'
import TrybeContent from './TrybeContent'
import Setup from './Setup'

class Content extends React.Component {
  constructor() {
    super()

    this.state = {
      availableSolutions: ['12.1', '12.2', '12.3']
    }
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path="/schedule/:classId" component={Schedule} />
          <Route path="/solutions" render={(props) => <Solutions  {...props} solutions={this.state.availableSolutions} />} />
          <Route path="/trybe-content" component={TrybeContent} />
          <Route path="/setup" component={Setup} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    )
  }
}

export default Content;