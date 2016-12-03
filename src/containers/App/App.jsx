import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { runTwitterStream } from '../../lib/pubnub'
import { receiveTweet } from '../../actions/twitter'
import Group from '../../components/Group/Group'

const mapProps = state => ({
  group0: state.group0,
  group1: state.group1,
  group2: state.group2,
  group3: state.group3,
  group4: state.group4
})

function sortByUpdated(a, b) {
  if (a.updated > b.updated) {
    return -1
  } else if (a.updated < b.updated) {
    return 1
  }
  return 0
}

class App extends Component {
  constructor() {
    super()

    runTwitterStream(tweet => {
      this.props.dispatch(receiveTweet(tweet))
    }, true)
  }

  render() {
    const { group0, group1, group2, group3, group4 } = this.props
    return <div className='App'>
      {[group0, group1, group2, group3, group4]
        .sort(sortByUpdated)
        .map((group, i) => <Group key={i} group={group} />)
      }
    </div>
  }
}

export default connect(mapProps)(App)
