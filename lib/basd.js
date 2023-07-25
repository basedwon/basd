/**
 * @fileoverview This file contains extensions to lodash for a more enhanced usage.
 * This includes functions for data hashing, generating UUIDs, and more. 
 * It should be used in browser environments.
 * @module basd/lib/basd
 */

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

/**
 * Hashes the given data.
 *
 * @param {any} data - The data to hash.
 * @param {number} [length=BYTE_LENGTH] - The length of the hashed output.
 * @param {boolean|string} [encode=true] - Whether to encode the output.
 * If a string is passed, it specifies the type of encoding ('hex' is currently supported).
 * @throws {Error} If data is nil.
 * @returns {Buffer|string} The hashed output.
 */
const hash = _.hash = (data, length = BYTE_LENGTH, encode = true) => {
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

/**
 * Generates a universally unique identifier.
 *
 * @param {number} [bytes=12] - The number of random bytes to generate.
 * @param {string} [prefix=''] - The prefix to prepend to the UUID.
 * @returns {string} The generated UUID.
 */
const uuid = _.uuid = (bytes = 12, prefix = '') => {
  let buffer = _.nacl.randomBytes(32)
  buffer = buffer.slice(0, bytes)
  return prefix + _.encode(buffer)
}

module.exports = _

