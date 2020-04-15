---
static_root: /assets/images/quick-start-guide/rak2245-stamp/configuring-the-gateway
---

# Configuring the Gateway

Assuming you have successfully logged into your LoRaWAN® Gateway using SSH, enter the following command in the command line:

```bash
sudo gateway-config
```

You will now then see a page like the following picture below

<rk-img
  :src="`${$frontmatter.static_root}/tdvxaiqw3kzn13hawchq.png`"
  width="100%"
  figure-number="1"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the LoRaWAN® Gateway.
2. **Set up RAK Gateway LoRa Concenterator** - used to configure the frequency, which the LoRaWAN® Gateway will operate on, and the LoRa® Server which the LoRaWAN® Gateway will work with.
3. **Edit packet-forwarder config-** used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
4. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
5. **Configure Wifi** - used to configure the Wi-Fo settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

::: tip 📝 NOTE
A unique ID will be generated in for LoRaWAN® Gateway. This is also called Gateway EUI and is essential for registering the gateway with any LoRa Network Server (TTN, Chirpstack).
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

<rk-img
  :src="`${$frontmatter.static_root}/f03ijojvwe5w3zt6tjec.png`"
  width="100%"
  figure-number="2"
  caption="Gateway ID using the command line"
/>

## Set a new password for the LoRaWAN® Gateway

It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

1. First, choose "**1 Set pi password**" option referred on the image below.

<rk-img
  :src="`${$frontmatter.static_root}/qgyeekjep9ew26gae8er.png`"
  width="100%"
  figure-number="3"
  caption="Set Pi Password"
/>

2. Next, press "**Yes**" and you will be asked to enter your new password twice then press "**Enter**".

<rk-img
  :src="`${$frontmatter.static_root}/lkxgb6gnw0jfcyijsz4a.png`"
  width="100%"
  figure-number="4"
  caption="Confirm Password Change"
/>

3. Alright, the success message for changing password will then pop up.

<rk-img
  :src="`${$frontmatter.static_root}/ey2uuvxzbotxesld4rbd.png`"
  width="100%"
  figure-number="5"
  caption="Successful Password Change"
/>

## Set up RAK Gateway LoRa® concentrator

This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing "**2 Setup RAK Gateway LoRa® concentrator**".

<rk-img
  :src="`${$frontmatter.static_root}/hdt5witlefhgxso1nyce.jpg`"
  width="100%"
  figure-number="6"
  caption="Choosing Setup RAK Gateway LoRa® concentrator"
/>

You can choose one of two supported LoRa® Servers here: **TTN** or **ChirpStack**.

### Server is TTN

<rk-img
  :src="`${$frontmatter.static_root}/qsddpkzi6ymsqxha59c1.png`"
  width="100%"
  figure-number="7"
  caption="Server Is TTN"
/>

- **TTN (The Things Network)** - If you choose TTN as the LoRa® Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan

<rk-img
  :src="`${$frontmatter.static_root}/hv28mtqnkmvcvppwoqh8.jpg`"
  width="100%"
  figure-number="8"
  caption="Selecting the TTN Channel Plan"
/>

After choosing the correct frequency, the success message will appear as shown below.

<rk-img
  :src="`${$frontmatter.static_root}/sb4qkln2jjswm2geyiwp.png`"
  width="100%"
  figure-number="9"
  caption="Successfully Changed the Frequency"
/>

### Server is Chirpstack

<rk-img
  :src="`${$frontmatter.static_root}/orau1hsti7dngudqohup.png`"
  width="100%"
  figure-number="10"
  caption="Server Is Chirpstack"
/>

**ChirpStack** - If you choose Chirpstack as your LoRa® Server, you will see the following page with two options available:

- **ChirpStack Channel Plan Configuration** - used to configure your Regional Frequency Band.
- **ChirpStack ADR Configure** - used to enable/disable the Adaptive Data Rate (ADR) functionality.

First, select option 1 for configuring your Regional Frequency Band

<rk-img
  :src="`${$frontmatter.static_root}/okcf7wuywmusb0oos5mw.png`"
  width="100%"
  figure-number="11"
  caption="Regional Frequency Band Option"
/>

Then, set the IP address of the ChirpStack which you want your LoRaWAN® Gateway to work with:

<rk-img
  :src="`${$frontmatter.static_root}/jiut8slqwomg2nel9lho.png`"
  width="100%"
  figure-number="12"
  caption="Default ChirpStack IP Address"
/>

::: tip 📝 NOTE
The default IP Address is **`127.0.0.1`** which means you will be using the Built-in LoRa® Server. If you want to use an independent LoRa® Server running on another device or a cloud based LoRa® Server, you need to set it to the corresponding IP address
:::

- If you have instead selected "**Chirpstack ADR Configure**" you can enable/disable the Adaptive Data Rate (ADR) functionality:

<rk-img
  :src="`${$frontmatter.static_root}/sx6la0lcjcf7d4qf9wqe.png`"
  width="100%"
  figure-number="13"
  caption="Chirpstack ADR Enable/Disable"
/>
