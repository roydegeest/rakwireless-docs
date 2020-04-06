---
next: working-requirements
---

# Board Pin Out and Components

RAK2013 board is composed of four connectors: **J3**, **J15**, **J16** and **J17**. 

## J3 - Boot Jumper

* Jumper for BG96/EG91/EG95 USB boot
* J3 open: boot normally.
* J3 shorted: Force the module to boot from USB port.

## J15 - Raspberry Connector

<rk-img
  src="/assets/images/datasheet/rak2013/rak2013-raspberry-connector.jpg"
  width="85%"
  figure-number="1"
  caption="RAK2013 Raspberry Connector"
/>


The table below shows the pin connections of the raspberry connector.

| Pin Number | RAK2013             | Raspberry Definition |
| ---------- | ------------------- | -------------------- |
| 1          | NC                  | 3V3                  |
| 2          | CONN_5V0            | 5V                   |
| 3          | SDA_to_MikroBus     | GPIO2 (SDA1)         |
| 4          | CONN_5V0            | 5V                   |
| 5          | SCL_to_MikroBus     | GPIO3 (SCL1)         |
| 6          | GND                 | GND                  |
| 7          | PA_SHNT             | GPIO4 (GCLK)         |
| 8          | BG96_RX             | GPIO14 (TXD0)        |
| 9          | GND                 | GND                  |
| 10         | BG96_TX             | GPIO15 (RXD0)        |
| 11         | NC                  | GPIO17 (GPIO_GEN0)   |
| 12         | BG96_PWRKEY         | GPIO18 (GPIO_GEN1)   |
| 13         | RST_ MikroBus       | GPIO27 (GPIO_GEN2)   |
| 14         | GND                 | GND                  |
| 15         | BG96_DTR            | GPIO22 (GPIO_GEN3)   |
| 16         | Reserved for GPS TX | GPIO23 (GPIO_GEN4)   |
| 17         | NC                  | 3V3                  |
| 18         | Reserved for GPS RX | GPIO24 (GPIO_GEN5)   |
| 19         | MikroBus_MOSI       | GPIO10 (SPI_MOSI)    |
| 20         | GND                 | GND                  |
| 21         | MikroBus _MISO      | GPIO9 (SPI_MISO)     |
| 22         | MikroBus _INT       | GPIO25 (GPIO_GEN6)   |
| 23         | MikroBus _CLK       | GPIO11 (SPI_SCLK)    |
| 24         | NC                  | GPIO8 (SPI_CE0_N)    |
| 25         | GND                 | GND                  |
| 26         | MikroBus _CS        | GPIO7 (SPI_CE1_N)    |
| 27         | ID_SDA              | ID_SD                |
| 28         | ID_SCL              | ID_SC                |
| 29         | BG96_W_DISABLE      | GPIO5                |
| 30         | GND                 | GND                  |
| 31         | BG96_RESET          | GPIO6                |
| 32         | MikroBus_PWM        | GPIO12               |
| 33         | NC                  | GPIO13               |
| 34         | GND                 | GND                  |
| 35         | NC                  | GPIO19               |
| 36         | BG96_PSM            | GPIO16               |
| 37         | BG96_AP_ READY      | GPIO26               |
| 38         | BG96_RI             | GPIO20               |
| 39         | GND                 | GND                  |
| 40         | BG96_STATUS         | GPIO21               |

## J16 and J17 – MikroBus Interface

<rk-img
  src="/assets/images/datasheet/rak2013/mikrobus-interface.jpg"
  width="100%"
  figure-number="2"
  caption="MikroBus Interface"
/>


## Micro-B USB Interface

A Standard Micro-B USB compliant with USB 2.0 standard specification is used to provide an interface to connect our device to Raspberry Pi or a PC for control of the board and firmware upgrade. The Micro-B USB pin connection and definition is shown below: 

<rk-img
  src="/assets/images/datasheet/rak2013/micro-b-usb-connection.jpg"
  width="20%"
  figure-number="3"
  caption="Micro-B USB Connection"
/>

| Pin | Description   |
| --- | ------------- |
| 1   | USB_VBUS(+5V) |
| 2   | USB-DM        |
| 3   | USB_DP        |
| 4   | NC            |
| 5   | GND           |

This USB port is connected to the BG96/EG91/EG95 USB interface. The USB interface is used for AT command communication, data transmission, software debugging and firmware upgrade.

## LEDs

Three (3) LEDs are used to indicate operating status, here are their functions:

| LED Color | Function  | LED Status | Description                                     |
| --------- | --------- | ---------- | ----------------------------------------------- |
| Green     | Power LED | ON         | Indicates that the power is good.               |
| Blue      | Status    | ON         | The module is powered on.                       |
|           |           | OFF        | The module is powered off.                      |
| Red       | NETLIGHT  | ON         | Indicates the module's network activity status. |
|           |           | OFF        | Not registered to the network.                  |

## RESET Push Button

Reset Push Button is used to reset the BG96/EG91/EG95 module. To reset the module, push the Reset Button for 1 second.

## PWRKEY Push Button

When either of Quectel BG96 / EG91 / EG95 module is in power off mode, it can be turned on to normal mode by driving the PWRKEY pin to a low level for at least 100 ms. Note that the module is still in power off mode even when plugging in the power socket, thus, press the PWRKEY to power up the module. When the module is in normal mode, it can be turned to power off mode by pressing the PWRKEY button.

## Antenna RF interface

The modules have two RF interfaces for LTE antenna and GPS/LTE DIV antenna over standard UFL connectors (Hirose U. FL-R-SMT) with a characteristic impedance of 50Ω. The RF ports support both the transmitter and receiver, providing the antenna interface.