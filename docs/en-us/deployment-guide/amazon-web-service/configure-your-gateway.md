---
next: false
---

# Configuring your Gateway

## Configuring the Semtech Packet Forwarder

1. In the Gateway Web UI go to the LoRa Gateway tab and open the LoRa Packet Forwarder sub menu. On details about the configuration options of the Gateway check [here](/en-us/user-manual/spectrum-settings-guide/). By default, the Gateway is set to point to TTN, using the Semtech Packet Forwarder. You need only change the Server Address in order to forward the traffic to your ChirpStack running on the Ubuntu Instance (AWS). Enter your Instance Public IP Address in the field marked with the red rectangle in the figure below.


<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/chirpstack-packet-forwader.jpg"
  width="100%"
  figure-number="1"
  caption="ChirpStack Packet Forwarder Configuration"
/>

2. Save and Apply the changes and go to your ChirpStack Web UI running on the AWS Instance (IP Address:8080). Go to the Gateway tab. Press the “Create” button.

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/chirpstack-add-gateway.jpg"
  width="100%"
  figure-number="2"
  caption="ChirpStack Gateways Creation"
/>

3. In the next window input the **Gateway Name, EUI and Description**. Select a network server and Service Profile from the drop-down menu (remember those are pre-configured with the RAKwireless image). Finally click the “Create Gateway” button.

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/chirpstack-gateway-param.jpg"
  width="100%"
  figure-number="3"
  caption="ChirpStack Gateway Parameters"
/>

4. Assuming you entered the parameters correctly you should see your Gateway status as seen is a few second in the Gateway Details tab. You can also monitor Live LoRa Frames in the tab with the same name to see incoming traffic.

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/chirpstack-gateway-details.jpg"
  width="100%"
  figure-number="4"
  caption="ChirpStack Gateway Details"
/>

## Configuring the MQTT Bridge

If you want to use the MQTT Bridge to forward your LoRa® Traffic to your LoRa® Network Server you need to configure your Gateway use the Bridge instead of the Packet Forwarder. 

1. Go back to the Gateway Web UI and go to the Packet Forwarder sub-menu. Change the protocol from the drop-down menu to LoRa Gateway MQTT Bridge. Save and Apply

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/chirpstack-mqtt-bridge.jpg"
  width="100%"
  figure-number="5"
  caption="Gateway MQTT Bridge Protocol"
/>

2. Next go to the LoRa Gateway MQTT Bridge sub-menu. Enable the functionality by with the blue slider and choose the type of LoRa Network Server you are going to be using (this is important as there is difference in the MQTT topic templates, JSON vs Protobuf, for 2x vs 3x respectively). 

3. Lastly set the address to the address of the AWS Instance and the port to 1883, Save and Apply.

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/chirpstack-gateway-mqtt-param.jpg"
  width="100%"
  figure-number="6"
  caption="Gateway MQTT Bridge Parameters"
/>

4. Lastly you need to add the Gateway in ChirpStack if you haven’t already done so (for example if you used it with the Packet Forwarder before). This is done the same way as it was in this [section](configure-your-gateway.html)
