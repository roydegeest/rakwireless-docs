## Interfaces

### Block Diagram

The block diagram below shows the internal architecture and external interfaces of the RAK7200 LPWAN Tracker.

<rk-img
  src="/assets/images/datasheet/rak7200/block_diagram.png"
  width="100%"
  figure-number="1"
  caption="RAK7200 LPWAN Tracker Block Diagram"
/>

The RAK7200 device provides three external interfaces, as shown in the following figure.

<rk-img
  src="/assets/images/datasheet/rak7200/rak7200-interfaces.jpg"
  width="50%"
  figure-number="2"
  caption="RAK7200 LPWAN Tracker Interfaces"
/>

- **Micro USB** - 5V DC power supply and UART communication.
- **Reset Button** - Used to reset the RAK7200 LPWAN Tracker. Press the Reset Button for more than 1 second, then the device will be reset.
- **BOOT0 Button -** When upgrading the firmware, you need to hold the BOOT0 Button, and then press the reset button to enter the boot mode. More information can be found here in the [RAK7200 LPWAN Tracker](/en-us/quick-start/rak7200/#rak7200-lpwan-tracker) documentation.

### LEDs

The  RAK7200 LoRa® Tracker provides three LEDs for indicating the operating status, here are their functions:

<rk-img
  src="/assets/images/datasheet/rak7200/leds.jpg"
  width="50%"
  figure-number="3"
  caption="RAK7200 LPWAN Tracker LEDs"
/>

- **LED1 Status** - Indicates that the Li-Ion Battery is Charging
- **LED2 Status** - Indicates that the Li-Ion Battery is Fully Charged.
- **LED3 Status** - Indicates that the device is sending data.

