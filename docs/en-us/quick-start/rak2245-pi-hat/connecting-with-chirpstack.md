---
title: Connect the LoRaWAN® Gateway with Chirpstack

params:

  img1:
    src: /assets/images/quick-start-guide/rak2245/8.connecting to chirpstack/advanced-ip-scanner.png
    width: 100%
    figureNumber: 1
    caption: IP address of your Raspbery Pi with the RAK2245 Pi Hat using IP Scanner
  img2:
    src: /assets/images/quick-start-guide/rak2245/8.connecting to chirpstack/chirpstack-ui.png
    width: 100%
    figureNumber: 2
    caption: ChirpStack Web-based UI
  img3:
    src: /assets/images/quick-start-guide/rak2245/8.connecting to chirpstack/gateways-in-chirpstack.jpg
    width: 100%
    figureNumber: 3
    caption: Available Gateways in Chirpstack
  img4:
    src: /assets/images/quick-start-guide/rak2245/8.connecting to chirpstack/chirpstack-last-seen.jpg
    width: 100%
    figureNumber: 4
    caption: Last Seen Status
  img5:
    src: /assets/images/quick-start-guide/rak2245/8.connecting to chirpstack/chirpstack-guide-ubuntu.png
    width: 100%
    figureNumber: 5
    caption: Chirpstack Getting Started Guide on Ubuntu
  img6:
    src: /assets/images/quick-start-guide/rak2245/8.connecting to chirpstack/chirpstack-login.png
    width: 100%
    figureNumber: 6
    caption: ChirpStack Login Page
  img7:
    src: /assets/images/quick-start-guide/rak2245/8.connecting to chirpstack/chirpstack-reg-gateway.png
    width: 100%
    figureNumber: 7
    caption: ChirpStack Registered Gateways
  img8:
    src: /assets/images/quick-start-guide/rak2245/8.connecting to chirpstack/reg-own-gateway.png
    width: 100%
    figureNumber: 8
    caption: Registering your own Gateway
  img9:
    src: /assets/images/quick-start-guide/rak2245/8.connecting to chirpstack/chirsptack-successful-register.png
    width: 100%
    figureNumber: 9
    caption: Successfully Registered the Gateway
---
# Connect the LoRaWAN® Gateway with Chirpstack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [here](https://www.chirpstack.io/).

For the RAK2245 Pi HAT Edition LoRaWAN® Gateway Concentrator Module, there are 2 ways to use the ChirpStack:

## 1. Using the built-in ChirpStack
There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware.

* When you use it for the first time after burning the latest firmware, the LoRaWAN® Gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa® Server. If you don't want to change the frequency or LoRa® Server, you don't have to do anything as this will be configured automatically when the LoRaWAN® Gateway boots.
* However if it is not the first time and you want to use the built-in ChirpStack as the LoRa® Server, follow the steps discussed in [Configuring the Gateway](configuring-the-gateway.md) the Gateway section.
* **Optional**: If ever you disabled the AP Mode and you have connected it to your own Wifi network (Client Mode). You can search for your gateway’s IP Address via [**Advanced IP Scanner**](https://www.advanced-ip-scanner.com/). Copy the IP Address of your Gateway, it should have a Manufacturer name of **Raspberry Pi Foundation**:

<rk-img :params="$page.frontmatter.params.img1" />

* There is a Web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:
    * **Browser Address**: `<Gateway IP address>:8080` (**Example**: https:/192.168.254.105:8080)
    * **Username**: admin
    * **Password**: admin

:::warning
:warning: It is advisable to change your password to tighten the security of your account. You can change this by clicking the "**change password**" button at the user icon.
:::

<rk-img :params="$page.frontmatter.params.img2" />

* Everything should be pre-configured: Device profiles have been created, the Gateway has been registered with the server, etc. If you go to the Gateways tab and click on rak_gateway, you should see the Gateway details page.

<rk-img :params="$page.frontmatter.params.img3" />

* Go to the rak_gateway and see the "**Last seen**" status. It must be a few seconds ago which signifies that the Gateway is visible in the ChirpStack server.

<rk-img :params="$page.frontmatter.params.img4" />

## 2. Using an Independent ChirpStack
There are 2 ways that you can get an independent ChirpStack:

1. Use RAK's Cloud TestingChirpStack - If you want to use RAK's Cloud Testing ChirpStack, contact RAK's Technical Support in the Forum: [https://forum.rakwireless.com/](https://forum.rakwireless.com/)
2. Setup an Independent ChirpStack by yourself.
This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it [here](https://www.chirpstack.io/guides/debian-ubuntu/):

<rk-img :params="$page.frontmatter.params.img5" />

:::warning
:warning: Remember to run the "`sudo gateway-config`" command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu [Setup RAK Gateway LoRa® concentrator](configuring-the-gateway.html#setup-rak-gateway-lora®-concentrator).
:::

* Assuming you have set it up correctly, Login to your ChirpStack to register your LoRaWAN® Gateway by opening the ChirpStack's web page in a browser by entering:
    * **Browser Address**: `<IP Address of ChirpStack>:8080`
    * **Username**: admin
    * **Password**: admin

<rk-img :params="$page.frontmatter.params.img6" />

* Click "**Gateways**" and Press "+ **CREATE**" to register your Gateway

<rk-img :params="$page.frontmatter.params.img7" />

* Click "**Create**" to register your LoRaWAN® Gateway and fill up the necessary information.

<rk-img :params="$page.frontmatter.params.img8" />

* Fill in the Gateway ID that we got from the [Configuring the Gateway](configuring-the-gateway.md) document, also called Gateway EUI.

* If you have properly configured your LoRaWAN® Gateway and there is a network connection between the external ChirpStack and your LoRaWAN® Gateway, you should see the following page and status:

<rk-img :params="$page.frontmatter.params.img9" />

**Congratulations!** :tada: You have connected your LoRaWAN® Gateway to an external ChirpStack Successfully!
