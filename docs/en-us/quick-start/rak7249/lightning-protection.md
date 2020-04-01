---
title: Lightning Protection
---
# Lightning Protection

In this document, we will be discussing on how to setup your lightning surge protection system whether be your RAK7249 Macro Outdoor Gateway situated outdoor or indoor. Such protection system must be taken into consideration to ensure a fully functional LoRaWAN® Gateway without interruption or damage from the lightings.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/Outdoor Deployment/Lighting Protection/Diagram.jpg"
  width="100%"
  figure-number="1"
  caption="Full Lighting Protection Set-up Diagram"
/>

## Outdoor Surge Protection System

### Antenna Grounding

RAKwireless recommends a lightning arrestor to be installed on all the antenna **N-Type
terminals** (**LoRa®, LTE, Wi-Fi and GPS**). It is recommended to use a **10-AWG or better
grounding wire** to connect the arrestor to the tower mounted LoRa® antenna. The arrestors
have to be Female to Male type in order to fit the antenna and housing connectors. Make
sure you use a 10 AWG or better wire to connect the screw terminals of the arrestors to
the grounding rail mounted on the building wall (grounding bar in case of field deployment
as in the picture).

### Gateway Grounding

Additionally it is recommended to use another 10 AWG or better grounding wire to
connect the screw terminal on the bottom right side of the Gateway casing to the
grounding rail (bar).

:::tip Note
:pencil: No additional protection for the Ethernet cabling is required at the Gateway side. There is a surge protection system built-in (GDT + Anti-surge resistor).
:::

## Indoor Surge Protection

For the purpose of protecting the indoor equipment and circuitry connected to the LoRaWAN®
Gateway you need to install an **Ethernet port SPD lightning arrester**. It should be positioned along the cabling connecting the Gateway to the PoE injector. Make sure you connect its
grounding wire terminal to an appropriate building grounding point. Thus your PoE
injector and network switch/router should be surge protected. Please refer to the images in the diagram below for the Outdoor and Indoor portion of the
surge protection system. Should you fail to adhere to the recommendations in this
document RAKwireless carries no responsibility for any damage your equipment incurs
due to lightning strike!

## Recommended Equipment

### Lightning Arrestor for the LoRa®, LTE, and Wi-Fi antennas

<rk-img
  src="/assets/images/quick-start-guide/rak7249/Outdoor Deployment/Lighting Protection/lora-lightning-arrestor.png"
  width="40%"
  figure-number="2"
  caption="Lightning Arrestor for LoRa® , LTE and Wi-Fi Antennas"
/>

<rk-btn
  src="https://store.rakwireless.com/products/lightning-arrestor"
  label="Buy a Lightning Arrestor For LoRa®, LTE and Wi-Fi"
  _blank
/>

This is a surge protective device for securing transceivers against over-voltage and surge current induced by bolts of lightning. RAKwireless recommends installing lightning arrestor on all N-type antenna terminals including LoRa®, LTE, and 2.4G Wi-Fi antennas.

### Lightning Arrestor for the GPS Antenna

<rk-img
  src="/assets/images/quick-start-guide/rak7249/Outdoor Deployment/Lighting Protection/gps-lightning-arrestor.png"
  width="60%"
  figure-number="3"
  caption="Lightning Arrestor for GPS"
/>

<rk-btn
  src="https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna"
  label="Buy a Lightning Arrestor for GPS"
  _blank
/>

This lightning arrestor connects between antenna and GPS receiver. A surge protection device for securing transceiver against transients, over-voltage, and surge currents induced by bolts of lightning.

For the purpose of protecting the indoor equipment and circuitry connected to the LoRaWAN® gateway, you need to install an Ethernet port SPD lightning arrestor.

By adopting a high pass filter, this product can effectively suppress the low-frequency interference induced by lightning while letting through the GPS signal with low insertion loss. A transient suppression device (TVS) and a gas discharge tube (GDT) is adopted for the protection of the DC feed circuit.

### Antenna Feeder Line

<rk-img
  src="/assets/images/quick-start-guide/rak7249/Outdoor Deployment/Lighting Protection/antenna-feeder-line.png"
  width="75%"
  figure-number="4"
  caption="Antenna Feeder Line"
/>

<rk-btn
  src="https://store.rakwireless.com/products/antenna-feeder-line"
  label="Buy an Antenna Feeder Line"
  _blank
/>

Antenna Feeder Line for RAK7249 Lightning Protection. This antenna feeder line is an NJ-NF adapter cable with a length of 1.5m. It is an RG8 coaxial cable with N-type connector as the antenna feeder.

### Signal Surge Protective

<rk-img
  src="/assets/images/quick-start-guide/rak7249/Outdoor Deployment/Lighting Protection/surge-protective.png"
  width="100%"
  figure-number="5"
  caption="Signal Surge Protective Device"
/>

<rk-btn
  src="https://store.rakwireless.com/products/signal-surge-protective"
  label="Buy a Signal Surge Protective Device"
  _blank
/>

This surge protective device is suitable to Category 6 cable or Class E cable for protection of equipment from surge and over-voltage induced by lightning or produced in the inner systems. It is widely used in office and industry comprehensive network wiring projects or the similar telecommunication applications, such as Gigabit Ethernet, ATM, ISDN and VoIP systems.

High performance chips with smallest parasitic capacitance are adopted in the product, all line protection for the 8 lines, fast response, giving it a ideal choice for protection of lightning effect.

Multiple stage protection structure provides good protection of lightning effect, the tolerable lightning impulse current is 10 kA(between 8 lines in total to the PE ), the product complies with the related international and domestic standards.

### Ethernet Cabling

<rk-img
  src="/assets/images/quick-start-guide/rak7249/Outdoor Deployment/Lighting Protection/ethernet-cable.png"
  width="75%"
  figure-number="6"
  caption="Ethernet Cabling"
/>

<rk-btn
  src="https://store.rakwireless.com/products/cat5-ethernet-cable"
  label="Buy an Ethernet Cable"
  _blank
/>

CAT5 Ethernet Cable for outdoor surge protection system. It is used for connections between the PoE injector, Ethernet SPD, router/switch, and the Ethernet/PoE port on RAK7249. The length of this product is 1 meter.