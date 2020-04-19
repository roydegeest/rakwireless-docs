---
static_root: /assets/images/quick-start-guide/rak5010/4.configuring-rak5010
---
# Configuring RAK5010

You can configure your RAK5010 WisTrio NB-IoT Tracker by sending AT Commands either through UART, through BLE or through Micro USB.

:::tip 📝 NOTE:
 For the full list of AT Commands available for configuring your RAK5010, kindly check [here](at-commands)
:::

## Through UART

1. As mentioned in [Checking Device Logs](checking-device-logs), if you want to use RAK5010 WisTrio NB-IoT Tracker through UART, you should connect the RAK5010 in your machine through UART as shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/g1rz6rigcuznvqtlfcb5.jpg`"
  width="100%"
  figure-number="1"
  caption="RAK5010 and USB-UART Connection"
/>  

2. Try to send a simple AT command to RAK5010 to get the current firmware’s version by sending the command below using the RAK Serial Port Tool. Similarly, you can send other AT commands of RAK5010 in the same way.
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

1. In order to configure the RAK5010 WisTrio NB-IoT Tracker through BLE, download and install **nRF Connect** which is developed by Nordic Semiconductor and is also available in both App Store and Google Play Store.

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

3. Press the reset button on the RAK5010 Board and wait for a couple of seconds. Look for a BLE Device named "RUI-..." in the scan list of the app. Connect to this device and click "**Nordic UART Service**"

<rk-img
  :src="`${$frontmatter.static_root}/mg6xtfoepu06s33iedyu.jpg`"
  width="100%"
  figure-number="5"
  caption="Nordic UART Service in the Nordic App"
/>  

:::warning
 By the default, the BLE signal of the RAK5010 is turned off automatically if no connection is established after 60 seconds. Connect to the BLE signal of the RAK5010 immediately after pressing the reset button.
:::

4. Click the arrow which is marked by the red box in the picture below, you will see the following page:


<rk-img
  :src="`${$frontmatter.static_root}/r7j95cqwrevod7qtvcsv.jpg`"
  width="50%"
  figure-number="6"
  caption="RX Characteristic in the Nordic UART Service"
/>  

5. You can now then send AT commands to the RAK5010. Meanwhile you can also see log information in RTT Viewer as discussed in [Checking Device Logs](checking-device-logs).

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


## Through Micro USB

- To begin with, connect your RAK5010 with your PC through microUSB/USB as shown in the image below:
<rk-img
  :src="`${$frontmatter.static_root}/ehzpnpgveqdplcndqwc7.jpg`"
  width="100%"
  figure-number="9"
  caption="MicroUSB Interface for RAK5010"
/> 

- Open the serial port tool in your PC.


:::tip 📝 NOTE:
 For this method, you need a serial port tool which can support DTR function, like Termite. You can download\nTermite [**here**](https:\/\/downloads.rakwireless.com\/en\/Cellular\/Tools\/).
:::

Alright, after opening the serial tool, configure its setting by following the picture below:

<rk-img
  :src="`${$frontmatter.static_root}/ginpaktnnszkf65cnlgo.png`"
  width="100%"
  figure-number="10"
  caption="Termite Configuration Enabling DTR"
/> 

Termite will connect with RAK5010 automatically, if not, just click the blue button to connect again:

<rk-img
  :src="`${$frontmatter.static_root}/fjdgvai3o7c0fkworis5.jpg`"
  width="100%"
  figure-number="11"
  caption="Termite Initial Log"
/> 

- Now, you can send AT commands into RAK5010.

<rk-img
  :src="`${$frontmatter.static_root}/ytdlpxiq25p7o1o3ylkr.png`"
  width="100%"
  figure-number="12"
  caption="Checked Log in Termite"
/> 
