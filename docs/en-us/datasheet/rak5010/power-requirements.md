## Power Requirements

The RAK5010 tracker board can be powered by a battery, connected to the P2. The nominal operational voltage of the battery should be within the range in the table:

|  Min  | Type  |  Max  | Unit  |
| :---: | :---: | :---: | :---: |
|  3.3  |  3.7  |  4.3  |   V   |


If a rechargeable battery is used, the USB connector is used as a charging port. The voltage and current fed to the battery through the port should not exceed the ones in the table below.

|    Parameter     |   Value   |
| :--------------: | :-------: |
| Charging Voltage | 4.5-5.5 V |
| Charging Current |  500 mA   |


A suitable Li-Ion battery would have the following parameters:

|     Parameter     |    Value    |
| :---------------: | :---------: |
| Standard Voltage  |    3.7 V    |
| Charging Voltage  |    4.2 V    |
|     Capacity      | As required |
| Discharge Current |     2A      |

:::tip 📝 NOTE
If a non-rechargeable battery is connected to the RAK5010, please never power USB port, it will damage the battery, might damage the board and is considered a fire hazard.
:::

_A 5V Solar panel can be connected to the board via the P1 connector to serve for the purpose of charging the battery._

<rk-img
  src="/assets/images/datasheet/rak5010/battery-charging-via-solar-panel.jpg"
  width="75%"
  figure-number="13"
  caption="Battery Charging via Solar Panel"
/>

