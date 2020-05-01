# Upgrading the Firmware

The following steps show you how to update the firmware for RAK4600 LPWAN Breakout Module.

1 Download and install the software needed in your PC:

- [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
- [RAK Firmware Upgrade Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_Upgrade_Tool_V1.0.rar)
- [RAK4600 Firmware](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/RAK4600_V3.0.0.8.rar)

2 Connect your RAK4600 LPWAN Breakout Module in your windows machine as instructed in the [Interfacing with RAK4600 LPWAN Breakout Module.](/en-us/quick-start/rak4600-breakout/interfacing.html)

3 Open the RAK Serial Port Tool you have just installed and let RAK4600 work in boot mode by setting an AT command through serial port as follows:

```bash
at+set_config=device:boot
```

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/firmware/boot-mode.jpg"
  figure-number="1"
  caption="Entering Boot Mode"
/>

4 Close RAK serial port tool and open RAK firmware upgrade tool on your PC. Make sure to choose the correct COM Port.

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/firmware/firmware-upgrade-tool.jpg"
  figure-number="2"
  caption="RAK Firmware Upgrade Tool"
/>

5 Click “**Choose File**” button to choose a correct upgrade file:

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/firmware/correct-upgrade-file.jpg"
  figure-number="3"
  caption="Choosing the Correct Upgrade file"
/>

6 Click “**Start**” to upgrade, this may take a minute:

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/firmware/firmware-upgrading.jpg"
  figure-number="4"
  caption="Firmware Upgrading in Process"
/>


7 You should see something like the image below if everything went well.

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/firmware/successfully-upgraded-firmware.jpg"
  figure-number="5"
  caption="Successfully Upgraded Firmware"
/>


8 CLOSE the Firmware Upgrade Tool and OPEN the RAK Serial Port Tool again.

9 Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart.

```bash
at+set_config=device:restart
```
<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/firmware/restarting-device.jpg"
  figure-number="6"
  caption="Restarting your Device"
/>


This information means that you have uploaded the Firmware successfully!

