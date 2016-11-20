export function runTwitterStream(onMessage) {
  PUBNUB.init({
    subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
  }).subscribe({
    channel: 'pubnub-twitter',
    message: onMessage
  })
}