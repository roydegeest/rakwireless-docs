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
        {
          title: "Quick Start Guide",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7249/quick-start-guide/',
          children: [
            'quick-start-guide/power-on-the-gateway',
            'quick-start-guide/access-the-web-management-platform'
          ]
        }
      ]
    },
    {
      title: 'Product Configuration',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        {
          title: "Web Management Platform",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7249/web-management-platform/',
          children: [
            'web-management-platform/status-page',
            'web-management-platform/network-configuration',
            'web-management-platform/lorawan-gateway-configuration',
            'web-management-platform/lora-network-server',
            'web-management-platform/services',
            'web-management-platform/system'
          ]
        },
        'eu868-spectrum-settings-guide',
        'kr920-spectrum-settings-guide'
      ]
    },
    {
      title: 'Configuration Case',   // required
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        {
          title: "Build-in LoRa Network Server Configuration",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7249/build-in-lora-server/',
          children: [
            'build-in-lora-server/built-in-lora-network-server',
            'build-in-lora-server/rak-lpwan-node'
          ]
        },
        {
          title: "Multi-RAK Gateway Mesh",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7249/multi-rak-gateway-mesh/',
          children: [
            'multi-rak-gateway-mesh/gateway-a-built-in-ns',
            'multi-rak-gateway-mesh/gateway-b-mqtt-bridge',
            'multi-rak-gateway-mesh/setup-external-mqtt-broker',
            'multi-rak-gateway-mesh/rak-lpwan-node',
            'multi-rak-gateway-mesh/traffic-testing-and-monitoring'
          ]
        },
        {
          title: "Amazon Web Service",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7249/amazon-web-service/',
          children: [
            'amazon-web-service/aws-install-chirpstack',
            'amazon-web-service/install-the-gateway-bridge',
            'amazon-web-service/configure-aws-security',
            'amazon-web-service/configure-your-gateway'
          ]
        }
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
      title: 'Product Configuration',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'device-firmware',
        {
          title: "Accessing your Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7244/accessing-your-gateway/',
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
      title: 'Product Configuration',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'device-firmware',
        {
          title: "Accessing your Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak7243/accessing-your-gateway/',
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
      title: 'Product Configuration',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'device-firmware-setup',
        {
          title: "Accessing your Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak2245-pi-hat/accessing-your-gateway/',
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
  ],
  '/en-us/quick-start/rak815/': [
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
       'interfacing-with-rak815',
       'configuring-the-lorawan',
       'application-demonstration'
      ]
    },
    {
      title: 'Miscellaneous',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'device-firmware-setup',
        'upgrading-the-firmware'
      ]
    }
  ],
  '/en-us/quick-start/rak4260/': [
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
        'burning-the-firmware',
        'interfacing-with-rak4260',
        {
          title: "Connecting to The Things Network (TTN)",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak4260/connecting-to-ttn/',
          children: [
            'connecting-to-ttn/ttn-otaa'

          ]
        }
      ]
    }
  ],
  '/en-us/quick-start/rak4200/': [
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
        'interfacing',
        'configuring-using-at-commands',
        {
          title: "Connecting to The Things Network",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak4200/connecting-to-ttn/',
          children: [
            'connecting-to-ttn/ttn-otaa',
            'connecting-to-ttn/ttn-abp',
          ]
        },
        {
          title: "Connecting to Chirpstack",
          nested: true,
          collapsable: false,
          path: '/en-us/quick-start/rak4200/connecting-to-chirpstack/',
          children: [
            'connecting-to-chirpstack/chirpstack-otaa',
            'connecting-to-chirpstack/chirpstack-abp',
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
        'burning-the-firmware',
        'upgrading-the-firmware'
      ]

    }

  ]

}