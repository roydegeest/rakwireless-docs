---
next: /en-us/datasheet/rak811-breakout-module/
---
# Interfaces

## Block Diagram

<rk-img
  src="/assets/images/datasheet/rak7258/block_diagram.png"
  width="75%"
  figure-number="1"
  caption="RAK7258 Micro Gateway Block Diagram"
/>

## Hardware Interfaces

The hardware interfaces of RAK7258 Micro Gateway include DC 12V, ETH interface, Console interface, Reset key, USB port, Nano SIM slot, TF Card slot, six (6) Status indicator LEDs, LoRa® Antenna connector etc. as shown in the following figure.

<rk-img
  src="/assets/images/datasheet/rak7258/hardware-interfaces.jpg"
  width="75%"
  figure-number="2"
  caption="RAK7258 Micro Gateway Hardware Interfaces"
/>

### Reset Key Functions
The function of the **Reset** key is as follows:

1. **Short press**: Restarts the Gateway
2. **Long press (5 seconds and above)**: Restore Factory Settings

The status of the LEDs is described as below:

| LEDs | Status Indication Description                                                                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PWR  | Power Indicator, Led on when device power on                                                                                                                                                                                         |
| ETH  | **ON**: linkup <br> **OFF**: linkdown <br>**Flash**: Data Transmitting and Receiving                                                                                                                                                 |
| LoRa | **ON**: LoRa1 is working <br>**OFF**: LoRa1 is not working <br>**Flash**: Indicate that LoRa1 Packet receiving and sending                                                                                                           |
| ACT  | Expanded Led indicator, useless                                                                                                                                                                                                      |
| STAT | Expanded Led indicator, useless                                                                                                                                                                                                      |
| WLAN | AP Mode : <br>**ON**: WLAN is working<br>**Flash**: Data Transmitting and Receiving <br><br>STA Mode : <br>**Slow Flash (1Hz)**: Connection Disconnected <br>**ON**: Connection Successful <br>**Flash**: Data Receiving and Sending |

## Software Features and UI

| LoRa                      | Back-haul              | Management           |
| ------------------------- | ---------------------- | -------------------- |
| Class A, C device support | WiFi AP/Client mode    | WEB UI               |
| Built-in LoRaServer       | Multi back-haul backup | Supports SSH2        |
| MQTT Bridge mode          | Supports 802.1q        | Firmware update      |
| Real Time logger          | NAT                    | Back-up and recovery |
|                           | Firewall               | NTP                  |


