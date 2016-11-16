import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App/App'

// init redux
const store = createStore(() => { })

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))