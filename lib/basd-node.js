/**
 * @fileoverview This file contains extensions to lodash that require the Node.js environment.
 * This includes functions for managing directories, retrieving files from URLs, writing data to files, and more.
 * @module basd/lib/basd-node
 */

const _ = require('./basd')

_.util = require('util')
_.path = require('path')
_.fs = require('fs')
_.fsp = _.fs.promises
_.url = require('url')
_.qs = require('querystring')
_.print = (obj, showHidden) => _.log(_.util.inspect(obj, { depth: null, colors: true, showHidden }))


/**
 * Makes a directory at the given path.
 *
 * @param {string} dirpath - The path where to create the directory.
 * @throws {Error} If an error other than "EEXIST" occurs.
 * @returns {string} The path of the created directory.
 */
const mkdir = _.mkdir = dirpath => {
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

/**
 * Recursively removes a directory at the given path.
 *
 * @param {string} dirpath - The path of the directory to remove.
 * @returns {string} The path of the removed directory.
 */
const rmdir = _.rmdir = dirpath => {
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

/**
 * Retrieves a file from a URL.
 *
 * @param {string} [url='https://i.imgur.com/SHo6Fub.jpeg'] - The URL of the file to retrieve.
 * @param {Axios} axios - The Axios instance to use for the HTTP request.
 * @returns {Promise<Buffer>} A promise that resolves with the file data.
 */
const getFile = _.getFile = (url = 'https://i.imgur.com/SHo6Fub.jpeg', axios) => {
  return axios({ url, responseType: 'arraybuffer' }).then(res => res.data)
}

/**
 * Writes data to a file.
 *
 * @param {Buffer} buff - The data to write to the file.
 * @param {string} [path] - The path of the file. If not specified, it defaults to 'based-1.png' in the current directory.
 * @throws {Error} If an error occurs during writing.
 */
const putFile = _.putFile = (buff, path) => {
  path = path || _.path.resolve(__dirname, 'based-1.png')
  _.fs.writeFileSync(path, buff)
}

module.exports = _
