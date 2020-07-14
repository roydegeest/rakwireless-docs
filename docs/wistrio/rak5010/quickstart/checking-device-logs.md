---
static_root: /assets/images/quick-start-guide/rak5010/3.checking-device-logs
prev: /wistrio/rak5010/quickstart/
next: /wistrio/rak5010/quickstart/at-commands.html
---
# Checking Device Logs

There are 3 ways that you can check the logs for debugging purposes on your RAK5010 WisTrio NB-IoT Tracker:

1. **Through J-Link RTT Viewer**
2. **Through UART**
3. **Through Micro-USB**

## Through J-Link RTT Viewer

1. If you want to check the logs of RAK5010 WisTrio NB-IoT Tracker using this method, make sure you have connected the RAK5010 with your PC through JTAG like the following diagram below


<rk-img
  :src="`${$frontmatter.static_root}/rrktg8blr065uoa0irl1.jpg`"
  width="100%"
  figure-number="1"
  caption="RAK5010 and PC Connection through JTAG"
/>  

:::warning ⚠️WARNING
 You still have to connect the Micro USB Cable to the RAK5010 to power the board.
:::

2. Go to the Official Website of **Segger** where you can Download the [J-Flash software](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/). Open the program “**J-Link RTT Viewer V6.60f**” and choose "**USB**" for the type of connection to J-Link. After which, press "**OK**".

<rk-img
  :src="`${$frontmatter.static_root}/xgdllxo7gb3ks0y3tbch.png`"
  width="100%"
  figure-number="2"
  caption="J-Link RTT Viewer"
/>  

3. Choose the device parameters as the following picture shows or in the table provided and press "OK".

<rk-img
  :src="`${$frontmatter.static_root}/wmoh5e7i8n6gxxr9h4o9.png`"
  width="100%"
  figure-number="3"
  caption="J-Link Target Device Settings"
/>  

| Parameter | Data | 
| ---- | ---- | 
| Manufacturer | Nordic Semi | 
| Device | nRF52840\_xxAA | 
| Core | Cortex-M4 | 
| NumCores | 1 | 
| Flash Size | 1028 KB | 
| RAM Size | 256 KB | 


4. Connect to your RAK5010 by navigating through File>Connect in the Main Menu. Alternatively, you could just press "**F2**" to do the same process.

<rk-img
  :src="`${$frontmatter.static_root}/jrqm79eoaojwuynzdu1t.jpg`"
  width="100%"
  figure-number="4"
  caption="Connecting in J-Link RTT Viewer"
/>  

5. Once connection is obtained, you should see the same log as shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/uku52cmdo7ccdzwbwubz.png`"
  width="100%"
  figure-number="5"
  caption="J-Link RTT Viewer showing RAK5010 Logs"
/>  

:::tip 📝 NOTE:
 If there is no log after connecting successfully, you can try to reset RAK5010 or check the connection of JTAG.
:::


## Through UART

1. If you want to check the log of RAK5010 through UART, you should make sure that RAK5010 has been connected with your PC through UART correctly as the following picture shows:

<rk-img
  :src="`${$frontmatter.static_root}/vnimzkp0kinl9ri7y3zm.jpg`"
  width="100%"
  figure-number="6"
  caption="RAK5010 and USB-UART Connection"
/>  


- Then open a serial port tool in your PC. If you haven’t a serial port tool, I recommend using RAK Serial Port Tool which you can download from **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**
- After pushing the RST button on RAK5010, you can see the following contents in the serial port tool:

<rk-img
  :src="`${$frontmatter.static_root}/qsst0fqcss6tlwofo9ex.jpg`"
  width="50%"
  figure-number="7"
  caption="RAK Serial Port Tool"
/>  

- OK, you can see the log through UART now.

## Through Micro USB

- To start with, connect RAK5010 with your PC through microUSB/USB as shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/cjkxyja4hkqovtiddklj.jpg`"
  width="100%"
  figure-number="8"
  caption="MicroUSB Interface for RAK5010"
/>  

- Open the serial port tool in your PC.

:::tip 📝 NOTE:
 For this method, you need a serial port tool which can support DTR function, like Termite. You can download Termite [here](https:\/\/www.compuphase.com\/software_termite.htm).
:::

- Alright, after opening the serial tool, configure its setting by following the picture below:

<rk-img
  :src="`${$frontmatter.static_root}/gpubckbaii9vocy1h32u.png`"
  width="100%"
  figure-number="9"
  caption="Termite Configuration Enabling DTR"
/>  

- Now, the Termite app will connect with RAK5010 automatically. Then you can send AT commands and check the log in Termite:

<rk-img
  :src="`${$frontmatter.static_root}/hqfcunna1swkknili72n.png`"
  width="100%"
  figure-number="10"
  caption="Checked Log in Termite"
/>  

