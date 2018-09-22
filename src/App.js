import React, { Component } from 'react'
import { connect } from 'react-redux'

import NotyToaster from './components/NotyToaster'
import TimerDisplay from './components/TimerDisplay'

import * as actions from './store/actions/index'

class App extends Component {

  constructor(props) {
    super(props)

    props.setDefaultTime(props.defaultTime)

    // console.log('APP constructor', props)
  }

  componentDidMount() {
    // console.log('APP componentDidMount', this.props)
  }

  render() {
    return (
      <div>
        <h1>Hey There!!</h1>
        <NotyToaster />
        <TimerDisplay displayTime={this.props.displayTime} />

        <button onClick={() => this.props.updateDisplayTime('13:45')}>UPDATE</button>
        <button onClick={() => this.props.startTimer()}>START/RESUME</button>
        <button onClick={() => this.props.stopTimer()}>PAUSE/STOP</button>
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
    updateDisplayTime: (newTime) => dispatch(actions.updateDisplayTime(newTime)),
    startTimer: () => dispatch(actions.startTimer()),
    stopTimer: () => dispatch(actions.stopTimer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
