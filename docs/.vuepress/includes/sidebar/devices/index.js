var wislink = require('./wislink')
var wisnode = require('./wisnode')
var wisduino = require('./wisduino')
var wistrio = require('./wistrio')
module.exports = {
  ...wislink,
  ...wisnode,
  ...wisduino,
  ...wistrio
}