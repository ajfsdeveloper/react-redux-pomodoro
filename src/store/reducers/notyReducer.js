import {
  SET_DEFAULT_TIME,
  UPDATE_DISPLAY_TIME,
  START_POMODORO,
  STOP_POMODORO,
  PAUSE_POMODORO,
  RESUME_POMODORO,
  COMPLETE_POMODORO
} from '../actions/actionTypes'

import { updateObject } from '../../utils/utility'

const setDefaultTime = (state, action) => updateObject(state, {
  type: 'info',
  message: 'Default Time set successfully!'
})

const updateDefaultTime = (state, action) => updateObject(state, {
  type: 'alert',
  message: 'Display Time updated successfully!'
})

const startPomodoro = (state, action) => updateObject(state, {
  type: 'info',
  message: 'Pomodoro is started!'
})

const stopPomodoro = (state, action) => updateObject(state, {
  type: 'error',
  message: 'Pomodoro is stopped!'
})

const pausePomodoro = (state, action) => updateObject(state, {
  type: 'info',
  message: 'Pomodoro is paused!'
})

const resumePomodoro = (state, action) => updateObject(state, {
  type: 'info',
  message: 'Pomodoro is resumed!'
})

const completePomodoro = (state, action) => updateObject(state, {
  type: 'success',
  message: 'Pomodoro is completed!'
})

const notyReducer = (state = {}, action) => {

  switch (action.type) {

    case SET_DEFAULT_TIME: return setDefaultTime(state, action)
    case UPDATE_DISPLAY_TIME: return updateDefaultTime(state, action)
    case START_POMODORO: return startPomodoro(state, action)
    case STOP_POMODORO: return stopPomodoro(state, action)
    case PAUSE_POMODORO: return pausePomodoro(state, action)
    case RESUME_POMODORO: return resumePomodoro(state, action)
    case COMPLETE_POMODORO: return completePomodoro(state, action)

    default:
      return state
  }
}

export default notyReducer
