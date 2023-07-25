const _ = require('@basd/base')
const Logger = require('@basd/logger')
const Pipe = require('@basd/pipe')
const msgpack = require('msgpack-lite')
const nacl = require('tweetnacl')
const mimetics = require('mimetics')

const BYTE_LENGTH = _.BYTE_LENGTH = 32

_.Pipe = Pipe
_.Stream = Pipe.Stream
_.stream = Pipe.stream
_.Logger = Logger
_.mimetics = mimetics
_.fileType = mimetics
_.msgpack = msgpack
_.nacl = nacl

_.hash = (data, length = BYTE_LENGTH, encode = true) => {
  if (_.isNil(data))
    throw new Error(`hash data cannot be nil`)
  if (_.isObject(data))
    data = _.sortChars(data)
  const buffer = _.isBinary(data) || data instanceof Uint8Array ? data : _.msgpack.encode(data)
  let output = nacl.hash(buffer).slice(0, length)
  if (encode && encode === 'hex')
    output = _.toBuffer(output).toString('hex')
  else if (encode)
    output = _.encode(output)
  else
    output = _.toBuffer(output)
  return output
}
_.uuid = (bytes = 12, prefix = '') => {
  let buffer = _.nacl.randomBytes(32)
  buffer = buffer.slice(0, bytes)
  return prefix + _.encode(buffer)
}

module.exports = _

