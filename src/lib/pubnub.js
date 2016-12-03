// generate random number from a to b
export function randomInt(a, b) {
  return Math.floor(Math.random() * (b - a)) + a
}

export function runTwitterStream(onMessage, fake = false) {
  PUBNUB.init({
    subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
  }).subscribe({
    channel: 'pubnub-twitter',
    message: message => {
      const fixedMessage = fake ? {
        ...message,
        favorite_count: randomInt(0, 3000),
        retweet_count: randomInt(0, 3000)
      } : message
      onMessage(fixedMessage)
    }
  })
}