import { SET_DEFAULT_TIME, UPDATE_DISPLAY_TIME } from '../actions/actionTypes'

const notyReducer = (state = {}, action) => {

  console.log('notyReducer', action)

  switch (action.type) {
    case SET_DEFAULT_TIME:
      return {
        type: 'success',
        message: 'Default Time set successfully!'
      }

    case UPDATE_DISPLAY_TIME:
      return {
        type: 'success',
        message: 'Display Time updated successfully!'
      }

    default:
      return state
  }
}

export default notyReducer
