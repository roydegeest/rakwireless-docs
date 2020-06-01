var quickStartGuide = require('./en-us/quick-start-guide')
var datasheet = require('./en-us/datasheet')
var faqs = require('./en-us/faqs')
var rui = require('./en-us/rui')
var usermanual = require('./en-us/user-manual')
var deploymentGuide = require('./en-us/deployment-guide')

module.exports = {
  ...quickStartGuide,
  ...datasheet,
  ...faqs,
  ...rui,
  ...usermanual,
  ...deploymentGuide
}