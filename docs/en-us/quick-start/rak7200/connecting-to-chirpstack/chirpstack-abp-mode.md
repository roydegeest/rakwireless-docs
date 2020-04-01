---
static_root: /assets/images/quick-start-guide/rak7200/chirpstack-abp-mode
---

# ABP Mode

1.If you select “**Device Profile ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

<rk-img
  :src="`${$frontmatter.static_root}/aonljar59ifcml3havu9.png`"
  width="100%"
  figure-number="1"
  caption="Switching to ABP Mode"
/>

2.Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:

<rk-img
  :src="`${$frontmatter.static_root}/pknfpadcpuhqunctcga8.png`"
  width="100%"
  figure-number="2"
  caption="ABP Parameters"
/>

3.Next, let’s use these parameters to set RAK7200 by using **AT command**.

4.If the join mode is not in ABP, just set the LoRa® join mode to **ABP** and LoRa® class to **Class A** by typing the following commands in RAK Serial Port Tool

<rk-img
  :src="`${$frontmatter.static_root}/b4vtsesbjmk5bxdjljaa.jpg`"
  width="100%"
  figure-number="3"
  caption="Setting of LoRaWAN® Mode and Class"
/>

5.Type the following AT command to set your respective: **Frequency/Region**, **Device Address**, **Network Session Key** and **App Session Key**.

<rk-img
  :src="`${$frontmatter.static_root}/hhvjx9shtfon4bnrh4x1.jpg`"
  width="100%"
  figure-number="4"
  caption="Setting of Frequency and Device Address"
/>

<rk-img
  :src="`${$frontmatter.static_root}/bcslebohju0ibvhcdyms.jpg`"
  width="100%"
  figure-number="5"
  caption="Setting of Device EUI and Network Key"
/>

- Then Join in ABP Mode

<rk-img
  :src="`${$frontmatter.static_root}/vzv9ljxqw7ayfbsyok6y.jpg`"
  width="60%"
  figure-number="6"
  caption="Joining of ABP"
/>

You can see the data which is just sent from RAK7200 on ChirpStack page:

<rk-img
  :src="`${$frontmatter.static_root}/catrg6l4uscykpdy32rz.png`"
  width="100%"
  figure-number="7"
  caption=" Message Status in ChirpStack"
/>
