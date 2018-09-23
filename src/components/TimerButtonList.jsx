import React from 'react'

const TimerButtonList = (props) => {

  const { start, pause, resume, startTimer, stopTimer, pauseTimer, resumeTimer } = props

  return (
    <div className="container section">
      <div className="row">
        <div className="col offset-s3">
          {!start && !pause && !resume &&
            <button
              className="waves-effect waves-light btn-large green darken-4 pulse"
              onClick={() => startTimer()}>
              START
            </button>}
          {(start || resume) &&
            <button
              className="waves-effect waves-light btn-large amber darken-4"
              onClick={() => pauseTimer()}>
              PAUSE
            </button>}
          {pause &&
            <button
              className="waves-effect waves-light btn-large orange darken-4"
              onClick={() => resumeTimer()}>
              RESUME
            </button>}
          {(start || pause || resume) &&
            <button
              className="waves-effect waves-light btn-large red darken-3"
              onClick={() => stopTimer()}>
              STOP
            </button>}
        </div>
      </div>

      <div className="divider"></div>
    </div>
  )
}

export default TimerButtonList
