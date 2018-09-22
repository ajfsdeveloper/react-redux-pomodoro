import React from 'react'

const TimerDisplay = (props) => {

  console.log('TimerDisplay', props)

  return <div>{props.displayTime}</div>
}

export default TimerDisplay
