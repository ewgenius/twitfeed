import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'

import { groupReducerFactory } from './reducers/group'
import { RECEIVE_TWEET } from './actions/twitter'
import App from './containers/App/App'

// init redux
const loggerMiddleware = createLogger({
  predicate: (getState, action) => {
    if (action.type === RECEIVE_TWEET)
      return false
    return true
  }
})

const store = createStore(
  combineReducers({
    group0: groupReducerFactory(0, 100),
    group1: groupReducerFactory(100, 500),
    group2: groupReducerFactory(500, 1000),
    group3: groupReducerFactory(1000, 2000),
    group4: groupReducerFactory(2000, Infinity)
  }),
  applyMiddleware(loggerMiddleware)
)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))