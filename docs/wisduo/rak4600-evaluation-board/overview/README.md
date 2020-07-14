---
static_root: /assets/images/wisduo/rak4600-evaluation-board/overview
rak_img: RAK4600-evaluation-board.svg
rak_grp: wisduo
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?i=projects&q=rak4600
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak4600/#rak4600-lpwan-module
      - name: Schematic Diagram
        href: https://downloads.rakwireless.com/en/LoRa/RAK4600/Hardware-Specification/RAK4600_EVB_Schematic.pdf
      - name: Firmware
        href: https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/
      - name: Downloads
        href: https://downloads.rakwireless.com/LoRa/RAK4600/
     
---

# RAK4600 LPWAN Evaluation Board

<rk-img
  :src="`${$frontmatter.static_root}/fnzdgl9lx3nyimumyq1j.jpg`"
  width="50%"
  figure-number="1"
  caption="RAK4600 LPWAN Evaluation Board"
/>

## Product Background

**RAK4600 LPWAN Evaluation Board** is a WisBlock product that consists of [RAK4600 LPWAN Module](https://store.rakwireless.com/products/rak4600-lora-module) and RAK5005 WisBase. This development board allows access to all serial and GPIO ports for easy configuration. The RAK4600 core module includes nRF52832 MCU and SX1276 LoRa® chip to help you quickly and easily develop/test your firmware. It has
Ultra-Low Power Consumption of 2.0 uA in sleep mode, high LoRa® output power up to
20dB max in work mode, and Bluetooth output power up to 4dBm. The module complies with LoRaWAN® 1.0.2 protocols. It also supports LoRa® Point to Point
communications.

The Module supports Bluetooth 5.0 in addition to LoRa®. Its RF
communication capabilities (LoRa® + Bluetooth) make it suitable for a variety of applications in
the IoT field.

<rk-btn
  src="../quickstart"
  label="Setup your RAK4600 LPWAN Evaluation Board"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

## Product Features

- LPWAN module for Smart City, Smart Agriculture, Smart Industry
- **Compact Form Factor**: 15 x 23 x 2.5 mm
- 42 Pin Stamp Pad for PCB SMT mounting (module)
- **I/O ports:** UART/I2C/GPIO (optional NFC interface)
- **Temperature range:** -40°C to +85°C
- **Supply voltage:** 2.0 ~ 3.6V
- **Frequency range:** 863–870MHz (EU) / 902–928MHz (US), ISM and SRD systems
- Low-Power Wireless Systems with 7.8kHz to 500KHz Bandwidth
- Ultra-Low Power Consumption 2.0uA in sleep mode
- Boost mode with 20dBm output power
- BLE5.0 (Tx power -20 to +4 dBm in 4dB steps)

<rk-btn
  src="https://store.rakwireless.com/products/rak4260-lora-module"
  label="Buy a RAK4260 LPWAN Module"
  _blank
/>