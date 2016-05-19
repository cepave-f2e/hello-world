import test from 'ava'
import querystringParser from '../src/querystring-parser'

test('parser url with string array/object', assert => {
  const url = 'http://localhost:8080/test?a=1?&b={a:"1",b:2}&c=[1,2]#hash'
  assert.deepEqual(querystringParser(url), {
    a: '1?',
    b: {a: '1', b: 2},
    c: [1, 2]
  })
})

test('parser url 2', assert => {
  const url = 'http://localhost:8081/test?x=1&y=2#hash'
  assert.deepEqual(querystringParser(url), {
    x: '1',
    y: '2',
  })
})

test('parser url with only ?', assert => {
  const url = 'http://localhost:8082/test?'
  assert.deepEqual(querystringParser(url), {})
})

test('parser url with no querystring', assert => {
  const url = 'http://localhost:8083/test'
  assert.deepEqual(querystringParser(url), {})
})

test('parser url normal', assert => {
  const url = 'http://localhost:8085/test?a=?1&b=2'
  assert.deepEqual(querystringParser(url), {
    a: '?1',
    b: '2',
  })
})
