---
static_root: /assets/images/quick-start-guide/rak4600/6.device-firmware-setup
---

# Burning the Firmware

If you want to get a pre-compiled firmware instead of compiling the source code by yourself, and flash it into RAK4600 through J-Link, you can find the latest firmware on RAK website after it is released **[here](https://downloads.rakwireless.com/en/LoRa/RAK4600/Firmware/)**.

## Installing J-Flash

- Go to the Official Website of **Segger** where you can Download the J-Flash software: [https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/)

<rk-img
  :src="`${$frontmatter.static_root}/chigugx8lnw5xc1xi3bv.jpg`"
  width="100%"
  figure-number="1"
  caption="Segger Official Website"
/>

- Download the software that corresponds to your Operating System, in this guide we will be using Windows OS.

<rk-img
  :src="`${$frontmatter.static_root}/rr1yopbrhjw2xmpmiwue.jpg`"
  width="100%"
  figure-number="2"
  caption="J-link Software in different platforms"
/>

- After you have downloaded the corresponding software for your machine, install it and wait for a couple of minutes.

## Creating Project in J-Flash
- Upon opening the software, you will be greeted with the following window. Choose Create a new project. Then Click Start J-Flash.

<rk-img
  :src="`${$frontmatter.static_root}/zaeihbaoq4cbnf4dt2zd.jpg`"
  width="100%"
  figure-number="3"
  caption="J-flash Interface"
/>

- You will be then prompt to configure your new Project. Select the Target Device by clicking the box labeled red below:

<rk-img
  :src="`${$frontmatter.static_root}/djbvyzwlbgn1j2mrif96.jpg`"
  width="100%"
  figure-number="4"
  caption="Configuring the Project"
/>

- Select the Manufacturer to **Nordic Semi** and Select the Device **nRF52832_XXAA.**

<rk-img
  :src="`${$frontmatter.static_root}/fzxezoootvevolfb4igi.png`"
  width="100%"
  figure-number="5"
  caption="Selecting the Device"
/>

- Select the Target Interface to be **SWD** and the Speed (kHz) to be **4000** and Press OK.

<rk-img
  :src="`${$frontmatter.static_root}/fzxezoootvevolfb4igi.png`"
  width="100%"
  figure-number="6"
  caption="Target Interface and Speed (kHz)"
/>

<rk-img
  :src="`${$frontmatter.static_root}/r54lhlakju7kxoytqmsx.png`"
  width="100%"
  figure-number="7"
  caption="Project Created Successfully"
/>


## Connecting the RAK4600 LPWAN Evaluation Board with JTAG

- Connect the RAK4600 LPWAN Evaluation Board with your J-Link in your PC through JTAG (refer to the Figure Below)

<rk-img
  :src="`${$frontmatter.static_root}/iouectenf1oll8kwx76z.png`"
  width="100%"
  figure-number="7"
  caption="RAK4600 to Windows PC connection thru JTAG"
/>

<rk-img
  :src="`${$frontmatter.static_root}/ynx1rtolamjddsqrhzft.png`"
  width="100%"
  figure-number="8"
  caption="RAK4600 to Windows PC connection thru JTAG"
/>

- In the J-Flash software Menu Bar, Choose Target -> Connect

<rk-img
  :src="`${$frontmatter.static_root}/ynx1rtolamjddsqrhzft.png`"
  width="100%"
  figure-number="9"
  caption="Connect to the RAK4600"
/>



- If everything works properly, it will prompt "Connected Successfully" indicating that you have successfully connected the RAK4600 with J-Link.
- Now, choose the demo firmware (.hex) that you have downloaded and extracted.

<rk-img
  :src="`${$frontmatter.static_root}/afc3lsreloedocidbfjy.png`"
  width="100%"
  figure-number="10"
  caption=" Choosing the Firmware"
/>


- After you choose the firmware, select **Target -> Production Programming**  or Press F7 to start the flashing process and wait for a couple of minutes.

<rk-img
  :src="`${$frontmatter.static_root}/zqmxlrkxu4f3siwxn6pd.png`"
  width="100%"
  figure-number="11"
  caption="Burning the Firmware"
/>


