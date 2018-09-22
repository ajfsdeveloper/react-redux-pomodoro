import moment from 'moment'
import { SET_DEFAULT_TIME, UPDATE_DISPLAY_TIME } from './actionTypes'

let timer = null

export const setDefaultTime = (defaultTimeString) => {
  return {
    type: SET_DEFAULT_TIME,
    defaultTime: defaultTimeString
  }
}

export const updateDisplayTime = (updatedDisplayTimeString) => {
  return {
    type: UPDATE_DISPLAY_TIME,
    updatedDisplayTime: updatedDisplayTimeString
  }
}

const getUpdatedDisplayTimeString = (currentDisplayTime) => {
  const currentTime = moment.duration(`00:${currentDisplayTime}`)
  const updatedTime = currentTime.subtract(1, 'second')
  const updatedDisplayTimeString = `${updatedTime.get('minute')}:${updatedTime.get('second')}`

  if (currentTime.get('minute') === 0 & currentTime.get('second') === 0) {
    stopTimer()
  }

  return updatedDisplayTimeString
}

export const startTimer = () => {
  return (dispatch, getState) => {
    timer = setInterval(() => {
      const currentDisplayTime = getState().timer.displayTime
      const updatedDisplayTimeString = getUpdatedDisplayTimeString(currentDisplayTime)

      dispatch(updateDisplayTime(updatedDisplayTimeString))
    }, 1000)
  }
}

export const stopTimer = () => {
  console.log('stopTimer')
  clearInterval(timer)
}