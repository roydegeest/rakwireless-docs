---
tags: + datasheet
---

# RAK8212 iTracker Pro

<rk-img
  src="/assets/images/datasheet/rak8212/rak8212-overview.png"
  width="30%"
  caption="RAK8212 iTracker Pro"
/>

## Overview

### Description

The **iTracker Pro RAK8212** is versatile developer board aimed at aiding in quick prototypes using NB-IOT. The board includes a vast array of connectivity options like **NB-IoT**, **Bluetooth 5.0** and **GPS** and sensors like an **accelerometer**, **light sensor** and **barometric sensor**. At the heart of the module is the venerable **Nordic NRF52832 BLE** processor. The NB-IoT connectivity is provided by the **Quectel BG96 module**. The RAK8212 module is **Arduino friendly** and can be programmed using the IDE. The board also provides **SWD interface** for programming the **NRF52832** core. The combination of BLE and NB-IoT provides flexible low power consumption development along with myriad of application option ranging from telemetry to live tracking and environment sensing.

Applications can be made with the RAK8212 like Vehicle location/fleet transportation management, Safety monitoring of old/young children, Animal protection and animal husbandry management, Loss of assets / personnel positioning and Other remote, battery powered applications.

### Features

- **Arduino Compatible** – Host controller NRF52832 has been widely used in Arduino environment
- Integrated **Quectel BG96 NB-IoT wireless communication Module**, with GPS built-in
- Integrated **LIS3DH** ultra low-power, high performance 3-axes “nano” accelerometer
- Integrated **LIS2MDL** ultra-low-power, high-performance 3-axis digital magnetic sensor
- Integrated **BME280** ultra low-power, high linearity, high accuracy sensors for pressure, humidity and temperature
- Integrated **OPT3001** that measures the intensity of visible light
- Size: **43 mm x 38 mm x 18 mm**
- **Operation temperature** -40°C to +85°C
- Power supply 3.3 Volts to 5 Volts (power at solar panel connector P2).

## Specifications

### Overview

#### Module Overview

<rk-img
  src="/assets/images/datasheet/rak8212/top-view.jpg"
  width="45%"
  caption="RAK8212 iTracker Pro Top View"
/>

<rk-img
  src="/assets/images/datasheet/rak8212/bottom-view.jpg"
  width="45%"
  caption="RAK8212 iTracker Pro Bottom View"
/>

#### Block Diagram

<rk-img
  src="/assets/images/datasheet/rak8212/block-diagram.png"
  width="100%"
  caption="System Block Diagram"
/>

### Hardware

#### Pin Definition

<rk-img
  src="/assets/images/datasheet/rak8212/pin-definition.png"
  width="100%"
  figure-number="4"
  caption="RAK8212 Pin Definition"
/>

| NO  | Name         | Type     | Description                               |
| --- | ------------ | -------- | ----------------------------------------- |
| P1  | VDD_nRF      | P        | VCC33                                     |
| P1  | SWDIO        | DI/DO    | Debug                                     |
| P1  | SWDCLK       | DI       | Debug                                     |
| P1  | GND          |          | Ground                                    |
| P2  | VBUS         | P        | Charging interface/Connect to Solar panel |
| P2  | GND          |          | Ground                                    |
| P3  | BAT          | P        | Power Supply                              |
| P3  | TEMP         | O        | Charge indicator                          |
| P3  | GND          |          | Ground                                    |
| P4  | RESET        | Reset    | Reset                                     |
| P4  | VCC33        | P        | VCC33                                     |
| P4  | GND          |          | Ground                                    |
| P4  | TILT_DOUT    | DI/DO,AI | Extended interface                        |
| P5  | SENSOR_DOUT1 | DI/DO,AI | Extended interface                        |
| P5  | SENSOR_DOUT2 | DI/DO,AI | Extended interface                        |
| P5  | VCC33        | P        | VCC33                                     |
| P5  | GND          |          | Ground                                    |

#### RF Characteristics

|                |                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| Frequency Band | Cat.M1/Cat.NB1: LTE FDD: B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B26/B28 LTE TDD: B39 (for Cat.M1 only) |
|                | EGPRS: 850/900/1800/1900MHz                                                                           |

#### Electrical Characteristics

##### Power Requirements

|              |                      |
| ------------ | -------------------- |
| Power Supply | 3.5 Volts ~ 18 Volts |

#### Environmental Characteristics

|                       |                |
| --------------------- | -------------- |
| Operating Temperature | -40°C to +85°C |
| Storage Temperature   | -40°C to +85°C |

#### Schematic Diagram

<rk-img
  src="/assets/images/datasheet/rak8212/schematic-1.png"
  width="100%"
  caption="Schematic Diagram #1"
/>
<rk-img
  src="/assets/images/datasheet/rak8212/schematic-2.png"
  width="100%"
  caption="Schematic Diagram #2"
/>
<rk-img
  src="/assets/images/datasheet/rak8212/schematic-3.png"
  width="100%"
  caption="Schematic Diagram #3"
/>
<rk-img
  src="/assets/images/datasheet/rak8212/schematic-4.png"
  width="100%"
  caption="Schematic Diagram #4"
/>
<rk-img
  src="/assets/images/datasheet/rak8212/schematic-5.png"
  width="100%"
  caption="Schematic Diagram #5"
/>

### Software

| Model     | Version  | Source                                                                                         |
| --------- | -------- | ---------------------------------------------------------------------------------------------- |
| RAK8212   | V3.0.0.8 | [Download](https://downloads.rakwireless.com/Cellular/RAK8212/Firmware/RAK8212_V3.0.0.8.rar)   |
| RAK8212-M |          | [Download](https://downloads.rakwireless.com/Cellular/RAK8212/Firmware/RAK8212-M_V3.0.0.8.rar) |

## Models / Bundles

**No Order Information provided**

## Certifications

**No Certifications provided**
