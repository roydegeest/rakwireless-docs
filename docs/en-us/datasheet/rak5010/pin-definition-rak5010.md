---
next: interfaces-rak5010
---

# Pin Definition

There are two connectors on the board:

## P1

**Solar panel interface**

|Pin|Pin Name|Description| 
|:----:|:----:|:----:| 
| 1 | C0NN\_5V | Positive of Solar Panel | 
| 2 | GND | GND | 

:::tip Note:
:pencil: The output of the solar panel cannot exceed 5.5V, otherwise it may cause permanent damage to the board.
:::

## P2

**Li-ion battery connector**

|Pin|Pin Name|Description| 
|:----:|:----:|:----:| 
| 1 | GND | GND | 
| 2 | VBAT | Positive of the Battery | 


## J9

J9 is J-LINK connector, with J-LINK debugger, you can program and debug nRF52840.

|Pin|Pin Name|Description| 
| :----: | :----: | :----: | 
| 1 | VDD | 1.8V default. Reference voltage for J-LINK, note 1 | 
| 2 | SWDIO | SWD data signal(3.3V tolerant) | 
| 3 | SWDCLK | SWD clock signal(3.3V tolerant) | 
| 4 | GND | GND | 

:::tip Note:
:pencil: VDD of J9 should\nconnect to the PIN1 of SEGGER J-LINK (See Figure Below) debugger for SWDIO\/SWDCLK\u2019s\nreference voltage. If this pin is not connect correctly, the J-LINK\u2019 logic\nlevel may not set to VDD of nrf52840, it may damage the nrf52840.
:::


Below is the definition of 20PIN segger J-LINK connector:

<rk-img
  src="/assets/images/datasheet/rak5010/j-link-pinout.png"
  width="100%"
  figure-number="1"
  caption="J-LINK Pinout"
/>

| Pin | Signal | Type | Description | 
| :----: | :----: | :----: | :----: | 
| 1 | VTref | Input | This is the target reference voltage. It is used to check if the target has power, to create the logic-level reference for the input comparators and to control the output logic levels to the target. It is normally fed from VDD of the target board and must not have a series resistor | 


## J10 and J12

J10 and J12 are IO extension headers. Those are bridged from the nRF52840 IOs, through logical level shift circuits. Thus, the IOs level is set by the VREF pin. The function of these IOs is configurable. They can work as UART, I2C ，general GPIO or AD.

- Definition of J10:

| Pin | Pin Name | Description | 
| :----: | :----: | :----: | 
| 1 | GND | GND | 
| 2 | VBAT | Connected to the Battery | 
| 3 | AIN | Configurable IO, connected to AIN3 (P0.05) on nRF52840. If used as AD, the input range is configurable, please refer to the manual of nrf52840, if used as general IO, the logic level is 1.8V and there no level shift on it. | 
| 4 | NRF\_IO1 | Configurable IO, connected to P0.19 on the nRF52840. There is a level shift circuit between this pin and the nRF52840 | 


- Definition of J12:

|Pin|Pin Name|Description| 
| :----: | :----: | :----: | 
| 1 | EXT\_VREF | Reference level for the IO extensions | 
| 2 | NRF\_IO2 | Configurable IO, connect to P0.20 on the nRF52840. There is a level shift circuit between this pin and the nRF52840 | 
| 3 | NRF\_IO3 | Configurable IO, connect to P1.02 on the nRF52840. There is a level shift circuit between this pin and the nRF52840 | 
| 4 | NRF\_IO4 | Configurable IO, connect to P1.01 on the nRF52840. There is a level shift circuit between this pin and the nRF52840 | 


The logic level shift circuit on the RAK5010 board connects EXT_VREF to your extension board’s power and equalizes it to the logical level of the IO on your extension board.


<rk-img
  src="/assets/images/datasheet/rak5010/typical-converter-circuitry.jpg"
  width="100%"
  figure-number="2"
  caption="Typical Converter Circuitry"
/>