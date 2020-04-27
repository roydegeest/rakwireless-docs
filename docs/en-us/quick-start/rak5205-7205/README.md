---
static_root: /assets/images/quick-start-guide/rak5205-7205/overview
rak_img: RAK5205.svg
rak_grp: lora-node
params:
  qlinks:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?i=projects&q=RAK5205
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak5205/#rak5205-wistrio-lpwan-tracker
      - name: Schematic Diagram
        href: /en-us/datasheet/rak5205/schematics.html#schematics
      - name: RAK5205 3D Model (SMA Version)
        href: https://downloads.rakwireless.com/LoRa/WisTrio-LoRa-RAK5205/Hardware_Specification/
      - name : RAK5205 3D Model (iPEX Version)
        href: https://downloads.rakwireless.com/LoRa/WisTrio-LoRa-RAK5205/Hardware_Specification/RAK5205-IPEX-3D-File.zip
      - name: RAK5205 with Enclosure 3D Model
        href: https://downloads.rakwireless.com/LoRa/WisTrio-LoRa-RAK5205/Hardware_Specification/RAK5205_with_Enclosure_3D-File.zip
      - name: Downloads
        href: https://downloads.rakwireless.com/LoRa/WisTrio-LoRa-RAK5205/
---

# RAK7205/RAK5205 WisTrio LPWAN Tracker

<rk-img
  :src="`${$frontmatter.static_root}/exlexmejfxoowom4gmuf.jpg`"
  width="70%"
  figure-number="1"
  caption="RAK7205/RAK5205 WisTrio LPWAN Tracker Product View"
/>

## Product Background

The **RAK5205 LPWAN Tracker Board** is built on the Semtech SX1276 chip, with the STM32L1 MCU at its core. It is a feature-packed sensor board with LoRa® connectivity and built-in GPS. It provides various interfaces for easy application development.

This node module is ideal as a quick prototyping tool for LoRaWAN® applications. It is perfect for use case scenarios such as asset tracking, smart vehicle management and location-based services.

<rk-btn
  src="quick-start-guide.html"
  label="Set up Your RAK5205 RAK5205 WisTrio LPWAN Tracker"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

- **Compatible with 96Boards** IoT Edition Specification
- **SX1276 LoRa®** and **Ublox Max 7Q GPS** chips
- **ARM Cortex-M3 STM32L1 MCU**
- Built-in environmental sensor **BME680** (gas, pressure, humidity, temperature) and 3-axis MEMS sensor LIS3DH (accelerometer)
- SMA/iPEX antenna interfaces
- **LoRaWAN® 1.0.2** protocol compatibility
- Rechargeable battery and solar panel connection ports
- **Global LoRaWAN® bands supported** (EU433, CN470, IN865, EU868, US915, AU915, AS920, KR920, and AS923)
- I2C, ADC, built-in UART converter
