---
title: Accessing Your Gateway
prev: /wisgate/rak7246g/quickstart/
next: accessing-the-internet
---

# Accessing your Gateway

After burning the image into the SD Card, make sure you have inserted the SD Card with the Latest Firmware installed to the **RAK7246G LPWAN Developer Gateway** and the LoRa® and GPS Antenna attached to it. After which, you can now safely power on the gateway.

:::warning ⚠️WARNING
Before powering the RAK7246G LPWAN Developer Gateway, you must install the LoRa® and GPS antennas. Not doing so might damage the boards.
:::

## Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**Rakwireless_XXXX**" on your PC Wi-Fi Network List.

<rk-img 
src="/assets/images/quick-start-guide/rak7246/access_point.png" 
width="100%" 
figure-number  = "1" 
caption="RAKWireless Access Point"
/>

::: tip 📝 NOTE:
“XXXX” is the last 2 bytes of your RAK7246’s WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note also of the default IP address of the Gateway provided below as this will be needed in connecting via SSH.

- **Wi-Fi Password:** rakwireless
- **Default IP Address:** `192.168.230.1`
  :::

## Log into the Gateway

### 1. Windows OS

SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [**Putty**](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [**BitVise SSH Client**](https://www.bitvise.com/ssh-client-download), [**MobaXterm**](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, you will be using Putty for this guide.

<rk-img 
src="/assets/images/quick-start-guide/rak7246/ssh.png" 
width="70%" 
figure-number  = "2" 
caption=" Putty Software for SSH in Windows"
/>

<!-- <Cimg src="/assets/images/quick-start-guide/rak7246/ssh.png" width="70%" figure_number = "2" caption="RAKwireless Access Point"/> -->

- If you have connected to the Gateway through Wi-Fi AP Mode, the IP Address is `192.168.230.1`
- It will then prompt you to enter the username and password. The default username is **"pi"** and the default password is **"raspberry"**

<rk-img src="/assets/images/quick-start-guide/rak7246/command_line.png" width="100%" figure-number  = "3" caption="Command line after log in"/>

### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting Command + Spacebar and typing “Terminal” and then return:

<rk-img src="/assets/images/quick-start-guide/rak7246/mac_terminal.png" width="100%" figure-number  = "4" caption="Opening Terminal in Mac OS"/>

Open the terminal of Mac OS. Enter root mode by typing the following command: `sudo -i`

- If you are not in root mode, enter `ssh pi@192.168.230.11` in the terminal to login to your Gateway, the default password is "**raspberry**".

### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except the root mode.
