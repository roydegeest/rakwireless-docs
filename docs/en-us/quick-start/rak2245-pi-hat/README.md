---
static_root: /assets/images/quick-start-guide/rak2245/1.product-overview/1.index
params:
  qlinks:
    learnMore:
      - name: Projects Using the RAK2245 Pi Hat Edition
        href: https://www.hackster.io/search?q=RAK2245&i=projects
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: RAK2245 Pi Hat Datasheet
        href: https://doc.rakwireless.com/datasheet/rakproducts/rak2245-pi-hat-datasheet
      - name: RAK2245 3d Model
        href: http://docs.rakwireless.com/en/LoRa/RAK2245-Pi-HAT/Hardware-Specification/RAK2245-Pi-HAT-pwb-3D-Model.stp
      - name: RAK2245 Product Brief
        href: http://docs.rakwireless.com/en/LoRa/RAK2245-Pi-HAT/Hardware-Specification/RAK2245_Pi_HAT_Product_Brief_V1.1.pdf
      - name: Comparison Between RAK831 
        href: http://docs.rakwireless.com/en/LoRa/RAK2245-Pi-HAT/Hardware-Specification/RAK2245_RAK831_Design_Guide_Comparison.pdf
      - name: FCC Certification Report
        href: http://docs.rakwireless.com/en/LoRa/RAK2245/Certification-Report/RAK2245_FCC_Certificate.zip
      - name: CE Certification Report
        href: http://docs.rakwireless.com/en/LoRa/RAK2245/Certification-Report/RAK2245_CE_Certificate.zip 

---

# RAK2245 Pi Hat Edition - LoRaWAN® Gateway Concentrator Module

<rk-img
  :src="`${$frontmatter.static_root}/wwj49yp9jeqcmrynbtjz.jpg`"
  width="70%"
  figure-number="1"
  caption="RAK2245 Pi Hat Edition"
/>

## Product Background

The **RAK2245 Raspberry Pi Hat** is a complete and cost efficient LoRaWAN® Gateway Solution that will help you get started in developing a full LoRa® System. It can be easily stacked on top of a cheap Single Board Computer (SBC) such as the Raspberry Pi 3B+.

This LoRaWAN® Gateway Pi HAT supports eight channels and is available for all LoRaWAN® global frequency bands. The board is equipped and powered by a Semtech SX1301 Baseband chip and can provide low data rate LoRa® Radio Links over large distances.

<rk-btn
  src="quick-start-guide.html"
  label="Set up Your RAK2245 Pi Hat Edition - LoRaWAN® Gateway Concentrator Module"
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
