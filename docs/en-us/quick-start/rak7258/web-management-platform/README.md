---
next: status-page
---

# Web Management Platform

This section describes in detail the functionality of the Web Management UI. It is based on OpenWRT and is shared among all gateway products of RAKwireless Commercial Gateway line.

## Accessing the Web Management Platform

Listed below are the options on how to access the Web Management Platform based on your preference. Take note of the IP Address set in each method which will be used using your preferred Web browser.

### Wi-Fi AP Mode

By default, the LoRaWAN® Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**RAK7258_XXXX**" on your PC's Wi-Fi Network List. "XXXX" is the last two bytes of the Gateway MAC address.

:::tip Note
:pencil: No password is required to connect via Wi-Fi.
:::

* Using your preferred Web browser, login the credentials provided below:
    * **Browser Address**: `192.168.230.1`
    * **Username**: root
    * **Password**: root

<rk-img
  src="/assets/images/quick-start-guide/rak7258/2.quickstart/web-ui-home.jpg"
  width="100%"
  figure-number="1"
  caption="Web User Interface Log-in"
/> 

### WAN Port (DHCP IP) Mode
Connect the RAK7258 Micro Gateway's ETH Port located at the rear panel to your Router using an Ethernet Cable. Same as with the Wi-Fi AP mode, the same IP Address: `192.168.230.1` shall be used to access the Web Management Platform.

You can now then Proceed to the Web Management Platform document for the detailed configurations based on your specific application.