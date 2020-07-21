---
static_root: /assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/
prev: /wisnode/rak7204/quickstart/at-commands.html
next: /wisnode/rak7204/quickstart/burning-firmware.html
---
#  Burning the Bootloader
:::tip 📝 NOTE:
 Usually you don't need to burn the bootloader since there is a bootloader already in RAK7204 from V3.0.0.0 firmware and so on. If the firmware of your RAK7204 is V3.0.0.0 or a newer one, **Skip this section.**
:::

You can burn the bootloader in your RAK7204 by following the steps below:

1. Download and Install the [**STM32CubeProgrammer**](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.html#overview) Software from STMicroelectronics on your Windows PC.

<rk-img
  :src="`${$frontmatter.static_root}/y0zy3im6dd0ienfsyrsn.jpg`"
  width="100%"
  figure-number="1"
  caption="STM32CubeProg Download Page"
/>

2. Insert the provided jumper on the Boot line pins ("BOOT" pin and "VDD"), shorting them . Also, make sure that the RX pin of J25 is connected to the RXCP pin.

<rk-img
  :src="`${$frontmatter.static_root}/og57pakunpx8jvxp4ktc.jpg`"
  width="50%"
  figure-number="2"
  caption="Boot Line shorted using the Jumper Pins"
/>

3. Connect the RAK7204 on your Windows PC's USB Interface and press the RST Button or power it on again.  Open the STM32CubeProgrammer Software and Select UART type.

<rk-img
  :src="`${$frontmatter.static_root}/sq2wpjcca5wdlbylyi4w.jpg`"
  width="100%"
  figure-number="3"
  caption="USB Interface"
/>

<rk-img
  :src="`${$frontmatter.static_root}/p1ntn9ii9d4ccu10gjzr.jpg`"
  width="100%"
  figure-number="4"
  caption="UART Settings in STM32CubeProgrammer"
/>

4. Choose the appropriate port number in the **COM Port** field.

5. Set the Baud Rate to 115200, and the Parity to Even as seen in Figure 3 then Press **Connect.**

- If you didn't properly set your RAK7204 device to work in BOOT Mode, you will see the following information in the Log Section of the Software:


<rk-img
  :src="`${$frontmatter.static_root}/wjjwvo0xfwwlbdabpwdr.jpg`"
  width="100%"
  figure-number="5"
  caption="Errors Occurred During Connecting"
/>

- If this happens, Close the STM32CubeProgrammer and go back to the section above and set your RAK7204 device to work in **Boot Mode** again.
- If all works well, You will then see the following log:


<rk-img
  :src="`${$frontmatter.static_root}/wgvzidnibvoiqdzjtkby.jpg`"
  width="100%"
  figure-number="6"
  caption="Successful Connection Log to your Device"
/>

Now that you have successfully connected your RAK7204 to the STM32CubeProgrammer Tool, let's burn the Bootloader into the RAK7204.

6. Download the Bootloader for the RAK7204 Environmental Sensor **[here](https://downloads.rakwireless.com/en/LoRa/RAK7204/Firmware/)**.

7. In the STM32CubeProgrammer, Click the "Erase Chip" button to erase all the data on RAK7204:

<rk-img
  :src="`${$frontmatter.static_root}/o5mjjpxf0ifix3vhanl9.jpg`"
  width="100%"
  figure-number="7"
  caption="Erasing the Data in the Chip"
/>

8. Click "Open File" and select the correct Bootloader file that you have just downloaded.

<rk-img
  :src="`${$frontmatter.static_root}/ochgdykv7i7s8kffnt6o.jpg`"
  width="100%"
  figure-number="8"
  caption="Opening the Bootloader file"
/>

9. Click the "Download" Button to start the burning process:
<rk-img
  :src="`${$frontmatter.static_root}/f4g4duloizbd9hmdodph.jpg`"
  width="100%"
  figure-number="9"
  caption="Downloading of Bootloader to the device"
/>

10. After a couple of seconds, you will see the following window telling that you have successfully burned the Bootloader to your RAK7204!
<rk-img
  :src="`${$frontmatter.static_root}/rr9dnhyyoixq3ljstalq.jpg`"
  width="100%"
  figure-number="10"
  caption="Successfully Burned the Bootloader to the device"
/>

11. “Disconnect” and close the “STM32CubeProgrammer” tool.

:::warning ⚠️ WARNING
 Disconnect your RAK7204 in your Windows PC and do not forget to remove the Jumper on the Boot Line Pins to work in Normal Mode.

:::