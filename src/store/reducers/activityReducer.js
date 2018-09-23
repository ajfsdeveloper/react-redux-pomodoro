import {
  START_POMODORO,
  STOP_POMODORO,
  PAUSE_POMODORO,
  RESUME_POMODORO
} from '../actions/actionTypes'

import { updateObject } from '../../utils/utility'

const initialState = {
  start: false,
  pause: false,
  resume: false,
  stop: false,
  timerRunning: true
}

const startPomodoro = (state, action) => updateObject(state, { ...initialState, start: true })
const stopPomodoro = (state, action) => updateObject(state, { ...initialState, stop: true, timerRunning: false })
const pausePomodoro = (state, action) => updateObject(state, { ...initialState, pause: true })
const resumePomodoro = (state, action) => updateObject(state, { ...initialState, resume: true })

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_POMODORO: return startPomodoro(state, action)
    case STOP_POMODORO: return stopPomodoro(state, action)
    case PAUSE_POMODORO: return pausePomodoro(state, action)
    case RESUME_POMODORO: return resumePomodoro(state, action)
    default: return state
  }
}

export default activityReducer
