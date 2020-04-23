---
next: checking-device-logs
---
### Interfacing with Evaluation Board

In order for you to be able to interface with the Evaluation Board, using a Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

:::warning ⚠️ WARNING
Before powering the RAK4600 LPWAN Evaluation Board , you should install the LoRa® and BLE Antenna first. Not doing so might damage the board.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak4600/3.interfacing/u9lgszijijydbyjkgwnx.png"
  width="50%"
  figure-number="1"
  caption="LoRa and BLE Antennas"
/>

- Connect your RAK4600 LPWAN Evaluation Board to your Windows Machine using the provided Micro USB cable.

<rk-img
  src="/assets/images/quick-start-guide/rak4600/3.interfacing/rzolxz9ojiyg0lkqpkqz.png"
  width="50%"
  figure-number="2"
  caption="RAK4600 LPWAN Evaluation Board to Laptop Connection"
/>

- Open the RAK Serial Port Tool :

<rk-img
  src="/assets/images/quick-start-guide/rak4600/3.interfacing/gnm0smmpj2hiaaxv65m2.png"
  width="50%"
  figure-number="3"
  caption="RAK Serial Port Tool"
/>

- In order to choose the correct COM Port number for your device you need to go to your Device Manager by pressing : Windows + R and typing `devmgmt.msc` or search in the Start Menu

<rk-img
  src="/assets/images/quick-start-guide/rak4600/3.interfacing/cj2yhkexwphkmkscqoxb.png"
  width="50%"
  figure-number="4"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) and Find the name **USB-SERIAL CH340** and take note of the COM Port Number.

:::tip 📝 NOTE
If you didn't find any Port with the name USB-Serial CH340, make sure you have instaalled the  the [CH340 Drivers](https:\/\/downloads.rakwireless.com\/LoRa\/RAK811\/Tools\/CH340%20Drive.rar) to your Machine.
:::

- Choose the Correct Port Number from the device manager and the Correct Baud Rate then click Open:

<rk-img
  src="/assets/images/quick-start-guide/rak4600/3.interfacing/gqq1izhoofyqj6ecrgaa.png"
  width="50%"
  figure-number="5"
  caption="Correct Port Number and Correct Baud rate"
/>

