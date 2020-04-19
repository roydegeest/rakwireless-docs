---
next: services
---

# LoRa® Network Server

The Gateway comes with an integrated LoRa® Networks Server. This makes the Gateway a standalone solution for the whole LoRaWAN® chain in one device, which is immensely helpful for testing purposes and provided for flexibility in deployment options. One can also opt to disable this feature and use a LoRa® Network Server hosted separately.

## 1. Status

A summary of the most important statistics is displayed on the Status page. The number of packets for all packet types plus the total number of end devices/gateways. Last but not least, the uptime.

Additionally, there are graphs for the most important KPI parameters (RSSI, SNR and DataRate), together with a Traffic History.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/lora-network-server-status.jpg"
  width="100%"
  figure-number="1"
  caption="LoRa® Network Server Status page"
/>

## 2. General

In order to use the LoRa® Server, you need to enable its protocol from the following menu: LoRaWAN® Gateway Menu -> LoRa® Packet Forwarder -> Protocol -> Built-in LoRa® Server. Now you can choose to **enable/disable** it via the slider in the General Configuration tab.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/lora-network-general.png"
  width="100%"
  figure-number="2"
  caption="General Parameters Page"
/>

Below is a short explanation of the main parameters:

- **Region (Frequency Plan)**: A drop down menu list including the following: **EU863-870, IN868-867, US902-928, AS923, CN470-510, AU915, KR920**
- **Enable ADR**: If you choose to use Adaptive Data Rate, you need to enable it via the slider and further configure the Minimum and Maximum allowed value.
- **Minimum and maximum allowed data-rate**: Note the **DR_0 to DR_15** values represent a bits/s value and max payload size. Those are dependent on your region of operation and the bandwidth and SF used. However as they are predefined by the LoRa Alliance® the menu does not list the full parameter values. Please refer to the official documentation for details.
- **ADR Margin**: This value is in dB and it directly affects the probability of a node being disconnected if channel quality is poor. Higher value will result in a lower data rate, but better range.
- **Network ID**: The ID of the network to be advertised to end devices in case you want to have roaming to other networks
- **Rx 1 Delay** (seconds): The First Receive window delay can be west here (check with local recommendations)
- **Rx 1 DataRate Offset**: In case you want to have a different data rate for the Downlink (synchronized with node)
- **Rx 2 Frequency** (Hz): The frequency of the Second Receive window.
- **Rx 2 Datarate**: A value can be picked that corresponds to a combination of Spreading Factor and Bandwidth.
- **Downlink Tx Power**: This is the maximum power in **dBm** the Gateway is allowed to use when transmitting frames to the nodes. It is region specific (for example EU868 is 14dBm)
- **Device-status request interval**:The time in seconds between node status request messages sent by the Gateway. Default
  value of 0 (disabled status requests).
- **Log Level**: The granularity of the log information is chosen from the following levels: ERROR, INFO (default), DEBUG, TRACE.
- **Statistics Period**: This is the aggregation interval for the Gateway Statistics

## 3. Gateway

In this section you can add and External Gateways to work with your LoRa® Network Server. This way packet forwarded by the listed Gateways will be forwarded as though they were within the range of this device.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-sever-gateway.png"
  width="100%"
  figure-number="3"
  caption="Network Server Gateway tab"
/>

Below is a short explanation of the main parameters:

### Gateway

Here you can add a Gateway. You simply need to input the EUI into the text box and press the Add button. Additionally you can add a **Name**, **Description** and the **coordinates** of the Gateway.

### Gateway Backend Configuration

- **General Setup**: These setting are the same as for the [LoRaWAN® Gateway MQTT Bridge](lorawan-gateway-configuration.html#_2-lorawan®-gateway-mqtt-bridge), refer to its section for more information
- **MQTT Topic**: Here you can get information on the topic templates: **Uplink MQTT topic**, **Downlink MQTT Topic**, **Downlink Acknowledge MQTT Topic**, and **Gateway Statistic MQTT Topic**.

## 4. Application

The first time you access the menu, it will have no applications listed. Create one by Entering a name in the field and pressing the "**Add**" button.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/adding-application.jpg"
  width="100%"
  figure-number="4"
  caption="Adding an application"
/>

You will be automatically forward to the Application Edit screen. You have 3 tabs here, which are explained below:

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-server-app-config.png"
  width="100%"
  figure-number="5"
  caption="Network Server Applications Configuration"
/>

### Application Configuration

This is where you configure the parameters required to successfully create your application.

- **Name**: A way of identifying it in the Built-in NS.
- **Application EUI**: The Application EUI is a global application ID in IEEE EUI64 address space that uniquely identifies the entity able to process the JoinReq frame. Thus, you need one which you can either enter yourself (for example if you have copied it from TTN) or press the green button after the text field to generate a random one.
- **Application Key**: The Key is used to generate the Application Session Key and Network Session Key in cause of using OTAA. As with the EUI you can either enter it itself or generate a random one.
- **Auto Add LoRa® Device**: This slider determines if the device will be automatically added if the application EUI and Key are valid.
- **Description**: An optional field for entering information describing the Application.

### Payload Formats

As of the time of writing this document, you can choose to have only one integration, which is **Cayenne LPP**. By default, this is not selected.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/payload-format-tab.png"
  width="100%"
  figure-number="6"
  caption="Application Payload Format Tab"
/>

If you turn the button in the on position only the parsed data will be forwarded, meaning that only the data with the proper fields will be processed.

### Integrations

There is an option to have an HTTPS integration for your application. See the figure for details:

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/payload-format-tab.png"
  width="100%"
  figure-number="7"
  caption="Application Integration Tab"
/>

- There are several fields that need to be filled in, starting with the **Data Encoder/Decoder Type** (Base 64 or HEX String). Once selected you can Enable the functionality with the slider.
- Afterwards, make sure to fill the rest of the fields: **HTTP/HTTPS Headers**, **Uplink data URL**, **Join notification URL**, **Ack notification URL**, and **Device-status notification URL**.

:::tip 📝 NOTE
 You can test the HTTP endpoint integration with a free service like: [Webhook.site](https://webhook.site)
:::

- Last but not least, select a value for the **Maximum number of concurrent connections** and the **Maximum length of the queue** (default values are 16 and 64 respectively).
- One done with filling in the parameters, click “**Save & Apply**”.

### Adding and Configuring a Device

In this section is in depth explanation of the data available per device. You can enter this section by either inputting a valid **Device EUI** and pressing the "**Add**" button, or pressing the "**Edit**" button for an existing device:

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/adding-network-device.png"
  width="100%"
  figure-number="8"
  caption="Network Server Adding a Device"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/adding-network-device-otaa.png"
  width="100%"
  figure-number="9"
  caption="Network Server Device Configuration (OTAA)"
/>

#### Configuration

- **Device name**: does not need to match the EUI, batch loading results in a match by default
- **Class**: both Class A and Class C devices are supported
- **Join Mode**: both OTAA and ABP are supported
- **Use specific application key**: a slider that allows you to enter an Application key manually.
- **Frame counter width**: 16 or 32 bits
- **Enable LPTP**: a proprietary RAK splitting protocol that allows sending large messages
- **Enable frame-counter Validation**: turn the counter on or off with the slider
- **Description**: optional explanation or comment

If you choose Join mode to be **ABP**, you have to additionally enter the **Device Address**, **Application Session Key**, and **Network Session Key** (optionally, you can generate random ones). Refer to the image below if you want to see how the window changes with ABP mode.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/adding-network-device-abp.png"
  width="100%"
  figure-number="10"
  caption="Network Server Device Configuration (ABP)"
/>

#### Activation

Upon activation, this will be automatically populated in the case of OTAA. In case of ABP it will be filled by the parameters you entered.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-device-activation.png"
  width="100%"
  figure-number="11"
  caption="Network Server Device Activation"
/>

#### Downlink

You can send a downlink frame with this tool. The slider determines if the frame is Confirmed or Unconfirmed. You need to enter the number of the Frame Port (Fport) and a payload in HEX format. The downlink will be transmitted in the next Rx window in case of Class A for example.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-device-downlink.png"
  width="100%"
  figure-number="12"
  caption="Network Server Device Downlink"
/>

#### Live Device Data

You can see the packets for the selected devices in real time in this section.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-live-device-data.png"
  width="100%"
  figure-number="13"
  caption="Network Server Device Live Data"
/>

## 5.Global Integration

This feature allows for integration of the **Built-in LoRa® Server** with an **External MQTT broker**.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-global-integration.png"
  width="100%"
  figure-number="14"
  caption="Network Server Global Integration"
/>

### General Setup

Again, you can refer to the [LoRaWAN® Gateway MQTT Bridge](lorawan-gateway-configuration.html#_2-lorawan®-gateway-mqtt-bridge) section for a detailed explanation of the parameters.

### MQTT Topic Template Setup

Here you can get information on the topic templates: **Join Topic**, **Uplink Topic**, **Downlink Topic**, **Ack Topic**, and **Status Topic**.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/global-integration-mqtt-template.png"
  width="100%"
  figure-number="15"
  caption="NS Global Integration MQTT Topic Template"
/>
