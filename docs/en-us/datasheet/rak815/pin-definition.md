## Pin Definition

<rk-img
  src="/assets/images/datasheet/rak815/rak815-interface.png"
  width="100%"
  figure-number="4"
  caption="RAK815 Interface"
/>

::: w
The pin numbers in the succeeding tables are sorted from top to bottom as shown in the above figure.
:::

### SWD Debug Interface

<rk-img
  src="/assets/images/datasheet/rak815/rak815-swd-debug-interface.jpg"
  width="40%"
  figure-number="5"
  caption="RAK815 SWD Debug Interface"
/>


|  Pin  |    Name     | Description                                            |
| :---: | :---------: | ------------------------------------------------------ |
|   1   |   VCC3.3    | 3.3V Power Supply                                      |
|   2   |    SWDIO    | SWD Interface data pin for NRF52832                    |
|   3   |   SWDCLK    | SWD Interface clock pin for NRF52832                   |
|   4   | P0.21\_NRST | P0.21 for NRF52832, can be used as Reset pin (Button3) |
|   5   |     GND     | Ground                                                 |

### UART Switch Interface

<rk-img
  src="/assets/images/datasheet/rak815/rak815-uart-switch-interface.jpg"
  width="65%"
  figure-number="6"
  caption="RAK815 UART Switch Interface"
/>

|  Pin  |   Name   |                      Description                       |
| :---: | :------: | :----------------------------------------------------: |
|   1   | GPS\_TXD |              UART TXD pin for GPS module               |
|   2   | GPS\_RXD |              UART RXD pin for GPS module               |
|   3   |  P0.28   |          P0.28 for NRF52832, Used as UART RXD          |
|   4   |  P0.29   |          P0.29 for NRF52832, Used as UART TXD          |
|   5   |   TXD    | The CP2102 converts the USB to the TXD pin of the UART |
|   6   |   RXD    | The CP2102 converts the USB to the RXD pin of the UART |


### GPS Module Expansion

<rk-img
  src="/assets/images/datasheet/rak815/rak815-gps-module-expansion.jpg"
  width="40%"
  figure-number="7"
  caption="RAK815 GPS Module Expansion"
/>


|  Pin  |   Name   | Description                                        |
| :---: | :------: | -------------------------------------------------- |
|   1   |  VCC3.3  | 3.3V Power Supply                                  |
|   2   |   GND    | Ground                                             |
|   3   | GPS\_TXD | UART TXD Pin for GPS Module                        |
|   4   | GPS\_RXD | UART RXD Pin for GPS Module                        |
|   5   |  P0.30   | P0.30 for NRF52832, used to control GPS module PPS |

### Reserved I2C Interface of the LCD

<rk-img
  src="/assets/images/datasheet/rak815/rak815-reserved-i2c-interface.jpg"
  width="65%"
  figure-number="8"
  caption="RAK815 Reserved I2C Interface"
/>

|  Pin  |  Name  | Description        |
| :---: | :----: | ------------------ |
|   1   |  GND   | Ground             |
|   2   | VCC3.3 | 3.3V Power Supply  |
|   3   |  SCL   | I2C SCL Clock Line |
|   4   |  SDA   | I2C SDA Data Line  |

### P1 and P3 Interface PINOUT

<rk-img
  src="/assets/images/datasheet/rak815/rak815-p1-and-p3-pinout.jpg"
  width="75%"
  figure-number="9"
  caption="RAK815 P1 and P3 Pinout"
/>


### Extension Interface P1

|  Pin  |  Name  | Description                                               |
| :---: | :----: | --------------------------------------------------------- |
|   1   |  GND   | Ground                                                    |
|   2   | P0.24  | P0.24 for NRF52832, used to control the expansion Button2 |
|   3   | P0.25  | P0.25 for NRF52832, used to control the expansion LED6    |
|   4   | P0.26  | P0.26 for NRF52832, used to control the expansion LED7    |
|   5   | P0.27  | P0.27 for NRF52832, used to control the expansion Button1 |
|   6   | P0.28  | P0.28 for NRF52832, used as UART RXD                      |
|   7   | P0.29  | P0.29 for NRF52832, used as UART TXD                      |
|   8   | P0.30  | P0.30 for NRF52832, used to control GPS module PPS        |
|   9   | P0.31  | P0.31 for NRF52832, used to control GPS module power      |
|  10   |  GND   | Ground                                                    |
|  11   |  GND   | Ground                                                    |
|  12   |  GND   | Ground                                                    |
|  13   | VCC3.3 | 3.3V Power Supply                                         |
|  14   | VCC3.3 | 3.3V Power Supply                                         |

### Extension Interface P3

|  Pin  |    Name     | Description                                              |
| :---: | :---------: | -------------------------------------------------------- |
|   1   |     GND     | Ground                                                   |
|   2   |    SWDIO    | SWD Interface data pin for NRF52832                      |
|   3   |   SWDCLK    | SWD Interface clock pin for NRF52832                     |
|   4   |    P0.20    | P0.20 for NRF52832                                       |
|   5   |    P0.19    | P0.19 for NRF52832                                       |
|   6   |    P0.18    | P0.18 for NRF52832                                       |
|   7   |    P0.17    | P0.17 for NRF52832                                       |
|   8   |    P0.16    | P0.16 for NRF52832, used as I2C SCL                      |
|   9   |    P0.15    | P0.15 for NRF52832, used as I2C SDA                      |
|  10   |     GND     | Ground                                                   |
|  11   | P0.21_NRST | P0.21 for NRF52832, can be used as Reset pin (Button3)   |
|  12   |    P0.04    | P0.04 for NRF52832, used to control LIS3DH module INT1   |
|  13   |    P0.03    | P0.03 for NRF52832, used to control LIS3DH module INT2   |
|  14   |    P0.02    | P0.02 for NRF52832, used as ADC to detect battery charge |

