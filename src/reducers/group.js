import {
  RECEIVE_TWEET
} from '../actions/twitter'
import BinaryHeap from '../lib/BinaryHeap'
import {
  List
} from 'immutable'

// new BinaryHeap(tweet => tweet.favorite_count + tweet.retweet_count)
// create reducer for specified boundaries
export function groupReducerFactory(min, max) {
  console.log(min, max)

  const initialState = {
    name: `${min} - ${max}`,
    updated: Date.now(),
    maxScore: 0,
    minScore: 0,
    totalRetweets: 0,
    totalFavorites: 0,
    showIndex: 0,
    topTweet: null,
    items: List()
  }

  return function (state = initialState, action) {
    switch (action.type) {
      case RECEIVE_TWEET:
        {
          const tweet = action.tweet
            // tweet is in range
          if (tweet.score >= min && tweet.score < max) {
            const last = state.items.last()

            if (state.items.count() < 30 || tweet.score > last.score) {
              return {
                ...state,
                minScore: Math.min(state.minScore, tweet.score),
                maxScore: Math.max(state.maxScore, tweet.score),
                updated: Date.now(),
                items: (state.items.count() >= 30 ? state.items.remove(0) : state.items)
                  .push(tweet)
                  .sortBy(tweet => tweet.score)
              }
            } else {
              return state
            }
          }
          return state
        }
      default:
        {
          return state
        }
    }
  }
}