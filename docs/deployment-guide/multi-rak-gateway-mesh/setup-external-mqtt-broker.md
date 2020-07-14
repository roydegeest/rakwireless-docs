---
next: rak-lpwan-node
---

# External MQTT Broker Setup

This section provides the procedure in setting the external MQTT Broker for your Application Setup.

## Preparing the Raspberry Pi

:::tip 📝 NOTE:
 We are going to use going to use a **Raspberry Pi 3B+** for this tutorial, as the device that is going to be hosting Mosquitto (a popular MQTT broker).
:::

* The following items listed below with its download links for the tools and files needed for this demonstration:
  * [Raspbian Buster Lite Image](https://www.raspberrypi.org/downloads/raspbian/)
  * [Balena Etcher Tool](https://www.balena.io/etcher/)
  * [PuTTY SSH Client](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

1. Download the Raspbian Buster Lite image and flash it into your SD Card using the Balena Etcher. You can follow the steps provided in the Device Firmware Setup section. Once done, plug the SD card into the **Raspberry Pi 3B+** SD card slot and power it.

:::tip 📝 NOTE:
 It is highly recommended to follow the configurations of [Raspberry Pi headless](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md).
:::

2. Using the PuTTY SSH client, connect to the Raspberry Pi 3B+ with the following credentials:

    * **Username**: pi
    * **Password**: raspberry

3. Execute the following command and note the IP address of the interface you will be using to connect to the network. You will need this, as it will be the address for your MQTT Broker when configuring the Gateway:

```sh
ifconfig
```
<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/rpi-interfaces.jpg"
  width="75%"
  figure-number="1"
  caption="Raspberry Pi interfaces"
/>

## Installing Mosquitto

1. Install the MQTT Broker (Mosquitto) via the command:

```sh
sudo apt install mosquitto mosquitto-clients
```
<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/mqtt-installation.jpg"
  width="80%"
  figure-number="2"
  caption="Mosquitto installation"
/>

2. Mosquitto clients help us easily test MQTT through a command line utility. We will use two command windows; one to subscribe to a topic and one to publish a message to it. Those will be explained in detail further in the tutorial.

:::tip 📝 NOTE:
 This command is not mandatory, however it is recommended as it creates a mosquitto service that will run the broker on startup.
:::

```sh
sudo systemctl enable mosquitto.service
```

## Publish to the MQTT Broker

We will now then configure the Gateway to connect to our external MQTT broker. For the purpose of this example, we are going to use the built-in LoRa® Server.

1. First go to the Packet Forwarder Tab and choose Built-in LoRa® Server as your Protocol:

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/protocol-selection.jpg"
  width="100%"
  figure-number="3"
  caption="Protocol selection"
/>

2. Make sure you have the LoRa® Network Server **Enabled** in the General tab:

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/builtin-server-activation.jpg"
  width="100%"
  figure-number="4"
  caption="Built-in LoRa® Server activation"
/>

3. Add Your Gateway in the Gateway tab if you haven’t done so already. You can also add multiple gateways depending on your preference.

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/lora-gateway-config.jpg"
  width="100%"
  figure-number="5"
  caption="LoRa® Server Gateway configuration"
/>

4. Finally, go to the **Global Integration** tab and enter the address where you have your Mosquitto instance running in the MQTT Broker Address field leaving the Port with the default `1883` value.

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/set-global-integration.jpg"
  width="100%"
  figure-number="6"
  caption="Setting up the Global Integration"
/>

Now that the Gateway parameters are set, we will now register your application in order to be able to send and receive data. We are going to use the **RAK811 LPWAN Node** as an example in the next sub-section.

## Downlink

There is a convenient tool in the Built-in LoRa® Server for sending a Downlink frame.

1. You can find it in the Device tab in the LoRa® Network Server section. You can choose your Type of frame (**confirmed/unconfirmed**), the Frame port and the Hex Data shown in the image below:

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/downlink.jpg"
  width="100%"
  figure-number="7"
  caption="LoRa® Network Server Device Downlink tool"
/>

2. Once you schedule a message for downlink it will be displayed in the Live Device Data window. Upon sending the next uplink via the RAK Serial Port Tool you will also see it there, as it needs an uplink frame in order to send the downlink in the RX1 window shown in the image below.

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/rec-downlink-frm.jpg"
  width="100%"
  figure-number="8"
  caption="Received Downlink Frame"
/>

3. If you want to test the Gateway downlink via the external MQTT Broker, you need to first create a json file which you will be sensing your data in. Below is what the file formatting structure needs to look like:


:::tip 📝 NOTE:
* "**confirmed**": **true** – This is the LoRa® frame type. True (confirmed), False (unconfirmed)
* "**data**": "**TEST**" – example data to be sent
* "**fPort**": **10** – the Frame Port Number
:::


```json
{
  "confirmed": true,
  "fPort": 10,
  "data": "1001"
}
```

:::tip 📝 NOTE:
 You need to have a **Base64** encoded **HEX data** for the above to work.
:::

4. Create the file, for example with the following command and copy the data in discussed above:

```sh
sudo nano test.json
```

5. After you have created the file, you need to schedule it for downlink. This means that you have to publish it via Mosquitto with the command:

```sh
sudo mosquito_pub application/{{application_ID{{/device/{{device_EUI}}/ tx –f test.json
```

* The packet will be scheduled for downlink, which you can see in the Gateway Packet logger.
* When the next uplink frame that comes for the Application/Device specified by the **application_ID** and **device_EUI** is received, the Gateway will send the data in the RX1 window to the node. You should have a response similar to the one in **Figure 8**.