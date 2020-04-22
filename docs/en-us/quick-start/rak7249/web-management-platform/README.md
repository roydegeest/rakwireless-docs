---
next: status-page
---

# Web Management Platform

This section describes in detail the functionality of the Web Management UI. It is based on OpenWRT and is shared among all gateway products of RAKwireless Commercial Gateway line.

## Accessing the Web Management Platform

To get started open the browser, enter the IP address of the gateway, and open the login page of the WEB Management Platform. Type-in root as the username and password and click login. You can choose in the options provided in this section to access the platform.

### Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like **"RAK7249_XXXX"** on your PC's Wi-Fi Network List. "XXXX" is the last two bytes of the Gateway MAC address. To access the Web Management Platform, input the IP Address: **192.168.230.1** in your Web browser.

:::tip 📝 NOTE
No password is required to connect via Wi-Fi.
:::

Using your preferred Web browser, input the aforementioned IP Address and you should see the same Log-in Page shown in the following image. Login the credentials provided below:
* **Username**: root
* **Password**: root

<rk-img
  src="/assets/images/quick-start-guide/rak7249/2.quickstart/web-ui-home.jpg"
  width="100%"
  figure-number="1"
  caption="Web User Interface Log-in"
/> 

### WAN Port (DHCP IP) Mode
Connect the Ethernet cable to the port marked “ETH” on the Gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your router. The router’s DHCP server should assign an IP Address to the Gateway. You can change the default settings below if you wish.

### WAN Port Direct Connection
Connect the Ethernet cable to the port marked “ETH” on the Gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your PC.

The default IP is **169.254.X.X.** The last two segments(X.X) are mapped from the last four bits of the MAC address of your gateway. For example, the last four bits of the MAC address are 0F:01, and the IP address is 169.254.15.1. Make sure to manually set the address of your PC to one in the same network (for example 169.254.15.100). You can then access the Web Management Platform using the Gateway's IP Address: 169.254.X.X.