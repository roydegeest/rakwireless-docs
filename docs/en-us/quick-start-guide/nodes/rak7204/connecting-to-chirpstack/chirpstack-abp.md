---
static_root: /assets/images/quick-start-guide/rak7204/6.connecting-to-chirpstack/abp/
---
# ABP Mode

1. If you select “**Device Profile  ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

:::warning ⚠️ WARNING
 Frequency AS923 in ABP Mode is not supported in ChirpStack
:::

<rk-img
  :src="`${$frontmatter.static_root}/ezfbaa2iue5jolxhcn5m.png`"
  width="100%"
  figure-number="1"
  caption="Switching to ABP Mode"
/>


2. Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:
<rk-img
  :src="`${$frontmatter.static_root}/z1ox6hvoa4zwe8cpadz5.png`"
  width="100%"
  figure-number="2"
  caption="ABP Parameters"
/>

3. Next, let’s use these parameters to set WisNode LoRa® by using **AT command**. Let's join in **ABP** mode and set **EU868** frequency as an example.
4. If the join mode is not in ABP, just set the LoRa® join mode to **ABP** and LoRa® class to **Class A** by typing the following commands in RAK Serial Port Tool
<rk-img
  :src="`${$frontmatter.static_root}/z1ox6hvoa4zwe8cpadz5.png`"
  width="100%"
  figure-number="3"
  caption="Setting of LoRaWAN® Mode and Class"
/>

5. Type the following AT command to set your respective: **Frequency/Region**, **Device Address**, **Network Session Key** and **App Session Key**.
<rk-img
  :src="`${$frontmatter.static_root}/lvccenrrczmt4nrtbjya.jpg`"
  width="100%"
  figure-number="4"
  caption="Setting of Frequency and Device Address"
/>

<rk-img
  :src="`${$frontmatter.static_root}/v1mclxe7vemha0yewfyu.jpg`"
  width="100%"
  figure-number="5"
  caption="Setting of Device EUI and Network Session Key"
/>

6. Then, **join** in ABP mode.
<rk-img
  :src="`${$frontmatter.static_root}/pqwlq93vihikp0rgilvi.jpg`"
  width="50%"
  figure-number="6"
  caption="Joining of ABP"
/>

- Now, try sending data from our WisNode LoRa® to the Chirpstack
<rk-img
  :src="`${$frontmatter.static_root}/enenhki5eduvosgktdz8.png`"
  width="50%"
  figure-number="7"
  caption="Sending Data to ChirpStack"
/>

- You can see the data which is just sent from RAK7204 LPWAN Environmental Sensor on ChirpStack page:
<rk-img
  :src="`${$frontmatter.static_root}/haxxnxf1wv5jlzlytakp.png`"
  width="100%"
  figure-number="8"
  caption="Message Status in ChirpStack"
/>


