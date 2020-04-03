---
static_root: /assets/images/quick-start-guide/rak8212/connecting-to-cellular-network
---

# Connecting to Cellular Network

This document is a sample guide on how to connect you RAK8212 iTracker Pro to a Cellular Network.

1.Insert a SIM Card into your RAK8212 iTracker Pro .

2.Make sure that your
RAK8212 iTracker Pro is connected to your mobile device over BLE according to the [Configuring your RAK8212](configuring-your-rak8212.html) document.

3.Now, send “**at+scan=cellular**” from Mobile device over BLE to RAK8212 iTracker Pro as shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/kzxbfaxur2zen98rb4c2.jpg`"
  width="45%"
  figure-number="1"
  caption="AT+command for scanning Cellular Network"
/>

4.Wait for about 20 seconds, and you should see some information similar to the image shown below in the RTT Viewer:

<rk-img
  :src="`${$frontmatter.static_root}/izdlr0fc2sywzr9zvlja.jpg`"
  width="100%"
  figure-number="2"
  caption="Cellular Network Scan in RTT Viewer"
/>

::: tip Note:
:pencil: There may be several
Cellular operator’s network signal detected upon scanning. In this document, the cellular networks available are CHINA MOBILE and CHN-UNICOM Cellular network.
:::
