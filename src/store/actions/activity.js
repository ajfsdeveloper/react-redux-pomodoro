import {
  START_POMODORO,
  STOP_POMODORO,
  PAUSE_POMODORO,
  RESUME_POMODORO,
  COMPLETE_POMODORO
} from './actionTypes'

export const startPomodoro = () => ({ type: START_POMODORO })

export const stopPomodoro = () => ({ type: STOP_POMODORO })

export const pausePomodoro = () => ({ type: PAUSE_POMODORO })

export const resumePomodoro = () => ({ type: RESUME_POMODORO })

export const completePomodoro = () => ({ type: COMPLETE_POMODORO })
