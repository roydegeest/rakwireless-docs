---
static_root: /assets/images/datasheet/rak2287/interfaces
---

# Interfaces

## Block Diagram

RAK2287 card is equipped with one SX1302 chip and two SX1250. The first chip is utilized for RF signal and the core of the device. While the latter, provides the related LoRa® modem and processing functionalities. Additional signal conditioning circuitry is implemented for PCI Express Mini Card compliance, and one UFL connectors are available for external antennas integration.

<rk-img
  :src="`${$frontmatter.static_root}/block_diagram.png`"
  width="100%"
  figure-number="1"
  caption="RAK2287 Block Diagram"
/>

## Power Supply

RAK2287 card must be supplied through the 3.3Vaux pins by a DC power supply. The voltage needs to be stable since the current drawn can vary significantly during operation based on the power consumption profile of the SX1302 chip (see [SX1302 Datasheet](https://www.mouser.com/pdfDocs/Semtech_08072019_DS_SX1302_V10-1626824.pdf))

## SPI Interface

SPI interface mainly provides for the Host_SCK, Host_MISO, Host_MOSI, Host_CSN pins of the system connector. The SPI interface gives access to the configuration register of SX1302 via a synchronous full-duplex protocol. Only the slave side is implemented.

## UART and I2C Interface

RAK2287 integrates ZOE-M8Q GPS module which has UART and I2C interface. The PINs on golden finger provide an UART connection and an I2C connection, which allows direct access to the GPS module. The PPS signal is not only connected to SX1302 internally, but also connected to golden finger which can be used by host board.

## GPS_PPS

RAK2287 card includes
the GPS_PPS input for received packets time-stamped.

## RESET

RAK2287 card includes the RESET active-high input signal to reset the radio operations as specified by the SX1302 Specification[.](#_bookmark73)

## Antenna RF Interface

The modules have one RF interfaces over a standard UFL connectors (Hirose U. FL-R-SMT) with a characteristic impedance of 50Ω. The RF port (J1) supports both Tx and Rx, providing the antenna interface.
