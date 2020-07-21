---
next: ../configuring-the-gateway
---

# Access the Gateway

There are two ways to connect to your RAK2287 Concentrator Module WisLink Series setup:

:::warning ⚠️WARNING
Before powering the Raspberry Pi 3B+ or 4, you should install the LoRa® and GPS antennas. Not doing so might damage the boards.
:::

### 1. Wi-Fi AP Mode

By default, the firmware is configured to operate the Raspberry Pi in Wi-Fi AP mode, which means that you should be able to find an SSID named “**Rakwireless_XXXX**” on the Wi-Fi network list, for example:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/4.wifi.png"
  width="100%"
  figure-number="1"
  caption="RAKWireless Access Point"
/>

:::tip 📝 NOTE
Connect to this Wi-Fi SSID by using "rakwireless" as the default password. The default IP address of the gateway's Wi-Fi is 192.168.230.1. Take note of this IP address as this will be needed in connecting via SSH.
:::

There is no need to configure the IP address of your PC as it will be assigned automatically via the DHCP server.

### 2. Via the Ethernet Port on the Raspberry Pi

You can also connect your PC with the gateway through an Ethernet cable. By default, the IP address of the gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`_._

- To do this in Windows, go to Control Panel > Network and Internet > Network and Sharing Center and click **Ethernet**

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/5.network-and-sharing.png"
  width="100%"
  figure-number="2"
  caption="Network and Sharing Center"
/>

- Click **Properties** then Choose **Internet Protocol Version 4 (TCP/IPv4).**


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/6.ethernet-final.png"
  width="100%"
  figure-number="3"
  caption="Ethernet Properties"
/>

- By default, it will obtain an IP Address automatically. Click the Option **Use the following IP Address** and enter the  IP Address: `192.168.10.20` and press OK.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/7.ipv4-settings.png"
  width="100%"
  figure-number="4"
  caption="TCP/IPv4 Properties"
/>

Now , you should be able to access your gateway from your PC successfully using the IP Address `192.168.10.10`through SSH.

## Log into the Gateway via SSH

### 1. Windows OS

Secure Shell (SSH) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [**Putty**](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [**BitVise SSH Client**](https://www.bitvise.com/ssh-client-download), [**MobaXterm**](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, but in this guide, you will be using Putty.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/8.putty.png"
  width="75%"
  figure-number="5"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the gateway through **Wi-Fi AP Mode**, the IP Address is `192.168.230.1`.
- If you have connected to the gateway through **Ethernet**, the IP Address is `192.168.10.10`.
- It will then prompt you to enter the username and password. The default username is "**pi**" and the default password is "**raspberry**".

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/9.command-line.png"
  width="100%"
  figure-number="6"
  caption="Command line after log in"
/>

### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting **Command + Spacebar** and typing “Terminal” and then return:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/10.mac-terminal.png"
  width="100%"
  figure-number="7"
  caption="Opening Terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: "`sudo -i`".

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/11.mac-ssh.jpg"
  width="100%"
  figure-number="8"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter "`ssh pi@192.168.230.1`" in the terminal to login to your gateway, the default password is "**raspberry**".
- If you connect your PC with the gateway through Ethernet Cable, you should enter "`ssh pi@192.168.10.10`", the default password is "**raspberry**".

OK, you have logged into the gateway through SSH successfully same with the image shown below:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/12.login-successful.jpg"
  width="100%"
  figure-number="9"
  caption="Log-in Successful Notification"
/>

### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except the root mode.




