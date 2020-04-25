---
static_root: /assets/images/quick-start-guide/rak7243/1.main
next: /en-us/quick-start/rak7243/quick-start-guide/#quick-start-guide
rak_img: rak7243_overview.jpg
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
        href: /en-us/datasheet/rak7243c
      - name: Assembly Guide
        href: https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Application-Notes/Pilot_Gateway_Pro_RAK7243_without_LTE_Assembly_Guide.pdf
      - name: Installation Guide
        href: https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Application-Notes/Pilot_Gateway_Pro_RAK7243_Installation_Guide_V1.0.pdf
      - name: Environment Test Report
        href: https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Hardware-Specification/RAK7243_Environment_Test_Report.pdf
      - name: CE and FCC Certification Report
        href: https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Certification-Report/
      - name: Firmware
        href: https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243_Latest_Firmware.zip
      - name: Downloads
        href: https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/
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
  src="quick-start-guide/#quick-start-guide"
  label="Set up Your RAK7243 LPWAN Developer Gateway"
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
