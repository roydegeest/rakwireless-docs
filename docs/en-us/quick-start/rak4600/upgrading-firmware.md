---
static_root: /assets/images/quick-start-guide/rak5010/8.upgrading-firmware
---

# Upgrading Firmware through DFU using BLE
1. Download the DFU package of the RAK4600 LPWAN Evaluation Board [**here**](https://downloads.rakwireless.com/en/LoRa/RAK4600/Firmware/DFU-Package/RAK4600_V3.0.0.7_dfu.zip) and save it on your mobile phone.

2. Make sure the Bluetooth on your mobile is turned on. Open the **nRF Connect** Mobile application and you will see all BLE devices in range in the scan list:

<rk-img
  :src="`${$frontmatter.static_root}/mnzoayqdsaquxxdimpnw.jpg`"
  width="50%"
  figure-number="1"
  caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK4600 and wait for a couple of seconds. Look for a BLE Device named "RUI-..." in the scan list of the app. Connect to this device and click "**Nordic UART Service**"

:::tip 📝 NOTE:
 This will be only visible for 60 seconds. More information about Bluetooth Connection Guide can be found here in [here](bluetooth-connection-modes)
:::

<rk-img
  :src="`${$frontmatter.static_root}/wwbnonxp1ugf6jtckbm6.jpg`"
  width="100%"
  figure-number="2"
  caption="Secure DFU Service in the Nordic App"
/>


4. Choose “**Secure DFU Service**” and click the button highlighted in red.

<rk-img
  :src="`${$frontmatter.static_root}/qxw4hh00xqmcv85df1f7.jpg`"
  width="100%"
  figure-number="3"
  caption="Buttonless DFU"
/>

5. Now, click the **red box button** in the image shown below and press "**Send**" in the **Write Value** pop-up window.

<rk-img
  :src="`${$frontmatter.static_root}/xb1hntew7qrbct9et5hz.jpg`"
  width="100%"
  figure-number="4"
  caption="Resetting the Bootloader via Bluetooth"
/>

6. Great! Now the RAK4600 is now working in DFU Mode. In the application, you will see the following:

<rk-img
  :src="`${$frontmatter.static_root}/qmi89z3vqxvukvbiodnc.jpg`"
  width="50%"
  figure-number="5"
  caption="RAK4600 Default Status Overview after Resetting"
/>

7.  In the list of devices, find a BLE signal named "**DfuTarg**" and Connect.

<rk-img
  :src="`${$frontmatter.static_root}/g2v0fkj63cbuwtt24mht.jpg`"
  width="50%"
  figure-number="6"
  caption="RAK4600 Default Bluetooth ID after Resetting"
/>

9. After connecting, select the DFU Icon. Select the **Distribution packet (ZIP)** and press OK. This will then prompt you to select the zip file of the firmware that you have downloaded.

<rk-img
  :src="`${$frontmatter.static_root}/pqnewr61x87nv5nrxovs.jpg`"
  width="100%"
  figure-number="7"
  caption="Distribution Packet File Type under DFU"
/>

10. It will then automatically start to upgrade the firmware of your RAK4600 through DFU over BLE. After upgrading, it will restart and the DFU Connection will be disconnected. Now you can use your RAK4600 with the latest firmware!

<rk-img
  :src="`${$frontmatter.static_root}/nzilnqodbz6x33uvnpp4.jpg`"
  width="50%"
  figure-number="8"
  caption="DFU Upgrading of RAK4600 Firmwave via BLE"
/>