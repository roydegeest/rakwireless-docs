---
static_root: /assets/images/quick-start-guide/rak5205-7205/interfacing-with
---

# Interfacing with the RAK7205/RAK5205 WisTrio LPWAN Tracker

In order for you to be able to interface with the RAK7205/RAK5205 WisTrio LPWAN Tracker with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

::: warning ⚠️ WARNING
Before powering the RAK5205 , you should install the LoRa® and GPS antenna first . Not doing so might damage the board
:::

- Connect your RAK5205 WisTrio LPWAN Tracker in your Windows Machine using the provided micro-usb cable.
- Open the RAK Serial Port Tool :

<rk-img
  :src="`${$frontmatter.static_root}/teufuzsi3aykwmda4un2.png`"
  width="100%"
  figure-number="1"
  caption="RAK Serial Port Tool"
/>

- In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : Windows + R and type devmgmt.msc or search in the Start Menu

<rk-img
  :src="`${$frontmatter.static_root}/jnsaeljcwqk3gnxjvgum.png`"
  width="90%"
  figure-number="2"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) and Find the name Silicon Labs CP210X USB to UART Bridge and take note of the COM Port Number.

::: tip 📝 NOTE
If you didn't find any Port with the name Silicon Labs CP210X , make sure you have downloaded the CP210X Drivers in your Machine.
:::

- Choose the Correct Port Number from the device manager and the Correct BaudRate then click Open:

<rk-img
  :src="`${$frontmatter.static_root}/ipc7wkiipcbsfrgvtm9e.png`"
  width="100%"
  figure-number="3"
  caption="Correct COM Port and Baudrate"
/>
