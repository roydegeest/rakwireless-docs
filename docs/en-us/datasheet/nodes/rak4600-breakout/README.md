---
static_root: /assets/images/datasheet/rak4600-breakout/overview
tags:
- datasheet
---

# RAK4600 Breakout Module

<rk-img
  :src="`${$frontmatter.static_root}/xfnxl2vaseqi9anuveom.jpg`"
  width="60%"
  figure-number="1"
  caption="RAK4600 Breakout Module"
/>

### Product Description

**RAK4600 Breakout Module** is specifically designed to allow easy excess to the pins on the module in order to simplify development and testing. The breakout board utilized is of an Xbee form factor and its main purpose is to allow the RAK4600 stamp module form factor pinout to be transferred to 2.54mm headers.

The module itself has the RAK4600 at its core, integrating an **nRF52832 MCU** and a **SX1276 LoRa® chip**. It has Ultra-Low Power Consumption of 2.0uA in sleep mode, high LoRa® max output power (20dBm) in work mode, and BLE output power up to 4dBm.

The module complies with LoRaWAN® 1.0.2 protocols. It also supports Lora® Point to Point communication.

The RF communication capabilities of the module (LoRa® + BLE) make it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors and monitors, etc.).

### Product Features

- LoRa® module for Smart City, Smart Agriculture, Smart Industry
- I/O ports: **UART/I2C/GPIO** (optional NFC interface)
- Frequency range: **863–923 MHz** (entire LoRa® high band spectrum)
- Low-Power Wireless Systems with **7.8kHz** to **500KHz** Bandwidth
- LoRa® Tx power up to **20dBm**
- BLE5.0 (Tx power -20 to +4 dBm in 4dB steps)
- Serial Wire Debug (SWD) interface
- Ultra-Low Power Consumption **2.0uA** in sleep mode
- Supply voltage: **2.0 ~ 3.6V**
- Temperature range: **-40°C to +85°C**

!!!include(en-us/datasheet/nodes/rak4600-breakout/board-overview.md)!!!
!!!include(en-us/datasheet/nodes/rak4600-breakout/operating-frequencies.md)!!!
!!!include(en-us/datasheet/nodes/rak4600-breakout/pin-definition.md)!!!
!!!include(en-us/datasheet/nodes/rak4600-breakout/power-consumption.md)!!!
!!!include(en-us/datasheet/nodes/rak4600-breakout/schematic-diagram.md)!!!
!!!include(en-us/datasheet/nodes/rak4600-breakout/interfaces.md)!!!