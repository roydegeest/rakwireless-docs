---
static_root: /assets/images/quick-start-guide/rak811/lora-p2p-mode
---

# LoRa® P2P Mode

This document show how to communicate **two (2) RAK811 LPWAN Evaluation Boards** via LoRa® P2P Mode. We will be using EU868 as our frequency, although it is applicable to other standard bands.

1. First, find two RAK811 LPWAN Evaluation Board which can work on EU868 frequency and make sure their firmware version isn’t less than V3.0.0.1.

2. Next, connect these two RAK811 LPWAN Evaluation Board with PC through UART, and open two serial port tool on PC.

3. Now, configure them to both work in LoRa P2P mode as follow:

<rk-img
  :src="`${$frontmatter.static_root}/wiyvchxtiv4tgr3izuff.png`"
  width="100%"
  figure-number="1"
  caption="P2P Initialization"
/>

4. Then configure LoRa® P2P parameters for both of them as follow for example:

<rk-img
  :src="`${$frontmatter.static_root}/vctdlxrvu3lx48qfgxi9.jpg`"
  width="100%"
  figure-number="2"
  caption="Configuring P2P in both RAK811 Nodes"
/>

5. OK! Try to send a message from WisNode 1 to WisNode 2:

<rk-img
  :src="`${$frontmatter.static_root}/og3igkq8zhfftiaunbt6.jpg`"
  width="100%"
  figure-number="3"
  caption="Message sent and received status in the two Nodes"
/>

6. Successfully! Now, send more messages.

<rk-img
  :src="`${$frontmatter.static_root}/jsqpvwg7m8cwl7zr4zf5.jpg`"
  width="100%"
  figure-number="4"
  caption="Succeeding Messages sent to the other Node"
/>

Yehey! You have successfully finished your RAK811 LPWAN Evaluation Board Set Up. You are now ready to develop the coolest project that could potentially change the world.
