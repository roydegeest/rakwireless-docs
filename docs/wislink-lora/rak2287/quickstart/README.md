---
static_root: /assets/images/quick-start-guide/rak2287/1main
next: /en-us/quick-start-guide/gateways/rak2287/prerequisites/#prerequisites
rak_img: RAK2287.jpg
rak_grp: lora-gateway
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?i=projects&q=rak7243
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/gateways/rak2287/
      - name: Schematic Diagram
        href: /en-us/datasheet/gateways/rak2287/#schematic-diagram
      - name: Firmware
        href: https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Firmware/
---

# RAK2287 Concentrator Module WisLink Series


<rk-img
  :src="`${$frontmatter.static_root}/rak2287.jpg`"
  width="50%"
  figure-number="1"
  caption="RAK2287 Concentrator Module"
/>

## Product Description

**RAK2287** is an LPWAN Concentrator Module with mini-PCIe form factor based on **Semtech SX1302**, that enables easy integration into an existing router or other network equipment with LPWAN Gateway capabilities. It can be used in any embedded platform offering a free mini-PCIe slot with an SPI connection. In addition to the LPWAN functionality, the module comes with a **ZOE-M8Q GPS chip** that provides GNSS functionality.

This module is an exceptional, complete, and cost-efficient gateway solution offering up to ten (10) programmable parallel demodulation paths, an 8 x 8 channel LoRa® packet detector, 8 x SF5-SF12 LoRa® demodulators, and 8 x SF5-SF10 LoRa® demodulators. It is capable of detecting an uninterrupted combination of packets at eight (8) different spreading factors and ten (10) channels with continuous demodulation of up to 16 packets. The module is well suited for Internet-of-Things (IoT) applications, that require node density of up to 500 nodes per km² in an environment with moderate interference.

<rk-btn
  src="prerequisites/#prerequisites"
  label="Setup Your RAK2287 Concentrator Module"
/>

&nbsp;

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

## Product Features

- Designed with size efficiency in mind **(mPCIe** form factor).
- Built around the newly released **SX1302** base band processor.
- Compatible with **3G/LTE** card of mPCIe type (**3.3V power domain**).
- Tx power up to **27dBm**, Rx sensitivity down to **-139dBm@SF12**, BW 125 kHz.
- **LoRaWAN® 1.0.2** compatible.
- **LoRa® band** coverage (RU864, IN865, EU868, US915, AU915, KR920, AS923).
- Built-in **ZOE-M8Q GPS** module.