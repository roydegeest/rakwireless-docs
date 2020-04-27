module.exports = {
    '/en-us/user-manual/': [
      {
        title: 'Commercial Gateways',   // required
        path: '',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          {
            title: "Web Management Platform",
            nested: true,
            collapsable: false,
            path: '/en-us/user-manual/web-management-platform',
            children: [
              'web-management-platform/status-page',
              'web-management-platform/network-configuration',
              'web-management-platform/lorawan-gateway-configuration',
              'web-management-platform/lora-network-server',
              'web-management-platform/services',
              'web-management-platform/system'
            ]
          },
          {
            title: "Spectrum Settings Guide",
            nested: true,
            collapsable: false,
            path: '/en-us/user-manual/spectrum-settings-guide',
            children: [
              'spectrum-settings-guide/eu868-spectrum-settings-guide',
              'spectrum-settings-guide/kr920-spectrum-settings-guide'
            ]
          }
        ]
      },
      {
        title: 'Developer Gateways',   // required
        path: '',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          {
            title: "Gateway Firmware Burning",
            nested: true,
            collapsable: false,
            path: '/en-us/user-manual/gateway-firmware-burning/',
            children: [

            ]
          }
        ]
      }
    ]
}