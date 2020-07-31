var wislink = require('./wislink')
var wisnode = require('./wisnode')
var wisduino = require('./wisduino')

module.exports = {
  ...wislink,
  ...wisnode,
  ...wisduino
}