---
static_root: /assets/images/quick-start-guide/rak4200/3.interfacing/
---

# Interfacing with RAK4200 LPWAN Evaluation Board

In order for you to be able to interface with the RAK4200 LPWAN Evaluation Board with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

::: warning ⚠️ WARNING
Before powering the RAK4200 LPWAN Evaluation Board , you should install the LoRa antenna first . Not doing so might damage the board
:::

- Connect your RAK4200 LPWAN Evaluation Board in your Windows Machine using the provided micro-usb cable.
<rk-img
  :src="`${$frontmatter.static_root}/kq51hnmw5xoquykfd1dw.png`"
  width="70%"
  figure-number="1"
  caption="RAK4200 LPWAN Evaluation Board to Laptop Connection"
/>

- Open the RAK Serial Port Tool : 
<rk-img
  :src="`${$frontmatter.static_root}/gnm0smmpj2hiaaxv65m2.png`"
  width="100%"
  figure-number="2"
  caption="RAK Serial Port Tool"
/>

- In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : Windows + R and type `devmgmt.msc` or search in the Start Menu.

<rk-img
  :src="`${$frontmatter.static_root}/cj2yhkexwphkmkscqoxb.png`"
  width="100%"
  figure-number="3"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) and Find the name **USB-SERIAL CH340** and take note of the COM Port Number. 

::: tip 📝 NOTE
If you didn't find any Port with the name USB-Serial CH340, make sure you have downloaded the CH340 Drivers in your Machine.
:::

- Choose the Correct Port Number from the device manager and the Correct Baudrate then click Open:

<rk-img
  :src="`${$frontmatter.static_root}/gqq1izhoofyqj6ecrgaa.png`"
  width="100%"
  figure-number="4"
  caption="Correct Port Number and Correct Baud rate"
/>