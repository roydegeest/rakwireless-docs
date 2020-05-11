---
next: /en-us/quick-start/rak4260-breakout/connecting-to-ttn/
---

# Interfacing with RAK4260 LPWAN Breakout Module

::: warning ⚠️ WARNING
Before powering the RAK4260 Breakout Module, make sure you have installed the included LoRa® Antenna. Not doing so might damage the board.
:::

## USB to UART


- Connect your USB to UART converter to the pin header on the RAK4260 via a set of 4 dupont lines. Use Figure 1 for reference on wiring the device properly.

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/interfacing/powering-and-interfacing-with-the-board.png"
  width="100%"
  figure-number="1"
  caption="Powering up and interfacing with the board"
/>

- Go to your Device Manager by pressing: **Windows + R** and typing **devmgmt.msc**, or search in the Start Menu.
- Look for Ports (**COM & LPT**) and find the name **USB-SERIAL CH340** and take note of the COM Port Number as you will need it to connect with the board.

:::tip 📝 NOTE
Windows 10 should recognize the board and automatically install drivers, however, if it is missing in the COM & LP ports list you need to manually install the CH340 Drivers.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/interfacing/com-port-settings.png"
  width="75%"
  figure-number="2"
  caption="COM Port settings"
/>

- Open the RAK Serial Port Tool. Select the COM Port number (the one you noted in the previous step) and set the **Baud Rate to 115200**. Click “**OPEN**” and you should be connected to the board and be able to send commands.

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/interfacing/configuring-the-rak-serial-port-tool.png"
  width="75%"
  figure-number="3"
  caption="Configuring the RAK Serial Port Tool"
/>

## J-Link Connection

Connect the tool in accordance with the diagram shown in Figure 4.

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/interfacing/jlink-to-rak4260-breakout.png"
  width="75%"
  figure-number="4"
  caption="J-Link to RAK4260 LPWAN Breakout Module"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/interfacing/jlink-connection.png"
  width="75%"
  figure-number="5"
  caption="J-link connection"
/>


