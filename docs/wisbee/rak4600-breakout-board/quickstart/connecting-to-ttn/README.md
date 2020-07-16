---
prev: /wisbee/rak4600-breakout-board/quickstart/interfacing.html
next: /wisbee/rak4600-breakout-board/quickstart/connecting-to-ttn/ttn-otaa.html
---

# Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network [**here**](https://www.thethingsnetwork.org/docs/).

In this section, we will be connecting the RAK4600 LPWAN Breakout Module to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/ttn-home-page.png"
  width="100%"
  figure-number="1"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/ttn-console-main-page.png"
  width="100%"
  figure-number="2"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/application-page.png"
  width="100%"
  figure-number="3"
  caption="Application Page"
/>

## Adding an Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/adding-application.png"
  width="100%"
  figure-number="4"
  caption="Adding an Application"
/>

Here are the things that you should take note in adding an application:

1. **Application ID** - this will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.
2. **Description** - this is a short and concise human readable description of your application.
3. **Application EUI** - this will be generated automatically by The Things Network for convenience.
4. **Handler Registration** - handler you want to register this application to.

After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/application-overview.png"
  width="100%"
  figure-number="5"
  caption="Application Overview"
/>

### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/device-section.png"
  width="100%"
  figure-number="6"
  caption="Device Section"
/>

- Click "**Register device**"

<rk-img
  src="/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/add-device.png"
  width="100%"
  figure-number="7"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK4600 LPWAN Breakout Module in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.
3. **App Key**– this key will be used to secure the communication between the device and the network.
4. **App EUI**– a unique identifier of the Application that you are registering the device within.

Populate the **Device ID** and **Device EUI** _(generate a random one by pressing the arrows)_ fields and leave the rest as is.
Click “**Register**”

<rk-img
  src="/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/device-overview-page.png"
  width="100%"
  figure-number="8"
  caption="Device Overview"
/>

Depending on which authentication method you want to use, proceed to either **OTAA mode** or **ABP mode** section.
