---
prev: /en-us/quick-start-guide/gateways/rak2287/prerequisites/#prerequisites
next: /en-us/quick-start-guide/gateways/rak2287/prerequisites/assembly-guide.html
---

# Device Firmware Setup

For an easy and quick way of having a fully functional gateway, a Precompiled Firmware Image is provided. With that, this section gives you step-by-step instructions on how to install the Image into your SD Card used for the gateway.

## Burn the latest Firmware

1. Download the latest firmware of **[RAK2287](https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Firmware/)**, that is based on the Raspbian OS.
2. Use an image writing tool to install the firmware on the SD Card. For this tutorial, you will be using **[Etcher](https://www.balena.io/etcher/),** an open-source utility used for burning image files.
3. Insert your SD Card into the SD Card reader and plug it into your computer.
4. Open the Etcher Software, and select the downloaded image file through the ( **Label - 1** ) button in the image below.

:::tip 📝 NOTE
Your SD Card should be automatically detected by the Etcher software in the Label - 2 of the image below. If not, secure a proper connection.
:::

Click Flash and wait for a couple of minutes until it displays "**Flash Complete.**"

<rk-img
  src="/assets/images/quick-start-guide/rak2287/2prerequisites/2.balena-etcher-software.png"
  width="100%"
  figure-number="1"
  caption="Balena Etcher Software"
/>

