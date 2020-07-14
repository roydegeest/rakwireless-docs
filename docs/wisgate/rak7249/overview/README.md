---
static_root: /assets/images/quick-start-guide/rak7249/1.main
rak_img: RAK7249.svg
next: /en-us/quick-start-guide/gateways/rak7249/quick-start-guide/#quick-start-guide
rak_grp: overview
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?q=RAK7249&i=projects
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /wisgate/rak7249/datasheet/
      - name: Certification Reports
        href: /wisgate/rak7249/datasheet/certification-reports/
      - name: User Manual
        href: /user-manual/
      - name: Deployment Guide
        href: /deployment-guide/
---

# RAK7249 Macro Outdoor Gateway

<rk-img
  :src="`${$frontmatter.static_root}/rak7249_overview.jpg`"
  width="70%"
  figure-number="1"
  caption="RAK7249 Macro Outdoor Gateway with Support Plate Attached"
/>

### Product Background

**RAK7249 Macro Outdoor Gateway** is an ideal product for IoT commercial deployment. Its modularity and customization options allow for flexibility when deploying a solution. With its industrial-grade components, it achieves a high standard of reliability.

The Gateway provides for a solid out of the box experience for quick deployment. Additionally, since its software and UI sits on top of OpenWRT it is perfect for the development of custom applications (via the open SDK).

Thus the RAK7249 is suited for any use case scenario, be it rapid deployment or customization with regards to UI and functionality.

<rk-btn
  src="quick-start-guide/#quick-start-guide"
  label="Get Started with RAK7249 Macro Outdoor Gateway"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

### Key Features

###### Hardware

- **IP67/NEMA-6** industrial grade enclosure with cable glands
- **PoE (802.3 af)** + Surge Protection
- Dual LoRa® Concentrators for up to **16 channels**
- **Backhaul**: Wi-Fi, LTE and Ethernet
- GPS **L70 GPS Module**
- Powered by **PoE**, optional for battery, solar or AC power supply.

###### Software

- Built-in LoRa® Server (**up to 128 nodes license included, higher tiers require a fee**)
- OpenVPN
- Software and UI sit on top of **OpenWRT**
- LoRaWAN® 1.0.2
- **LoRa® Frame filtering** (node whitelisting)
- **MQTT v3.1** Bridging with **TLS encryption**
- **Buffering of LoRa® frames** in case of NS outage (no data loss)


<rk-btn
  src="https://store.rakwireless.com/products/rak7249-diy-outdoor-gateway"
  label="Buy a RAK7249 Macro Outdoor Gateway"
  _blank
/>
