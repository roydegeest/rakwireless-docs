---
static_root: /assets/images/quick-start-guide/rak7200/connecting-to-ttn
next: /en-us/quick-start-guide/rak7200/connecting-to-ttn/ttn-otaa-mode
prev: /en-us/quick-start-guide/rak7200/interfacing-with-rak7200
---
# Connecting to The Things Network

In this section, we will be connecting the RAK7200 LPWAN Tracker to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  :src="`${$frontmatter.static_root}/y9wl61hptkxuohn7qfd5.jpg`"
  width="100%"
  figure-number="1"
  caption="The Things Network Home Page"
/>

<rk-img
  :src="`${$frontmatter.static_root}/oy4hvfhzyjwp7pn57hyi.png`"
  width="100%"
  figure-number="2"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  :src="`${$frontmatter.static_root}/k1o7uxmkq2n4ymqlkgfi.jpg`"
  width="100%"
  figure-number="3"
  caption="Application Page"
/>

## Adding An Application
- Click the "**add application**" button

<rk-img
  :src="`${$frontmatter.static_root}/gdntv6q1zgljk1oeoea1.png`"
  width="100%"
  figure-number="4"
  caption="Adding an Application"
/>

Here are the things that you should take note in adding an application:

1. **Application ID** - this will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.
2. **Description** - this is a short and concise human readable description of your application.
3. **Application EUI** - this will be generated automatically by The Things Network for convenience.
4. **Handler Registration** - handler you want to register this application to.

- After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.

<rk-img
  :src="`${$frontmatter.static_root}/ihs7ykl9byiugn0pettn.png`"
  width="100%"
  figure-number="5"
  caption="Application Overview"
/>

### Register Device
- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  :src="`${$frontmatter.static_root}/ngm2lhuq6ni0qld0cxr5.jpg`"
  width="100%"
  figure-number="6"
  caption="Device Section"
/>

- Click "**Register device**"

<rk-img
  :src="`${$frontmatter.static_root}/gmd2swsxj8so6bwsoe9d.png`"
  width="100%"
  figure-number="7"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK7200 LPWAN Tracker in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  :src="`${$frontmatter.static_root}/yzjrzfna6eykkikg7p8s.png`"
  width="100%"
  figure-number="8"
  caption="Device Overview"
/>
