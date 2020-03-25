---
static_root: /assets/images/quick-start-guide/rak2245-stamp/device-firmware-setup
next: accessing-your-gateway/
---

# Device Firmware Setup

An easy and quick way to have a fully functional gateway is by using a Precompiled Firmware Image provided. In this document, is the step by step instructions on how to install the Image into your SD Card used for the gateway.

## Burn the latest Firmware

1. Download the latest firmware **[here](https://downloads.rakwireless.com/en/LoRa/RAK2245-Pi-HAT/Firmware/RAK2245%26RAK831_based_on_Raspbian_OS_for_RPI3_V4.1.0_20191202.zip)**, which is based on the Raspbian OS.
2. You need to use an image writing tool to install the firmware on the SD Card. For this, You will be using **[Etcher](https://www.balena.io/etcher/),** which is an open source utility used for burning image files.
3. Insert your SD Card into the SD Card reader and plug it into your Computer.
4. Open the Etcher Software, and select the downloaded image file thru the ( **Label - 1** ) button in the image below.

::: tip Note:
Your SD Card should be automatically detected by the Etcher software in the Label - 2 of the image below. If not, kindly ensure proper connection.
:::

<rk-img
  :src="`${$frontmatter.static_root}/vyjxepzwfdwympdjef42.jpg`"
  width="100%"
  figure-number="1"
  caption="Balena Etcher Software"
/>

- Click "**Flash!**" and wait until the process completes automatically.

<rk-img
  :src="`${$frontmatter.static_root}/ggkhrwviovuskdlltqoz.png`"
  width="100%"
  figure-number="2"
  caption="Firmware Burning Progress"
/>

- A "**Flash Complete!**" prompt is then shown in Balena once the burning is complete.

<rk-img
  :src="`${$frontmatter.static_root}/llab6gdoodtkgcdq9jpy.png`"
  width="100%"
  figure-number="3"
  caption="Firmware Burning Complete"
/>

You can now then close the Balena software and insert the SD card into your RAK2245 Stamp Edition -LoRaWAN® Gateway Concentrator Module.
