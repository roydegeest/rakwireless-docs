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
            'rak831/board-overview-rak831',
            'rak831/pin-definition-rak831',
            'rak831/interfaces-rak831',
            'rak831/electrical-characteristics-rak831',
            'rak831/rf-characteristics-rak831'
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
          title: "RAK4200 LPWAN Module",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak4200/',
          children: [
            'rak4200/board-overview-rak4200',
            'rak4200/interfaces-rak4200',
            'rak4200/operating-frequencies-rak4200',
            'rak4200/pin-definition-rak4200',
            'rak4200/electrical-characteristics-rak4200',
            'rak4200/mechanical-characteristics-rak4200',
            'rak4200/recommended-reflow-profile-rak4200'
          ]
        },
        {
          title: "RAK4260 WisDuo LPWAN Module",
          nested: true,
          collapsable: false,
          path: '/en-us/datasheet/rak4260/',
          children: [
            'rak4260/board-overview-rak4260',
            'rak4260/block-diagram-rak4260',
            'rak4260/operating-frequencies-rak4260',
            'rak4260/electrical-characteristics-rak4260',
            'rak4260/pin-definition-rak4260',
            'rak4260/mechanical-characteristics-rak4260',
            'rak4260/typical-application-circuit-rak4260'
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

      ]
    },
    {
      title: 'NB-IoT',   // required
      path: '',      // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 2,    // optional, defaults to 1
      children: [

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