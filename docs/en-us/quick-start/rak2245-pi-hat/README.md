---
static_root: /assets/images/quick-start-guide/rak2245/1.product-overview/1.index
rak_img: RAK2245-pi-hat.svg
rak_grp: lora-gateway
params:
  qlinks:
    learnMore:
      - name: Projects 
        href: https://www.hackster.io/search?q=RAK2245&i=projects
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak2245-pihat/#rak2245-pi-hat-lpwan-gateway-concentrator-module
      - name: Comparison Between RAK831
        href: http://docs.rakwireless.com/en/LoRa/RAK2245-Pi-HAT/Hardware-Specification/RAK2245_RAK831_Design_Guide_Comparison.pdf
      - name: CE and FCC Certification Report
        href: https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Certification-Report/
      - name: 3D Model
        href: https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Hardware-Specification/RAK2245_Pi_HAT-3D-File.zip
      - name: Downloads
        href: https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/
   
---
# RAK2245 Pi Hat Edition - LPWAN Gateway Concentrator Module

<rk-img
  :src="`${$frontmatter.static_root}/wwj49yp9jeqcmrynbtjz.jpg`"
  width="70%"
  figure-number="1"
  caption="RAK2245 Pi Hat Edition"
/>

## Product Background

The **RAK2245 Raspberry Pi Hat** is a complete and cost efficient Gateway Solution that will help you get started in developing a full LoRa® System. It can be easily stacked on top of a cheap Single Board Computer (SBC) such as the Raspberry Pi 3B+.

This LPWAN Gateway Pi HAT supports eight channels and is available for all LoRaWAN® global frequency bands. The board is equipped and powered by a Semtech SX1301 Baseband chip and can provide low data rate LoRa® Radio Links over large distances.

<rk-btn
  src="quick-start-guide.html"
  label="Set up Your RAK2245 Pi Hat Edition - LPWAN Gateway Concentrator Module"
/>

&nbsp;

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

- Compatible with Raspberry Pi 3 Model B+ edition. and [Raspberry Pi 4](https://downloads.rakwireless.com/en/LoRa/RAK2245-Pi-HAT/Firmware/Raspberry-Pi-4/)
- Large Heatsink for Heat Dissipation
- SX1301 base band processor emulates 49 x LoRa® demodulators 10 parallel demodulation paths, supports 8 uplink channels, 1 downlink channel.
- 2 x SX125x Tx/Rx front-ends high/ low frequency.
- Supports 5V power supply.
- TX power up to 27dBm, RX sensitivity down to - 139dBm@SF12, BW 125KHz.
- Supports the LoRaWAN® 1.0.2 protocol.
- Supports global license-free frequency band (EU433, CN470, IN865, EU868, US915, AU915, KR920, AS920 and AS923).
- Integrated Ublox MAX-7Q GPS Module.
