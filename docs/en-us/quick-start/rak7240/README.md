---
static_root: /assets/images/quick-start-guide/rak7240
rak_img: RAK7240.png
next: /en-us/quick-start/rak7240/quick-start-guide/#quick-start-guide
rak_grp: lora-gateway
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?q=RAK7240&i=projects
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak7240
      - name: Downloads
        href: https://downloads.rakwireless.com/en/LoRa/DIY-Gateway-RAK7249/
---

# RAK7240 Outdoor LPWAN Gateway

<rk-img
  :src="`${$frontmatter.static_root}/rak7240-overview.jpg`"
  width="100%"
  figure-number="1"
  caption="RAK7240 Outdoor LPWAN Gateway"
/>

## Product Background

The **RAK7240 Outdoor LPWAN Gateway** is an ideal product for large scale LPWAN deployment where cost is essential, however there is no compromises to be made on quality. Its wide range of customization options allow for flexibility when deploying a solution. With its industrial-grade components and high class of ingress protection, it achieves a high standard of reliability.

The Gateway provides for a solid out of the box experience where quick deployment is required. Additionally, since its software and User Interface sit on top of OpenWRT, it is perfect for the development of custom applications (**via the open SDK**).

Thus, the **RAK7240 Outdoor LPWAN Gateway**, is suited for any use case scenario, be it rapid deployment or customization with regards to User Interface and functionality.

<rk-btn
  src="quick-start-guide/#quick-start-guide"
  label="Set up Your RAK7240 Outdoor LPWAN Gateway"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

## Key Features

### Hardware

- **IP65** industrial-grade enclosure with cable glands
- **PoE** + Surge Protection
- Dual LoRa® Concentrators for up to **16 channels**
- Backhaul: **Wi-Fi**, **LTE** and **Ethernet**
- **GPS**
- SD Card slot

### Software

- Built-in LoRa® Server **(up to 128 nodes license included, higher tiers require a fee)**
- OpenVPN
- Software and UI sit on top of **OpenWRT**
- LoRaWAN® 1.0.2
- **LoRa® Frame filtering** (node whitelisting)
- **MQTT v3.1** Bridging with **TLS** encryption
- **Buffering of LoRa® frames** in case of NS outage (no data loss)
