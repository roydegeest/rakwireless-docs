---
next: access-the-internet
---

# Access the Gateway

In this section, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.

:::warning ⚠️ WARNING
Do not power the device if the LoRa® Antenna port has been left open to avoid potential damage in the RAK7249 Macro Outdoor Gateway."
:::

## Wi-Fi AP Mode
By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like **"RAK7249_XXXX"** on your PC's Wi-Fi Network List. "XXXX" is the last two bytes of the Gateway MAC address. To access the Web Management Platform, input the IP Address: `192.168.230.1` in your Web browser.

:::tip 📝 NOTE
No password is required to connect via Wi-Fi
:::

Using your preferred Web browser, input the aforementioned IP Address and you should see the same Log-in Page shown in the following image. Login the credentials provided below:
  * **Username**: root
  * **Password**: root

<rk-img
  src="/assets/images/quick-start-guide/rak7249/2.quickstart/okvqxiyqxijphxovxdtu.jpg"
  width="100%"
  figure-number="1"
  caption="Accessing the Gateway via Wi-Fi AP Mode"
/> 

## WAN Port (Ethernet)

Connect the Ethernet cable to the port marked “ETH” on the Gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your PC.

The default IP is **169.254.X.X.** The last two segments(X.X) are mapped from the last four bits of the MAC address of your gateway. For example, the last four bits of the MAC address are 0F:01, and the IP address is 169.254.15.1. Make sure to manually set the address of your PC to one in the same network (for example 169.254.15.100). Use the same credentials for the Web UI as for AP mode.


<rk-img
  src="/assets/images/quick-start-guide/rak7249/2.quickstart/egarkihseojsvnt6dzgx.jpg"
  width="100%"
  figure-number="2"
  caption="Accessing the Gateway via WAN Port (Ethernet)"
/> 


