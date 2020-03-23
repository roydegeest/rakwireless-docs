---
static_root: /assets/images/quick-start-guide/rak7243c/2.product-configuration/2.accessing-gateway/1.accessing-internet
---

# Accessing the Internet

Assuming you have successfully logged into your LoRaWAN® Gateway using SSH. Enter the following command in the command line:

```bash
sudo gateway-config
```

You will now then see a page like the following picture below:

<rk-img
  :src="`${$frontmatter.static_root}/01.pgz9vj3jtvdmollkanqc.png`"
  width="100%"
  figure-number="1"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the LoRaWAN® Gateway.
2. **Set up RAK Gateway LoRa Concentrator** - used to configure the frequency, which the LoRaWAN® Gateway will operate on, and the LoRaWAN® Server which the LoRaWAN® Gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
4. **Edit packet-forwarder config-** used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure APN Name -** used to configure the APN name of pppd.
7. **Configure LTE Module -** (Online for the Cellular Version) - used to configure automatic LTE network connection on startup.
8. **Configure LAN** - used to configure the Ethernet adapter settings.

### Connect through Wi-Fi

If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi 3B+ by choosing "**5 Configure Wifi**". By default, the RAK7243C LoRaWAN® Developer Gateway works in Wi-Fi AP Mode. In order for the Gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  :src="`${$frontmatter.static_root}/02.bzvol7clyvogrlfcf6mm.png`"
  width="100%"
  figure-number="2"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - the LoRaWAN® Gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the LoRaWAN® Gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

::: warning
In order to enable Wi-Fi Client Mode, you have to disable first the AP Mode.
:::

Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", you can now then connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**":

<rk-img
  :src="`${$frontmatter.static_root}/03.oedelnm55crlacr1qezp.png`"
  width="100%"
  figure-number="3"
  caption="Add a new SSID"
/>

- Start by selecting your country of residence:

<rk-img
  :src="`${$frontmatter.static_root}/04.tho0wgcekiybxiyw1lg1.png`"
  width="100%"
  figure-number="4"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect:

::: warning
Please ensure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK7243C again via SSH in Wi-Fi AP Mode. If stuck in this situation, please follow this procedure listed in the [Accessing the Internet](#reverting-to-wi-fi-ap-mode) document which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  :src="`${$frontmatter.static_root}/05.d2h64zg2aqhpwtzektci.png`"
  width="100%"
  figure-number="5"
  caption="SSID of the Network you want to connect to"
/>

- Enter also the password. Just leave it empty if None.

<rk-img
  :src="`${$frontmatter.static_root}/06.toenoesnbmrz1eeza4yq.png`"
  width="100%"
  figure-number="6"
  caption="Password of the Wi-Fi"
/>

### Connect through Ethernet

If you want to connect to router through Ethernet Cable, do the following steps:

- In the main configuration menu, choose **“6 Configure LAN”**. This will let you set up a static IP address for the Gateway’s Ethernet adapter.
- Just fill a static IP Address according to the IP address of the router you want to connect. Please note that the LoRaWAN® gateway and the router must be in the same network segment, otherwise the connection will fail.
- By default, the IP Address of the LoRaWAN® Gateway's Ethernet is `192.168.10.10`

<rk-img
  :src="`${$frontmatter.static_root}/07.q7cisano0ckdjzfmrjwn.png`"
  width="100%"
  figure-number="7"
  caption="Default LoRaWAN\u00ae Gateway Ethernet IP Address"
/>

- Then configure the IP address of the Router. This is the LAN Interface IP address of the router.

<rk-img
  :src="`${$frontmatter.static_root}/08.rfflmexk4jeyay8yyfp9.png`"
  width="100%"
  figure-number="8"
  caption="LAN Interface IP Address of the Router"
/>

- Press OK then the success message will appear.
- Lastly, reboot the LoRaWAN® Gateway using the command "`sudo reboot`" in the command line and it will connect to the router successfully through Ethernet.

### Connecting through an LTE Network

The RAK7243C comes with the RAK2013 Cellular making it capable of connecting through LTE network. In this section, you will learn on how to connect your Gateway to an LTE network.

**1.**First, insert a SIM card of the appropriate type and size into the SIM card slot. Power on the Gateway.

**2.** Then, log into the Gateway through SSH, and
enter the command:

```bash
sudo gateway-config
```

**3.** Next, in the main configuration menu choose “**7 Configure LTE Module**”:

<rk-img
  :src="`${$frontmatter.static_root}/09.s4wdcqiwukl5evm7fyhm.png`"
  width="100%"
  figure-number="9"
  caption="Configure LTE Module"
/>

Two configuration options are available for your LTE.

1. **Enable LTE Automatic Dial-up** - the default option and is used to enable automatic connection during start-up.
2. **Disable LTE Automatic Dial-up** - used to disable automatic connection during start-up.

<rk-img
  :src="`${$frontmatter.static_root}/10.qzy2znqy3rn32asplaki.png`"
  width="100%"
  figure-number="10"
  caption="LTE Configuration Options"
/>

After that, you need to configure the LTE network operator’s information. Make sure to disable the automatic connection on start-up feature before starting.

**4.** Execute the command below in the console to start minicom tool:

```bash
sudo minicom -D \/dev\/ttyAMA0 -b 115200
```

<rk-img
  :src="`${$frontmatter.static_root}/11.hsnj9bmmt4hm7jjivlfn.png`"
  width="100%"
  figure-number="11"
  caption="Minicom Tool"
/>

**5.** Then, try entering the command “**at**” in the tool, if it returns with “**OK**”, it means you have opened the serial port successfully:

<rk-img
  :src="`${$frontmatter.static_root}/12.e2nnhzfcsvrzawsnjc3x.png`"
  width="100%"
  figure-number="12"
  caption="AT Command in Minicom"
/>

::: tip Note:
If you cannot see the “at”, which you just entered, try to hold “CTRL+A”, then press “Z”, then press “E”. This should allow you to go to the command entering mode.
:::

**6.** Next, execute the AT command “**`at+cops=?`**” to look for all available LTE networks in range:

<rk-img
  :src="`${$frontmatter.static_root}/13.gnqzfqfiyr9midcxzykr.png`"
  width="100%"
  figure-number="13"
  caption="AT Command for LTE Network Query"
/>

This may take a couple of seconds. After that, you'll see the available LTE Network information similar to the image below.

<rk-img
  :src="`${$frontmatter.static_root}/14.a2dffmeci1qkvarbnh4h.jpg`"
  width="100%"
  figure-number="14"
  caption="LTE Network Example"
/>

::: tip Note:
The image above shows the available LTE network in China. These information may vary depending on the available network in your region. For instance in China, the available network are “CHINA MOBILE”, “CHN-UNICOM”, or “CHN-CT”.
:::

**7.** Next, execute the AT command below to set the information of the LTE network operator that you want to use.

- XXX - this parameter is set to describe the network operator. For example, "CHINA MOBILE”, “CHN-UNICOM”, or “CHN-CT”
- **YYY** - this parameter is set as the last value of every operator. Choose the network with 0 value as this is the currently used network.

Now let’s take this LTE network in Europe (Bulgaria) as an example:

<rk-img
  :src="`${$frontmatter.static_root}/15.mtzbhqbruxtqqtg0993z.jpg`"
  width="100%"
  figure-number="15"
  caption="Sample LTE Networks in EU"
/>

Then, using the sample AT command described above, the command will be:

<rk-img
  :src="`${$frontmatter.static_root}/16.dgcsdrvgw5yyjlxfhzdn.jpg`"
  width="100%"
  figure-number="16"
  caption="Sample AT Command for LTE Network"
/>

After then, you will receive "OK" which means you have successfully configured the LTE network.

::: tip How to Quit Minicom?
In order for you to exit Minicom. Press Enter, Ctrl + A then press Q. A pop up will appear and choose Yes.
:::

**8.** Proceed to setting the **APN name** for the **pppd**
process. From the main configuration menu choose “**6
Configure APN name**”.

<rk-img
  :src="`${$frontmatter.static_root}/17.mgnltetmph7fql2dyptt.png`"
  width="100%"
  figure-number="17"
  caption="Configure APN Name"
/>

**9.** Then, you will see the window option below where you can change the APN Name or retain its default name.

::: info Note:
If you want to modify the APN Name, make it sure it is a real and valid APN Name.
:::

<rk-img
  :src="`${$frontmatter.static_root}/18.wxlr9qc1jvgrtdqokbj0.png`"
  width="100%"
  figure-number="18"
  caption="APN Name"
/>

**10.** Lastly, set the baud rate. The default value is 115200.

<rk-img
  :src="`${$frontmatter.static_root}/19.sje1mevpfizxspzka0jf.png`"
  width="100%"
  figure-number="19"
  caption="Baud Rate Setting"
/>

Great! You have finished configuring your LTE network. Now, let's test and verify the connection.

**1.** Execute the command. in the terminal.

```bash
sudo pppd call gprs
```

There will be a series of log but after that, you will see the the following information at the end of the log.

<rk-img
  :src="`${$frontmatter.static_root}/20.i3bmpsoxp2urhnag3vyx.jpg`"
  width="100%"
  figure-number="20"
  caption="IP address Information"
/>

You will be assigned with an IP address (local and remote) along with the DNS addresses. Having these information signifies that your connection has successfully established.

Also, do not forget to re-enable the automatic LTE connection on start up

<rk-img
  :src="`${$frontmatter.static_root}/21.q4viffhbutonrx71vwjs.png`"
  width="100%"
  figure-number="21"
  caption="Enabling the Automatic LTE Connection during Start-Up"
/>

## Optional Configurations

These configurations under this section are only optional and situational.

### Reverting to Wi-Fi AP Mode

In the event that you have entered either or both icorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK7243C LoRaWAN® Developer Gateway to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.

- Remove the SD Card from your RAK7243C LoRaWAN® Developer Gateway and insert it into your PC. Your PC should be able to detect it same with the image below:

<rk-img
  :src="`${$frontmatter.static_root}/22.oyjadnh8ouvogrgpfox0.png`"
  width="100%"
  figure-number="22"
  caption="Creating rak_ap file to your SD Card"
/>

- Using your "**Command Prompt**" or "**Terminal**", navigate to your SD Card and type this command to generate the "**rak_ap**" file.

```bash
cd > rak_ap
```

- Check if the rak_ap file is created succesffuly. If so, re-insert the SD Card into your RAK7243C LoRaWAN® Developer Gateway and it should work again in Wi-Fi AP Mode.
