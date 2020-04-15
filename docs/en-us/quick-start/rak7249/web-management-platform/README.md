---
next: status-page
---

# Web Management Platform

This section describes in detail the functionality of the Web Management UI. It is based on OpenWRT and is shared among all gateway products of RAKwireless Commercial Gateway line.

## Accessing the Web Management Platform

To get started open the browser, enter the IP address of the gateway, and open the login page of the WEB Management Platform. Type-in root as the username and password and click login. You can choose in the options provided in this section to access the platform.

### Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like **"RAK7249_XXXX"** on your PC's Wi-Fi Network List. "XXXX" is the last two bytes of the Gateway MAC address. To access the Web Management Platform, input the IP Address: **192.168.230.1** in your Web browser.

:::tip Note
:pencil: No password is required to connect via Wi-Fi.
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
Connect the RAK7249 Macro Outdoor Gateway's ETH Port located at the rear panel to your Router using an Ethernet Cable. Same as with the Wi-Fi AP mode, the same IP Address: `192.168.230.1` shall be used to access the Web Management Platform.

### WAN Port Direct Connection
Connect the RAK7249 Macro Outdoor Gateway's ETH Port located at the rear panel to your PC using an Ethernet Cable. By default, the IP address of the RAK7249 Macro Outdoor Gateway's Ethernet interface is 192.168.10.10, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, 192.168.10.20. You can then access the Web Management Platform using the Gateway's IP Address:`192.168.10.10`.

You can now then Proceed to the Web Management Platform document for the detailed configurations based on your specific application.