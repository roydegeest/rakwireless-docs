var quickStartGuide = require('./sidebar/quickstart-guide')
var datasheet = require('./sidebar/datasheet')
var faqs = require('./sidebar/faqs')
var rui = require('./sidebar/rui')
var usermanual = require('./sidebar/user-manual')
var deploymentGuide = require('./sidebar/deployment-guide')

module.exports = {
  ...quickStartGuide,
  ...datasheet,
  ...faqs,
  ...rui,
  ...usermanual,
  ...deploymentGuide
}