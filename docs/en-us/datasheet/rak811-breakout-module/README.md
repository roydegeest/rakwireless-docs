---
tags:
- datasheet
---

# RAK811 LPWAN Breakout Module

<rk-img
  src="/assets/images/datasheet/rak811-breakout-module/rak811-lpwan-breakout-module.jpg"
  width="50%"
  figure-number="1"
  caption="RAK811 LPWAN Breakout Module"
/>

### Product Description

**RAK811 LPWAN Breakout Module** is an easy to use, compact and  low power long range LoRa® technology with wireless transceiver capabilities. A combination of RAK811 chipset and RAK811 Breakout Board with Semtech SX1276 at its core which takes advantage of all LoRa® features. 

The RAK811 module complies with the latest LoRaWAN® Class A & C protocol specifications with fully supported LoRaWAN® 1.0.2 stack in its firmware. It has a simple and straightforward setup and can quickly access LWPA IOT platforms. Additionally, it supports LoRa® Point to Point (P2P) communications which helps customers in implementing their own private LoRa® network.

The node can work in a number of modes, with different data rates and read data from the attached sensors with the help of its serial AT commands. 

This module is a complete solution in developing your LoRaWAN® protocol techniques. A few of its application includes: Automated Meters Reading, Home and Building Automation, Wireless Alarm and Security Systems, Industrial Monitoring and Control and Long Range Irrigation Systems. 

### Product Features

- Based on **Semtech SX1276**
- Full **LoRaWAN® 1.0.2** stack support
- **Supported bands**: (EU433, CN470, IN865, EU868, AU915, US915, KR920, AS920 and AS923)
- **Output power**: 5－20dBm adjustable
- **Max sensitivity**: -130dBm @ 0.3kps
- Open source firmware with built-in AT command functionality for easy setup with UART interface.
- Theoretical max range of 2km in Urban and 15km in open areas
- Integrates both **SMA** and **iPEX** antenna connectors
- **Operating temperature**: -40°C ~ 85°C (industrial grade)
- **Storage temperature**: -40°C ~ 85°C (non-condensing)
- Supports **P2P** communication
- Activation available through OTAA/ABP
- **Long battery life** - over 10 years
- Low power consumption with 500nA on standby and in-air wake-up capability.

## Board Overview

The **RAK811 LPWAN Breakout Module** has a board dimension of **42mm x 25mm** and weighs at about **0.2kg**.

<rk-img
  src="/assets/images/datasheet/rak811-breakout-module/dimensions.png"
  width="70%"
  figure-number="2"
  caption="RAK811 Breakout Board Dimensions"
/>

## Pin Definition

The RAK811 supports two different frequency variation: **Low Radio Frequency** and **High Radio frequency**.

### 1. Low Radio Frequency

The Low radio frequency is applicable to bandwidth of regions **EU433** and **CN470**. 

### Low RF Pin Outline

<rk-img
  src="/assets/images/datasheet/rak811-breakout-module/board-pinout-for-rak811-low-rf.jpg"
  width="75%"
  figure-number="3"
  caption="Board Pinout for RAK811 Low RF"
/>

### Low RF Pin Definition

| Pin No. | Name          | Type | Description                           |
| ------- | ------------- | ---- | ------------------------------------- |
| 1       | GND           | -    | Ground connections                    |
| 2       | PB12/ADC      | I/O  | ADC_IN18                              |
| 3       | PB14/ADC      | I/O  | ADC_IN20                              |
| 4       | PB15/ADC      | I/O  | ADC_IN21                              |
| 5       | PB13          | I/O  | B part for GPIO port                  |
| 6       | PA9/UART1_TX  | O    | UART1 Interface                       |
| 7       | PA10/UART1_RX | I    | UART1 Interface                       |
| 8       | PA12          | O    | A part for GPIO port                  |
| 9       | PA11          | I    | A part for GPIO port                  |
| 10      | PA13          | I/O  | A part for GPIO port                  |
| 11      | VCC           | P    | Main power voltage source input       |
| 12      | GND           | -    | Ground connections                    |
| 13      | PA14          | I/O  | A part for GPIO port                  |
| 14      | PA15          | I/O  | A part for GPIO port                  |
| 15      | PA3           | I/O  | A part for GPIO port                  |
| 16      | PB5           | I/O  | B part for GPIO port                  |
| 17      | BOOT0         | I    | Boot mode GPIO enable pin,high active |
| 18      | PB6/I2C_SCL   | I/O  | I2C1_SCL                              |
| 19      | PB7/I2C_SDA   | I/O  | I2C1_SDA                              |
| 20      | PA2/ADC       | I/O  | ADC_IN2                               |
| 21      | GND           | -    | Ground connections                    |
| 22      | PA1/ADC       | I    | ADC_IN1                               |
| 23      | PA0/ADC       | O    | ADC_IN0                               |
| 24      | RST           | I    | Reset trigger input,low active        |
| 25      | PB10          | I/O  | B part for GPIO port                  |
| 26      | PB11          | I/O  | B part for GPIO port                  |
| 27      | PB2           | I/O  | B part for GPIO port                  |
| 28      | GND           | -    | Ground connections                    |
| 29      | GND           | -    | Ground connections                    |
| 30      | GND           | -    | Ground connections                    |
| 31      | GND           | -    | Ground connections                    |
| 32      | GND           | -    | Ground connections                    |
| 33      | RF_OUT        | I/O  | RF I/O port                           |
| 34      | GND           | -    | Ground connections                    |


### 2. High Radio Frequency

High radio frequency hardware support the regions of **EU868, US915, AU915, KR920, AS923, IN865**.

### High RF Pin Outline

<rk-img
  src="/assets/images/datasheet/rak811-breakout-module/board-pinout-for-rak811-high-rf.jpg"
  width="75%"
  figure-number="4"
  caption="Board Pinout for RAK811 High RF"
/>

### High RF Pin Definition

| Pin No. | Name          | Type | Description                           |
| ------- | ------------- | ---- | ------------------------------------- |
| 1       | GND           | -    | Ground connections                    |
| 2       | PB12/ADC      | I/O  | ADC_IN18                              |
| 3       | PB14/ADC      | I/O  | ADC_IN20                              |
| 4       | PB15/ADC      | I/O  | ADC_IN21                              |
| 5       | PA8           | I/O  | A part for GPIO port                  |
| 6       | PA9/UART1_TX  | O    | UART1 Interface                       |
| 7       | PA10/UART1_RX | I    | UART1 Interface                       |
| 8       | PA12          | O    | A part for GPIO port                  |
| 9       | PB4           | I    | B part for GPIO port                  |
| 10      | PA13          | I/O  | A part for GPIO port                  |
| 11      | VCC           | P    | Main power voltage source input       |
| 12      | GND           | -    | Ground connections                    |
| 13      | PA14          | I/O  | A part for GPIO port                  |
| 14      | PA15          | I/O  | A part for GPIO port                  |
| 15      | PB3           | I/O  | B part for GPIO port                  |
| 16      | PB5           | I/O  | B part for GPIO port                  |
| 17      | BOOT0         | I    | Boot mode GPIO enable pin,high active |
| 18      | PB8/I2C_SCL   | I/O  | I2C1_SCL                              |
| 19      | PB9/I2C_SDA   | I/O  | I2C1_SDA                              |
| 20      | PA2/ADC       | I/O  | ADC_IN2                               |
| 21      | GND           | -    | Ground connections                    |
| 22      | PA1/ADC       | I    | ADC_IN1                               |
| 23      | PA0/ADC       | O    | ADC_IN0                               |
| 24      | RST           | I    | Reset trigger input,low active        |
| 25      | PB10          | I/O  | B part for GPIO port                  |
| 26      | PB11          | I/O  | B part for GPIO port                  |
| 27      | PB2           | I/O  | B part for GPIO port                  |
| 28      | GND           | -    | Ground connections                    |
| 29      | GND           | -    | Ground connections                    |
| 30      | GND           | -    | Ground connections                    |
| 31      | GND           | -    | Ground connections                    |
| 32      | GND           | -    | Ground connections                    |
| 33      | RF_OUT        | I/O  | RF I/O port                           |
| 34      | GND           | -    | Ground connections                    |


## Board Layout

### Board Physical Dimension


<rk-img
  src="/assets/images/datasheet/rak811-breakout-module/rak811-physical-dimension.jpg"
  width="75%"
  figure-number="5"
  caption="RAK811 Physical Dimension"
/>

### Layout Recommendation

<rk-img
  src="/assets/images/datasheet/rak811-breakout-module/rak811-layout.jpg"
  width="75%"
  figure-number="6"
  caption="RAK811 Layout"
/>

## Schematic Diagram

<rk-img
  src="/assets/images/datasheet/rak811-breakout-module/schematic-diagram-for-rak811.jpg"
  width="100%"
  figure-number="7"
  caption="RAK811 Schematic Diagram"
/>

<rk-img
  src="/assets/images/datasheet/rak811-breakout-module/reference-design.jpg"
  width="100%"
  figure-number="8"
  caption="Reference Design"
/>

## Device Specifications

### General Specification

| Model Name            | RAK811                      |
| --------------------- | --------------------------- |
| Dimension             | L x W x H: 22 x 14 x 1.7 mm |
| Interface             | UART1, GPIOs                |
| Operating Temperature | -40°C to 85°C               |
| Storage Temperature   | -40°C to 85°C               |


### Recommended Operating Rating

| Feature               | Min  | Typ | Max  | Unit |
| --------------------- | ---- | --- | ---- | ---- |
| Operating Temperature | -40  | 25  | 85   | °C   |
| VCC                   | 3.15 | 3.3 | 3.45 | V    |


### Specification

| Feature        | Description                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| Frequency Band | **RAK811-LF**: EU433, CN470 <br> **RAK811-HF**: EU868, US915, AU915, KR920, AS923, IN865 |
| Host Interface | UART                                                                                     |


| Characteristics     | Condition  | Min         | Typ. | Max | Unit |
| ------------------- | ---------- | ----------- | ---- | --- | ---- |
| Transmit            | TX Power   | -           | 14   | 20  | dBm  |
| RX Sensitivity      | RSSI       | -130        | -    | -   | dBm  |
|                     | SNR        | -15         | -    | -   | dB   |
| Current Consumption | TX mode    | 30 (14 dBm) | -    | -   | mA   |
|                     | RX mode    | 5.5         | -    | -   | mA   |
|                     | Sleep mode | 7.2         | -    | -   | uA   |


## Reflow Profile

Referred to IPC/JEDEC standard:

* **Peak Temperature** : < 250 °C
* **Number of Times** : ≤ 2 times

<rk-img
  src="/assets/images/datasheet/rak811-breakout-module/reflow-profile-for-rak811.jpg"
  width="75%"
  figure-number="9"
  caption="Reflow Profile for RAK811"
/>