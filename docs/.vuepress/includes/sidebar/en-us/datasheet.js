module.exports = {
  '/en-us/datasheet/': [
    '',
    {
      title: 'LPWAN Gateways',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        {
          title: "RAK831 LPWAN Gateway Concentrator",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak831/',
          children: [
            'rak831/board-overview',
            'rak831/pin-definition',
            'rak831/interfaces',
            'rak831/electrical-characteristics',
            'rak831/rf-characteristics'
          ]
        },
        {
          title: "RAK833 LPWAN Gateway Concentrator Module",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak833/',
          children: [
            'rak833/board-overview',
            'rak833/pin-definition',
            'rak833/interfaces',
            'rak833/electrical-characteristics',
            'rak833/rf-characteristics',
            'rak833/mechanical-characteristics',
            'rak833/schematic-diagrams',
            'rak833/reference-applications'
          ]
        },
        {
          title: "RAK2245 Pi Hat - LPWAN Gateway Concentrator Module",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak2245-pihat/',
          children: [
            'rak2245-pihat/board-overview',
            'rak2245-pihat/operating-frequencies',
            'rak2245-pihat/interfaces',
            'rak2245-pihat/pin-definition',
            'rak2245-pihat/electrical-characteristics',
            'rak2245-pihat/rf-characteristics'
          ]
        },
        {
          title: "RAK2245 Stamp Edition - LPWAN Gateway Concentrator Module",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak2245-stamp/',
          children: [
            'rak2245-stamp/board-overview',
            'rak2245-stamp/operating-frequencies',
            'rak2245-stamp/interfaces',
            'rak2245-stamp/pin-definition',
            'rak2245-stamp/electrical-characteristics',
            'rak2245-stamp/rf-characteristics'
          ]
        },
        {
          title: "RAK2247 LPWAN Gateway Concentrator Module",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak2247/',
          children: [
            'rak2247/board-overview',
            'rak2247/operating-frequencies',
            'rak2247/pin-definition',
            'rak2247/interfaces',
            'rak2247/electrical-characteristics',
            'rak2247/rf-characteristics'
          ]
        },
        {
          title: "RAK2287 WisLink- LPWAN Gateway Module",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak2287/',
          children: [
            'rak2287/board-overview',
            'rak2287/operating-frequencies',
            'rak2287/pin-definition',
            'rak2287/interfaces',
            'rak2287/electrical-characteristics',
            'rak2287/rf-characteristics',
            'rak2287/lora-antenna',
            'rak2287/schematic-diagram'
          ]
        },
        {
          title: "RAK7243C Pilot Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak7243c/',
          children: [
            'rak7243c/board-overview',
            'rak7243c/interfaces',
            'rak7243c/system-structure',
            'rak7243c/operating-frequencies',
            'rak7243c/cellular-frequency-bands',
            'rak7243c/pin-definition',
            'rak7243c/power-requirements',
            'rak7243c/environmental-requirements',
            'rak7243c/lora-rf-characteristics',
            'rak7243c/antenna-specifications'
          ]
        },
        {
          title: "RAK7244C LPWAN Developer Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak7244c/',
          children: [
            'rak7244c/board-overview',
            'rak7244c/interfaces',
            'rak7244c/system-structure',
            'rak7244c/operating-frequencies',
            'rak7244c/cellular-frequency-bands',
            'rak7244c/hardware-structure',
            'rak7244c/power-requirements',
            'rak7244c/environmental-requirements',
            'rak7244c/lora-rf-characteristics',
            'rak7244c/antenna-specifications'
          ]
        },
        {
          title: "RAK7258 Micro Gateway",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak7258/',
          children: [
            'rak7258/board-overview',
            'rak7258/product-specifications',
            'rak7258/interfaces'
          ]
        }
      ]
    },
    {
      title: 'LPWAN Nodes',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        {
          title: "RAK815 Hybrid Location Tracker",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak815/',
          children: [
            'rak815/board-overview',
            'rak815/operating-frequencies',
            'rak815/interfaces',
            'rak815/pin-definition',
            'rak815/schematic-diagram'
          ]
        },
        {
          title: "RAK4200 LPWAN Module",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak4200/',
          children: [
            'rak4200/board-overview',
            'rak4200/interfaces',
            'rak4200/operating-frequencies',
            'rak4200/pin-definition',
            'rak4200/electrical-characteristics',
            'rak4200/mechanical-characteristics',
            'rak4200/recommended-reflow-profile'
          ]
        },
        {
          title: "RAK4260 WisDuo LPWAN Module",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak4260/',
          children: [
            'rak4260/board-overview',
            'rak4260/block-diagram',
            'rak4260/operating-frequencies',
            'rak4260/electrical-characteristics',
            'rak4260/pin-definition',
            'rak4260/mechanical-characteristics',
            'rak4260/typical-application-circuit'
          ]
        },
        {
          title: "RAK7200 LPWAN Tracker",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak7200/',
          children: [
            'rak7200/board-overview',
            'rak7200/pin-definition',
            'rak7200/interfaces',
            'rak7200/operating-frequencies',
            'rak7200/electrical-characteristics',
            'rak7200/environmental-requirements',
            'rak7200/antenna-specifications'
          ]
        },
        {
          title: "RAK7204 LPWAN Environmental Sensor",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak7204/',
          children: [
            'rak7204/operating-frequencies',
            'rak7204/electrical-characteristics',
            'rak7204/sensor-characteristics'
          ]
        },
        {
          title: "RAK7431 - RS485 to LoRaWAN® Converter",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak7431/',
          children: [
            'rak7431/networking-applications',
            'rak7431/interfaces',
            'rak7431/specifications',
            'rak7431/installation'
          ]
        }
      ]
    },
    {
      title: 'Cellular',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        {
          title: "RAK2013 Cellular",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak2013/',
          children: [
            'rak2013/board-overview',
            'rak2013/interfaces',
            'rak2013/frequency-bands-and-data-rate',
            'rak2013/board-pin-out-and-components',
            'rak2013/working-requirements',
            'rak2013/mechanical-dimensions',
            'rak2013/lte-and-gps-antenna',
            'rak2013/schematics'
          ]
        }
      ]
    },
    {
      title: 'NB-IoT',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [
        {
          title: "RAK8212 iTracker Pro",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak8212/',
          children: [
            'rak8212/board-overview',
            'rak8212/pin-definition',
            'rak8212/block-diagram',
            'rak8212/general-specifications'
          ]
        }
      ]
    },
    {
      title: 'Others',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [

      ]
    }
  ],
}