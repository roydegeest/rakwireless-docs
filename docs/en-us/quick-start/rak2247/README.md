---
static_root: /assets/images/quick-start-guide/rak2247/1.main
rak_img: rak2247_overview.jpg
rak_grp: lora-gateway
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?q=RAK2247&i=projects
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak2247/#rak2247-lpwan-gateway-concentrator-module
      - name: 868Mhz RF Performance
        href: https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/Hardware-Specification/RAK2247-Gateway_868MHz_RF_Performance.pdf
      - name: RCM Declaration of Conformity
        href: https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/Certification-Report/RAK2247-RCM-Declaration-of-Conformity.pdf
      - name: RCM Test Report
        href: https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/Certification-Report/RAK2247-RCM_Test_Report.zip
      - name: CE Certificate
        href: https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/Certification-Report/RAK2247_CE_Certificate.zip
      - name: FCC Certificate
        href: https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/Certification-Report/RAK2247_FCC_Certificate.zip
      - name: 3D Model
        href: https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/Hardware-Specification/RAK2247-3D-Model.rar
---

# RAK2247 LoRaWAN® Gateway Concentrator Module

<rk-img
  :src="`${$frontmatter.static_root}/rak2247_overview.jpg`"
  width="50%"
  figure-number="1"
  caption="RAK2247 LoRaWAN® Gateway Concentrator Module"
/>

## Product Background

The **RAK2247 LoRaWAN® Gateway Concentrator Module** is a LoRa® Concentrator module with mini-PCIe form factor based on the SX1301. This enables easy integration into routers and other networking equipment, adding LoRaWAN® Gateway capabilities. The module can be used in any embedded platform offering a mini-PCIe slot with an SPI or USB connection.

Despite its small size, the device is an 8-channel concentrator module. By integrating it together with a computing core, a fully fledged LoRaWAN® Gateway solution can easily be created.

<rk-btn
  src="quick-start-guide.html"
  label="Set up Your RAK2247 LoRaWAN® Gateway Concentrator Module"
/>

&nbsp;

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

## Product Features

- Mini PCIe form factor with mounted heat-sink.
- SX1301 base band processor emulates 49 x LoRa® demodulators, 10 parallel demodulation paths, and supporting 8 uplinks channel and 1 downlink channel.
- 2 x SX125x Tx/Rx front-ends high/low frequency.
- Built-in FT2232H for SPI to USB 2.0 conversion (optional).
- Operates at 3.3 V, making it compatible with standard 3G/LTE card slots of Mini PCI-e type.
- Tx power up to 25 dBm, Rx sensitivity down to -139 dBm @ SF12, BW 125 kHz.
- Supports the LoRaWAN® 1.0.2 protocol.
- Supports global license-free frequency band (EU433, CN470, IN865, EU868, US915, AU915, KR920, AS920 and AS923).
