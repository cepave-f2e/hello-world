import test from 'ava'
import moveArrayTo from '../src/move-array-to'

const arr = [1, 2, 3, 4, 5]

test('basic index', assert => {
  assert.deepEqual(moveArrayTo(arr, 2), [3, 1, 2, 4, 5])
})

test('allow array argument', assert => {
  assert.deepEqual(moveArrayTo(arr, [2]), [3, 1, 2, 4, 5])
})

test('allow array argument2', assert => {
  assert.deepEqual(moveArrayTo(arr, [1, 3]), [2, 4, 1, 3, 5])
})

test('should be throw error if doesn\'t match any index', assert => {
  assert.throws(()=> {
    moveArrayTo(arr, -1)
  }, /has no match index/)
})
