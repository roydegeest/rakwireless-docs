---
next: lorawan-gateway-configuration
---

# Network Configuration

## 1. WAN Interface

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-wan-interface.png"
  width="100%"
  figure-number="1"
  caption="WAN Interface Configuration"
/>

The user can check the Status (Uptime, IPv4 Address, etc.), or configure the protocol to be used in connecting to your provider’s network. The following options are available: **DHCP**/**PPPoE**/**static IP** address.

Additionally, one can set the **Gateway metric** (how high is this interface in the connectivity priority) and the **MTU size** (1500 standard). Flipping the DNS switch allows you to enter a custom DNS server address.

## 2. Cellular Network Configuration

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-cellular-interface.png"
  width="100%"
  figure-number="2"
  caption="Cellular Interface Configuration"
/>

The same statistics as with the WAN Interface are available. It is here that you set the **APN**, **User**, and **Password**. The Gateway metric determines the priority of this interface, compared with the other connectivity options. The lower the value the higher the priority.

:::tip Note
:pencil: There is also a field for the PIN Code in case your SIM card is locked.
:::

## 3. Wi-Fi

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-wifi-config.png"
  width="100%"
  figure-number="3"
  caption="Wi-Fi Configuration"
/>

Enabling/Disabling the Wi-Fi is done from this page via the blue button at the top. Additionally, you can pick a radio channel or leave it on Auto configuration. The Wi-Fi can work in one of two modes:

**Access Point**: By default, there is no password. One can access the Web UI via the IP address: **192.168.230.1** once connected to the AP. The SSID is "**RAK7258_XXXX**" by default.

:::tip Note
:pencil: If you swipe the **Hidden** slider, the SSID will not be advertised.
:::

**Client**: By default, the client mode is disabled. If you want to use it you have to click the “**Enable**” button.Click the “**Scan**” button to choose your preferred wireless network. Choose the encryption method, fill in the password and press **Save & Apply**.

## 4. Firewall

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-firewall.png"
  width="100%"
  figure-number="4"
  caption="Firewall"
/>

You can configure a number of settings including, but not limited to: **Zones**, **Port Forwarding**, **NAT**, etc.

## 5. Diagnostics

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-diagnostics.png"
  width="100%"
  figure-number="5"
  caption="Diagnostics"
/>

The connection diagnostic tools are in this section: **Ping**, **Traceroute**, **Nslookup**.

You can enter either an URL or an IP Address in the text box and execute the command with the button. Both IPv4 and IPv6 are supported. The results are conveniently displayed in a CLI box.

## 6. Ping Watchdog

<rk-img
  src="/assets/images/quick-start-guide/rak7258/3.web management platform/network-ping-watchdog.png"
  width="100%"
  figure-number="6"
  caption="Ping Watchdog"
/>

Ping Watchdog monitors the quality of network links by constantly pinging the specified IP Address or Domain name on the specified uplink network interface. When network link failures are detected, scheduled measures are taken automatically. Those include: Interface restart, Interface priority reduction, Device restart, etc.

:::tip Note
:pencil: Reducing the priority of an uplink interface only works when the LoRaWAN Gateway uses both Ethernet and Cellular as uplink methods at the same time.
:::

The WAN interface represents the Ethernet uplink interface and WAN represents the LTE cellular network uplink interface.

For example if Ping Watchdog is enabled for both uplink interfaces at the same time and the response to degradation of the link quality is set as Increase Gateway Metric the two uplink interfaces work as backups for each other. In the event of significant degradation on one, the Gateway switches to the other.

The Gateway Metric determines the priority of interfaces. The default value can be adjusted in the Network menu for the corresponding interface. The lower the Gateway metric, the higher the priority of the link.