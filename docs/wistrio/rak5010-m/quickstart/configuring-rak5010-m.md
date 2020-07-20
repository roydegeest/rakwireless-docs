---
static_root: /assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m
prev: /wistrio/rak5010-m/quickstart/at-commands.html
next: /wistrio/rak5010-m/quickstart/connecting-cellular-network.html
---

# Configuring the RAK5010-M WisTrio NB-IoT Tracker

You can configure your RAK5010-M WisTrio NB-IoT Tracker by sending AT Commands either through UART or through Micro USB.



:::tip 📝 NOTE:
For the full list of AT Commands available for configuring your RAK5010-M, check [AT Commands for RAK5010-M WisTrio NB-IoT Tracker](/wistrio/rak5010-m/quickstart/at-commands.html).
:::



### Through Micro USB

- To begin with, connect your RAK5010-M with your PC through microUSB/USB as shown in the image below:



<rk-img
  :src="`${$frontmatter.static_root}/1.microusb-interface.jpg`"
  width="100%"
  caption="MicroUSB Interface for RAK5010-M"
/>


- Open the serial port tool in your PC.

:::tip 📝 NOTE:
Any serial tool will work, but it is recommended to use the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).
:::


- Configure the serial communication tool by selecting the proper port of the computer and configure the link as: 115200 bauds, 8 bits, No parity bit and 1 stop bit.
- After pushing the RST button on RAK5010-M, you can see the following contents in the serial port tool, shown in the Figure 2.



<rk-img
  :src="`${$frontmatter.static_root}/2.rak-serial-port-tool.jpg`"
  width="50%"
  caption="RAK serial port tool connected to RAK5010-M"
/>


### Through UART

- If you want to use RAK5010-M WisTrio NB-IoT Tracker through UART, you should connect the RAK5010-M in your machine through UART as shown in the image below:


<rk-img
  :src="`${$frontmatter.static_root}/3.rak5010-m-to-uart.jpg`"
  width="100%"
  caption="RAK5010-M WisTrio NB-IoT Tracker to UART"
/>


- Try to send a simple AT command to RAK5010-M to get the current firmware’s version by sending the command below using the RAK Serial Port Tool. Similarly, you can send other AT commands of RAK5010-M in the same way.

```
at+version
```

<rk-img
  :src="`${$frontmatter.static_root}/4.get-firmware-version.jpg`"
  width="50%"
  caption="RAK Serial Port Tool, get firmware version"
/>

