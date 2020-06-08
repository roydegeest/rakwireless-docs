---
static_root: /assets/images/quick-start-guide/rak811-breakout/ttn-abp-mode
next: ../connecting-to-chirpstack/
---

# ABP Mode

1. To join the ABP mode, go to device settings and switch the activation method to **ABP**.

2. The **Device Address**, **Network Session Key** and **App Session Key** will be generated automatically by default.

<rk-img
  :src="`${$frontmatter.static_root}/msdyy9qeahlwmkezdktb.png`"
  width="100%"
  figure-number="1"
  caption="Switching to ABP mode"
/>

3. Save the mode change and return to the **Device Overview page**. You can copy the keys by pressing the button after the value fields marked in red in Figure 2.

<rk-img
  :src="`${$frontmatter.static_root}/kujly9q7b3ka0avth0hn.png`"
  width="100%"
  figure-number="2"
  caption="ABP parameters screen"
/>

4. Now we need to update the RAK811 configuration (mode and parameters). Open the Serial Tool and type the command below to change the region (in case you have not done so already):

```bash
at+set_config=lora:region:EU868
```

As you can see in Figure 3, since we are in the same region (EU868), nothing has changed.

<rk-img
  :src="`${$frontmatter.static_root}/gkaye44gsjjuxhtptjmv.png`"
  width="100%"
  figure-number="3"
  caption="Region setup"
/>

5. Change the mode to **ABP** with the command:

```bash
at+set_config=lora:join_mode:1
```

<rk-img
  :src="`${$frontmatter.static_root}/xxgmfyq9dkgzu7hcfq4g.png`"
  width="100%"
  figure-number="4"
  caption="Join mode setup"
/>

6. Now that the mode has been changed, enter the parameters: **Device Address, Network Session Key**, and **Application Session Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case (Figure 2 for reference of the parameters):

```bash
at+set_config=lora:dev_addr:XXXX
```

```bash
at+set_config=lora:nwks_key:XXXX
```

```bash
at+set_config=lora:apps_key:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/yjupd0dh7ytr1rzqe118.png`"
  width="100%"
  figure-number="5"
  caption="Setting up the RAK811 ABP parameters"
/>

You should end up with a window as the one in **Figure 5** above with **a series of OK messages**.

7. Finally execute the join command:

```bash
at+join
```

<rk-img
  :src="`${$frontmatter.static_root}/y81mijqfbzfvhxlvt8qm.png`"
  width="100%"
  figure-number="6"
  caption="Join command"
/>

8. You can test the connection by sending an uplink frame. Use the following as an example:

```bash
at+send=lora:1:12345678
```

<rk-img
  :src="`${$frontmatter.static_root}/tfs0ngbmzluoex9gl3kn.png`"
  width="100%"
  figure-number="7"
  caption="Sending an uplink frame"
/>

If you get a response in your TTN live data feed as in Figure 8, then you are all set!

<rk-img
  :src="`${$frontmatter.static_root}/rzwucwtfq8mue3evp2fc.png`"
  width="100%"
  figure-number="8"
  caption="Sending Data to TTN from RAK811"
/>
