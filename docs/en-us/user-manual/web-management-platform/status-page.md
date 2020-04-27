---
next: network-configuration
---

# Status Page

This is where statistics about the Gateway behavior can be monitored in real time.

## 1. Overview

<rk-img
  src="/assets/images/user-manual/web-management-platform/status-overview.png"
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

## 2. LoRaWAN® Packet Logger

This is where the logs of the LoRa® messages is shown in real time. There are several options for filtering as well as the possibility to download the statistics in a file. Additionally, there is a summary (**Total, Uplink, and Downlink**), below the filter fields.

<rk-img
  src="/assets/images/user-manual/web-management-platform/packet-logger-view.jpg"
  width="100%"
  figure-number="2"
  caption="LoRaWAN® Packet Logger View of the WEB Management Platform."
/>

<rk-img
  src="/assets/images/user-manual/web-management-platform/packet-logger-detailed.jpg"
  width="100%"
  figure-number="3"
  caption="Detailed Information of each Message in the LoRaWAN® Packet Logger"
/>

- **LoRaWAN® Packet Logger**: Real-time recording and parsing of messages sent and received by the LoRaWAN® Gateway, can be filtered according to message type and node address.
- **Type**: Filter by message type. Select ALL as unfiltered and display all messages.
- **DevAddr**: Filter messages based on node addresses.
- **Hide CRC_ERR packet**: When it is selected, no "CRC" check error message will be displayed.

## 3. System Log

Through the system log, updated logs in real time can be seen in this menu. It includes in addition to the host processes, the LoRa® frames received/transmitted by the gateway. If the connection to the LoRa® Network server is lost, it is automatically backed up on the SD card (**Provide one is inserted in the slot**).

<rk-img
  src="/assets/images/user-manual/web-management-platform/system-logger.jpg"
  width="100%"
  figure-number="4"
  caption="System logger tab"
/>

## 4. Firewall

This section houses the Firewall settings. It also where you go to reset the Firewall remotely.

<rk-img
  src="/assets/images/user-manual/web-management-platform/firewall.jpg"
  width="100%"
  figure-number="5"
  caption="Firewall tab"
/>