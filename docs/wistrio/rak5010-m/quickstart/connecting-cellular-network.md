---
static_root: /assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network
prev: /wistrio/rak5010-m/quickstart/configuring-rak5010-m.html
next: /wistrio/rak5010-m/quickstart/upgrading-firmware.html
---

# Connecting to Cellular Network



In this section, a procedure to configure RAK5010-M to a Cellular network is presented. For demonstration, a SIM card issued by China Mobile is used. There are two methods to connect and send packets over the Cellular network: Manuel and Automatic mode.

To establish a connection to a Cellular network, the following element are necessary:

- Mobile operator’s MCC and MNC
- Mobile operator’s APN parameter and password (optional)
- Remote server IP and port number. 

## Manual Connection Mode

1.Scan the available cellular network providers. Send the following AT command.

```
at+scan=cellular
```


<rk-img
  :src="`${$frontmatter.static_root}/1.scanning-for-cellular-networks.jpg`"
  width="50%"
  caption="Scanning for Cellular Networks"
/>


- After waiting around 30 seconds, an output similar to the Figure 2 appears. In this case, two providers were detected: CHINA MOBILE and CHN-UNICOM. In your local area, you should different results.


<rk-img
  :src="`${$frontmatter.static_root}/2.scanned-cellular-network.jpg`"
  width="50%"
  caption="Scanned Cellular Network  shown in Serial Port"
/>


2.Connect to the SIM card’s operator.

Once the Cellular network operator is identified, send the following AT command to choose the Cellular operator compatible with the SIM card in use. As shown in the Figure 3, in this example, the SIM card belongs to CHINA MOBILE.

```
at+set_config=cellular:(AT+COPS=1,0,\"CHINA MOBILE\",0)
```

<rk-img
  :src="`${$frontmatter.static_root}/3.cellular-operator.jpg`"
  width="50%"
  caption="RAK Serial Port Tool, choose to the Cellular operator"
/>


3.Configure the APN

The next step is to configure the APN required by the Cellular operator. In the case, CHINA MOBILE’s APN is “CMCC”. The username and password are not required, therefore empty “ ” is applied instead. The final parameter “1” refers to the authentication mode (PAP). The following command is sent, as shown in the Figure 4.

```
at+set_config=cellular:(AT+QICSGP=1,1,\"CMCC\",\"\",\"\",1)
```
<rk-img
  :src="`${$frontmatter.static_root}/4.register-cellular-operator.jpg`"
  width="50%"
  caption="RAK Serial Port Tool, register to the Cellular operator"
/>



4.Enable the GPRS interface 

Once the APN is configured, the PDP context must be activated, in order to use the GPRS interface. The following AT command is sent, as shown in the Figure 5.


```
at+set_config=cellular:(AT+QIACT=1)
```

<rk-img
  :src="`${$frontmatter.static_root}/5.gprs-interface.jpg`"
  width="50%"
  caption="RAK Serial Port Tool, enable the GPRS interface."
/>



5.Set the IP address of the remote server

 Then, set the IP address of the server which will receive the packet sending from RAK5010-M. In the example, the remote server has the IP address of 118.21.121.60, and there is a process listening at the port 12111.

```
at+set_config=cellular:118.31.121.60:12111:CHINA MOBILE:CMMC:CMMNET:0
```

<rk-img
  :src="`${$frontmatter.static_root}/6.configure-remote-server-ip.jpg`"
  width="50%"
  caption="RAK Serial Port Tool, configure the remote server's IP."
/>

:::tip 📝 NOTE:
This IP address is just\nused for example, and it is my testing server actually. For your configuration, use your own server IP address.
:::



6.Sending data 

Finally, The RAK5010-M is configured properly, and it’s ready for sending data over the Cellular network. In this case, some random characters are sent: “123456”. The following AT command is sent, as shown in the Figure 7.

```
At+send=cellular:123456
```

<rk-img
  :src="`${$frontmatter.static_root}/7.send-data-to-remote-server.jpg`"
  width="50%"
  caption="RAK Serial Port Tool, sending data to remote server."
/>



7.Receiving data

A TCP/IP process must be listening on the IP and port previously defined. The IP address must be a public IP number. Please also make sure the port used is not blocked by a firewall. The Figure 8 shows that the list of characters sent in the previous step were properly received by the TCP/IP process.


<rk-img
  :src="`${$frontmatter.static_root}/8.receive-data.jpg`"
  width="50%"
  caption="Receive Data shown in the terminal"
/>


As you see in the **Figure 8**, the server has received the packet successfully, and the data sent is “**123456**” which is same with the one we just sent out.

### Automatic Connection Mode

The procedure of the automatic connection mode is very similar to the manual mode, except for the step 6, in which the transmission interval and the periodic data transmission parameters are set. 

1.Scan the available cellular network providers. Send the following AT command.

- Same
as the manual mode

2.Connect to the SIM card’s operator. 

- Same
as the manual mode

3.Configure
the APN

- Same
as the manual mode

4.Enable the GPRS interface

- Same
as the manual mode

5.Set the IP address of the remote server 

- Same
as the manual mode

6.Set data transmission interval

In order to activate the automatic data transmission, the following AT command must be sent. As shown in the Figure 9, an interval of 180000 milliseconds (3 minutes) was configured. The “1” before the interval indicates the periodic data sending loop is activated.

```
at+set_config=cellular:send_interval:1:180000
```


<rk-img
  :src="`${$frontmatter.static_root}/9.set-transmission-interval.jpg`"
  width="50%"
  caption="RAK Serial Port Tool, set the data transmission interval"
/>



As you see, this setting means that we open the sending loop and the interval time at 180 seconds. To know more details about the command, refer to the **[RAK5010 WisTrio](https://doc.rakwireless.com/rak5010-wistrio-nb-iot-tracker/device-at-commands)**.

7.Restart the module

To apply the new configuration, the module must be restarted. Send the following AT command as shown in the Figure 10.

```
at+set_config=device:restart
```

<rk-img
  :src="`${$frontmatter.static_root}/10.restart-the-module.jpg`"
  width="50%"
  caption="RAK Serial Port Tool, restart the module."
/>



8.Receiving the data. 

After restarting, RAK5010-M will connect automatically to the Cellular network with the parameters configured previously. The RAK5010-M will sleep during the interval and wake up, activate the accelerometer, and the GPS, format the packet and send the data to the destination. Process logs will be displayed in the console as shown in the Figure 11.


<rk-img
  :src="`${$frontmatter.static_root}/11.console-logs.jpg`"
  width="50%"
  caption="RAK Serial Port Tool, console logs of the periodic data transmission."
/>


On the server side. A packet should be received every 180 seconds. The data format is shown in the Figure 12.



<rk-img
  :src="`${$frontmatter.static_root}/12.received-data.jpg`"
  width="50%"
  caption="Data received on the server side."
/>



