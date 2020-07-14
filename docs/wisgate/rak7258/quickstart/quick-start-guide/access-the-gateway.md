---
next: access-the-internet
---

# Access the Gateway

In this section, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.

:::warning ⚠️ WARNING
 Do not power the device if the LoRa® Antenna port has been left open to avoid potential damage in the RAK7258 Micro Gateway."
:::

## Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**RAK7258_XXXX**" on your PC's Wi-Fi Network List. "**XXXX**" is is the last two bytes of the Gateway MAC address.

:::tip 📝 NOTE:
 No password is required to connect via Wi-Fi
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

## WAN Port DHCP IP

When DHCP Server is in the network where the gateway WAN interface is located, the WAN interface can automatically get the IP address. After inquiring the IP address of the gateway through DHCP Server, the WEB management platform of the gateway can be accessed through the DHCP IP address of WAN interface. Same as with the Wi-Fi AP mode, the same IP Address: `192.168.230.1` shall be used to access the **Web Management Platform**.


