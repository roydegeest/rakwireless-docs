---
rak_img: /assets/images/datasheet/rak831/rak831-overview.png
rak_grp: cellular
qlinks:
  learnMore:
    - name: Projects
      href: https://www.hackster.io/search?q=RAK2013&i=projects
    - name: Community
      href: https://forum.rakwireless.com/
    - name: Support
      href: mailto:fomi@rakwireless.com
  resources:
    - name: Datasheet
      href: /wislink-lora/rak2013/datasheet
    - name: Certification Report
      href: /wislink-lora/rak2013/datasheet/#certification
    - name: User Manual
      href: /wislink-lora/rak831/datasheet
    - name: Deployment Guide
      href: /wislink-lora/rak831/datasheet
---

# RAK2013 Cellular

<rk-img
  src="/assets/images/datasheet/rak2013/rak2013.jpg"
  width="50%"
  caption="RAK2013 Cellular Board"
/>

### Product Description

The RAK2013 is a Raspberry Pi 3B+ edition cellular communications module that supports Low-Power Wide-Area (LPWA) connectivity to Internet-of-Things (IoT) devices. It has several configuration options including BG96 / EG91 / EG95 for 4G/LTE, NB-IoT, CAT-M, CAT1 or CAT 4 cellular protocol. This device integrates audio codec and audio amplifier supporting Voice-over-LTE (VoLTE) in high definition (HD) and uninterrupted voice calls. For easy use, there are earphone connector, MIC connector and speaker connector with audio amplifier.

The module is supported with extendable sensor board connected that follows the mikroBus standard. MikroBus has many kinds of sensor board, such as temperature, humidity, 3 axis sensor and light sensor, allowing easy sensor data transmission. Because of its wide range of supported sensors, it is suitable for applications such as environmental monitoring and presence sensing, that require cellular connectivity.

The RAK2013 is compatible with RAK2245 Pi Hat Concentrator module via the onboard 40 pin header. It can function as a cellular backhaul to gateway, providing an even greater flexibility for IoT solutions that require cellular as an option for ensuring service reliability.

<rk-btn
  src="../quickstart/"
  label="Get Started with RAK2013 Cellular"
/>

<rk-quick-links :params="$frontmatter.qlinks" />

### Product Features

- Compatible with Raspberry Pi 3B+ edition specification.
- Quectel BG96/EG91/EG95 for NB-IOT / CAT-M / CAT1 LTE / CAT4 LTE.
- Supports Voice over CAT-M or VoLTE.
- Supports Nano SIM card or eSIM card.
- Integrates audio codec and audio amplifier.
- Integrates MikroBus interface to support sensor extended board.
- Can be added to another Pi HAT to support LoRa® concentrator.
- Supports USB connector for higher data rate.
- Supports GPS function(only for BG96 module) .
- SMA/IPEX antenna optional for LTE and GPS.
- Supports I2C, GPIOs, UART and ADC interfaces for Raspberry board.
- Supports EEPROM to configure IOs automatically.

<rk-btn
  src="https://store.rakwireless.com/products/rak2013-cellular-pi-hat"
  label="Buy a RAK2013 Cellular"
  _blank
/>
