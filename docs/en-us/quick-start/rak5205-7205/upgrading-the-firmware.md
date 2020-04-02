---
static_root: /assets/images/quick-start-guide/rak5205-7205/upgrading-the-firmware
---

# Upgrading the Firmware

If the firmware version of your RAK5205 WisTrio LPWAN Tracker is newer than V3.0.0.0 or you have just burned the bootloader into RAK5205 WisTrio LPWAN Tracker according to the Burning Bootloader into the Device section, you just need to burn the upgrade firmware according to the following steps now:

- First, type the command to let the RAK5205 WisTrio LPWAN Tracker work in boot mode.

::: tip Note
If you have just burned the bootloader by
yourself according to the section 2, it works in boot mode now. If the current version of
the RAK5205’s firmware is newer than V3.0.0.0, you need to set an AT command
to let it work in boot mode
:::

```bash
at+set_config=device:boot
```

<rk-img
  :src="`${$frontmatter.static_root}/ak6dmrbeykbyxktghplr.jpg`"
  width="60%"
  figure-number="1"
  caption="Turning the Boot Mode on"
/>

- Next, close the serial port tool and download the **RAK Upgrade Tool** from this **[website](https://downloads.rakwireless.com/en/LoRa/RAK612-LoRaButton/Tools/RAK%20LoRaButton%20Upgrade%20Tool%20V1.0.zip)**. Then, extract and open the tool.

<rk-img
  :src="`${$frontmatter.static_root}/bhnagxk2lyikpa1rqpmd.jpg`"
  width="80%"
  figure-number="2"
  caption="RAK Upgrade Tool"
/>

- Click “**Choose File**” button to choose the correct upgrade file:

<rk-img
  :src="`${$frontmatter.static_root}/xy32xtmb8urj28pk1cr0.jpg`"
  width="80%"
  figure-number="3"
  caption="Choosing the Correct Upgrade file"
/>

- Click “**Start**” to upgrade, this may take a minute:

<rk-img
  :src="`${$frontmatter.static_root}/nbn7qmum5do7ivvvva3m.jpg`"
  width="80%"
  figure-number="4"
  caption="Start Upgrading your Firmware"
/>

<rk-img
  :src="`${$frontmatter.static_root}/eprjekj8xxk77om7vbw3.jpg`"
  width="80%"
  figure-number="5"
  caption="Successfully Upgraded your Firmware"
/>

- Now, close the upgrade tool and open a serial port tool.
- We recommend you to use RAK serial port tool, because there are some ready AT commands in this tool and this will be very useful for you. You can get it from RAK website available for free at this[**RAK directory**](https://downloads.rakwireless.com/en/LoRa/RAK811/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).
- Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command to restart.

```bash
at+set_config=device:restart
```

<rk-img
  :src="`${$frontmatter.static_root}/nrnvbjsxvodttrumo7x9.jpg`"
  width="60%"
  figure-number="6"
  caption="Restarting your Firmware"
/>

**Congratulation**! This information means that you have upgraded successfully the new firmware.
