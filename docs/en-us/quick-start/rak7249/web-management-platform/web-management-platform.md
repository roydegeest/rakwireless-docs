# Web Management Platform

This document describes in detail the functionality of the Web Management UI. It is based on OpenWRT and is shared among all gateway products of RAKwireless Commercial Gateway line.

To get started open the browser, enter the IP address of the gateway, and open the login page of the WEB Management Platform. Type-in **root** as the username and password and click login. You can check the credentials needed for accessing the WEB Management Platform from the [Accessing the Web Management Platform](overview.html#accessing-the-web-management-platform) section.

## Status Page

This is where statistics about the Gateway behavior can be monitored in real time.

### 1. Overview

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/status-overview.png"
  width="100%"
  figure-number="1"
  caption="Status Overview of the WEB Management Platform."
/>

- The following are the parts of the Overview window:
  - **Received**: Shows the total number of uplink LoRa® messages received by the gateway.
  - **Transmitted**: Shows the total number of downlink LoRa® message sent by the gateway.
  - **Active Nodes**: Shows the number of active LoRaWAN® Nodes within the LoRaWAN® Gateway coverage. (Those that have sent no data for more than 10 min are discarded from the count.)
  - **Busy Nodes**: Shows the number of busy nodes within the LoRaWAN® gateway coverage (**Nodes with an average message spacing of less than 60 seconds.**)
  - **Duty Cycle of the LoRa® Channel**: The graph represents the Duty Cycle load by frequency channel (**Data is kept for the last 12 hours**). The minimum resolution along the time axis is 60 seconds. Each value is an average over 60 seconds. The values are color code – green to red, low to high.
  - **RSSI & SNR**: These graphs show how many of the total amount packets haw an RSSI/SNR value within a certain range. This is also shown in a pie chart to the side of the graphs.
  - **Uplink Traffic**: The graph shows the packet per minute rate as a function of time. Above the image, one can see the color-coding of the different Spreading Factors, where the actual height of the values is a sum of all the packets over all spreading factors for the time sample.
  - **Downlink Traffic**: The graph shows the packet per minute rate as a function of time. Above the image, one can see the color-coding of the different Spreading Factors, where the actual height of the values is a sum of all the packets over all spreading factors for the time sample.
  - **System**: Information for the Hostname and model of the Gateway can be found here. There is also the Local Time and Uptime of the Gateway. Most importantly, you can see the Firmware version here.
  - **Memory**: There are bars in this section that shows how much the Total Available, Free and Buffered Memory is.
  - **LoRa Network Server**: You can see the statistics for your network server. Number of associated LoRa® Nodes, Uplink, Downlink, Received Join, Rejected Join, those types of packets all have a numerical values associated with them. Additionally, you can check the Uptime and whether you have the MQTT Integration running.
  - **Network**: The WAN status with its Type and Addressing parameters, together with the time since it has been connected are displayed here.
  - **Cellular**: The connection status of your cellular together with the corresponding Network ID and the parameters of your Sim (**ICCID, IMSI, Phone number**).
  - **Wireless**: The status of the Wi-Fi is displayed here. There is the connectivity status, signal strength and IP addressing parameters for both the AP and Client interfaces.
  - **Dynamic DNS**: You can oversee your Dynamic DNS configuration here, assuming you have one configure, otherwise there are example values.

### 2. LoRaWAN® Packet Logger

This is where the logs of the LoRa® messages is shown in real time. There are several options for filtering as well as the possibility to download the statistics in a file. Additionally, there is a summary (**Total, Uplink, and Downlink**), below the filter fields.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/packet-logger-view.jpg"
  width="100%"
  figure-number="2"
  caption="LoRaWAN® Packet Logger View of the WEB Management Platform."
/>

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/packet-logger-detailed.jpg"
  width="100%"
  figure-number="3"
  caption="Detailed Information of each Message in the LoRaWAN® Packet Logger"
/>

- **LoRaWAN® Packet Logger**: Real-time recording and parsing of messages sent and received by the LoRaWAN® Gateway, can be filtered according to message type and node address.
- **Type**: Filter by message type. Select ALL as unfiltered and display all messages.
- **DevAddr**: Filter messages based on node addresses.
- **Hide CRC_ERR packet**: When it is selected, no "CRC" check error message will be displayed.

### 3. System Log

Through the system log, updated logs in real time can be seen in this menu. It includes in addition to the host processes, the LoRa® frames received/transmitted by the gateway. If the connection to the LoRa® Network server is lost, it is automatically backed up on the SD card (**Provide one is inserted in the slot**).

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/system-logger.jpg"
  width="100%"
  figure-number="4"
  caption="System logger tab"
/>

### 4. Firewall

This section houses the Firewall settings. It also where you go to reset the Firewall remotely.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/firewall.jpg"
  width="100%"
  figure-number="5"
  caption="Firewall tab"
/>

## Network Configuration

### 1. WAN Interface

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-wan-interface.png"
  width="100%"
  figure-number="6"
  caption="WAN Interface Configuration"
/>

The user can check the Status (Uptime, IPv4 Address, etc.), or configure the protocol to be used in connecting to your provider’s network. The following options are available: **DHCP**/**PPPoE**/**static IP** address.

Additionally, one can set the **Gateway metric** (how high is this interface in the connectivity priority) and the **MTU size** (1500 standard). Flipping the DNS switch allows you to enter a custom DNS server address.

### 2. Cellular Network Configuration

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-cellular-interface.png"
  width="100%"
  figure-number="7"
  caption="Cellular Interface Configuration"
/>

The same statistics as with the WAN Interface are available. It is here that you set the **APN**, **User**, and **Password**. The Gateway metric determines the priority of this interface, compared with the other connectivity options. The lower the value the higher the priority.

:::tip Note
:pencil: There is also a field for the PIN Code in case your SIM card is locked.
:::

### 3. Wi-Fi

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-wifi-config.png"
  width="100%"
  figure-number="8"
  caption="Wi-Fi Configuration"
/>

Enabling/Disabling the Wi-Fi is done from this page via the blue button at the top. Additionally, you can pick a radio channel or leave it on Auto configuration. The Wi-Fi can work in one of two modes:

**Access Point**: By default, there is no password. One can access the Web UI via the IP address: **192.168.230.1** once connected to the AP. The SSID is "**RAK7249_XXXX**" by default.

:::tip Note
:pencil: If you swipe the **Hidden** slider, the SSID will not be advertised.
:::

**Client**: By default, the client mode is disabled. If you want to use it you have to click the “**Enable**” button.Click the “**Scan**” button to choose your preferred wireless network. Choose the encryption method, fill in the password and press **Save & Apply**.

### 4. Firewall

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-firewall.png"
  width="100%"
  figure-number="9"
  caption="Firewall"
/>

You can configure a number of settings including, but not limited to: **Zones**, **Port Forwarding**, **NAT**, etc.

### 5. Diagnostics

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-diagnostics.png"
  width="100%"
  figure-number="10"
  caption="Diagnostics"
/>

The connection diagnostic tools are in this section: **Ping**, **Traceroute**, **Nslookup**.

You can enter either an URL or an IP Address in the text box and execute the command with the button. Both IPv4 and IPv6 are supported. The results are conveniently displayed in a CLI box.

### 6. Ping Watchdog

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-ping-watchdog.png"
  width="100%"
  figure-number="11"
  caption="Ping Watchdog"
/>

Ping Watchdog monitors the quality of network links by constantly pinging the specified IP Address or Domain name on the specified uplink network interface. When network link failures are detected, scheduled measures are taken automatically. Those include: Interface restart, Interface priority reduction, Device restart, etc.

:::tip Note
:pencil: Reducing the priority of an uplink interface only works when the LoRaWAN Gateway uses both Ethernet and Cellular as uplink methods at the same time.
:::

The WAN interface represents the Ethernet uplink interface and WAN represents the LTE cellular network uplink interface.

For example if Ping Watchdog is enabled for both uplink interfaces at the same time and the response to degradation of the link quality is set as Increase Gateway Metric the two uplink interfaces work as backups for each other. In the event of significant degradation on one, the Gateway switches to the other.

The Gateway Metric determines the priority of interfaces. The default value can be adjusted in the Network menu for the corresponding interface. The lower the Gateway metric, the higher the priority of the link.

## LoRaWAN® Gateway Configuration

All settings related to the LoRaWAN® Gateway's performance can be found in this section. Setting those in an optimum matter will ensure that packets from end nodes are forwarded correctly, nodes are registered and errors are avoided.

### 1.LoRa® Packet Forwarder

As this is the most important part of the LoRaWAN® Gateway, the number of settings and options is greatest here. Thus, this section will be larger and provide information in more detail than previous ones. For the aforementioned reasons this section has several configuration tabs, which are listed in the following paragraphs. Additionally, some of the configuration options have their own documents, with detailed explanation of the configuration process, which you can find in the [RAKwireless Documentation Hub](https://doc.rakwireless.com/).

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/lora-packet-forwder.png"
  width="100%"
  figure-number="12"
  caption="LoRa® Packet Forwarder Page"
/>

#### General Setup

This is where the core settings are: **Gateway EUI**, **Frequency channels**, etc.

- **Gateway EUI**: The value in this field is necessary for registering your gateway with any LoRaWAN® Network Server.

- **Protocol**: You have three options, which define how the Gateway will function:
  - **Semtech UDP GWMP Protocol**: By default, this is the Semtech Packet Forwarder, which sends packets to the Server Address of your choice (IP or URL). By default it points to the local TTN router. The **default port value** is **1700** used by TTN. One can also set parameters as the Statistic Interval (s), Push Timeout (ms), and the Auto-quit Threshold.
  - **LoRaWAN® Gateway MQTT Bridge**: By choosing this option, you make the Gateway act as a bridge to the MQTT Broker, which is hosted somewhere separate. You need to configure the Gateway to point to the correct address of the MQTT broker
  - **Built-in LoRa® Server**: In case you require an integrated solution where the LoRa® Network Server is hosted on the gateway itself you choose this option.
- **Frequency Plan Template**: Currently, the Indian, Russian and European Union bands are supported. After selecting the appropriate choice and pressing the Import button, the Concentrator module settings at the bottom of the page will be populated automatically.
- **Automatic Data Recovery**: This is an important feature that allows LoRa® Frames to be stored on the **SD card** (provided there is one in the slot), if there is no connection to the LoRaWAN® Network Server. Upon restoring connectivity, these buffed messages will be forwarded, so no data will be lost. This is done in blocks of 8 (FIFO), until all are cleared from the buffer.
- **Is LoRaWAN® Network**: If you choose “**YES**” here, you will enable frames that are not compliant with the LoRaWAN® specification to be forwarded (in case you have your proprietary LoRa® Server solution). By default, “**NO**” is selected and non-LoRaWAN® packets are dropped.
- **Log Level**: You can choose from 5 different log levels (**Error/Warning/Notice/Info/Debug**). This will affect System Log. From Errors only to full system log for debugging.

#### Beacon Setup

In the case of Class B LoRa® devices, you need to have a beacon in order to synchronize downlink message windows. Thus, you have to configure its parameters: Beacon Period, Beacon Frequency (Hz), Beacon Channel Number, Beacon Frequency Step, Beacon Data Rate (SF9-SF12), Beacon Bandwidth (125000 Hz by default), Beacon Tx Power (14 dBm by default), Beacon Information Descriptor.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/beacon-setup.png"
  width="100%"
  figure-number="13"
  caption="Beacon Setup Page"
/>

#### Packet Filter

By enabling this functionality, you can filter any incoming traffic and only forward packets received from the desired nodes in order to optimize bandwidth usage over backhaul. You can filter by OUI or Network ID by white-listing.

The **Enable Auto Filter** slider allows nodes to be automatically dropped in accordance with a set of parameters. One can set threshold values for Discard Period, Join Period, Join Interval, and Join Count (1 and 2 for Join Interval and Join Period respectively).

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/packet-filter-page.png"
  width="100%"
  figure-number="14"
  caption="Packet Filter Page"
/>

#### GPS Information

In case, you want to enter the GPS parameters for the Gateway manually. Just input your **Latitude**, **Longitude** and **Altitude** then press "**Save and Apply**" at the bottom of the page.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/gps-information-page.png"
  width="100%"
  figure-number="15"
  caption="GPS Information Page"
/>

#### Frequency Plan

This is a part of the page, common for all gateway from the RAK72xx series, however depending on the number of Concentrator modules installed there are variations. The difference when there is a second Concentrator is that first it has to also be configured, and second only the fields for the central frequencies for Radio 0 and Radio 1 need be set. There are two modes for setting the frequencies:

- **Standard Mode**: You can start by importing a region via the drop down menu (EU868 is the default one). You will get the defaults channels for the chosen frequency band and the option to add additional ones. Simply enter the frequency in the text box (in MHz) and click the “**Add**” button. You can add as many channels as you need as long as they fall in the Regional band. Additionally for the LoRa® Standard and FSK channels, you are also required to select the Bandwidth and Data Rate.

:::tip Note
:pencil: In case you have the RAK7249 or RAK7240 with a second concentrator module, you can add this one too by pressing the Add/Remove LoRa Concentrator button at the bottom of the page and add additional channels (Multi-SF) for a total of 16.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/standard-freq-plan.png"
  width="100%"
  figure-number="16"
  caption="Frequency Plan (Standard Mode)"
/>

- **Advanced Mode**: Because of the presence of double SX1257s, you need to configure the two radios separately. You have eight Multi Spreading Factor Channels, The LoRa® Standard Channel and the FSK Channel. The sliders can enable or disable those, so you can choose to have any number of them active. Additionally you can choose which radio to use for a given, channel as long as you do not assign more than five channels per radio. In order to set the desired channel to a given frequency you need to input an offset value in the **If field**. Thus, the channel frequency will be the central frequency (Radio 0 Freq or Radio 1 Freq parameter) summed with the offset value (in Hz). As mentioned before you can choose to import those settings for the Indian, Russian and EU Regions (in accordance with the LoRa Alliance® specifications).

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/advanced-freq-plan.png"
  width="100%"
  figure-number="17"
  caption="Frequency Plan (Advanced Mode)"
/>

### 2.LoRaWAN® Gateway MQTT Bridge

The Gateway is capable of working with an external LoRa® Server, where the MQTT Broker is functioning separately. For this purpose, there are several tabs with their corresponding parameters to be filled.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/mqtt-bridge-setup.png"
  width="100%"
  figure-number="18"
  caption="MQTT Bridge Setup Page"
/>

#### General Setup

- **Enable**: This slider is used to enable/disable this functionality.
- **LoRa® Network Server Type**: Choose on the following options:
  - **Built-in LoRa Network Server**: Choose this if you are going to be using the Built-in LoRa Network Server
  - **loraserver 2x**: Choose this if you are pointing to an MQTT 2x Broker (JSON)
  - **loraserver 3x**: Choose this if you are pointing to an MQTT 3x Broker (PROTOBUF)
  - **loraserver 3x**: Choose this if you are pointing to an MQTT 3x Broker (JSON-V3)
- **MQTT Broker Address**: The IP Address where the MQTT Broker is hosted.
  :::tip Note
  :pencil: The MQTT Broker IP Address for Built-in is `127.0.0.1`
  :::
- **MQTT Broker Port**: The corresponding port.
  :::tip Note
  :pencil: The MQTT Broker default port is `1883`
  :::
- **MQTT Protocol Version**: You can choose between V3.1 and V3.1.1
- **Client ID**: An ID that is used to associate with the topic. If left empty a random one will be generated.
- **Clean Session**: With this button enabled, the broker will not store any subscription information or undelivered messages.
- **Will Retain**: With this button enabled, the last message published will be retained.
- **Quality of Service (Qos)**: You can set the desired Quality of Service level.
- **keepalive**: The keep alive interval in seconds. The default alive interval is 10 seconds.
- **Enable Authentication**: The switch turns on Encryption of the transmitted data. You need to configure the Certificates used to encrypt the data in order for secure authentication to be performed.
- **SSL/TLS Mode**: By default, this isDisabled.You can choose one of 3 other modes:
  - CA signed server certificate
  - Self-signed server certificate
  - Self-signed server & client certificate.
- **TLS Version**: The version of the TLS protocol to be used. Choose in the options below:
  - TLSv1
  - TLSv1.1
  - TLSv1.2
- **CA Certificate, TLS Certificate, TLS Key**: Those are to be generated via the appropriate algorithm and distributed between the MQTT Broker and the LoRaWAN® Server.

:::tip Note
:pencil: Please refer to the [MQTT Bridge with TLS Encryption Configuration Manual](https://downloads.rakwireless.com/en/LoRa/DIY-Gateway-RAK7249/Application-Notes/LoRaWAN_Gateway_MQTT_Bridge%2BTLS_Configuration_Guide_V1.1.pdf) for details on how to edit the settings in order for the Gateway to work as an MQTT Bridge with TLS Encryption.
:::

- **Log Level**: The granularity of the log information is chosen from the following levels:
  - ERROR
  - INFO (default)
  - DEBUG
  - TRACE

#### MQTT Topic Template Setup

Refer to the image below for the MQTT 2x Topic Template:

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/mqtt-2x.png"
  width="100%"
  figure-number="19"
  caption="MQTT 2x Setup Page"
/>

Refer to the image below for the MQTT 3x Topic Template, which both the loraserver 3x and Built-in server use:

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/mqtt-3x.png"
  width="100%"
  figure-number="20"
  caption="MQTT 3x Setup Page"
/>

## LoRa® Network Server

The Gateway comes with an integrated LoRa® Networks Server. This makes the Gateway a standalone solution for the whole LoRaWAN® chain in one device, which is immensely helpful for testing purposes and provided for flexibility in deployment options. One can also opt to disable this feature and use a LoRa® Network Server hosted separately.

### 1. Status

A summary of the most important statistics is displayed on the Status page. The number of packets for all packet types plus the total number of end devices/gateways. Last but not least, the uptime.

Additionally, there are graphs for the most important KPI parameters (RSSI, SNR and DataRate), together with a Traffic History.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/lora-network-server-status.jpg"
  width="100%"
  figure-number="21"
  caption="LoRa® Network Server Status page"
/>

### 2. General

In order to use the LoRa® Server, you need to enable its protocol from the following menu: LoRaWAN® Gateway Menu -> LoRa® Packet Forwarder -> Protocol -> Built-in LoRa® Server. Now you can choose to **enable/disable** it via the slider in the General Configuration tab.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/lora-network-general.png"
  width="100%"
  figure-number="22"
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

### 3. Gateway

In this section you can add and External Gateways to work with your LoRa® Network Server. This way packet forwarded by the listed Gateways will be forwarded as though they were within the range of this device.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-sever-gateway.png"
  width="100%"
  figure-number="23"
  caption="Network Server Gateway tab"
/>

Below is a short explanation of the main parameters:

#### Gateway

Here you can add a Gateway. You simply need to input the EUI into the text box and press the Add button. Additionally you can add a **Name**, **Description** and the **coordinates** of the Gateway.

#### Gateway Backend Configuration

- **General Setup**: These setting are the same as for the [LoRaWAN® Gateway Configuration](web-management-platform.html#_2-lorawan®-gateway-mqtt-bridge), refer to its section for more information
- **MQTT Topic**: Here you can get information on the topic templates: **Uplink MQTT topic**, **Downlink MQTT Topic**, **Downlink Acknowledge MQTT Topic**, and **Gateway Statistic MQTT Topic**.

### 4. Application

The first time you access the menu, it will have no applications listed. Create one by Entering a name in the field and pressing the "**Add**" button.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/adding-application.jpg"
  width="100%"
  figure-number="24"
  caption="Adding an application"
/>

You will be automatically forward to the Application Edit screen. You have 3 tabs here, which are explained below:

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-server-app-config.png"
  width="100%"
  figure-number="25"
  caption="Network Server Applications Configuration"
/>

#### Application Configuration

This is where you configure the parameters required to successfully create your application.

- **Name**: A way of identifying it in the Built-in NS.
- **Application EUI**: The Application EUI is a global application ID in IEEE EUI64 address space that uniquely identifies the entity able to process the JoinReq frame. Thus, you need one which you can either enter yourself (for example if you have copied it from TTN) or press the green button after the text field to generate a random one.
- **Application Key**: The Key is used to generate the Application Session Key and Network Session Key in cause of using OTAA. As with the EUI you can either enter it itself or generate a random one.
- **Auto Add LoRa® Device**: This slider determines if the device will be automatically added if the application EUI and Key are valid.
- **Description**: An optional field for entering information describing the Application.

#### Payload Formats

As of the time of writing this document, you can choose to have only one integration, which is **Cayenne LPP**. By default, this is not selected.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/payload-format-tab.png"
  width="100%"
  figure-number="26"
  caption="Application Payload Format Tab"
/>

If you turn the button in the on position only the parsed data will be forwarded, meaning that only the data with the proper fields will be processed.

#### Integrations

There is an option to have an HTTPS integration for your application. See the figure for details:

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/payload-format-tab.png"
  width="100%"
  figure-number="27"
  caption="Application Integration Tab"
/>

- There are several fields that need to be filled in, starting with the **Data Encoder/Decoder Type** (Base 64 or HEX String). Once selected you can Enable the functionality with the slider.
- Afterwards, make sure to fill the rest of the fields: **HTTP/HTTPS Headers**, **Uplink data URL**, **Join notification URL**, **Ack notification URL**, and **Device-status notification URL**.

:::tip Note
:pencil: You can test the HTTP endpoint integration with a free service like: [Webhook.site](https://webhook.site)
:::

- Last but not least, select a value for the **Maximum number of concurrent connections** and the **Maximum length of the queue** (default values are 16 and 64 respectively).
- One done with filling in the parameters, click “**Save & Apply**”.

#### Adding and Configuring a Device

In this section is in depth explanation of the data available per device. You can enter this section by either inputting a valid **Device EUI** and pressing the "**Add**" button, or pressing the "**Edit**" button for an existing device:

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/adding-network-device.png"
  width="100%"
  figure-number="28"
  caption="Network Server Adding a Device"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/adding-network-device-otaa.png"
  width="100%"
  figure-number="29"
  caption="Network Server Device Configuration (OTAA)"
/>

##### Configuration

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
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/adding-network-device-abp.png"
  width="100%"
  figure-number="30"
  caption="Network Server Device Configuration (ABP)"
/>

##### Activation

Upon activation, this will be automatically populated in the case of OTAA. In case of ABP it will be filled by the parameters you entered.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-device-activation.png"
  width="100%"
  figure-number="31"
  caption="Network Server Device Activation"
/>

##### Downlink

You can send a downlink frame with this tool. The slider determines if the frame is Confirmed or Unconfirmed. You need to enter the number of the Frame Port (Fport) and a payload in HEX format. The downlink will be transmitted in the next Rx window in case of Class A for example.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-device-downlink.png"
  width="100%"
  figure-number="32"
  caption="Network Server Device Downlink"
/>

##### Live Device Data

You can see the packets for the selected devices in real time in this section.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-live-device-data.png"
  width="100%"
  figure-number="33"
  caption="Network Server Device Live Data"
/>

### 5.Global Integration

This feature allows for integration of the **Built-in LoRa® Server** with an **External MQTT broker**.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/network-global-integration.png"
  width="100%"
  figure-number="34"
  caption="Network Server Global Integration"
/>

#### General Setup

Again, you can refer to the [LoRaWAN® Gateway Configuration](web-management-platform.html#_2-lorawan®-gateway-mqtt-bridge) section for a detailed explanation of the parameters.

#### MQTT Topic Template Setup

Here you can get information on the topic templates: **Join Topic**, **Uplink Topic**, **Downlink Topic**, **Ack Topic**, and **Status Topic**.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/global-integration-mqtt-template.png"
  width="100%"
  figure-number="35"
  caption="NS Global Integration MQTT Topic Template"
/>

## Services

### 1. Dynamic DNS (Beta)

Dynamic DNS allows your router to be reached via a fixed host name while having a dynamically changing IP address.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/dynamic-dns.png"
  width="100%"
  figure-number="36"
  caption="Dynamic DNS Tab"
/>

:::tip Note
:pencil: Make sure to go through the **Hints** in order to get some understanding of how Dynamic DNS functions as a whole. You can do this by clicking on the \u201c**Show more**\u201d text in the Hints field
:::

#### Overview

To change the global settings press on the text that is marked in the red rectangle in Figure 1. If you want to have separate settings/rules for IPv4/IPv6, you need to define two sets, one for each.

### 2. OpenVPN Tunnels

This is where you can create and new tunnels and monitor existing ones. You can check the available options in the image below:

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/openvpn-tunnels.png"
  width="100%"
  figure-number="37"
  caption="OpenVPN Tunnels Tab"
/>

## System

### 1. System

This is the section where you configure general device parameters.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/system-tab.png"
  width="100%"
  figure-number="38"
  caption="System Tab"
/>

#### General Settings

The system time is displayed here. Additionally, you can edit the Host Name and select the Time zone. Another way to get the correct time is to use Timing Synchronization. You can Enable NTP client mode, enable NTP server and provide server candidate URLs.

:::tip Note
:pencil: Time Synchronization tab is displayed in all System sub-menus.
:::

#### Logging

In case you want to keep a log of system events you can configure how this is done here. You can set the Buffer size, provide the IP Address and port of an External log server, and set the Log Level.

#### Language

By default, this is in Auto (English), however you can choose from several options including German, Spanish, Russian, etc.

### 2. Administration

This is where you change the administration password of the device.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/admin-tab.png"
  width="100%"
  figure-number="39"
  caption="Administration Tab"
/>

### 3. License

This is the status of your license. You can see the Type, Number of Supported Nodes, Expiration date, and the Number of External Gateways Supported. There is a field to enter the License data in case you are upgrading.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/license-tab.png"
  width="100%"
  figure-number="40"
  caption="License Tab"
/>

### 4. Backup / Flash Firmware

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/backup.png"
  width="100%"
  figure-number="41"
  caption="Backup, reset and firmware update"
/>

- **Generate archive**: Downloads an archive of the current configuration
- **Perform reset**: Resets the Gateway to the default settings
- **Restore**: You can upload a previously generated archive to restore the configuration settings at the time of its making
- **Flash new firmware**: Update the firmware by flashing a bin file. Use the button to select the location of the new firmware file and the blue button to initiate the flashing process. There is a tick box to toggle the option of keeping the current settings of the gateway

:::tip Note
:pencil: The **Keep Settings** check box is selected by default, as unchecking it will results in having a Gateway with stock settings after the firmware update.
:::

### 5. Reboot

Reboots the gateway. All unsaved changes will be discarded. This is not a reset in any way and only power cycles the device. All configuration settings will be left intact.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/reboot.png"
  width="100%"
  figure-number="42"
  caption="System reboot"
/>

### 6. File Browser

This gives you access to the files in the **root** partition.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/file-browser.png"
  width="100%"
  figure-number="43"
  caption="File Browser"
/>
