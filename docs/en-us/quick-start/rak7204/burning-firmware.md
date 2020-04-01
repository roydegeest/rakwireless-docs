---
static_root: /assets/images/quick-start-guide/rak7204/10.burning-firmware/
---
# Burning the Firmware

If the firmware version of your **RAK7204 LPWAN Environmental Sensor**  is newer than V3.0.0.0 or you have just burned the bootloader into the board according to the **Burning the Bootloader** section, follow the steps below

- Make sure you have set your RAK7204 to work in boot mode. If you have just burned the bootloader according to the previous section, it works in boot mode now. 
- Open and download the RAK Serial Port Tool [Here](https://downloads.rakwireless.com/en/LoRa/WisTrio-LoRa-RAK5205/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip) and Connect your board via the USB interface and enter the following **AT command** to let it work in boot mode.

:::warning
:warning: Before configuring your RAK7204, make sure you already connected the Battery provided  on your device in order for you to communicate with the device successfully.
:::

```
at+set_config=device:boot
```

<rk-img
  :src="`${$frontmatter.static_root}/jvuee0euhsqbsdnkd7cw.jpg`"
  width="100%"
  figure-number="1"
  caption="Entering Boot Mode"
/>

- Download the **RAK Upgrade Tool** from the RAKwireless website [here](https://downloads.rakwireless.com/en/LoRa/RAK612-LoRaButton/Tools/RAK%20LoRaButton%20Upgrade%20Tool%20V1.0.zip) then, open the tool. 

<rk-img
  :src="`${$frontmatter.static_root}/txi7skysk8gtingjysud.jpg`"
  width="80%"
  figure-number="2"
  caption="RAK Upgrade Tool"
/>

- Download the latest firmware [here](https://downloads.rakwireless.com/en/LoRa/RAK7204/Firmware/) for the RAK7204

:::tip Note:
:pencil: Make sure to pick the appropriate bin file depending on the region you are in.
- "RUI_RAK7204_V3.x.x.x.H" supported regions are: IN865, EU868, US915, AU915, KR920, AS920, AS923
- "RUI_RAK7204_V3.x.x.x.L” supported regions are: EU433, CN470
Visit this [article](https:\/\/www.thethingsnetwork.org\/docs\/lorawan\/frequencies-by-country.html) for more information on your local TTN frequency plan.
:::

- Click "Choose File" then choose the firmware that you have just downloaded: 

<rk-img
  :src="`${$frontmatter.static_root}/hs89oyvlean3zvhjxlwe.jpg`"
  width="80%"
  figure-number="3"
  caption="Choosing the Correct Firmware file"
/>

<rk-img
  :src="`${$frontmatter.static_root}/d5xgxy7cj8ic7qvglecl.jpg`"
  width="80%"
  figure-number="4"
  caption="Start Upgrade"
/>

- Choose the correct "**COM Port**", then click Start to Upgrade and wait for a couple of minutes. If it won't start, push the reset button on your RAK7204.

<rk-img
  :src="`${$frontmatter.static_root}/aqblsh1kqm0nud2obujb.jpg`"
  width="80%"
  figure-number="5"
  caption="Firmware Upgrading in Process"
/>

<rk-img
  :src="`${$frontmatter.static_root}/ih6llchh4ao5vxxjilyv.jpg`"
  width="80%"
  figure-number="6"
  caption="Firmware Upgrade Finished"
/>

- Now, **CLOSE** the upgrade tool and and proceed to the next section.

### Testing the Installed Firmware

In order for you to check if you have successfully installed the firmware on your RAK7204 LPWAN Environmental Sensor, open the Serial Port tool again. Press the "Reset button" or type the command below. If everything works  perfectly, you should see the following message below:

<rk-img
  :src="`${$frontmatter.static_root}/kyecdcrh2uznsuyqjoqv.jpg`"
  width="50%"
  figure-number="7"
  caption=" Restarting Your Device"
/>

This information means that you have uploaded the Firmware successfully!
