---
tags:
- datasheet
---

# RAK7204 LPWAN Environmental Sensor

<rk-img
  src="/assets/images/datasheet/rak7204/rak7204-overview.png"
  width="40%"
  figure-number="1"
  caption="RAK7204  LPWAN Environmental Sensor"
/>


### Product Description

The **RAK7204** is a LPWAN node with integrated environmental sensors. The high-precision environmental sensors, can measure changes in temperature, humidity, gas pressure and provide an indoor air quality index. All the accumulated data can be send to a gateway in order for it to be forwarded to the Cloud.

Because RAK7204 is built-around a low-power MCU and low-power sensors, and the firmware has been optimized for efficiency, it can achieve a very low-power operation in both dormancy and when measuring and transmitting. The non-rechargeable battery that comes with the unit can last more than 2 years. With the ability to regularly report battery status in addition to having an alarm for when critical levels are reached, you can be sure you will never be surprised and be left with your device not operational when you need it most. Furthermore, the design still allows for replacing the battery, so even after those 2 year are up you can still refresh your node for another 2 years of operation.

The firmware has built-in functionality that allows the user to adjust the sampling interval of the sensors and the transmission cycle. This allows for flexibility, as one can choose to have more granular measurements at the cost of battery life, or extend operational time, trading the volume of data generated.

Last but not least, the RAK7204 adopts a highly integrated design. The environmental sensors, LoRa® transceiver module, LoRa® antenna, and the battery are fitted in a 90 mm x 85 mm x 34 mm sized housing. These small dimensions allow for installation in tight spaces or ones that require the sensor to have a minimal impact on the overall feel of the surrounding environment. The housing adopts a hollow, permeable design to facilitate air flow in order to more accurately detect the environmental changes.

### Product Features

- Measurement of a variety of environmental parameters: **Temperature**, **Humidity**, **Gas Pressure** and **Indoor Air Quality (IAQ)**
- **BOSCH BME680** Integrated Environmental Unit
- **LoRaWAN® 1.0.2** fully compliant
- Low power operation and standby current of less than 15 uA 
- Adjustable sampling and transmission interval.
- Comes with a **replaceable 3500 mAh high capacity lithium battery**
- Real time battery status monitoring.
- Battery life of more than 2 years (At 15 minute data transmission interval)
- Compact in size, easy to install and maintain.

!!!include(en-us/datasheet/rak7204/operating-frequencies.md)!!!
!!!include(en-us/datasheet/rak7204/electrical-characteristics.md)!!!
!!!include(en-us/datasheet/rak7204/sensor-characteristics.md)!!!
