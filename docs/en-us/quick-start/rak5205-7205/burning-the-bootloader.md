---
static_root: /assets/images/quick-start-guide/rak5205-7205/burning-the-bootloader
---

# Burning Bootloader into the Device

Please use the the latest firmware for the RAK5205 WisTrio LPWAN Tracker accessible in this **[directory](https://downloads.rakwireless.com/en/LoRa/WisTrio-LoRa-RAK5205/Firmware/)** in order to avoid potential problems. Burning the Bootloader into the device is done as follows:

::: warning Warning!
:warning: Skip this section if you have a RAK5205 V3.0.0.0 firmware or newer, for it has already a bootloader.
:::

You need to make sure you have the latest firmware on your device . To be able to do this, you need to follow these steps:

**1.** To start with, download and install the “STM32CubeProgrammer” tool in your PC through this link or through this RAK directory.

**2.** Then, configure your RAK5205 by jumping the “**BOOT**” pin and “**VCC**” pin for boot mode as the following pictures shown below:

<rk-img
  :src="`${$frontmatter.static_root}/eeh8zvvyderwyp6caxsu.jpg`"
  width="100%"
  figure-number="1"
  caption="Boot and VCC Pins"
/>

<rk-img
  :src="`${$frontmatter.static_root}/ygkxl9ch7laja72wssxw.jpg`"
  width="100%"
  figure-number="2"
  caption="Jumper at Boot and VCC pins"
/>

**3.** Connect your RAK5205 to your PC using the USB cable as follow:

<rk-img
  :src="`${$frontmatter.static_root}/mnlyzbqc9pcxtudki9gb.jpg`"
  width="60%"
  figure-number="3"
  caption="RAK5205 connected to your PC via USB cable"
/>

**4.** Choose the correct port number in the **COM Port** field. You can check this in the Device Manager.

<rk-img
  :src="`${$frontmatter.static_root}/ct9xcr8m3feyf4hcsuc1.jpg`"
  width="80%"
  figure-number="4"
  caption="Checking COM Port through Device Manager"
/>

**5.** Open the “**STM32CubeProgrammer**” tool.

**6.** Select **UART type**; go to COM Port and look for your RAK5205 Breakout Board COM Port (ex. COM5).

**7.** Configure the **Baud rate** and **Parity**.

<rk-img
  :src="`${$frontmatter.static_root}/kxwsnn5cfc3c7mhdg9kw.jpg`"
  width="100%"
  figure-number="5"
  caption="UART Settings in STM32CubeProgrammer"
/>

**8.** Then, press the “**Connect**” button at the top right corner.

::: warning Warning
:warning: If there are some errors in the Log box or it can’t connect, please close the STM32CubeProgrammer and reset RAK5205, then open the STM32CubeProgrammer and connect again.
:::

<rk-img
  :src="`${$frontmatter.static_root}/uu4dimjfeqnzjefqbznv.jpg`"
  width="100%"
  figure-number="6"
  caption="Errors Occurred During Connecting"
/>

- The correct Log you should see is the information like the following picture shows:

<rk-img
  :src="`${$frontmatter.static_root}/fe8qmougdo8brhppqggd.jpg`"
  width="100%"
  figure-number="7"
  caption="Successful Connection Log to your Device"
/>

Now, let’s start burning the bootloader into the RAK5205 WisTrio LPWAN Tracker.

**9.** First, **erase all** data on the RAK5205 WisTrio LPWAN Tracker referred from the following picture below:

<rk-img
  :src="`${$frontmatter.static_root}/tzcxzjuvnvzibznrfcwg.jpg`"
  width="100%"
  figure-number="8"
  caption="Erasing the Data in the Chip"
/>

**10.** Press “**Open file**” and select the bootloader file in the pop-up window as follows:

<rk-img
  :src="`${$frontmatter.static_root}/ldnfi1fr87cxoxwgfbpa.jpg`"
  width="100%"
  figure-number="9"
  caption="Opening the Bootloader file"
/>

**11.** Click the “**Download**” button to start the burning process

<rk-img
  :src="`${$frontmatter.static_root}/gzos6pwkmw5lvbotnxf5.jpg`"
  width="100%"
  figure-number="10"
  caption="Downloading of Bootloader to the device"
/>

<rk-img
  :src="`${$frontmatter.static_root}/iteqb0yu5pqaz13he92k.jpg`"
  width="100%"
  figure-number="11"
  caption="Completing the Download of Bootloader into the device"
/>

**12.** OK, you have successfully burned the firmware into RAK5205 WisTrio LPWAN Tracker!

<rk-img
  :src="`${$frontmatter.static_root}/fnx2ybuctwfdgjcdnb9c.jpg`"
  width="100%"
  figure-number="12"
  caption="Successfully Burned the Bootloader to the device"
/>

**13.** "**Disconnect**” and close the “**STM32CubeProgrammer**” tool. Then, power down and remove the connection between BOOT pin and VCC pin to let RAK5205 WisTrio LPWAN Tracker work in normal mode.

<rk-img
  :src="`${$frontmatter.static_root}/nuoi6ddmrpp7ne32p7gm.jpg`"
  width="100%"
  figure-number="13"
  caption="Jumper connection removed"
/>

**14.** Then, connect RAK5205 with your PC’s USB interface again.

If you have opened the serial port tool, you can see some content like this:

<rk-img
  :src="`${$frontmatter.static_root}/wpwt4lcs7bupbdess4ns.jpg`"
  width="60%"
  figure-number="14"
  caption="Successfully Downloading the Bootloader"
/>

Alright! You can now start burning the firmware into RAK5205 WisTrio LPWAN Tracker.
