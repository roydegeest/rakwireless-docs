## Pin Definition

Provided in this section is the Pinout of the RAK4200 LPWAN Module.

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/pinout-for-rak4200.png"
  width="75%"
  figure-number="4"
  caption="Pinout for RAK4200"
/>


| Pin | Name     | I/O | Description                                      |
| --- | -------- | --- | ------------------------------------------------ |
| 1   | UART2_RX | I   | Main UART (STM32L071K8 PA10)                     |
| 2   | UART2_TX | O   | Main UART (STM32L071K8 PA9)                      |
| 3   | UART2_DE | I/O | GPIO (STM32L071K8 PA12)                          |
| 4   | UART1_TX | I/O | General GPIO or UART(Reserved) (STM32L051K8 PA2) |
| 5   | UART1_RX | I/O | General GPIO or UART(Reserved) (STM32L051K8 PA3) |
| 6   | UART1_DE | I/O | General GPIO or UART(Reserved) (STM32L051K8 PA1) |
| 7   | SWDIO    | I/O | Programming (STM32L051K8 PA13)                   |
| 8   | SWCLK    | I/O | Programming (STM32L051K8 PA14)                   |
| 9   | I2C_SCL  | I/O | I2C interface (STM32L051K8 PB6)                  |
| 10  | I2C_SDA  | I/O | I2C interface (STM32L051K8 PB7)                  |
| 11  | GND      | -   | Ground                                           |
| 12  | RF       | I/O | RF port (reserved), default RF out by IPEX       |
| 13  | GND      | -   | Ground                                           |
| 14  | GND      | -   | Ground                                           |
| 15  | SPI_CLK  | I/O | Reserved PA5                                     |
| 16  | SPI_MISO | I/O | Reserved PA6                                     |
| 17  | SPI_MOSI | I/O | Reserved PA7                                     |
| 18  | MCU_NRST | I/O | MCU reset (STM32L051K8 NRST)                     |
| 19  | GND      | -   | Ground                                           |
| 20  | VDD      | -   | DC3V3                                            |
