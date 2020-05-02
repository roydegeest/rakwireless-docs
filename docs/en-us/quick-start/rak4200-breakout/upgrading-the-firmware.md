# Upgrading the Firmware

The following steps show you how to update the firmware for RAK4200 LPWAN Breakout Module.

1. Download and install the software needed in your PC:

- [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
- [RAK Firmware Upgrade Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_Upgrade_Tool_V1.0.rar)
- [RAK4200 Firmware](https://downloads.rakwireless.com/en/LoRa/RAK4200/Firmware/RAK4200_V3.2.0.12.rar)

2. Connect your RAK4200 LPWAN Breakout Module into your windows machine as instructed in the [Interfacing with RAK4200 LPWAN Breakout Module](/en-us/quick-start/rak4200-breakout/interfacing.html)

3. Open the RAK Serial Port Tool you have just installed and let RAK4200 work in boot mode by setting an AT command through serial port as follows:

```
at+set_config=device:boot
```

<rk-img
  src="/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/boot-mode.jpg"
  width="65%"
  figure-number="1"
  caption="Entering Boot Mode"
/>

4. Close RAK serial port tool and open RAK firmware upgrade tool on your PC. Make sure to choose the correct COM Port.

<rk-img
  src="/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/rak-upgrade-tool.jpg"
  width="80%"
  figure-number="2"
  caption="RAK Firmware Upgrade Tool"
/>

5. Click “**Choose File**” button to choose a correct upgrade file:

<rk-img
  src="/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/upgrade-file.jpg"
  width="80%"
  figure-number="3"
  caption="Choosing the Correct Upgrade file"
/>

6. Click “**Start**” to upgrade, this may take a minute:

<rk-img
  src="/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/upgrade-process.jpg"
  width="80%"
  figure-number="4"
  caption="Firmware Upgrading in Process"
/>

7. You should see something like the image below if everything went well.

<rk-img
  src="/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/successful-upgrade.jpg"
  width="80%"
  figure-number="5"
  caption="Successfully Upgraded Firmware"
/>

8. CLOSE the Firmware Upgrade Tool and OPEN the RAK Serial Port Tool again.

9. Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart.

```
at+set_config=device:restart
```

<rk-img
  src="/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/device-restart.jpg"
  width="65%"
  figure-number="6"
  caption="Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully!

