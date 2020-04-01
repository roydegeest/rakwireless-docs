---
static_root: /assets/images/quick-start-guide/rak7200/ttn-otaa-mode
---

# OTAA Mode

When setting up a new device in TTN it defaults to OTAA mode. For configuring it, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  :src="`${$frontmatter.static_root}/nt8drr212njdt10py0db.png`"
  width="100%"
  figure-number="1"
  caption="Device OTAA Parameters"
/>

Now, let's join in OTAA Mode and set your device to AU915 Frequency for example.

::: tip Note
The default LoRa® work mode is LoRaWAN® 1.0.2, the default LoRa® join mode is OTAA, and the default LoRa® class is Class A.For the full list of AT Commands, head on to [Configuring the RAK7200 using AT Commands](../configuring-the-rak7200.html).
:::

1.Set mode to **OTAA** and LoRa® device class to **Class A**, with the following set of commands:

```bash
at+set_config=lora:join_mode:0
```

```bash
at+set_config=lora:class:0
```

```bash
at+set_config=lora:region:AU915
```

`

`

<rk-img
  :src="`${$frontmatter.static_root}/bnax7ppemxgzwzwzibmw.jpg`"
  width="60%"
  figure-number="2"
  caption="Setting up the RAK7200 Operation Mode"
/>

2.Now that the modes are set, enter the parameters: : **Device EUI, Application EUI** and **App Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case:

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
  :src="`${$frontmatter.static_root}/u6bvilfgirchkipjzcvm.jpg`"
  width="60%"
  figure-number="3"
  caption="Setting up the RAK7200 OTAA Parameters"
/>

- You should end up with a window as the one in **Figure 3** above (**a series of OK messages**).

  3.Finally execute the join command:

```bash
at+join
```

<rk-img
  :src="`${$frontmatter.static_root}/fbrritkvpvvzvl69xosg.jpg`"
  width="60%"
  figure-number="4"
  caption="Join Command"
/>

4.Go to the **Device Overview** in the TTN and you can see that the status is now **Green (Online)**. Now your RAK7200 is transmitting sensor data to TTN. You can see it in its raw form in TTN, by going to the Data tab:

<rk-img
  :src="`${$frontmatter.static_root}/qw27owcgw812gsf2bcc1.png`"
  width="100%"
  figure-number="5"
  caption="Device Application Data"
/>
