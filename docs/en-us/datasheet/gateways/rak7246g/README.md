---
static_root: /assets/images/datasheet/rak7246g/overview
tags:
  - datasheet
---

# RAK7246G LPWAN Developer Gateway

<rk-img
  :src="`${$frontmatter.static_root}/jtv6vtbowwxsrbeupcac.png`"
  width="100%"
  caption="RAK7246G LPWAN Developer Gateway"
/>

## Overview

### Product Description

The RAK7246G is a LoRaWAN® Developer gateway with GPS function. It is a device composed of a the RAK2246 Pi HAT LPWAN Concentrator module and Raspberry Pi Zero W.

The RAK2246 Pi HAT is based on a Semtech SX1308 chip, which allows for simultaneous reception over 8 LoRa channels, which cover the entirety of the international high frequency LoRaWAN® space.

The RAK7246G is an ideal choice for prototype design, concept verification and demonstrations, development evaluation and other scenarios. It is developer friendly due to its minimalistic design that reduces cost and allows for easily accessing the internals. It is easy to set-up, which makes it a good choice for both experienced and novice LoRa specialists.

### Product Features

- Using **SX1308** baseband processor couple with dual **SX1257**, full 8 uplink channels and 1 downlink channel LoRaWAN® Gateway
- Built-in Ublox **MAX-7Q GPS** module
- The Pre-installed radiator guarantees stable thermal performance
- Tx max **20dbm**, Rx min **-139dbm** @ SF12 at 125kHz
- Covers the entirety of the **LoRa high frequency band space:** RU864, IN865, EU868, US915, AU915, KR920, AS923;
- Power supply rating **5V / 2.5A (not included).**

## Specifications

### Overview

#### Board Overview

##### Module Overview

<rk-img
  src="/assets/images/datasheet/rak7246g/board-overview/dqtuzznrpsuevoizzgvc.png"
  width="100%"
  caption="uFL Connectors for LoRa and GPS"
/>

The Interfaces of the RAK7246G are as shown in Figure 2. The TF card slot is used for the SD card that houses the Firmware (based on Raspbian OS). You have two SMA connectors for the LoRa and GPS antennas. There are 3 ports on the side, which are part of the Raspberry Pi Zero W board, which from left to right are: mini HDMI, USB MicroB, and another USB MicroB/Power (please only use this to power the device with the included adapter or an equivalent one).

<rk-img
  src="/assets/images/datasheet/rak7246g/board-overview/dimensions.png"
  width="100%"
  caption="Hardware Interfaces"
/>

##### Board Dimension

Both the RAK2246 and Raspberry Pi have the same board dimensions: **30 x 65 mm**. As for the size of the Gateway with the casing refer to the Figure below.

<rk-img
  src="/assets/images/datasheet/rak7246g/board-overview/ifljf8dbokouw7ppnudi.jpg"
  width="80%"
  caption="Casing Dimension"
/>

#### Block Diagram

<rk-img
  src="/assets/images/datasheet/rak7246g/interfaces/block-diagram.png"
  width="100%"
  caption="Block Diagram"
/>

The SX1308 digital baseband chip contains 10 programmable reception paths. Those paths have differentiated levels of programmability and allow for different use cases. It is important to understand the differences between those demodulation paths to make the best possible use of the system.

### Hardware

#### Interfaces

##### RAK2246 Concentrator

The concentrator is available with an SPI interface:

<rk-img
  src="/assets/images/datasheet/rak7246g/interfaces/qdr3oj29xkjdfu0a3bys.jpg"
  width="80%"
  caption="RAK2246 Bottom View"
/>

###### SX1308

The RAK2246 includes Semtech’s SX1308, which is a digital baseband chip including a massive digital signal processing engine specifically designed to offer breakthrough gateway capabilities in the worldwide ISM band.

The SX1308 is a smart baseband processor for long range ISM communication. In the receiver part, it receives I and Q digitized bit stream for one or two receivers (SX1257), demodulates these signals using several demodulators, adapting the demodulators settings to the received signal and stores the received demodulated packets in a FIFO to be retrieved from a host system (PC, MCU). In the transmitter part, the packets are modulated using a programmable (G)FSK/LoRa modulator and sent to one transmitter (SX1257). Received packets can be time-stamped using a GPS PPS input.

The SX1308 has an internal control block that receives microcode from the host system (PC, MCU). The microcode is provided by Semtech as a binary file to load into the SX1308 at power-on (_see Semtech application support for more information)._

The control of the SX1308 by the host system (PC, MCU) is made using a Hardware Abstraction Layer (HAL). The Hardware Abstraction Layer source code is provided by Semtech and can be adapted by the host system developers.

It is highly
recommended to utilize the latest HAL as provided by Semtech on [https://github.com/Lora-net](https://github.com/Lora-net)

###### Block Diagram

<rk-img
  src="/assets/images/datasheet/rak7246g/interfaces/block-diagram.png"
  width="100%"
  caption="Block Diagram"
/>

The SX1308 digital baseband chip contains 10 programmable reception paths. Those paths have differentiated levels of programmability and allow for different use cases. It is important to understand the differences between those demodulation paths to make the best possible use of the system.

###### IF8 LoRa channel

This channel is connected to one SX1257 using any arbitrary intermediate frequency within the allowed range. This channel is LoRa only. The demodulation bandwidth can be configured to be 125, 250 or 500 kHz. The data rate can be configured to any of the LoRa available data rates (SF7 to SF12), but as opposed to the IF0 to IF7 channels, only the configured data rate will be demodulated. This channel is intended to serve as a high speed backhaul link to other gateways or infrastructure equipment. This demodulation path is compatible with the signal transmitted by the SX1272 and SX1276 chip family.

###### IF9 (G)FSK channel

The IF9 channel is connected to a (G)FSK demodulator. The channel bandwidth and bit rate can be adjusted. This demodulator offers a very high level of configurability, going well beyond the scope of this document. The demodulator characteristics are essentially the same as the (G)FSK demodulator implemented in the SX1232 and SX1272 Semtech chips. This demodulation path can demodulate any legacy FSK or GFSK formatted signal.

###### IF0 to IF7 LoRa channels

These channels are connected to one SX1257. The channel bandwidth is 125 kHz and cannot be modified or configured. Each channel’s IF frequency can be individually configured. On each of these channels any data rate can be received without prior configuration.

Several packets using different data rates (different SF) may be demodulated simultaneously even on the same channel. Those channels are intended to be used for a massive asynchronous star network of 1000’s of sensor nodes. Each sensor may use a random channel (amongst IF0 to IF7) and a different data rate for any transmission.

Sensors located near the Gateway will typically use the highest possible data rate in the fixed 125 kHz channel bandwidth (e.g. 6 kbit/s) while sensors located far away will use a lower data rate down to 300 bit/s (the minimum LoRa data rate in a 125 kHz channel).

The SX1308 digital baseband chip scans the 8 channels (IF0 to IF7) for preambles of all data rates at all times.

The chip is able to demodulate simultaneously up to 8 packets. Any combination of spreading factor and intermediate frequency for up to 8 packets is possible (e.g. one SF7 packet on IF0, one SF12 packet on IF7 and one SF9 packet on IF1 simultaneously).

The SX1308 can detect simultaneously preambles corresponding to all data rates on all IF0 to IF7 channels. However, it cannot demodulate more than 8 packets simultaneously. This is because the SX1308 architecture separates the preamble detection and signal acquisition task from the demodulation process. The number of simultaneously demodulated packets (in this case 8) is an arbitrary system parameter and may be set to other values for a customer specific circuit.

The unique multi data-rate multi-channel demodulation capacity SF7 to SF12 and of channels IF0 to IF7 allows innovative network architectures to be implemented.

<rk-img
  src="/assets/images/datasheet/rak7246g/interfaces/jlyqgowwfeidn4k49cy3.png"
  width="100%"
  caption="LoRa Channel"
/>

##### External Module Interfaces

###### SPI

The PINs on the connector provide an SPI connection, which allows direct access to the SX1308 SPI interface. This gives the target system the possibility to use existing SPI interfaces to communicate.

::: tip 📝 NOTE
After powering up RAK2246, it is required to reset SX1308 via PIN 11.
:::

###### UART and I2C

The PINs on the bottom side provide an UART connection and I2C connection, which allows direct access to the GPS module. The 1PPS has been connected to the SX1308 internally.

###### Digital IOs

There are two digital IO PINs, which give the user an interface to reset the GPS module or set it into standby mode.

#### Pin Definition

<rk-img
  src="/assets/images/datasheet/rak7246g/pin-definition/e7ik5kliydnba3jh6ogy.png"
  width="80%"
  caption="RAK7246G Pinout Diagram"
/>

| **Pin** | **Name**    | **Description**                                                                                              |
| ------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| 1       | NC          | Not Connected                                                                                                |
| 2       | +5V         | +5V Supply Voltage                                                                                           |
| 3       | SDA         | I2C_SDA (Connected to GPS Module I2C_SDA)                                                                    |
| 4       | +5V         | +5V Supply Voltage                                                                                           |
| 5       | SCL         | I2C_SCL (Connected to GPS Module I2C_SCL)                                                                    |
| 6       | GND         | Ground                                                                                                       |
| 7       | NC          | Not Connected                                                                                                |
| 8       | UART_TX     | It should be connected to the RPi’s UART_TXD. It has been connected to the GPS Module’s UART_RXD internally. |
| 9       | GND         | Ground                                                                                                       |
| 10      | UART_RX     | It should be connected to the RPi’s UART_RXD. It has been connected to the GPS Module’s UART_TXD internally. |
| 11      | RESET       | SX1308 RESET (GPIO17 of RPi)                                                                                 |
| 12      | NC          | Not Connected                                                                                                |
| 13      | NC          | Not Connected                                                                                                |
| 14      | GND         | Ground                                                                                                       |
| 15      | NC          | Not Connected                                                                                                |
| 16      | NC          | Not Connected                                                                                                |
| 17      | NC          | Not Connected                                                                                                |
| 18      | NC          | Not Connected                                                                                                |
| 19      | SPI_MOSI    | It should be connected to the RPi’s SPI_MOSI. It has been connected to the SX1308’s SPI_MOSI internally.     |
| 20      | GND         | Ground                                                                                                       |
| 21      | SPI_MISO    | It should be connected to the RPi’s SPI_MISO. It has been connected to the SX1308’s SPI_MISO internally      |
| 22      | NC          | Not Connected                                                                                                |
| 23      | SPI_SCLK    | It should be connected to the RPi’s SPI_SCLK. It has been connected to the SX1308’s SPI_CLK internally.      |
| 24      | SPI_CE0     | It should be connected to the RPi’s SPI_CE0. It has been connected to the SX1308’s SPI_CS internally.        |
| 25      | GND         | Ground                                                                                                       |
| 26      | NC          | Not Connected                                                                                                |
| 27      | ID_SD       | I2C_SDA for HAT ID EEPROM                                                                                    |
| 28      | ID_SC       | I2C_SCL for HAT ID EEPROM                                                                                    |
| 29      | NC          | Not Connected                                                                                                |
| 30      | NC          | Not Connected                                                                                                |
| 31      | NC          | Not Connected                                                                                                |
| 32      | NC          | Not Connected                                                                                                |
| 33      | RESET_GPS   | GPS Module reset PIN (GPIO13 of RPi)                                                                         |
| 34      | GND         | Ground                                                                                                       |
| 35      | STANDBY_GPS | GPS Module standby PIN (GPIO19 of RPi)                                                                       |
| 36      | NC          | Not Connected                                                                                                |
| 37      | NC          | Not Connected                                                                                                |
| 38      | NC          | Not Connected                                                                                                |
| 39      | GND         | Ground                                                                                                       |
| 40      | NC          | Not Connected                                                                                                |

#### Main Specifications

| **Feature**           | **Specifications**                                                                                                                                                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computing             | • Raspberry Pi Zero Wireless (BCM2835, ARMv7) <br>• **Memory:** 512MB <br>• Storage: SD card slot                                                                                                                                                                           |
| WiFi Feature          | • **Frequency:** 2.400-2.4835GHz (802.11b/g/n) <br>• **RX Sensitivity:** -99dBm <br>• **TX Power:** 21dBm                                                                                                                                                                   |
| LoRa Feature          | • RAK2246 LoRaWAN Concentrator <br>• Semtech SX1308 with dual SX1257 <br>• Up to 8 Uplink and 1 Downlink channel <br>• RX Sensitivity: **-139 dBm** <br>• TX Power: **20 dBm (Max)** <br>• Frequency bands supported: RU864 / IN865 / EU868 / US915 / AU915 / KR920 / AS923 |
| Power Supply          | • DC 5V / 2.5A                                                                                                                                                                                                                                                              |
| Power Consumption     | • 5W (average)                                                                                                                                                                                                                                                              |
| Antennas              | • **LoRa**: RP-SMA Female Connector <br>• **GPS**: SMA Female<br> • **WiFi**: Internal Antenna                                                                                                                                                                              |
| LEDs                  | • POWER/STATUS LED                                                                                                                                                                                                                                                          |
| Ingress Protection    | • IP30                                                                                                                                                                                                                                                                      |
| Enclosure Material    | • Plastic                                                                                                                                                                                                                                                                   |
| Weight                | • 300g                                                                                                                                                                                                                                                                      |
| Dimension             | • 96mm x 66mm x 47mm                                                                                                                                                                                                                                                        |
| Operating Temperature | • -10 to 65˚C                                                                                                                                                                                                                                                               |

#### RF Characteristics

##### Wi-Fi Radio Specifications

| **Feature**             | **Specifications**           |
| ----------------------- | ---------------------------- |
| **Wireless Standard**   | • IEEE 802.11b/g/n           |
| **Operating Frequency** | • ISM band: 2.412~2.472(GHz) |
| **Operation Channels**  | • 2.4GHz: 1-13               |

##### LoRa Radio Specifications

| **Feature**              | **Specifications**                                      |
| ------------------------ | ------------------------------------------------------- |
| **Operating Frequency**  | • RU864 / IN865 / EU868 / US915 / AU915 / KR920 / AS923 |
| **Transmit Power**       | • 20 dBm (Max)                                          |
| **Receiver Sensitivity** | • -139 dBm (Min)                                        |

### Software (Firmware)

#### Firmware

| Model   | Raspberry Pi Board  | Firmware Version | Source                                                                                                        |
| ------- | ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| RAK7246 | Raspberry Pi Zero W | 4.2.0R           | [Download](https://downloads.rakwireless.com/LoRa/NeoPi-Gateway-RAK7246/Firmware/RAK7246_Latest_Firmware.zip) |

## Models / Bundles

Order Information

| Part Number | Package                                                              | Description                                                    |
| ----------- | -------------------------------------------------------------------- | -------------------------------------------------------------- |
| RAK7246G    | 1x LoRa Antenna, 1x GPS Antenna, 1x Micro USB Cable, 1x 16GB TF Card | Supports region: IN865 / EU868 / US915 / AU915 / AS923 / KR920 |
