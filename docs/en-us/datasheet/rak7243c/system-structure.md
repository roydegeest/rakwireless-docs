---
next: operating-frequencies
---

# System Structure

The following figure shows the basic concept for LoRaWAN® system. RAK7243 Pilot Gateway is the central hardware solution for all LoRa® based radio communication. It receives and transmits radio messages. The processing of radio messages as well as the protocol related tasks is done by embedded host system (Raspberry Pi). Received and processed radio messages are being sent to a LoRaWAN® server. The concrete segmentation of the protocol related tasks is outside the scope of this document

<rk-img
  src="/assets/images/datasheet/rak7243c/rak7243-system-structure.png"
  width="100%"
  figure-number="1"
  caption="RAK7243C Pilot Gateway System Structure"
/>

