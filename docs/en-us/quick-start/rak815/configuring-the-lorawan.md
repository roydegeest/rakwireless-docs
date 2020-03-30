# Configuring the LoRaWAN®

## Project Structure

Because IAR 8.11 and Keil5 has similar project structure, we will be using the IAR 8.11 structure throughout the configuration settings. Visit the [IAR Embedded Workbench IDE](https://www.iar.com/iar-embedded-workbench/#!?architecture=Arm)'s website to know more.

<rk-img
  src="/assets/images/quick-start-guide/rak815/4configuring-the-lorawan/iar-project-structure.jpg"
  width="50%"
  figure-number="1"
  caption="IAR Project Structure"
/>

## Application Switch

In the [**GitHub Open Source**](https://github.com/RAKWireless/RAK813-BreakBoard/tree/master/Apps) projects, there are three application cases. Users only need to replace the main.c and app_lora.c files in the project to switch between different applications.

<rk-img
  src="/assets/images/quick-start-guide/rak815/4configuring-the-lorawan/iar-application-switching.jpg"
  width="100%"
  figure-number="2"
  caption="Switching Applications in IAR"
/>

The applications are made available in the open source code by clicking this file directory: `RAK813-BreakBoard-master>>Doc>>hex`

<rk-img
  src="/assets/images/quick-start-guide/rak815/4configuring-the-lorawan/app-demo-dir.jpg"
  width="100%"
  figure-number="3"
  caption="Application Demo Directory"
/>

## Configuration of LoRaWAN® Parameters

This Board can be connected to LoRaWAN® through **Over-the-Air-Activation(OTAA)** or **Activation-By-Personalization(ABP)** activation modes. This can be modified through the `Commissioning.h` file available in the open source code

<rk-img
  src="/assets/images/quick-start-guide/rak815/4configuring-the-lorawan/otaa-activation.jpg"
  width="100%"
  figure-number="4"
  caption="Configuring LoRaWAN® Activation Mode in OTAA"
/>

Along with the following parameters: **Device EUI, Application EUI, App Key for OTAA; Device Address, Network Address and Application key** for ABP.

<rk-img
  src="/assets/images/quick-start-guide/rak815/4configuring-the-lorawan/config-app-parameters.jpg"
  width="100%"
  figure-number="5"
  caption="Configuring Application Parameters"
/>

## Modify LoRaWAN® Region

The open source code is based on LoRaWAN® 1.0.2 modified from, so the supported regions have: **EU868, US915, AS923, AU915, IN865, KR920**. If you want to modify the region, you can modify the macro definition.

<rk-img
  src="/assets/images/quick-start-guide/rak815/4configuring-the-lorawan/region-iar.jpg"
  width="75%"
  figure-number="6"
  caption="Configuring Application Parameters"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak815/4configuring-the-lorawan/region-iar-kiel.jpg"
  width="75%"
  figure-number="7"
  caption="Modifying the LoRaWAN® Region in Keil"
/>

Congratulations! :tada: You now have successfully modified your LoRaWAN® parameters.
