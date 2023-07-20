const _ = require('lodash')

_._ = _
_.isBrowser = typeof window !== `undefined`
_.log = console.log.bind(console)
_.print = _.log
_.objProp = (obj, key, value, opts = {}) => {
  if (!_.isNil(opts.show)) {
    opts.enumerable = opts.show
    delete opts.show
  }
  if (!_.isNil(opts.enum)) {
    opts.enumerable = opts.enum
    delete opts.enum
  }
  if (value !== undefined) opts.value = value
  Object.defineProperty(obj, key, opts)
}
_.proxyGet = (obj, callback) => new Proxy(obj, {
  get: (target, prop, receiver) => {
    if (Reflect.has(target, prop) || !_.isString(prop) || prop === 'then')
      return Reflect.get(target, prop, receiver)
    return callback(target, prop, receiver)
  },
})
_.proxyNew = (obj) => new Proxy(obj, {
  apply: (target, __, args) => new target(...args),
})
_.isBinary = (value) => _.isBrowser ? _.isArrayBuffer(value) : _.isBuffer(value)
_.toBuffer = (data, encoding) => {
  if (!_.isBrowser) return Buffer.from(data, encoding)
  else if (_.isString(data))
    return new Uint8Array(_.map(data, (char) => char.charCodeAt(0)))
  else if (_.isArray(data)) return new Uint8Array(data)
  throw new Error('Unsupported data type')
}

module.exports = _
