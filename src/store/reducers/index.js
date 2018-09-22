import { combineReducers } from 'redux'

import timerReducer from './timerReducer'
import notyReducer from './notyReducer'

const rootReducer = combineReducers({
  timer: timerReducer,
  noty: notyReducer
})

export default rootReducer
