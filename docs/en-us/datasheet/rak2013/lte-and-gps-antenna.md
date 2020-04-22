## LTE and GPS Antenna

For module built-in BG96, there is one LTE antenna and one GPS antenna. For module built-in EG91/EG95, there are two LTE antennas, and no GPS antenna with the module.

### 1. LTE Antenna

### Overview

<rk-img
  src="/assets/images/datasheet/rak2013/lte-antenna.jpg"
  width="50%"
  figure-number="1"
  caption="LTE Antenna"
/>

### Antenna Dimension

The LTE antenna for the RAK2013 covers working frequency band from **824 MHz to 2690 MHz**. 

<rk-img
  src="/assets/images/datasheet/rak2013/lte-antenna-dimension.jpg"
  width="75%"
  figure-number="2"
  caption="LTE Antenna Dimension"
/>

### Antenna Parameter

The specifications and parameter of the antenna are shown below:

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th colspan ="7">Specifications</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Frequency (MHz)</td>
            <td>700</td>
            <td>800</td>
            <td>880</td>
            <td>960</td>
            <td>1710</td>
            <td>1880</td>
            <td>2170</td>
        </tr>
        <tr>
            <td>Voltage Standard Wave Radio (VSWR)</td>
            <td>9.3</td>
            <td>4.6</td>
            <td>3.6</td>
            <td>4.9</td>
            <td>9.3</td>
            <td>4.4</td>
            <td>15</td>
        </tr>
         <tr>
            <td>Gain(dBi)</td>
            <td>1.63</td>
            <td>1.84</td>
            <td>1.96</td>
            <td>2.23</td>
            <td>0.03</td>
            <td>0.01</td>
            <td>1.97</td>
        </tr>
        <tr>
            <td>Working Temperature & Humidity</td>
            <td colspan="7">T: -35°C ~ +80°C, H: 0% ~ 95%</td>
        </tr>
          <tr>
            <td>Storage Temperature & Humidity</td>
            <td colspan="7">T: -40°C ~ +85°C, H: 0% ~ 95%</td>
        </tr>
    </tbody>
</table>

### 1. GPS Antenna

### Overview
The GPS antenna for RAK2013 is shown below. Only the RAK2013 with BG96 supports the GPS function.

<rk-img
  src="/assets/images/datasheet/rak2013/gps-antenna.jpg"
  width="50%"
  figure-number="3"
  caption="GPS Antenna"
/>

### GPS Antenna Dimensions

<rk-img
  src="/assets/images/datasheet/rak2013/gps-antenna-dimensions.jpg"
  width="75%"
  figure-number="4"
  caption="GPS Antenna Dimensions"
/>

### GPS Environmental Requirements

The antenna environmental requirements are listed in the table below:

| Conditions |   Temperature   | Humidity |
| :--------: | :-------------: | :------: |
|  Working   | -35 ºC ~ +80 ºC | 0% ~ 95% |
|  Storage   | -40 ºC ~ +85 ºC | 0% ~ 95% |

### GPS Antenna Parameter

The antenna specifications are listed in the table below:

| Item                                       |     Specification     |  PET  |
| ------------------------------------------ | :-------------------: | :---: |
| Range of Receiving Frequency               |      1575.42±1.1      | ±2.5  |
| Center Frequency (MHz) w/ 30mm2 GND plane  |        1575.42        | ±3.0  |
| Bandwidth (MHz) (Return Loss ≤ -10dB)      |          ≥10          | ±0.5  |
| VSWR (in Center Frequency)                 |         ≤2.0          | ±0.5  |
| Gain (Zenith) (dBi Typ) w/ 70mm2 GND Plane |          4.5          | ±0.5  |
| Axial Ratio (dB) w/ 70mm2 GND Plane        |          3.0          | ±0.2  |
| Polarization                               | Right-Handed Circular |   -   |
| Impedance (Ω)                              |          50           |   -   |
| Frequency Temperature Coefficient (ppm/ºC) |          ±10          |   -   |

The amplifier specifications are listed in the table below:

|       Item        | Specifications |
| :---------------: | :------------: |
|  Frequency Range  |  1575.42 MHz   |
|       Gain        |     27 dB      |
|       VSWR        |    ≤ 2.0 V     |
| Noise Coefficient |   ≤ 2.0 dBm    |
|    DC Voltage     |    3 ~ 5 V     |
|    DC Current     |    5 ± 2 mA    |

The environmental test performance specifications are listed below:

|       Item        | Normal Temp |  High Temp  |  Low Temp   |
| :---------------: | :---------: | :---------: | :---------: |
|  Amplifier Gain   | 27 dB ± 2.0 | 27 dB ± 2.0 | 27 dB ± 2.0 |
|       VSWR        |    ≤ 2.0    |    ≤ 2.0    |    ≤ 2.0    |
| Noise Coefficient |    ≤ 2.0    |    ≤ 2.0    |    ≤ 2.0    |