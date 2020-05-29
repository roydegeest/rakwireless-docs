---
static_root: /assets/images/quick-start-guide/rak7204/3.interfacing
next: /en-us/quick-start-guide/rak7204/connecting-to-ttn/
---

# Interfacing with the RAK7204 

In order for you to be able to interface with the RAK7204 LPWAN Environmental Sensor with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

:::warning ⚠️ WARNING
 The included battery is **non rechargeable**. Please do note that when configuring the device, you have to connect the battery first in order for it to work.
:::

- Connect your RAK7204 LPWAN Environmental Sensor in your Windows Machine using the provided micro-usb cable.

<rk-img
  :src="`${$frontmatter.static_root}/pj5awtxqmofk1km02f8b.jpg`"
  width="70%"
  figure-number="1"
  caption="RAK7204 LPWAN Environmental Sensor to Laptop Connection"
/>


:::warning ⚠️ WARNING
 The pin distance of the battery connector is **2.0mm**. Reverse connection or short circuit may damage the device and may cause overheating and combustion of the battery. Therefore, when replacing the battery, it is necessary to strictly confirm whether the positive and negative poles of the connector are correct.
:::

- Open the RAK Serial Port Tool :

<rk-img
  :src="`${$frontmatter.static_root}/oju7ucgriixkmghcaqxy.png`"
  width="100%"
  figure-number="2"
  caption="RAK Serial Port Tool"
/>

- In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : Windows + R and type `devmgmt.msc` or search in the Start Menu

<rk-img
  :src="`${$frontmatter.static_root}/xjttdlmkzfsh5pg8vwcg.png`"
  width="70%"
  figure-number="3"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) and Find the name Silicon Labs CP210x USB to UART Bridge and take note of the COM Port Number.

:::tip 📝 NOTE:
 If you didn't find any Port with the name Silicon Labs CP210x USB to UART Bridge, make sure you have downloaded the CP210x USB Drivers in your Machine.
:::

- Choose the Correct Port Number from the device manager and the Correct Baudrate then click Open:

<rk-img
  :src="`${$frontmatter.static_root}/nujplxpattmmleoaaghm.png`"
  width="100%"
  figure-number="4"
  caption="Correct Port Number and Correct Baud rate"
/>

<rk-img
  :src="`${$frontmatter.static_root}/w90quzm2ah5civgeojbx.png`"
  width="100%"
  figure-number="5"
  caption="Connection Success"
/>