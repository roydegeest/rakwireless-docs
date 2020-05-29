---
static_root: /assets/images/quick-start-guide/rak811-breakout/connecting-to-ttn
prev: /en-us/quick-start/rak811-breakout/interfacing-with-rak811-breakout
next: ttn-otaa-mode
---

# Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network [**here**](https://www.thethingsnetwork.org/docs/).
In this section, we’ll show you how to connect the RAK811 LPWAN Breakout Module with TTN.

1. First, **connect** the RAK811 LPWAN Breakout Module to your PC and open the **Serial Port Tool**.

2. Select the appropriate COM port and **open** it as in the image:

<rk-img
  :src="`${$frontmatter.static_root}/lcvx0tpp0mvbqtfvveja.png`"
  width="100%"
  figure-number="1"
  caption="RAK811 Serial Port Tool"
/>

::: tip 📝 NOTE
In this section, it is the assumption that you are within the coverage range of a TTN Gateway.
:::

3. Now go to the [TTN Website](https://www.thethingsnetwork.org/) and Log in.

<rk-img
  :src="`${$frontmatter.static_root}/xcnu0ubgglpnncjaxcxx.jpg`"
  width="100%"
  figure-number="2"
  caption="The Things Network Homepage"
/>

4. Choose "**Console**" located at the top right corner. Then, Click "**Application**".

<rk-img
  :src="`${$frontmatter.static_root}/dewhjv5kvji5cnwlb8q4.png`"
  width="100%"
  figure-number="3"
  caption="TTN Console page"
/>

## Adding an Application
5. Press the "**add application**" button.

<rk-img
  :src="`${$frontmatter.static_root}/q69iye4keg0wcwvllxq4.png`"
  width="100%"
  figure-number="4"
  caption="TTN Applications Page"
/>

**6.** Create your own Application by filling in with correct contents.

::: tip 📝 NOTE
The Application ID is an unique combination of lower case, alphanumerical characters, nonconsecutive - and \_.
:::

<rk-img
  :src="`${$frontmatter.static_root}/kyllbiovwoj3dagerfw9.png`"
  width="100%"
  figure-number="5"
  caption="TTN Add Application Page"
/>

7. Then press the “**Add application**” button at the bottom of this page, and you can see the following page:

<rk-img
  :src="`${$frontmatter.static_root}/ig62tkokbeyymlwpe1gr.png`"
  width="100%"
  figure-number="6"
  caption="TTN Application Information Page"
/>

8. At the middle of this page, you can find the box named “**DEVICES**” and click “**register device**”.

<rk-img
  :src="`${$frontmatter.static_root}/jxfqlvwpvbe8irybx6sm.png`"
  width="100%"
  figure-number="7"
  caption="Registering Device in TTN"
/>

9. Fill in the "**Device ID"** . Click the icon in the **“Device EUI**”, then a code is generated automatically.

You can get the **“Device EUI**” of your RAK811 with the following command, which will display all node parameters:

```bash
at+get_config=lora:status
```

In case you have had TTN generate a new **“Device EUI**” you can use the command below to import it into the RAK811 configuration parameters (**XXXX is the Device_EUI you want to update**):

```bash
at+set_config=lora:dev_eui:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/izycmdjz16pclj4sbhtn.png`"
  width="100%"
  figure-number="8"
  caption="Filling in the Device Information"
/>

10. Then press the “**Register**” button at the bottom of this page to finish.

<rk-img
  :src="`${$frontmatter.static_root}/jbsjagixye7gonowplap.png`"
  width="100%"
  figure-number="9"
  caption="Device Overview in TTN"
/>

Depending on which authentication method you want to use please proceed to either the **OTAA mode** or **ABP mode** section.
