---
static_root: /assets/images/wistrio/rak5010-m/quickstart/5.upgrading-firmware
prev: /wistrio/rak5010-m/quickstart/connecting-cellular-network.html
next: false
---

# Upgrading the Firmware

Before you proceed, it is recommended to keep the RAK5010-M module updated to the latest version of the firmware. [**Download**](https://downloads.rakwireless.com/Cellular/RAK5010/) the latest firmware, manuals, datasheets of the RAK5010-M.

1.Download the latest compiled firmware from the [RAKwireless website](https://downloads.rakwireless.com/Cellular/RAK5010/Firmware/RAK5010-M_Latest_Firmware.zip).

2.The firmware file is in a ".**zip**" format. Decompress it to get a file with "**.hex**" extension.

3.Connect the RAK5010-M module with a computer through JTAG as shown in Figure 1.

<rk-img
  :src="`${$frontmatter.static_root}/1.jtag.jpg`"
  width="100%"
  caption="RAK5010 and PC Connection through JTAG"
/>



4.Connect the micro USB cable to your PC to supply power to the module or use an external 18650 litium batterry.

5.Install J-Link tool on your computer. You can download the software from the [RAKwireless website](https://downloads.rakwireless.com/en/Cellular/Tools/).

6.RAKWireless has prepared a set of scripts to simplify the configuration of the J-Flash tool projects. Download “**RAK itracker flash tool**” from the [website](https://downloads.rakwireless.com/en/Cellular/Tools/).

7.Decompress the "**.zip**" file, you will get a folder as shown as the Figure 2:


<rk-img
  :src="`${$frontmatter.static_root}/2.rak-itracker.jpg`"
  width="75%"
  caption="RAK iTracker flash tool folder"
/>



8.Copy the "**.hex**" file of RAK5010-M from step 2 into the folder shown above. 

9.Rename the firmware file to “**production_final.hex**”.

10.Execute the script “**nrf52840_program.bat**”. 

11.On completion of the flashing process, the J-Flash tool will close automatically.

