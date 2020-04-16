---
static_root: /assets/images/datasheet/rak4600-breakout/interfaces
---

# Interfaces

## SWD Programming Interface

When programming via a JLINK tool, it is required to have all of the following 5 pins connected to your JLINK tool:

1. **3V3**
2. **SWDIO**
3. **SWCLK**
4. **GND**
5. **MCU_NRST**

::: tip Note:
:pencil: For the aforementioned reason, it is best you leave these exposed for programming purposes and not to remap them as GPIOs
:::

## UART Port

There are two UART interfaces on RAK4600 module:

- **UART1** – recommended for debugging/firmware update
- **UART2** – recommended for external MCU connection.

## I2C interface

The following pins are intended for I2C (_require 10k resistance pull-up_):

- **I2C_SCL**
- **I2C_SDA**

## RF interface

Both are utilizing an IPEX connector, where one is for the LoRa® antenna and the other for the BLE.

NFC interface

Two physical pins can be configured either as NFC antenna pins (factory default), or as GPIOs, When configured as NFC antenna pins, the GPIOs on those pins will automatically be set to DISABLE state and a protection circuit will be enabled preventing the chip from being damaged in the presence of a strong NFC field. The protection circuit will short the two pins together if the voltage difference exceeds approximately 2V.
