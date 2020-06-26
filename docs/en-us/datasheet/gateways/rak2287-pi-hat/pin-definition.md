## Pin Definition

### Pinout Diagram

<rk-img
  src="/assets/images/datasheet/rak2287-pi-hat/2.pin-definition.png"
  width="100%"
  caption="RAK2287 Pi Hat Pinout Diagram"
/>

| **Type** | **Description** | 
| ---- | ---- | 
| IO | Bidirectional | 
| DI | Digital input | 
| DO | Digital output | 
| OC | Open collector | 
| OD | Open drain | 
| PI | Power input | 
| PO | Power output | 
| NC | No Connection | 


| **Pin Number** | **Raspberry Pi 40-Pin Connector** | **RAK2287 Pi Hat Pin** | **Type** | **Remarks** | 
| ---- | ---- | ---- | ---- | ---- | 
| 1 | 3V3 | NC | - | No Connection | 
| 2 | 5V | 5V | PI | 5V Input | 
| 3 | GPIO2(SDA1) | NC | - | No Connection | 
| 4 | 5V | 5V | PI | 5V Input | 
| 5 | GPIO3(SCL1) | NC | - | No Connection | 
| 6 | GND | GND | - | Ground | 
| 7 | GPIO4(GPIO_GCLK) | NC | - | No Connection | 
| 8 | GPIO14(TXD0) | UART_RXD_ZOE-M8Q | DI | Connect RAK2287 built in GPS Module (ZOE-M8Q)’s UART_RXD | 
| 9 | GND | GND | - | Ground | 
| 10 | GPIO15(RXD0) | UART_TXD_ZOE-M8Q | DO | Connect to RAK2287 built in GPS Module (ZOE-M8Q)’s UART_TXD | 
| 11 | GPIO17(GPIO_GEN0) | RESET_RAK2287 | DI | Connect to SX1302’s RESET PIN, SX1302 reset input, Active high, ≥100ns for SX1302 reset | 
| 12 | GPIO18(GPIO_GEN1) | NC | - | No Connection | 
| 13 | GPIO27(GPIO_GEN2) | NC | - | No Connection | 
| 14 | GND | GND | - | Ground | 
| 15 | GPIO22(GPIO_GEN3) | NC | - | No Connection | 
| 16 | GPIO23(GPIO_GEN4) | NC | - | No Connection | 
| 17 | 3V3 | NC | - | No Connection | 
| 18 | GPIO24(GPIO_GEN5) | NC | - | No Connection | 
| 19 | GPIO10(SPI_MOSI) | SPI_MOSI | DI | Host SPI MOSI | 
| 20 | GND | GND | - | Ground | 
| 21 | GPIO9(SPI_MISO) | SPI_MISO | DO | Host SPI MISO | 
| 22 | GPIO25(GPIO_GEN6) | RESET_GPS_ZOE-M8Q | DI | Connect to RAK2287 built in GPS Module (ZOE-M8Q)’s <br> RESET, GPS module ZOE-M8Q reset inputs, Active low | 
| 23 | GPIO11(SPI_CLK) | SPI_CLK | DI | Host SPI CLK | 
| 24 | GPIO8(SPI_CE0_N) | SPI_CE | DI | Host SPI CS | 
| 25 | GND | GND | - | Ground | 
| 26 | GPIO7(SPI_CE1_N) | GPIO(6)_SX1302 | IO | Connect to SX1302’s GPIO[6] | 
| 27 | ID_SD | NC | - | No Connection | 
| 28 | ID_SC | NC | - | No Connection | 
| 29 | GPIO5 | NC | - | No Connection | 
| 30 | GND | GND | - | Ground | 
| 31 | GPIO6 | NC | - | No Connection | 
| 32 | GPIO12 | STANDBY_GPS_ZOE-M8Q | DI | Connect to RAK2287 built in GPS Module (ZOE-M8Q)’s <br> STANDBY, GPS module ZOE-M8Q external interrupt input, Active  low | 
| 33 | GPIO13 | NC | - | No Connection | 
| 34 | GND | GND | - | Ground | 
| 35 | GPIO19 | NC | - | No Connection | 
| 36 | GPIO16 | NC | - | No Connection | 
| 37 | GPIO26 | NC | - | No Connection | 
| 38 | GPIO20 | NC | - | No Connection | 
| 39 | GND | GND | - | Ground | 
| 40 | GPIO21 | NC | - | No Connection | 


| **Pin Number** | **Mini PCIEx Pin Rev. 2.0** | **RAK2287 Pin** | **Type** | **Description** | **Remarks** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| **1** | WAKE# | SX1261_BUSY | DO | No Connection by default | Reserved for future applications | 
| **2** | 3.3Vaux | 3V3 | PI | 3.3V DC supply | - | 
| **3** | COEX1 | SX1261_DIO1 | IO | No Connection by default | Reserved for future applications | 
| **4** | GND | GND | - | Ground | - | 
| **5** | COEX2 | SX1261_DIO2 | IO | No Connection by default | Reserved for future applications | 
| **6** | 1.5V | GPIO(6) | IO | - | Connect to SX1302’s GPIO[6]. | 
| **7** | CLKREQ# | SX1261_NSS | DI | No Connection by default | Reserved for future applications | 
| **8** | UIM_PWR | NC | - | No Connection | - | 
| **9** | GND | GND | - | Ground | - | 
| **10** | UIM_DATA | NC | - | No Connection | - | 
| **11** | REFCLK- | SX1261_NRESET | DI | No Connection by default | Reserved for future applications | 
| **12** | UIM_CLK | NC | - | No Connection | - | 
| **13** | REFCLK+ | MCU_NRESET | DI | No Connection by defaul | Reserved for future applications | 
| **14** | UIM_RESET | NC | - | No Connection | - | 
| **15** | GND | GND | - | Ground | - | 
| **16** | UIM_VPP | NC | - | No Connection | - | 
| **17** | RESERVED | NC | - | No Connection | - | 
| **18** | GND | GND | - | Ground | - | 
| **19** | RESERVED | PPS | DO | Time pulse output | Leave open if not used. | 
| **20** | W_DISABLE# | NC | - | No Connection | - | 
| **21** | GND | GND | - | Ground | - | 
| **22** | PERST# | SX1302_RESET | DI | RAK2287 reset input | Active high, ≥100ns for SX1302 reset. | 
| **23** | PERn0 | RESET_GPS | DI | GPS module ZOE-M8Q reset inputs | Active low. Leave open if not used. | 
| **24** | 3.3Vaux | 3V3 | PI | 3.3V DC supply | - | 
| **25** | PERp0 | STANDBY_GPS | DI | GPS module ZOE-M8Q external interrupt input | Active low. Leave open if not used. | 
| **26** | GND | GND | - | Ground | - | 
| **27** | GND | GND | - | Ground | - | 
| **28** | 1.5V | NC | - | No Connection | - | 
| **29** | GND | GND | - | Ground | - | 
| **30** | SMB_CLK | I2C_SCL | IO | HOST SCL | Connect to GPS module ZOE-M8Q’s SCL internally. <br> Leave open if not used. | 
| **31** | PETn0 | PI_UART_TX | DI | HOST UART_TX | Connect to GPS module ZOE-M8Q’s UART_RX internally. <br> Leave open if not used. | 
| **32** | SMB_DATA | I2C_SDA | IO | HOST SDA | Connect to GPS module ZOE-M8Q’s SDA internally. <br> Leave open if not used. | 
| **33** | PETp0 | PI_UART_RX | DO | HOST UART_RX | Connect to GPS module ZOE-M8Q’s UART_TX internally. <br> Leave open if not used. | 
| **34** | GND | GND | - | Ground | - | 
| **35** | GND | GND | - | Ground | - | 
| **36** | USB_D- | USB_DM | IO | USB differential data (-) | Require differential impedance of 90Ω. | 
| **37** | GND | GND | - | Ground | - | 
| **38** | USB_D+ | USB_DP | IO | USB differential data (+) | Require differential impedance of 90Ω. | 
| **39** | 3.3Vaux | 3V3 | PI | 3.3V DC supply | - | 
| **40** | GND | GND | - | Ground | - | 
| **41** | 3.3Vaux | 3V3 | PI | 3.3V DC supply | - | 
| **42** | LED_WWAN# | NC | - | No Connection | - | 
| **43** | GND | GND | - | Ground | - | 
| **44** | LED_WLAN# | NC | - | No Connection | - | 
| **45** | RESERVED | HOST_SCK | I/O | Host SPI CLK | - | 
| **46** | LED_WPAN# | NC | - | No Connection | - | 
| **47** | RESERVED | HOST _MISO | I/O | Host SPI MISO | - | 
| **48** | 1.5V | NC | - | No Connection | - | 
| **49** | RESERVED | HOST _MOSI | I/O | Host SPI MOSI | - | 
| **50** | GND | GND | - | Ground | - | 
| **51** | RESERVED | HOST _CSN | I/O | Host SPI CS | - | 
| **52** | 3.3Vaux | 3V3 | PI | 3.3V DC supply | - | 

