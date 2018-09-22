import {
  START_POMODORO,
  STOP_POMODORO,
  PAUSE_POMODORO,
  RESUME_POMODORO
} from './actionTypes'

export const startPomodoro = () => {
  return {
    type: START_POMODORO
  }
}

export const stopPomodoro = () => {
  return {
    type: STOP_POMODORO
  }
}

export const pausePomodoro = () => {
  return {
    type: PAUSE_POMODORO
  }
}

export const resumePomodoro = () => {
  return {
    type: RESUME_POMODORO
  }
}
