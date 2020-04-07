---
next: pin-definition
---

# Interfaces

## Functional Diagram

<rk-img
  src="/assets/images/datasheet/rak5205/rak5205-functional-diagram.png"
  width="100%"
  figure-number="1"
  caption="RAK5205 Functional Diagram"
/>

It is built around RAK811 module and compatible with 96Boards. It provides the
following interfaces, headers, jumpers, button and connectors: 

- Micro USB 
- 30-pin 96Boards Headers (UART, RESET, GPIOS, I2C, ADC) 
- 2-pin USB Boot jumper  3-pin UART RX jumper 
- 2-pin Battery female interface
- 2-pin Solar Panel female interface
- LEDs
- Reset Button

**It has two Antenna connectors:**

- RP-SMA Male connector of LoRa® Antenna(optional iPEX connector) 
- SMA Female connector of GPS Antenna(optional iPEX connector)

## Micro-B USB Interface

A Standard Micro-B USB compliant with USB 2.0 standard specification is used to provide an interface to connect to a PC for control of the board and firmware upgrade.The Micro-B USB pin definition is shown below:


<rk-img
  src="/assets/images/datasheet/rak5205/micro-usb-pinout.png"
  width="25%"
  figure-number="2"
  caption="Micro USB Pinout"
/>

| Pin | Description | 
| ---- | ---- | 
| 1 | USB_VBUS (+5V) | 
| 2 | USB_DM | 
| 3 | USB_DP | 
| 4 | NC | 
| 5 | GND | 


## LEDs

Three LEDs are used to indicate operating status, here are their functions:

- **GREEN LED** : Status - Defined By User
- **BLUE LED**: Status - Defined By User
- **RED LED** : Charging Status - indicates the Li-ion Battery is Charging

## Reset Push Button

 Reset Push Button is used to reset the RAK811 module. To reset the module push the Reset Button for 1 second.

