---
static_root: /assets/images/quick-start-guide/rak811/upgrading-the-firmware
prev: /wisduino/rak811-evaluation-board/quickstart/at-commands.html
next: /wisduino/rak811-evaluation-board/quickstart/rui-online-compiler.html
---

# Upgrading the Firmware

If the firmware version of your RAK811 LPWAN Evaluation Board is newer than V3.0.0.0 or you have just burned the bootloader into RAK811 LPWAN Evaluation Board according to the [Burning Bootloader into the Device](https://doc.rakwireless.com/rak811-lora---evaluation-board/burning-the-bootloader-into-the-device) document, proceed to **Step 2**.

1. In case you have not just burned the bootloader as instructed in the previous section, you need to manually go into **boot mode**. Connect you board via the USB interface and enter the following **AT command** after you have connected via the proper COM port:

::: tip 📝 NOTE
Make sure to choose the correct port in the COM Port field. You can check this in the [Interfacing with RAK 811 Development Board](interfacing-with-rak811.html) document.
:::

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
  width="100%"
  figure-number="2"
  caption="RAK Upgrade Tool"
/>

3. Click “**Choose File**” and choose the firmware you have downloaded for your desired frequency band.

<rk-img
  :src="`${$frontmatter.static_root}/nguqg8huem2urdte26ub.png`"
  width="100%"
  figure-number="3"
  caption="Choosing the Correct Upgrade file"
/>

4. Click “**Start**” to upgrade, this may take a minute:

<rk-img
  :src="`${$frontmatter.static_root}/wjdxnmvu2bwkjfj2rgmd.png`"
  width="100%"
  figure-number="4"
  caption="Firmware Upgrading in Process"
/>

5. You should see something like the image in **Figure 5**, if everything went well.

<rk-img
  :src="`${$frontmatter.static_root}/e7dcwivj7lv7zupcekok.jpg`"
  width="100%"
  figure-number="5"
  caption="Successfully Upgraded Firmware"
/>

6. Now, **CLOSE** the upgrade tool and **OPEN** the serial port too, again.

7. Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart. Another option is to press the **RST** button on the RAK811 LPWAN Evaluation Board.

```bash
at+set_config=device:restart
```

<rk-img
  :src="`${$frontmatter.static_root}/x0fsjpi4xc4hmatdcmyk.jpg`"
  width="60%"
  figure-number="6"
  caption="Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully!

If you want to configure your RAK811 LPWAN Evaluation Board using the available **AT commands**, check the [Configuring your RAK811 Evaluation Board](configuring-your-rak811.html) document.
