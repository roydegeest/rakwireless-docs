var wislinkLora = require('./wislink-lora')
var wisgate = require('./wisgate')
var wisbee = require('./wisbee')
var wishat = require('./wishat')

module.exports = {
  ...wislinkLora,
  ...wisgate,
  ...wisbee,
  ...wishat,
}