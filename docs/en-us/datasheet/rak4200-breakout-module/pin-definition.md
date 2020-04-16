---
next: power-consumption
---

# Pin Definition

The figure below shows the pinout of the RAK4200 Breakout Module:

<rk-img
  src="/assets/images/datasheet/rak4200-breakout-module/rak4200-breakout-board-pinout.png"
  width="75%"
  figure-number="1"
  caption="RAK4200 Breakout Module Pinout"
/>

The pin definitions of RAK4200 Breakout Module are shown in the following tables below:

## J1 Pin Definitions

| Pin | Name | I/O | Description | Alternate functions | 
| ---- | ---- | ---- | ---- | ---- | 
| 1 | UART2_RX | I | Main UART (STM32L071 PA3) | USART1RX, I2C1 SDA | 
| 2 | UART2_TX | O | Main UART (STM32L071 PA2) | MCO, USART1TX, I2C1 SCL, I2C3_SMBA | 
| 3 | UART2_DE | I/O | GPIO (STM32L071 PA1) | SPI1MOSI, EVENT OUT, USART1_RTS_DE, COMP2_OUT | 
| 4 | UART1_DE | I/O | GPIO or UART (Reserved) GPIO or UART (Reserved) | EVENT OUT, TIM2_CH2, USART2_RTS_DE, TIM21_ETR, USART4_RX, COMP1_INP, ADC_IN1 | 
| 5 | SWDIO | I/O | Programming (STM32L071 PA13) | SWDIO, LPUART1_RX | 
| 6 | SWCLK | I/O | Programming (STM32L071 PA14) | SWCLK, USART2_TX, LPUART1_ TX | 
| 7 | I2C_SCL | I/O | I2C interface (STM32L071 PB6) | USART1_TX, I2C1_ SCL, LPTIM1_ETR, COMP2_INP | 
| 8 | I2C_SDA | I/O | I2C interface (STM32L071 PB6) | USART1_RX, I2C1_ SDA, LPTIM1_IN2, USART4_CTS, COMP2_INP, VREF_PVD_IN | 


## J2 Pin Definitions

| Pin | Name | I/O | Description | Alternate Functions | 
| ---- | ---- | ---- | ---- | ---- | 
| 1 | VDD | - | DC3V3 | Supply voltage 2.0~3.3V | 
| 2 | UART1_TX | I/O | GPIO or UART (Reserved) (STM32L071 PA9) | TIM21_CH1, TIM2_CH3, USART2_TX, LPUART1_TX, COMP2_OUT, COMP2_INM,  ADC_IN2 | 
| 3 | UART1_RX | I/O | GPIO or UART (Reserved) (STM32L071 PA10) | TIM21_CH2, TIM2_ CH4, USART2_RX, LPUART1_RX, COMP2_INP, ADC_IN3 | 
| 4 | GND | - | Ground | - | 
| 5 | MCU_NRST | I/O | MCU reset (STM32L071 NRST) | - | 
| 6 | SPI_CLK | I/O | Reserved PA5 | Internal connection to **SX1276 SPI_CLK** | 
| 7 | SPI_MISO | I/O | Reserved PA6 | Internal connection to **SX1276 SPI_MISO** | 
| 8 | SPI_MISO | I/O | Reserved PA7 | Internal connection to **SX1276 SPI_MOSI** | 


## J4 Pin Definitions

| Pin | Name | I/O | Description | Alternate Functions | 
| ---- | ---- | ---- | ---- | ---- | 
| 1 | VDD | - | DC3V3 | Supply voltage 2.0~3.3V | 
| 2 | GND | - | Ground | - | 