import test from 'tape'
import {min} from '../js/math-min'

test('min() finds the smallest number in an array', assert => {
  const actual = min(12, 40)
  const expected = 12
  assert.equal(actual, expected, `Should return ${expected}`)

  const actual2 = min(12, 2)
  const expected2 = 2
  assert.equal(actual2, expected2, `Should return ${expected}`)

  const actual3 = min('d', 'a')
  const expected3 = NaN
  assert.equal(actual3, expected3, `Should return ${expected}`)
  assert.end()
})
