---
static_root: /assets/images/wisduo/rak4200-evaluation-board/quickstart/6.lorap2p/
---
# LoRa® P2P Mode

In this section, we will discuss on how we can use P2P on our RAK4200. We will be using EU868 as our frequency, although it is applicable also to other standard bands.

1. First, find two RAK4200 LPWAN Evaluation Board which can work on EU868 frequency and make sure their firmware version isn’t less than V3.0.0.1.
2. Next, connect these two RAK4200 LPWAN Evaluation Board with PC through UART, and open two serial port tool on PC.
3. Now, configure them to both work in LoRaP2P mode as follow:

```
at+set_config=lora:work_mode:1
```

<rk-img
  :src="`${$frontmatter.static_root}/nerylgv02xmr8hstfksm.jpg`"
  width="60%"
  figure-number="1"
  caption="P2P Initialization"
/>

4. Then configure LoRaP2P parameters for both of them as follow for example:
```
at+set_config=lorap2p:XXX:Y:Z:A:B:C
```

Please refer to the [Configuring Using AT Commands](configuring-using-at-commands) section to learn about the definition of the parameters used.

<rk-img
  :src="`${$frontmatter.static_root}/cgjnyy9zykhbdemr2rvs.jpg`"
  width="100%"
  figure-number="2"
  caption="Configuring P2P in both RAK4200 Nodes"
/>

5. OK! Try to send a message from the first RAK4200 LPWAN Evaluation Board  to the second RAK4200 LPWAN Evaluation board.
<rk-img
  :src="`${$frontmatter.static_root}/csib8zhcwfkevehq7fby.jpg`"
  width="100%"
  figure-number="3"
  caption="Message sent and received status in the two Nodes"
/>

6. Success! Now, send more messages.
<rk-img
  :src="`${$frontmatter.static_root}/gbvh6jy5olovvt0fjyib.jpg`"
  width="100%"
  figure-number="4"
  caption="Succeeding Messages sent to the other Node"
/>

Congratulations! :tada: You have successfully finished your RAK4200 LPWAN Evaluation Board Set Up. You are now ready to develop the coolest project that could potentially change the world.




