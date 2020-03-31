---
static_root: /assets/images/quick-start-guide/rak8212/configuring-your-rak8212
---

# Configuring your RAK8212 iTracker Pro

You can configure your RAK8212 iTracker Pro by sending AT Commands through Bluetooth.

::: tip Info
For the complete list of AT Commands available for configuring your RAK8212 iTracker Pro, kindly check the [AT Commands for iTracker Pro](at-commands-for-rak8212) document.
:::

## Through BLE

1.In order to configure the RAK8212 iTracker Pro through BLE, download and install **nRF Connect** which is developed by Nordic Semiconductor and is also available in both App Store and Google Play Store.

<rk-img
  :src="`${$frontmatter.static_root}/cp0at8rhrvymleq7yuqv.jpg`"
  width="100%"
  figure-number="1"
  caption="nRF Connect App in Android and IOS"
/>

2.Make sure the Bluetooth on your mobile is turned on. Open the application and you will see all BLE devices in range in the scan list:

<rk-img
  :src="`${$frontmatter.static_root}/nub2thufpqgy6jyuxou1.jpg`"
  width="50%"
  figure-number="2"
  caption="nRF Master Control Panel (BLE) device connecting"
/>

3.Upon connecting, a pop-up window displays and in the third item "**Nordic UART Service**", click the arrow marked in the red box which enables you to write commands through **BLE**.

<rk-img
  :src="`${$frontmatter.static_root}/piminlwoxlxa2lcyzjpx.jpg`"
  width="100%"
  figure-number="3"
  caption="AT+command sending throught BLE"
/>

4.Click the arrow which is marked by the red box in the picture below, you will see the following page:

<rk-img
  :src="`${$frontmatter.static_root}/xfvjlkpzlwvftkgsoaku.jpg`"
  width="50%"
  figure-number="4"
  caption="Nordic UART Service RX Characteristics"
/>

5.You can now then send AT commands to the RAK8212 iTracker Pro. Meanwhile, you can also see log information in RTT Viewer as discussed in [Checking Device Logs](checking-device-logs) document.

- For example, if you want to check the current firmware’s version send the following command:

<rk-img
  :src="`${$frontmatter.static_root}/pygfdyws2p5zb5zsrtva.jpg`"
  width="100%"
  figure-number="5"
  caption="AT+command for RAK8212 Firmware Version"
/>

6.Then, you can see the version number in RTT Viewer tool:

<rk-img
  :src="`${$frontmatter.static_root}/ckpxkecc1jucumdjglfm.png`"
  width="100%"
  figure-number="6"
  caption="RAK8212 Firmware Version in RTT Viewer Tool"
/>
