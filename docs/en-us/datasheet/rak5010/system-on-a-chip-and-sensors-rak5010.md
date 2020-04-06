---
next: mechanical-dimensions-rak5010
---

# System on a Chip (SoCs) and Sensors

This section provides detail specifications about the different module present in the RAK5010 device.

## 1. BG96

### 1.1 Frequency Bands

|LTE Bands|GSM|Rx-Diversity|GNSS|
|:---:|:---:|:---:|:---:|
|**Cat M1 & NB1**:|-|-|-|
|LTE-FDD: B1/B2/B3/B4/ B5/B8/B12/B13/B18/ B19/B20/B26/B28|GSM850/GSM900|Not Supported|GPS, GLONASS, BeiDou/ Compass, Galileo, QZSS|

### 1.2 Key Feature of BG96 Module

|Feature|Details|
|:---:|---|
|**Power Supply**|Supply Voltage: 3.3V – 4.3V Typical supply voltage: 3.8V|
|**Transmitting Power**|Class: 3 (23dBm±2dB) for LTE-FDD bands Class: 3 (23dBm±2dB) for LTE-TDD bands Class: 4 (33dBm±2dB) for GSM850 Class: 4 (33dBm±2dB) for GSM900 Class: 1 (30dBm±2dB) for DCS1800 Class: 1 (30dBm±2dB) for PCS1900 Class: E2 (27dBm±3dB) for GSM850 8-PSK Class: E2 (27dBm±3dB) for GSM900 8-PSK Class: E2 (26dBm±3dB) for DCS1800 8-PSK Class: E2 (26dBm±3dB) for PCS1900 8-PSK|
|**LTE Features**|Supports LTE Cat M1 and LTE Cat NB1 Supports 1.4MHz RF bandwidth for LTE Cat M1 Supports 200KHz RF bandwidth for LTE Cat NB1 Supports SISO in the DL direction Cat M1: Max. 300Kbps (DL)/375Kbps (UL) Cat NB1: Max. 32Kbps (DL)/70Kbps (UL)|
|**GSM Features**|**GPRS**: Supports GPRS multi-slot class 33 (33 by default) Coding scheme: CS-1, CS-2, CS-3, and CS-4 Max. 107Kbps (DL), Max. 85.6Kbps (UL) EDGE: Supports Edge multi-slot class 33 (33 by default) Supports GMSK and 8-PSK for different MCS Downlink Coding Schemes: CS 1-4 and MCS 1-9 Uplink Coding Schemes: CS 1-4 and MCS 1-9 Max. 296Kbps (DL), 236.8Kbps (UL)|

# nRF52840 Module

|Parameter|Detail|
|:---:|:---:|
|CPU|ARM® Cortex®-M4 32-bit processor with FPU, 64 MHz|
|Flash|1 MB|
|RAM|256 KB|
|BLE Protocol|BLE 5.0|
|BLE Tx Power|8 dBm max|
|BLE Rx Sensitivity|95 dBm @ 1 Mbps BLE mode|
|BLE Data Rate|2 Mbps, 1 Mbps, 500 Kbps,125 Kbps|
|Current Consumption|4.8mA in Tx, 4.6mA in Rx and 1.5uA in Sleep Mode|

## Humidity and Temperature Sensors

The Temperature and Humidity Sensor is an SHTC3 from Sensirion.

### 3.1 Temperature

|Parameter|Conditions|Value|Units|
|:---:|:---:|:---:|:---:|
|Accuracy|Typ|±2.0|°C|
|Tolerance|Max|See _**Figure 2**_|°C|
|Repeatability|-|0.1|°C|
|Resolution|-|0.01|°C|
|Specified Range|-|-40 to +125|°C|
|Response Time|τ 63%|<5 to 30|s|
|Long-term Drift|Typ.|<0.2|°C/y|

### 3.2 Humidity

|Parameter|Conditions|Value|Units|
|:---:|:---:|:---:|:---:|
|Accuracy|Typ|±2.0|%RH|
|Tolerance|Max|See _**Figure 2**_|%RH|
|Repeatability|-|0.1|%RH|
|Resolution|-|0.01|%RH|
|Hysteresis|-|±1|%RH|
|Specified Range|Extended|0 to 100|%RH|
|Response Time|τ 63%|8|s|
|Long-term Drift|Typ.|<0.25|%RH/y|

## 4. Pressure Sensor

The Pressure Sensor is an LPS22HB from ST:

|Symbol|Parameter|Test Condition|Min|Typ|Max|Unit|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|PTop|Operating Temperature Range|-|-40|-|+85|°C|
|PTfull|Full Accuracy Temperature Range|-|0|-|+65|°C|
|Pop|Operating Pressure Range|-|260|-|1260|hPa|
|Pbits|Pressure Output Data|-|-|24|-|bitsbits|
|Psens|Pressure Sensitivity|-|-|4096|-|LSB/hPa|
|PAccRel|Relative Accuracy over Pressure|• P=800–1100 hPa <br>• T = 25°C|-|±0.1|-|hPa|
|PAccT|Absolute Accuracy|• **After OPC** Pop=0 to 65°C <br>• **No OPC** Pop=0 to 65°C |-|±0.1 <br>±1|-|hPa|
|Pnoise|RMS Pressure Sensing Noise|with embedded filtering|-|0.0075|-|	hPa RMS|
|ODRPres|Pressure Output Data Rate|-|-|1/10/25/50/75|-|Hz|

## 5. 3-Axis Motion Sensor


|Symbol|Parameter|Test Condition|Min.|Typ.|Max.|Unit|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|FS|Measurement Range|FS bit set to 00||±2.0||g|
|||FS bit set to 01||±4.0||g|
|||FS bit set to 10||±8.0||g|
|||FS bit set to 11||±16.0||g|
|So|Sensitivity|FS bit set to 00; High-resolution mode||1||mg/digit|
|||FS bit set to 00; Normal mode||4||mg/digit|
|||FS bit set to 00; Low Power mode||16||mg/digit|
|||FS bit set to 01; High-resolution mode||2||mg/digit|
|||FS bit set to 01; Normal mode||8||mg/digit|
|||FS bit set to 01; Low-power mode||32||mg/digit|
|||FS bit set to 10; High-resolution mode||4||mg/digit|
|||FS bit set to 10; Normal mode||16||mg/digit|
|||FS bit set to 10; Low-power mode||64||mg/digit|
|||FS bit set to 11; High-resolution mode||12||mg/digit|
|||FS bit set to 11; Normal mode||48||mg/digit|
|||FS bit set to 11; Low-power mode||192||mg/digit|


## Ambient Light Sensor

The Ambient Light Sensor is an OPT3001 from TI:

|Parameter|Test Condition|Min.|Typ.|Max.|Unit|
|---|---|---|---|---|---|
|Peak irradiance spectral responsibility|-|-|550|-|nm|
|Resolution (LSB)|Lowest full-scale range, RN[3:0] = 0000b|-|0.01|-|lux|
|Full-scale illuminance|-|-|83865.6|-|-|
|Measurement output result|0.64 lux per ADC code, 2620.90 lux full-scale (RN[3:0] = 0110) , 2000 lux input|2812 <br> 1800|3125 <br> 2000|3437 <br> 2200|ADC lux|
|Relative accuracy between gain ranges|-|-|0.2%|-|-|
|Infrared response (850 nm)|-|-|0.2%|-|-|
|Light source variation (incandescent, halogen, fluorescent)|Bare device, no cover glass|-|4%|-|-|
|Linearity|Input luminance > 40 lux <br> Input luminance < 40 lux|-|2%|-|-|
|Measured drift across temperature|Input luminance = 2000 lux|-|5%|-|%/ °C|
|Dark condition, ADC output|0.01 lux per ADC code|-|0 <br> 0|3 <br> 0.03|lux|
|Half-power angle|50% of full-power reading|-|47|-|degrees|




