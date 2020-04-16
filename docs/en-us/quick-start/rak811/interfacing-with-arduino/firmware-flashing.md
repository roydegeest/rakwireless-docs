---
static_root: /assets/images/quick-start-guide/rak811/firmware-flashing
---

# Firmware Flashing and Testing

## RAK811 LPWAN Evaluation Board Bootloader and Firmware

Kindly look into the different documents on how to burn and update the bootloader and firmware of RAK811 LPWAN Evaluation board. Both the bootloader and firmware files can be downloaded [here](https://downloads.rakwireless.com/en/LoRa/WisNode/Firmware/).

- **Bootloader**: [Burning the Bootloader]()
- **Firmware**: [Upgrading the Firmware](/en-us/quick-start/rak811/upgrading-the-firmware.html)

## Arduino Demo firmware

1. Open the "**JoinNetworkOTAA.ino**" by navigating through `File>Examples>Arduino-RAK811-Library` in the Arduino IDE.

2. Edit the **Device EUI**, **Application Key and Application EUI** in the "**JoinNetworkOTAA.ino**" which can be obtained in the [Connecting to TTN](/en-us/quick-start/rak811/connecting-to-ttn/) document.

3.Afterwhich, proceed to uploading the sketch by following the steps in the image below:

::: tip 📝 NOTE
Make sure to disconnect the connection between the Rx and Tx connection between the RAK811 LPWAN Evaluation Board and the Arduino Mega 2560. Not doing so will make the sketch uploading fail.
:::

<rk-img
  :src="`${$frontmatter.static_root}/jzx86mrtckrokxrumb8w.jpg`"
  width="100%"
  figure-number="1"
  caption="Arduino Mega 2560 Board and Port settings prior to Sketch Uploading."
/>

4. You can check the uploading logs shown in the red box in the image above to check whether it is successfully uploaded or not. If the sketch uploading fails, kindly look into each of the logs to address each issue.

## Test LoRa Node with LoRaWAN®

Using the "JoinNetworkOTAA.ino" sketch in the previous section, it should automatically connect to **TheThingsNetwork(TTN)** through the Gateway in range.

1. Setup and open the two Serial Ports, Arduino USB Port and the SoftwareSerial Port using the USB-UART TTL converter. Kindly reset the RAK811 LPWAN Evaluation Board and Serial logs must be shown same with the image below:

<rk-img
  :src="`${$frontmatter.static_root}/sxu06fbgafxyxhz3wcum.png`"
  width="100%"
  figure-number="2"
  caption="Serial Port View using USB-UART TTL SoftwareSerial Port (left) and Arduino USB Port (right)"
/>

In this section, you might be wondering why we are using two serial ports. As a default, the Arduino Mega 2560 has its own Serial Port which can be viewed through the Serial Monitor. In this port, AT Commands setup are written into the RAK811 LPWAN Evaluation Board for us to be able to connect to TheThingsNetwork(TTN). However, debug logs cannot be printed in the same port for it may interfere with the setup. Thus, a secondary Serial Port must be used as debug logs display using the SoftwareSerial Port shown in the USB-UART TTL converter COM Port.

2. With the successful Serial Logs shown in the image above, we shall then check the logs in the Application Data tab in TheThingsNetwork (TTN). If the connection is successful, received logs must be shown same with the image below:

<rk-img
  :src="`${$frontmatter.static_root}/a9dpjl7pfck2ho628eux.png`"
  width="100%"
  figure-number="3"
  caption="TTN logs in the Connection Attempt using Arduino Mega 2560"
/>
