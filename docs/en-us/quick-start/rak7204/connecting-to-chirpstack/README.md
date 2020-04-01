---
static_root: /assets/images/quick-start-guide/rak7204/6.connecting-to-chirpstack/
next: chirpstack-otaa
# title: Connecting with Chirpstack
---
# Connecting to ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

You can use RAK7204 LPWAN Environmental Sensor to connect with ChirpStack according to the following steps:

:::tip Note:
:pencil: In this document, it is  assumed that you are using RAK LoRa® gateway and its built-in ChirpStack or RAK cloud testing ChirpStack. It is also assumed that a Gateway with the ChirpStack has been configured successfully. If not, please have a look at RAK's documents for more details about RAK LPWAN Gateway and [**RAK cloud testing**](https://forum.rakwireless.com/t/rak-free-cloud-loraserver-for-testing/344).
:::

1. Open the web page of the ChirpStack which you want to connect with and login.
2. By default, there is already one or more items in this page, you can use it or create a new item. Now, let’s create a new item by clicking the “**CREATE**” button, then filling them in.

<rk-img
  :src="`${$frontmatter.static_root}/wgk31ykcgwp2gbzicmut.png`"
  width="100%"
  figure-number="1"
  caption="ChirpStack Applications"
/>

3. Fill up the necessary information then Click "**CREATE APPLICATION**”.
<rk-img
  :src="`${$frontmatter.static_root}/zcxqc0pe6vquherzw521.png`"
  width="100%"
  figure-number="2"
  caption="Creating the Application"
/>

4. Click the new item name “**RAKwireless_Test_Application**”:
<rk-img
  :src="`${$frontmatter.static_root}/r2ikjxdaluvfxbqhaccc.png`"
  width="100%"
  figure-number="3"
  caption="Applications page in ChirpStack"
/>

<rk-img
  :src="`${$frontmatter.static_root}/sdrlazcgfseimitslo6u.png`"
  width="100%"
  figure-number="4"
  caption="RAKwireless Test Application"
/>

5. Add a LoRa® node device into ChirpStack by clicking the “**CREATE**” button:

<rk-img
  :src="`${$frontmatter.static_root}/sdrlazcgfseimitslo6u.png`"
  width="100%"
  figure-number="5"
  caption="Adding a LoRa® Node Device"
/>

6. Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.
<rk-img
  :src="`${$frontmatter.static_root}/bx0hvot72klwrnznnbig.png`"
  width="100%"
  figure-number="6"
  caption="Filling the Device Parameters"
/>

:::tip Note:
:pencil: If you want to join in OTAA mode, select “DeviceProfile_OTAA” in the “Device-profile” item. If you want to join in ABP mode and CN470 frequency, then, select “DeviceProfile_ABP_CN470” in the “Device-Profile” item. If you want to join in ABP mode and other frequencies except AS923 and CN470, you should select “DeviceProfile_ABP” in the “Device-profile” item.
:::