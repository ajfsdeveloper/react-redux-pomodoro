import React from 'react'

const TimerDisplay = (props) => {

  console.log('TimerDisplay', props)

  return <div>{props.displayTime !== null ? props.displayTime : '00:00'}</div>
}

export default TimerDisplay
