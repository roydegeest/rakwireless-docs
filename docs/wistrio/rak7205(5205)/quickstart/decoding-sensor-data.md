---
static_root: /assets/images/quick-start-guide/rak5205-7205/decoding-sensor-data
prev: /wistrio/rak7205(5205)/quickstart/connecting-to-chirpstack/chirpstack-abp-mode.html
next: /wistrio/rak7205(5205)/quickstart/cayenne-integration.html
---

# Decoding Sensor Data on ChirpStack and TTN

## Analyzing Sensor Data from RAK5205

In the previous section, we have successfully sent some raw data from our RAK5205 LPWAN Tracker to The Things Network, but the problem is that you can't really see the actual sensor data from the payload. In this section , we will solve that and understand what each payload means.

Let's take this data for example:

<rk-img
  :src="`${$frontmatter.static_root}/otdvg3shjsksxrm6bbl1.jpg`"
  width="100%"
  figure-number="1"
  caption="Sample Payload"
/>

For this example, the payload is : **01 88 05 37 97 10 9D 59 00 DC 14 08 02 01 7A 07 68 58 06 73 25 6D 02 67 01 1D 04 02 14 AF 03 71 FF FF FF DD FC 2E**

Now let's analyze each data , which is in Hexadecimal Format. We will be using the data mentioned above as an example. We will convert the Hexadecimal Data into Decimal Data using this [converter](https://www.rapidtables.com/convert/number/hex-to-decimal.html?x=FF) in order to be able to understand it.

<rk-img
  :src="`${$frontmatter.static_root}/lwg2elvxz58fwgheftzw.jpg`"
  width="50%"
  figure-number="2"
  caption="Hexadecimal to Decimal converter"
/>

### 1. GPS Data

Example Data: **01 88 05 37 97 10 9D 59 00 DC 14**

| **Parameter** | **Hex Data** | **Decimal Equivalent** | **Multiplier**      | **True Value** |
| ------------- | ------------ | ---------------------- | ------------------- | -------------- |
| **Data Flag** | 01 88        |                        |                     |                |
| **Latitude**  | 05 37 97     | 341911                 | 0.0001 ° Signed MSB | 34.1911°       |
| **Longitude** | 10 9D 59     | 1088857                | 0.0001 ° Signed MSB | 108.8857°      |
| **Altitude**  | 00 DC 14     | 56340                  | 0.01 m Signed MSB   | 563.4 m        |

### 2. Battery Voltage

Example Data: **08 02 01 7A**

| **Parameter**       | **Hex Data** | **Decimal Equivalent** | **Multiplier** | **True Value** |
| ------------------- | ------------ | ---------------------- | -------------- | -------------- |
| **Data Flag**       | 08 02        |                        |                |                |
| **Battery Voltage** | 01 7A        | 378                    | 0.01 Signed    | 3.78 V         |

### 3. Humidity

Example Data: **07 68 58**

| **Parameter** | **Hex Data** | **Decimal Equivalent** | **Multiplier** | **True Value** |
| ------------- | ------------ | ---------------------- | -------------- | -------------- |
| **Data Flag** | 07 68        |                        |                |                |
| **Humidity**  | 58           | 88                     | 0.5 % Unsigned | 44.0 % RH      |

### 4. Pressure

Example Data: **06 73 25 6D**

| **Parameter** | **Hex Data** | **Decimal Equivalent** | **Multiplier**       | **True Value** |
| ------------- | ------------ | ---------------------- | -------------------- | -------------- |
| **Data Flag** | 06 73        |                        |                      |                |
| **Pressure**  | 25 6D        | 9581                   | 0.1 hPa Unsigned MSB | 958.1 hPa      |

### 5. Temperature

Example Data: **02 67 01 1D**

| **Parameter**   | **Hex Data** | **Decimal Equivalent** | **Multiplier**    | **True Value** |
| --------------- | ------------ | ---------------------- | ----------------- | -------------- |
| **Data Flag**   | 02 67        |                        |                   |                |
| **Temperature** | 01 1D        | 285                    | 0.1 °C Signed MSB | 28.5℃          |

### 6. Gas Resistance

Example Data: **04 02 14 AF**

| **Parameter**      | **Hex Data** | **Decimal Equivalent** | **Multiplier** | **True Value** |
| ------------------ | ------------ | ---------------------- | -------------- | -------------- |
| **Data Flag**      | 04 02        |                        |                |                |
| **Gas Resistance** | 14 AF        | 5295                   | 0.01 kΩ Signed | 52.95 kΩ       |

### 7. Accelerometer

Example Data: **03 71 FF FF FF DD FC 2E**

| **Parameter**      | **Hex Data** | **Decimal Equivalent** | **Multiplier**     | **True Value** |
| ------------------ | ------------ | ---------------------- | ------------------ | -------------- |
| **Data Flag**      | 03 71        |                        |                    |                |
| **Acceleration X** | FF FF        | -1                     | 0.001 g Signed MSB | -0.001g        |
| **Acceleration Y** | FF DD        | -35                    | 0.001 g Signed MSB | -0.035g        |
| **Acceleration Z** | FC 2E        | -978                   | 0.001 g Signed MSB | -0.978g        |

## Decoding Sensor Data in TTN

### Input Decoding Function in TTN

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_TTN.js)**.

2. From your TTN console, go to application page and click the "**Payload Formats**" tab as shown in the image below.

<rk-img
  :src="`${$frontmatter.static_root}/i4xmo8ndpvbmx8i6q8tj.jpg`"
  width="100%"
  figure-number="3"
  caption="Payload Format at TTN Application Page"
/>

3. Next, select "**Payload Format**" as "**Custom**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.

<rk-img
  :src="`${$frontmatter.static_root}/ddpqx0x7rlma36ogiwc1.jpg`"
  width="85%"
  figure-number="4"
  caption="Inputting the Decoder Function"
/>

### Testing the Validity of Decoding Sensor Data in TTN

**Input** the data below in the "**Payload**" box as shown in the image below.

**01 88 05 37 97 10 9D 59 00 DC 14 08 02 01 7A 07 68 58 06 73 25 6D 02 67 01 1D 04 02 14 AF 03 71 FF FF FF DD FC 2E**

<rk-img
  :src="`${$frontmatter.static_root}/mlgmgm8lstjnnufc5q88.jpg`"
  width="100%"
  figure-number="5"
  caption="Testing Payload Data"
/>

- Then, click "**Test**" and it will generate a code with the decoded data as shown in the image above.

```json
{
  "DecodeDataHex": "0188053797109d5900dc140802017a0768580673256d0267011d040214af0371ffffffddfc2e",
  "DecodeDataObj": {
    "acceleration": {
      "x": "-0.001g",
      "y": "-0.035g",
      "z": "-0.978g"
    },
    "battery": "3.78V",
    "environment": {
      "gasResistance": "52.95kΩ",
      "humidity": "44.0% RH",
      "pressure": "958.10hPa",
      "temperature": "28.50°C"
    },
	  "gps": {
      "altitude": "563.4m",
      "latitude": "34.1911°",
      "longitude": "108.8857°"
    }
  }
}
```

Click "save payload functions" button to save the decoding function.

## Testing in Real System in TTN

After gateway and node go online, click the uplink data record from the application data tab to check the decode status. From the image below, we can see the data decoded successfully in TTN.

<rk-img
  :src="`${$frontmatter.static_root}/gncjz92kenv5h8w39bp0.jpg`"
  width="100%"
  figure-number="6"
  caption="Uplink Decoded Data"
/>

## Decoding Sensor Data in ChirpStack

### Input Decoding Function in ChirpStack

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_ChirpStack.js)**.

2. From to your ChirpStack, go to application page and click the "**APPLICATION CONFIGURATION**" tab as shown in the image below.

<rk-img
  :src="`${$frontmatter.static_root}/vs8mobszwtkfyqeodvze.jpg`"
  width="100%"
  figure-number="7"
  caption="Application Configuration Tab"
/>

3. Next, select "**Payload codec**" as "**Custom JavaScript codec functions**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.

<rk-img
  :src="`${$frontmatter.static_root}/pvjdwnmlcykwa7g4upmr.jpg`"
  width="100%"
  figure-number="8"
  caption="Decoded Function in Chirpstack"
/>

4. Then, click ‘**UPDATE APPLICATION**’ button to save decoding function.

### Testing in Real System in ChirpStack

After gateway and node go online, click the uplink data record from the application data at "**LIVE DEVICE DATA**" tab to check the decode status. From the image below, we can see the data decoded successfully in ChirpStack.

<rk-img
  :src="`${$frontmatter.static_root}/grvuetv6kt8qdtnopyuf.jpg`"
  width="100%"
  figure-number="9"
  caption="Decode Status in ChirpStack"
/>
