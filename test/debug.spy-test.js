const test = require('tape')
const _ = require('lodash')
const sinon = require('sinon')

_.DEBUG = process.env.DEBUG || 'debug'

// Your function here
// ...

// Spy on console methods
const logSpy = sinon.spy(console, 'log')
const warnSpy = sinon.spy(console, 'warn')
const errorSpy = sinon.spy(console, 'error')

test('debug function', (t) => {
  _.debug('info', 'info level log')
  t.ok(logSpy.calledWith(':: info ::', 'info level log'), 'info level logs correctly')

  _.debug('warn', 'warn level log')
  t.ok(warnSpy.calledWith(':: warn ::', 'warn level log'), 'warn level logs correctly')

  _.debug('error', 'error level log')
  t.ok(errorSpy.calledWith(':: error ::', 'error level log'), 'error level logs correctly')

  _.debug('mute', 'this should not be logged')
  t.ok(!logSpy.calledWith('this should not be logged'), 'mute level does not log')

  _.DEBUG = 'warn'
  _.debug('info', 'this should not be logged')
  t.ok(!logSpy.calledWith(':: info ::', 'this should not be logged'), 'info level does not log when debug level is warn')

  _.DEBUG = 'error'
  _.debug('warn', 'this should not be logged')
  t.ok(!warnSpy.calledWith(':: warn ::', 'this should not be logged'), 'warn level does not log when debug level is error')

  t.end()
})

// Restore console methods
logSpy.restore()
warnSpy.restore()
errorSpy.restore()
