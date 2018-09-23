import React from 'react'

const TimerDisplay = (props) => {
  return <div className="container section">
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="card-panel teal z-depth-5">
          <h1 className="center-align">{props.displayTime}</h1>
        </div>
      </div>
    </div>

    <div className="divider"></div>
  </div>
}

export default TimerDisplay
