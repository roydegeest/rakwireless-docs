---
static_root: /assets/images/quick-start-guide/rak7200/burning-the-bootloader
---

# Burning the Bootloader

You can burn the bootloader on your RAK7200 by following the steps below:

1.Download and Install the [**STM32CubeProgrammer**](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.html#overview) Software from STMicroelectronics on your Windows PC.

<rk-img
  :src="`${$frontmatter.static_root}/wm3z5nau3zpemcfviq0h.png`"
  width="100%"
  figure-number="1"
  caption="STM32CubeProg Download Page"
/>

1. Plug in the provided Micro-USB cable into the RAK7200 LPWAN Tracker and insert it in your PC. We need to set the RAK7200 first to work in **Boot Mode.** Refer to Figure 2 below and do the following: Hold down the BOOT0 Button, then press the Reset Button for a couple of seconds. Release the Reset and the BOOT0 Button.

<rk-img
  :src="`${$frontmatter.static_root}/b1horbt3p40hmvnuxqed.jpg`"
  width="100%"
  figure-number="2"
  caption="RAK7200 Buttons and USB Interface"
/>

3.Open the STM32CubeProgrammer Software and Select UART type.

<rk-img
  :src="`${$frontmatter.static_root}/aekfryuujx4mig7hfwua.jpg`"
  width="100%"
  figure-number="3"
  caption="STM32CubeProgrammer Interface"
/>

- Choose the appropriate port number in the **COM Port** field. Open the [Interfacing with RAK7200](interfacing-with-rak7200.md) document to check the appropritate COM Port to be used for the demonstration.
- Set the Baud Rate to 115200, and the Parity to Even as seen in **Figure 3** then Press **Connect.**

If you didn't properly set your RAK7200 device to work in BOOT Mode, you will see the following information in the Log Section of the Software:

<rk-img
  :src="`${$frontmatter.static_root}/pthfpwcme7kv7fk8vdic.jpg`"
  width="100%"
  figure-number="4"
  caption="Error - Device not in Boot Mode"
/>

- If this happens, go back to the section above and set your RAK7200 device to work in **Boot Mode** again.
- If all works well, you will then see the following log:

<rk-img
  :src="`${$frontmatter.static_root}/xwcazjqx9mfmqvrr3apr.jpg`"
  width="100%"
  figure-number="5"
  caption="Success - Working in Boot Mode"
/>

4.Now that you have successfully connected your RAK7200 to the STM32CubeProgrammer Tool, let's burn the Bootloader into the RAK7200.

- Download the Bootloader for the RAK7200 LPWAN Tracker [**here**](https://downloads.rakwireless.com/en/LoRa/RAK7200-Tracker/Firmware/).
- In the STM32CubeProgrammer, Click the "**Erase Chip**" button to erase all the data on RAK7200:

<rk-img
  :src="`${$frontmatter.static_root}/o8jcjqkwzlv5ukqbrpg9.jpg`"
  width="100%"
  figure-number="6"
  caption="Erase Chip"
/>

- Click "**Open File**" and select the correct Bootloader file that you have just downloaded.

<rk-img
  :src="`${$frontmatter.static_root}/f8r7owhtv3psucvhtejc.jpg`"
  width="100%"
  figure-number="7"
  caption="Open the Firmware File"
/>

- Click the "**Download**" Button to start the burning process:

<rk-img
  :src="`${$frontmatter.static_root}/qzhcdcluajgue2hsl7hb.jpg`"
  width="100%"
  figure-number="8"
  caption="Uploading the Bootloader"
/>

- After a couple of seconds, you will see the following window telling that you have successfully burned the Bootloader to your RAK7200!

<rk-img
  :src="`${$frontmatter.static_root}/yxjlq9zs9ztlugceqnfd.jpg`"
  width="100%"
  figure-number="9"
  caption="Success Upgrade of the Firmware"
/>

- “**Disconnect**” and close the STM32CubeProgrammer tool.
