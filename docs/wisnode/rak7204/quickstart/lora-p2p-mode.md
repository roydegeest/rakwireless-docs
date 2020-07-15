---
static_root: /assets/images/wisnode/rak7204/quickstart/8.lorap2p-mode/
prev: /wisnode/rak7204/quickstart/decoding-ttn.html
next: /wisnode/rak7204/quickstart/at-commands.html
---
# Lora® P2P Mode

The setup process for the RAK7204 LPWAN Environmental Sensor in LoRaP2P Mode is just the same with the process with the RAK811 Wisnode. These are the steps that you need to follow for this mode:

1. First, find two RAK7204 LPWAN Environmental Sensor which can work on EU868 frequency and make sure their firmware version isn’t less than V3.0.0.1.
2. Next, connect these two RAK7204 LPWAN Environmental Sensor with PC through USB cable, and open two serial port tool on PC.
3. Now, configure them to both work in LoRaP2P mode as follow:

```
at+set_config=lora:work_mode:1
```

<rk-img
  :src="`${$frontmatter.static_root}/esrws29ubqsdrtzhxoyl.jpg`"
  width="50%"
  figure-number="1"
  caption="LoRaP2P Mode"
/>

Then configure LoRaP2P parameters for both of them as follow for example:
```
at+set_config=lorp2p:869525000:7:0:1:5:5
```
<rk-img
  :src="`${$frontmatter.static_root}/be2eudcfjshdfpp70dh3.jpg`"
  width="100%"
  figure-number="2"
  caption="LoRaP2P Configuration"
/>

OK! Try to send a message from RAK7204 - 2 (the right one) to RAK7204 - 1 (the left one):

```
at+send=lorap2p:1234567890
```
<rk-img
  :src="`${$frontmatter.static_root}/hxqc6l5zeadhs5yd5ucz.jpg`"
  width="100%"
  figure-number="3"
  caption="Test Message Sent"
/>

**Success!** You can send more messages:

<rk-img
  :src="`${$frontmatter.static_root}/hxqc6l5zeadhs5yd5ucz.jpg`"
  width="100%"
  figure-number="3"
  caption="Test Message Sent"
/>

Similarly, you can send message from RAK7204 1 to RAK7204 2 surely. Just try it freely. Great! We’ve done it, and that’s all about how to use
LoRaP2P on RAK811 WisNode.

You can use RAK7204 LoRaP2P mode according to it.

### ADR and DR

You can open the ADR feature of RAK7204 by using the following AT command:

```
at+set_config=lora:adr:1
```

or you can close the ADR feature of RAK7204 by using this AT command: 

```
at+set_config=lora:adr:0
```


There is also an AT command which is used to set the DataRate(DR):

| AT Command | Description | 
| ---- | ---- | 
| `at+set_config=lora:dr:X` | Set the DR of LoRa® Node. <br>**• X** : the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN® 1.0.2 specification. | 


For example, if you want to set the current DR to DR0, you just do as follow: 
```
at+set_config=lora:dr:0
```