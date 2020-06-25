---
prev: /en-us/quick-start-guide/nodes/rak4600-evaluation/interfacing/
---

# Checking Device Logs

There are 2 ways that you can check the logs for debugging purposes on your RAK4600 LPWAN Evaluation Board:

1. **Through J-Link RTT Viewer**
2. **Through UART**

## Through J-Link RTT Viewer

1. If you want to check the logs of RAK4600 LPWAN Evaluation Board using this method, make sure you have connected the RAK4600 LPWAN Evaluation Board with your PC through JTAG like the following diagram below:

<rk-img
  src="/assets/images/quick-start-guide/rak4600/4.checking-device-logs/zyvc5cexqy2g04lh5gqm.png"
  width="100%"
  figure-number="1"
  caption="RAK4600 LPWAN Evaluation Board to Windows PC connection thru JTAG"
/>

<rk-img
  src="/assets/images/quick-start-guide/rak4600/4.checking-device-logs/yrwn46pfwepuhlh1wuof.png"
  width="100%"
  figure-number="2"
  caption="RAK4600 LPWAN Evaluation Board to Windows PC connection thru JTAG"
/>

:::warning ⚠️ WARNING
You still have to connect the Micro-usb Cable to the RAK4600 LPWAN Evaluation Board to power the board.
:::

2. Go to the Official Website of **Segger** where you can Download the [J-Flash software](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/). Open the program “**J-Link RTT Viewer V6.60f**” and choose "**USB**" for the type of connection to J-Link. After which, press "**OK**".

<rk-img
  src="/assets/images/quick-start-guide/rak4600/4.checking-device-logs/k40v5ssykcsgrwfvd6ds.png"
  width="100%"
  figure-number="3"
  caption="J-Link RTT Viewer Start-up Window"
/>

3. Choose the device parameters as the following picture shows and press "OK".

<rk-img
  src="/assets/images/quick-start-guide/rak4600/4.checking-device-logs/xjnmuyygdpfhmjbko2dn.png"
  width="100%"
  figure-number="4"
  caption="J-Link RTT Viewer Connection Parameters"
/>

4. Connect to your RAK4600 by navigating through File>Connect in the Main Menu. Alternatively, you could just press "**F2**" to do the same process.

<rk-img
  src="/assets/images/quick-start-guide/rak4600/4.checking-device-logs/xhppkxsyq7k0zste4xpx.png"
  width="100%"
  figure-number="5"
  caption="J-Link RTT Viewer Connecting Shortcut"
/>

5. Once connection is obtained, you should see the same log as shown in the image below:

<rk-img
  src="/assets/images/quick-start-guide/rak4600/4.checking-device-logs/uvpxna4236xrglaamrcx.jpg"
  width="100%"
  figure-number="6"
  caption="Log Checking through J-Link RTT Viewer"
/>

:::tip 📝 NOTE
If there is no log after connecting successfully, you can try to reset RAK4600 or double check the connection of JTAG.
:::

## Through UART

1. If you want to check the log of RAK4600 through UART, you should make sure that RAK4600 has been connected with your PC through UART correctly as the following picture shows:

<rk-img
  src="/assets/images/quick-start-guide/rak4600/4.checking-device-logs/munukxglkrz6vw7n9tow.jpg"
  width="100%"
  figure-number="7"
  caption="UART to RAK4600 LPWAN Evaluation Board Connection"
/>

:::tip 📝 NOTE
You still have to connect the Micro-usb Cable to the RAK4600 LPWAN Evaluation Board to power the board.
:::

2. Open the RAK Serial Port Tool as described in [Interfacing with RAK4600](README.md)

3. Press the Reset Button on the RAK4600 LPWAN Evaluation Board then you will see the following contents in the Serial port Tool.

<rk-img
  src="/assets/images/quick-start-guide/rak4600/4.checking-device-logs/ebx6auejnil1ob8hvhaf.jpg"
  width="60%"
  figure-number="8"
  caption="Log Checking through UART"
/>
