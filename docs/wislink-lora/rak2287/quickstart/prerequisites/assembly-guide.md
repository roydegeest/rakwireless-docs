# Assembly Guide

To create a functioning RAK2287 Concentrator Module WisLink Series, you need to put several components together:

## Mount the Concentrator

Insert your **RAK2287 mPCIe card** into the mPCIe slot on the **RAK2003 Pi HAT**. Make sure the card fits snugly into the connector, it should end up sticking out in a **45-degree angle**. Gently press it down and fasten with 2 screws. If you have positioned the card right, the screw holes on the RAK2287 will match the ones on the RAK2003. Use **Figure 1** as reference.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/3.assembly-of-the-concentrator-and-hat.jpg"
  width="50%"
  figure-number="1"
  caption="Assembly of the Concentrator and the HAT"
/>

## Antennas

The module comes with **two antennas, GPS, and LoRa®**. Both have pigtail cables that have uFL connectors, which fit onto the corresponding ports on the RAK2287. The ports are labeled, match each antenna to its port and gently press it until the connectors fit one to the other.

:::warning ⚠️WARNING
It is not recommended to have the device powered with the antennas detached. This might damage the circuity.
:::

## Mount the HAT

Take the RAK2003, that now has the RAK2287 securely sitting on top and insert it over the Raspberry Pi. Both the Pi and the HAT have a **40-pin connector** that should fit together when pressed on top of each other.

## SD Card

Insert the SD card with the Firmware you flashed in the previous step into the SD card slot on the bottom of the Raspberry Pi.

## Boot

Power the Raspberry Pi via the Micro USB port (Pi3) / USB type-C port (Pi4). As this is going to be the first time to boot the OS it might take a couple of minutes before everything is set up, so please be patient.  

:::tip 📝 NOTE
It is recommended to use at least a 2A power supply.
:::
