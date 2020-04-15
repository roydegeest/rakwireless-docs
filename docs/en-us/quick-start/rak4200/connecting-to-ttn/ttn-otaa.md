---
static_root: /assets/images/quick-start-guide/rak4200/4.connecting-to-ttn/ttn-otaa
next: ttn-abp
---

# OTAA Mode
When setting up a new device in TTN its default is to join in OTAA mode. For configuration, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  :src="`${$frontmatter.static_root}/otjgr7rhyejvmsx4i4km.png`"
  width="100%"
  figure-number="1"
  caption="Device Overview Parameters"
/>

::: tip 📝 NOTE
As an example, let’s join in OTAA mode, EU868 frequency and the default LoRa® class is Class A.
:::

1. Set the LoRa® join mode to **OTAA** as follows:
```
at+set_config=lora:join_mode:0
```

<rk-img
  :src="`${$frontmatter.static_root}/ugvheykwbjgqrmve3gr1.jpg`"
  width="60%"
  figure-number="2"
  caption=" AT Command for OTAA LoRa® Join Mode via RAK Serial Port Tool"
/>

2. Set the LoRa® class to **Class A**:
```
at+set_config=lora:class:0
```
<rk-img
  :src="`${$frontmatter.static_root}/uwdcbt0uegx9s5nacmdh.jpg`"
  width="60%"
  figure-number="3"
  caption=" AT Command for OTAA LoRa® Class via RAK Serial Port Tool"
/>

3. Set the frequency/region to **EU868**:
```
at+set_config=lora:region:EU868
```
<rk-img
  :src="`${$frontmatter.static_root}/iuxsdncululn7d4ywcis.jpg`"
  width="60%"
  figure-number="4"
  caption=" AT Command for OTAA LoRa® Region Frequency via RAK Serial Port Tool"
/>

4. Set the **Device EUI.**
```
at+set_config=lora:dev_eui:XXXX
```
<rk-img
  :src="`${$frontmatter.static_root}/pu2digmbwm9tms4h3mtm.jpg`"
  width="60%"
  figure-number="5"
  caption=" AT Command for OTAA LoRa® Device EUI via RAK Serial Port Tool"
/>

5. Set the **Application EUI**:
```
at+set_config=lora:app_eui:XXXX
```
<rk-img
  :src="`${$frontmatter.static_root}/k2nhwyd1ctfx6gjwuboz.jpg`"
  width="60%"
  figure-number="6"
  caption=" AT Command for OTAA LoRa® Application EUI via RAK Serial Port Tool"
/>

6. Set the **Application Key**:
```
at+set_config=lora:app_key:XXXX
```
<rk-img
  :src="`${$frontmatter.static_root}/rv7qwzhicwokmmgxcawf.jpg`"
  width="60%"
  figure-number="7"
  caption=" AT Command for OTAA LoRa® Application Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
After configuring all parameters, you need to reset RAK4200 LPWAN Evaluation Board for saving parameters!
:::

7. After resetting  RAK4200 LPWAN Evaluation Board, join in OTAA mode:
```
at+join
```
<rk-img
  :src="`${$frontmatter.static_root}/mgztynrigiozealhlv6t.jpg`"
  width="60%"
  figure-number="8"
  caption=" AT Command for OTAA LoRa®  Join via RAK Serial Port Tool"
/>

8. Joined successfully! Now, let’s try to send a data from the  RAK4200 LPWAN Evaluation Board to TTN:
```
at+send=lora:2:1234567890
```
<rk-img
  :src="`${$frontmatter.static_root}/drwvcagphdvkbt8kefnc.jpg`"
  width="60%"
  figure-number="9"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can then see the data sent from  RAK4200 LPWAN Evaluation Board on TTN website as follows:

<rk-img
  :src="`${$frontmatter.static_root}/vdrrdeh7oifamkrwvryn.jpg`"
  width="100%"
  figure-number="10"
  caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>