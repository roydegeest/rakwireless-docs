---
title: Connect the LoRaWAN® Gateway with Chirpstack
---
# Connect the LoRaWAN® Gateway with Chirpstack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [here](https://www.chirpstack.io/).

## Using an Independent ChirpStack
Since the RAK7246G - LoRaWAN® Developer Gateway does not include a built-in Chirpstack, choose in the ways provided below so you can get an independent ChirpStack:
1. Use RAK's Cloud TestingChirpStack - If you want to use RAK's Cloud Testing ChirpStack, contact RAK's Technical Support in the Forum: [RAK Free Cloud Server for Testing](https://forum.rakwireless.com/t/rak-free-cloud-loraserver-for-testing/344)
2. Setup an Independent ChirpStack by yourself.

This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it [here](https://www.chirpstack.io/guides/debian-ubuntu/):

<Cimg src="/assets/images/quick-start-guide/rak7246/chirpstack_ubuntu.png" width="100%" figure_number = "1" caption="Chirpstack Getting Started Guide on Ubuntu"/>

:::warning 
 :warning: Remember to run the `sudo gateway-config` command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu "**Setup RAK Gateway LoRa® concentrator**"!
:::

Assuming you have set it up correctly, Login to your ChirpStack to register your LoRaWAN® Gateway by opening the ChirpStack's web page in a browser by entering "**IP Address of ChirpStack:8080**".

* If you are using an Independent Chirpstack, use the IP Address you have set in the Configuring the Gateway document. 
* If you are using the RAK Free Cloud Server Chirpstack `209.250.251.9`

<Cimg src="/assets/images/quick-start-guide/rak7246/chirpstack_login.png" width="100%" figure_number = "2" caption="ChirpStack Login Page"/>

* The default username is "**admin**" and the password is also "**admin**"

:::tip Note:
:pencil: If you are using the RAK Cloud Testing ChirpStack, input the account and password you have asked in the forum provided beforehand.
:::

<Cimg src="/assets/images/quick-start-guide/rak7246/chirpstack_home.png" width="100%" figure_number = "3" caption="ChirpStack Home Page"/>

* Click "**Gateways**" in the left menu and Press "**+ CREATE**" to register your Gateway

<Cimg src="/assets/images/quick-start-guide/rak7246/chirpstack_gateway.png" width="100%" figure_number = "4" caption="ChirpStack Registered Gateways"/>

* Click "Create" to register your LoRaWAN® Gateway and fill up the necessary information.

<Cimg src="/assets/images/quick-start-guide/rak7246/chirpstack_register_gateway.png" width="100%" figure_number = "5" caption="Registering your own Gateway"/>

* Fill in the Gateway ID that we got from the last section ([Configuring the Gateway](./configuring-the-gateway.md)), also called Gateway EUI.
<Cimg src="/assets/images/quick-start-guide/rak7246/gateway_id.png" width="100%" figure_number = "6" caption="Gateway ID"/>

* If you have properly configured your LoRaWAN® Gateway and there is a network connection between the external ChirpStack and your LoRaWAN® Gateway, you should see the following page and status:

<Cimg src="/assets/images/quick-start-guide/rak7246/chirpstack_success.png" width="100%" figure_number = "7" caption=" Successfully Registered the Gateway"/>

* By clicking the Live LORAWAN FRAMES tab, you can check the LoRa packets sent by the LoRa nodes into your RAK7246G - LoRaWAN® Developer Gateway

**Congratulations!** :tada: You have connected your LoRaWAN® Gateway to an external ChirpStack Successfully!




