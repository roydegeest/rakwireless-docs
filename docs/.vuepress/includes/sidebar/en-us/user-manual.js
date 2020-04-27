module.exports = {
    '/en-us/user-manual/': [
      {
        title: "← Back to User Manuals",
            nested: true,
            collapsable: false,
            path: '/en-us/user-manual/',
            children: [

            ]
      },
      {
        title: 'Web Management Platform',
        path: '',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            {
                title: "Getting Started",
                nested: false,
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
    },
    {
      title: "Gateway Firmware Burning",
          nested: true,
          collapsable: false,
          path: '/en-us/user-manual/gateway-firmware-burning',
          children: [
            'gateway-firmware-burning/firmwares',
            'gateway-firmware-burning/firmware-burning'
          ]
    }
  ]
}