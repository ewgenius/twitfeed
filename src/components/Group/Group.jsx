import React, { Component, PropTypes } from 'react'

export default class Group extends Component {
  static propTypes: {
    group: PropTypes.object.isRequired
  }

  render() {
    const {group} = this.props
    const topTweet = group.items.get(group.showIndex)
    if (group)
      return <div className='group'>
        <div className='group-header'>
          <h2>{group.name}</h2>
          {group.items.count()}
        </div>

        {topTweet && <div>
          <div>{topTweet.text}</div>
          {topTweet.favorite_count} {topTweet.retweet_count}
        </div>}

      </div>
    else return <div />
  }
}