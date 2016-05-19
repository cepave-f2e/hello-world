import test from 'ava'
import omitFuncs from '../src/omit-funcs'

test('should be omitted funcs with deep', assert => {
  const props = {
    a: 1,
    b: 2,
    deepFunc: {
      a() {},
      b() {},
      c: 1,
    },
    c() {},
    d() {},
  }
  assert.deepEqual(omitFuncs(props), {
    a:1,
    b:2,
    deepFunc: {
      c: 1
    }
  })
})

test('should be omitted funcs with deep2', assert => {
  const props = {
    x: 'x',
    y: 'y',
    xy: {
      zz() {},
    },
    z() {},
  }
  assert.deepEqual(omitFuncs(props), {
    x: 'x',
    y: 'y',
    xy: {}
  })
})

test('should be omitted funcs deep with null and undefined', assert => {
  const props = {
    x: 'x',
    y: 'y',
    xy: {
      fn() {},
    },
    fn() {},
    undef: undefined,
    nu: null,
  }
  assert.deepEqual(omitFuncs(props), {
    x: 'x',
    y: 'y',
    xy: {},
    undef: undefined,
    nu: null,
  })
})

test('should be omitted funcs with array', assert => {
  const newProps = omitFuncs({
    x: 'x',
    y: 'y',
    fn() {},
    arr: [1, 2, 3]
  })

  const expect = {
    x: 'x',
    y: 'y',
    arr: [1, 2, 3]
  }
  assert.deepEqual(newProps, expect)
  newProps.arr.push(4)
  assert.deepEqual(expect.arr, [1,2,3])
})

test('it doesnt effect the origin props', assert => {
  const props = {
    a: 1,
    b: 2,
    deepFunc: {
      a() {},
      b() {},
      c: 1,
    },
    c() {},
    d() {},
  }
  const newProps = omitFuncs(props)
  newProps.deepFunc.a = 'a'
  newProps.deepFunc.b = 'b'

  assert.is(props.a, 1)
  assert.is(props.b, 2)
  assert.true(typeof props.c === 'function')
  assert.true(typeof props.d === 'function')
  assert.true(typeof props.deepFunc.a === 'function')
  assert.true(typeof props.deepFunc.b === 'function')
})
