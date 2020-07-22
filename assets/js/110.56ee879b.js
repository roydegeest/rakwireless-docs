(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{479:function(e,t,a){"use strict";a.r(t);var o=a(29),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lora®-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lora®-network"}},[e._v("#")]),e._v(" LoRa® Network")]),e._v(" "),a("p",[e._v("All the LoRa® Settings reside in this section. Its subsections change depending on what “"),a("strong",[e._v("Mode")]),e._v("” you choose to work-in in the “"),a("strong",[e._v("Network Settings")]),e._v("” subsection. As the three modes ("),a("strong",[e._v("Network Server")]),e._v(", "),a("strong",[e._v("Basic Station")]),e._v(", and "),a("strong",[e._v("Packet Forwarder")]),e._v(") are very different, we will go through each one in detail.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v('The one thing that is the same for all of the modes is the "'),a("strong",[e._v("LoRaWAN Network Settings")]),e._v('" area at the top of the "'),a("strong",[e._v("Network Settings")]),e._v('" sub-section. It is in this area where the Gateway EUI and the Mode drop-down menu reside.')])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/15.lora-network-settings.jpg",width:"100%","figure-number":"1",caption:"LoRaWAN Network Settings"}}),e._v(" "),a("p",[a("strong",[e._v("As there are additional menus that appear when one uses the “Network Server” Mode, it is the one that will be discussed in the greatest detail. The other two Modes only have the “Network Settings” sub-menu and relatively less configuration options.")])]),e._v(" "),a("h2",{attrs:{id:"_1-network-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-network-settings"}},[e._v("#")]),e._v(" 1. Network Settings")]),e._v(" "),a("p",[e._v("This page changes depending on which of the 3 options for the Mode you have chosen.")]),e._v(" "),a("h3",{attrs:{id:"network-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-server"}},[e._v("#")]),e._v(" Network Server")]),e._v(" "),a("p",[e._v("As this Mode provides a fully functioning LoRa® Server instance, there is a complete set of features to configure.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Region")]),e._v(": It is only displayed, can’t be changed as this is done in the “Channel Plan” menu.")]),e._v(" "),a("li",[a("strong",[e._v("Enable ADR")]),e._v(": Adaptive Data Rate, turned on/off.")]),e._v(" "),a("li",[a("strong",[e._v("Minimum/Maximum Allowed data-rate")]),e._v(": Dr0 to DR7 can be selected in order to limit the ADR possible values range")]),e._v(" "),a("li",[a("strong",[e._v("ADR Margin")]),e._v(" (dB): A value to keep in dB to make sure that the data rate is not overestimated resulting in a poor performance (error rate and range). Default value is 10.")]),e._v(" "),a("li",[a("strong",[e._v("Network ID")]),e._v(": A decimal number to distinguish between networks if you are deploying multiple ones")]),e._v(" "),a("li",[a("strong",[e._v("Rx 1 Delay")]),e._v(" (sec): The delay of the first receive window in seconds.")]),e._v(" "),a("li",[a("strong",[e._v("Rx 1 DataRate Offset")]),e._v(": It determines the data rate of the downlink frames originating from the Gateway for the Rx1 window. By default, it is 0 – identical to the uplink.")]),e._v(" "),a("li",[a("strong",[e._v("Rx 2 Frequency")]),e._v(" (Hz): The frequency of the second receive window in Hz.")]),e._v(" "),a("li",[a("strong",[e._v("Rx 2 Datarate")]),e._v(": The Data Rate of the frames to be sent in the second receive window.")]),e._v(" "),a("li",[a("strong",[e._v("Downlink Tx Power")]),e._v(" (dBm): This is useful in case you want to opt for a larger antenna with more gain, however you want to stay within regulations. Values from -6 to 20 are permissible.")]),e._v(" "),a("li",[a("strong",[e._v("Disable Frame-counter Validate")]),e._v(": This will turn on/off Frame counter validation.")]),e._v(" "),a("li",[a("strong",[e._v("Device-status request interval")]),e._v(" (sec): It shows how often should the end devices be polled for their status Log Level - choose one of for, useful for troubleshooting.")]),e._v(" "),a("li",[a("strong",[e._v("Statistic Period")]),e._v(": It shows how often the statistics will be gathered. Possible values are: 1 min, 10 min, 1h, 1 day.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/16.network-settings.jpg",width:"100%","figure-number":"2",caption:"Network Settings - Network Server"}}),e._v(" "),a("h3",{attrs:{id:"basic-station"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-station"}},[e._v("#")]),e._v(" Basic Station")]),e._v(" "),a("p",[e._v("This Mode allows one to utilize the Basic Station, which is Semtech’s latest packet-forwarder iteration. For more information on how Basic Station operates please refer to the "),a("a",{attrs:{href:"https://doc.sm.tc/station/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Basic Station official website"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("There are 3 sub-sections listed below. Each of the above needs an URI and Port, together with the corresponding token/key/certificate of TLS authentication is used.")]),e._v(" "),a("ul",[a("li",[e._v("Cups Boot Server")]),e._v(" "),a("li",[e._v("XUPS Server")]),e._v(" "),a("li",[e._v("LNS Server")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/17.basic-station.jpg",width:"100%","figure-number":"3",caption:"Network Settings - Basic Station"}}),e._v(" "),a("h3",{attrs:{id:"packet-forwarder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packet-forwarder"}},[e._v("#")]),e._v(" Packet Forwarder")]),e._v(" "),a("p",[e._v("This Mode utilizes the "),a("strong",[e._v("Semtech Legacy Packet-forwarder")]),e._v(". An important thing to mention is the fact that this mode has two Protocol options that change the core functionality. One can choose via the Protocol drop-down menu to use the Gateway either as a pure "),a("strong",[e._v("Semtech Packet forwarder")]),e._v(" or as an "),a("strong",[e._v("MQTT bridge")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("1. General Setup - Semtech UDP GWMP Protocol")])]),e._v(" "),a("p",[e._v("This is something that every Gateway supports, that has been there from the very beginning of the LPWAN days. Just a general means of forwarding your LoRa® frame data over UDP to a LoRa® Server instance. The most popular/well-known setup of this is to use it together with TTN (The Things Network), which was more or less what made LoRa® popular back in 2016. This can naturally be pointed toward any LoRa® Server, not necessarily TTN.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/18.semtech-protocol.jpg",width:"100%","figure-number":"4",caption:"Network Settings – Semtech UDP GWMP Protocol"}}),e._v(" "),a("p",[e._v("Take note of the following parameters. Refere to figure 4 above.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Gateway EUI")]),e._v(": The value in this field is necessary for registering your gateway with any LoRa® Network Server.")]),e._v(" "),a("li",[a("strong",[e._v("Protocol")]),e._v(": As mentioned, this is either a Packet forwarder or an MQTT bridge. (The former is chosen for the purpose of going through the settings.)")]),e._v(" "),a("li",[a("strong",[e._v("Server Address")]),e._v(": The URL of the LoRa® Server. (In the example: the EU TTN address)")]),e._v(" "),a("li",[a("strong",[e._v("Server Port Up/Down")]),e._v(": The ports of the LoRa® Server that are going to be used for inbound and outbound traffic.")]),e._v(" "),a("li",[a("strong",[e._v("Push Timeout")]),e._v(" (ms): Time delay for the server response after sending uplink data.")]),e._v(" "),a("li",[a("strong",[e._v("Statistic Interval")]),e._v(" (s): How often statistics are pushed to the server.")]),e._v(" "),a("li",[a("strong",[e._v("Keepalive Interval")]),e._v(" (s): This exists to make sure that periodically data is pushed via the Gateway to make sure the server is aware that the Gateway is online. (For example, the MQTT bridge will unsubscribe from the topics after certain period of inactivity.)")]),e._v(" "),a("li",[a("strong",[e._v("Automatic Data Recovery")]),e._v(": This is an important feature that allows LoRa® frames to be stored on the SD card (provided there is one in the slot), if there is no connection to the LoRa® Network Server. Upon restoring connectivity, these buffed messages will be forwarded, so no data will be lost. This is done in blocks of 8 (FIFO), until all are cleared from the buffer.")]),e._v(" "),a("li",[a("strong",[e._v("Auto-restart Threshold")]),e._v(": A number that defines how many times the Keepalive Interval can expire before the Packet forwarder restarts.")]),e._v(" "),a("li",[a("strong",[e._v("Is LoRaWAN Network")]),e._v(": If you choose “NO” here you will enable frames that are not compliant with the LoRaWAN® specification to be forwarded (in case you have your proprietary LoRa® Server solution). By default, “YES” is selected and non LoRaWAN® packets are dropped.")]),e._v(" "),a("li",[a("strong",[e._v("Log Level")]),e._v(": You can choose from 5 different log levels (Error/Warning/Notice/Info/Debug). This will affect System Log. From Errors only to full system log for debugging.")])]),e._v(" "),a("p",[a("strong",[e._v("2. General Setup - LoRa Gateway MQTT Bridge")])]),e._v(" "),a("p",[e._v("The Gateway is capable of working with an external LoRa® Server, where the MQTT Broker is pointed toward an external Server or the Built-in Server. For this purpose, there are several tabs with their corresponding parameters to be filled.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/19.lora-mqtt-bridge.jpg",width:"100%","figure-number":"5",caption:"LoRa MQTT Bridge - General Setup"}}),e._v(" "),a("p",[a("strong",[e._v("General Setup")]),e._v(": The is where you configure the behavior of the MQTT Bridge.")]),e._v(" "),a("ol",[a("li",[e._v("In "),a("strong",[e._v("LoRa Network Server Type")]),e._v(", you have four (4) options:")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Built-in LoRa® Network Server")]),e._v(" – pointing to the Built-in Server")]),e._v(" "),a("li",[a("strong",[e._v("ChirpStack 2.x")]),e._v(" – for MQTT 2.x Broker (JSON) endpoints")]),e._v(" "),a("li",[a("strong",[e._v("ChirpStack 3.x")]),e._v(" – for MQTT 3.x Broker (PROTOBUF) endpoints")]),e._v(" "),a("li",[a("strong",[e._v("ChirpStack 3.x")]),e._v(" – for MQTT 3x 3.x Broker (JSON-V3) endpoint")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[e._v("MQTT Broker Address")]),e._v(": The IP Address of the machine where the MQTT Broker is hosted (127.0.0.1 for the Built-in one).")]),e._v(" "),a("li",[a("strong",[e._v("MQTT Broker Port")]),e._v(": The corresponding port (1883 default).")]),e._v(" "),a("li",[a("strong",[e._v("MQTT Protocol Version")]),e._v(": You can choose between V3.1 and V3.1.1.")]),e._v(" "),a("li",[a("strong",[e._v("Client ID")]),e._v(": An ID that is used to associate with the topic. If left empty, a random one will be generated.")]),e._v(" "),a("li",[a("strong",[e._v("Clean Session")]),e._v(": With this button enabled, the broker will not store any subscription information or undelivered messages.")]),e._v(" "),a("li",[a("strong",[e._v("Will Retain")]),e._v(": With this button enabled, the last message published will be retained.")]),e._v(" "),a("li",[a("strong",[e._v("QoS")]),e._v(": You can set the desired Quality of Service level.")]),e._v(" "),a("li",[a("strong",[e._v("Keepalive")]),e._v(": The keep alive interval in seconds (10 default).")]),e._v(" "),a("li",[a("strong",[e._v("Enable Authentication")]),e._v(": The switch turns on Encryption of the transmitted data. You need to configure the Certificates used to encrypt the data in order for secure authentication to be performed.")]),e._v(" "),a("li",[a("strong",[e._v("Username")]),e._v(": The username, if one is use, leave blank if there isn’t one.")]),e._v(" "),a("li",[a("strong",[e._v("Password")]),e._v(": The password, if one is use, leave blank if there isn’t one. Can be randomly generated with the green arrows to the side of the field.")]),e._v(" "),a("li",[a("strong",[e._v("SSL/TLS Mode")]),e._v(": By default, this is Disabled. You can choose one of 3 other modes: "),a("strong",[e._v("CA signed server certificate")]),e._v(", "),a("strong",[e._v("Self-signed server certificate")]),e._v(", "),a("strong",[e._v("Self-signed server")]),e._v(", & "),a("strong",[e._v("Client certificate")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("TLS Version")]),e._v(": The version of the TLS protocol to be used. Options are "),a("strong",[e._v("TLSv1")]),e._v(", "),a("strong",[e._v("TLSv1.1")]),e._v(", "),a("strong",[e._v("TLSv1.2")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("CA Certificate, Client Certificate, Client Key, Client Key Passphrase")]),e._v(": You can have one or all of these to set up depending on the SSL/TLS Mode chosen. These are to be generated via the appropriate algorithm and distributed between the MQTT Broker and the LoRa® Server Please refer to the MQTT Bridge with TLS Encryption Configuration Manual for details on how to edit the settings in order for the Gateway to work as an MQTT Bridge with TLS Encryption.")]),e._v(" "),a("li",[a("strong",[e._v("Log Level")]),e._v(": The granularity of the log information is chosen from the following levels: "),a("strong",[e._v("ERROR")]),e._v(", "),a("strong",[e._v("INFO")]),e._v(" (default), "),a("strong",[e._v("DEBUG")]),e._v(", "),a("strong",[e._v("TRACE")]),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("MQTT Topic Template Setup")]),e._v(": MQTT Topic Template SetupThere are two types of templates, depending on which LoRa® Network Server Type you choose.")]),e._v(" "),a("ul",[a("li",[e._v("ChirpStack 2.x Topic Template")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/20.mqtt-setup1.jpg",width:"100%","figure-number":"6",caption:"LoRa® MQTT Bridge – MQTT Topic Template Setup 1"}}),e._v(" "),a("ul",[a("li",[e._v("ChirpStack 3.x Topic Template, Built-in Server")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/21.mqtt-setup2.jpg",width:"100%","figure-number":"7",caption:"LoRa® MQTT Bridge – MQTT Topic Template Setup 2"}}),e._v(" "),a("p",[a("strong",[e._v("3. Packet Filter")])]),e._v(" "),a("p",[e._v("By enabling this functionality, you can filter incoming traffic and only forward packets from the desired nodes in order to optimize bandwidth usage over backhaul.  You can filter by OUI or Network ID by whitelisting.")]),e._v(" "),a("p",[e._v("The Enable Auto Filter slider allows nodes to be automatically dropped in accordance with a set of parameters. One can set threshold values for "),a("strong",[e._v("Discard Period (1800s), Join Period (1800s), Join Interval (6), Join Count 1 (5) and Join Count 2 (20)")]),e._v(".")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/22.packet-filter.jpg",width:"100%","figure-number":"8",caption:"Packet Filter"}}),e._v(" "),a("p",[a("strong",[e._v("4. GPS Information")])]),e._v(" "),a("p",[e._v("In case, you want to enter the GPS parameters for the Gateway manually. Flipping the Fake GPS switch turns this functionality on/off.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/23.gps.jpg",width:"100%","figure-number":"9",caption:"GPS Information"}}),e._v(" "),a("h2",{attrs:{id:"_2-network-server-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-network-server-status"}},[e._v("#")]),e._v(" 2. Network Server Status")]),e._v(" "),a("p",[e._v("There is a dedicated page for the status of your Built-in Network Server. You get Data in both Table and Graph form.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/24.server-status.jpg",width:"100%","figure-number":"10",caption:"Network Server Status"}}),e._v(" "),a("p",[a("strong",[e._v("1. Tabular Data")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Uptime")]),e._v(": How long the Built-in Server has been working without interruption")]),e._v(" "),a("li",[a("strong",[e._v("Devices")]),e._v(": The total amount of end-devices that are currently authenticated with the server.")]),e._v(" "),a("li",[a("strong",[e._v("Gateways")]),e._v(": The total amount of gateways that re forwarding frames to the server.")]),e._v(" "),a("li",[a("strong",[e._v("Total Uplink")]),e._v(": The total uplink frames processed.")]),e._v(" "),a("li",[a("strong",[e._v("Total Downlink")]),e._v(": The total downlinks frames transmitted.")]),e._v(" "),a("li",[a("strong",[e._v("Data Downlink")]),e._v(": The total downlink frames that carry data (non-services).")]),e._v(" "),a("li",[a("strong",[e._v("Total OTAA Requests")]),e._v(": The total authentication requests submitted by end-nodes.")]),e._v(" "),a("li",[a("strong",[e._v("Rejected OTAA Request")]),e._v(": The total authentication requests that were rejected.")])]),e._v(" "),a("p",[a("strong",[e._v("2. Graphical Data")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("RSSI Distribution")]),e._v(": It reflects the RSSI in increments of 20dBm starting from -120dBm and going up to -40dBm. One can get an idea of how many of the total packets received fall within a certain RSSI level and draw conclusions.")]),e._v(" "),a("li",[a("strong",[e._v("SNR Distribution")]),e._v(": It reflects the SNR in increments of 5dB starting from -15dB and going up to 5dB. One can get an idea of how many of the total packets received fall within a certain SNR level and draw conclusions.")]),e._v(" "),a("li",[a("strong",[e._v("DataRate Distribution")]),e._v(": The percentage of packets that have a certain Data Rate (DR0 to DR7)")]),e._v(" "),a("li",[a("strong",[e._v("Traffic History")]),e._v(": The general graphs reflecting the amount of traffic in packets versus time. Good for evaluating the time of the heaviest traffic to prevent potential fallouts.")])]),e._v(" "),a("h2",{attrs:{id:"_3-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-gateway"}},[e._v("#")]),e._v(" 3. Gateway")]),e._v(" "),a("p",[e._v("In this section you can add and External Gateways to work with your LoRa® Network Server. This way packet forwarded by the listed Gateways will be forwarded as though they were within the range of this device and processed by the Application Server.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("By default, you do not need to add the current Gateway as the Network Server works on it anyway, even though it is not listed.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/25.gateway-settings.jpg",width:"100%","figure-number":"11",caption:"Gateway Settings"}}),e._v(" "),a("p",[e._v("Below is a short explanation of the main parameters:")]),e._v(" "),a("h3",{attrs:{id:"gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway"}},[e._v("#")]),e._v(" Gateway")]),e._v(" "),a("p",[e._v("Here you can add a Gateway. You simply need to input the EUI into the text box and press the Add button. Additionally, you can add a Name, Description and the coordinates of the Gateway.")]),e._v(" "),a("h3",{attrs:{id:"gateway-backend-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-backend-configuration"}},[e._v("#")]),e._v(" Gateway Backend Configuration")]),e._v(" "),a("p",[e._v("This section allows you to configure the Gateway to use the Built-in Server to act as a MQTT Bridge.")]),e._v(" "),a("p",[a("strong",[e._v("1. General Setup")])]),e._v(" "),a("p",[e._v("These setting are the same as for the LoRa® Gateway MQTT Bridge, refer to its section "),a("a",{attrs:{href:"/quick-start/rak7249-macro-outdoor-gateway/lora-network#general-setup-lora-gateway-mqtt-bridge"}},[e._v("LoRa Network")]),e._v(" for more information.")]),e._v(" "),a("p",[a("strong",[e._v("2. MQTT Topic")])]),e._v(" "),a("p",[e._v("Here you can get information on the topic templates: Uplink MQTT Topic, Downlink MQTT Topic, Downlink acknowledge MQTT Topic, Gateway Statistic MQTT Topic.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/26.gateway-settings2.jpg",width:"100%","figure-number":"12",caption:"Gateway Settings"}}),e._v(" "),a("h2",{attrs:{id:"_4-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-application"}},[e._v("#")]),e._v(" 4. Application")]),e._v(" "),a("p",[e._v("In order for End-node data to be processed by the Built-in LoRa® Server you need to have an Application under which you register the device. This will allow a node to join the network and you can decrypt its data payload.")]),e._v(" "),a("p",[e._v("The first time you access this section there will be no applications created by default. Enter a name in the field, choose one of the two type from the drop-down menu (more on this further down) and press the “"),a("strong",[e._v("Add")]),e._v("” button.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/27.ns-application.jpg",width:"100%","figure-number":"13",caption:"NS Application"}}),e._v(" "),a("p",[e._v("Now, you need to configure some parameters. These are separated in 3 tabs, which we will go through in order:")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/28.ns-configuration.jpg",width:"100%","figure-number":"14",caption:"NS Application Configuration"}}),e._v(" "),a("h3",{attrs:{id:"application-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-configuration"}},[e._v("#")]),e._v(" Application Configuration")]),e._v(" "),a("p",[e._v("These are the mandatory things to configure, so they come first.")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Device Authentication Mode")]),e._v(": This reflects the choice you made when creating the Application.")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Unified Application Key")]),e._v(": have the same key for every device that is a part of the Application")]),e._v(" "),a("li",[a("strong",[e._v("Separate Application Key")]),e._v(": allow for devices in the same application to use different application keys")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[e._v("Name")]),e._v(": Chose something distinguishable.")]),e._v(" "),a("li",[a("strong",[e._v("Auto Add LoRa Device")]),e._v(": If this is turned on, a field appears where you enter the Application EUI (or generate a random one). The idea here is to have your device be automatically added to the device pool if the Device EUI it has not already been added, provided the join request has the correct Application EUI and Key. This speeds up the process of adding a device to your network (from user perspective).")]),e._v(" "),a("li",[a("strong",[e._v("Application EUI")]),e._v(": You can enter one manually or generate a random one via the “green arrows” button. Make sure this one matches the one in the node.")]),e._v(" "),a("li",[a("strong",[e._v("Application Key")]),e._v(": Manual or random generation options are available.")]),e._v(" "),a("li",[a("strong",[e._v("Description")]),e._v(": Not a mandatory field.")])]),e._v(" "),a("h3",{attrs:{id:"payload-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-format"}},[e._v("#")]),e._v(" Payload Format")]),e._v(" "),a("p",[e._v("There are only two options here. More features to come on future updates.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/29.payload-format.jpg",width:"100%","figure-number":"15",caption:"NS Application Payload Format"}}),e._v(" "),a("p",[e._v("You can choose to have no encoding or to use "),a("strong",[e._v("Cayenne LPP")]),e._v(" (a popular low power format). This allows to directly work with services using the format, without the need to do post processing. As this functionality separates the data field (provided you have chosen the Cayenne LPP and your node has the corresponding encoding) you should be able to have the parsed data field. You can choose to only forward the parsed data via the flip-switch. This will effectively not forward data objects that are not adhering to the Cayenne LPP format.")]),e._v(" "),a("h3",{attrs:{id:"integrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrations"}},[e._v("#")]),e._v(" Integrations")]),e._v(" "),a("p",[e._v("This tab allows the user to make a simple HTTPS integration to directly publish data.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/30.ns-integration.jpg",width:"100%","figure-number":"16",caption:"NS Integrations"}}),e._v(" "),a("ul",[a("li",[e._v("There are several fields that need to be filled in, starting with the "),a("strong",[e._v("Data Encoder/Decoder type")]),e._v(" (Base 64 or HEX String). Once selected you can Enable the functionality with the slider.")]),e._v(" "),a("li",[e._v("Afterwards make sure to fill the rest of the fields: HTTP/HTTPS Headers, Uplink data URL, Join notification URL, Ack notification URL, Device-status notification URL.")]),e._v(" "),a("li",[e._v("You can test the HTTP endpoint integration with a free service like "),a("a",{attrs:{href:"https://webhook.site/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://webhook.site"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Last but not least, select a value for the Maximum number of concurrent connections and the Maximum length of the queue (default values are 16 and 64 respectively).")]),e._v(" "),a("li",[e._v("The parameters and their configuration are out of the scope of this document as they are not specific to this device and there is plenty on information on the topic from various sources. Furthermore, you can check our documentation hub information and examples on the topic.")]),e._v(" "),a("li",[e._v("Once your Application configuration is as you desire you can press the “"),a("strong",[e._v("Save & Apply")]),e._v("” button. This will return you to the main Application section screen.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/31.ns-main-screen.jpg",width:"100%","figure-number":"17",caption:"NS Main Application screen"}}),e._v(" "),a("ul",[a("li",[e._v("Press the “"),a("strong",[e._v("Edit")]),e._v("” button to get access to the Application parameters, these includes both the parameters you entered when creating it (you can adjust these if you like) and a new tab where you can add a Device. As this is a fresh Application there are no registered devices.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/32.ns-devices-tab.jpg",width:"100%","figure-number":"18",caption:"NS Application – Devices tab"}}),e._v(" "),a("h3",{attrs:{id:"devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devices"}},[e._v("#")]),e._v(" Devices")]),e._v(" "),a("p",[e._v("You need to enter a valid "),a("strong",[e._v("Device EUI")]),e._v(" in the text box (16 HEX symbols) and press the “"),a("strong",[e._v("Add")]),e._v("” button. This starts the process and brings you to the screen where the parameters are configured. Additionally, you can Batch Add devices and Import/Export.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/33.ns-configuration-tab.jpg",width:"100%","figure-number":"19",caption:"NS Device – Configuration tab"}}),e._v(" "),a("p",[a("strong",[e._v("1. Configuration")])]),e._v(" "),a("p",[e._v("The configurable parameters are in this tab, the other tabs available are only for monitoring purposes.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Device name")]),e._v(": A distinguishable name for your device.")]),e._v(" "),a("li",[a("strong",[e._v("Class")]),e._v(": LoRa® device class (both A and C are supported, B will be available in future updates).")]),e._v(" "),a("li",[a("strong",[e._v("Join mode")]),e._v(": The type of authentication method (both OTAA and ABP are supported).")]),e._v(" "),a("li",[a("strong",[e._v("Frame-counter Width")]),e._v(": The option for 16 and 32 bit exists.")]),e._v(" "),a("li",[a("strong",[e._v("Enable LPTP")]),e._v(": A proprietary protocol that allows for jumbo packets to be transferred. If such a packet arrives the Application Server will buffer it and assemble it once all the portions are available.")]),e._v(" "),a("li",[a("strong",[e._v("Description")]),e._v(": A human readable description of what the devices is to do.")])]),e._v(" "),a("p",[a("strong",[e._v("2. Activation")])]),e._v(" "),a("p",[e._v("This portion of the interface is empty to start with and will be popular ted with values once the devices have been authenticated and have joined the network. This applies if you use OTAA. In the case of ABP, the parameters in the Activation tab are entered manually and they will be present from the start.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/34.ns-activation-tab.jpg",width:"100%","figure-number":"20",caption:"NS Device – Activation tab"}}),e._v(" "),a("p",[a("strong",[e._v("3. Downlink")])]),e._v(" "),a("p",[e._v("The user is given the option to create dummy downlink frames in order to test. Option for selecting whether the frame requires an Acknowledgment or not is present. In order to successfully transmit a downlink, you need to enter a valued Frame port and the payload bytes in HEX format.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/35.ns-downlink-tab.jpg",width:"100%","figure-number":"21",caption:"NS Device – Downlink tab"}}),e._v(" "),a("p",[a("strong",[e._v("4. Live Device Data")])]),e._v(" "),a("p",[e._v("This is perhaps the most useful tool in the Application Server interface, as it allows the user to monitor the LoRa® traffic in real time. By clicking on a given packet one can expand its windows and access detailed information containing both meta data and payload. In case the node is transmitting in LPP the payload is decrypted and decoded and one can see the information (in the case of Figure 10 there is some environmental data – temperature, barometric pressure, etc.)")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/36.ns-live-device.jpg",width:"100%","figure-number":"22",caption:"NS Device – Live Device Data tab"}}),e._v(" "),a("p",[a("strong",[e._v("5. Overview")])]),e._v(" "),a("p",[e._v("One last thing to note is that there is an additional page to the Device data, which however only appears when the device has been authenticated and has started transmitting. It provides statistics similar to the ones on the Main interface page (RSSI, SNR, etc.), however this are not for the Gateway as a whole, but only for the particular device.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/37.ns-overview.jpg",width:"100%","figure-number":"23",caption:"NS Device – Overview tab"}}),e._v(" "),a("h2",{attrs:{id:"_5-global-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-global-integration"}},[e._v("#")]),e._v(" 5. Global Integration")]),e._v(" "),a("p",[e._v("This feature allows for integration of the Built-in LoRa® Application Server with an External MQTT broker.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/38.ns-global-integration.jpg",width:"100%","figure-number":"24",caption:"NS Global Integration"}}),e._v(" "),a("h3",{attrs:{id:"general-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-setup"}},[e._v("#")]),e._v(" General Setup")]),e._v(" "),a("p",[e._v("You can refer to the Gateway MQTT Bridge section for a detailed explanation of the parameters.")]),e._v(" "),a("h3",{attrs:{id:"mqtt-topic-template-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-topic-template-setup"}},[e._v("#")]),e._v(" MQTT Topic Template Setup")]),e._v(" "),a("p",[e._v("Here you can get information on the topic templates: Join Topic, Uplink Topic, Downlink Topic, Ack Topic, Status Topic.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/user-manual/web-management-platform/39.mqtt-topic-template.jpg",width:"100%","figure-number":"25",caption:"NS Global Integration MQTT Topic Template"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);