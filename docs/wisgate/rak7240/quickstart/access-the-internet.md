---
next: /wisgate/rak7240/quickstart/connecting-to-ttn.html
---

# Access the Internet

## Connect through Wi-Fi

<rk-img
  src="/assets/images/quick-start-guide/rak7240/access-internet-wifi.jpg"
  width="100%"
  figure-number="1"
  caption="Accessing the Internet using Wi-Fi"
/>

Go into the **Network>Wi-Fi Menu** and make sure to enable the **Wireless Client** as it is disabled initially. Enter or click "**Scan**" to choose your **ESSID**, select the right **Encryption** method and enter the correct **Key**.

<rk-img
  src="/assets/images/quick-start-guide/rak7240/access-wifi-credentials.png"
  width="75%"
  figure-number="2"
  caption="Connect through Wi-Fi Credentials"
/>

:::tip 📝 NOTE
Assuming you have entered the correct parameter values you should get an IP address assigned by your Wi-Fi router's (AP) built-in DHCP server. You can use this new IP address to log in via a web browser (same way as in AP mode).
:::

## Connect through Ethernet/PoE

<rk-img
  src="/assets/images/quick-start-guide/rak7240/access-internet-ethernet.jpg"
  width="100%"
  figure-number="3"
  caption="Accessing the Internet through Ethernet"
/>

Connect the Ethernet cable to the port marked “ETH” on the Gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your router. The router’s DHCP server should assign an IP Address to the Gateway. You can change the default settings below if you wish (details in the User Manual).

<rk-img
  src="/assets/images/quick-start-guide/rak7240/access-ethernet-credentials.png"
  width="75%"
  figure-number="4"
  caption="Connect through Ethernet Settings"
/>
