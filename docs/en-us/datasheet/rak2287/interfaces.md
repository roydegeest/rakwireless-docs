---
static_root: /assets/images/datasheet/rak2287/interfaces
---

# Interfaces

## Block Diagram

<rk-img
  :src="`${$frontmatter.static_root}/block_diagram.png`"
  width="100%"
  figure-number="1"
  caption="RAK2287 Block Diagram"
/>

RAK2287 card is equipped with one SX1302 chip and two SX1250. The first chip is utilized for RF signal and the core of the device. While the latter, provides the related LoRa® modem and processing functionalities. Additional signal conditioning circuitry is implemented for PCI Express Mini Card compliance, and one UFL connectors are available for external antennas integration.

## Mini PCLe Interface

RAK2287 is compliant to 52-pin PCI Express Full-Mini Card Type F2 form factor, with top-side and bottom-side keep-out areas. The pin configuration is defined below:

| **Item**          | **Pin(s)**                                           |
| ----------------- | ---------------------------------------------------- |
| **GND**           | 4, 9, 15, 18, 21, 26, 27, 29, 34, 35, 37, 40, 43, 50 |
| **3.3V**          | 2, 24, 39, 41, 52                                    |
| **SX1261_BUSY**   | 1                                                    |
| **SX1261_DIO1**   | 3                                                    |
| **SX1261_DIO2**   | 5                                                    |
| **GPIO(6)**       | 6                                                    |
| **SX1261_NSS**    | 7                                                    |
| **SX1261_NRESET** | 11                                                   |
| **MCU_NRESET**    | 13                                                   |
| **PPS**           | 19                                                   |
| **SX1302_RESET**  | 22                                                   |
| **RESET_GPS**     | 23                                                   |
| **STANDBY_GPS**   | 25                                                   |
| **I2C_SCL**       | 30                                                   |

## Power Supply

RAK2287 card must be supplied through the 3.3Vaux pins by a DC power supply. The voltage needs to be stable since the current drawn can vary significantly during operation based on the power consumption profile of the SX1302 chip (see [SX1302 Datasheet](https://www.mouser.com/pdfDocs/Semtech_08072019_DS_SX1302_V10-1626824.pdf))

## SPI Interface

SPI interface mainly provides for the Host_SCK, Host_MISO, Host_MOSI, Host_CSN pins of the system connector. The SPI interface gives access to the configuration register of SX1302 via a synchronous full-duplex protocol. Only the slave side is implemented.

## USB Interface

RAK2287 card can support the high speed USB to SPI by STM32L412Kx, it includes a USB 2.0 compliant interface with maximum 480 Mb/s data rate, representing the interface for any communication with an external host application processor. The module itself acts as a USB device and can be connected to any USB host equipped with compatible drivers. For more information, please refer to the data sheet of [STM32L412Kx](https://static6.arrow.com/aropdfconversion/aa9551e10fd0227ad8a1e3981a1804037f0d680f/stm32l412t8.pdf).

::: tip 📝 NOTE
RAK2287-SPI version doesn't have this interface.
:::

## GPS_PPS

RAK2287 card includes
the GPS_PPS input for received packets time-stamped.

## RESET

RAK2287 card includes the RESET active-high input signal to reset the radio operations as specified by the SX1302 Specification[.](#_bookmark73)

## Antenna RF Interface

The modules have one RF interfaces over a standard UFL connectors (Hirose U. FL-R-SMT) with a characteristic impedance of 50Ω. The RF port (J1) supports both Tx and Rx, providing the antenna interface.
