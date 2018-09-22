import {
  SET_DEFAULT_TIME,
  UPDATE_DISPLAY_TIME,
  START_POMODORO,
  STOP_POMODORO,
  PAUSE_POMODORO,
  RESUME_POMODORO
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

    case PAUSE_POMODORO:
      return {
        type: 'success',
        message: 'Countdown is paused!'
      }

    case RESUME_POMODORO:
      return {
        type: 'success',
        message: 'Countdown is resumed!'
      }

    default:
      return state
  }
}

export default notyReducer
