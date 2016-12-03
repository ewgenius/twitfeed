import {
  randomInt
} from './pubnub'

function checkRandom() {
  const a = 1
  const b = 2

  const randomValue = randomInt(a, b)
  expect(randomValue)
    .toBeGreaterThanOrEqual(a)
  expect(randomValue)
    .toBeLessThan(b)
}

it('generates random number from a to b', () => {
  for (let i = 0; i < 100; i++) {
    checkRandom()
  }
})