---
next: access-the-gateway
---

# Power on the Gateway

1. Attach the LoRa® Antenna

First and foremost, screw on the antenna to the SMA connector back panel of the RAK7258 Micro Gateway

:::warning ⚠️ WARNING
 Do not power the device if the LoRa® Antenna port has been left open to avoid potential damage in the RAK7258 Micro Gateway.
:::

2. **Power** the Gateway **ON**

It is recommended to use the **12V DC adapter** that comes with the RAK7258 Micro Gateway. Optionally, you can use your own **PoE cable** and **injector** since the device supports PoE.

## Casing and Ports 

<rk-img
  src="/assets/images/quick-start-guide/rak7258/2.quickstart/rak7258-back-panel.png"
  width="75%"
  figure-number="1"
  caption="RAK7258 Micro Gateway Back Panel"
/>

## Status LED Indicators

| LEDs | Status Indication                                                                                                             |
| ---- | ----------------------------------------------------------------------------------------------------------------------------- |
| PWR  | Power Indicator, LED is on when the device is powered                                                                         |
| ETH  | **ON**– link is up, **OFF** – link is down, **Flashing** – Data is being transferred                                          |
| LoRa® | **ON** - LoRa® module status is up, **OFF** – LoRa® module status is down, **Flashing** – LoRa® module data is being transferred |
| ACT  | Reserved for future use                                                                                                       |
| STAT | Reserved for future use                                                                                                       |
| WLAN | **AP Mode** : **ON** - WLAN status is up, **Flashing** - Data is being transferred                                            |
|      | **STA Mode** : **Slow Flashing** (1Hz) - Disconnected, **ON** - Connected, **Flashing** - Data is being transferred           |


## Reset Key Functions
The function of the **Reset** key is as follows:

1. **Short press**: Restarts the Gateway
2. **Long press** (**5 seconds and above**): Restore Factory Settings

