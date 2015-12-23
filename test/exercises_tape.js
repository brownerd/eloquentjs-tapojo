import test from 'tape'
import {min} from '../js/math-min'
import {range, ranger, sum} from '../js/sum-range'
import {countBs, countChar} from '../js/bean-counter'
import {reverseArray, reverseArrayInPlace} from '../js/reverse-array'

test('min() finds the smallest number in an array', assert => {
  const actual = min(12, 40)
  const expected = 12
  assert.equal(actual, expected,
    `Should return ${expected}`)

  const actual2 = min(12, 2)
  const expected2 = 2
  assert.equal(actual2, expected2,
    `Should return ${expected}`)
  assert.end()
})

test('range() will fill the numbers bewteen two numbers', assert => {
  const actual = range(1, 5)
  const expected = [1, 2, 3, 4, 5]
  assert.deepEqual(actual, expected,
    `Should return ${expected}`)
  assert.end()
})

test('ranger() will fill numbers between to numbers at an incrimented value', assert => {
  const actual = ranger(1, 10, 2)
  const expected = [1, 3, 5, 7, 9]
  assert.deepEqual(actual, expected,
    `Should be ${expected}`)


  const actual2 = ranger(1, 10, 3)
  const expected2 = [1, 4, 7, 10]
  assert.deepEqual(actual2, expected2,
    `Should be ${expected}`)
  assert.end()
})

test('sum() takes all the items in an array and adds them together', assert => {
  const actual = sum([1, 2, 3, 4, 5])
  const expected = 15
  assert.equal(actual, expected,
    `Should be ${expected}`)
  assert.end()
})

test('contBs() counts all the Bs in a string', assert => {
  const actual = countBs('BasdflkBasdflkjasdfB')
  const expected = 3
  assert.equal(actual, expected,
    `Should equal ${expected}`)
  assert.end()
})

test('countChar() counts the occurances of a specified letter in a string', assert => {
  const actual = countChar('asdlfkjaw;lkaaadf', 'a')
  const expected = 5
  assert.equal(actual, expected,
    `Should equal ${expected}`)
  assert.end()
})

test('reverseArray() reverses the items in an array', assert => {
  const actual = reverseArray([1, 2, 3])
  const expected = [3, 2, 1]
  assert.deepEqual(actual, expected,
    `Should reverse items and yeild ${expected}`)
  assert.end()
})

test('reverseArrayInPlace() reverses the items in an array', assert => {
  const actual = reverseArrayInPlace(1, 2, 3)
  const expected = [3, 2, 1]
  assert.deepEqual(actual, expected,
    `Should reverse items and yeild ${expected}`)
  assert.end()
})
