import {
  SET_DEFAULT_TIME,
  UPDATE_DISPLAY_TIME,
  START_POMODORO,
  STOP_POMODORO
} from '../actions/actionTypes'

const notyReducer = (state = {}, action) => {

  // console.log('notyReducer', action)

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

    case START_POMODORO:
      return {
        type: 'success',
        message: 'Countdown started!'
      }

    case STOP_POMODORO:
      return {
        type: 'success',
        message: 'Countdown stopped!'
      }

    default:
      return state
  }
}

export default notyReducer
