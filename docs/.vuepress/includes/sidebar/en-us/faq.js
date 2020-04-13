module.exports = {
    '/en-us/faq/': [
        {
          title: 'RAKwireless Help Center',   // required
          path: '',      // optional, which should be a absolute path.
          collapsable: false, // optional, defaults to true
          sidebarDepth: 2,    // optional, defaults to 1
          children: [
            'hardware',
            'software'
          ]
        }
    ]
}