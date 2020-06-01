---
prev: /en-us/quick-start-guide/rak4600-breakout/connecting-to-ttn/
---

# OTAA Mode

When setting up a new device in TTN its default is to join in OTAA mode. For configuration, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/otaa-device-overview.png"
  width="100%"
  figure-number="1"
  caption="Device Overview Parameters"
/>

::: tip 📝 NOTE
As an example, let\u2019s join in OTAA mode, EU868 frequency and the default LoRa\u00ae\nclass is Class A.
:::

::: tip 📝 NOTE
Execute the following commands one by one and in the\norder given.
:::


1. Set the LoRa® join mode to
**OTAA** as follows:

```
at+set_config=lora:join_mode:0
```

2. Set the LoRa® class to **Class A**:

```
at+set_config=lora:class:0
```

3. Set the frequency/region to **EU868**:

```
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/at-command-join.png"
  width="50%"
  figure-number="2"
  caption="AT Command for OTAA Join Mode, Class and Region"
/>

::: tip 📝 NOTE
Execute the following commands one by one and in the\norder given.
:::


4. Set the **Device EUI.**

```
at+set_config=lora:dev_eui:XXXX
```


5. Set the **Application EUI**:

```
at+set_config=lora:app_eui:XXXX
```


6. Set the **Application Key**:


```
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/at-command-otaa-device-eui.png"
  width="50%"
  figure-number="3"
  caption="AT Command for OTAA Device EUI, Application EUI and Application Key"
/>


7. Reboot the RAK4600 LPWAN Breakout Module to save the parameters.


```
at+set_config=device:restart
```


8. After resetting RAK4600 LPWAN Breakout Module, join in OTAA mode:


```
at+join
```

<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/at-command-otaa-serial-port.png"
  width="50%"
  figure-number="4"
  caption="AT Command for OTAA LoRa® Join via RAK Serial Port Tool"
/>


9. Joined successfully! Now, let’s try to send a data from the  RAK4600 LPWAN Breakout Module to TTN:

```
at+send=lora:2:0123456789
```
<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/otaa-test-sample-data.png"
  width="50%"
  figure-number="5"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>


You can then see the data sent from  RAK4600 LPWAN Breakout Module on TTN website as follows:


<rk-img
  src="/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/otaa-test-sample-sent.png""
  width="100%"
  figure-number="6"
  caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>

