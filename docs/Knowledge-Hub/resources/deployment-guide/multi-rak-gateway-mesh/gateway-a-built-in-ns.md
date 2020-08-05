---
prev: /knowledge-hub/resources/deployment-guide/multi-rak-gateway-mesh/
next: gateway-b-mqtt-bridge
---

# Gateway-A with Built-in LoRa® NS

This section is the detailed discussion on how to set-up the built-in LoRa® Server for your RAK7249 Marco Outdoor Gateway using the Web Management Platform.

We will first set-up the built-in LoRa®  network server. Before going through the steps, access the Web Management Platform as discussed in the prior section.

## Packet Forwarder Set-up

:::tip 📝 NOTE
 For other settings and detailed documentation for this section, browse the [LoRaWAN Gateway Configuration](/knowledge-hub/resources/user-manual/web-management-platform/lora-network.html#packet-forwarder) section.
:::

1. By navigating through LoRa® Gateway tab-> LoRa® Packet Forwarder-> General Setup, set the Protocol in the drop-down list to **Build-in LoRa ® Server**.

2. You can leave the rest of the settings with their default values. Remember to "**Save & Apply**".

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/build-in-lora-server.png"
  width="100%"
  figure-number="1"
  caption="Build-in LoRa Server Protocol in Gateway"
/>

## Configure the LoRa® Server

:::tip 📝 NOTE
 For other settings and detailed documentation for this section, browse the [LoRa Network Server](/knowledge-hub/resources/user-manual/web-management-platform/lora-network.html#packet-forwarder) section.
:::

1. Navigate through LoRa® Network Server tab -> General and turn-on this feature using the Enable slider. 

2. Select your Region (Frequency Band). For this demonstration, we are going to use **EU863-870 frequency band**.

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/lora-network-server-general.png"
  width="100%"
  figure-number="2"
  caption="LoRa Network Server General"
/>

## Register RAK7249 Gateway

1. Navigate through LoRa® Network Server-> Gateway and enter the **Gateway EUI** in the field.

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/adding-gateway-eui.png"
  width="100%"
  figure-number="3"
  caption="Adding Gateway EUI"
/>

2. By pressing the "**Add**" button, you will be redirected into a new tab where you will need to fill the mandatory parameters: **Name** and **Description**.

:::tip 📝 NOTE
 The **Latitude**, **Longitude** and **Altitude** parameters are not mandatory. You can leave them for later, or leave them empty if the gateway is not stationary.
:::

3. If everything is set-up correctly, you should see the same set-up with the image shown below:

:::tip 📝 NOTE
 In order to see the Last Seen status update you need to refresh the page. There should be a value of a couple of seconds, if so than everything went well. In case there is a message **Never Seen**, there is an issue and you best redo the configuration.
:::

<rk-img
  src="/assets/images/deployment-guide/rak-gateway-mesh/gateway-successful-add.jpg"
  width="100%"
  figure-number="4"
  caption="Gateway Successful Adding"
/>

