import PubNub from 'pubnub'

const pubnub = new PubNub({
  subscribeKey: 'sub-c-62905d82-abc1-11e6-80fa-02ee2ddab7fe',
  //publishKey: 'pub-c-7449096e-dc32-4c86-879e-c1c00c0425ba',
  //ssl: (location.protocol.toLowerCase() === 'https:')
})

console.log(pubnub.subscribe)

pubnub.subscribe({
  channel: 'pubnub-twitter',
  callback: msg => {
    console.log(msg)
  }
})

pubnub.addListener({
  message: (message) => {
    console.log('MESSSAGE:', message)
  },
  presence: (presence) => {
    console.log('PRESENCE', presence)
  },
  status: (status) => {
    console.log('STATUS:', status)
  }
})