---
prev: /wisnode/rak612/quickstart/at-commands.html
next: false
---

# Upgrading the Firmware

Please use the the latest firmware for the RAK612 LPWAN Button in order to avoid potential problems. Installing the firmware for is done as follows:

1. Download the [RAK LoRaButton Upgrade tool](https://downloads.rakwireless.com/LoRa/RAK612-LoRaButton/Tools/) and the latest [firmware](https://downloads.rakwireless.com/LoRa/RAK612-LoRaButton/Firmware/) for the RAK612 LPWAN Button.

2. Connect your RAK612 LPWAN Button to your PC using the micro-USB cable.

3. Press and Hold Key 1 and Key 2 simultaneously for more than 5 seconds until you see all of the LEDs blink very fast. This will set the LPWAN Button in **boot mode**.

4. Open the RAK LPWAN Button Upgrade tool.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/upgrade-tool.png"
  width="100%"
  figure-number="1"
  caption="RAK LPWAN Button Upgrade Tool"
/>

5. Choose the appropriate port number in the **COM Port** field. Open [Interfacing with RAK612 LPWAN Button](interfacing-with-rak612.html) section to learn on how to choose the appropriate COM Port used. For this demonstration, the COM Port is "**COM3**".

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/select-com-port.png"
  width="100%"
  figure-number="2"
  caption="Select the Appropriate COM Port"
/>

6. Click **Choose File** and navigate to the directory where you have saved the firmware, that you have just downloaded.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/choosing-the-firmware.png"
  width="100%"
  figure-number="3"
  caption="Choosing the Firmware"
/>

7. Click the **Start** Button and wait for a couple of minutes.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/start-flashing.png"
  width="100%"
  figure-number="4"
  caption="Start Flashing the Firmware"
/>

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/upgrade-success.png"
  width="100%"
  figure-number="5"
  caption="Upgrade Firmware Success"
/>

## Testing the Installed Firmware 

1. In order for you to check if you have successfully installed the firmware on your RAK612 LPWAN Button, open the RAK Serial Port tool on your PC. 

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/serial-port.png"
  width="100%"
  figure-number="6"
  caption="RAK Serial Port Tool"
/>

* **COM Port** - this is where you choose the COM Port of your RAK612 LPWAN Button. 
* **Baudrate** - the rate, at which information is transferred. (Use **115200** for RAK612 LPWAN Button).
* **Receiving** - this is where all the responses of your AT Commands will be displayed. 
* **Sending** - this is where you input your AT Command.
* **Command** - this is where you save all of your AT Commands for quick reuse. This is very useful in the [Configuring the RAK612 LPWAN Button](configuring-the-rak612.html) section.

2. Choose the appropriate COM Port and Baud Rate for your RAK612 LPWAN Button then click the **Open** button to open the serial port.
3. Hold any key of the RAK612 LPWAN Button for more than 5 seconds and then you will be able to see the following information:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/lpwan-upgrade-success.jpg"
  width="50%"
  figure-number="7"
  caption="RAK612 LPWAN Button Upgraded Firmware"
/>


