## Interfaces

<rk-img
  src="/assets/images/datasheet/rak7431/rak7431-bottom.jpg"
  width="75%"
  figure-number="5"
  caption="RAK7431 bottom panel"
/>

### Power Supply and Configuration Interface

RAK7431 can be powered by its DC terminal or via its Micro USB port. The DC terminal accepts 8-48V DC input, and the rated power of the device is 1W. Pay attention to the positive and negative pole directions when crimping the terminal. Vin is connected to the positive pole of the power supply, and GND is connected to the negative pole of the power supply.

The Micro USB port can also be used for powering the device (5V / 500mA DC). At the same time, the Micro USB port can be used as the configuration interface of the device. 

Connect it to a PC and use the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip) to open a COM port. The default baud rate is 115200. There is a standard set of AT
commands that can be used to configure the RAK7431.

### Data Interface

When connecting to RS485 nodes, please connect 485A and 485B on the data interface of RAK7431 with the A and B lines of the RS485 bus. Connect the GND terminal to the GN line of the RS485 devices The RS485 bus carrying capacity of RAK7431 goes up to 16 RS485 terminals at the same time.

The Vout on the data interface can supply power to the RS485 terminals 

:::warning ⚠️ WARNING
Only valid when using the DC input interface power supply, USB power supply is invalid.
:::

Also, the Vout output voltage is the same as DC input voltage Vin.

<rk-img
  src="/assets/images/datasheet/rak7431/rak7431-modbus.jpg"
  width="75%"
  figure-number="6"
  caption="RAK7431 ModBus connection diagram"
/>

### Reset key and indicator LED

| Reset Key | Press the reset key shortly to restart the system                  |
| --------- | ------------------------------------------------------------------ |
| 🔴 Red LED   | Power indicator (Only valid when using the USB power)              |
| 🟢 Green LED | System working indicator, flashing when there is data transmission |


