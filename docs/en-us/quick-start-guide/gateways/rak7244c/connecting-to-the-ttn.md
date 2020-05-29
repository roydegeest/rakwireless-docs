---
static_root: /assets/images/quick-start-guide/rak7244c/4.connecting-ttn
---

# Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to use long range [gateways](https://www.thethingsnetwork.org/docs/gateways/) to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network [here](https://www.thethingsnetwork.org/docs/).

- First, you should have connected your Gateway to the router in order to access the internet according to the method which has been introduced in the [Accessing the Internet](/en-us/quick-start-guide/rak7244c/accessing-your-gateway/accessing-the-internet.html) section of this document.
- Second, config your Gateway and choose TTN as the LoRa® Server and choose a correct frequency according to the method which has been introduced in the [Configuring the Gateway](/en-us/quick-start-guide/rak7244c/configuring-the-gateway.html#server-is-ttn) section.
- Now go to the [TTN Website](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img
  :src="`${$frontmatter.static_root}/1.fnb3qqtayustdujbkhmt.jpg`"
  width="100%"
  figure-number="1"
  caption="The Things Network Home Page"
/>

- Choose Console then Click Gateway.

<rk-img
  :src="`${$frontmatter.static_root}/2.yeysczfmxhmlh26j6o28.jpg`"
  width="100%"
  figure-number="2"
  caption="The Things Network Console Page"
/>

<rk-img
  :src="`${$frontmatter.static_root}/3.qkmub7m7hgn0zzoi0cnh.jpg`"
  width="100%"
  figure-number="3"
  caption="Adding a Gateway to TTN"
/>

- All of your Registered Gateways will be displayed here in this page. Click "register gateway"

<rk-img
  :src="`${$frontmatter.static_root}/4.ohve3d6gfqksz1ctk27a.jpg`"
  width="100%"
  figure-number="4"
  caption="Registering your Gateway"
/>

::: tip 📝 NOTE:
 Make sure to select the \"**I'm using the legacy packet forwarder**\" check box.
:::

- **Gateway EUI** - refers to the Gatway ID you obtained from the previous step. In case you forgot, just type `gateway-version` in the command line. This must be the same with the Gateway's True Gateway ID otherwise you will fail to register your Gateway on TTN.
- **Description** - A human readable description of your Gateway.
- **Frequency Plan** - This is the frequency you want to use and it must be the same with Gateway and the Node.
- **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
- **Location** - Choose the location of the Gateway by entering its coordinates. This is reflected on the Gateway World Map!
- **Antenna Placement** - refers to the location of your antenna whether indoor or outdoor.

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is **Connected**, Congratulations! :tada: Your Gateway is now connected to the The Things Network (TTN).
