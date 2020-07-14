---
static_root: /assets/images/quick-start-guide/rak7243/1.main
rak_img: RAK7243.svg
rak_grp: overview
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
        href: /wisgate/rak7243c/datasheet/
      - name: Certification Report
        href: /wisgate/rak7243c/datasheet/#certification
      - name: User Manual
        href: /user-manual/
      - name: Deployment Guide
        href: /deployment-guide/
---

# RAK7243 LPWAN Developer Gateway

<rk-img
  :src="`${$frontmatter.static_root}/rak7243_overview.jpg`"
  width="75%"
  figure-number="1"
  caption="RAK7243 LPWAN Developer Gateway"
/>

### Product Background

The **RAK7243 LPWAN Developer Gateway** is a complete and cost efficient Gateway Solution that will help you get started in developing a full LoRa® System. The RAK7243 LPWAN Developer Gateway is just a RAK2245 Pi Hat which can be easily stacked on top of a cheap Single Board Computer (SBC) such as the **Raspberry Pi 3B+** which is enclosed in a Pilot Gateway Casing. You can also use its sister model [RAK7243C LPWAN Developer Gateway](https://store.rakwireless.com/products/rak7243c-pilot-gateway) if you want to have Cellular functions added into it.

<rk-btn
  src="/wisgate/rak7243/quickstart/#quick-start-guide"
  label="Get Started with RAK7243 LPWAN Developer Gateway"
/>

&nbsp;

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

### Product Features

- Compatible with **Raspberry Pi 3 Model B+ edition**
- Large Heatsink for Heat Dissipation
- SX1301 base band processor emulates 49 x LoRa® demodulators 10 parallel demodulation paths, supports 8 uplink channels, 1 downlink channel.
- **2 x SX125 x Tx/Rx** front-ends high/ low frequency.
- Supports 5V power supply.
- TX power up to 27dBm, RX sensitivity down to - 139dBm@SF12, BW 125KHz.
- Supports the **LoRaWAN® 1.0.2** protocol.
- Supports global license-free frequency band (EU433, CN470, IN865, EU868, US915, AU915, KR920, AS920 and AS923).
- Integrated **Ublox MAX-7Q GPS** Module.

<rk-btn
  src="https://store.rakwireless.com/products/rak7243c-pilot-gateway"
  label="Buy a RAK7243 LPWAN Developer Gateway"
  _blank
/>