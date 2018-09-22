import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimerDisplay from './components/TimerDisplay'

import * as actions from './store/actions/index'

class App extends Component {

  constructor(props) {
    super(props)

    props.setDefaultTime(props.defaultTime)

    console.log('APP constructor', props)
  }

  componentDidMount() {
    console.log('APP componentDidMount', this.props)
  }

  render() {
    return (
      <div>
        <h1>Hey There!!</h1>
        <TimerDisplay displayTime={this.props.displayTime} />

        <button onClick={() => this.props.updateDisplayTime('13:45')}>UPDATE</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayTime: state.timer.displayTime
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDefaultTime: (defaultTime) => dispatch(actions.setDefaultTime(defaultTime)),
    updateDisplayTime: (newTime) => dispatch(actions.updateDisplayTime(newTime))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
