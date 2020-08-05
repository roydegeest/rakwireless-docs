import install from 'quasar/src/install.js'
import * as components from 'quasar/src/components.js'
import * as directives from 'quasar/src/directives.js'
import * as plugins from 'quasar/src/plugins.js'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  // ...apply enhancements to the app
  install.call(Vue, Vue, {
    components,
    directives,
    plugins,
    config: {}
  })
}