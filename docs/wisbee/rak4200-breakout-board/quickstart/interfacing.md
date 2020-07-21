---
next: /wisbee/rak4200-breakout-board/quickstart/connecting-to-ttn/#connecting-to-the-things-network-ttn
---

# Interfacing with RAK4200 LPWAN Breakout Module

In order for you to be able to interface with the RAK4200 LPWAN Evaluation Board with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

::: warning ⚠️ WARNING
Before powering the RAK4200 LPWAN Breakout Module, make sure you have installed the included LoRa\u00ae Antenna. Not doing so might damage the board
:::

- Connect your USB to UART converter to the pin header on the RAK4200 via a set of 4 dupont lines. Use **Figure 1** for reference on wiring the device properly.

<rk-img
  src="/assets/images/wisbee/rak4200-breakout-board/quickstart/interfacing/a6qkw8rluttf89wrzwum.jpg"
  width="100%"
  figure-number="1"
  caption="Powering up and interfacing with the board"
/>

- Go to your Device Manager by pressing: Windows + R and typing devmgmt.msc or search in the Start Menu.

::: tip 📝 NOTE
Windows 10 should recognize the board and automatically install drivers, however if it is missing in the COM & LP ports list you need to manually install the CH340 Drivers.
:::

- Look for Ports (COM & LPT) and Find the name USB-SERIAL CH340 and take note of the COM Port Number as you will need it to connect with the board. You might have another model number but the wording “USB-SERIAL” should be present in some form.

<rk-img
  src="/assets/images/wisbee/rak4200-breakout-board/quickstart/interfacing/tvkkkqpdpkszdf4ioyg6.png"
  width="100%"
  figure-number="2"
  caption="COM Port settings"
/>

- Open the RAK Serial Port Tool. Select the COM Port number (the one you noted in the previous step) and set the **Baud Rate to 115200**. Click “**OPEN**” and you should be connected to the board and be able to send commands.

<rk-img
  src="/assets/images/wisbee/rak4200-breakout-board/quickstart/interfacing/ybo1fczw8uhagao2io7h.png"
  width="100%"
  figure-number="3"
  caption="Configuring the RAK Serial Port Tool"
/>
