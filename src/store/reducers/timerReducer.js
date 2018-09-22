import { SET_DEFAULT_TIME } from '../actions/actionTypes'
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

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_TIME: return setDefaultTime(state, action)
    default: return state
  }
}

export default timerReducer
