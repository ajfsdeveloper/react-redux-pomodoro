import { SET_DEFAULT_TIME, UPDATE_DISPLAY_TIME } from '../actions/actionTypes'
import { updateObject } from '../../utils/utility'

const initialState = {
  defaultTime: null,
  displayTime: null
}

const setDefaultTime = (state, action) => {
  return updateObject(state, {
    defaultTime: action.defaultTime,
    displayTime: action.defaultTime
  })
}

const updateDisplayTime = (state, action) => {
  return updateObject(state, {
    displayTime: action.updatedDisplayTime
  })
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_TIME: return setDefaultTime(state, action)
    case UPDATE_DISPLAY_TIME: return updateDisplayTime(state, action)
    default: return state
  }
}

export default timerReducer
