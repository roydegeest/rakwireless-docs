---
static_root: /assets/images/wislink-lte/rak8213/quickstart/prerequisites
next: /en-us/quick-start-guide/nb-iot/rak8213/connecting-to-network.html
---

# Access the Gateway

## Wi-Fi AP Mode

By default, the firmware is configured to operate the Raspberry Pi in Wi-Fi AP mode, which means that you should be able to find an SSID named “Rakwireless_XXXX” on the Wi-Fi network list, for example:

<rk-img
  :src="`${$frontmatter.static_root}/wifi-ap.jpg`"
  width="80%"
  caption="RAKWireless Access Point"
/>

- The default password for the AP: **rakwireless**.
- The default IP address of the Raspberry Pi: **192.168.230.1.** This is also the address you will be using to SSH into the OS.
- There is no need to configure the IP address of your PC as it will be assigned automatically via the DHCP server.

## Log into the Raspberry through SSH

### 1. Windows OS

SSH (Secure Shell) is used to login to a remote machine and to execute commands. There are several free and good SSH Clients available such as [**Putty**](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [**BitVise SSH Client**](https://www.bitvise.com/ssh-client-download), and [**MobaXterm**](https://mobaxterm.mobatek.net/). You are free to choose one that fits your needs, however, in this guide, you will be using Putty.

After installation, open Putty and connect with the OS through Wi-Fi AP mode. The IP address is 192.168.230.1.

<rk-img
  :src="`${$frontmatter.static_root}/putty.png`"
  width="75%"
  caption="Putty Software for SSH in Windows"
/>

- Click open and it will prompt you to enter the username and password. 
- The default username: **pi**
- The default password: **raspberry**

Upon successful login, you should see the initial screen with the messages notifying you that you should change your password. Refer to Figure 3.

<rk-img
  :src="`${$frontmatter.static_root}/command-line.jpg`"
  width="90%"
  caption="Command line after login"
/>

### 2. Mac OS

Open the terminal of Mac OS. Then, launch the **Terminal** application found in this directory: **/Applications/Utilities/**. You can also launch it from Spotlight by hitting **Command + Spacebar** and typing “Terminal” and then return:

<rk-img
  :src="`${$frontmatter.static_root}/mac-os.png`"
  width="90%"
  caption="Mac OS Terminal"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: `sudo -i`.

<rk-img
  :src="`${$frontmatter.static_root}/ssh-mac.jpg`"
  width="100%"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter `ssh pi@192.168.230.1` in the terminal to login to your gateway. The default password is **raspberry**.

<rk-img
  :src="`${$frontmatter.static_root}/mac-login.jpg`"
  width="100%"
  caption="Log into the Raspberry"
/>

### 3. Linux

 If you are using Linux the procedure is the same as the one for Mac OS.

