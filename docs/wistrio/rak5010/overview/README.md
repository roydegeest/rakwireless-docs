---
static_root: /assets/images/wistrio/rak5010/quickstart/1.overview
rak_img: RAK5010.svg
rak_grp: wistrio
params:
  qlinks:
    learnMore:
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /wistrio/rak5010/datasheet/
      - name: User Manual
        href: /user-manual/
      - name: Deployment Guide
        href: /deployment-guide/
---

# RAK5010 WisTrio NB-IoT Tracker

<rk-img
  :src="`${$frontmatter.static_root}/sezihji5wsoxeb4ikcfk.jpg`"
  width="50%"
  figure-number="1"
  caption="RAK5010 WisTrio NB-IoT Tracker Product View"
/>

## Product Background

The **RAK5010** is an advanced, highly flexible NB-IoT tracker based on Quectel BG96 LTE Cat M1&NB1, integrated with GPS, BLE and a variety of sensors. The MCU running the board is a Nordic nRF52840 controller.

With the GPS and BLE features, the device can be used in a wide range of applications from outdoor to indoor scenarios where location based service are necessary.

The board is equipped with four sensors on board: humidity and temperature sensor, pressure sensor, 3-axis motion sensor, and ambient light sensor. Additionally, the extension IOs in the module allow expandable sensor application in addition to the on-board ones.

This board is particularly suitable to be used as a quick testing and prototyping tool for applications requiring Nb-IoT connectivity. Application development supports the GCC environment.

<rk-btn
  src="/wistrio/rak5010/quickstart/"
  label="Get Started with RAK5010 WisTrio NB-IoT Tracker"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

- Quectel BG96 with LTE CAT M1, LTE NB1 and GNSS
- **Nordic nRF52840**, with BLE 5.0 and long range BLE.
- nRF52840 integrates the ultra-low power microcontroller ARM Cortex-M4 (64Mhz)
- Built-in humidity and temperature sensor, pressure sensor, 3-axis motion sensor, and ambient light sensor.
- iPEX connectors for the LoRa® and GPS antenna and an on-board ceramic antenna for the BLE.
- Nano SIM and ESIM options.
- Can be powered by either Micro USB, 3.7V rechargeable battery or a 5V Solar Panel Port
- Multiple interfaces, I2C, UART, GPIO and AD.

<rk-btn
  src="https://store.rakwireless.com/products/rak5010-nb-iot-tracker"
  label="Buy a RAK5010 WisTrio NB-IoT Tracker "
  _blank
/>