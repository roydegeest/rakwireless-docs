## Working Requirements

### Power Requirements

The RAK2013 board operates at 5 volts. It can be powered by micro USB with 5V or powered by the Raspberry Pi board though 40-pin connector. Be cautious because the current of RAK2013 is about 300mA for average when working in CAT- M1 mode, it can be reach to 2A for peak when working in GSM900 mode. So you must carefully evaluate your power adapter’s rating.

|          Parameter          |  Min  | Typical |   Max   |
| :-------------------------: | :---: | :-----: | :-----: |
|    Current in CAT M mode    |   -   | 300 mA  |    -    |
| Current in GSM mode (peak） |   -   |    -    | 2000 mA |
|       Power off mode        |   -   |  10 mA  |    -    |

### Environmental Requirements

The table below lists the operation and storage temperature requirements:

|       Parameter       |  Min   | Typical |  Max   |
| :-------------------: | :----: | :-----: | :----: |
| Operation Temp. Range | -35 ºC | +25 ºC  | +75 ºC |
| Extended Temp. Range  | -40 ˚C |    -    | +80 ˚C |
|  Storage Temp. Range  | -40 ˚C |    -    | +80 ˚C |
