# Burning the Firmware

**RAK4260**  is an LPWAN Module based on Microchip’s SIP and the firmware for the RAK4260 can also use the provided SDK of Microchip.

RAK has already compiled a Demo firmware for RAK4260 based on Microchip's SDK that can be downloaded freely for testing purposes in this Github Repository: 
* [https://github.com/RAKWireless/RAK4260-LoRaNode-demo](https://github.com/RAKWireless/RAK4260-LoRaNode-demo)

:::tip 📝 NOTE
This sample firmware is solely for testing purposes only. If you want to use and deploy your own, you have to make your own customized firmware based on Microchip SDK.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/github-repo.png"
  width="100%"
  figure-number="1"
  caption="RAK4260 Github Repository"
/>

## Installing J-Flash

1. Go to the Official Website of **Segger** where you can Download the J-Flash software: 
[https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/)

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/segger-website.jpg"
  width="100%"
  figure-number="2"
  caption="Segger Official Website"
/>

2. Download the software that corresponds to your Operating System, in this guide we will be using Windows OS.

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/jlink-software.jpg"
  width="100%"
  figure-number="3"
  caption="J-link Software in different platforms"
/>

3. After you have downloaded the corresponding software for your machine, install it and wait for a couple of minutes.

## Creating Project in J-Flash

1. Upon opening the software, you will be greeted with the following window.  Choose **Create a new project**. Then Click **Start J-Flash.**

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/jflash-interface.jpg"
  width="100%"
  figure-number="4"
  caption="J-flash Interface"
/>

2. You will be then prompt to configure your new Project. Select the Target Device by clicking the box labeled red below: 

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/config-the-project.jpg"
  width="100%"
  figure-number="5"
  caption="Configuring the Project"
/>

3. Select the Manufacturer to **Atmel** and Select the Device **Atmel ATSAML21J18 .**

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/selecting-the-device.png"
  width="100%"
  figure-number="6"
  caption="Selecting the Device"
/>

4. Select the Target Interface to be **SWD** and the Speed (kHz) to be **4000** and Press **OK.**

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/interface-and-speed.jpg"
  width="100%"
  figure-number="7"
  caption="Target Interface and Speed (kHz)"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/project-successful.jpg"
  width="100%"
  figure-number="8"
  caption="Created Project Successfully"
/>

## Connecting with JTAG

1. Connect the RAK4260 LPWAN Evaluation Board with your J-Link in your PC through JTAG (refer to the Figure Below)

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/jtag-rak4260-connection.png"
  width="100%"
  figure-number="9"
  caption="JTAG to RAK4260 Connections"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/jtag-rak4260.png"
  width="100%"
  figure-number="10"
  caption="JTAG to RAK4260 Connections"
/>

2. In the J-Flash software Menu Bar, Choose Target -> Connect 

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/connect-to-rak4260.png"
  width="100%"
  figure-number="11"
  caption="Connect to the RAK4260"
/>

* If everything works properly, it will prompt "**Connected Successfully"** indicating that you have successfully connected the RAK4260 with J-Link.

3. Now, choose the demo firmware that you have downloaded 

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/choose-demo-firmware.jpg"
  width="100%"
  figure-number="12"
  caption="Choosing the Demo Firmware"
/>

4. After you choose the firmware, select Target -> Production Programming to start the flashing process and wait for a couple of minutes.

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/burning-the-firmware.png"
  width="100%"
  figure-number="13"
  caption="Burning the Firmware"
/>

* The following picture below shows the correct log that we have successfully burned the firmware into our device:

<rk-img
  src="/assets/images/quick-start-guide/rak4260/3burning-the-firmware/burning-successful.jpg"
  width="100%"
  figure-number="14"
  caption="Success Burning of Firmware Log"
/>
