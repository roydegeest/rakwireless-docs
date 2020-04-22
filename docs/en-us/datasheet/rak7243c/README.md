---
tags:
- datasheet
---

# RAK7243C Pilot Gateway

<rk-img
  src="/assets/images/datasheet/rak7243c/rak7243c-overview.png"
  width="50%"
  figure-number="1"
  caption="RAK7243C Pilot Gateway"
/>


### Product Description

The **RAK7243C Pilot Gateway** is a device that consists of Raspberry Pi 3B+, RAK2245 Pi HAT which includes a GPS module and a Heat Sink for better performance and thermal heat dissipation management, and a RAK2013 Cellular Pi HAT and it’s housing is built with an aluminum casing. 

For the build-in RAK2245 Pi HAT, it uses the SX1301 chip from Semtech which built-in LoRa® concentrator IP core is a powerful digital signal processing engine. It is able to receive up to 8 LoRa® packets simultaneously sent with different spreading factors on different channels and available in multiple variants so it can be used for internartinal standard bands. This unique capability allows to implement innovative network architectures advantageous over other short range systems. For the build-in RAK2013 Cellular Pi HAT, it supports optional QUECTEL BG96 / EG91 / EG95 which can supports NB-IOT / CAT-M / CAT1 LTE / CAT4 LTE. It follows Raspberry Pi specifications and is easy to mount with Raspberry Pi and RAK2245 Pi HAT module. 

Pilot Gateway Pro is ideal for prototyping, proof-of-concept demonstration or for the evaluation. It includes a ready to use LoRaWan® Gateway OS that can be connected to a LoRaWan® server. Also it is developer friendly and simple even for no-so-techy users to set up LoRaWan® system. It has to be the best value and function for connectivity to address a variety of applications like Smart Grid, Intelligent Farm and other IoT enterprise applications.

### Product Features

* Preassembled, fully functioning LoRaWAN® Gateway
* SX1301 base band processor, emulates 49 x LoRa® demodulators 10 programmable parallel demodulation paths, support 8 uplinks channel, 1 downlink channel. 
* Support optional Cellular module(Quectel BG96 or EG91 or EG95) for NB-IOT / CAT-M / CAT1 LTE / CAT4 LTE.
* Built-in the Ublox MAX-7Q GPS Module. 
* Built-in Heat Sink for thermal heat dissipation management. 
* Supports 5V/2.5A power supply.
* TX power up to 27dBm, RX sensitivity down to -139dBm@SF12, BW 125KHz. 
* LoRa® frequency supports global license-free frequency band (EU433, CN470, EU868, US915, AS923, AU915, KR920, IN865 and AS920). 
* Housing with top cover, body, bottom cover with riveted motherboard standoff. 
* Includes Pi ready 'ID EEPROM', GPIO setup and device tree can be automatically configured from vendor information.
* Supports fully open source code connected to a LoRaWAN® server.

!!!include(en-us/datasheet/rak7243c/board-overview.md)!!!
!!!include(en-us/datasheet/rak7243c/interfaces.md)!!!
!!!include(en-us/datasheet/rak7243c/system-structure.md)!!!
!!!include(en-us/datasheet/rak7243c/operating-frequencies.md)!!!
!!!include(en-us/datasheet/rak7243c/cellular-frequency-bands.md)!!!
!!!include(en-us/datasheet/rak7243c/pin-definition.md)!!!
!!!include(en-us/datasheet/rak7243c/power-requirements.md)!!!
!!!include(en-us/datasheet/rak7243c/environmental-requirements.md)!!!
!!!include(en-us/datasheet/rak7243c/lora-rf-characteristics.md)!!!
!!!include(en-us/datasheet/rak7243c/antenna-specifications.md)!!!