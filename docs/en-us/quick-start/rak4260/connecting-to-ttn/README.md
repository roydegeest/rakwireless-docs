---
next: ttn-otaa
---
# Connecting to The Things Network (TTN)

In this section, we will be connecting the RAK4260 LPWAN Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/ttn-homepage.png"
  width="100%"
  figure-number="1"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/ttn-console-page.png"
  width="100%"
  figure-number="2"
  caption="TTN Console Page"
/>

1. Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/application-page.png"
  width="100%"
  figure-number="3"
  caption="Application Page"
/>

## Adding An Application

1. Click the "**add application**" button

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/add-application.png"
  width="100%"
  figure-number="4"
  caption="Application Page"
/>


2. Here are the things that you should take note in adding an application:
    * **Application ID** - this will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.
    * **Description** - this is a short and concise human readable description of your application.
    * **Application EUI** - this will be generated automatically by The Things Network for convenience.
    * **Handler Registration** - handler you want to register this application to.

3. After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/application-overview.png"
  width="100%"
  figure-number="5"
  caption="Application Overview"
/>

## Register Device

1. Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/device-section.png"
  width="100%"
  figure-number="6"
  caption="Device Section"
/>

2. Click "**Register device**"

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/add-device.png"
  width="100%"
  figure-number="7"
  caption="Add your Device"
/>

3. Here are the things that you should take note in registering your device:
    * **Device ID** - this is the unique identifier for your RAK4260 LPWAN Evaluation Board in your application. You need to enter this manually.
    * **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

4. Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

5. Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/add-device.png"
  width="100%"
  figure-number="8"
  caption="Device Overview"
/>


