---
static_root: /assets/images/quick-start-guide/rak7243c/1.product-overview/1.index
params:
  qlinks:
    learnMore:
      - name: Projects Using the RAK7243C LoRaWAN® Developer Gateway
        href: https://www.hackster.io/search?q=RAK7243C&i=projects
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: RAK7243C LoRaWAN® Developer Gateway Installation Guide
        href: http://docs.rakwireless.com/en/LoRa/Pilot-Gateway-Pro-RAK7243/Application-Notes/Pilot_Gateway_Pro_RAK7243_Installation_Guide_V1.0.pdf
      - name: RAK7243C LoRaWAN® Developer Gateway Assembly Guide
        href: http://docs.rakwireless.com/en/LoRa/Pilot-Gateway-Pro-RAK7243/Application-Notes/Pilot_Gateway_Pro_RAK7243_with_LTE_Assembly_Guide.pdf
      - name: RAK7243C LoRaWAN® Developer Gateway Datasheet
        href: /en-us/datasheet/rak7243c/#rak7243c-pilot-gateway
---

# RAK7243C LoRaWAN® Developer Gateway

<rk-img
  :src="`${$frontmatter.static_root}/1.pnebj6mub4bpzc83ehzw.jpg`"
  width="100%"
  figure-number="1"
  caption="RAK7243C LoRaWAN® Developer Gateway"
/>

## Product Background

The **RAK7243C LoRaWAN**® **Developer Gateway** is a complete and cost efficient LoRaWAN® Gateway Solution that will help you get started in developing a full LoRa System. It is built with the RAK2245 Pi Hat stacked with the Raspberry Pi 3B+ along with the GPS module and Heat Sink, increasing its performance and thermal dissipation, plus a RAK2013 Cellular Pi HAT for cellular connectivity. The housing for the device is durable and entirely built from aluminum.

The RAK7243C LoRaWAN® Developer Gateway is ideal for prototyping, proof-of concept evaluation and demonstration. It includes everything you need to help you get started in building your own LoRaWAN® Network in just a couple of minutes. It provides great value and flexible functionality for a variety of applications: Smart Grids, Intelligent Farming and other IoT applications.

<rk-btn
  src="quick-start-guide.html"
  label="Set up Your RAK7243C LoRaWAN® Developer Gateway"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

- Pre-assembled, fully functioning LoRaWAN® Gateway
- SX1301 base band processor, emulates 49 x LoRa® demodulators 10 programmable parallel demodulation paths, support 8 uplinks channel, 1 downlink channel.
- Support optional Cellular module (Quectel BG96 or EG95) for NB-IOT / LTE CAT-M1 / LTE CAT1 / LTE CAT4.
- Built-in the Ublox MAX-7Q GPS Module.
- TX power up to 27dBm, RX sensitivity down to -139dBm@SF12, BW 125KHz.
- Full LoRa® Global bans support (EU433, CN470, IN865, EU868, US915, AU915, AS920, KR920, and AS923 ).
- Housing with top cover, body, bottom cover with riveted motherboard standoff (the top acts as a heat-sink).
- Includes Pi ready 'ID EEPROM', GPIO setup and device tree can be automatically configured from vendor information.

::: warning
:warning: The RAK7243C LoRaWAN® Developer Gateway is different from RAK7243 LoRaWAN® Developer Gateway . The RAK7243C LoRaWAN® Developer Gateway is the Cellular Version and it comes with the Cellular Pi Hat.
:::
