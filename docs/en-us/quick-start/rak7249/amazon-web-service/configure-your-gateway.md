# Gateway Configuring

## Packet Forwarder Set-up

1. In the Web Management Platform, navigate through `LoRa® Gateway tab-> LoRa® Packet Forwarder-> General Setup`, set the Protocol in the drop-down list to **Semtech UDP GWMP Protocol**. You need only change the Server Address in order to forward the traffic to your ChirpStack running on the Ubuntu Instance (AWS). Enter your Instance Public IP Address in the field marked with the red rectangle in the image below:

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/chirpstack-packet-forwader.jpg"
  width="100%"
  figure-number="1"
  caption="ChirpStack Packet Forwarder Configuration"
/>

1. Click "**Save and Apply**" and go to your ChirpStack Web UI running on the AWS Instance "`IP Address:8080`". Go to the Gateway tab. Press the “**Create**” button.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/chirpstack-add-gateway.jpg"
  width="100%"
  figure-number="2"
  caption="ChirpStack Gateways Creation"
/>

3. In the next window, input the **Gateway Name**, **EUI and Description**. Select a network server and Service Profile from the drop-down menu (remember those are pre-configured with the RAKwireless image). Finally click the “**Create Gateway**” button.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/chirpstack-gateway-param.jpg"
  width="100%"
  figure-number="3"
  caption="ChirpStack Gateway Parameters"
/>

4. Assuming you entered the parameters correctly, you should see your Gateway status as seen is a few second in the Gateway Details tab. You can also monitor Live LoRa® Frames in the tab with the same name to see incoming traffic.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/chirpstack-gateway-details.jpg"
  width="100%"
  figure-number="4"
  caption="ChirpStack Gateway Details"
/>

## MQTT Bridge Set-up

If you want to use the MQTT Bridge to forward your LoRa® Traffic to your LoRa® Network Server you need to configure your Gateway use the Bridge instead of the Packet Forwarder. 

1. Navigating through `LoRa® Gateway tab-> LoRa® Packet Forwarder-> General Setup`, set the Protocol in the drop-down list to **LoRa® Gateway MQTT Bridge**. Afterwhich, click "**Save and Apply**".

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/chirpstack-mqtt-bridge.jpg"
  width="100%"
  figure-number="5"
  caption="Gateway MQTT Bridge Protocol"
/>

2. Next, go to the LoRa® Gateway MQTT Bridge tab. Enable the functionality by with the blue slider and choose the type of LoRa® Network Server you are going to be using . 

3. Set the address to the address of the AWS Instance and the port to 1883, Save and Apply.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/chirpstack-gateway-mqtt-param.jpg"
  width="100%"
  figure-number="6"
  caption="Gateway MQTT Bridge Parameters"
/>

4. Lastly, register your Gateway to Chirpstack if you have not done so. You can follow the steps undergone in the Packet Forwarder Set-up section of the [Configuring your Gateway](configure-your-gateway.html#packet-forwarder-set-up) section.
