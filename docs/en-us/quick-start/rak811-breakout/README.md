---
static_root: /assets/images/quick-start-guide/rak811-breakout/overview
rak_img: bnq9nqrvkrjojq89feoq.jpg
params:
  qlinks:
    learnMore:
      - name: Projects Using the RAK811 LPWAN Breakout Module
        href: https://www.hackster.io/search?i=projects&q=rak811
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: RAK811 LPWAN Breakout Module Datasheet
        href: /en-us/datasheet/rak811-breakout-module/#rak811-lpwan-breakout-module
      - name: RAK811 LPWAN Breakout Module Schematic Diagram
        href: /en-us/datasheet/rak811-breakout-module/schematic-diagram.html#schematic-diagram
---

# RAK811 LPWAN Breakout Module

<rk-img
  :src="`${$frontmatter.static_root}/bnq9nqrvkrjojq89feoq.jpg`"
  width="70%"
  figure-number="1"
  caption="RAK811 LPWAN Breakout Module"
/>

## Product Background

**RAK811 LPWAN Breakout Module** is a wireless remote sensor node solution based from RAK811 + MEMS Sensor. The board uses the latest LoRaWAN® Version 1.0.2 and supports the LoRaWAN® working mode, making it easier to link into the LoRaWAN® network.

This node has an expandable sensor interface, which greatly increases the product's application scenarios. It is equipped with advanced 3D acceleration chip that allows faster motion detection. The device has low-power features at stationary, reducing overall consumption and increasing battery life.

Overall, this node has various functionalities and applications designed in single board that could help you develop your own LoRa® Projects.

<rk-btn
  src="quick-start-guide.html"
  label="Set up Your RAK811 LPWAN Breakout Module"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

## Product Features

- Based on **Semtech SX1276**
- Full **LoRaWAN® 1.0.2** stack support
- **Supported bands**: (EU433, CN470, IN865, EU868, AU915, US915, KR920, AS920 and AS923)
- **Max sensitivity**: -130dBm @ 0.3kps
- Open source firmware with built-in AT command functionality for easy setup
- Theoretical max range of 2 km in Urban and 15 km in open areas
- Integrates both **SMA** and **iPEX** antenna connectors
- **Operating temperature**: -40°C ~ 85°C (industrial grade)
- **Storage temperature**: -40°C ~ 85°C (non-condensing)
