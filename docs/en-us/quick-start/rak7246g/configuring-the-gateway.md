---
title: Configuring the Gateway
---
# Configuring the Gateway

Assuming you have successfully logged into your LoRaWAN® Gateway using SSH, enter the following command in the command line:

```sh
sudo gateway-config
```

You will now then see a page like the following picture below

<Cimg src="/assets/images/quick-start-guide/rak7246/gateway_id.png" width="100%" figure_number = "1" caption="Config Options for the Gateway"/>

1. **Set pi password** - used to set/change the password of the LoRaWAN® Gateway.
2. **Set up RAK Gateway LoRa® Concentrator** - used to configure the frequency, which the LoRaWAN® Gateway will operate on, and the LoRaWAN® Server which the LoRaWAN® Gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
4. **Edit packet-forwarder confi**g**- used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.

:::tip Note:
:pencil: A unique ID will be generated in for LoRaWAN® Gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa® Network Server (TTN, ChirpStack)
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

```sh
sudo gateway-version
```

<Cimg src="/assets/images/quick-start-guide/rak7246/gateway_id_cmd.png" width="70%" figure_number = "2" caption="Gateway ID using the command line"/>

## Setting a new password for the Gateway
It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

1. First, choose "**1 Set pi password**" option referred on the image below.

<Cimg src="/assets/images/quick-start-guide/rak7246/set_pi_pwd.png" width="100%" figure_number = "3" caption="Set Pi Password"/>

2. Next, press "**Yes**" and you will be asked to enter your new password twice then press "**Enter**".

<Cimg src="/assets/images/quick-start-guide/rak7246/confirm_pwd.png" width="100%" figure_number = "4" caption="Confirm Password Change"/>

3. Alright, the success message for changing password will then pops up.

<Cimg src="/assets/images/quick-start-guide/rak7246/success_pwd_change.png" width="100%" figure_number = "5" caption="Successful Password Change"/>

## Setup RAK Gateway LoRa® Concentrator

This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing "**2 Setup RAK Gateway LoRa® concentrator**"

<Cimg src="/assets/images/quick-start-guide/rak7246/setup_rak_gateway.png" width="100%" figure_number = "6" caption="Choosing Setup RAK Gateway LoRa® concentrator"/>

You can choose one of two supported LoRa® Servers here: **TTN** or **ChirpStack**.

### Server is TTN

<Cimg src="/assets/images/quick-start-guide/rak7246/server_ttn.png" width="100%" figure_number = "7" caption="Server is TTN"/>

* **TTN (The Things Network)** - If you choose TTN as the LoRa® Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan.


<Cimg src="/assets/images/quick-start-guide/rak7246/ttn_channel_plan.jpg" width="100%" figure_number = "8" caption="Selecting the TTN Channel Plan"/>

After choosing the correct frequency, the success message will appear as shown below.

<Cimg src="/assets/images/quick-start-guide/rak7246/success_freq_change.png" width="100%" figure_number = "9" caption="Successfully Changed the Frequency"/>

### Server is Chirpstack
<Cimg src="/assets/images/quick-start-guide/rak7246/chirpstack.png" width="100%" figure_number = "10" caption="Server Is Chirpstack"/>

* **ChirpStack** - If you choose Chirpstack as your LoRa® Server, choose "2 Server is Other server". First, configure your Regional Frequency Band by choosing the option below:

<Cimg src="/assets/images/quick-start-guide/rak7246/reg_frequency.png" width="100%" figure_number = "11" caption="Regional Frequency Band Option"/>

For this example, we will be using EU868 Frequency Plan.

<Cimg src="/assets/images/quick-start-guide/rak7246/select_chirpstack_plan.png" width="100%" figure_number = "12" caption="Selecting the Chirpstack Channel Plan"/>

Then, set the IP address of the ChirpStack which you want your LoRaWAN® Gateway to work with:

<Cimg src="/assets/images/quick-start-guide/rak7246/default_ip.png" width="100%" figure_number = "13" caption="Default LoRaServer IP Address"/>

:::tip Note:
:pencil: Unlike the other RAK boards, the RAK7246G - LoRaWAN® Developer Gateway does not have a Built-in LoRa® Server. In this document, the IP Address of the Chirpstack is shown above. If you have another ChirpStack, you can fill its IP address here too.
:::

You can then open your Chirpstack webpage by using the link below as an example. Make sure to have the [**IP Address**] changed same with what you have input in the previous step.

```http
http://[IP Address]:8080/#/login
```