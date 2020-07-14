---
static_root: /assets/images/quick-start-guide/rak5010/7.burning-the-firmware
prev: /wistrio/rak5010/quickstart/bluetooth-connection-modes.html
next: /wistrio/rak5010/quickstart/upgrading-firmware.html
---
# Burning the Firmware

An easy and quick way to get started with your RAK5010 is through using a pre-compiled firmware.  However, if you wanted to compile your own customized firmware, you can visit [here](rui-online-compiler) to learn how.

## Installing J-Flash

- Go to the Official Website of **Segger** where you can Download the J-Flash software: [https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/)

<rk-img
  :src="`${$frontmatter.static_root}/rhblajzhsv9pb1fdos3h.jpg`"
  width="100%"
  figure-number="1"
  caption=" Segger Official Website"
/>

- Download the software that corresponds to your Operating System, in this guide we will be using Windows

<rk-img
  :src="`${$frontmatter.static_root}/etylt7rqrbcjedteqhqc.jpg`"
  width="100%"
  figure-number="2"
  caption="J-link Software in different platforms"
/>

- After you have downloaded your corresponding software, install it and wait for a couple of minutes.

## Creating Project in J-Flash

- Upon opening the software, you will be greeted with the following window. Choose **Create a new project**. Then Click **Start J-Flash.**

<rk-img
  :src="`${$frontmatter.static_root}/qbhdb7hj0cfq0cghohxx.jpg`"
  width="100%"
  figure-number="3"
  caption="J-flash Interface"
/>

- You will be then prompt to configure your new Project. Select the Target Device by clicking the box labeled red below:

<rk-img
  :src="`${$frontmatter.static_root}/sccml4h6imieppibarpy.jpg`"
  width="100%"
  figure-number="4"
  caption="Configuring the Project"
/>

- Select the Manufacturer to **Nordic Semi** and Select the Device **nRF52840_xxAA.**

<rk-img
  :src="`${$frontmatter.static_root}/h3wken4r8z0rfbznrgrc.jpg`"
  width="100%"
  figure-number="5"
  caption="Selecting the Device"
/>

- Select the Target Interface to be **SWD** and the Speed (kHz) to be **4000** and Press **OK.**

<rk-img
  :src="`${$frontmatter.static_root}/hil2ag7u5vavbgpluu1c.jpg`"
  width="100%"
  figure-number="6"
  caption="Target Interface and Speed (kHz)"
/>

<rk-img
  :src="`${$frontmatter.static_root}/s91d5tazgtvl1lgihina.jpg`"
  width="100%"
  figure-number="7"
  caption="Created Project Successfully"
/>

## Connecting the RAK5010 with JTAG

- Connect your RAK5010 to your PC through [JTAG](https://store.rakwireless.com/products/emulator-kit) using the following pinout diagram below:

<rk-img
  :src="`${$frontmatter.static_root}/hx3crsaspcr2aadaesnc.jpg`"
  width="50%"
  figure-number="8"
  caption="RAK5010 and JTAG Hardware Interface"
/>

- Download the latest pre-compiled firmware  [here](https://downloads.rakwireless.com/en/Cellular/RAK5010/Firmware/RAK5010_V3.0.0.8.rar) and extract it in your PC.
- In the J-Flash software Menu Bar, Choose Target -> Connect

<rk-img
  :src="`${$frontmatter.static_root}/wcw1maqbahdyhqm5hdb6.jpg`"
  width="100%"
  figure-number="9"
  caption="Successfully Created Project"
/>

- Now, choose the demo firmware that you have downloaded

<rk-img
  :src="`${$frontmatter.static_root}/iyk5ueztu9i3eul8jp6z.jpg`"
  width="100%"
  figure-number="10"
  caption="Selecting the Hex File"
/>

- Select Target -> Production Programming to start the flashing process and wait for a couple of minutes.

<rk-img
  :src="`${$frontmatter.static_root}/wechf9fckqgvlw46bfqe.jpg`"
  width="100%"
  figure-number="11"
  caption="Connect with the RAK5010"
/>


