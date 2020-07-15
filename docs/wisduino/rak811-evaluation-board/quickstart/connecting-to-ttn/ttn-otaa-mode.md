---
static_root: /assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/
prev: /wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/
next: /wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/ttn-abp-mode.html
---

# OTAA Mode

When setting up a new device in TTN it defaults to OTAA mode. For configuring it, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/eqx6w4refhlqbklpj4cc.png"
  width="100%"
  figure-number="1"
  caption="Device OTAA Parameters"
/>

Now, let us configure the RAK811 to work in OTAA mode in the EU868 band, as an example.

::: tip 📝 NOTE
The default LoRa® working mode for the RAK811 is LoRaWAN® 1.0.2, while the default LoRa® join mode is OTAA, and the default LoRa® class is Class A.
:::

1. Set mode to **OTAA** and LoRa® device class to **Class A**, with the following set of commands:

```bash
at+set_config=lora:join_mode:0
```

```bash
at+set_config=lora:class:0
```

```bash
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/okwyucipaed3fnrarkso.png"
  width="100%"
  figure-number="2"
  caption="Setting up the RAK811 Operation Mode"
/>

2. Now that the modes are set, enter the parameters: : **Device EUI, Application EUI** and **App Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case:

```bash
at+set_config=lora:dev_eui:XXXX
```

```bash
at+set_config=lora:app_eui:XXXX
```

```bash
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/jttmbmkhm0ac0duvap94.png"
  width="100%"
  figure-number="3"
  caption="Setting up the RAK811 OTAA Parameters"
/>

- You should end up with a window as the one in **Figure 3** above (**a series of OK messages**).

3. Finally execute the join command:

```bash
at+join
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/eevf8jgjt1p48i17vugw.png"
  width="100%"
  figure-number="4"
  caption="Join Command"
/>

4. You can test the connection by sending an uplink frame. Use the following for example:

```bash
at+send=lora:1:12345678
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/tsyls5mfkzctes7lh1jg.png"
  width="100%"
  figure-number="5"
  caption="Sending an uplink frame"
/>

- If you get a response in your TTN live data feed as in **Figure 6**, than you are all set!

::: tip 📝 NOTE
Be sure to have this window opened prior to sending data through the RAK Serial Port or you will not be able to receive the packet sent. Logging out your The Things Network acccount would also clear all the data sent and not being able to receive packets sent.
:::

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/gpkpni2w18kuvv0lqhi8.png"
  width="100%"
  figure-number="6"
  caption="Sending Data to TTN from RAK811"
/>
