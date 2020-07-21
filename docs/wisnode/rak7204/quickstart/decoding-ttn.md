---
static_root: /assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/
previous: /wisnode/rak7204/quickstart/connecting-to-chirpstack/chirpstack-abp.html
next: /wisnode/rak7204/quickstart/lora-p2p-mode.html
---
# Decoding Sensor Data on ChirpStack and TTN

## Analyzing Sensor Data from RAK7204
In the previous section, we have successfully sent some raw data from our RAK7204 LPWAN Tracker to The Things Network, but the problem is that you can't really see the actual sensor data from the payload. In this section , we will solve that and understand what each payload means.

Let's take this data for example:

<rk-img
  :src="`${$frontmatter.static_root}/ezfqysepeiwg0ufmxneo.jpg`"
  width="100%"
  figure-number="1"
  caption="Received Raw Data in TTN"
/>

<rk-img
  :src="`${$frontmatter.static_root}/w4zrtlqhhmqewdwntd3d.jpg`"
  width="100%"
  figure-number="2"
  caption="Actual Data sent to Cayenne"
/>

For this example, the payload is : **08 02 01 63 07 68 4B 06 73 25 9E 02 67 01 15 04 02 22 72 04 02 22 72**

Now lets analyze each data , which is in Hexadecimal Format. We will be using the data mentioned above as an example. We will convert the Hexadecimal Data into Decimal Data using this [converter](https://www.rapidtables.com/convert/number/hex-to-decimal.html?x=FF) in order to be able to understand it.

<rk-img
  :src="`${$frontmatter.static_root}/rxvyqkcqn6tqayqijhyi.jpg`"
  width="50%"
  figure-number="3"
  caption="Hexadecimal to Decimal converter"
/>

### 1. Battery Voltage
| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 08 02 |  |  |  | 
| Battery Voltage | 01 67 | 355 | 0.01 Signed | 3.55 V | 

### 2. Humidity Data

Example Data: **07 68 4B**

| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 07 68 |  |  |  | 
| Humidity | 4B | 75 | 0.5 % Unsigned | 37.5 % RH | 


### 3. Pressure Data

Example Data: **06 73 25 9E**

| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 06 73 |  |  |  | 
| Pressure | 25 9E | 9630 | 0.1 hPa Unsigned MSB | 963.0 hPa | 


### 4. Temperature Data

Example Data:  **02 67 01 15**

| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 02 67 |  |  |  | 
| Temperature | 01 15 | 277 | 0.1 °C Signed MSB | 27.7℃ | 


### 5. Gas Resistance Data

Example Data: **04 02 22 72**

| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 04 02 |  |  |  | 
| Gas Resistance | 22 72 | 8818 | 0.01 kΩ Signed | 88.18 kΩ | 


For further details about the LPP format, you can take a look at this**[ link.](https://developers.mydevices.com/cayenne/docs/lora/#lora-cayenne-low-power-payload-overview)**

## Decoding Sensor Data in TTN

### Input Decoding Function in TTN

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_TTN.js)**.

::: details Click me to view the code

```js
// ttn application function to decode uplink data.
// Decode decodes an array of bytes into an object.
//  - port contains the LoRaWAN fPort number
//  - bytes is an array of bytes, e.g. [225, 230, 255, 0]
// The function must return an object
// for RAK, return {
//                     "DecodeDataHex": {} // RAK5205 sensor data in Hex format
//                     "DecodeDataObj": {} // RAK5205 sensor data object.
//                 }
// The function prototype cannot be modified.
function Decoder(bytes, port) {
  var decoded = {"DecodeDataHex": {}, "DecodeDataObj": {}};
  var hexString=bin2HexStr(bytes);
  decoded.DecodeDataHex = hexString;
  decoded.DecodeDataObj = rakSensorDataDecode(hexString);

  return decoded;
}

// convert array of bytes to hex string.
// e.g: 0188053797109D5900DC140802017A0768580673256D0267011D040214AF0371FFFFFFDDFC2E
function bin2HexStr(bytesArr) {
  var str = "";
  for(var i=0; i<bytesArr.length; i++) {
    var tmp = (bytesArr[i] & 0xff).toString(16);
    if(tmp.length == 1) {
      tmp = "0" + tmp;
    }
    str += tmp;
  }
  return str;
}

// convert string to short integer
function parseShort(str, base) {
  var n = parseInt(str, base);
  return (n << 16) >> 16;
}

// convert string to triple bytes integer
function parseTriple(str, base) {
  var n = parseInt(str, base);
  return (n << 8) >> 8;
}

// decode Hex sensor string data to object
function rakSensorDataDecode(hexStr) {
  var str = hexStr;
  var myObj = {};
  var environment = {};
  var magnetometer = {};

  while (str.length > 4) {
    var flag = parseInt(str.substring(0, 4), 16);
    switch (flag) {
      case 0x0768:// Humidity
        environment.humidity = ((parseShort(str.substring(4, 6), 16) * 0.01 / 2) * 100).toFixed(1) + '% RH';
        str = str.substring(6);
        break;
      case 0x0673:// Atmospheric pressure
        environment.barometer = (parseShort(str.substring(4, 8), 16) * 0.1).toFixed(2) + "hPa";
        str = str.substring(8);
        break;
      case 0x0267:// Temperature
        environment.temperature = (parseShort(str.substring(4, 8), 16) * 0.1).toFixed(2) + "°C";
        str = str.substring(8);
        break;
      case 0x0188:// GPS
        var gps = {};
        gps.latitude = (parseTriple(str.substring(4, 10), 16) * 0.0001).toFixed(4) + "°";
        gps.longitude = (parseTriple(str.substring(10, 16), 16) * 0.0001).toFixed(4) + "°";
        gps.altitude = (parseTriple(str.substring(16, 22), 16) * 0.01).toFixed(1) + "m";
        myObj.gps = gps;
        str = str.substring(22);
        break;
      case 0x0371:// Triaxial acceleration
        var acceleration = {};
        acceleration.x = (parseShort(str.substring(4, 8), 16) * 0.001).toFixed(3) + "g";
        acceleration.y = (parseShort(str.substring(8, 12), 16) * 0.001).toFixed(3) + "g";
        acceleration.z = (parseShort(str.substring(12, 16), 16) * 0.001).toFixed(3) + "g";
        myObj.acceleration = acceleration;
        str = str.substring(16);
        break;
      case 0x0402:// air resistance
        environment.gasResistance = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2)  + "KΩ";
        str = str.substring(8);
        break;
      case 0x0802:// Battery Voltage
        myObj.battery = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "V";
        str = str.substring(8);
        break;
      case 0x0586:// gyroscope
        var gyroscope = {};
        gyroscope.x = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "°/s";
        gyroscope.y = (parseShort(str.substring(8, 12), 16) * 0.01).toFixed(2) + "°/s";
        gyroscope.z = (parseShort(str.substring(12, 16), 16) * 0.01).toFixed(2) + "°/s";
        myObj.gyroscope = gyroscope;
        str = str.substring(16);
        break;
      case 0x0902:// magnetometer x
        magnetometer.x = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      case 0x0a02:// magnetometer y
        magnetometer.y = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      case 0x0b02:// magnetometer z
        magnetometer.z = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      default:
        str = str.substring(7);
        break;
    }
  }
  if(Object.getOwnPropertyNames(environment).length > 0) {
    myObj.environment = environment;
  }
  if(Object.getOwnPropertyNames(magnetometer).length > 0) {
    myObj.magnetometer = magnetometer;
  }

  return myObj;
}
```
:::
<rk-img
  :src="`${$frontmatter.static_root}/mj2ln3bm2so2fkpzntxt.png`"
  width="100%"
  figure-number="4"
  caption="Github Page for the Decoding Function"
/>

2. From your TTN console, go to application page and click the "**Payload Formats**" tab as shown in the image below.
<rk-img
  :src="`${$frontmatter.static_root}/qmpbcubp9g1hiqncdsnx.jpg`"
  width="100%"
  figure-number="5"
  caption="Payload Format at TTN Application Page"
/>

3. Next, select "**Payload Format**" as "**Custom**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.
<rk-img
  :src="`${$frontmatter.static_root}/gk4wflbvc74a8bam946s.jpg`"
  width="100%"
  figure-number="6"
  caption="Decoder Function"
/>

### Testing the Validity of Decoding Sensor Data in TTN

1. Input the data below in the "**Payload**" box as shown in the image below.

**08 02 01 63 07 68 4B 06 73 25 9E 02 67 01 15 04 02 22 72 04 02 22 72**
<rk-img
  :src="`${$frontmatter.static_root}/yqoerimlyt5zz2qkbbv8.jpg`"
  width="100%"
  figure-number="7"
  caption="Testing Payload Data"
/>

2. Then, click "**Test**" and it will generate a code with the decoded data as shown in the image above.

### Testing in Real System in TTN

After gateway and node go online, click the uplink data record from the application data tab to check the decode status. From the image below, we can see the data decoded successfully in TTN.

<rk-img
  :src="`${$frontmatter.static_root}/ao96e3gsctjbrzxvue3a.jpg`"
  width="100%"
  figure-number="8"
  caption="Uplink Decoded Data"
/>


## Decoding Sensor Data in ChirpStack

### Input Decoding Function in ChirpStack

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_ChirpStack.js)**.

::: details Click me to view the code
```js
// chirpstack application function to decode uplink data.
// Decode decodes an array of bytes into an object.
//  - fPort contains the LoRaWAN fPort number
//  - bytes is an array of bytes, e.g. [225, 230, 255, 0]
// The function must return an object
// for RAK, return {
//                     "DecodeDataHex": {} // RAK5205 sensor data in Hex format
//                     "DecodeDataObj": {} // RAK5205 sensor data object.
//                 }
// The function prototype cannot be modified.
function Decode(fPort, bytes) {
  var decoded = {"DecodeDataHex": {}, "DecodeDataObj": {}};
  var hexString=bin2HexStr(bytes);
  decoded.DecodeDataHex = hexString;
  decoded.DecodeDataObj = rakSensorDataDecode(hexString);

  return decoded;
}

// convert array of bytes to hex string.
// e.g: 0188053797109D5900DC140802017A0768580673256D0267011D040214AF0371FFFFFFDDFC2E
function bin2HexStr(bytesArr) {
  var str = "";
  for(var i=0; i<bytesArr.length; i++) {
    var tmp = (bytesArr[i] & 0xff).toString(16);
    if(tmp.length == 1) {
      tmp = "0" + tmp;
    }
    str += tmp;
  }
  return str;
}

// convert string to short integer
function parseShort(str, base) {
  var n = parseInt(str, base);
  return (n << 16) >> 16;
}

// convert string to triple bytes integer
function parseTriple(str, base) {
  var n = parseInt(str, base);
  return (n << 8) >> 8;
}

// decode Hex sensor string data to object
function rakSensorDataDecode(hexStr) {
  var str = hexStr;
  var myObj = {};
  var environment = {};
  var magnetometer = {};

  while (str.length > 4) {
    var flag = parseInt(str.substring(0, 4), 16);
    switch (flag) {
      case 0x0768:// Humidity
        environment.humidity = ((parseShort(str.substring(4, 6), 16) * 0.01 / 2) * 100).toFixed(1) + '% RH';
        str = str.substring(6);
        break;
      case 0x0673:// Atmospheric pressure
        environment.barometer = (parseShort(str.substring(4, 8), 16) * 0.1).toFixed(2) + "hPa";
        str = str.substring(8);
        break;
      case 0x0267:// Temperature
        environment.temperature = (parseShort(str.substring(4, 8), 16) * 0.1).toFixed(2) + "°C";
        str = str.substring(8);
        break;
      case 0x0188:// GPS
        var gps = {};
        gps.latitude = (parseTriple(str.substring(4, 10), 16) * 0.0001).toFixed(4) + "°";
        gps.longitude = (parseTriple(str.substring(10, 16), 16) * 0.0001).toFixed(4) + "°";
        gps.altitude = (parseTriple(str.substring(16, 22), 16) * 0.01).toFixed(1) + "m";
        myObj.gps = gps;
        str = str.substring(22);
        break;
      case 0x0371:// Triaxial acceleration
        var acceleration = {};
        acceleration.x = (parseShort(str.substring(4, 8), 16) * 0.001).toFixed(3) + "g";
        acceleration.y = (parseShort(str.substring(8, 12), 16) * 0.001).toFixed(3) + "g";
        acceleration.z = (parseShort(str.substring(12, 16), 16) * 0.001).toFixed(3) + "g";
        myObj.acceleration = acceleration;
        str = str.substring(16);
        break;
      case 0x0402:// air resistance
        environment.gasResistance = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2)  + "KΩ";
        str = str.substring(8);
        break;
      case 0x0802:// Battery Voltage
        myObj.battery = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "V";
        str = str.substring(8);
        break;
      case 0x0586:// gyroscope
        var gyroscope = {};
        gyroscope.x = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "°/s";
        gyroscope.y = (parseShort(str.substring(8, 12), 16) * 0.01).toFixed(2) + "°/s";
        gyroscope.z = (parseShort(str.substring(12, 16), 16) * 0.01).toFixed(2) + "°/s";
        myObj.gyroscope = gyroscope;
        str = str.substring(16);
        break;
      case 0x0902:// magnetometer x
        magnetometer.x = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      case 0x0a02:// magnetometer y
        magnetometer.y = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      case 0x0b02:// magnetometer z
        magnetometer.z = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      default:
        str = str.substring(7);
        break;
    }
  }
  if(Object.getOwnPropertyNames(environment).length > 0) {
    myObj.environment = environment;
  }
  if(Object.getOwnPropertyNames(magnetometer).length > 0) {
    myObj.magnetometer = magnetometer;
  }
  return myObj;
}

```

:::
2. From to your ChirpStack, go to application page and click the "**APPLICATION CONFIGURATION**" tab as shown in the image below.

<rk-img
  :src="`${$frontmatter.static_root}/klrcxtorpusmjb9who1t.jpg`"
  width="100%"
  figure-number="9"
  caption="Application Configuration Tab"
/>

3. Next, select "**Payload codec**" as "**Custom JavaScript codec functions**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.

<rk-img
  :src="`${$frontmatter.static_root}/iea9w4hz2mdgzmzadjnd.jpg`"
  width="100%"
  figure-number="10"
  caption="Decoded Function in Chirpstack"
/>

4. Then, click ‘**UPDATE APPLICATION**’ button to save decoding function.

### Testing in Real System in ChirpStack

After gateway and node go online, click the uplink data record from the application data at "**LIVE DEVICE DATA**" tab to check the decode status. From the image below, we can see the data decoded successfully in ChirpStack.

<rk-img
  :src="`${$frontmatter.static_root}/vva4otkahxoguyktqljd.jpg`"
  width="100%"
  figure-number="11"
  caption="Decode Status in ChirpStack"
/>