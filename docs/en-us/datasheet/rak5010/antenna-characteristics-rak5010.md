---
next: schematic-diagram-rak5010
---

# Antenna Characteristics

## 1. LTE Antenna

The LTE Antenna Connector is shown below: 

<rk-img
  src="/assets/images/datasheet/rak5010/ipex-onboard-connector-for-the-lte-antenna.jpg"
  width="50%"
  figure-number="1"
  caption="iPEX onboard connector for the LTE antenna"
/>

A PCB antenna (Figure 2) is included with the board. In case you want to use another antenna keep in mind that you need to have the proper connector (iPEX) and have it tuned to the frequency band of operation in your region.

<rk-img
  src="/assets/images/datasheet/rak5010/pcb-lte-antenna-with-pigtail.png"
  width="75%"
  figure-number="2"
  caption="PCB LTE Antenna with Pigtail"
/>

### Antenna Specifications

|Item|Specifications| 
| ---- | ---- | 
| Range of Frequency | 806-960/1710-2700MHz | 
| VSWR | ≤1.5 | 
| Gain | 1.0 | 
| Polarization | Linear | 
| Impedance (Ω) | 50 | 
| Antenna Type | PCB | 


### Environmental Requirements

The antenna environmental requirements are listed in the table below:

|Conditions|Temperature|Humidity| 
| ---- | ---- | ---- | 
| Working | -40 ºC ~ +75 ºC | 0% ~ 95% | 
| Storage | 40 ºC ~ +85 ºC | 0% ~ 95% | 

## 2. GPS Antenna

The GPS antenna connector is shown below (same as the LTE one):

<rk-img
  src="/assets/images/datasheet/rak5010/ipex-onboard-connector-for-the-gps-antenna.jpg"
  width="50%"
  figure-number="3"
  caption="iPEX onboard connector for the GPS antenna"
/>

### GPS Antenna Power Supply Control

In order to support low power and long battery life, the active GPS antenna’s power supply should be shut down when system don’t access the data from GPS module. The GPS power supply is controlled by nRF52840 with MOSFET, The pin map of GPS_EN on Nrf52840 is P1.09, and the circuit is below:


<rk-img
  src="/assets/images/datasheet/rak5010/circuit-diagram.png"
  width="75%"
/>
<rk-img
  src="/assets/images/datasheet/rak5010/circuit-diagram-2.png"
  width="50%"
  figure-number="4"
  caption="iPEX onboard connector for the GPS antenna"
/>

- **set P1.07=1, GPS antenna power is on;**
- **set P1.07=0, GPS antenna power is off;**

### Antenna Specifications

<rk-img
  src="/assets/images/datasheet/rak5010/gps-antenna.png"
  width="75%"
  figure-number="5"
  caption="GPS Antenna"
/>

|Item|Specifications|PET| 
| ---- | ---- | ---- | 
| Range of Receiving Frequency | 1575.42±1.1 | ±2.5 | 
| Center Frequency (MHz) w/ 30mm2 (2 GND plane | 1575.42 | ±3.0 | 
| Bandwidth (MHz) (Return Loss ≤ -10dB) | ≥10 | ±0.5 | 
| VSWR (in Center Frequency) | ≤1.5 | ±0.5 | 
| Gain (Zenith) (dBi Typ.) w/ 70mm2 GND Plane | 4.5 | ±0.5 | 
| Axial Ratio (dB) w/ 70mm2 GND Plane | 3.0 | ±0.2 | 
| Polarization | Right-Handed Circular |  | 
| Impedance (Ω) | 50 |  | 
| Frequency Temperature Coefficient (ppm/ºC) | 0±10 |  | 


### Amplifier Specifications

|Item|Specifications| 
| ---- | ---- | 
| Frequency Range | 1575.42 MHz | 
| Gain | 27 dB | 
| VSWR | ≤ 2.0 V | 
| Noise Coefficient | ≤ 2.0 dB | 
| DC Voltage | 3 ~ 5 V | 
| DC Current | 10 mA | 

### Environmental Test Performance Specifications

| Item | Normal Temp. | High Temp. | Low Temp. | 
| ---- | ---- | ---- | ---- | 
| Amplifier Gain | 27dB ± 2.0 | 27dB ± 2.0 | 27dB ± 2.0 | 
| VSWR | ≤ 2.0 | ≤ 2.0 | ≤ 2.0 | 
| Noise Coefficient | ≤ 2.0 | ≤ 2.0 | ≤ 2.0 | 

:::tip Note:
:pencil: **1. High temperature test:** soap in temperature (85\u00ba C) and humidity (95%) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change. <br> **2. Low temperature test:**_ soap in temperature (-40\u00ba C) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change.
:::

### Environmental Requirements

| Conditions | Temperature | Humidity | 
| ---- | ---- | ---- | 
| Working | -35 ºC ~ +80 ºC | 0% ~ 95% | 
| Storage | -35 ºC ~ +80 ºC | 0% ~ 95% | 