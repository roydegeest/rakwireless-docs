---
static_root: /assets/images/quick-start-guide/rak4200/5. connecting-to-chirpstack
prev: /en-us/quick-start-guide/rak4200/connecting-to-chirpstack/chirpstack-abp
next: chirpstack-otaa
---
### Connecting with Chirpstack
The **ChirpStack** or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

:::tip 📝 NOTE
In this document, it is  assumed that you are using RAK Gateway and its built-in ChirpStack or RAK cloud testing ChirpStack. It is also assumed that a Gateway with the ChirpStack has been configured successfully. If not, please have a look at RAK's documents for more details about RAK LPWAN Gateway and [**RAK cloud testing**](https://forum.rakwireless.com/t/rak-free-cloud-loraserver-for-testing/344).
:::

1. Open the web page of the ChirpStack which you want to connect with and login.
<rk-img
  :src="`${$frontmatter.static_root}/wgk31ykcgwp2gbzicmut.png`"
  width="100%"
  figure-number="1"
  caption="Chirpstack Default Window"
/>

:::tip 📝 NOTE
By default, there is already one or more items in this page, you can use it or create a new item.
:::

2. Create a new item by clicking the “**CREATE**” button, and fill up the necessary items.
<rk-img
  :src="`${$frontmatter.static_root}/l8na6pcdsvjl0lrqznyr.png`"
  width="100%"
  figure-number="2"
  caption="Chirpstack Creating Application"
/>

3. Once done , click “**CREATE APPLICATION**”.
<rk-img
  :src="`${$frontmatter.static_root}/zcxqc0pe6vquherzw521.png`"
  width="100%"
  figure-number="3"
  caption="Chirpstack Applications Available"
/>

4. The list of items are then provided same with the image above. Click the new item created.
<rk-img
  :src="`${$frontmatter.static_root}/r2ikjxdaluvfxbqhaccc.png`"
  width="100%"
  figure-number="4"
  caption=" Applications Page in Chirpstack"
/>

5. Add a node device into ChirpStack by clicking the “**CREATE**” button:
<rk-img
  :src="`${$frontmatter.static_root}/sdrlazcgfseimitslo6u.png`"
  width="100%"
  figure-number="5"
  caption="Chirpstack Adding Node into the  RAK4200 LPWAN Evaluation Board "
/>

6. Once the node is created, fill-in  the necessary data. You can generate a Device EUI automatically by clicking the following icon, or you can write a correct Device EUI in the edit box.
<rk-img
  :src="`${$frontmatter.static_root}/bx0hvot72klwrnznnbig.png`"
  width="100%"
  figure-number="6"
  caption="Chirpstack Adding Parameters in the Node"
/>

