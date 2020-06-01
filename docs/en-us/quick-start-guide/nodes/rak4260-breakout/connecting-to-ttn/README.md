---
prev: /en-us/quick-start-guide/rak4260-breakout/interfacing.html
next: /en-us/quick-start-guide/rak4260-breakout/connecting-to-ttn/otaa-mode.html
---

## Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about [**The Things Network**](https://www.thethingsnetwork.org/docs/).

In this section, we will be connecting the RAK4260 LPWAN Breakout Module to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create an account. Once done, log in to your account and in the home page, go to the console. Refer to figure 1.


<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/ttn/ttn-home-page.png"
  width="100%"
  figure-number="1"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/ttn/ttn-console-page.png"
  width="100%"
  figure-number="2"
  caption="TTN Console Page"
/>


- Choose "**APPLICATIONS**".

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/ttn/application-page.png"
  width="100%"
  figure-number="3"
  caption="Application Page"
/>


### Adding an Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/ttn/adding-an-application.png"
  width="100%"
  figure-number="4"
  caption="Adding an Application"
/>

Here are the things that you should take note in adding an application:

1. **Application ID** - this will be the unique id of your application in the Network. Note that the characters should be in lower case, no spaces are allowed.
2. **Description** - this is a short and concise human readable description of your application.
3. **Application EUI** - this will be generated automatically by The Things Network for convenience.
4. **Handler Registration** - the handler you want to register this application to.

After filling in the necessary information, press the "**Add application**". If the page is the same as figure 5 then, you have successfully registered your application.

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/ttn/application-overview.png"
  width="100%"
  figure-number="5"
  caption="Application Overview"
/>


### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/ttn/device-section.png"
  width="100%"
  figure-number="6"
  caption="Device Section"
/>


- Click "**Register device "**

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/ttn/add-your-device.png"
  width="100%"
  figure-number="7"
  caption="Add your Device"
/>


Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK4260 LPWAN Breakout Module in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.
3. **App Key** – this key will be used to secure the communication between the device and the network.
4. **App EUI**– a unique identifier of the Application that you are registering the device within.

Populate the **Device ID** and **Device EUI**_ (generate a random one by pressing the arrows)_ fields and leave the rest as is. Click “**Register**”.

<rk-img
  src="/assets/images/quick-start-guide/rak4260-breakout/ttn/device-overview.png"
  width="100%"
  figure-number="8"
  caption="Device Overview"
/>

In the Device Overview, there are two options of the **Activation Method**: **OTTA** and **ABP**. Take note that the default option is **OTAA** as shown in figure 8. However, instructions will be provided on both methods in the following sections starting with OTAA.




