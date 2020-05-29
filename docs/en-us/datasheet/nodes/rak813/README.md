---
static_root: /assets/images/datasheet/rak813/overview
tags:
- datasheet
---

# RAK813 BLE+LoRa®

<rk-img
  :src="`${$frontmatter.static_root}/RAK813.jpg`"
  width="30%"
  figure-number="1"
  caption="RAK813 Module"
/>

### Product Description

The **RAK813** is a combination of the BLE and LoRa® in a single module. The BLE short-range technology combined with low-power LoRa® can provide long-distance wireless communication capabilities. Both technologies are low power, eliminating the need to change batteries frequently.

At the same time, RAK813 supports various digital interfaces such as GPIO, UART, I2C, SPI, etc. which are used in connecting sensors to RAK813 module.

Based on the global leading Nordic Semiconductor Corporation's nRF52832 (BLE)
and Semtech's SX127x (LoRa®) chipset, the RAK813 module provides a perfect
combination of ultra low power and ultra long distance.

The RAK813 module uses
TCXO as the LoRa® clock source, so at different temperatures (such as indoor and
outdoor) LoRa® module of radio frequency close to the maximum, can effectively
improve the decoding rate, so as to enhance the communication quality.

RAK813 supports various protocols, including the newest BLE and LoRaWAN®, where customers can choose multi frequency, including: 433MHz, 470MHz, 868MHz, and 915MHz.

### Product Features

- Base on nRF52832(BLE) and SX127X (LoRa®)
- Supports UART, SPI, I2C and GPIOs Interface.
- Small size and low power, sleep current down to 2uA
- High receiver sensitivity: LoRa® down to -146dBm, BLE down to -96dBm
- Operates at Temperature of -40°C to 85 °C
- TX Power: LoRa® adjustable up to +14dBm high efficiency PA, max PA boost up to 20dBm, BLE -20 to +4 dBm in 4 DB steps
- Building in both TX and RX filter
- Building in TCXO for high frequency stability
- Provides multiple band selection including 433/470/868/915 MHz for LoRa®, and 2.4GHz for BLE
- Storage Temperature: -40°C to 85 °C
- Supports LoRa® Point to Point Communication in all the bands
- FSK, GFSK, and LoRa® Technology modulation
- llP3 = -11dBm
- Up to 15 km coverage at suburban and up to 5 km coverage at urban area.

!!!include(en-us/datasheet/rak813/board-overview.md)!!!
!!!include(en-us/datasheet/rak813/operating-frequencies.md)!!!
!!!include(en-us/datasheet/rak813/interfaces.md)!!!
!!!include(en-us/datasheet/rak813/pin-definition.md)!!!
!!!include(en-us/datasheet/rak813/mechanical-dimension.md)!!!