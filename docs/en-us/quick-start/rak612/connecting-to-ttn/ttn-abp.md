---
next: /en-us/quick-start/rak612/key-function-customizing.html
---
# ABP Mode

Follow these steps, if you want to join with The Things Network in **Activation By Personalisation** (ABP) Mode.

1. First, switch the activation method to ABP as shown in the following image

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/abp-ttn.png"
  width="100%"
  figure-number="1"
  caption="APB Activation in The Things Network"
/>

2. These three parameters will be used on RAK612 LPWAN Button: **Device Address**, **Network Session Key** and **App Session Key**.

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/abp-param.png"
  width="100%"
  figure-number="2"
  caption="ABP Parameters in The Things Network"
/>

:::tip 📝 NOTE
As an example, let's join in ABP mode and EU868 frequency.
:::

3. If the join mode is not in ABP Mode, just set the LoRa® join mode to **ABP** as follows:

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/abp-lora-join.jpg"
  width="60%"
  figure-number="3"
  caption="AT Command for ABP LoRa® Join Mode via RAK Serial Port Tool"
/>

4. Set the frequency/region to **EU868**:

```
at+band=EU868
```
<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/lora-region-otaa.jpg"
  width="60%"
  figure-number="4"
  caption="AT Command for ABP LoRa® Region/Frequency via RAK Serial Port Tool"
/>

5. Set the **Device Address**: 

```
at+set_config=dev_addr:XXXX
```

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/abp-devaddr.jpg"
  width="60%"
  figure-number="5"
  caption="AT Command for ABP LoRa® Device Address via RAK Serial Port Tool"
/>


6. Set the **Network Session Key**:

```
at+set_config=nwks_key:XXXX
```
<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/abp-nwkskey.jpg"
  width="60%"
  figure-number="6"
  caption="AT Command for ABP LoRa® Network Session Key via RAK Serial Port Tool"
/>

7. Set the **Application Session Key**:

```
at+set_config=apps_key:XXXX
```
<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/abp-appskey.jpg"
  width="60%"
  figure-number="7"
  caption="AT Command for ABP LoRa® Application Session Key via RAK Serial Port Tool"
/>


:::tip 📝 NOTE
After configuring all parameters, you need to reset the RAK612 LPWAN Button for saving parameters.
:::

8. After resetting your RAK612 LPWAN Button, join in **ABP mode**:

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/abp-join.jpg"
  width="60%"
  figure-number="8"
  caption="AT Command for ABP LoRa® Join via RAK Serial Port Tool"
/>

9. Joined successfully! Now, let’s try to send a data to TTN. Try pressing any key on your RAK612 LPWAN Button. You should see any data printed in the RAK Serial Port Tool whenever you press any key same as with the image below:

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/abp-send-data.jpg"
  width="60%"
  figure-number="9"
  caption="Testing the RAK612 LoRa® Button in RAK Serial Port Tool"
/>

* You can then see the data sent from RAK612 LPWAN BUtton in TTN website as follows:

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/ttn-abp-received.jpg"
  width="100%"
  figure-number="10"
  caption="ABP Test Sample Data Sent Viewed in The Things Network"
/>


