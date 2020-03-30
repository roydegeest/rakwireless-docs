# Interfacing with RAK815 Hybrid Location Tracker

In order for you to interface with the RAK815 Hybrid Location Tracker with your Windows Machine, you need to download the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

:::warning
:warning: Before powering the RAK815 Hybrid Location Tracker, you should install the LoRa antenna first . Not doing so might damage the board
:::

1. Using a standard **Micro - USB Cable**, connect your RAK815 Hybrid Location Tracker to your computer.

:::tip Note:
:pencil: If this is your first time to connect your RAK815 Hybrid Location Tracker to your computer, it should automatically download the USB - Serial Port Chip CP2102, in order for them to communicate propperly. Make sure to have an internet access if you want such automatic installation to be successful. If such process fails, re-plug your Micro - USB cord and proceed to the next step.
:::

2. Go to your **Device Manager** by pressing : **Windows + R** and type `devmgmt.msc` or **search in Start Menu** or right click "**My Computer**" or "**This PC**" and click **Manage**. Look for Other Devices.

<rk-img
  src="/assets/images/quick-start-guide/rak815/3interfacing/serial-driver.png"
  width="100%"
  figure-number="1"
  caption="Missing Driver for the RAK815 Hybrid Location Tracker"
/>

3. Under "**Other devices**" drop down list, an unknown **USB2.0-Serial** driver must appear. Right click into it and choose "**Search automaticaly for updated driver software**". Again, before doing so, make sure to have an internet access or it will fail.

<rk-img
  src="/assets/images/quick-start-guide/rak815/3interfacing/automatic-install.png"
  width="100%"
  figure-number="2"
  caption="Automatic Driver Installation via Internet"
/>

4. Wait for it to automatically download and install the missing driver. Once installation is done, "**Silicon Labs CP210x USB to UART Bridge**" must appear in the **Ports (COM & LPT)** drop down list. Take note of the COM Port associated with the driver as it will be used in the succeeding steps. For this sample process, the COM Port used by the USB - Serial Port Chip CP2102 driver is **COM41**.

<rk-img
  src="/assets/images/quick-start-guide/rak815/3interfacing/cp210x-driver.jpg"
  width="75%"
  figure-number="3"
  caption="USB - Serial Port Chip CP2102 Driver Successfully Installed"
/>

:::tip Note:
:pencil:In case the previous measures mentioned beforehand does not install the needed driver, go to the [USB - Serial Port Chip CP2102](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) website to manually download and install it.
:::

Congratulations! :tada: You have just successfully interfaced your RAK815 Hybrid Location Tracker with your computer!


