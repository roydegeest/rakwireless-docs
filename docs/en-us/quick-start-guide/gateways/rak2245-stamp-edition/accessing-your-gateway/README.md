---
static_root: /assets/images/quick-start-guide/rak2245-stamp/accessing-your-gateway
prev: /en-us/quick-start-guide/gateways/rak2245-stamp-edition/quick-start-guide.html#quick-start-guide
next: accessing-the-internet
---

# Accessing your Gateway

After burning the image into the SD Card, make sure you have inserted the SD Card with the Latest Firmware installed to the Raspberry Pi with the RAK2245 Stamp Edition - LPWAN Gateway Concentrator Module and the LoRa® and GPS Antenna attached to it. After which, you can now safely power on the gateway. In this document, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.

::: warning ⚠️ WARNING
Before powering the Raspberry Pi you should install the LoRa® and GPS antennas. Not doing so might damage the boards.
:::

## 1. Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find a SSID named like "**Rakwireless_XXXX**" on your PC Wi-Fi Network List.

<rk-img
  :src="`${$frontmatter.static_root}/m3gdql9punccouuquldw.jpg`"
  width="70%"
  figure-number="1"
  caption="RAKWireless Access Point"
/>

::: tip 📝 NOTE
Connect to this Wi-Fi SSID by using \"**rakwireless**\" as the default password. The default IP address of the Gateway's Wi-Fi is **`192.168.230.1`**. Take note of this IP address as this will be needed in connecting via SSH.
:::

## 2. Via the Ethernet port on the Raspberry Pi 3B+

You can also connect your PC with the Gateway through an Ethernet cable. By default, the IP address of the Gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`_._

- To do this in Windows, go to Control Panel -> Network and Internet -> Network and Sharing Center and Click **Ethernet**

<rk-img
  :src="`${$frontmatter.static_root}/ncj0nh5ynyywotognquj.png`"
  width="100%"
  figure-number="2"
  caption="Network and Sharing Center"
/>

- Click **Properties** then Choose **Internet Protocol Version 4 (TCP/IPv4).**

<rk-img
  :src="`${$frontmatter.static_root}/nopiph8bjpdxczgxbztx.png`"
  width="100%"
  figure-number="3"
  caption="Ethernet Properties"
/>

- By default, it will obtain an IP Address automatically. Click the Option "Use the following IP Address" and enter the IP Address: `192.168.10.20` and press OK.

<rk-img
  :src="`${$frontmatter.static_root}/yuukphgmct3ux8g9iyae.png`"
  width="100%"
  figure-number="4"
  caption="TCP/IPv4 Properties"
/>

Now , you should be able to access your Gateway from your PC successfully using the IP Address `192.168.10.10`through SSH.

## Log into the Gateway via SSH

### 1. Windows OS

SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [BitVise SSH Client](https://www.bitvise.com/ssh-client-download), [MobaXterm ](https://mobaxterm.mobatek.net/)and many more. Feel free to choose one that fits your needs, you will be using Putty for this guide.

<rk-img
  :src="`${$frontmatter.static_root}/zctxurdhxfooo2qtf9e7.png`"
  width="70%"
  figure-number="5"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the Gateway through **Wi-Fi AP Mode**, the IP Address is `192.168.230.1`
- If you have connected to the Gateway through **Ethernet**, the IP Address is `192.168.1.10`
- It will then prompt you to enter the username and password. The default username is "**pi**" and the default password is "**raspberry**"

<rk-img
  :src="`${$frontmatter.static_root}/xn4iy6bxo6myz6bff6is.jpg`"
  width="100%"
  figure-number="6"
  caption="Command Line after Log-in"
/>

### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting **Command + Spacebar** and typing “Terminal” and then return:

<rk-img
  :src="`${$frontmatter.static_root}/yhqsxlzfx7b4azgjam4e.png`"
  width="100%"
  figure-number="7"
  caption="Opening Terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: "`sudo -i`"

<rk-img
  :src="`${$frontmatter.static_root}/n23irdfprbarciykopvs.jpg`"
  width="100%"
  figure-number="8"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter "`ssh pi@192.168.230.1`" in the terminal to login to your Gateway, the default password is "**raspberry**".
- If you connect your PC with the Gateway through Ethernet Cable, you should enter "`ssh pi@192.168.10.10`", the default password is "**raspberry**".

OK, you have logged into the Gateway through SSH successfully same with the image shown below:

<rk-img
  :src="`${$frontmatter.static_root}/ev6njusmdpurynnhahum.jpg`"
  width="100%"
  figure-number="9"
  caption="Log-in Successful Notification"
/>

### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except for the root mode.
