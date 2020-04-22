---
static_root: /assets/images/quick-start-guide/rak7258/1.main
rak_img: rak7258_overview.jpg
next: /en-us/quick-start/rak7258/quick-start-guide/#quick-start-guide
rak_grp: lora-gateway
params:
  qlinks1:
    learnMore:
      - name: Projects Using the RAK7258
        href: https://www.hackster.io/search?q=RAK7258&i=projects
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak7258/#rak7258-micro-gateway
      - name: Coverage Test Report
        href: https://downloads.rakwireless.com/LoRa/Indoor-Gateway-RAK7258/Application-Notes/RAK7258_Coverage_Test_Report_V1.2.pdf
      - name: FCC and CE Certification Report
        href: https://downloads.rakwireless.com/LoRa/Indoor-Gateway-RAK7258/Certification-Report/
      - name: Firmware
        href: https://downloads.rakwireless.com/LoRa/Indoor-Gateway-RAK7258/Firmware/RAK7258_Latest_Firmware.zip
      - name: Downloads
        href: https://downloads.rakwireless.com/LoRa/Indoor-Gateway-RAK7258/
---

# RAK7258 Micro Gateway

<rk-img
  :src="`${$frontmatter.static_root}/rak7258_overview.jpg`"
  width="85%"
  figure-number="1"
  caption="RAK7258 Micro Gateway"
/>

### Product Background

The **RAK7258 Micro Gateway** is a full 8-channel LoRaWAN® Gateway with built-in Ethernet connectivity for a straightforward setup. Additionally, there is an on-board Wi-Fi setup that allows it to be easily configured via the default Wi-Fi AP mode.

As with the other RAKwireless Industrial Gateways, it also supports MQTT Bridge mode, with the option for TLS authentication.

Power-over-Ethernet (PoE) is supported to serve cases where wall or ceiling mounting is required without the need to install additional power lines.

The open source software for the management and configuration of this gateway device is based on OpenWRT. It has a built-in LoRa® packet forwarder and a graphical user interface, allowing for a quick set-up without giving up the freedom of a fully customized solution.

The Gateway has Line-of-Sight (LoS) ranges of up to **15 kilometers**, while for highly urbanized environments it can cover more than **2 kilometers**. It is a perfect solution for any LoRaWAN® use case scenario.

The RAK Micro Gateway package includes a LoRa® antenna, mounting screws, and anchors. It is a full 8-channel LoRaWAN® Gateway with built-in Ethernet connectivity for a straightforward.

<rk-btn
  src="quick-start-guide/#quick-start-guide"
  label="Setup your RAK7258 Micro Gateway"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

### Product Features

- Full LoRaWAN® 1.0.2 Stack support
- 100M base-T Ethernet with PoE (802.3 af)
- Multi back-haul backup with Ethernet, WiFi, Cellular (optional LTE Cat 4)
- OpenWRT software supports with Web UI for easy configuration and monitoring
- Can integrate with both private(Chirpstack) and public (TTN) Network Servers
- Built-in LoRaServer for easey deployment of applications and integration of Gateways
- TF card for log backup
