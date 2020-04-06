---
next: power-requirements-rak5010
---
# Electrical and Mechanical Specifications 

## Absolute Maximum Ratings

Stresses above those listed as “**absolute maximum ratings**” may cause permanent damage to the device. This is a stress rating, functional operation of the device under these conditions is not advised. Exposure to maximum rating conditions may affect device reliability.

|Ratings|Maximum Value (V)| 
| :----: | :----: | 
| Vbus, power supply on UBS port | -0.3 - 5.5 | 
| Vbat, battery voltage | -0.3 - 4.3 | 
| Vconn solar panel voltage | -0.3 - 5.5 | 
| IOs of J-link (J9) | -0.3 - 1.9 | 
| IOs of BG96, nRF52840 - J10 and J12 | -0.3 -VREF | 
| ESD | 2000 | 

:::warning
:warning: The RAK5010, as any electronic equipment, is sensitive to electrostatic discharge (ESD), improper handling can cause permanent damage to module.
:::

## Environmental Requirements

The table below lists the operation and storage temperature requirements:

|Parameter|Min|Typical|Max| 
| :----: | :----: | :----: | :----: | 
| Operational Temp. Range | -35 ºC | +25 ºC | +75 ºC | 
| Extended Temp. Range | -40 ˚C | +25 ºC | +80 ˚C | 
| Storage Temp. Range | -40 ˚C | +25 ºC | +80 ˚C | 


## Current Consumption

|Conditions|Current| 
| :----: | :----: | 
| The nRF52840 is Running, the BG96 transmits data @ NB1, 23dBm | 200 mA | 
| BLE transmits @ 0dBm, the BG96 is in power saving mode | 7 mA | 
| The nRF52840 is in sleep mode, the BG96 is in power saving mode | 13 µA | 

:::tip Note:
:pencil: For the above results to be reached, the nRF52840's regulator has to be in DC-DC\nmode and all the sensors have to be in sleep mode.
:::

## Laboratory Testings

The figures below are the average current consumptions based on the different test cases.

**Equipments**:

- Oscilloscope
- RAK5010 WisTrio NB-IoT Tracker

**LoRa® Packet Sending**

The RAK5010 WisTrio NB-IoT Tracker takes **489.733 ms** to send a LoRa® packet which consumes **64.9** **mA** of current.

- **Sending Time**: 489.733 ms
- **Current consumption**: 64.9 mA

<rk-img
  src="/assets/images/datasheet/rak5010/oscilloscope-screen-capture-of-lora®-packet-sending.jpg"
  width="85%"
  figure-number="1"
  caption="Oscilloscope Screen Capture of LoRa® Packet Sending"
/>

**Sleep Mode**

The RAK5010 WisTrio NB-IoT Tracker when in sleep mode consumes **20.5 uA** of current.

- **Current consumption**: 20.5 uA

<rk-img
  src="/assets/images/datasheet/rak5010/oscilloscope-screen-capture-of-rak4600-lora®-module-in-sleep-mode.jpg"
  width="85%"
  figure-number="2"
  caption="Oscilloscope Screen Capture of RAK4600 LoRa® Module in Sleep Mode"
/>
