---
static_root: /assets/images/quick-start-guide/rak2245-stamp/connect-with-chirpstack
---

# Connect the Gateway with ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/)

For the RAK2245 Stamp Edition - LPWAN Gateway Concentrator Module, there are 2 ways to use the ChirpStack:

### 1. Using the built-in ChirpStack

There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware.

- When you use it for the first time after burning the latest firmware, the Gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa® Server. If you don't want to change the frequency or LoRa® Server, you don't have to do anything as this will be configured automatically when the gateway boots.
- However if it is not the first time and you want to use the built-in ChirpStack as the LoRa® Server, follow the steps discussed in [Configuring the Gateway](/en-us/quick-start-guide/rak2245-stamp/configuring-the-gateway.html) section.
- **Optional:** If ever you disabled the AP Mode and you have connected it to your own Wifi network (Client Mode). You can search for your gateway’s IP Address via [**Advanced IP Scanner**](https://www.advanced-ip-scanner.com/). Copy the IP Address of your Gateway, it should have a Manufacturer name of **Raspberry Pi Foundation**:

<rk-img
  :src="`${$frontmatter.static_root}/mtfxbfnu0pxildkxayzt.png`"
  width="100%"
  figure-number="1"
  caption="IP address of your RAK2245 Stamp Edition - LPWAN Gateway using IP Scanner"
/>

There is a Web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:

- **Browser Address**: "Gateway IP Address:8080" (**Example**: https:/192.168.254.176:8080)
- **Username**: admin
- **Password**: admin

::: warning ⚠️ WARNING
It is advisable to change your password to tighten the security of your account. You can change this by clicking the \"change password\" button at the user icon.
:::

<rk-img
  :src="`${$frontmatter.static_root}/twyskhnlh3qztmnjqbal.png`"
  width="100%"
  figure-number="2"
  caption="ChirpStack Web-based UI"
/>

- Everything should be pre-configured: Device profiles have been created, the Gateway has been registered with the server, etc. If you go to the Gateways tab and click on rak_gateway, you should see the Gateway details page.

<rk-img
  :src="`${$frontmatter.static_root}/nm1rcooh5749oeyknm7t.png`"
  width="100%"
  figure-number="3"
  caption="Available Gateways in Chirpstack"
/>

- Go to the rak_gateway and see the "Last seen" status. It must be a few seconds ago which signifies that the Gateway is visible in the ChirpStack server.

<rk-img
  :src="`${$frontmatter.static_root}/qzfweifwadyreztjellx.png`"
  width="100%"
  figure-number="4"
  caption="Last Seen Status"
/>

### 2. Using an Independent ChirpStack

There are 2 ways that you can get an independent ChirpStack:

1. Use RAK's Cloud TestingChirpStack - If you want to use RAK's Cloud Testing ChirpStack, contact RAK's Technical Support in the Forum: [https://forum.rakwireless.com/](https://forum.rakwireless.com/)
2. Setup an Independent ChirpStack by yourself.

This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it [here](https://www.chirpstack.io/guides/debian-ubuntu/)

<rk-img
  :src="`${$frontmatter.static_root}/vn6fioh16k6zjdplr0it.png`"
  width="100%"
  figure-number="5"
  caption="Chirpstack Getting Started Guide on Ubuntu"
/>

::: warning ⚠️ WARNING
Remember to run the \"`sudo gateway-config`\" command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu \"**Setup RAK Gateway LoRa**® **concentrator**\"!
:::

- Assuming you have set it up correctly, Login to your ChirpStack to register your Gateway by opening the ChirpStack's web page in a browser by entering "IP Address of ChirpStack:8080".

<rk-img
  :src="`${$frontmatter.static_root}/rmibul5ouzluictf9zpq.png`"
  width="100%"
  figure-number="6"
  caption="ChirpStack Login Page"
/>

- The default username is "**admin**" and the password is also "**admin**".

<rk-img
  :src="`${$frontmatter.static_root}/pxxn6cq9hox9mtjzqxep.png`"
  width="100%"
  figure-number="7"
  caption="ChirpStack Home Page"
/>

- Click "Gateways" and Press "**+ CREATE**" to register your Gateway.

<rk-img
  :src="`${$frontmatter.static_root}/tqyaaom3kzxbgj51eapl.png`"
  width="100%"
  figure-number="8"
  caption="ChirpStack Registered Gateways"
/>

- Click "**Create**" to register your Gateway and fill up the necessary information.

<rk-img
  :src="`${$frontmatter.static_root}/ku6wofqafkogdpndggwu.png`"
  width="100%"
  figure-number="9"
  caption="Registering your own Gateway"
/>

- Fill in the Gateway ID that we got from the last section ([Configuring the Gateway](/en-us/quick-start-guide/rak2245-stamp/configuring-the-gateway.html)), also called Gateway EUI.
- If you have properly configured your Gateway and there is a network connection between the external ChirpStack and your Gateway, you should see the following page and status:

<rk-img
  :src="`${$frontmatter.static_root}/p9wtubhkjdsatrhkwvfu.png`"
  width="100%"
  figure-number="10"
  caption="Successfully Registered the Gateway"
/>

- Congratulations! :tada: You have connected your Gateway to an external ChirpStack Successfully!
