---
tags:
- datasheet
---
# RAK831 LPWAN Gateway Concentrator

<rk-img
  src="/assets/images/datasheet/rak831/rak831-overview.png"
  width="50%"
  figure-number="1"
  caption="RAK831 LPWAN Gateway"
/>

### Product Background

The concentrator module **RAK831** is designed for a wide variety of applications like **Smart Metering**, **IoT** (Internet of Things) and **M2M** (Machine-to-machine) applications. It is a multi- channel high performance Transceiver module designed to receive several LoRa® packets simultaneously using different spreading factors on multiple channels. The concentrator module RAK831 can be integrated into a gateway as a complete RF front-end of this gateway. It provides the possibility to enable robust communication between a LoRaWAN® Gateway and a huge amount of LoRa® end-nodes spread over a wide range of distance. The RAK831 needs a host system for proper operation. 

This is an ideal modular product to help you realize the whole Lora® system development. With the USB-SPI converter module FT2232, you can quickly make the software development in your PC. Also, you can integrate the concentrator module to your production product to realize the LoRaWAN® Gateway function.This is very economic way to address for a huge variety of applications like Smart Grid, Intelligent Farm,intelligent Farm and Other IoT applications. 

The RAK831 needs a host system like Raspberry Pi or WisAP (OpenWRT based) or WisCam for proper operation . The host processor can be a PC or MCU that will be connected to RAK831 via USB or SPI.

RAK831 is able to receive up to 8 LoRa® packets simultaneously sent with different spreading factors on different channels. This unique capability allows the implementation of innovative network architectures advantageous over other short range systems:

End-point nodes (e.g. sensor nodes) can change frequency with each transmission in a random pattern. This provides vast improvement of the system robustness in terms of interference immunity and radio channel diversity.

Applications possible with the RAK831 include Smart Metering ,Wireless Star Networks, Home,Building,Industrial automation, Remote Control, Wireless Sensors Network, M2M, IoT and Wireless Alarm and Security Systems.

### Product Features

* **Compact size** 80 mm 50 mm x 5  mm
* LoRaWAN® modulation technology
* **Frequency bands**: 433 MHz,470 MHz, 868 MHz,915 MHz
* Orthogonal spreading factors
* **Minimum Sensitivity**: -142.5 dBm
* **Maximum Link Allotment**: 162 dB
* SPI interface
* SX1301 base band processor
* Emulates up to forty-nine (49)  LoRa® demodulators
* Twelve (12) parallel demodulation paths
* One (1) (G) FSK demodulator
* Two (2) SX1257 Tx/Rx front-ends High frequency
* Two (2) x SX1255 Tx/Rx front-ends low frequency
* **Supply voltage**: 5 Volts DC
* Optimized RF Interface 50
* Up to 23 dBm output power
* Optional GPS receiver 
* **Line of Sight Range**: up to 15 kilometers

!!!include(en-us/datasheet/rak831/board-overview.md)!!!
!!!include(en-us/datasheet/rak831/pin-definition.md)!!!
!!!include(en-us/datasheet/rak831/interfaces.md)!!!
!!!include(en-us/datasheet/rak831/electrical-characteristics.md)!!!
!!!include(en-us/datasheet/rak831/rf-characteristics.md)!!!