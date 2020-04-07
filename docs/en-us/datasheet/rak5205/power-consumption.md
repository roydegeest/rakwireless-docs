---
next: environmental-requirements
---

# Power Consumption

## Working Mode

The board supports to enable the GPS low power mode, it has a 3-axis MEMS Sensor LIS3DH, which can detect the user's motion status, when the device is stationary, it will enter the low power sleep mode, reducing the overall power consumption and increase battery life. The power consumption as shown in the following table.

| Mode | Power Consumption | 
| ---- | ---- | 
| Sleep Mode | 14.5µA (Minimum) | 
| Normal Mode | 174mA (Maximum) @ 20dBm and GPS Enabled | 


## Power Requirements

The RAK5205 LoRa® Tracker Board has an operating voltage of 3.7V. It can be powered by micro USB with 5V Max.

<rk-img
  src="/assets/images/datasheet/rak5205/powered-by-micro-usb.png"
  width="75%"
  figure-number="1"
  caption="Powered by Micro USB"
/>

The board can also be powered by a 3.7V Li-Ion battery. You can connect a 5V solar panel charger to recharge the Li-Ion battery.

<rk-img
  src="/assets/images/datasheet/rak5205/rak5205-with-5v-solar-panel-plastic-enclosure-and-li-ion-battery.png"
  width="50%"
  figure-number="2"
  caption="RAK5205 With 5V Solar Panel, Plastic Enclosure and Li-ion Battery"
/>