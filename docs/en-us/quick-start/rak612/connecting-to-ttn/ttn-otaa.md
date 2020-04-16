---
next: ttn-abp
---

# OTAA Mode

According to **The Things Network, Over-the-Air Activation** (OTAA) is the preferred and most secure way to connect with The Things Network. Thus, it is chosen as the default method when registering a device.

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/otaa-activation.png"
  width="100%"
  figure-number="1"
  caption="Activation Method - OTAA"
/>

:::tip 📝 NOTE
As an example, let's join in OTAA mode and EU868 frequency.
:::

1. Set the LoRa® join mode to **OTAA** as follows:

```
at+set_config=join_mode:1
```
<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/lora-join-otaa.jpg"
  width="60%"
  figure-number="2"
  caption="AT Command for OTAA LoRa® Join Mode via RAK Serial Port Tool"
/>

2. Set the frequency/region to **EU868**:

```
at+band=EU868
```

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/lora-region-otaa.jpg"
  width="60%"
  figure-number="3"
  caption="AT Command for OTAA LoRa® Region/Frequency via RAK Serial Port Tool"
/>

3. Set the **Device EUI.**

```
at+set_config=dev_eui:XXXX
```

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/lora-eui-otaa.jpg"
  width="60%"
  figure-number="4"
  caption="AT Command for OTAA LoRa® Device EUI via RAK Serial Port Tool"
/>

4. Set the **Application EUI**:

```
at+set_config=app_eui:XXXX
```
<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/lora-appeui-otaa.jpg"
  width="60%"
  figure-number="5"
  caption="AT Command for OTAA LoRa® Application EUI via RAK Serial Port Tool"
/>

5. Set the **Application Key**:

```
at+set_config=app_key:XXXX
```

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/lora-appkey-otaa.jpg"
  width="60%"
  figure-number="6"
  caption="AT Command for OTAA LoRa® Application Key via RAK Serial Port Tool"
/>

:::tip 📝 NOTE
After configuring all the parameters, you need to reset your RAK612 LPWAN Button for saving parameters.
:::

6. After resetting RAK612 LPWAN Button, join in OTAA mode:

```
at+join=otaa
```
<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/otaa-join.jpg"
  width="60%"
  figure-number="7"
  caption="AT Command for OTAA LoRa® Join via RAK Serial Port Tool"
/>

7. Joined successfully! Now, let’s try to send a data to TTN. Try pressing any key on your RAK612 LPWAN Button. You should see any data printed in the RAK Serial Port Tool whenever you press any key same as with the image below:

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/otaa-senddata.jpg"
  width="60%"
  figure-number="8"
  caption="Testing the RAK612 LoRa® Button in RAK Serial Port Tool"
/>

* You can then see the data sent from RAK612 LPWAN BUtton in TTN website as follows:

<rk-img
  src="/assets/images/quick-start-guide/rak612/ttn/otaa-ttn-received.jpg"
  width="100%"
  figure-number="9"
  caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>

