import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/index'

class TimerButtons extends Component {
  render() {
    const { start, pause, resume } = this.props

    return (
      <div className="container section">
        <div className="row">
          <div className="col offset-s3">
            {!start && !pause && !resume && <button
              className="waves-effect waves-light btn-large green darken-4"
              onClick={() => this.props.startTimer()}>
              START
            </button>}
            {(start || resume) && <button
              className="waves-effect waves-light btn-large amber darken-4"
              onClick={() => this.props.pauseTimer()}
            >
              PAUSE
            </button>}
            {pause && <button
              className="waves-effect waves-light btn-large orange darken-4"
              onClick={() => this.props.resumeTimer()}
            >
              RESUME
            </button>}
            {(start || pause || resume) && <button
              className="waves-effect waves-light btn-large red darken-3"
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
  const { start, pause, resume } = state.activity
  return {
    start,
    pause,
    resume
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
