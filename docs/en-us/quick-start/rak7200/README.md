---
static_root: /assets/images/quick-start-guide/rak7200/overview
rak_img: tnbyyv90jncokqtn9xiy.jpg
rak_grp: lora-node
params:
  qlinks:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?i=projects&q=RAK7200
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak7200/#rak7200-lpwan-tracker
      - name: Firmware
        href: https://downloads.rakwireless.com/LoRa/RAK7200-Tracker/Firmware/RAK7200_Latest_Firmware.zip
      - name: Downloads
        href: https://downloads.rakwireless.com/en/LoRa/RAK7200-Tracker/
---

# RAK7200 LPWAN Tracker

<rk-img
  :src="`${$frontmatter.static_root}/tnbyyv90jncokqtn9xiy.jpg`"
  width="70%"
  figure-number="1"
  caption="RAK7200 Product View"
/>

## Product Background

The **RAK7200** is an LPWAN Tracker device with a 3.7V rechargeable Li-Ion battery and a GPS modem. It is built around low power LPWAN Module, which integrates the ultra low power STM32L073 micro-controller, the SX1276 LoRa® long range modem and the CXD5603GF GPS modem.

The device can be used as a quick prototyping tool for LoRaWAN® application development. It is suited for IoT Applications such as asset tracking, smart vehicle management and location-based services.

<rk-btn
  src="quick-start-guide.html"
  label="Set up Your RAK7200 LPWAN Tracker"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

- Supports sleep mode, low power consumption.
- **Built-in LIS3DH - digital motion sensor** , which has dynamic user selectable full scales of ±2g/±4g/±8g/±18g and is capable of measuring accelerations with output data rates from 1Hz to 5kHz.
- **Barometer**: Built-in LPS22HB - digital nano pressure sensor
- **Built-in a 9-Axis Sensor**, which includes a triple-axis gyroscope, a triple-axis accelerometer, and a triple-axis magnetometer.
- LoRaWAN® 1.0.2 Standard support - ABP or OTAA mode.
- LoRa® and GPS antenna are integrated inside the casing.
- Micro USB for configuration and charging of the battery
- Supports global license-free frequency band: IN865, EU868, US915, AU915, AS920, KR920, and AS923.
