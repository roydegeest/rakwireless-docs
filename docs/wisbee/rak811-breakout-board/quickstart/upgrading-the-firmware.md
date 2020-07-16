---
static_root: /assets/images/quick-start-guide/rak811-breakout/upgrading-the-firmware
previous: /wisbee/rak811-breakout-board/quickstart/at-commands
next: false
---

# Upgrading the Firmware

If the firmware version of your **RAK811 LPWAN** **Breakout Module** is newer than V3.0.0.0 or you have just burned the bootloader into RAK811 LPWAN Breakout Board according to the **Burning Bootloader into the Device** section, proceed to Step 2.

1. In case you have not just burned the bootloader, as instructed in the previous section you need to manually go into **boot mode**. Connect you board via the USB interface and enter the following **AT command** after you have connected via the proper COM port:

```bash
at+set_config=device:boot
```

<rk-img
  :src="`${$frontmatter.static_root}/vbshextj0q190mzk6hhf.jpg`"
  width="60%"
  figure-number="1"
  caption="Entering Boot Mode"
/>

2. Download the **RAK Upgrade Tool** from the RAKwireless website **[here](https://downloads.rakwireless.com/en/LoRa/RAK612-LoRaButton/Tools/RAK%20LoRaButton%20Upgrade%20Tool%20V1.0.zip)**. Then, open the tool. Again don't forget to choose the correct port!

<rk-img
  :src="`${$frontmatter.static_root}/e9ratal5kgle1mwh4ufu.png`"
  width="90%"
  figure-number="2"
  caption="RAK Upgrade Tool"
/>

3. Click “**Choose File**” and choose the firmware you have downloaded for your desired frequency band.

<rk-img
  :src="`${$frontmatter.static_root}/nguqg8huem2urdte26ub.png`"
  width="90%"
  figure-number="3"
  caption="Choosing the Correct Upgrade file"
/>

4. Click “**Start**” to upgrade, this may take a minute:

<rk-img
  :src="`${$frontmatter.static_root}/wjdxnmvu2bwkjfj2rgmd.png`"
  width="90%"
  figure-number="4"
  caption="Firmware Upgrading in Process"
/>

5. You should see something like the image in Figure 5, if everything went well.

<rk-img
  :src="`${$frontmatter.static_root}/e7dcwivj7lv7zupcekok.jpg`"
  width="90%"
  figure-number="5"
  caption="Successfully Upgraded Firmware"
/>

6. Now, **CLOSE** the upgrade tool and **OPEN** the serial port too, again.

- We recommend you to use RAK serial port tool, because there are some ready AT commands in this tool and this will be very useful for you. You can get it from RAK website available for free at this **[RAK directory](https://downloads.rakwireless.com/en/LoRa/RAK811/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)**.

7. Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart. Another option is to press the **RST** button on the RAK811 LPWAN Breakout Module.

```bash
at+set_config=device:restart
```

<rk-img
  :src="`${$frontmatter.static_root}/x0fsjpi4xc4hmatdcmyk.jpg`"
  width="90%"
  figure-number="6"
  caption="Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully!

If you want to configure your RAK811 LPWAN Breakout Module using the available **AT commands**, check [AT Commands for RAK811 LPWAN Breakout Module](/wisbee/rak811-breakout-board/quickstart/at-commands/).
