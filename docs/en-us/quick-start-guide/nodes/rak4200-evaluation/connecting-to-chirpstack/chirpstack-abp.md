---
static_root: /assets/images/quick-start-guide/rak4200/5. connecting-to-chirpstack/abp
---
# ABP Mode

1. If you select “**DeviceProfile_ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

::: warning ⚠️ WARNING
Frequency AS923  in ABP Mode is not supported in Chirpstack.
:::

<rk-img
  :src="`${$frontmatter.static_root}/n794vly7saocsviprbbj.png`"
  width="100%"
  figure-number="1"
  caption="Chirpstack ABP Activation"
/>

2. Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:
<rk-img
  :src="`${$frontmatter.static_root}/n3ragennimcdzazgxhyp.png`"
  width="100%"
  figure-number="2"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

3. Use these parameters to set RAK4200 LPWAN Evaluation Board by using AT command. Set **LoRa® join** mode to **ABP**:
```
at+set_config=lora:join_mode:1
```
<rk-img
  :src="`${$frontmatter.static_root}/iqptivjfhqaf9rkoxfwb.jpg`"
  width="60%"
  figure-number="3"
  caption="Chirpstack ABP Join Mode via RAK Serial Port Tool"
/>

4. Set LoRa® class to **Class A**:
```
at+set_config=lora:class:0
```
<rk-img
  :src="`${$frontmatter.static_root}/kkm5pwzhi44aif78akij.jpg`"
  width="60%"
  figure-number="4"
  caption="Chirpstack ABP Set Class via RAK Serial Port Tool"
/>

5. Set the frequency/region to **EU868**:
```
at+set_config=lora:region:EU868
```
<rk-img
  :src="`${$frontmatter.static_root}/hybihb6l6knq8lccnm1h.jpg`"
  width="60%"
  figure-number="5"
  caption="Chirpstack ABP Set Region/Frequency via RAK Serial Port Too"
/>

6. Set the **Device Address**:
```
at+set_config=lora:dev_addr:XXXX
```
<rk-img
  :src="`${$frontmatter.static_root}/tpqvwwbxnmlwzqcfgozy.jpg`"
  width="60%"
  figure-number="6"
  caption="Chirpstack ABP Set Device Address via RAK Serial Port Tool"
/>

7. Set the **Network Session Key**:
```
at+set_config=lora:nwks_key:XXXX
```
<rk-img
  :src="`${$frontmatter.static_root}/gzryq4icdnjuxykqgfhz.jpg`"
  width="60%"
  figure-number="7"
  caption="Chirpstack ABP Set Network Session Key via RAK Serial Port Tool"
/>

8. Set the **Application Session Key**:
```
at+set_config=lora:apps_key:XXXX
```
<rk-img
  :src="`${$frontmatter.static_root}/czhbmtdl7or1c2d6katt.jpg`"
  width="60%"
  figure-number="8"
  caption="Chirpstack ABP Set Application Session Key via RAK Serial Port Too"
/>

::: tip 📝 NOTE
After configuring all parameters, you need to reset RAK4200 LPWAN Evaluation Board for saving parameters!
:::

9. After resetting RAK4200 LPWAN Evaluation Board, join in ABP mode:
```
at+join
```
<rk-img
  :src="`${$frontmatter.static_root}/b3oaamuv6fom8bydg1mi.jpg`"
  width="60%"
  figure-number="9"
  caption="Chirpstack ABP Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
It is not needed to join in ABP mode. But you still need to set this AT command to validate the parameters which you just set for ABP mode.
:::

10.  Now, let’s try to send a data from RAK4200 LPWAN Evaluation Board to ChirpStack:
```
at+send=lora:2:123456789
```
<rk-img
  :src="`${$frontmatter.static_root}/elbbdyduu3bbgnopsvns.jpg`"
  width="60%"
  figure-number="10"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the data which is just sent from RAK4200 LPWAN Evaluation Board on ChirpStack page:

<rk-img
  :src="`${$frontmatter.static_root}/fnw0xofynzzxjxhjuhrv.png`"
  width="100%"
  figure-number="11"
  caption="Chirpstack Data Received Preview"
/>