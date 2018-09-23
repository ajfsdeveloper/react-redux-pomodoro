import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/index'

class TimerButtons extends Component {
  render() {
    return (
      <div className="container section">
        <div className="row">
          <div className="col offset-s3">
            <button
              className="waves-effect waves-light btn-large"
              onClick={() => this.props.startTimer()}>
              START
            </button>
            <button
              className="waves-effect waves-light btn-large"
              onClick={() => this.props.pauseTimer()}
            >
              PAUSE
            </button>
            <button
              className="waves-effect waves-light btn-large"
              onClick={() => this.props.resumeTimer()}
            >
              RESUME
            </button>
            <button
              className="waves-effect waves-light btn-large"
              onClick={() => this.props.stopTimer()}
            >
              STOP
            </button>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    )
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

export default connect(null, mapDispatchToProps)(TimerButtons)
