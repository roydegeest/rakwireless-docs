---
prev: /wisnode/rak612/quickstart/
next: /wisnode/rak612/quickstart/connecting-to-ttn/
---

# Interfacing with RAK612 LPWAN Button

In order for you to be able to interface with the RAK612 LPWAN Button with your Windows Machine, you need to download the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

1. Using a standard **Micro - USB Cable**, connect your RAK612 LPWAN Button to your computer.

:::tip 📝 NOTE
If this is your first time to connect your RAK612 LPWAN Button to your computer, it should automatically download the CH340 driver in order for them to communicate properly. Make sure to have an internet access if you want such automatic installation to be successful. If such process fails, re-plug your Micro - USB cord and proceed to the next step."
:::

2. Go to your **Device Manager** by pressing : **Windows + R** and type `devmgmt.msc` or **search in Start Menu** or right click "**My Computer**" or "**This PC**" and click **Manage**. Look for **Other Devices.**

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/missing-driver.png"
  width="100%"
  figure-number="1"
  caption="Missing Driver for theRAK612 LPWAN Button"
/>

3. Under "**Other devices**" drop down list, an unknown **USB2.0-Serial** driver must appear. Right click into it and choose "**Search automaticaly for updated driver software**". Again, before doing so, make sure to have an internet access or it will fail.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/automatic-install.png"
  width="100%"
  figure-number="2"
  caption="Automatic Driver Installation via Internet"
/>

4. Wait for it to automatically download and install the missing driver. Once installation is done, "**USB-SERIAL CH340**" must appear in the **Ports (COM & LPT)** drop down list. Take note of the COM Port associated with the driver as it will be used in the succeeding steps. For this sample process, the COM Port used by the USB-SERIAL CH340 driver is **COM4**.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/usb-ch340.png"
  width="100%"
  figure-number="3"
  caption="USB-SERIAL CH340 Driver Successfully Installed"
/>

:::tip 📝 NOTE
In case the driver is still not installed upon doing the previous steps, kindly download the driver manually through this [link](https://downloads.rakwireless.com/LoRa/RAK811/Tools/).
:::

5. Let us now test if your RAK612 LPWAN Button can now communicate with the RAK Serial Port Tool. Connect with the RAK Serial Port Tool using the parameters listed below and click "**Open**".

   - **COM**: Choose the COMPort associated with the USB-SERIAL CH340 from the previous step. For this tutorial, the COM Port is COM4.
   - **Baud Rate**: **115200** bps

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/rak-serial.png"
  width="100%"
  figure-number="4"
  caption="Connecting to the RAK Serial Port Tool"
/>

6. To verify connectivity, let's try sending AT+Commands. In the RAK Serial Port Tool, there are built-in AT+Commands within it at the right side. Try sending the code below to check the firmware version of your RAK612 LPWAN Button. If connection is successful, in the monitor panel at the left, the firmware version should appear same with the image shown below:

```
at+version
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/at-comm.png"
  width="100%"
  figure-number="5"
  caption="AT+Command Sample Serial Communication Test"
/>

Congratulations! :tada: You have just successfully interfaced your RAK612 LPWAN Button with your computer!
