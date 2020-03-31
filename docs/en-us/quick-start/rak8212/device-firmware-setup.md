---
static_root: /assets/images/quick-start-guide/rak8212/device-firmware-setup
---

# Device Firmware Setup

An easy and quick way to have a fully functional **RAK8212 iTracker Pro** is by using a Pre-compiled Firmware Image provided. In this document are the step by step instructions on how to install the Image into your device.

## Burn the latest Firmware

1.If you want to get a pre-compiled firmware instead of compiling the source code by
yourself, you can find the latest firmware on RAK website **[here](https://downloads.rakwireless.com/en/Cellular/RAK8212/Firmware/)**.

2.Download and install **J-Link tool** on your Windows PC. You can download it **[here](https://downloads.rakwireless.com/en/Cellular/RAK8212/Tool/)**.

3.Connect the RAK8212 iTracker Pro with your PC through through your JTAG Emulator Kit as follows:

<rk-img
  :src="`${$frontmatter.static_root}/e85ljqeubbgacmtfqm6e.jpg`"
  width="100%"
  figure-number="1"
  caption="RAK8212 to Windows PC connection thru JTag Emulator Kit"
/>

4.Now, **Open** the program “**J-Flash V6.41a**” which you just installed and click “**Start J-Flash**”

<rk-img
  :src="`${$frontmatter.static_root}/pfxc6gdoyv8djlndcfgt.jpg`"
  width="100%"
  figure-number="2"
  caption="J-Flash Start Connection"
/>

5.Click the **button** marked with the **red box** in the image below labeled **Figure 3**, then you can see the
following page as shown in **Figure 4** and in the table provided.

<rk-img
  :src="`${$frontmatter.static_root}/ewkidffcazavmmscfdta.jpg`"
  width="100%"
  figure-number="3"
  caption="J-Flash Target Device Choosing"
/>

<rk-img
  :src="`${$frontmatter.static_root}/ydqhs7betd9x9vty0bwf.jpg`"
  width="100%"
  figure-number="4"
  caption="J-Flash Target Device Parameter"
/>

| **Parameter** | **Value**            |
| ------------- | -------------------- |
| Manufacturer  | Nordic Semiconductor |
| Device        | nRF52832_xxAA        |
| Core          | Cortex-M4            |
| Flash Size    | 512 KB + 4 KB        |
| RAM Size      | 64 KB                |

6.Click **OK** and a window pops-up as shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/rrdddufy1ykhtnoz85fm.jpg`"
  width="100%"
  figure-number="5"
  caption="J-Flash Target Device Parameter Selection Window"
/>

7.Now, connect to the RAK8212 iTracker Pro by navigating through **Target>Connect** in the **Main Menu.**

<rk-img
  :src="`${$frontmatter.static_root}/dh4mpqr9z45vcqlpb9xh.jpg`"
  width="100%"
  figure-number="6"
  caption="Connecting to the RAK8212 iTracker Pro"
/>

::: tip Note:
If connection is unsuccessful, please recheck the connections between the RAK8212 iTracker Pro, JTAG, and the connecting wires.
:::

8.Open the download firmware of the RAK8212 iTracker Pro by dragging it into the window as shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/jrtcho26jvqd43gceelw.jpg`"
  width="100%"
  figure-number="7"
  caption="RAK8212 Firmware Opening"
/>

9.Before going into the firmware process, make sure to have the old firmware erased in the chip by navigating through **Target>Manual Programming>Erase Chip** in the **Main Menu** or by doing the process shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/nqtp5abjixx7ejfvlu21.jpg`"
  width="100%"
  figure-number="8"
  caption="RAK8212 Old Firmware Data Erasing"
/>

10.After the successful erasing of the old Firmware, you can start to burn the new firmware into RAK8212 iTracker Pro by navigating through **Target>Production Programming** in the **Main Menu** or by Pressing "**F7**".

11.Wait for a couple of seconds and a notification pop-ups showing a successful burning of the updated firmware as shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/eqagc4qeasa4xvpbypx9.jpg`"
  width="100%"
  figure-number="9"
  caption="RAK8212 Firmware Burning Successful"
/>

## Firmware Logs Checking

1.**Open** the program “**J-Link
RTT Viewer V6.41a**” which you just installed and click **OK**.

2.Choose the parameters as shown in the image and in the table provided below and click **OK**.

<rk-img
  :src="`${$frontmatter.static_root}/dquesjm84olj0q61vidc.jpg`"
  width="100%"
  figure-number="10"
  caption="Firmware Log Checking Parameters"
/>

| **Parameter** | **Value**            |
| ------------- | -------------------- |
| Manufacturer  | Nordic Semiconductor |
| Device        | nRF52832_xxAA        |
| Core          | Cortex-M4            |
| Flash Size    | 516 KB               |
| RAM Size      | 64 KB                |

3.Connect by navigating through **File>Connect** in the **Main Menu** or by pressing "**F2**".

4.A sample log is shown in the image below:

<rk-img
  :src="`${$frontmatter.static_root}/n72yss9n4olrt2sqb1tv.jpg`"
  width="100%"
  figure-number="11"
  caption="Firmware Log Sample"
/>

::: tip Note:
If no logs are shown upon connecting, try resetting the RAK8212 iTracker Pro and redo the Firmware Logs Checking Section
:::
