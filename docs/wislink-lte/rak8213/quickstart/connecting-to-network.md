---
static_root: /assets/images/quick-start-guide/rak8213/connecting-to-network
prev: /en-us/quick-start-guide/nb-iot/rak8213/prerequisites/access-the-gateway.html#access-the-gateway
---

# Connecting to a Network

As you now have direct access to the Raspberry and its console you can proceed to configuring it to connect to a network, rather act as an AP for other devices.

Instructions and examples are provided in the following sections.

## Connect through Wi-Fi (Raspberry Pi built-in)

Now that you are logged into the Raspberry, you can proceed to accessing the configuration tool that comes with the RAKwireless firmware. To do so, execute the following steps:

1. Enter the following command and select option **1 Configure WIFI.**

```sh
sudo qmi-config
```

<rk-img
  :src="`${$frontmatter.static_root}/main-config.png`"
  width="100%"
  caption="Main configuration menu"
/>

2. Select Option **2 Enable Client Mode/Disable AP Mode** and click **OK**. This will let you use the device as a Wi-Fi client rather than AP so you can connect to a network.

<rk-img
  :src="`${$frontmatter.static_root}/wifi-config.png`"
  width="100%"
  caption="Wi-Fi Configuration Options"
/>

As shown in figure 2, there are five (5) different Wi-Fi configuration options you can choose from. 

1. **Enable AP Mode/Disable Client Mode** - the gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

:::tip 📝 NOTE
To enable the Wi-Fi Client Mode, you have to disable first the AP Mode.
:::

3. A window will pop-up, and then **click OK**.

<rk-img
  :src="`${$frontmatter.static_root}/client-mode.png`"
  width="100%"
  caption="Client mode enabled"
/>


4. Once Wi-Fi AP Mode is enabled, you will automatically return to the main configuration menu (figure 1). Select option **1 Configure WIFI** then choose option **4 Add New SSID for Client.**

<rk-img
  :src="`${$frontmatter.static_root}/wifi-settings.png`"
  width="100%"
  caption="Wi-Fi Settings"
/>

5. **Enter the SSID** of the network you want to connect to then click OK.

<rk-img
  :src="`${$frontmatter.static_root}/wifi-ssid.png`"
  width="100%"
  caption="Wi-Fi SSID"
/>

6. Enter also the password then click **OK**. Just leave it empty if it has none.

<rk-img
  :src="`${$frontmatter.static_root}/wifi-passphrase.png`"
  width="100%"
  caption="Wi-Fi Passphrase"
/>

7. **Quit the setup**. Click the quit button at the lower right corner.

8. Then, **reboot your device**. Use the following command so the changes take effect.

```sh
sudo reboot
```

## Connect through Cellular (RAK8213 + Hologram SIM)

Before connecting to a cellular network, you should have a SIM card first. After that, you need to configure the BG96 to connect it to the provider. This requires connecting to the BG96 via the USB interface and sending over a few AT commands to set the right values for several parameters.

For this example, you are going to use a Hologram SIM and configure the BG96 with **minicom**. 

1. To start with, execute the following command:

```sh
sudo minicom -D /dev/ttyUSB3
```

This will start minicom, a Linux tool that allows serial communication. In this case, the minicom allows the serial communication with the USB interface that the BG96 is connected to.

2. Make sure to turn the local Echo so you can input the command with the **Ctrl+A**, followed by **pressing Z** to get to the **Command summary**.

3. **Press E** to turn local echo on/off.

<rk-img
  :src="`${$frontmatter.static_root}/minicom-command.jpg`"
  width="100%"
  caption="Minicom Command Summary"
/>

The following code block is a summary of the commands you need to execute in the same order. Each code is discussed and an example output is provided at the end of this section.

```
AT+CPIN? // Checks the SIM card status.
AT+QCFG="nwscanmode",1,1 // Chooses only GSM (disables LTE).
AT+COPS=? // Lists the available network providers.
AT+COPS=1,2,"28403",0 // Forces the connection to Vivacom BG.
AT+COPS? // Queries the connected web server information.
AT+QICSGP=1,1,"hologram","","",1 // Configures PDP context by adding the APN keys.
AT+QIACT=1 // Activates the APN network
AT+QIOPEN=1,0,"TCP","cloudsocket.hologram.io",9999,0,1
AT+QISEND=0,50 // Sends data, data length is 50.
{"k":"YOUR_DEVICE_KEY_HERE","d":"RAKwireless!","t":"_TOPIC1_"} // Sends
AT+QISEND=0,0 // Query data is sent successfully.
```

**AT+CPIN?**

Checks if the SIM card has a PIN code. In the case of the Hologram SIM, there shouldn’t be one, however, it is good practice to check. If there is no PIN, the output is as follows:

```
+CPIN: READY
```

**AT+QCFG="nwscanmode",1,1**

Gives you options on what technology to use when scanning for networks. You can use GSM, LTE, or both as the BG96 has them supported. For this guide, GSM is selected as the local providers have no NB-IoT support anyways, plus selecting only one option dramatically speeds up the next step. The response should be as follows:

```
OK
```

**AT+COPS=?**

Lists all the available network providers in your area. By default, it automatically picks one network provider, but, you are going to make a manual choice. The response the command returns for the region the tutorial produced is as follows:

```
+COPS: (1,"Vivacom BG","Vivacom","28403",0),(1,"Telenor BG","Telenor","28405",0) 
OK
```

As shown above, there are 2 operators available: **Vivacom BG** and **Telenor**. Now that this information is present, it can be used for the next command. 

**AT+COPS=1,2,"28403",0**

Selects the network with the numeric identificatory of 28403 (easier to enter than a name). The parameters are as follows:

- **1** - for Manual selection
- **2** - for numeric GSM area location identification number 
- **28403** - for the identification number of Vivacom BG 
- **0** - for GSM area access technology

If there are no errors, the output is as follows:

```
OK
```

**AT+COPS?**

Checks the network status. If the changes took effect, it should reflect the information you entered in the previous command.

```
+COPS: 1,2,"28403",0 
OK
```

**AT+QICSGP=1,1,"hologram","","",1**

Sets the AP (access Point). The parameters are as follows:

- **1** - context ID
- **2** - for IPv4
- **"hologram"** - access point name (particular for this example only)
- **""** - user name, empty as there isn’t one.
- **""** - password, empty as there isn’t one.
- **1** - authentication method PAP.

If there are no errors the output is as follows:

```
OK
```

**AT+QIACT=1**

Confirms and activates the APN network. Expected output is as follows:

```
OK
```

**AT+QIOPEN=1,0,"TCP","cloudsocket.hologram.io",9999,0,1**

Opens a TCP session to the hologram servers so you can send your data. The most relevant parameters are the three (3) listed below, which you need to change if you use a provider other than Hologram:

- **"TCP"** - type of protocol 
- **"cloudsocket.hologram.io"** host
- **"9999"** port

If there are no errors, the output should be as follows:

```
OK 
+QIOPEN: 0,0
```

**AT+QISEND=0,50**

In this command, the message is to be sent. In this example, the message has a length of 50 bytes. After the command is executed, you are left with a prompt to enter your message:

```
>
```

 You need to adhere to a [Hologram specific format](https://www.hologram.io/references/embedded-apis#send-a-message-to-the-hologram-cloud), in short it is as follows:

```
{"k":"YOUR_DEVICE_KEY_HERE","d":"RAKwireless!","t":"_TOPIC1_"}
```

- **" k"** - a string of 8 character is used as **Device Key** for authentication.
- **"d"** - a string of data that is the **Message Payload.**
- **"t"** - a string or an array of strings with message tags to be used as **Message Topics**.

You will need a **Device Key** that ties to your Hologram SIM (**this tutorial assumes you have already registered and activated your Hologram SIM**). To create one, execute the following steps:

1. Open the Hologram Dashboard.

2. Go to the **Webhooks** section.

3. Under **Data Engine**, press the **Show Device Key** button.

<rk-img
  :src="`${$frontmatter.static_root}/hologram-dashboard.png`"
  width="100%"
  caption="Hologram Dashboard Webhooks"
/>

4. In the **Router credentials** window, click the **Generate New Device Key** button to generate a key. Then, click the **Copy Key** button.

<rk-img
  :src="`${$frontmatter.static_root}/hologram-device-key.png`"
  width="75%"
  caption="Hologram Dashboard Device Key"
/>

Now that you have your key, you can replace it for the **k** parameter. You can leave the message and the topic as per the example, which leads to the code line to follow if you use the copied key in figure 8.

The end message for this example is as follows:

```
{"k":"$pU1Yg}.","d":"RAKwireless!","t":"_TOPIC1_"}
```

If the message is sent successfully, the response is as follows:

```
SEND OK
```

## Command Summary

Listed below are the summary of commands with their corresponding outputs:

```
AT+CPIN? 
+CPIN: READY 
OK 

AT+QCFG="nwscanmode",1,1
OK

AT+COPS=? 
+COPS: (1,"Vivacom BG","Vivacom","28403",0),(1,"Telenor BG","Telenor","28405",0) 
OK 

AT+COPS=1,2,"28403",0 
OK 

AT+COPS? 
+COPS: 1,2,"28403",0 
OK 

AT+QICSGP=1,1,"hologram","","",1 
OK 

AT+QIACT=1 
OK 

AT+QIOPEN=1,0,"TCP","cloudsocket.hologram.io",9999,0,1 
OK 
+QIOPEN: 0,0

AT+QISEND=0,50
> {"k":"YOUR_DEVICE_KEY_HERE","d":"RAKwireless!","t":"_TOPIC1_”}

AT+QISEND=0,0
```