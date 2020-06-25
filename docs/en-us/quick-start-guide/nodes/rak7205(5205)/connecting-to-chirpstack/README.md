---
static_root: /assets/images/quick-start-guide/rak5205-7205/connecting-to-chirpstack
next: chirpstack-otaa-mode
prev: /en-us/quick-start-guide/nodes/rak7205(5205)/connecting-to-ttn/ttn-abp-mode
---

### Connecting to ChirpStack

The **ChirpStack** or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

You can use to connect with ChirpStack according to the following steps:

::: tip 📝 NOTE
In this section, it is an assumption that you have already connected your Gateway with TTN correctly. If not, kindly look into our [online documentation](https://doc.rakwireless.com/) of your RAK Gateway in hand.
:::

1. Open the web page of the ChirpStack which you want to connect with and login.

2. By default, there is already one or more items in this page, you can use it or create a new item. Now, let’s create a new item by clicking the “**CREATE**” button, then filling them in.

<rk-img
  :src="`${$frontmatter.static_root}/yrgeavaswetbj2xf7sqq.png`"
  width="100%"
  figure-number="1"
  caption="ChirpStack Applications"
/>

3. Fill up the necessary information then Click "**CREATE APPLICATION**”.

<rk-img
  :src="`${$frontmatter.static_root}/nsuwadkci3t4e6u1ttzu.png`"
  width="100%"
  figure-number="2"
  caption="Creating the Application"
/>

4. Click the new item name “**RAKwireless_Test_Application**”:

<rk-img
  :src="`${$frontmatter.static_root}/cxpiojzcr5o096l09g0h.png`"
  width="100%"
  figure-number="3"
  caption="Applications page in ChirpStack"
/>

<rk-img
  :src="`${$frontmatter.static_root}/auuldsmkfjgmb6tmo6ta.png`"
  width="100%"
  figure-number="4"
  caption="RAKwireless Test Application"
/>

5. Add a LoRa® node device into ChirpStack by clicking the “**CREATE**” button:

<rk-img
  :src="`${$frontmatter.static_root}/jocka410vvlsenkdcf0a.png`"
  width="100%"
  figure-number="5"
  caption="Adding a Node Device"
/>

6. Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.

<rk-img
  :src="`${$frontmatter.static_root}/xigu9w6pypfqr8mgnsld.png`"
  width="100%"
  figure-number="6"
  caption="Filling the Device Parameters"
/>

::: tip 📝 NOTE
If you want to join in OTAA mode, select “**DeviceProfile_OTAA**” in the “Device-profile” item. If you want to join in ABP mode and CN470 frequency, then, select “**DeviceProfile_ABP_CN470**” in the “Device-Profile” item. If you want to join in ABP mode and other frequencies except AS923 and CN470, you should select “**DeviceProfile_ABP**” in the “Device-profile” item.
:::
