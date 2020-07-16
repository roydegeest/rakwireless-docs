---
static_root: /assets/images/wisbee/rak4260-breakout-board/quickstart/main
rak_img: /assets/images/wisbee/rak4260-breakout-board/quickstart/main/rak4260-breakout.png
rak_grp: wisbee
prev: false
next: false
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?q=rak4260&i=projects
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /wisbee/rak4260-breakout-board/datasheet/
      - name: User Manual
        href: /user-manual/
      - name: Deployment Guide
        href: /deployment-guide/
---

# RAK4260 LPWAN Breakout Module

<rk-img
  :src="`${$frontmatter.static_root}/rak4260-breakout.png`"
  width="50%"
  figure-number="1"
  caption="RAK4260 LPWAN Breakout Module"
/>


## Product Description

The **RAK4260 LPWAN Breakout Module** is specifically designed to allow easy excess to the pins on the module in order to simplify development and testing. The breakout board utilized is of an **Xbee form factor** and its main purpose is to allow the RAK4260 stamp module form factor pinout to be transferred to 2.54 mm headers. This makes it more convenient for developer to debug their solution.

The module itself has the RAK4260 at its core, which is a module that utilizes the **ATSAMR34J18B SIP**. This high level of integration allows for outstanding performance: 860 nA in sleep mode and LoRa® TX Power of up to 20 dBm.

A notable addition to this Breakout module is the **ATECC608A Cryptographic co-processor** with secure hardware-based key storage. This is what makes this module different (compared to the RAK4200 and RAK4600), adding another level of security in order to future proof your platform.

The module complies with LoRaWAN® 1.0.2 protocols. It also supports Lora® Point to Point communication.

The low power, long range LoRa® communication capabilities of the module make it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors and monitors, etc.).

<rk-btn
  src="/wisbee/rak4260-breakout-board/quickstart/#quick-start-guide"
  label="Get Started with RAK4260 LPWAN Evaluation Board"
/>


<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

## Product Features

- LoRa® module for Smart City, Smart Agriculture, Smart Industry
- I/O ports: **UART/I2C/SPI/ADC**
- Frequency range: 863–923 MHz (entire LoRa® high band spectrum)
- Low-Power Wireless Systems with 7.8kHz to 500KHz Bandwidth
- LoRa® Tx power up to **20dBm**
- Ultra-Low Power Consumption **860nA in sleep mode**
- Core: **ARM 32-bit Cortex – M0+** with MPU
- Up to 256KB flash memory with ECC
- 32KB RAM
- 6KB of data EEPROM with ECC
- **ATECC608A** cryptographic core
- Supply voltage: **2.0V ~ 3.6V**
- Temperature range: **-40°C to +85°C**

<rk-btn
  src="https://store.rakwireless.com/products/rak4260-breakout-board"
  label="Buy a RAK4260 LPWAN Breakout Module"
  _blank
/>