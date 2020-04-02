---
static_root: /assets/images/quick-start-guide/rak5205-7205/cayenne-integration
---

# Cayenne Integration

MyDevice/Cayenne is a service that allows one to monitor node data in real time and can also send downlink control messages. Additionally it has a wide range of integrations for alerts, notifications, and alarms. Its visualization tools provide various ways of representing both real time and statistical data (graphs, dials, gauges, scales, charts, etc.).

### The Things Network Configuration

Before we can use Cayenne , we need to configure our Application in TTN to properly work with it.

- Log into your TTN Console and navigate to the desired application and Device (RAK5205 in this case).
- Go to the Payload Formats tab as seen in the Figure 1 and choose **"Cayenne LPP**"

<rk-img
  :src="`${$frontmatter.static_root}/crg46b4kwqgjgutbshaa.jpg`"
  width="100%"
  figure-number="1"
  caption="Device Payload Formats"
/>

- Next, go to the Integrations Tab and press the "add integration" button:

<rk-img
  :src="`${$frontmatter.static_root}/qpggeszni6bbpsvngyjr.jpg`"
  width="100%"
  figure-number="2"
  caption="Device Integration"
/>

- Select the MyDevices Icon :

<rk-img
  :src="`${$frontmatter.static_root}/szfeauknzfqphzri2pwb.jpg`"
  width="100%"
  figure-number="3"
  caption="My Devices Integration"
/>

- You will then be redirected to a page as seen below (Figure 4) where you need to enter a Process ID and select an Access Key (Choose the default key)

<rk-img
  :src="`${$frontmatter.static_root}/y5ruf9bbupnyvggmjm1d.jpg`"
  width="100%"
  figure-number="4"
  caption="myDevices Integration Configuration"
/>

### Cayenne Configuration

If you don't have an account in Cayenne, head on to [https://mydevices.com/cayenne/signup/](https://mydevices.com/cayenne/signup/) and create an account for free.

<rk-img
  :src="`${$frontmatter.static_root}/o4dkqcf3od2nzjxn5vws.jpg`"
  width="100%"
  figure-number="5"
  caption="Cayenne start screen"
/>

- Once logged in, navigate to the "Add New" drop down menu in the upper left corner and choose "Device/Widget".

<rk-img
  :src="`${$frontmatter.static_root}/jixjac2mbfkrsskosthu.jpg`"
  width="100%"
  figure-number="6"
  caption="Adding a device"
/>

- Select **LoRa** in the list of Devices and Widgets and navigate to The Things Network at the end of the list.

<rk-img
  :src="`${$frontmatter.static_root}/aqizwyy4tnhzu7qrrext.jpg`"
  width="100%"
  figure-number="7"
  caption="Choosing your device from the list"
/>

- A list of LoRa® Products and Widgets are now displayed. Scroll down and look for "**Cayenne LPP**".

<rk-img
  :src="`${$frontmatter.static_root}/hrzw47je3uxbv9a8fyhe.jpg`"
  width="100%"
  figure-number="8"
  caption="Cayenne LPP device selection"
/>

- Lastly, Input the Device EUI and Optionally set if your device is moving or stationary.

<rk-img
  :src="`${$frontmatter.static_root}/tlrku9fdhfgzkypfgswe.jpg`"
  width="100%"
  figure-number="9"
  caption="Setting device parameters"
/>

- If everything went well you should end up with a screen as the in Figure 10:

<rk-img
  :src="`${$frontmatter.static_root}/x80ncxi5xnwkhjlqcqby.jpg`"
  width="100%"
  figure-number="10"
  caption="Dashboard live view of RAK5205"
/>

::: tip Note
There are two widgets that appear as general Analog ones. The first one on channel 8 is the Speed as measured by the GPS receiver. The second one on channel 9 is the AQI (Air Quality Index). The user needs to edit the names and choose an appropriate UI representation by hand. This is so, because as of this moment LPP doesn’t support data of such type and they are transmitted as general analog values. In Rev2 of the LPP standard it is expected these issues will be address.
:::
