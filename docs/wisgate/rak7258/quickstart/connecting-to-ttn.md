---
next: false
---
# Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to use long range gateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about The Things Network [here](https://www.thethingsnetwork.org/docs/).

- First, you should have connected your RAK7258 Micro Gateway to the router in order to access the internet according to the method which has been introduced in the [Access the Internet](/wisgate/rak7258/quickstart/access-the-internet.html) section of this document.
- Now go to the TTN Website: [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/ttn-homepage.png"
  width="100%"
  figure-number="1"
  caption="The Things Network Home Page"
/>


1. In the **Register Gateway** menu, select the “**I’m using the legacy packet forwarder**” option, and fill-in the Gateway EUI.

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/register-gateway.png"
  width="100%"
  figure-number="2"
  caption="Registering your Gateway"
/>

:::tip 📝 NOTE:
 The Gateway EUI can be found either on the sticker on the casing or via the LoRa® Packet Forwarder page in the LoRa® Gateway menu once you log via the Web UI.
:::

2. Select your [Frequency Plan](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans.html) depending on your location. This should populate the Router field. Optionally you can choose to enter the Gateway coordinates in the map’s upper right corner and select if the gateway is indoor or outdoor via the Antenna placement field below the map.

3. Upon successful registration you should see the following screen:

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/ttn-successful.png"
  width="100%"
  figure-number="3"
  caption="Gateway successfully connected to The Things Network (TTN)"
/>

:::tip 📝 NOTE:
 By default, the Gateway is set to connect to TTN. For detailed information about advanced configuration options refer to the [LoRaWAN® Gateway Configuration](/user-manual/web-management-platform/lorawan-gateway-configuration.html#_1-lora®-packet-forwarder) section.
:::


