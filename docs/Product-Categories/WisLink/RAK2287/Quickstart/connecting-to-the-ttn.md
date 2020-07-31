# Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to use long range gateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network [here](https://www.thethingsnetwork.org/docs/).

- First, you should have connected your  gateway to the router in order to access the internet according to the method which has been introduced in the [auto$](/rak2287-concentrator-module-wislink-series/connecting-to-a-network) section of this document.
- Second, config your  gateway and choose TTN as the LoRa® Server and choose a correct frequency according to the method which has been introduced in the [auto$](/rak2287-concentrator-module-wislink-series/configuring-the-gateway) section.
- Now go to the TTN Website: [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/1.ttn_home_page.png"
  width="100%"
  figure-number="1"
  caption="The Things Network Home Page"
/>

- Choose Console then Click Gateways.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/2.console-page.png"
  width="100%"
  figure-number="2"
  caption="The Things Network Console Page"
/>

- All of your Registered Gateways will be displayed here in this page. Click "**register gateway**"

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/3.add-gateway.png"
  width="100%"
  figure-number="3"
  caption="Adding a Gateway to TTN"
/>

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/4.register-gateway.png"
  width="100%"
  figure-number="4"
  caption="Registering your Gateway"
/>

- **Gateway EUI** - refers to the Gatway ID you obtained from the previous step. In case you forgot, just type "**gateway-version**" in the command line. This must be the same with the  gateway's True Gateway ID otherwise you will fail to register your  gateway on TTN.

:::tip 📝 NOTE
Make sure to select the "**I'm using the legacy packet forwarder**" check box.
:::

- **Description** - A human readable description of your  gateway.
- **Frequency Plan** - This is the frequency you want to use and it must be the same with  gateway and the node.
- **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
- **Location** - Choose the location of the gateway by entering its coordinates. This is reflected on the Gateway World Map.
- **Antenna Placement** - Where is your antenna placed? Is it placed indoors or outdoors?


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/5.gateway-connected.png"
  width="100%"
  figure-number="5"
  caption="Gateway overview"
/>

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is "**Connected**" same as in **Figure 5** as reference, Congratulations! Your gateway is now connected to the The Things Network (TTN).
