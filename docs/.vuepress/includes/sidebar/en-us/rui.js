module.exports = {
  '/en-us/rui/': [
    {
      title: 'RUI API Reference',
      path: '',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        ''
      ]
    },
    {
      title: 'Cellular',
      path: '',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        {
          title: "RUI Cellular General Format",
          collapsable: false,
          path: '/en-us/rui/rui-cellular-general-format/',

        },
      ]
    },
    {
      title: 'LoRa',
      path: '',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        {
          title: "RUI LoRa General Format",
          collapsable: false,
          path: '/en-us/rui/rui-lora-general-format/',
        },
      ]
    },
    {
      title: 'BLE',
      path: '',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        {
          title: "RUI BLE General Format",
          collapsable: false,
          path: '/en-us/rui/rui-ble-general-format/',
        },
      ]
    },
    {
      title: 'Sensor',
      path: '',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        {
          title: "RUI Sensor General Format",
          collapsable: false,
          path: '/en-us/rui/rui-sensor-general-format/',
          // children: [
          //   'rui-sensor-general-format/rui-gps-get',
          //   'rui-sensor-general-format/rui-gps-set-mode',
          //   'rui-sensor-general-format/rui-voltage-get-battery-level'
          // ]
        },
      ]
    },
    {
      title: 'Interface',
      path: '',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        {
          title: "RUI Interface General Format",
          collapsable: false,
          path: '/en-us/rui/rui-interface-general-format/',
          // children: [
          //   'rui-interface-general-format/rui-uart-init',
          //   'rui-interface-general-format/rui-uart-uninit',
          //   'rui-interface-general-format/rui-uart-send',
          //   'rui-interface-general-format/rui-uart-receive',
          //   'rui-interface-general-format/rui-uart-config-mode',

          //   'rui-interface-general-format/rui-gpio-init',
          //   'rui-interface-general-format/rui-gpio-uninit',
          //   'rui-interface-general-format/rui-gpio-rw',
          //   'rui-interface-general-format/rui-gpio-interrupt',

          //   'rui-interface-general-format/rui-timer-init',
          //   'rui-interface-general-format/rui-timer-uninit',
          //   'rui-interface-general-format/rui-timer-setval',
          //   'rui-interface-general-format/rui-timer-start',
          //   'rui-interface-general-format/rui-timer-stop',

          //   'rui-interface-general-format/rui-adc-init',
          //   'rui-interface-general-format/rui-adc-uninit',
          //   'rui-interface-general-format/rui-adc-read',

          //   'rui-interface-general-format/rui-i2c-init',
          //   'rui-interface-general-format/rui-i2c-rw',

          //   'rui-interface-general-format/rui-spi-init',
          //   'rui-interface-general-format/rui-spi-rw',

          //   'rui-interface-general-format/rui-pwm-init',
          //   'rui-interface-general-format/rui-pwm-start',
          //   'rui-interface-general-format/rui-pwm-stop',

          //   'rui-interface-general-format/rui-delay-ms',
          //   'rui-interface-general-format/rui-delay-us',

          //   'rui-interface-general-format/rui-init-system',
          //   'rui-interface-general-format/rui-running',
          //   'rui-interface-general-format/rui-print-log',

          //   'rui-interface-general-format/rui-flash-write',
          //   'rui-interface-general-format/rui-flash-read',

          //   'rui-interface-general-format/rui-at-response',
          // ]
        },
      ]
    },
    {
      title: 'Device',
      path: '',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        {
          title: "RUI Device General Format",
          collapsable: false,
          path: '/en-us/rui/rui-device-general-format/',
          // children: [
          //   'rui-device-general-format/rui-device-version',
          //   'rui-device-general-format/rui-device-reset',
          //   'rui-device-general-format/rui-device-sleep',
          //   'rui-device-general-format/rui-device-boot'
          // ]
        },
      ]
    },
  ],
}