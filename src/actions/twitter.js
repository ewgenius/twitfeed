export const RECEIVE_TWEET = 'RECEIVE_TWEET'

export const receiveTweet = tweet => ({
  type: RECEIVE_TWEET,
  tweet,
  score: tweet.favorite_count + tweet.retweet_count
})