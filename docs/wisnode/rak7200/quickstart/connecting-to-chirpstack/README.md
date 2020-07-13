---
static_root: /assets/images/quick-start-guide/rak7200/connecting-to-chirpstack
prev: /en-us/quick-start-guide/nodes/rak7200/connecting-to-ttn/ttn-abp-mode
next: chirpstack-otaa-mode
---

### Connecting to ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

You can use RAK7200 LPWAN Tracker to connect with ChirpStack by following this steps:

::: tip 📝 NOTE
In this section, it is an assumed that you have already connected your Gateway with TTN correctly. If not, please have a look at the document of RAK Gateway.
:::

OK! Let’s get started!

1. Open the web page of the ChirpStack which you want to connect with and login.

2. By default, there is already one or more item in this page, you can use it or create a new item. Now, let’s create a new item by clicking the “**CREATE**” button.

<rk-img
  :src="`${$frontmatter.static_root}/mhxpxv152iy2zc2h7jyv.png`"
  width="100%"
  figure-number="1"
  caption="ChirpStack Applications"
/>

3. Fill up the necessary information then Click "**CREATE APPLICATION**"

<rk-img
  :src="`${$frontmatter.static_root}/aehocrv1kdgmfw5i9ncm.png`"
  width="100%"
  figure-number="2"
  caption="Creating the Application"
/>

<rk-img
  :src="`${$frontmatter.static_root}/shwsznjugdm6epmh5r2o.png`"
  width="100%"
  figure-number="3"
  caption="Applications page in ChirpStack"
/>

4. Click the new Item name "RAKwireless_Test_Application"

<rk-img
  :src="`${$frontmatter.static_root}/eh9bkvu5uwlrn10jojvr.png`"
  width="100%"
  figure-number="4"
  caption="RAK7200 Application"
/>

5. **Add** a Node device into ChirpStack by clicking the “**CREATE**” button:

<rk-img
  :src="`${$frontmatter.static_root}/znvzmk7sz4vrhgqmfx4x.png`"
  width="100%"
  figure-number="5"
  caption="Adding a Node Device"
/>

<rk-img
  :src="`${$frontmatter.static_root}/mphgt1imzsn2pf67bhnq.png`"
  width="100%"
  figure-number="6"
  caption="Filling the Device Parameters"
/>

6. Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.

<rk-img
  :src="`${$frontmatter.static_root}/doqbh3y9oiyjxu6ixjwn.png`"
  width="100%"
  figure-number="7"
  caption="Generating Device EUI Automatically"
/>

::: tip 📝 NOTE
If you want to join in OTAA mode, select “**DeviceProfile_OTAA**” in the “Device-profile” item. If you want to join in ABP mode and CN470 frequency, then, select “**DeviceProfile_ABP_CN470**” in the “Device-Profile” item. If you want to join in ABP mode and other frequencies except AS923 and CN470, you should select “**DeviceProfile_ABP**” in the “Device-profile” item.
:::
