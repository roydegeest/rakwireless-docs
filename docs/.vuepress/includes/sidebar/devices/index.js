var wislinkLora = require('./wislink-lora')
var wisnode = require('./wisnode')
var wisduino = require('./wisduino')

module.exports = {
  ...wislinkLora,
  ...wisnode,
  ...wisduino
}