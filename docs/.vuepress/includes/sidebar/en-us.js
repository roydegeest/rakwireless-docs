module.exports = {
  '/en-us/quick-start/rak7246g/': [
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
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        'device-firmware',
        {
          title: "Accessing your Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7246g/accessing-your-gateway/',
          children: [
            'accessing-your-gateway/accessing-the-internet'
          ]
        },
        'configuring-the-gateway',
        'connecting-to-the-ttn',
        'connecting-with-chirpstack'
      ]
    }
  ],
  '/en-us/quick-start/rak7249/': [
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
        'web-management-platform',
        'lora-concentrator-spectrum-eu868-settings-guide',
        'lora-concentrator-spectrum-kr920-settings-guide'
      ]
    },
    {
      title: 'Configuration Case',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        'rak7249-build-in-lora-network-server-rak811',
        'rak7249-build-in-lora-server-multi-rak-gateway-mesh-rak811',
        'aws-ec2-chirpstack-rak7249-gateway'
      ]
    },
    {
      title: 'Outdoor Deployment',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        'gateway-installation-guide',
        'solar-panel-and-battery-kit-installation',
        'lightning-protection'
      ]
    },
  ],
  '/en-us/quick-start/rak7244/': [
    {
      title: 'Product Overview',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
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
        'connecting-with-chirpstack'
      ]
    }
  ],
  '/en-us/quick-start/rak7243/': [
    {
      title: 'Product Overview',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
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
        'connecting-with-chirpstack'
      ]
    }
  ],
  '/en-us/quick-start/rak7243c/': [
    {
      title: 'Product Overview',   // required
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        '',
        'quick-start-guide'
      ]
    },
    {
      title: 'Product Configuration',   // required
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        'device-firmware-setup',
        {
          title: "Accessing your Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7243c/accessing-your-gateway/',
          children: [
            'accessing-your-gateway/accessing-the-internet'
          ]
        },
        'configuring-the-gateway',
        'connecting-to-the-things-network-ttn',
        'connect-the-lora-gateway-with-chirpstack'
      ]
    }
  ],
  '/en-us/quick-start/rak2247/': [
    {
      title: 'Product Overview',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
      children: [
        '',
        'overview'
      ]
    },
    {
      title: 'Product Configuration',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
      children: [
        'rak2247linuxpc'
      ]
    }
  ],
  '/en-us/quick-start/rak2245-pi-hat/': [
    {
      title: 'Product Overview',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        '',
        'quick-start-guide'
      ]
    },
    {
      title: 'Product Configuration',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
      children: [
        'device-firmware-setup',
        'accessing-your-gateway',
        'accessing-the-internet',
        'configuring-the-gateway',
        'connecting-to-the-ttn',
        'connecting-with-chirpstack'
      ]
    }
  ],
  '/en-us/quick-start/rak2245-stamp/': [
    {
      title: 'Product Overview',   // required
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        '',
        'quick-start-guide'
      ]
    },
    {
      title: 'Product Configuration',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'device-firmware-setup',
        {
          title: "Accessing your Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak2245-stamp/accessing-your-gateway/',
          children: [
            'accessing-your-gateway/accessing-the-internet'
          ]
        },
        'configuring-the-gateway',
        'connection-to-ttn',
        'connect-with-chirpstack'
      ]
    }
  ],
  '/en-us/quick-start/rak7244c/': [
    {
      title: 'Product Overview',   // required
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        '',
        'quick-start-guide'
      ]
    },
    {
      title: 'Product Configuration',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'device-firmware-setup',
        {
          title: "Accessing your Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7244c/accessing-your-gateway/',
          children: [
            'accessing-your-gateway/accessing-the-internet'
          ]
        },
        'configuring-the-gateway',
        'connecting-to-the-ttn',
        'connecting-with-chirpstack'
      ]
    }

  ],
  '/en-us/quick-start/rak811/': [
    {
      title: 'Product Overview',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '',
        'quick-start-guide'
      ]
    },
    {
      title: 'Product Configuration',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'interfacing-with-rak811',
        'configuring-your-rak811',
        {
          title: "Connecting to the Things Network (TTN)",
          collapsable: false,
          nested: true,
          path: '/en-us/quick-start/rak811/connecting-to-ttn/',
          children: [
            'connecting-to-ttn/ttn-otaa-mode',
            'connecting-to-ttn/ttn-abp-mode'
          ]
        },
        {
          title: "Connecting to ChirpStack",
          collapsable: false,
          nested: true,
          path: '/en-us/quick-start/rak811/connecting-to-chirpstack/',
          children: [
            'connecting-to-chirpstack/chirpstack-otaa-mode',
            'connecting-to-chirpstack/chirpstack-abp-mode'
          ]
        },
        'lora-p2p-mode'
      ]
    },
    {
      title: 'Miscellaneous',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'upgrading-the-firmware',
        'rui-online-compiler',
        {
          title: "Interfacing your RAK811 LPWAN Evaluation Board with Arduino Boards",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak811/interfacing-with-arduino/',
          children: [
            'interfacing-with-arduino/hardware-interfacing',
            'interfacing-with-arduino/firmware-flashing',
            'interfacing-with-arduino/arduino-connection-guide'
          ]
        }
      ]
    }
  ]
}