---
static_root: /assets/images/quick-start-guide/rak7200/upgrading-the-firmware
---

# Upgrading the Firmware

If the firmware version of your **RAK7200 LPWAN Tracker** is newer than V3.0.0.0 or you have just burned the bootloader into the board according to the **Burning the Bootloader** section, proceed to Step 2.

1.In case you have not just burned the bootloader, as instructed in the previous section you need to manually go into **boot mode**. Open and download the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/WisTrio-LoRa-RAK5205/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip). Connect your board via the USB interface and enter the following **AT command**

```bash
at+set_config=device:boot
```

<rk-img
  :src="`${$frontmatter.static_root}/ztbivhcsnzfbso1czs4r.jpg`"
  width="100%"
  figure-number="1"
  caption="Entering Boot Mode"
/>

2.Download the **RAK Upgrade Tool** from the RAKwireless website [here](https://downloads.rakwireless.com/en/LoRa/RAK612-LoRaButton/Tools/RAK%20LoRaButton%20Upgrade%20Tool%20V1.0.zip) then, open the tool. Again, don't forget to choose the correct port! Open the [Interfacing with RAK7200](interfacing-with-rak7200.html) to know the appropriate COM Port used.

<rk-img
  :src="`${$frontmatter.static_root}/wgif92xy3kpypvwj78p2.jpg`"
  width="90%"
  figure-number="2"
  caption="RAK Upgrade Tool"
/>

3.Download the latest RAK7200 Firmware **[here](https://downloads.rakwireless.com/en/LoRa/RAK7200-Tracker/Firmware/)**. Click “**Choose File**” and choose the firmware you have just downloaded. Make sure you choose the one for your particular band:

<rk-img
  :src="`${$frontmatter.static_root}/s1dr3hct65lnxow3cequ.jpg`"
  width="90%"
  figure-number="3"
  caption="Choosing the Correct Firmware file"
/>

4.Click “**Start**” to upload the Firmware, this may take a minute:

<rk-img
  :src="`${$frontmatter.static_root}/vx4irgqjudaszyizfebc.jpg`"
  width="90%"
  figure-number="4"
  caption="Firmware Upgrading in Process"
/>

5.You should see something like the image in **Figure 5**, if everything went well.

<rk-img
  :src="`${$frontmatter.static_root}/ocithbe0at1h3augu9yo.jpg`"
  width="90%"
  figure-number="5"
  caption=" Successfully Upgraded Firmware"
/>

6.Now, **CLOSE** the upgrade tool and **and proceed to the next section.**

## Testing the Installed Firmware

7.In order for you to check if you have successfully installed the firmware on your RAK7200 LPWAN Tracker, open the Serial Port tool again. Press the "Reset button" or type the command below. If everything works perfectly, you should see the following message below:

```bash
at+set_config=device:restart
```

<rk-img
  :src="`${$frontmatter.static_root}/rbw7qdu20f4yybdks7di.jpg`"
  width="100%"
  figure-number="6"
  caption=" Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully!

You can also configure your RAK7200 LPWAN Tracker Board using the available AT Commands listed in the [Configuring the RAK7200 using AT Commands](configuring-the-rak7200.html) section.
