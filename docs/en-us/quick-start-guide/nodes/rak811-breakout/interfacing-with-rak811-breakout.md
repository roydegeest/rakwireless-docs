---
static_root: /assets/images/quick-start-guide/rak811-breakout/interfacing-with-rak811-breakout
next: /en-us/quick-start-guide/nodes/rak811-breakout/connecting-to-ttn/
---

# Interfacing with RAK811 LPWAN Breakout Module

In order for you to be able to interface with the RAK811 LPWAN Breakout Module with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

::: warning ⚠️ WARNING
Before powering the RAK811 LPWAN Breakout Module , you should install the LoRa antenna first . Not doing so might damage the board
:::

- Connect your RAK811 LPWAN Breakout Board with the following diagram below.
- **Figure 1** shows the Pinout Diagram of the Board and **Figure 2** shows how to connect the RAK811 LPWAN Breakout Board to the UART Module.

<rk-img
  :src="`${$frontmatter.static_root}/pinout_diagram.png`"
  width="85%"
  figure-number="1"
  caption="RAK811 LPWAN Breakout Module Pinout Diagram"
/>

<rk-img
  :src="`${$frontmatter.static_root}/a5vvi5oofgnq7mwpiavn.jpg`"
  width="100%"
  figure-number="2"
  caption="RAK811 to USB Uart Module Connection"
/>

- Connect your USB - UART Module to your Windows Machine and Open RAK Serial Port Tool:

<rk-img
  :src="`${$frontmatter.static_root}/ou15nrdveyhmrzo8byof.png`"
  width="100%"
  figure-number="3"
  caption="RAK Serial Port Tool"
/>

- In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : Windows + R and type `devmgmt.msc` or search in the Start Menu

<rk-img
  :src="`${$frontmatter.static_root}/siqhrem8xxxnvhj7vttn.png`"
  width="100%"
  figure-number="4"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) . Find the name of of your USB UART Module driver and take note of the COM Port Number.

<rk-img
  :src="`${$frontmatter.static_root}/rib8pvikbtggt9xryvxp.png`"
  width="100%"
  figure-number="5"
  caption="Correct Port Number and Correct Baud rate"
/>
