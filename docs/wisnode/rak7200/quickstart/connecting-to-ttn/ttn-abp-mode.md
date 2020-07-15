---
static_root: /assets/images/wisnode/rak7200/quickstart/ttn-abp-mode
prev: /wisnode/rak7200/quickstart/connecting-to-ttn/ttn-otaa-mode.html
next: /wisnode/rak7200/quickstart/connecting-to-chirpstack/
---

# ABP Mode

1. To join the ABP mode, go to device settings and switch the activation method to **ABP**.

2. The **Device Address**, **Network Session Key** and **App Session Key** will be generated automatically by default.

<rk-img
  :src="`${$frontmatter.static_root}/ccjbidnd8e8hqvnjvc9g.png`"
  width="100%"
  figure-number="1"
  caption="Switching to ABP mode"
/>

3. Save the mode change and return to the **Device Overview page**. You can copy the keys by pressing the button after the value fields marked in red in Figure 2.

<rk-img
  :src="`${$frontmatter.static_root}/dann1wr9tchabmot7dqe.png`"
  width="100%"
  figure-number="2"
  caption="ABP Parameters Screen"
/>

4. Now we need to update the RAK7200 configuration (mode and parameters). Open the Serial Tool and type the command below to change the region (in case you have not done so already):

```bash
at+set_config=lora:region:EU868
```

As you can see in **Figure 3**, as we were in the same region (EU868), there was no change.

<rk-img
  :src="`${$frontmatter.static_root}/zarmjkdjh4o6fisc0rfq.jpg`"
  width="100%"
  figure-number="3"
  caption="Region Setup"
/>

5. Change the mode to **ABP** with the command:

```bash
at+set_config=lora:join_mode:1
```

<rk-img
  :src="`${$frontmatter.static_root}/t5mjuy5rxxolrtiin8tt.jpg`"
  width="100%"
  figure-number="4"
  caption="Join Mode Setup"
/>

6. Now that the mode has been changed, enter the parameters: **Device Address, Network Session Key**, and **Application Session Key**. Use the commands below. Remember to replace the **"X"** with the corresponding parameter value for your particular case (Figure 2 for reference of the parameters):

```bash
at+set_config=lora:dev_addr:X
```

```bash
at+set_config=lora:nwks_key:X
```

```bash
at+set_config=lora:apps_key:X
```

<rk-img
  :src="`${$frontmatter.static_root}/tacqtzuayki77cruuwqc.jpg`"
  width="100%"
  figure-number="5"
  caption="Setting up the RAK7200 ABP Parameters"
/>

7. Finally execute the join command:

```bash
at+join
```

<rk-img
  :src="`${$frontmatter.static_root}/gc45ctfnhpmyurhjw7uj.jpg`"
  width="100%"
  figure-number="6"
  caption="Join Command"
/>

8. You can test the connection by sending an uplink frame. Use the following for example:

```bash
at+send=lora:1:12345678
```

<rk-img
  :src="`${$frontmatter.static_root}/yzu8x3arcigsctbjjvws.jpg`"
  width="100%"
  figure-number="7"
  caption="Sending an Uplink Frame"
/>

If you get a response in your TTN live data feed as in **Figure 8**, than you are all set!

<rk-img
  :src="`${$frontmatter.static_root}/sxccujhjtfgxjkthyvy6.png`"
  width="100%"
  figure-number="8"
  caption="Sending Data to TTN from RAK7200"
/>
