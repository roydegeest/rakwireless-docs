---
static_root: /assets/images/datasheet/rak7244c/system-structure
---

# System Structure

The following figure shows the basic concept for LoRaWAN® system. The RAK2245 is the central hardware solution for all LoRa® based radio communication. It receives and transmits radio messages and acts as modem to signals among others. The processing of radio messages as well as the protocol related tasks is done by embedded host system (Raspberry Pi). Received and processed radio messages are being sent to a LoRaWAN® server. The concrete segmentation of the protocol related tasks is outside the scope of this document.

<rk-img
  :src="`${$frontmatter.static_root}/wmishmfyonwnd31mgbph.png`"
  width="100%"
  figure-number="1"
  caption="RAK7244C Gateway System Structure"
/>
