---
static_root: /assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network
prev: /wistrio/rak5010/quickstart/configuring-rak5010.html
next: /wistrio/rak5010/quickstart/bluetooth-connection-modes.html
---
# Connecting Cellular Network and Sending Packet over Cellular

In this section, you will learn more on how to connect Cellular Network of your device. 

- To start with,  insert a SIM card into your RAK5010. For this document,  i’ll use a China Mobile SIM card as an example.

As describe in the previous section, we learned that there are three ways to configure our RAK5010: through UART, BLE and microUSB. For this section,  I’ll use UART to configure RAK5010 as an example, but surely you can use BLE or microUSB to configure it too.

OK! Let’s start configuring our RAK5010 through UART.

There are two ways to
connect Cellular network and send packet over Cellular: Manual and Automatic.

## 1 . Connecting Cellular Network and Sending Packet over Cellular Manually

- To begin with, send the AT command `at+scan=cellular` to scan Cellular networks:

<rk-img
  :src="`${$frontmatter.static_root}/ldd1gtipgjw2rdimcm06.jpg`"
  width="50%"
  figure-number="1"
  caption="Scanning for Cellular Networks"
/>  

- Wait for about 30 seconds, then you will see the following output in the serial port tool:


<rk-img
  :src="`${$frontmatter.static_root}/o1yixmjvgqaheaczyyvb.jpg`"
  width="50%"
  figure-number="2"
  caption="Scanned Cellular Network shown in Serial Port"
/> 

- As you see, RAK5010 has scanned around Cellular network and show them in the serial port tool.

Then, use the AT command `at+set_config=cellular: (AT+COPS=1,0,"CHINA MOBILE",0)` to configure the operator information:


<rk-img
  :src="`${$frontmatter.static_root}/s397ccuztyjg01v9oe57.jpg`"
  width="50%"
  figure-number="3"
  caption="Configuring the Operator"
/> 


Now, continue to configure by using the AT command `at+set_config=cellular: (AT+QICSGP=1,1,"CMCC","","",1)` and `at+set_config=cellular:(AT+QIACT=1)` :

<rk-img
  :src="`${$frontmatter.static_root}/viol2m3ggyntrqdrju3l.jpg`"
  width="50%"
  figure-number="4"
  caption="Configuring the Cellular Network"
/> 

<rk-img
  :src="`${$frontmatter.static_root}/kbfkkzhigynpqvvserph.jpg`"
  width="50%"
  figure-number="5"
  caption="Configuring the Cellular Network"
/> 

- Then, set the IP address of the server which will receive the packet sending from RAK5010:

<rk-img
  :src="`${$frontmatter.static_root}/wfgibirfba6br8wfddeo.jpg`"
  width="50%"
  figure-number="6"
  caption="Configuring the IP Address of the Server"
/> 

:::tip 📝 NOTE:
 This IP address is just used for example, and it is my testing server actually. For your configuration, use your own server IP address.
:::

- OK, we’ve configured RAK5010 correctly.

Next, let’s try sending a packet manually over Cellular.

- You can use the AT command `at+send=cellular:XXX` to send data over Cellular:

<rk-img
  :src="`${$frontmatter.static_root}/qliw07b9ag9om2ytbi6k.jpg`"
  width="50%"
  figure-number="7"
  caption="Sending Data over Cellular"
/> 

- As you can see, the data we send is “**123456**”. 

Now, let’s check it on our receiving server:

<rk-img
  :src="`${$frontmatter.static_root}/muvnk5vma57gwns6apo9.jpg`"
  width="100%"
  figure-number="8"
  caption="Received Data shown in the terminal"
/>

Great! As you see in the **Figure 8**, the server has received the packet successfully, and the data sent is “**123456**” which is same with the one we just sent out.

## 2 . Connect Cellular Network and Send Packet Automatically

We have already discussed the manual process, now, we'll learn about the **automatic** way of connecting and sending data with Cellular Network. First, configure the parameters for the Cellular operator information and the receiving server information as follows (I use China Mobile SIM card and network for example):

<rk-img
  :src="`${$frontmatter.static_root}/nmsor2nxqikesbzduzdj.jpg`"
  width="50%"
  figure-number="9"
  caption="Configuring the Cellular Network Parameters"
/>

- Then, set the interval for sending loop as follow:

<rk-img
  :src="`${$frontmatter.static_root}/usvaf8prsuthawdgwv2t.jpg`"
  width="50%"
  figure-number="10"
  caption="Setting the Loop Intervals"
/>

As you see, this setting means that we open the sending loop and the interval time at 180 seconds. To know more details about the command, refer [here](at-commands).

- Now, restart RAK5010 by sending the AT command `at+set_config=device:restart`:

<rk-img
  :src="`${$frontmatter.static_root}/b5oewg5p13m9pvimgcr0.jpg`"
  width="50%"
  figure-number="11"
  caption="Restarting your RAK5010"
/>

After restarting, RAK5010 will connect the Cellular network which you just set and send packet of sensor’s data automatically in a loop. Every time it sends a packet out, RAK5010 will go to sleep for 180 seconds which you just set, then RAK5010 will wake up and searching GPS, building a new packet, and sending it out.

- You will see a continuously loop as the following picture shows:

<rk-img
  :src="`${$frontmatter.static_root}/ijh8cftfzy4x9ybyalvr.jpg`"
  width="50%"
  figure-number="12"
  caption="Continuous Loop seen in The Serial Tool"
/>

- RAK5010 will send sensor’s data automatically in a loop.

Let’s check the data in the receiving server:

<rk-img
  :src="`${$frontmatter.static_root}/urwjby1runkjaijb18re.jpg`"
  width="100%"
  figure-number="12"
  caption="Data Receive in the Server"
/>

Great! As we see, the server has received the packet which RAK5010 sends out successfully, and they are all sensor’s data in the packet.

