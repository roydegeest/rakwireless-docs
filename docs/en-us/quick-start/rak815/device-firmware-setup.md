# Device Firmware Setup

## Open Source Directory 

The RAK815 Hybrid Location Tracker is an open source hardware where users can get all the information about the product. It includes schematic diagrams, program codes and other references which could be helpful in building your RAK815 projects. 

This open source project is based on the official code LoRaWAN® 1.0.2 and Nordic
nRF5 SDK 14.0.0, modified to support IAR8.11 and Keil5 Compiler. 

* To start with, download the files in this open source **[directory](https://github.com/RAKWireless/RAK813-BreakBoard).**

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/github.jpg"
  width="100%"
  figure-number="1"
  caption="Open Source Directory for RAK815"
/>

## Firmware

To enable the Bluetooth functionality of our device, you must first write the Bluetooth protocol stack using the official nRFgo Studio Tool. 

* Download and Install the nRFgo Studio Tool through the **[Nordic Official Site](http://www.nordicsemi.com/Products/Low-power-short-range-wireless/nRF52832)** or through this **[link](https://downloads.rakwireless.com/en/LoRa/RAK815/Tools/)**.

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/nrfgo-studio-tool-installer.jpg"
  width="100%"
  figure-number="2"
  caption="RFgo Studio tool Installer"
/>

### Installing the J-Link Driver

1. Navigate to this **[J-Link Site](https://www.segger.com/downloads/jlink).**

2. Click  the “**Click for downloads**” under “**J-Link Software and Documentation Pack**”.

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/download-jlink.jpg"
  width="100%"
  figure-number="3"
  caption="Downloading J-Link Software"
/>

3. Download the appropriate package for your OS.
    
4. Accept the License Agreement.
    
5. Run the installation program with default configurations. 

### Downloading the Bluetooth Protocol Stack

1. Connect the RAK815 SWD interface (refer to the [**datasheet**](https://downloads.rakwireless.com/en/LoRa/RAK815/Hardware%20Specification/RAK815%28RAK813%20BreakBoard%29%20Datasheet%20V1.1.pdf)) with the J-Link device SWD interface. Then, connect the J-Link device to the PC through the USB port.

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/rak815-jlink.jpg"
  width="75%"
  figure-number="4"
  caption="RAK815 Breakout Board connected to J-TAG Debugger"
/>

2. Open the nRFgo Studio Tool, then select "**nRF5X Programming**" under the Device Manager.

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/nrf5x-studio-tool.jpg"
  width="100%"
  figure-number="5"
  caption="nRF5x Programming in nRFgo Studio Tool"
/>

3. Click "**Erase all**" and select the "**Program SoftDevice**".

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/erase-program-softdev.jpg"
  width="100%"
  figure-number="6"
  caption="Erasing all and Program SoftDevice Function"
/>

4. Browse the Bluetooth protocol stack file from the open source code through this directory: `RAK813-Breakboard-master>>nRFLib>>components>>softdevice>>s132>>hex`

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/bluetooth-protocol-dir.jpg"
  width="100%"
  figure-number="7"
  caption="Bluetooth Protocol Stack Directory"
/>

5. And click "**Program**" to complete the download.

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/browse-stack-file.jpg"
  width="100%"
  figure-number="8"
  caption="Browsing Stack File and Clicking Program"
/>

## Downloading the Application Code

There are three ways to download your application code into your device: **nRFgo Studio Tool**, **Keil Compiler** and **IAR compiler**.

### Using nRFgo Studio Tool

* After completing the Bluetooth protocol station, click the "**Program Application**".

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/download-program-app.jpg"
  width="100%"
  figure-number="9"
  caption="Downloading Program Application"
/>

* Browse for the application code and click "**Program**". Sample programs are made available in the open source code, follow this directory: `RAK813-BreakBoard-master>>Doc>>hex`

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/app-demo-loc.jpg"
  width="100%"
  figure-number="10"
  caption="Application Demo Location"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/browse-app-click.jpg"
  width="100%"
  figure-number="11"
  caption="Browsing Application and Click"
/>

### Using Keil Compiler

* Download and Install the latest version of Keil Compiler through the [Keil Website](http://www.keil.com/).

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/arm-keil-homepage.jpg"
  width="100%"
  figure-number="12"
  caption="ARM KEIL Homepage"
/>

:::tip Note:
:pencil: The best version of Keil Compiler is version 5.5 or above. If your installed Keil compiler supports nRF52832 environment, then it is not necessary to install the nRF52832 environment.
:::

* Install the nRF52832 compiler environment for Keil5 from our repository:  `RAK813-Breakboard-master>>Keil5`

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/keil5-directory.jpg"
  width="100%"
  figure-number="13"
  caption="Compiler Environment for Keil5 Directory"
/>

* After installing it, you can see the Nordic chip information from `Options -> Device`.

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/select-nordic-chip.jpg"
  width="75%"
  figure-number="14"
  caption="Selecting the Nordic Chip Information"
/>

* Use the J-Link device to connect your RAK815 and PC, then write your project. You can open sample projects available in this directory: `RAK813-BreakBoard-master>>Keil5`

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/project-sample-location.jpg"
  width="100%"
  figure-number="15"
  caption="Project Sample Location"
/>

* Click "Build", then "Download" to download your application code. 

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/build-download-app.jpg"
  width="100%"
  figure-number="16"
  caption="Building and Downloading the Application Code"
/>

If you choose to “**Create HEX file**” in the Keil tool's options then you can see the HEX
file in Keil's output directory. This file can also be used by nRFgo Stdio Tool.

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/hex-files-keil5.jpg"
  width="75%"
  figure-number="17"
  caption="Allowing HEX Files in KEIL5"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/sample-hex-file-loc.jpg"
  width="100%"
  figure-number="18"
  caption="Sample Hex File Location"
/>

### Using IAR Compiler

The writing of programs using IAR Compiler has the same steps with the Keil Compiler with different tools but the same functions.

* First, download and Install the latest version of IAR Compiler through the [IAR Website](https://www.iar.com/).
* Open the IAR project and click "Make" menu. 

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/make-tool-iar.png"
  width="100%"
  figure-number="19"
  caption="Make Tool in IAR Compiler"
/>

* Then, click the "**Project**" menu and select the download directory in the "**Download Activities Application**" option to complete the download.

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/download-app-code.png"
  width="100%"
  figure-number="20"
  caption="Downloading Application Code to the Device"
/>

* If you choose to export the HEX file in the IAR options menu, you can also see the HEX file in the IAR output folder. This file can also be used by nRFgo Stdio Tool.

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/allow-hex-file-iar.jpg"
  width="75%"
  figure-number="21"
  caption="Allowing HEX File Exports in IAR"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak815/6device-firmware-setup/sample-hex-file-loc2.jpg"
  width="100%"
  figure-number="22"
  caption="Sample Hex File Directory"
/>

Congratulations! :tada: You now have completed your firmware setup. Up next will be the configuration of your LoRaWAN® settings.

