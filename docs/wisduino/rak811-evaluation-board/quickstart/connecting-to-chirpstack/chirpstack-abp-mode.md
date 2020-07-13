---
static_root: /assets/images/quick-start-guide/rak811/chirpstack-abp-mode
---

# ABP Mode

1. If you select “**Device Profile ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

<rk-img
  :src="`${$frontmatter.static_root}/d2yg1k2jisypbejszfzg.png`"
  width="100%"
  figure-number="1"
  caption="Switching to ABP Mode"
/>
 
2. Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:

<rk-img
  :src="`${$frontmatter.static_root}/buahb0dbl6vhdjcmub5g.png`"
  width="100%"
  figure-number="2"
  caption="ABP Parameters"
/>

3. Next, let’s use these parameters to set RAK811 LPWAN Evaluation Board by using **AT command**. Let's join in **ABP** mode and set **EU868** frequency as an example.

4. If the join mode is not in ABP, just set the LoRa® join mode to **ABP** and LoRa® a class to **Class A** by typing the following commands in RAK Serial Port Tool

<rk-img
  :src="`${$frontmatter.static_root}/dkulqzpldm5nlpsjhbyz.jpg`"
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
  width="60%"
  figure-number="6"
  caption="Joining of ABP"
/>

- Now, try sending data from our RAK811 LPWAN Evaluation Board to the Chirpstack

<rk-img
  :src="`${$frontmatter.static_root}/enenhki5eduvosgktdz8.png`"
  width="60%"
  figure-number="7"
  caption="Sending Data to ChirpStack"
/>

- You can see the data which is just sent from RAK811 LPWAN Evaluation Boardon ChirpStack page:

<rk-img
  :src="`${$frontmatter.static_root}/tk1ypmzg0va9nwaprkqe.png`"
  width="100%"
  figure-number="8"
  caption="Message Status in ChirpStack"
/>
