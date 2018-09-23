import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

// import registerServiceWorker from './registerServiceWorker'

const app = (
  <Provider store={store}>
    <App defaultTime="00:05" />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)

// registerServiceWorker()
