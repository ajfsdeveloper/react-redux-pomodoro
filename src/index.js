import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import App from './App'

import timerReducer from './store/reducers/timerReducer'

// import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootReducer = combineReducers({
  timer: timerReducer
})

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { logger } = require(`redux-logger`)

  middlewares.push(logger)
}

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middlewares)
))

const app = (
  <Provider store={store}>
    <App defaultTime="10:30" />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// registerServiceWorker()
