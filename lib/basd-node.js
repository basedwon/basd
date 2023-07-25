const _ = require('./basd')

_.util = require('util')
_.path = require('path')
_.fs = require('fs')
_.fsp = _.fs.promises
_.url = require('url')
_.qs = require('querystring')
_.print = (obj, showHidden) => _.log(_.util.inspect(obj, { depth: null, colors: true, showHidden }))

_.mkdir = dirpath => {
  if (!_.fs.existsSync(dirpath)) {
    try {
      _.fs.mkdirSync(dirpath, { recursive: true })
    } catch (err) {
      if (err.code !== 'EEXIST')
        throw err
    }
  }
  return dirpath
}
_.rmdir = dirpath => {
  function _rmdir(dirpath) {
    if (_.fs.existsSync(dirpath)) {
      _.fs.readdirSync(dirpath).forEach(file => {
        const curpath = dirpath + '/' + file
        if (_.fs.lstatSync(curpath).isDirectory())
          _rmdir(curpath)
        else
          _.fs.unlinkSync(curpath)
      })
      _.fs.rmdirSync(dirpath)
    }
  }
  _rmdir(dirpath)
  return dirpath
}
_.getFile = (url = 'https://i.imgur.com/SHo6Fub.jpeg', axios) => {
  return axios({ url, responseType: 'arraybuffer' }).then(res => res.data)
}
_.putFile = (buff, path) => {
  path = path || _.path.resolve(__dirname, 'based-1.png')
  _.fs.writeFileSync(path, buff)
}

module.exports = _


const { log } = _

async function test() {
  const writer = new _.Pipe(data => log('got datar', data))
  const reader = new _.Pipe()
  reader.pipe(writer)
  reader.push('goose')
  log(writer)
}

_.executor(test)
