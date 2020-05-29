---
static_root: /assets/images/quick-start-guide/rak7204/6.connecting-to-chirpstack/otaa/
prev: /en-us/quick-start/rak7204/connecting-to-chirpstack/
---

# OTAA Mode

1. To join ChirpStack in OTAA mode, select “**DeviceProfile_OTAA**”.

<rk-img
  :src="`${$frontmatter.static_root}/qyrvspezqeezlwewbw0t.png`"
  width="100%"
  figure-number="1"
  caption="Selecting OTAA Activation Mode in ChirpStack"
/>

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.

<rk-img
  :src="`${$frontmatter.static_root}/ulkivutt3w112a4yegfs.png`"
  width="100%"
  figure-number="2"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The Device EUI which was set in the previous section to your RAK7204 LPWAN Environmental Sensor as "dev_eui" is the same in the image highlighted below.

<rk-img
  :src="`${$frontmatter.static_root}/rrxmljx5q8k8f5t8eejc.png`"
  width="100%"
  figure-number="3"
  caption="Device EUI Code"
/>

- Same with the Application Key, which was set in the previous section as "app_key" is the same with the image highlighted.

<rk-img
  :src="`${$frontmatter.static_root}/ulbg6ggoqsntsdmkck25.png`"
  width="100%"
  figure-number="4"
  caption="Application Key LoRaWAN®"
/>

:::tip 📝 NOTE:
 The Application EUI which was into RAK7204 LPWAN Environmental Sensor as “app_eui” is not needed for ChirpStack.
:::

4. Next, let’s **configure** RAK7204 LPWAN Environmental Sensor by using **AT commands**. To do this, connect yourRAK7204 LPWAN Environmental Sensor to a PC, power it on and open **RAK Serial Port Tool** on your computer.
```
at+version
```
<rk-img
  :src="`${$frontmatter.static_root}/fqw3e70otnu8ymgnmu79.png`"
  width="50%"
  figure-number="5"
  caption="RAK Serial Port Tool"
/>

- Now, let us join our RAK7204 using the OTAA activation mode.

5. If the join mode is not in OTAA, just set the LoRa® join mode to **OTAA** and LoRa® class to **Class A** by typing the AT commands shown in the picture below.
```
at+set_config=lora:join_mode:0
```
```
at+set_config-lora:class:0
```
<rk-img
  :src="`${$frontmatter.static_root}/mdjpe1uhxdmahhthbt8w.jpg`"
  width="100%"
  figure-number="6"
  caption="Setting of LoRaWAN® mode and class"
/>

6. Type the following AT command to set the: **Frequency/Region, Device EUI, Application EUI and Application Key.** Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case:
```
at+set_config=lora:region:XXXX
```
```
at+set_config=lora:dev_eui:XXXX
```
```
at+set_config=lora:app_eui:XXXX
```
```
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
```
at+join
```
<rk-img
  :src="`${$frontmatter.static_root}/xlebk2u3xe2ryxo5ss11.png`"
  width="50%"
  figure-number="9"
  caption="Joining in OTAA"
/>

- **Joined Successfully! :tada:**

8. You can view the "**JoinRequest**" and "**JoinAccept**" on ChirpStack page:
<rk-img
  :src="`${$frontmatter.static_root}/bomjx5d87s8b3dnk7wlc.png`"
  width="100%"
  figure-number="10"
  caption="Join Request of the Device in the ChirpStack"
/>

9. Let’s try sending data from our RAK7204 LPWAN Environmental Sensor to the ChirpStack by typing the command below in the serial port.
```
at+send=lora:2:1234567890
```
<rk-img
  :src="`${$frontmatter.static_root}/j7c4lszbgth963mh6kea.png`"
  width="50%"
  figure-number="11"
  caption="Sending Data to ChirpStack"
/>

- You can see the message on ChirpStack page:

<rk-img
  :src="`${$frontmatter.static_root}/bomjx5d87s8b3dnk7wlc.png`"
  width="100%"
  figure-number="12"
  caption="Message Received in ChirpStack"
/>
