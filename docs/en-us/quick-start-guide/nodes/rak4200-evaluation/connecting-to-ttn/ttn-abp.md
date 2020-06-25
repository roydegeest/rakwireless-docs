---
static_root: /assets/images/quick-start-guide/rak4200/4.connecting-to-ttn/ttn-abp
prev: /en-us/quick-start-guide/nodes/rak4200-evaluation/connecting-to-ttn/ttn-otaa.html
next: /en-us/quick-start-guide/nodes/rak4200-evaluation/connecting-to-chirpstack/
---

# ABP Mode

1. First, switch the activation method to ABP as shown in the following image:

<rk-img
  :src="`${$frontmatter.static_root}/bryeyppqcyb1amkfs4po.png`"
  width="100%"
  figure-number="1"
  caption="APB Activation in The Things Network"
/>

2. These three parameters will be used on RAK4200 LPWAN Evaluation Board: **Device Address**, **Network Session Key** and **App Session Key**.

<rk-img
  :src="`${$frontmatter.static_root}/bryeyppqcyb1amkfs4po.png`"
  width="100%"
  figure-number="2"
  caption="ABP Parameters in The Things Network"
/>

::: tip 📝 NOTE
As an example, let's join in ABP mode, EU868 frequency, and LoRa® class is Class A.
:::

3. If the join mode is not in ABP Mode, just set the LoRa® join mode to **ABP** as follows:

```
at+set_config=lora:join_mode:1
```

<rk-img
  :src="`${$frontmatter.static_root}/cl6jv8cge7hzkavag3hn.jpg`"
  width="60%"
  figure-number="3"
  caption="ABP Parameters in The Things Network"
/>

4. Set the LoRa® class to **Class A**:

```
at+set_config=lora:class:0
```

<rk-img
  :src="`${$frontmatter.static_root}/mmll3jdm6l9hg3jm5jy7.jpg`"
  width="60%"
  figure-number="4"
  caption="AT Command for ABP LoRa® Class via RAK Serial Port Tool"
/>

5. Set the frequency/region to **EU868**:

```
at+set_config=lora:region:EU868
```

<rk-img
  :src="`${$frontmatter.static_root}/hoxaobrwlgh6otjde6vd.jpg`"
  width="60%"
  figure-number="5"
  caption="AT Command for ABP LoRa® Class via RAK Serial Port Tool"
/>

6. Set the **Device Address**:

```
at+set_config=lora:dev_addr:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/i5tmaceu0jqjbh3qt4po.jpg`"
  width="60%"
  figure-number="6"
  caption="AT Command for ABP LoRa® Device Address via RAK Serial Port Tool"
/>

7. Set the **Network Session Key**:

```
at+set_config=lora:nwks_key:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/kc6fxzmr4ijlan1sgrh8.jpg`"
  width="60%"
  figure-number="7"
  caption="AT Command for ABP LoRa® Network Session Key via RAK Serial Port Tool"
/>

8. Set the **Application Session Key**:

```
at+set_config=lora:apps_key:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/wcfzckjltpwf2n8pdobs.jpg`"
  width="60%"
  figure-number="8"
  caption="AT Command for ABP LoRa® Application Session Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
After configuring all parameters, you need to reset RAK4200 LPWAN Evaluation Board for saving parameters!
:::

9. After resetting your RAK4200 LPWAN Evaluation Board, join in **ABP mode**:

```
at+join
```

<rk-img
  :src="`${$frontmatter.static_root}/mqklekitvyx1smagkvx5.jpg`"
  width="60%"
  figure-number="9"
  caption="AT Command for ABP LoRa® Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
There is no need to join in ABP mode. But you still need to set this AT command to validate the parameters which you just set for ABP mode
:::

Now, let’s try to send a data from the RAK4200 LPWAN Evaluation Board to TTN in ABP mode.

<rk-img
  :src="`${$frontmatter.static_root}/hdyn5eezsmczhxvblpkn.jpg`"
  width="60%"
  figure-number="10"
  caption=" OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>
