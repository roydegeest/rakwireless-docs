---
static_root: /assets/images/datasheet/rak7246g/electrical-characteristics
---

# Electrical Characteristics

In this section, different Electrical Characteristics of the RAK2246 are listed. Furthermore, details and other parameter ranges are available on request.

::: tip Note
:pencil: Stress exceeding of one or more of the limiting values
listed under “**Absolute Maximum Ratings**” may cause permanent damage to the radio
module.
:::

## Absolute Maximum Ratings

| **Parameter**         | **Condition** | **Min** | **Typ.** | **Max** | **Unit** |
| --------------------- | ------------- | ------- | -------- | ------- | -------- |
| Supply Voltage (VDD)  |               | -0.3    | 5.0      | 5.5     | V        |
| Operating Temperature |               | -10     |          | +65     | ℃        |
| RF Input Power        |               |         |          | -15     | dBm      |

::: tip Note
:pencil: With RF output power level above **+15 dBm,** a minimum distance to a transmitter should be 1m to avoid too large input level.
:::

## Global Electrical Characteristics

| **Parameter**        | **Condition** | **Min** | **Typ.** | **Max** | **Unit** |
| -------------------- | ------------- | ------- | -------- | ------- | -------- |
| Supply Voltage (VDD) |               | 4.8     | 5.0      | 5.2     | V        |
| Current Consumption  | RX Current    |         | 360      |         | mA       |
|                      | TX Current    |         | 440      |         | mA       |

**T=25°C, VDD=5V (Typ.) if nothing else stated**

| **Parameter**                    | **Condition**                | **Min** | **Typ.** | **Max** | **Unit** |
| -------------------------------- | ---------------------------- | ------- | -------- | ------- | -------- |
| Logic low input threshold (VIL)  | “0” logic input              |         |          | 0.4     | V        |
| Logic high input threshold (VIH) | “1” logic input              | 2.9     |          | 3.3     | V        |
| Logic low output level (VOL)     | “0” logic output, 2mA sink   |         |          | 0.4     | V        |
| Logic high output level (VOH)    | “1” logic output, 2mA source | 2.9     |          | 3.3     | V        |
