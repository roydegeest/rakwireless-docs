# Configuring the Gateway

Assuming you have successfully logged into your gateway using SSH. Enter the following command in the command line:

```sh
sudo gateway-config
```

Then, you will see a page the same as figure 1.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/1.configuring-options.png"
  width="100%"
  figure-number="1"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the gateway.
2. **Set up RAK Gateway LoRa® Concentrator** - used to configure the frequency, which the gateway will operate on, and the LoRaWAN® Server which the gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
4. **Edit packet-forwarder config-** used to open the global_conf.json file, to edit LoRaWAN®  parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

:::tip 📝 NOTE
A unique ID will be generated in for gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa® Network Server (TTN, ChirpStack).
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

```sh
sudo gateway-version
```

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/2.command-line.png"
  width="100%"
  figure-number="2"
  caption="Gateway ID using the command line"
/>

## Setting a new password for the Gateway

It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

- First, choose "1 Set pi password" option referred on figure 3 below.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/3.set-pi-password.png"
  width="100%"
  figure-number="3"
  caption="Set Pi Password"
/>

- Next, press "Yes" and you will be asked to enter your new password twice then press "Enter".

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/4.password-change.png"
  width="100%"
  figure-number="4"
  caption="Confirm Password Change"
/>

- Alright, the success message for changing password will then pop up.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/5.successful-password-change.png"
  width="100%"
  figure-number="5"
  caption="Successful Password Change"
/>


## Set up RAK Gateway LoRa® Concentrator

This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing option **2 Setup RAK Gateway LoRa® concentrator**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/6.choosing-setup-rak-gateway.png"
  width="100%"
  figure-number="6"
  caption="Choosing Setup RAK Gateway LoRa® concentrator"
/>

You can choose one of two supported LoRa® Servers here: **TTN** or
**ChirpStack**.

### Server is TTN

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/7.server-is-ttn.png"
  width="100%"
  figure-number="7"
  caption="Server Is TTN"
/>

- **The Things Network (TTN)**: If you choose TTN as the LoRa® Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/8.ttn-channel.png"
  width="100%"
  figure-number="8"
  caption="Selecting the TTN Channel Plan"
/>

After choosing the correct frequency, the success message will appear as shown in figure 9 below.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/9.frequency-changed.png"
  width="100%"
  figure-number="9"
  caption="Successfully Changed the Frequency"
/>

### Server is Chirpstack


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/10.server-is-chirpstack.png"
  width="100%"
  figure-number="10"
  caption="Server Is Chirpstack"
/>

**ChirpStack**: If you choose Chirpstack as your LoRa® Server, you will see the following page with two options available:

- **ChirpStack Channel Plan Configuration** - used to configure your Regional Frequency Band.
- **ChirpStack ADR Configure** -  used to enable/disable the Adaptive Data Rate (ADR)
functionality.

First, select option 1 for configuring your Regional Frequency Band


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/11.regional-freqband-option.png"
  width="100%"
  figure-number="11"
  caption="Regional Frequency Band Option"
/>

Then, set the IP address of the ChirpStack which you want your gateway to work with:


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/12.default-lora-ip.png"
  width="100%"
  figure-number="12"
  caption="Default LoRaServer IP Address"
/>

:::tip 📝 NOTE
The default IP Address is **127.0.0.1**, which means you will be using the Built-in LoRa® Server. If you want to use an independent LoRa® Server running on another device or a cloud based LoRa® Server, you need to set it to the corresponding IP address.
:::

- If you have instead selected "**Chirpstack ADR Configure**", you can enable/disable the Adaptive Data Rate (ADR) functionality:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/13.chirpstack-adr.png"
  width="100%"
  figure-number="13"
  caption="Chirpstack ADR Enable/Disable"
/>

