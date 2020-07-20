---
prev: /wistrio/rak5010-m/quickstart/prerequisites/
next: /wistrio/rak5010-m/quickstart/configuring-rak5010-m.html
---

# AT Commands for RAK5010-M WisTrio NB-IoT Tracker

This section of this document demonstrates on how to configure the RAK5010-M Wistrio NB-IoT Tracker thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

| **AT Command** | **Description** | 
| ---- | ---- | 
| at+version                                                 | Gets the current firmware version number. | 
| at+set_config=device:restart                               | After set, the device restarts. | 
| at+get_config=device:status                                | Gets all information about the device’s hardware components and their current status. | 
| at+set_config=device:sleep:**X**                           | After set, the device sleeps or wakes up immediately. <br><br> • **0** - sleep <br> • **1** - wake up | 
| at+set_config=device:gps:**X**                             | • **X** - **0**: close, **1**: open, **2**: sleep, **3**: standby | 
| at+set_config=device:cellular:**X**                        | • **X** - **0**: close, **1**: open | 
| at+set_config=cellular:send_interval:**X**:**Y**           | Sets the interval of sending packet loop. <br><br> • **X** - **0**: off, **1**: on. <br><br> • **Y -** the interval time (ms) This value must be more than 150000 (150s). <br><br> If the X is set to 1, it means that the device will sleep for Y ms after sending a packet automatically in a loop, until you set X to 0. | 
| at+scan=cellular                                           | Scan the around Cellular networks    | 
| at+set_config=cellular:**XXX**:**Y**:**ZZZ**:<br>**AAA**:**BBB**:**C** | Set the IP address and port which you want to send data to through Cellular.<br><br> • **XXX -** The IP address you want to send data to. <br> <br> • **Y -** The port you want to send data to. <br><br> • **ZZZ -** The cellular operator’s long name you want to connect, for example: CHINA MOBILE. <br> <br> • **AAA -** The short name of the Cellular operator, for example: CMCC. <br> <br> • **BBB -** The operator’s APN name, for example CMNET. <br><br> • **C -** The number of the Cellular network type. For example, 0 indicates GSM, 8 indicates LTE cat.M1, and 9 indicates LTE cat.NB1. | 
| at+set_config=cellular:(**XXX**)                           | Set the Cellular module using the Cellular module’s common AT commands which come from its manufacture. <br> <br> • **XXX -** The Cellular module’s common AT commands. <br><br> For the full list of supported Quectel BG96 AT Commands, go to their [site](https://www.quectel.com/product/bg96.htm). | 
| at+send=cellular:**XXX**                                   | Send a data through cellular. <br> • **XXX** - The data you want to send. | 
| at+set_config=hologram:**XXX**                             | Configure the Hologram SIM card.<br> <br> • **XXX -** the device key of the Hologram SIM card. You can find it on [**Hologram web page**](https://dashboard.hologram.io) after activating the Hologram SIM card. | 
| at+send=hologram:user:**XXX**                              | Send a data to Hologram server. <br><br> • **XXX** - the data you want to send. | 
| at+send=hologram:sensor                                    | Send a packet of the current sensor’s data to Hologram server. | 
| at+set_config=ble:work_mode:**X**:**Y**                    | Set the work mode for BLE. <br><br> • **X** - **0**: BLE peripheral mode, **1**: BLE central mode, **2**: Beacon scan mode <br> <br> • **Y** - **0**: normal range, **1**: BLE long range <br><br> For more information about BLE Connection Modes, refer to [RAK5010 BLE Connection Modes](/wistrio/rak5010/quickstart/bluetooth-connection-modes.html). | 


