# Upgrading the Firmware

Device Firmware Upgrade or DFU is a tool in upgrading your firmware. It is part of the [GitHub Open Source](https://github.com/RAKWireless/RAK813-BreakBoard) project you downloaded for upgrading the firmware of your IAR and Keil Compiler. 

<rk-img
  src="/assets/images/quick-start-guide/rak815/7upgrading-the-firmware/dfu-file-location.jpg"
  width="100%"
  figure-number="1"
  caption="DFU File Location"
/>

* We provide users with hex files, which users can find in the open source project Doc folder:

<rk-img
  src="/assets/images/quick-start-guide/rak815/7upgrading-the-firmware/dfu-hex-files.jpg"
  width="100%"
  figure-number="2"
  caption="DFU Hex Files"
/>

* However, it should be noted that using the DFU function of the nRF, unlike the previous firmware programming method, the bootloader firmware must be programmed. Therefore, three firmwares need to be programmed to use the DFU function. They are the Bluetooth protocol stack firmware, the DFU application firmware, and the bootload firmware. Bootload firmware can be found in open source functions.

:::tip 📝 NOTE
For details on how to program the Bluetooth protocol stack and application firmware, review the [Device Firmware Setup](device-firmware-setup.html).
:::

* The following figure shows how to program bootloader firmware:

<rk-img
  src="/assets/images/quick-start-guide/rak815/7upgrading-the-firmware/programming-bootloader.jpg"
  width="100%"
  figure-number="3"
  caption="Programming Bootloader Firmware"
/>

* After all firmware are written, the device will automatically restart. At this time, use your
mobile phone Bluetooth scan, you will see a device named "**RAK813_DFU**".

<rk-img
  src="/assets/images/quick-start-guide/rak815/7upgrading-the-firmware/rak813-ble-radio.jpg"
  width="50%"
  figure-number="4"
  caption="RAK813 DFU Bluetooth Radio"
/>

* Use the nRF official phone app nRF Connect to connect to the device's Bluetooth. 

* To upgrade the firmware, you need to import the upgraded firmware to your mobile phone. The upgrade file, a zip file, is accessible from the downloaded open source code by following this directory: **RAK813-BreakBoard-master**>> **Doc**>> **Hex**>> **rak815_app_package.zip**. Copy this sample upgrade file to your mobile phone. 

<rk-img
  src="/assets/images/quick-start-guide/rak815/7upgrading-the-firmware/dfu-app-package-zip.jpg"
  width="100%"
  figure-number="5"
  caption="DFU App Package Zip File"
/>

:::tip 📝 NOTE
About how to make an upgraded zip file, and how to program DFU step by step, visit the official forum detailing the method. Interested parties can view this [link](https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/getting-started-with-nordics-secure-dfu-bootloader).
:::

* Open the nRF app and press "**CONNECT**" button in the **RAK813_DFU** Bluetooth. Then, click the **DFU** icon in the
upper right corner.

<rk-img
  src="/assets/images/quick-start-guide/rak815/7upgrading-the-firmware/connecting-rak813-dfu.jpg"
  width="100%"
  figure-number="6"
  caption="Connecting to RAK813 DFU"
/>

* Select the **rak815_app_package.zip** file, and the device will automatically start upgrading the firmware. 

<rk-img
  src="/assets/images/quick-start-guide/rak815/7upgrading-the-firmware/import-upgrade-zip-file.jpg"
  width="100%"
  figure-number="7"
  caption="Importing the Upgrade Zip File"
/>

* At this point, the program will jump to the bootload and execute the bootload. Then click on the
RAK813_DFU as highlighted in the figure to the right, you can see the progress of the program sent.

<rk-img
  src="/assets/images/quick-start-guide/rak815/7upgrading-the-firmware/upgrade-progress-chart.jpg"
  width="100%"
  figure-number="8"
  caption="Upgrade Progress Chart"
/>


* After the program upgrade is complete, reset the device and you will see that your device's Bluetooth broadcast name has changed.

<rk-img
  src="/assets/images/quick-start-guide/rak815/7upgrading-the-firmware/dev-ble-boardcast-changes.jpg"
  width="50%"
  figure-number="9"
  caption="Device's Bluetooth Broadcast Changes"
/>

Congratulations! :tada: You have completed the RAK815 Hybrid Location Tracker Configuration and successfully upgraded the firmware. You are now ready to try your own projects using the device.

