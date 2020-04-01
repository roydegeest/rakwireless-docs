---
next: setup-external-mqtt-broker
---

# Gateway-B with MQTT Bridge

In this section, we will demonstrate on how to point the External RAK7258-B Micro Outdoor Gateway to the built-in LoRa® Server of Gateway7258-A Micro Gateway.

## Packet Forwarder Set-up

1. By navigating through LoRa® Gateway tab-> LoRa® Packet Forwarder-> General Setup, set the Protocol in the drop-down list to **LoRa Gateway MQTT Bridge**.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/7.rak-gateway-mesh-rak811/mqtt-bridge-protocol.png"
  width="100%"
  figure-number="1"
  caption="Set LoRa® Gateway MQTT Bridge Protocol"
/>

## LoRa®  Gateway MQTT Bridge

1. Navigate through `LoRa® Gateway tab -> LoRa Gateway MQTT Bridge -> General Setup` and turn on this feature using the **Enable** slider.

2. Update the credentials needed in the list provided below.

    * **MQTT Broker Address**: IP address of Gateway-A
    * **MQTT Broker Port**: By default, its value is 1883. Please update this if it is not.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/7.rak-gateway-mesh-rak811/lora-gateway-mqtt-bridge.png"
  width="100%"
  figure-number="2"
  caption="LoRa® Gateway MQTT Bridge Configuration"
/>

3. After clicking "**Save & Apply**", all LoRa® traffic should be redirected via the Bridge of Gateway-B to the MQTT Brocker of Gateway-A.

## Registering RAK7258-B in RAK7258-A's LoRa® Network Server

This procedure is the same as when you registered RAK7258-A in its built-in LoRa® Network Server. Please refer to the [Set-up RAK7258-A with Built-in LoRa® Network  Server](gateway-a-built-in-ns.html#register-rak7258-gateway) and repeat the process. The image below is the representation of what your configuration should look like with the two Gateways are added.

<rk-img
  src="/assets/images/quick-start-guide/rak7258/7.rak-gateway-mesh-rak811/gateway-list.png"
  width="100%"
  figure-number="3"
  caption="LoRa® Network Server Gateway List"
/>

You can add more Gateways in the same manner as we did for the two. This is a convenient way to monitor if they are up using the "**Last Seen**" feed.