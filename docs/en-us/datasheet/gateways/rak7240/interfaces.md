## Interfaces

### Block Diagram

<rk-img
  src="/assets/images/datasheet/rak7240/block-diagram.png"
  width="100%"
  figure-number="3"
  caption="RAK7240 Outdoor LPWAN Gateway Block Diagram"
/>


### Hardware Interfaces

The hardware interfaces of **RAK7240 Outdoor LPWAN Gateway** include five (5) antenna ports (LoRa®, LTE-DIV/LoRa2, LTE-MAIN, WiFi, and GPS), six (6) status indicator LEDs, TF Card and nano-SIM sockets, a console port, an Ethernet Port (PoE), and a ground pad, as shown in the following figure:

<rk-img
  src="/assets/images/datasheet/rak7240/hardware-interfaces.jpg"
  width="100%"
  figure-number="4"
  caption="RAK7240 Outdoor LPWAN Gateway Hardware Interfaces" 
/>

### LED Indicators

The status of the LEDs is described as below. Please refer to the printing of the LEDs on the main board.

| **LEDs** | **Status Indication Description** | 
| ---- | ---- | 
| **PWR** | Power Indicator, LED is **ON** when the device is powered | 
| **ETH** | • **ON** – link is up <br>• **OFF** – link is down <br>• **Flashing** – Data is being transferred | 
| **LoRa**® | • **ON** - LoRa® module 1 status is up <br>•  **OFF** – LoRa® module 1 status is down <br>• **Flashing** – LoRa® module 1 data is being transferred | 
| **ACT** _(LTE)_ | • **Slow Flashing** (_200ms Bright/1800ms Dark)_ - searching for network <br>• **Slow Flashing** (200ms Dark/1800ms Bright) - idle status (online) <br>• **Fast Flashing** - Data is being transferred | 
| **STAT** <br>_(16 channels only)_ | • **ON** - LoRa® module 2 status is up <br>• **OFF** – LoRa® module 2 status is down <br>• **Flashing** – LoRa® module 2 data is being transferred | 
| **WLAN** | **AP Mode** <br>• **ON** - WLAN status is up <br>• **Flashing** - Data is being transferred<br><br>**STA Mode** <br>•  **Slow Flashing**(1Hz) - Disconnected <br>• **ON** - Connected <br>• **Lashing** - Data is being transferred | 


