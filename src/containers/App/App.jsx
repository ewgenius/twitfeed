import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { runTwitterStream } from '../../lib/pubnub'
import { receiveTweet } from '../../actions/twitter'

const mapProps = state => ({
  group0: state.group0,
  group1: state.group1,
  group2: state.group2,
  group3: state.group3,
  group4: state.group4
})

class App extends Component {
  constructor() {
    super()

    runTwitterStream(tweet => {
      this.props.dispatch(receiveTweet(tweet))
    }, true)
  }

  render() {
    return <div className='App'>
    </div>
  }
}

export default connect(mapProps)(App)
