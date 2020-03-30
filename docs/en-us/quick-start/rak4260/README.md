---
params:
  qlinks1:
    learnMore:
      - name: Projects Using the RAK4260 LPWAN Evaluation Board
        href: https://www.hackster.io/search?i=projects&q=rak4260
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: RAK4260 LPWAN Module Datasheet
        href: https://doc.rakwireless.com/datasheet/rakproducts/rak4260-wisduo-lora-module-datasheet
      - name: RAK4260 LPWAN Evaluation Board Schematic
        href: https://downloads.rakwireless.com/en/LoRa/RAK4260/Hardware-Specification/RAK4260_EVB_Schematic.pdf
      - name: RAK4260 LPWAN Module Certification Report
        href: https://downloads.rakwireless.com/en/LoRa/RAK4260/Certification-Report/
---

# RAK4260 LPWAN Evaluation Board

<rk-img
  src="/assets/images/quick-start-guide/rak4260/1main/rak2460-overview.png"
  width="50%"
  figure-number="1"
  caption="RAK4260 LPWAN Evaluation Board"
/>

## Product Background

The **RAK4260 LPWAN Evaluation Board** is a WisBlock product that consists of [RAK4260 LPWAN Module](https://store.rakwireless.com/products/rak4260-lora-module) in a Breakout board and the RAK5005 WisBase. This development board allows access to all serial and GPIO ports for easy configuration. The RAK4260 core module includes RAK Unified Interface (RUI) to help you quickly and easily develop and test your firmware.

The RAK4260 module is based on Microchip’s ATSAMR34J18B. It is a SiP device integrating a 32-bit ARM Cortex -M0+ MCU with a LoRa® Transceiver in a 15 millimeter x 15 millimeter compact BGA package.

The SAMR chip provides a number of highly configurable peripherals (configurable as I2C/SPI/UART interfaces). There are 12-bit ADC in addition to the aforementioned.

It is a perfect solution for any LoRaWAN® end node developer. The integration of the MCU and LoRa® Transceiver reduces size and minimizes costs. Having such a compact solution within a single package reduces time to market and allows for rapid development and deployment for a number of scenarios.

RAK4260 is a solution that is cost efficient and flexible that can be deployed in a wide variety of IoT scenarios that require long range connectivity and great battery life that LoRaWAN® provides.

<rk-btn
  src="quick-start-guide.html"
  label="Setup your RAK4260 LPWAN Evaluation Board"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks1" /> 

## Product Features
* Industry's lowest power LoRa® SiP device
* 32-bit Arm® Cortex M0+ MCU and LoRa® Transceiver
* Small form factor: 6x6 mm compact BGA package (RAK4200 LPWAN Module)
* 256KB Flash and 40 KB RAM accommodates application code and stack
* Most cost and size effective solution, eliminating need for external MCU
* Fully supported 862 to 1020 MHz frequency coverage
* Receive Sensitivity down to -148 dBm
* Maximum Transmit Power up to 20 dBm
* Low RX current of 17mA (typical)
* LoRa® Technology, (G)FSK, (G)MSK
