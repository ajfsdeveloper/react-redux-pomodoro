import { SET_DEFAULT_TIME, UPDATE_DISPLAY_TIME } from './actionTypes'

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