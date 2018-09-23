import React, { Component } from 'react'
import { connect } from 'react-redux'

import TimerButtonList from '../components/TimerButtonList'
import * as actions from '../store/actions/index'

class TimerButtons extends Component {
  render() {
    const { start, pause, resume, startTimer, stopTimer, pauseTimer, resumeTimer } = this.props

    return (
      <TimerButtonList
        start={start}
        pause={pause}
        resume={resume}
        startTimer={startTimer}
        stopTimer={stopTimer}
        pauseTimer={pauseTimer}
        resumeTimer={resumeTimer}
      />
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

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(actions.startTimer('START')),
  stopTimer: () => dispatch(actions.stopTimer('STOP')),
  pauseTimer: () => dispatch(actions.pauseTimer()),
  resumeTimer: () => dispatch(actions.startTimer('RESUME'))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimerButtons)
