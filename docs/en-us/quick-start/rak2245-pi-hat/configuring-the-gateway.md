---
title: Configuring the Gateway

params:

  img1:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/gateway_id.png 
    width: 100%
    figureNumber: 1
    caption: Config Options for the Gateway
  img2:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/gateway_id_cmd.png
    width: 70%
    figureNumber: 2
    caption: Gateway ID using the command line
  img3:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/set_pi_pwd.png
    width: 100%
    figureNumber: 3
    caption: Set Pi Password
  img4:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/confirm_pwd.png
    width: 100%
    figureNumber: 4
    caption: Confirm Password Change
  img5:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/success_pwd_change.png
    width: 100%
    figureNumber: 5
    caption: Successful Password Change
  img6:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/setup_rak_gateway.jpg
    width: 100%
    figureNumber: 6
    caption: Choosing Setup RAK Gateway LoRa® concentrator
  img7:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/server_ttn.png
    width: 100%
    figureNumber: 7
    caption: Server is TTN
  img8:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/ttn_channel_plan.jpg
    width: 100%
    figureNumber: 8
    caption: Selecting the TTN Channel Plan
  img9:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/success_freq_change.png
    width: 100%
    figureNumber: 9
    caption: Successfully Changed the Frequency
  img10:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/chirpstack.png
    width: 100%
    figureNumber: 10
    caption: Server Is Chirpstack
  img11:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/chirpstack_channel.png
    width: 100%
    figureNumber: 11
    caption: Regional Frequency Band Option
  img12:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/loraserver_ip.png
    width: 100%
    figureNumber: 12
    caption: Default LoRaServer IP Address
  img13:
    src: /assets/images/quick-start-guide/rak2245/6.configure the gateway/adr_settings.png
    width: 100%
    figureNumber: 13
    caption: Chirpstack ADR Enable/Disable
---
# Configuring the Gateway

Assuming you have successfully logged into your Gateway using SSH, enter the following command in the command line:

```sh
sudo gateway-config
```

You will now then see a page like the following picture below

<rk-img :params="$page.frontmatter.params.img1" />

1. **Set pi password** - used to set/change the password of the Gateway.
2. **Set up RAK Gateway LoRa® Concentrator** - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN® Server which the Gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
4. **Edit packet-forwarder config**- used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

:::tip 📝 NOTE:
 A unique ID will be generated in for Gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa® Network Server (TTN, ChirpStack)
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

```sh
sudo gateway-version
```
<rk-img :params="$page.frontmatter.params.img2" />

## Setting a new password for the Gateway
It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

1. First, choose "**1 Set pi password**" option referred on the image below.

<rk-img :params="$page.frontmatter.params.img3" />

2. Next, press "**Yes**" and you will be asked to enter your new password twice then press "**Enter**".

<rk-img :params="$page.frontmatter.params.img4" />

3. Alright, the success message for changing password will then pops up.

<rk-img :params="$page.frontmatter.params.img5" />

## Setup RAK Gateway LoRa® Concentrator

This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing "**2 Setup RAK Gateway LoRa® concentrator**"

<rk-img :params="$page.frontmatter.params.img6" />

You can choose one of two supported LoRa® Servers here: **TTN** or **ChirpStack**.

### Server is TTN

<rk-img :params="$page.frontmatter.params.img7" />

* **TTN (The Things Network)** - If you choose TTN as the LoRa® Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan.

<rk-img :params="$page.frontmatter.params.img8" />

After choosing the correct frequency, the success message will appear as shown below.

<rk-img :params="$page.frontmatter.params.img9" />

### Server is Chirpstack

<rk-img :params="$page.frontmatter.params.img10" />

**ChirpStack** - If you choose Chirpstack as your LoRa® Server, you will see the following page with two options available:

* **ChirpStack Channel Plan Configuration** - used to configure your Regional Frequency Band.
* **ChirpStack ADR Configure** - used to enable/disable the Adaptive Data Rate (ADR) functionality.

First, select "**1 ChirpStack Channel-plan configuration**" for configuring your frequency channel. Then, set the IP address of the ChripStack.

<rk-img :params="$page.frontmatter.params.img11" />

<rk-img :params="$page.frontmatter.params.img12" />

:::tip 📝 NOTE
 The default IP Address is "`127.0.0.1`". If you want to use an external LoRaServer, you need to set it to its IP Address.
:::

* If you have instead selected "**Chirpstack ADR Configure**" you can enable/disable the Adaptive Data Rate (ADR) functionality:

<rk-img :params="$page.frontmatter.params.img13" />