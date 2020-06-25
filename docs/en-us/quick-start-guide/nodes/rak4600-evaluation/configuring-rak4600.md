---
static_root: /assets/images/quick-start-guide/RAK4600/5.configuring-rak4600
next: /en-us/quick-start-guide/nodes/rak4600-evaluation/connecting-to-ttn/
---

# Configuring RAK4600

You can configure your RAK4600 LPWAN Evaluation Board by sending AT Commands either through UART, through BLE or through Micro USB.

:::tip 📝 NOTE:
For the full list of AT Commands available for configuring your RAK4600, kindly check [here](at-commands)
:::

## Through UART

1. As mentioned in [Checking Device Logs](checking-device-logs), if you want to use RAK4600 LPWAN Evaluation Board through UART, you should connect the RAK4600 in your machine through UART as shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/evtfrnai2bs2mtpyhusv.jpg`"
  width="100%"
  figure-number="1"
  caption="RAK4600 and USB-UART Connection"
/>

2. Try to send a simple AT command to RAK4600 to get the current firmware’s version by sending the command below using the RAK Serial Port Tool. Similarly, you can send other AT commands of RAK4600 in the same way.

```
at+version
```

<rk-img
  :src="`${$frontmatter.static_root}/viskdhazv9uu3yxhotid.jpg`"
  width="50%"
  figure-number="2"
  caption="AT command for Firmware Version"
/>

## Through BLE

1. In order to configure the RAK4600 LPWAN Evaluation Boardthrough BLE, download and install **nRF Connect** which is developed by Nordic Semiconductor and is also available in both App Store and Google Play Store.

<rk-img
  :src="`${$frontmatter.static_root}/eponlb3piu1p6noof1np.png`"
  width="100%"
  figure-number="3"
  caption="nRF Connect App in Android and IOS"
/>

2. Make sure the Bluetooth on your mobile is turned on. Open the application and you will see all BLE devices in range in the scan list:

<rk-img
  :src="`${$frontmatter.static_root}/rwpeihuyflhu65gopfml.jpg`"
  width="50%"
  figure-number="4"
  caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK4600 LPWAN Evaluation Board and wait for a couple of seconds. Look for a BLE Device named "RUI-..." in the scan list of the app. Connect to this device and click "**Nordic UART Service**"

<rk-img
  :src="`${$frontmatter.static_root}/mg6xtfoepu06s33iedyu.jpg`"
  width="100%"
  figure-number="5"
  caption="Nordic UART Service in the Nordic App"
/>

:::warning ⚠️ WARNING
By the default, the BLE signal of the RAK4600 is turned off automatically if no connection is established after 60 seconds. Connect to the BLE signal of the RAK4600 immediately after pressing the reset button.
:::

4. Click the arrow which is marked by the red box in the picture below, you will see the following page:

<rk-img
  :src="`${$frontmatter.static_root}/r7j95cqwrevod7qtvcsv.jpg`"
  width="50%"
  figure-number="6"
  caption="RX Characteristic in the Nordic UART Service"
/>

5. You can now then send AT commands to the RAK4600. Meanwhile you can also see log information in RTT Viewer as discussed in [Checking Device Logs](checking-device-logs).

- For example, if you want to check the current firmware’s version send the following command:

<rk-img
  :src="`${$frontmatter.static_root}/jficmu58afzs3r1hkw5h.jpg`"
  width="100%"
  figure-number="7"
  caption="Sending AT Command via Nordic App"
/>

6. Then, you can see the version number in RTT Viewer tool:
   <rk-img
     :src="`${$frontmatter.static_root}/nqqegmebbppnrcguzshh.png`"
     width="100%"
     figure-number="8"
     caption="Log Info in J-Link RTT Viewer"
   />
