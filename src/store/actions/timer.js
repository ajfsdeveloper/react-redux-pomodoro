import {
  SET_DEFAULT_TIME,
  UPDATE_DISPLAY_TIME
} from './actionTypes'

import {
  startPomodoro,
  stopPomodoro,
  pausePomodoro,
  resumePomodoro,
  completePomodoro
} from './activity'

import {
  getUpdatedDisplayTimeString,
  checkValidTime
} from '../../utils/utility'

let timerClock = null

export const setDefaultTime = (defaultTimeString) => ({
  type: SET_DEFAULT_TIME,
  defaultTime: defaultTimeString
})

export const updateDisplayTime = (updatedDisplayTimeString) => ({
  type: UPDATE_DISPLAY_TIME,
  updatedDisplayTime: updatedDisplayTimeString
})

export const startTimer = activity => (dispatch, getState) => {

  let currentDisplayTime = getState().timer.displayTime
  let defaultTime = getState().timer.defaultTime

  if (checkValidTime(currentDisplayTime) === false) {
    dispatch(updateDisplayTime(defaultTime))
  }

  if (activity === 'START') {
    dispatch(startPomodoro())
  } else {
    dispatch(resumePomodoro())
  }

  timerClock = setInterval(() => {
    currentDisplayTime = getState().timer.displayTime
    const updatedDisplayTimeString = getUpdatedDisplayTimeString(currentDisplayTime)

    dispatch(updateDisplayTime(updatedDisplayTimeString))

    if (updatedDisplayTimeString === '00:00') {
      dispatch(stopTimer('COMPLETE'))
    }
  }, 1000)
}

export const pauseTimer = () => (dispatch, getState) => {

  clearInterval(timerClock)

  let currentDisplayTime = getState().timer.displayTime

  if (checkValidTime(currentDisplayTime) === false) {
    return
  }

  dispatch(pausePomodoro())
}

export const stopTimer = activity => (dispatch, getState) => {

  clearInterval(timerClock)

  if (activity === 'COMPLETE') {
    dispatch(completePomodoro())
  } else {
    const currentDisplayTime = getState().timer.displayTime

    if (checkValidTime(currentDisplayTime) === false) {
      return
    }

    dispatch(stopPomodoro())
  }
}
