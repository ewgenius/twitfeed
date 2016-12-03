import {
  RECEIVE_TWEET
} from '../actions/twitter'

// create reducer for specified boundaries
export function groupReducerFactory(min, max) {
  console.log(min, max)

  const initialState = {}

  return function (state = initialState, action) {
    switch (action.type) {
      case RECEIVE_TWEET:
        {
          const { tweet, score } = action
          if (score >= min && score < max) {
            return state
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