import { combineReducers } from 'redux'

import timerReducer from './timerReducer'
import notyReducer from './notyReducer'
import activityReducer from './activityReducer'

const rootReducer = combineReducers({
  timer: timerReducer,
  noty: notyReducer,
  activity: activityReducer
})

export default rootReducer
