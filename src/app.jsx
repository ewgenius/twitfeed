import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { runTwitterStream } from './lib/pubnub'
import App from './containers/App/App'

// init redux
const store = createStore(() => { })

runTwitterStream(message => {
  console.log(message.favorite_count, message.retweet_count, message.favorite_count + message.retweet_count)
})

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))