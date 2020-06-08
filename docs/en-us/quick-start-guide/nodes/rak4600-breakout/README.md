---
static_root: /assets/images/quick-start-guide/rak4600-breakout/main
rak_img: rak4600-breakout-module.png
rak_grp: lora-node
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?q=rak4600&i=projects
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak4600-breakout/#rak4600-breakout-module
      - name: Schematic Diagram
        href: /en-us/datasheet/rak4600-breakout/#schematic-diagram
      - name: Firmware
        href: https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/
      - name: Downloads
        href: https://downloads.rakwireless.com/LoRa/RAK4600/
---

# RAK4600 LPWAN Breakout Module

<rk-img
  :src="`${$frontmatter.static_root}/rak4600-breakout-module.png`"
  width="50%"
  figure-number="1"
  caption="RAK4600 LPWAN Breakout Module"
/>

## Product Description

**RAK4600 Breakout Module** is specifically designed to allow easy excess to the pins on the module in order to simplify development and testing. The breakout board utilized is of an **Xbee form factor** and its main purpose is to allow the RAK4600 stamp module form factor pinout to be transferred to 2.54mm headers.

The module itself has the RAK4600 at its core, integrating an **nRF52832 MCU** and a **SX1276 LoRa® chip**. It has Ultra-Low Power Consumption of 2.0uA in sleep mode, high LoRa® max output power (20dBm) in work mode, and BLE output power up to 4dBm.

The module complies with **LoRaWAN® 1.0.2 protocols**. It also supports Lora® Point to Point communication. 

The RF communication capabilities of the module (LoRa® + BLE) make it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors and monitors, etc.).

<rk-btn
  src="prerequisites.html"
  label="Set up Your rak4600 LPWAN Evaluation Board"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

## Product Features

- LoRa® module for Smart City, Smart Agriculture, Smart Industry 
- I/O ports: **UART/I2C/GPIO** (optional NFC interface)
- Frequency range: **863–923 MHz** (entire LoRa® high band spectrum) 
- Low-Power Wireless Systems with **7.8 kHz to 500 KHz Bandwidth**
- LoRa® Tx power up to **20 dBm**
- **BLE5.0** (Tx power -20 dBm to +4 dBm in 4 dB steps)
- Serial Wire Debug (SWD) interface
- Ultra-Low Power Consumption **2.0 uA in sleep mode**
- Supply voltage: **2.0 V ~ 3.6 V**
- Temperature range: -**40°C to +85°C**

