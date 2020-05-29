---
next: /en-us/quick-start/rak4600-breakout/connecting-to-ttn/
---

# Interfacing with RAK4600 LPWAN Breakout Module


To interface with the RAK4600 LPWAN Evaluation Board with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**


::: warning ⚠️ WARNING
Before powering the RAK4600 Breakout Module, make sure you have installed the included LoRa®  and BLE antennas. Not doing so might damage the board.
:::

- Connect your USB to UART converter to the pin header on the RAK4600 via a set of 4 dupont lines. Use Figure 1 for reference on wiring the device properly.

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/interfacing/powering-and-interfacing.png"
  width="100%"
  figure-number="1"
  caption="Powering up and interfacing with the board"
/>

- Go to your Device Manager by pressing: Windows + R and typing devmgmt.msc or search in the Start Menu.
-  Look for Ports (**COM & LPT**) and find the name **USB-SERIAL CH340** and take note of the COM Port Number as you will need it to connect with the board.


::: tip 📝 NOTE
Windows 10 should recognize the board and automatically install drivers, however if it is missing in the COM & LP ports list you need to manually install the CH340 Drivers.
:::

- Look for Ports (COM & LPT) and Find the name USB-SERIAL CH340 and take note of the COM Port Number as you will need it to connect with the board. You might have another model number but the wording “USB-SERIAL” should be present in some form.

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/interfacing/com-port-settings.png"
  width="100%"
  figure-number="2"
  caption="COM Port settings"
/>

-  Open the RAK Serial Port Tool. Select the COM Port number (the one you noted in the previous step) and set the **Baud Rate to 115200**. Click “**OPEN**” and you should be connected to the board and be able to send commands.

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/interfacing/configuring-rak-serial-tool.png"
  width="100%"
  figure-number="3"
  caption="Configuring the RAK Serial Port Tool"
/>


