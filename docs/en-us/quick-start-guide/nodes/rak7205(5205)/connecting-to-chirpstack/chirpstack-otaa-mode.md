---
static_root: /assets/images/quick-start-guide/rak5205-7205/chirpstack-otaa-mode
next: chirpstack-abp-mode
prev: /en-us/quick-start-guide/rak5205-7205/connecting-to-chirpstack/
---

# OTAA Mode

1. To join ChirpStack in OTAA mode, select “**DeviceProfile_OTAA**”.

<rk-img
  :src="`${$frontmatter.static_root}/xjpytzbfs9a9bzjjqohr.png`"
  width="100%"
  figure-number="1"
  caption="Selecting OTAA Activation Mode in ChirpStack"
/>

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.

<rk-img
  :src="`${$frontmatter.static_root}/hkmekngvrkk9goqid1pv.png`"
  width="100%"
  figure-number="2"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The Device EUI which was set in the previous section to your RAK5205 WisTrio LPWAN Tracker as "dev_eui" is the same in the image highlighted below.

<rk-img
  :src="`${$frontmatter.static_root}/mdbj3th73unruqxl98zs.png`"
  width="100%"
  figure-number="3"
  caption="Device EUI Code"
/>

- Same with the Application Key, which was set in the previous section as "app_key" is the same with the image highlighted.

<rk-img
  :src="`${$frontmatter.static_root}/xrmpjlafrry3ag479lnl.png`"
  width="100%"
  figure-number="4"
  caption="Application Key LoRaWAN®"
/>

::: tip 📝 NOTE:
 The Application EUI which was into RAK5205 as “**app_eui**” is not needed for ChirpStack.
:::

4. Next, let’s **configure** RAK5205 WisTrio LPWAN Tracker by using **AT commands**. To do this, connect your RAK5205 WisTrio LPWAN Tracker to a PC, power it on and open **RAK Serial Port Tool** on your computer.

```bash
at+version
```

<rk-img
  :src="`${$frontmatter.static_root}/fqw3e70otnu8ymgnmu79.png`"
  width="60%"
  figure-number="5"
  caption="RAK Serial Port Tool"
/>

- Now, let us join our RAK5205 using the OTAA activation mode.

5. If the join mode is not in OTAA, just set the LoRa® join mode to **OTAA** and LoRa® class to **Class A** by typing the AT commands shown in the picture below.

```bash
at+set_config=lora:join_mode:0
```

```bash
at+set_config-lora:class:0
```

<rk-img
  :src="`${$frontmatter.static_root}/mdjpe1uhxdmahhthbt8w.jpg`"
  width="100%"
  figure-number="6"
  caption="Setting of LoRaWAN® mode and class"
/>

6. Type the following AT command to set the:**Frequency/Region, Device EUI, Application EUI and Application Key.**Remember to replace the **"XXX"** and **"XXXX"** with the corresponding parameter value for your particular case:

```bash
at+set_config=lora:region:XXX
```

```bash
at+set_config=lora:dev_eui:XXXX
```

```bash
at+set_config=lora:app_eui:XXXX
```

```bash
at+set_config=lora:app_key:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/vugtbybavkertynte382.jpg`"
  width="100%"
  figure-number="7"
  caption="Setting of Frequency and Device EUI"
/>

<rk-img
  :src="`${$frontmatter.static_root}/rkeautvpyyd4oquhxvgq.jpg`"
  width="100%"
  figure-number="8"
  caption="Setting of Application EUI and Key"
/>

7. Then, **join** in OTAA mode.

```bash
at+join
```

<rk-img
  :src="`${$frontmatter.static_root}/xlebk2u3xe2ryxo5ss11.png`"
  width="60%"
  figure-number="9"
  caption="Joining in OTAA"
/>

- **Joined Successfully!**

8. You can view the "**JoinRequest**" and "**JoinAccept**" on ChirpStack page:

<rk-img
  :src="`${$frontmatter.static_root}/pvt7etzwzprp8nqebfqi.png`"
  width="100%"
  figure-number="10"
  caption="Join Request of the Device in the ChirpStack"
/>

9. Let’s try sending data from our RAK5205 WisTrio LPWAN Tracker to the ChirpStack by typing the command below in the serial port.

```bash
at+send=lora:2:1234567890
```

<rk-img
  :src="`${$frontmatter.static_root}/j7c4lszbgth963mh6kea.png`"
  width="60%"
  figure-number="11"
  caption="Sending Data to ChirpStack"
/>

You can see the message on ChirpStack page:

<rk-img
  :src="`${$frontmatter.static_root}/qk5n8nssmvinougxfqk6.png`"
  width="100%"
  figure-number="12"
  caption="Message Received in ChirpStack"
/>
