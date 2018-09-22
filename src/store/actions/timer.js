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
  const minute = updatedTime.get('minute')
  const second = updatedTime.get('second')
  const updatedMinute = minute < 10 ? `0${minute}` : minute
  const updatedSecond = second < 10 ? `0${second}` : second
  const updatedDisplayTimeString = `${updatedMinute}:${updatedSecond}`

  if (currentTime.get('minute') === 0 & currentTime.get('second') === 0) {
    completeTimer()
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

export const completeTimer = () => {
  console.log('completeTimer')
  clearInterval(timer)
}

export const stopTimer = () => {
  console.log('stopTimer')
  clearInterval(timer)
}