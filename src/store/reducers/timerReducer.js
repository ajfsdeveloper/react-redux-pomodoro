import {
  SET_DEFAULT_TIME,
  UPDATE_DISPLAY_TIME,
  STOP_POMODORO
} from '../actions/actionTypes'

import { updateObject } from '../../utils/utility'

const initialState = {
  defaultTime: null,
  displayTime: null
}

const setDefaultTime = (state, action) => updateObject(state, {
  defaultTime: action.defaultTime,
  displayTime: action.defaultTime
})

const updateDisplayTime = (state, action) => updateObject(state, {
  displayTime: action.updatedDisplayTime
})

const stopDisplayTime = (state, action) => updateObject(state, {
  displayTime: '00:00'
})

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_TIME: return setDefaultTime(state, action)
    case UPDATE_DISPLAY_TIME: return updateDisplayTime(state, action)
    case STOP_POMODORO: return stopDisplayTime(state, action)
    default: return state
  }
}

export default timerReducer
