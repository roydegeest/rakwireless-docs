---
static_root: /assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode
prev: /wistrio/rak7205-5205/quickstart/connecting-to-chirpstack/chirpstack-otaa-mode.html
next: /wistrio/rak7205-5205/quickstart/decoding-sensor-data.html
---

# ABP Mode

**1.** If you select “**DeviceProfile_ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

::: warning Warning:
 Frequency AS923 in ABP Mode is not supported in Chirpstack.
:::

<rk-img
  :src="`${$frontmatter.static_root}/sgmhz031rjwdryeko8cv.png`"
  width="100%"
  figure-number="1"
  caption="Chirpstack ABP Activation"
/>

**2.** Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:

<rk-img
  :src="`${$frontmatter.static_root}/anv0xqjuyslnkiue0ltb.png`"
  width="100%"
  figure-number="2"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

**3.** Use these parameters to set RAK5205 WisTrio LPWAN Tracker by using AT command. Set **LoRa® join** mode to **ABP**:

```bash
at+set_config=lora:join_mode:1
```

<rk-img
  :src="`${$frontmatter.static_root}/iqptivjfhqaf9rkoxfwb.jpg`"
  width="60%"
  figure-number="3"
  caption="Chirpstack ABP Join Mode via RAK Serial Port Tool"
/>

**4.** Set LoRa® class to **Class A**:

```bash
at+set_config=lora:class:0
```

<rk-img
  :src="`${$frontmatter.static_root}/kkm5pwzhi44aif78akij.jpg`"
  width="60%"
  figure-number="4"
  caption="Chirpstack ABP Set Class via RAK Serial Port Tool"
/>

**5.** Set the frequency/region to **EU868**:

```bash
at+set_config=lora:region:EU868
```

<rk-img
  :src="`${$frontmatter.static_root}/hybihb6l6knq8lccnm1h.jpg`"
  width="60%"
  figure-number="5"
  caption="Chirpstack ABP Set Region/Frequency via RAK Serial Port Tool"
/>

**6.** Set the **Device Address**:

```bash
at+set_config=lora:dev_addr:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/tpqvwwbxnmlwzqcfgozy.jpg`"
  width="60%"
  figure-number="6"
  caption="Chirpstack ABP Set Device Address via RAK Serial Port Tool"
/>

**7.** Set the **Network Session Key**:

```bash
at+set_config=lora:nwks_key:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/gzryq4icdnjuxykqgfhz.jpg`"
  width="60%"
  figure-number="7"
  caption="Chirpstack ABP Set Network Session Key via RAK Serial Port Tool"
/>

**8.** Set the **Application Session Key**:

```bash
at+set_config=lora:apps_key:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/czhbmtdl7or1c2d6katt.jpg`"
  width="60%"
  figure-number="8"
  caption="Chirpstack ABP Set Application Session Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
 After configuring all parameters, you need to reset RAK5205 WisTrio LPWAN Tracker for saving parameters!
:::

**9.** After resetting RAK5205 WisTrio LPWAN Tracker, join in ABP mode:

```bash
at+join
```

<rk-img
  :src="`${$frontmatter.static_root}/b3oaamuv6fom8bydg1mi.jpg`"
  width="60%"
  figure-number="9"
  caption="Chirpstack ABP Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
 Actually,
it is not needed to join in ABP mode. But you still need to set this AT command to
validate the parameters which you just set for ABP mode.
:::

**10.** Now, let’s try to send a data from RAK5205 WisTrio LPWAN Tracker to ChirpStack:

```bash
at+send=lora:2:1234567890
```

<rk-img
  :src="`${$frontmatter.static_root}/elbbdyduu3bbgnopsvns.jpg`"
  width="60%"
  figure-number="10"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the data which is just sent from RAK5205 WisTrio LPWAN Tracker on ChirpStack page:

<rk-img
  :src="`${$frontmatter.static_root}/wv0gms26hbo1cktpspfe.png`"
  width="100%"
  figure-number="11"
  caption="Chirpstack Data Received Preview"
/>
