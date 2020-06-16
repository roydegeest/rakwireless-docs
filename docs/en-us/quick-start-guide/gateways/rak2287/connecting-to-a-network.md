# Connecting to a Network

If you want to use TTN or an independent ChirpStack, which may be deployed in a local area network or a remote one, you need to connect your Gateway to a networking device that will allow you connectivity to the internet (a router for example). There are 2 options offered for this purpose.

### Connect through Wi-Fi

If you want to connect through Wi-Fi, it can easily be done with the wireless capabilities of the Raspberry Pi 3B+ or Raspberry Pi 4 by choosing "**5 Configure WIFI**". By default, the RAK2287 Concentrator Module WisLink Series works in Wi-Fi AP Mode. For the gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/1.configure-wifi.png"
  width="100%"
  figure-number="1"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - after rebooting, the gateway will work in Wi-Fi Access Point Mode while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - after rebooting, the gateway will work in Wi-Fi Client mode, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. It only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

:::warning ⚠️WARNING
To enable Wi-Fi Client Mode, you have to disable first the AP Mode.
:::

Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", you can now then connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**":

<rk-img
  src="/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/2.add-ssid.png"
  width="100%"
  figure-number="2"
  caption="Add a new SSID"
/>

- Start by selecting your country of residence:

<rk-img
  src="/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/3.country-selection.png"
  width="100%"
  figure-number="3"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect:

:::warning ⚠️WARNING
Make sure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK2287 Concentrator Module WisLink Series again via SSH in Wi-Fi AP Mode. If stuck in this situation, follow the procedure listed in [Connecting to a Network](/en-us/quick-start-guide/gateways/rak2287/connecting-to-a-network.html#reverting-to-wi-fi-ap-mode) document which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/4.ssid-of-the-network.png"
  width="100%"
  figure-number="4"
  caption="SSID of the Network you want to connect to."
/>


- Enter also the password. Just leave it empty if None.

<rk-img
  src="/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/5.wifi-password.png"
  width="100%"
  figure-number="5"
  caption="Password of the Wi-Fi"
/>

### Connect through Ethernet

If you want to connect to the router through Ethernet Cable, do the following steps:

- In the main configuration menu, choose **“6 Configure LAN”**. This will let you set up a static IP address for the Gateway’s Ethernet adapter.
- Just fill a static IP Address according to the IP address of the router you want to connect. Note that the LoRaWAN® gateway and the router must be in the same network segment, otherwise the connection fails.
- By default, the IP Address of the gateway's Ethernet is `192.168.10.10`.


<rk-img
  src="/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/6.ethernet-ip.png"
  width="100%"
  figure-number="6"
  caption="Default gateway Ethernet IP Address"
/>

- Then configure the IP address of the Router. This is the LAN Interface IP address of the router.

<rk-img
  src="/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/7.lan-interface.png"
  width="100%"
  figure-number="7"
  caption="LAN Interface IP Address of the Router"
/>

- Press OK and a success message appear.
- Lastly, reboot the gateway using the command "`sudo reboot`" in the command line and it will connect to the router successfully through Ethernet.

## Optional Configurations

The configurations in this section are optional and situational.

### Reverting to Wi-Fi AP Mode

If you have entered either or both incorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK2287 Concentrator Module WisLink Series to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.

- Remove the SD Card from your RAK2287 Concentrator Module WisLink Series and insert it into your PC. Your PC should be able to detect it the same as figure 8 below.

<rk-img
  src="/assets/images/quick-start-guide/rak2287/4connecting-to-a-network/8.create-rak-ap.png"
  width="50%"
  figure-number="8"
  caption="Creating rak_ap file to your SD Card"
/>

- Using your "**Command Prompt**" or "**Terminal**", navigate to your SD Card and type this command to generate the "**rak_ap**" file.

```
cd > rak_ap
```

- Check if the rak_ap file is created successfully. If so, re-insert the SD Card into your RAK2287 Concentrator Module WisLink Series and it should work again in Wi-Fi AP Mode.
















