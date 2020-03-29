

# Quick Start Guide

<rk-img
  src="/assets/images/quick-start-guide/rak7249/2.quickstart/rak7249-with-antennas.jpg"
  width="50%"
  figure-number="1"
  caption="RAK7249 Macro Outdoor Gateway with the Antennas installed"
/>

## What do you need?

1. **RAK7249 Macro Outdoor Gateway**
2. A Windows/Mac OS/Linux Computer

<!-- <rk-btn :params="$page.frontmatter.params.btn1" /> -->

<rk-btn
  src="https://store.rakwireless.com/products/rak7249-diy-outdoor-gateway"
  label="Buy a RAK7249 Macro Outdoor Gateway"
/>

## What's included in the Package?

<rk-img
  src="/assets/images/quick-start-guide/rak7249/2.quickstart/package_contents.png"
  width="100%"
  figure-number="2"
  caption="RAK7246G Package Contents"
/>

## Power on the Gateway

In this document, it is assumed that you have read and performed the procedures listed in the **Outdoor Deployment Category**. Listed below are the individual documents for you to read depending on your Gateway application:

* Gateway Installation Guide
* Solar Panel and Battery Kit Installation
* Lightning Protection

1. Attach the antennas

First and foremost screw on the antennas. All 5 of them should be installed (**WiFi**, **LoRa®**, **LTE-DIV**, **LTE-MAIN** on the top, and **GPS** on the bottom) same with the image shown below.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/2.quickstart/rak7249-with-antennas.jpg"
  width="50%"
  figure-number="3"
  caption="RAK7249 Macro Outdoor Gateway with the Antennas installed"
/>

:::warning
:warning: Do not power the device if any antenna port has been left open. In case you do not desire to use one or more antenna feature, make sure to terminate the port with a **50 Ohm load**.
:::

2. Power on the Gateway

It is recommended to use a **CAT5 Cable** to provide power to the Gateway. Attach one end to the **PoE injector** and the other to the **Ethernet Port** on the bottom of the casing.

## Accessing the Web Management Platform

Listed below are the options on how to access the Web Management Platform based on your preference. Take note of the IP Address set in each method which will be used using your preferred Web browser.

### Wi-Fi AP Mode

By default, the LoRaWAN® Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**RAK7249_XXXX**" on your PC's Wi-Fi Network List. "XXXX" is the last two bytes of the Gateway MAC address.

:::tip Note
:pencil: No password is required to connect via Wi-Fi.
:::

* Using your preferred Web browser, login the credentials provided below:
    * **Browser Address**: `192.168.230.1`
    * **Username**: root
    * **Password**: root

<rk-img
  src="/assets/images/quick-start-guide/rak7249/2.quickstart/web-ui-home.jpg"
  width="100%"
  figure-number="4"
  caption="Web User Interface Log-in"
/> 

### WAN Port (DHCP IP) Mode
Connect the RAK7249 Macro Outdoor Gateway's ETH Port located at the rear panel to your Router using an Ethernet Cable. Same as with the Wi-Fi AP mode, the same IP Address: `192.168.230.1` shall be used to access the Web Management Platform.

### WAN Port Direct Connection
Connect the RAK7249 Macro Outdoor Gateway's ETH Port located at the rear panel to your PC using an Ethernet Cable. By default, the IP address of the RAK7249 Macro Outdoor Gateway's Ethernet interface is 192.168.10.10, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, 192.168.10.20. You can then access the Web Management Platform using the Gateway's IP Address:`192.168.10.10`.

You can now then Proceed to the Web Management Platform document for the detailed configurations based on your specific application.