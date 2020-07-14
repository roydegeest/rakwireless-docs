# Connect the Gateway with Chirpstack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/)

For the RAKwireless Developer Gateways, there are 2 ways to use the ChirpStack:

## 1. Using the built-in ChirpStack

There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware.

- When you use it for the first time after burning the latest firmware, the gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa®  Server. If you don't want to change the frequency or LoRa® Server, you don't have to do anything as this will be configured automatically when the gateway boots.
- However if it is not the first time and you want to use the built-in ChirpStack as the LoRa® Server, follow the steps discussed in [auto$](/rak2287-concentrator-module-wislink-series/configuring-the-gateway) section.
- **Optional:** If ever you disabled the AP Mode and you have connected it to your own Wifi network (Client Mode). You can search for your gateway’s IP Address via [**Advanced IP Scanner**](https://www.advanced-ip-scanner.com/). Copy the IP Address of your gateway, it should have a Manufacturer name of **Raspberry Pi Foundation**:


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/1.ip-scanner.png"
  width="100%"
  figure-number="1"
  caption="IP address of your LPWAN Gateway using IP Scanner"
/>

There is a Web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:

- **Browser Address**: "Gateway IP Address:8080" (**Example**: https:/192.168.254.176:8080)
- **Username**: admin
- **Password**: admin

:::warning ⚠️WARNING
It is advisable to change your password to tighten the security of your account. You can change this by clicking the "change password" button at the user icon.
:::

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/2.log-in.png"
  width="100%"
  figure-number="2"
  caption="ChirpStack Web-based UI"
/>

- Everything should be pre-configured: Device profiles have been created, the gateway has been registered with the server, etc. If you go to the Gateways tab and click on rak_gateway, you should see the gateway details page.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/3.available-gateways.jpg"
  width="100%"
  figure-number="3"
  caption="Available Gateways in Chirpstack"
/>


- Go to the rak_gateway and see the "Last seen" status. It must be a few seconds ago which signifies that the gateway is visible in the ChirpStack server.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/4.last-seen.png"
  width="100%"
  figure-number="4"
  caption="Last Seen Status"
/>

## 2. Using a Remote ChirpStack

There are 2 ways that you can get a remote ChirpStack:

1. Use RAK's Cloud TestingChirpStack
2. Setup a remote ChirpStack instance by yourself.

If you want to use RAK’s cloud testing ChirpStack, you can contact the RAKwireless team on the[ forums](https://forum.rakwireless.com/) for support.

Deploying a remote instance by yourself is a little more complicated, however, there is plenty on information on how to do so for a number of platforms/OS on the official [ChirpStack webpage](https://www.chirpstack.io/).
