---
static_root: /assets/images/datasheet/rak4600/electrical-characteristics
---

# Electrical Characteristics

## Electrical Consumption

Several current consumption ratings are provided below for detailed RAK4600 LPWAN Module usage. Please refer to the values below for your preferred values for specific simulations and calculations.

### Typical Current Consumption

Shown in the table provided below is the typical current consumption of the RAK4600 LPWAN Module.

| **Item**               | **Current Consumption** | **Condition**                    |
| ---------------------- | ----------------------- | -------------------------------- |
| **LoRa® TX** @20dBm    | 125mA                   | LoRa® @ PA_BOOST & BT sleep      |
| **LoRa® TX** @17dBm    | 92mA                    | LoRa® @ PA_BOOST & BT sleep      |
| **BT TX** @4dBm        | 9mA                     | BT Tx mode & LoRa® sleep         |
| **LoRa® RX** @37.5Kbps | 17mA                    |                                  |
| **BT RX** @2Mbps       | 11.5mA                  |                                  |
| **Node Sleep**         | 2.0uA                   | The whole board is in sleep mode |

### Laboratory Testing

The figures below are the average current consumption based on the different test cases.

**Equipments**:

- Oscilloscope
- RAK4600 LPWAN Module

**LoRa® Packet Sending**

The RAK4600 LPWAN Module takes **92.291 ms** to send a LoRa® packet which consumes **119 mA** of current.

- **Sending Time**: 92.291 ms
- **Current consumption**: 119 mA

<rk-img
  :src="`${$frontmatter.static_root}/awyqt4s9r3469vtgai1p.jpg`"
  width="100%"
  figure-number="1"
  caption="Oscilloscope Screen Capture of LoRa® Packet Sending"
/>

**LoRa® Packet Receiving**

The RAK4600 LPWAN Module takes **30.052 ms** to receive a LoRa® packet which consumes **13.8 mA** of current.

- **Receiving Time**: 30.052 ms
- **Current consumption**: 13.8 mA

<rk-img
  :src="`${$frontmatter.static_root}/ufgf8mxmibztzhezvr6l.jpg`"
  width="100%"
  figure-number="2"
  caption="Oscilloscope Screen Capture of LoRa® Packet Receiving"
/>

**Sleep Mode**

The RAK4600 LPWAN Module when in sleep mode consumes **11.2 uA** of current.

- **Current consumption**: 11.2 uA

<rk-img
  :src="`${$frontmatter.static_root}/bpm1nbybf4exvnop89yo.jpg`"
  width="100%"
  figure-number="3"
  caption="Oscilloscope Screen Capture of RAK4600 LPWAN Module in sleep mode"
/>
