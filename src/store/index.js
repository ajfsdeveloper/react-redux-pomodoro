import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { logger } = require(`redux-logger`)

  middlewares.push(logger)
}

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middlewares)
))

export default store
