module.exports = {
    '/en-us/quick-start/rak7246/':[
        {
            title: 'Product Overview',   // required
            path: '',      // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2,    // optional, defaults to 1
            children: [
                '',
                'overview'
            ]
        },
        {
            title: 'Product Configuration',   // required
            path: '',      // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2,    // optional, defaults to 1
            children: [
                'device-firmware',
                'accessing-your-gateway',
                'accessing-the-internet',
                'configuring-the-gateway',
                'connecting-to-the-ttn',
                'connecting-with-chirpstack',
                'connecting-to-resiot'
            ]
        },
    ],
    '/en-us/quick-start/rak7249/' :[
        '',
        'overview'
    ]
}