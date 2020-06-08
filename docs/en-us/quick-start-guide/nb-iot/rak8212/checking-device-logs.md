---
static_root: /assets/images/quick-start-guide/rak8212/checking-device-logs
---

# Checking Device Logs

You can check the logs for debugging purposes on your RAK8212 iTracker Pro through **J-link RTT Viewer**

## Through J-link RTT Viewer

1. If you want to check the logs of RAK8212 iTracker Pro using this method, make sure you have connected the RAK8212 with your PC through JTAG like the following diagram below:

::: warning ⚠️ WARNING
You still have to connect the battery to the RAK8212 to power the board.
:::

2. Go to the Official Website of **Segger** where you can Download the [J-Flash software](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/). Open the program “**J-Link RTT Viewer V6.60f**” and choose "**USB**" for the type of connection to J-Link. After which, press "**OK**".

<rk-img
  :src="`${$frontmatter.static_root}/yqqi3jf24gullejjki9f.png`"
  width="100%"
  figure-number="2"
  caption="J-Link RTT Viewer"
/>

3. Choose the device parameters as the following picture shows and press "**OK**".

<rk-img
  :src="`${$frontmatter.static_root}/d7dgg4r2dc86tjawkqzw.png`"
  width="100%"
  figure-number="3"
  caption="J-Link RTT Viewer Connection Parameters"
/>

4. **Connect** to your RAK8212 iTracker Pro by navigating through `File>Connect` in the Main Menu. Alternatively, you could just press "**F2**" to do the same process.

<rk-img
  :src="`${$frontmatter.static_root}/iqb42ghnf0wancwytkfu.png`"
  width="100%"
  figure-number="4"
  caption="Connecting to J-Link"
/>

5. Once connection is obtained, you should see the same log as shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/na9nw4tqriblnxmutxcc.png`"
  width="100%"
  figure-number="5"
  caption="Log Checking through J-Link RTT Viewer"
/>
