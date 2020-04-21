var quickstart = require('./en-us/quick-start')
var datasheet = require('./en-us/datasheet')
var faq = require('./en-us/faq')
var rui = require('./en-us/rui')
var usermanual = require('./en-us/user-manual')
var deploymentGuide = require('./en-us/deployment-guide')

module.exports = {
  ...quickstart,
  ...datasheet,
  ...faq,
  ...rui,
  ...usermanual,
  ...deploymentGuide
}