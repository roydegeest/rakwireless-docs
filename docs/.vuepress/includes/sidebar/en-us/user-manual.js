
 module.exports = {
    '/en-us/user-manual/': [
      {
        title: 'Web Management Platform',
        path: '',
        // collapsable: false,
        sidebarDepth: 2,
        children: [
            {
                title: "Getting Started",
                nested: true,
                collapsable: false,
                path: '/en-us/user-manual/commercial-gateways/web-management-platform/',
                children: [
                    'web-management-platform/status-page',
                    'web-management-platform/network-configuration',
                    'web-management-platform/lorawan-gateway-configuration',
                    'web-management-platform/lora-network-server',
                    'web-management-platform/services',
                    'web-management-platform/system'
                ]
            },
            //'eu868-spectrum-settings-guide',
            //'kr920-spectrum-settings-guide'
        ]
    }
    ]
 }