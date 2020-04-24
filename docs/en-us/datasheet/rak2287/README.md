---
static_root: /assets/images/datasheet/rak2287/overview
tags:
- datasheet
---

# RAK2287 WisLink- LPWAN Gateway Module

<rk-img
  :src="`${$frontmatter.static_root}/aprgtyyf6arxkxu7rjyl.jpg`"
  width="50%"
  figure-number="1"
  caption="RAK2287 WisLink- LPWAN Gateway Module"
/>

### Product Background

**RAK2287** is an LPWAN Concentrator Module with mini-PCIe form factor based on Semtech SX1302, which enables an easy integration into an existing router or other network equipment with LPWAN Gateway capabilities. It can be used in any embedded platform offering a free mini-PCIe slot with SPI connection. Furthermore, **ZOE-M8Q GPS chip** is integrated on board.

This module is an exceptional, complete and cost efficient gateway solution offering up to 10 programmable parallel demodulation paths, an 8 x 8 channel LoRa® packet detectors, 8 x SF5-SF12 LoRa® demodulators and 8 x SF5-SF10 LoRa® demodulators. It is capable of detecting uninterrupted combination of packets at 8 different spreading factors and 10 channels with continuous demodulation of up to 16 packets. This product is best for smart metering fixed networks and Internet-of-Things (IoT) applications, that can cover of up to 500 nodes per km² in an environment of moderate interference.

### Product Features

* Designed based on **Mini PCL-e form factor** with Heat Sink.
* **SX1302 base band processor** emulates 8 x8 channel LoRa packet detectors, 8 x SF5-SF12 LoRa demodulators, 8 x SF5-SF10 LoRa demodulators, one 125 /250 / 500 kHz high-speed LoRa demodulator and one (G)FSK demodulator.
* 3.3v **Mini PCI-e**, compatible with 3G/LTE card of Mini PCI-e type.
* Compatible with **3G/LTE card** of Mini PCI-e type.
* Tx power up to 27dBm, Rx sensitivity down to -139dBm@SF12, BW 125 kHz.
* Supports latest **LoRaWAN® 1.0.2 protocol**.
* Supports **global license-free frequency band** (EU868, US915, AS923, AU915, KR920, IN865 and AS920).
* Supports optional SPI interfaces.
* Built-in **ZOE-M8Q GPS** module

!!!include(en-us/datasheet/rak2287/board-overview.md)!!!
!!!include(en-us/datasheet/rak2287/operating-frequencies.md)!!!
!!!include(en-us/datasheet/rak2287/pin-definition.md)!!!
!!!include(en-us/datasheet/rak2287/interfaces.md)!!!
!!!include(en-us/datasheet/rak2287/electrical-characteristics.md)!!!
!!!include(en-us/datasheet/rak2287/rf-characteristics.md)!!!
!!!include(en-us/datasheet/rak2287/schematic-diagram.md)!!!

