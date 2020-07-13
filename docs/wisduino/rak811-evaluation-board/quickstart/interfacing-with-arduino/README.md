---
static_root: /assets/images/quick-start-guide/rak811/interfacing-with-arduino
prev: /en-us/quick-start-guide/nodes/rak811-evaluation/rui-online-compiler
next: hardware-interfacing
---

# Interfacing with Arduino Boards

In this document, a set of instruction is written in detail on how to interface your RAK811 LPWAN Evaluation Board with [Arduino](https://www.arduino.cc/), which is an open-source electronics platform based on easy-to-use hardware and software.

## Requirements:

- **RAK811 LPWAN** **Evaluation Board** (v1.1 or v1.2)
- Gateway in range for testing
- Arduino Mega 2560
- External USB-UART TTL Converter
- Jumper wires

## Arduino Library Preparation

Make sure to follow all the steps in this section thoroughly or you will not be able to move on to the next sections. Discussed in here is the installation of the Arduino-RAK811 Library as well as the discussion of the included sample Arduino codes within it.

### GitHub Repository Downloading

Uploaded in the RAKwireless official Github repository is the Arduino Library needed by this document. Kindly download the library through this [link](https://github.com/RAKWireless/WisNode-Arduino-Library).

<rk-img
  :src="`${$frontmatter.static_root}/vexsae4pqn4x4q4xjb3j.png`"
  width="100%"
  figure-number="1"
  caption="RAK811 LPWAN Evaluation Board Arduino Library Repository"
/>

### Adding the Arduino RAK811 Library to Arduino IDE

1. Once the Arduino RAK811 Library zip is done downloading, unzip it and you should see these files in the extracted folder:

<rk-img
  :src="`${$frontmatter.static_root}/cd0qcew7qxps6intp4mw.png`"
  width="100%"
  figure-number="2"
  caption="Items in the Extracted Arduino RAK811 Library Folder"
/>

2. Locate the Arduino Libraries folder in which the downloaded Arduino-RAK811 Library folder shall be pasted by navigating through `Documents>Arduino>libraries` same as in the image shown below:

<rk-img
  :src="`${$frontmatter.static_root}/qbursndkl9i49xm851b9.png`"
  width="100%"
  figure-number="3"
  caption="Arduino Libraries Folder Path"
/>

3. **Copy and Paste** the Arduino-RAK811 Library folder into the Arduino Libraries folder navigated in the previous step.

<rk-img
  :src="`${$frontmatter.static_root}/u9ru5d9zwky5pa46sk5n.png`"
  width="100%"
  figure-number="4"
  caption="Arduino-RAK811-Library merged to the Arduino Local Libraries folder"
/>

4. To verify if the Arduino-RAK811 Library has been merged successfuly with the local Arduino libraries folder, open the Arduino IDE and navigating through `File>Examples>Arduino-RAK811-Library.`Shown in the examples that a **JoinNetworkOTAA** sample code is provided proving that the library was successfully merged.

<rk-img
  :src="`${$frontmatter.static_root}/egvenp8w2m3eykmu5xdm.png`"
  width="100%"
  figure-number="5"
  caption="Examples of codes in the Arduino-RAK811-Library"
/>

### Hex File Updating

On the Arduino-RAK811-Library contains the available functions, the user can refer to the **RAK811.h** file, which has a detailed note on the use of each function.

1. Using your preferred text editor, open the **RAK811.h hex file** included in the library. Within the codes are the different functionalities and settings used for Arduino boards. For this example, we will be using Sublime Text Editor.

<rk-img
  :src="`${$frontmatter.static_root}/rnsjyqg91hbkx4hcuzmc.png`"
  width="100%"
  figure-number="6"
  caption="Contents of RAK811.h Hex File"
/>

2. Before compiling any Arduino code for RAK811 LPWAN Evaluation Board, user should also consider the **Serial RX and TX buffer size** by manually navigating through `C:\Program Files (x86)\Arduino\hardware\arduino\avr\cores\arduino` and open the **HardwareSerial.h** hex file.

<rk-img
  :src="`${$frontmatter.static_root}/j3ccynesxgzp7oekcpsv.png`"
  width="100%"
  figure-number="7"
  caption="Editing the HardwareSerial.h Hex file for RX and TX Buffer Size"
/>

::: tip 📝 NOTE
Depending on the RAM size of the Arduino Board you are using, the RX and TX buffer size are recommended to be bigger.
:::

<rk-img
  :src="`${$frontmatter.static_root}/buvmu1yh5joquqpp3otc.png`"
  width="100%"
  figure-number="8"
  caption="Recommended RX and TX Buffer Size"
/>
