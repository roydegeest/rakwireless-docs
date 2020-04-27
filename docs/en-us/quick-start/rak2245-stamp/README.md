---
static_root: /assets/images/quick-start-guide/rak2245-stamp/overview
rak_img: RAK2245-stamp-edition.svg
rak_grp: lora-gateway
params:
  qlinks:
    learnMore:
      - name: Projects 
        href: https://www.hackster.io/search?i=projects&q=RAK2245
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak2245-stamp/#rak2245-stamp-edition-lpwan-gateway-concentrator-module
      - name: 3D Model
        href: https://downloads.rakwireless.com/LoRa/RAK2245-96Boards/Hardware-Specification/RAK2245_96Boards-3D-File.zip 
---

# RAK2245 Stamp Edition - LPWAN Gateway Concentrator Module

<rk-img
  :src="`${$frontmatter.static_root}/ylbgm3hgwwari6itxmii.png`"
  width="60%"
  figure-number="1"
  caption="RAK2245 Stamp Edition - LPWAN Gateway Concentrator Module"
/>

## Product Background

The **RAK2245 Stamp Edition - LPWAN**® **Gateway Concentrator Module** is a complete and cost efficient Gateway Solution that will help you get started in developing a full LoRa® System. The module can be easily integrated into a system's main board, providing LoRaWAN® functionality.

This Concentrator supports eight channels and is available for all LoRaWAN® global frequency bands. This super compact module measures just 60mm x 30mm x 14.9mm. It comes with a built-in GPS chip and mounted heat-sink in order to improve thermal performance.

<rk-btn
  src="quick-start-guide.html"
  label="Set up Your RAK2245 Stamp Edition - LPWAN Gateway Concentrator Module"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

- Stamp edition form factor with mounted heat-sink.
- SX1301 base band processor, emulates 49 x LoRa® demodulators,10 parallel demodulation paths, support 8 uplinks channel, 1 downlink channel.
- 2 x SX125X TX/RX front-ends high/ low frequency.
- **Power Supply**: 5V with integrated level conversion circuit.
- **Transceiving Power**: **TX** power up to **27dBm**, **RX** sensitivity down to **- 139dBm@SF12**, **Bandwith** is **125KHz**.
- Supports the **LoRaWAN® 1.0.2 protocol**.
- Supports global license-free frequency band (EU433, CN470, IN865, EU868, US915, AU915, KR920, AS920 and AS923).
- Supports SPI interface.
- Integrated the **Ublox MAX-7Q GPS Module**.
