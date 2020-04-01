---
static_root: /assets/images/quick-start-guide/rak811-breakout/connecting-to-chirpstack
next: chirpstack-otaa-mode
---

## Connecting to ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

You can use RAK811 LPWAN Breakout Module to connect with ChirpStack according to the following steps:

::: tip Note:
This section assumed that you had already connected your LoRa® Gateway with TTN correctly. If not, please take a look at the document of [RAK LoRa® Gateway](https://doc.rakwireless.com/rak7244c-lorawan----developer-gateway/quick-start-guide).
:::

**1.** Open the web page of the ChirpStack which you want to connect with and login.

**2.** By default, there is already one or more items in this page, you can use it or create a new item. Now, let’s create a new item by clicking the “**CREATE**” button.

<rk-img
  :src="`${$frontmatter.static_root}/xlubsj8qfhs9o1wqg3ao.png`"
  width="100%"
  figure-number="1"
  caption="ChirpStack Applications"
/>

**3.** Fill up the necessary information then Click "**CREATE APPLICATION**”.

<rk-img
  :src="`${$frontmatter.static_root}/jjfxkdc14hrwxavqnejk.png`"
  width="100%"
  figure-number="2"
  caption="Creating the Application"
/>

**4.** Click the new item name “**RAK811**”:

<rk-img
  :src="`${$frontmatter.static_root}/huqfi7q0iuvj3peoerje.png`"
  width="100%"
  figure-number="3"
  caption="Applications page in ChirpStack"
/>

<rk-img
  :src="`${$frontmatter.static_root}/zvda6jcwtxr1ci2fvdqc.png`"
  width="100%"
  figure-number="4"
  caption="RAK811 Application"
/>

**5** .**Add** a LoRa® node device into ChirpStack by clicking the “**CREATE**” button:

<rk-img
  :src="`${$frontmatter.static_root}/o86hkpxcz88w3gtgq3rr.png`"
  width="100%"
  figure-number="5"
  caption="Adding a LoRa® Node Device"
/>

**6.** Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.

<rk-img
  :src="`${$frontmatter.static_root}/kdmfb9lhoygt8lxczsew.png`"
  width="100%"
  figure-number="6"
  caption="Filling the Device Parameters"
/>

::: tip Note:
If you want to join in OTAA mode, select “**DeviceProfile_OTAA**” in the “Device-profile” item. If you want to join in ABP mode and CN470 frequency, then, select “**DeviceProfile_ABP_CN470**” in the “Device-Profile” item. If you want to join in ABP mode and other frequencies except AS923 and CN470, you should select “**DeviceProfile_ABP**” in the “Device-profile” item.
:::
