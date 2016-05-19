import test from 'ava'
import sum from '../src/sum'

test('Basic', (assert)=> {
  assert.is(sum(2, 5), 7)
})

test('Return as Function', (assert)=> {
  assert.is(sum(2)(5), 7)
})

test('With multi arguments', (assert)=> {
  assert.is(sum(2, 5, 3, 10), 20)
})

test('With array arguments', (assert)=> {
  assert.is(sum([2, 5, 3, 10]), 20)
})
