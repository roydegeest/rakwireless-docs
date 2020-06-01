---
static_root: /assets/images/quick-start-guide/rak811-breakout/lora-p2p-mode
---

# LoRa® P2P Mode

In this section, I’ll show how to use LoRa® P2P mode. We will be using EU868 as our frequency, although it is applicable to other standard bands.

1. First, find two RAK811 LPWAN Breakout Module which can work on EU868 frequency and make sure their firmware version isn’t less than V3.0.0.1.

2. Next, connect these two RAK811 LPWAN Breakout Module with PC through UART, and open two serial port tool on PC.

3. Now, configure them to both work in LoRaP2P mode as follow:

```bash
at+set_config=lora:work_mode:1
```

<rk-img
  :src="`${$frontmatter.static_root}/qytvsg9mx3y4drl7pwrg.png`"
  width="60%"
  figure-number="1"
  caption="P2P Initialization"
/>

4. Then configure LoRaP2P parameters for both of them as follow for example:

```bash
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  :src="`${$frontmatter.static_root}/fyoulppnh8gdz3vawjv7.jpg`"
  width="100%"
  figure-number="2"
  caption="Configuring P2P in both RAK811 Nodes"
/>

5. OK! Try to send a message from LPWAN Breakout Module 2 (the right one) to LPWAN Breakout Module 1 (the left one):

```bash
at+send=lorap2p:1234567890
```

<rk-img
  :src="`${$frontmatter.static_root}/khjhkisjuxtjb5oxps94.png`"
  width="100%"
  figure-number="3"
  caption="Message sent and received status in the two Nodes"
/>

6. Successfully! Now, send more messages.

```bash
at+send=lorap2p:12345678901234567890
```

<rk-img
  :src="`${$frontmatter.static_root}/ckbymbjhypol3p0q1bjp.jpg`"
  width="100%"
  figure-number="4"
  caption="Succeeding Messages sent to the other Node"
/>

Yehey! You have successfully finished your RAK811 LPWAN Breakout Module Set Up. You are now ready to develop the coolest project that could potentially change the world.
