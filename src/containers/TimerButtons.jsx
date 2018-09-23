import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/index'

class TimerButtons extends Component {
  render() {
    const { start, stop, pause, resume, timerRunning } = this.props

    return (
      <div className="container section">
        <div className="row">
          <div className="col offset-s3">
            {(stop || (timerRunning && !start && !pause && !resume)) && <button
              className="waves-effect waves-light btn-large"
              onClick={() => this.props.startTimer()}>
              START
            </button>}
            {timerRunning && (start || resume) && <button
              className="waves-effect waves-light btn-large"
              onClick={() => this.props.pauseTimer()}
            >
              PAUSE
            </button>}
            {timerRunning && pause && <button
              className="waves-effect waves-light btn-large"
              onClick={() => this.props.resumeTimer()}
            >
              RESUME
            </button>}
            {timerRunning && (start || pause || resume) && <button
              className="waves-effect waves-light btn-large"
              onClick={() => this.props.stopTimer()}
            >
              STOP
            </button>}
          </div>
        </div>

        <div className="divider"></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { start, stop, pause, resume, timerRunning } = state.activity
  return {
    start,
    stop,
    pause,
    resume,
    timerRunning
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTimer: () => dispatch(actions.startTimer('START')),
    stopTimer: () => dispatch(actions.stopTimer('STOP')),
    pauseTimer: () => dispatch(actions.pauseTimer()),
    resumeTimer: () => dispatch(actions.startTimer('RESUME'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerButtons)
