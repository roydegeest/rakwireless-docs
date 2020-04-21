---
static_root: /assets/images/datasheet/rak2287/electrical-characteristics
---

# Electrical Characteristics

Stressing the device above one or more of the ratings listed in the Absolute Maximum Rating section may cause permanent damage. These are stress ratings only. Operating the module at these or at any conditions other than those specified in the Operating Conditions sections of the specification should be avoided. Exposure to Absolute Maximum Rating conditions for extended periods may affect device reliability.

The operating condition range define those limit within which the functionality of the device is guaranteed.Where application information is given, it is advisory only and does not form part of the specification.

## Absolute Maximum Rating

Limiting values given below are in accordance with the Absolute Maximum Rating System (IEC 134).

| **Symbol** | **Description**       | **Condition**                              | **Min.** | **Max.**  |
| ---------- | --------------------- | ------------------------------------------ | -------- | --------- |
| 3.3Vaux    | Module supply voltage | Input DC voltage at 3.3Vaux pins           | -0.3V    | 3.6V      |
| USB        | USB D+/D- pins        | Input DC voltage at USB interface pins     |          | 3.6V      |
| RESET      | RAK2247 reset input   | Input DC voltage at RESET input pin        | -0.3V    | 3.6V      |
| SPI        | SPI interface         | Input DC voltage at SPI interface pin      | -0.3V    | 3.6V      |
| GPS_PPS    | GPS 1 pps input       | Input DC voltage at GPS_PPS input pin      | -0.3V    | 3.6V      |
| Rho_ANT    | Antenna ruggedness    | Output RF load mismatch ruggedness at ANT1 |          | 10:1 VSWR |
| Tstg       | Storage Temperature   |                                            | -40°C    | 85°C      |

::: warning ⚠️ WARNING
The product is not protected against overvoltage or reversed voltages. If necessary, voltage spikes exceeding the power supply voltage specification, given in table above, must be limited to values within the specified boundaries by using appropriate protection devices.
:::

## Maximum ESD

The table below lists the maximum ESD.

| **Parameter**                          | **Min** | **Typical** | **Max** | **Remarks**                                  |
| -------------------------------------- | ------- | ----------- | ------- | -------------------------------------------- |
| ESD_HBM |         |             | 1000V   | Charged Device Model JESD22-C101 CLASS III    |
| ESD_CDM |         |             | 1000V   | Charged Device Model JESD22-C101 CLASS III    |


::: tip 📝 NOTE
Although this module is designed to be as robust as possible, electrostatic discharge (ESD) can damage this module. This module must be protected at all times from ESD when handling or transporting. Static charges may easily produce potentials of several kilovolts on the human body or equipment, which can discharge without detection. Industry-standard ESD handling precautions should be used at all times.
:::

## Operating Temperature

The table below lists the operation temperature range

| **Parameter**                | **Min**. | **Typical** | **Max**. | **Remarks**                                                                        |
| ---------------------------- | -------- | ----------- | -------- | ---------------------------------------------------------------------------------- |
| Normal operating temperature | -40°C    | +25°C       | +85°C    | Normal operating temperature range (fully functional and meet 3GPP specifications) |

::: tip 📝 NOTE
Unless otherwise indicated, all operating condition specifications are at an ambient temperature of 25°C. Operation beyond the operating conditions is not recommended and extended exposure beyond them may affect device reliability.
:::

## Power Supply Range

The table below lists the power supply range.

Input voltage at **3.3Vaux** must be above the normal operating range minimum limit to switch-on the module.

| **Symbol** | **Parameter**                           | **Min**. | **Typical** | **Max**. |
| ---------- | --------------------------------------- | -------- | ----------- | -------- |
| 3.3Vaux    | Module supply operating input voltage14 | 3 V      | 3.3 V       | 3.6 V    |

## Power Consumption

| **Mode**         | **Condition**                                             | **Min.** | **Typical** | **Max.** |
| ---------------- | --------------------------------------------------------- | -------- | ----------- | -------- |
| Active-Mode(TX)  | The power of TX channel is 27dBm and 3.3V supply.         |  511 mA  | 512 mA      |513 mA    |
| Active-Mode(RX ) | TX disabled and RX enabled.                               |  70 mA   | 81.6 mA     |101 mA    |
