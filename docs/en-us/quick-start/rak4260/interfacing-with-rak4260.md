# Interfacing with the RAK4260 LPWAN Evaluation Board

In order for you to be able to interface with the RAK4260 LPWAN Evaluation Board with your Windows Machine and check if you have successfully burned the custom firmware provided by RAKwireless correctly, download the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

:::warning
:warning: Before powering the RAK4260 LPWAN Evaluation Board , you should install the LoRa antenna first . Not doing so might damage the board
:::

1. Connect your RAK4260 LPWAN Evaluation Board in your Windows Machine using the provided micro-usb cable. 

<rk-img
  src="/assets/images/quick-start-guide/rak4260/4interfacing-with-rak4260/rak4260-laptop.png"
  width="60%"
  figure-number="1"
  caption="RAK4260 LPWAN Evaluation Board to Laptop Connection"
/>
 
2. Open the RAK Serial Port Tool:

<rk-img
  src="/assets/images/quick-start-guide/rak4260/4interfacing-with-rak4260/rak-serial-port-tool.png"
  width="100%"
  figure-number="2"
  caption="RAK Serial Port Tool"
/>

3. In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : **Windows + R** and type `devmgmt.msc` or search in the Start Menu.

<rk-img
  src="/assets/images/quick-start-guide/rak4260/4interfacing-with-rak4260/device-manager.png"
  width="100%"
  figure-number="3"
  caption="Device Manager"
/>

4. Look for Ports (COM & LPT) and Find the name **USB-SERIAL CH340** and take note of the COM Port Number.

:::tip Note:
:pencil: If you didn't find any Port with the name USB-Serial CH340, make sure you have downloaded the CH340 Drivers in your Machine.
:::

5. Choose the Correct Port Number from the device manager and the Correct Baudrate then click Open:

<rk-img
  src="/assets/images/quick-start-guide/rak4260/4interfacing-with-rak4260/correct-port-and-baudrate.png"
  width="100%"
  figure-number="4"
  caption="Correct Port Number and Correct Baud rate"
/>
