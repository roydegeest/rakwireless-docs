---
next: electrical-characteristics
---

# Pin Definition

The pin connector of RAK2245 Pi HAT is located at the bottom side. Refer to the diagram and table below for the description and numbering of each pins.

<rk-img
  src="/assets/images/datasheet/rak2245-pihat/rak2245-pihat-pin-definition.jpg"
  width="100%"
  figure-number="1"
  caption="Pinout Diagram"
/>

| Pin | Name | Description | 
| :----: | :----:  | :----: | 
| 1 | 3.3V | 3.3V Supply Voltage | 
| 2 | 5V | 5V Supply Voltage | 
| 3 | SDA | I²C SDA (Connect to GPS Module I²C_SDA) | 
| 4 | 5V | 5V Supply Voltage | 
| 5 | SCL | I²C SCL (Connect to GPS Module I²C_SCL) | 
| 6 | GND | Ground | 
| 7 | NC | No Connection | 
| 8 | UART_RXD | It should be connected to RASPBERRY PI’s UART_TXD. This pin is connected to GPS Module’s UART_RXD internally. | 
| 9 | GND | Ground | 
| 10 | UART_TXD | It should be connected to RASPBERRY PI’s UART_RXD. This pin is connected to GPS Module’s UART_TXD internally | 
| 11 | RESET | SX1301 RESET (GPIO17 of Raspberry Pi) | 
| 12 | NC | No Connection | 
| 13 | NC | No Connection | 
| 14 | GND | Ground | 
| 15 | NC | No Connection | 
| 16 | NC | No Connection | 
| 17 | 3.3V | 3.3V Supply Voltage | 
| 18 | NC | No Connection | 
| 19 | SPI_MOSI | It should be connected to RASPBERRY PI’s SPI\_MOSI. This pin is connected to SX1301’s SPI_MOSI internally. | 
| 20 | GND | Ground | 
| 21 | SPI_MISO | It should be connected to RASPBERRY PI’s SPI\_MISO. This pin is connected to SX1301’s SPI_MISO internally. | 
| 22 | NC | No Connection | 
| 23 | SPI_CLK | It should be connected to RASPBERRY PI’s SPI\_SCLK. This pin is connected to SX1301’s SPI_CLK internally. | 
| 24 | SPI_CS | It should be connected to RASPBERRY PI’s SPI\_CE0. This pin is connected to SX1301’s SPI_CS internally. | 
| 25 | GND | Ground | 
| 26 | NC | No Connection | 
| 27 | ID_SD | I²C_SDA for HAT ID EEPROM | 
| 28 | ID_SC | I²C_SCL for HAT ID EEPROM | 
| 29 | NC | No Connection | 
| 30 | GND | Ground | 
| 31 | NC | No Connection | 
| 32 | NC | No Connection | 
| 33 | RESET_GPS | GPS Module Reset Pin (GPIO 13 of Raspberry Pi) | 
| 34 | GND | Ground | 
| 35 | STANDBY_GPS | GPS Module standby PIN (GPIO19 of Raspberry Pi) | 
| 36 | NC | No Connection | 
| 37 | NC | No Connection | 
| 38 | NC | No Connection | 
| 39 | GND | Ground | 
| 40 | NC | No Connection | 


