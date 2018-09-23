import {
  SET_DEFAULT_TIME,
  UPDATE_DISPLAY_TIME,
  START_POMODORO,
  STOP_POMODORO,
  PAUSE_POMODORO,
  RESUME_POMODORO,
  COMPLETE_POMODORO
} from '../actions/actionTypes'

const notyReducer = (state = {}, action) => {

  switch (action.type) {
    case SET_DEFAULT_TIME:
      return {
        type: 'info',
        message: 'Default Time set successfully!'
      }

    case UPDATE_DISPLAY_TIME:
      return {
        type: 'alert',
        message: 'Display Time updated successfully!'
      }

    case START_POMODORO:
      return {
        type: 'info',
        message: 'Pomodoro is started!'
      }

    case STOP_POMODORO:
      return {
        type: 'error',
        message: 'Pomodoro is stopped!'
      }

    case PAUSE_POMODORO:
      return {
        type: 'info',
        message: 'Pomodoro is paused!'
      }

    case RESUME_POMODORO:
      return {
        type: 'info',
        message: 'Pomodoro is resumed!'
      }

    case COMPLETE_POMODORO:
      return {
        type: 'success',
        message: 'Pomodoro is completed!'
      }

    default:
      return state
  }
}

export default notyReducer
