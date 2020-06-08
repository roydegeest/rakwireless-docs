---
static_root: /assets/images/quick-start-guide/rak2245-stamp/connection-to-ttn
---

# Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to use long range [gateways](https://www.thethingsnetwork.org/docs/gateways/) to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network [here](https://www.thethingsnetwork.org/docs/).

- First, you should have connected your Gateway to the router in order to access the internet according to the method which has been introduced in the [Accessing the Internet](/en-us/quick-start-guide/rak2245-stamp/accessing-your-gateway/accessing-the-internet.html) section of this document.
- Second, config your Gateway and choose TTN as the LoRa® Server and choose a correct frequency according to the method which has been introduced in the [Configuring the Gateway](/en-us/quick-start-guide/rak2245-stamp/configuring-the-gateway.html#server-is-ttn) section.
- Now go to the TTN Website: [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img
  :src="`${$frontmatter.static_root}/nedimpnbuhfzonrz8z6y.png`"
  width="100%"
  figure-number="1"
  caption="The Things Network Home Page"
/>

- Choose Console then Click Gateways.

<rk-img
  :src="`${$frontmatter.static_root}/ebaxmcecz3mhz7jbqupz.png`"
  width="100%"
  figure-number="2"
  caption="The Things Network Console Page"
/>

- All of your Registered Gateways will be displayed here in this page. Click "**register gateway**"

<rk-img
  :src="`${$frontmatter.static_root}/cgjbjaswugygc8dqsmui.png`"
  width="100%"
  figure-number="3"
  caption="Adding a Gateway to TTN"
/>

<rk-img
  :src="`${$frontmatter.static_root}/ljjhkak2ekgom8wzw16j.png`"
  width="100%"
  figure-number="4"
  caption="Registering your Gateway"
/>

- **Gateway EUI** - refers to the Gatway ID you obtained from the previous steps. In case you forgot, just type "**gateway-version**" in the command line. This must be the same with the Gateway's True Gateway ID otherwise you will fail to register your Gateway on TTN.

<rk-img
  :src="`${$frontmatter.static_root}/tdvxaiqw3kzn13hawchq.png`"
  width="100%"
  figure-number="5"
  caption="RAK2245 Stamp Edition - LPWAN Gateway ID in SSH"
/>

::: tip 📝 NOTE
Make sure to select the \"**I'm using the legacy packet forwarder**\" check box.
:::

- **Description** - A human readable description of your Gateway.
- **Frequency Plan** - This is the frequency you want to use and it must be the same with Gateway and the Node.
- **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
- **Location** - Choose the location of the Gateway by entering its coordinates. This is reflected on the Gateway World Map.
- **Antenna Placement** - Where is your antenna placed? Is it placed indoors or outdoors?

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is **Connected**, Congratulations! :tada: Your Gateway is now connected to the The Things Network (TTN).

<rk-img
  :src="`${$frontmatter.static_root}/emhpgxht6ngagrutweaj.png`"
  width="100%"
  figure-number="6"
  caption="RAK2245 Stamp Edition - LPWAN Gateway TTN Connection Success"
/>
