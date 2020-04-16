# Application Demonstration

In this section, you will learn the three different open source application demo of the RAK815 Hybrid Location Tracker. 

## Log Information

After you finish downloading the application, you can view the Log Information through the serial port defined by the firmware. But first, you need to connect **Pin3 >> Pin5, Pin4 >> Pin6** on the UART switch Interface. Refer to the [RAK815 Hybrid Location Tracker Datasheet](https://doc.rakwireless.com/datasheet/rakproducts/rak815-hybrid-location-tracker-datasheet) for proper reference.

:::tip 📝 NOTE
The serial program used in this demonstration is CommUart Assistant, although you may use other serial terminals.
:::

### See Log Information

After successfully installing the driver, connect the device to the PC via the Micro
USB connector. Then reset (reset Button is defined as SW3) device will see the following
log information in the serial port.

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/commuart-assistant-serial-terminal.jpg"
  width="100%"
  figure-number="1"
  caption="CommUart Assistant Serial Terminal"
/>

## LoRaWAN® Demo

* Turn on your RAK815 and download the LoRaWAN® Demonstration. 
* Navigate to the Bluetooth settings of your mobile phone and check for "RAK815 LoRaWAN® Demo". 

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/bluetooth-radio-status.jpg"
  width="50%"
  figure-number="2"
  caption="Bluetooth Radio Status in Mobile Phone"
/>

* Using your mobile devices, search for "**nordic**" in Apple Store or Google Play Store and install the nRF Connect App.

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/nrf-connect-app.jpg"
  width="100%"
  figure-number="3"
  caption="nRF Connect App"
/>

* Open the app and connect to the device's Bluetooth radio "**RAK813
LoRaWAN® Demo**". Then, click RX Characteristic to
send data.

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/connect-to-nrf.jpg"
  width="100%"
  figure-number="4"
  caption="Connecting to RAK815 Bluetooth through nRF Connect"
/>

* Type the value `123456` as a sample message and click "**send**".

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/send-to-nrf.jpg"
  width="100%"
  figure-number="5"
  caption="Sending Message through nRF Connect"
/>

* After sending, you can see the message in the serial port's Log information.

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/message-in-serial-port.jpg"
  width="100%"
  figure-number="6"
  caption="Message shown in the Serial Port log Information"
/>

### Parameters using LoRaWAN® Demo

The LoRaWAN® web server provider selected use for this case is The Things Network (TTN). To know more about setting up your LoRa® Gateway device, refer to this **[page](https://www.thethingsnetwork.org/labs/story/rak831-lora-gateway-from-package-to-online).**

* After getting OTAA or ABP parameters of LoRa® device from TTN, you can write data into the flash of RAK815 by transmitting data
through Bluetooth. The format of the data you are sending must be as shown below:

```
lora_cfg:dev_eui=xxxxxxxxxxxxxxxx&app_eui=xxxxxxxxxxxxxxxx&app_key=xxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx&dev_addr=xxxxxxxx&nwkskey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxx&appskey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

:::tip 📝 NOTE
Because the information is too long, the serial port won't show the details of the configuration.
:::

* After successfully configuring your device parameters, a message will be shown in your serial port saying: "**LoRaWAN**® **parameters configured successfully**".

* Then, **Reset** the device. If your LoRa® gateway device is ready, RAK815 will send a join request to LoRaWAN® network server. You can see the successful information in the terminal. 

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/lorawan-status.jpg"
  width="100%"
  figure-number="7"
  caption="LoRaWAN® Parameters Configuration Status"
/>

* You can also see the data sent by the device on the TTN:

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/ttn-param-lorawan.jpg"
  width="100%"
  figure-number="8"
  caption="LoRaWAN® Parameter Settings in TTN"
/>

## Peripherals Demo

* **Download** the Peripherals Demo into your RAK815.
* Navigate to the Bluetooth settings of your mobile phone and check for **"RAK815 Peripherals Demo"**. 
* The device's log information serial port will print the device's sensor information every five
seconds.

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/dev-info-status.jpg"
  width="100%"
  figure-number="9"
  caption="Device Information Status"
/>

* Similarly with the LoRaWAN® Demo, you can also send message through the nRF Connect app you installed. The message can be viewed to our serial terminal as shown in the image below.

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/message-in-serial-port2.jpg"
  width="100%"
  figure-number="10"
  caption="Message Received shown in Serial Port"
/>

* If you connect the LCD to the LCD's expansion interface, you can also see the data
for each sensor on the LCD display.

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/message-in-lcd.jpg"
  width="50%"
  figure-number="11"
  caption="Message Status shown in LCD"
/>

## Scan Demo

* Download the Scan Demo into your RAK815.
* Navigate to the Bluetooth settings of your mobile phone and check for **"RAK815 Scan Demo"**. 
* Same with the previous application, open the nRF Connect app and connect to the Bluetooth named "RAK815 Scan Demo"; configure the device by sending the LoRaWAN® parameters. The configuration status can be seen in the serial port as shown in the figure below. 

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/lorawan-status2.jpg"
  width="100%"
  figure-number="12"
  caption="LoRaWAN® Parameters Configuration Status"
/>

* After successfully configuring the parameters, check if your LoRaWAN® gateway has been set in advance. Reset the device and a message will be sent to your terminal that the device has successfully joined in OTAA. 

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/otaa-activation.jpg"
  width="100%"
  figure-number="13"
  caption="OTAA Activation Message"
/>

* Next, if you press the first button of the device, see the figure below. The device will
scan the surrounding Bluetooth device for 1s. 

:::tip 📝 NOTE
This device can only scan Bluetooth BLE devices.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/button-press-ble.jpg"
  width="50%"
  figure-number="14"
  caption="Pressing the Button to Scan BLE"
/>

* If the device scans a Bluetooth BLE device, the scanned device information is printed
out from the log information serial port.

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/scanned-ble-status.jpg"
  width="100%"
  figure-number="15"
  caption="Scanned BLE Information Status"
/>

* If your device is in a LoRaWAN® connection state, at this point your device will send
the Bluetooth BLE device information you scanned to the LoRaWAN® server.

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/scanned-ble-ttn-stat.jpg"
  width="100%"
  figure-number="16"
  caption="Scanned BLE Device Information shown in TTN"
/>

* In addition, if you connect the LCD to the device LCD expansion interface, you can
view the real-time status of the device on the LCD

<rk-img
  src="/assets/images/quick-start-guide/rak815/5application-demonstration/status-in-lcd.jpg"
  width="50%"
  figure-number="17"
  caption="Status Update shown in LCD"
/>


