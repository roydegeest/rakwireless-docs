(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{715:function(e,t,s){"use strict";s.r(t);var r=s(29),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"access-the-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-the-gateway"}},[e._v("#")]),e._v(" Access the Gateway")]),e._v(" "),s("p",[e._v("There are two ways to connect to your RAK2287 Concentrator Module WisLink Series setup:")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("⚠️WARNING")]),e._v(" "),s("p",[e._v("Before powering the Raspberry Pi 3B+ or 4, you should install the LoRa® and GPS antennas. Not doing so might damage the boards.")])]),e._v(" "),s("h3",{attrs:{id:"_1-wi-fi-ap-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-wi-fi-ap-mode"}},[e._v("#")]),e._v(" 1. Wi-Fi AP Mode")]),e._v(" "),s("p",[e._v("By default, the firmware is configured to operate the Raspberry Pi in Wi-Fi AP mode, which means that you should be able to find an SSID named “"),s("strong",[e._v("Rakwireless_XXXX")]),e._v("” on the Wi-Fi network list, for example:")]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/4.wifi.png",width:"100%","figure-number":"1",caption:"RAKWireless Access Point"}}),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),s("p",[e._v('Connect to this Wi-Fi SSID by using "rakwireless" as the default password. The default IP address of the gateway\'s Wi-Fi is 192.168.230.1. Take note of this IP address as this will be needed in connecting via SSH.')])]),e._v(" "),s("p",[e._v("There is no need to configure the IP address of your PC as it will be assigned automatically via the DHCP server.")]),e._v(" "),s("h3",{attrs:{id:"_2-via-the-ethernet-port-on-the-raspberry-pi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-via-the-ethernet-port-on-the-raspberry-pi"}},[e._v("#")]),e._v(" 2. Via the Ethernet Port on the Raspberry Pi")]),e._v(" "),s("p",[e._v("You can also connect your PC with the gateway through an Ethernet cable. By default, the IP address of the gateway’s Ethernet interface is "),s("code",[e._v("192.168.10.10")]),e._v(", so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, "),s("code",[e._v("192.168.10.20")]),s("em",[e._v(".")])]),e._v(" "),s("ul",[s("li",[e._v("To do this in Windows, go to Control Panel > Network and Internet > Network and Sharing Center and click "),s("strong",[e._v("Ethernet")])])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/5.network-and-sharing.png",width:"100%","figure-number":"2",caption:"Network and Sharing Center"}}),e._v(" "),s("ul",[s("li",[e._v("Click "),s("strong",[e._v("Properties")]),e._v(" then Choose "),s("strong",[e._v("Internet Protocol Version 4 (TCP/IPv4).")])])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/6.ethernet-final.png",width:"100%","figure-number":"3",caption:"Ethernet Properties"}}),e._v(" "),s("ul",[s("li",[e._v("By default, it will obtain an IP Address automatically. Click the Option "),s("strong",[e._v("Use the following IP Address")]),e._v(" and enter the  IP Address: "),s("code",[e._v("192.168.10.20")]),e._v(" and press OK.")])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/7.ipv4-settings.png",width:"100%","figure-number":"4",caption:"TCP/IPv4 Properties"}}),e._v(" "),s("p",[e._v("Now , you should be able to access your gateway from your PC successfully using the IP Address "),s("code",[e._v("192.168.10.10")]),e._v("through SSH.")]),e._v(" "),s("h2",{attrs:{id:"log-into-the-gateway-via-ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-into-the-gateway-via-ssh"}},[e._v("#")]),e._v(" Log into the Gateway via SSH")]),e._v(" "),s("h3",{attrs:{id:"_1-windows-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-windows-os"}},[e._v("#")]),e._v(" 1. Windows OS")]),e._v(" "),s("p",[e._v("Secure Shell (SSH) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely "),s("a",{attrs:{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("Putty")]),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://www.bitvise.com/ssh-client-download",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("BitVise SSH Client")]),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://mobaxterm.mobatek.net/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("MobaXterm")]),s("OutboundLink")],1),e._v(" and many more. Feel free to choose one that fits your needs, but in this guide, you will be using Putty.")]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/8.putty.png",width:"75%","figure-number":"5",caption:"Putty Software for SSH in Windows"}}),e._v(" "),s("ul",[s("li",[e._v("If you have connected to the gateway through "),s("strong",[e._v("Wi-Fi AP Mode")]),e._v(", the IP Address is "),s("code",[e._v("192.168.230.1")]),e._v(".")]),e._v(" "),s("li",[e._v("If you have connected to the gateway through "),s("strong",[e._v("Ethernet")]),e._v(", the IP Address is "),s("code",[e._v("192.168.10.10")]),e._v(".")]),e._v(" "),s("li",[e._v('It will then prompt you to enter the username and password. The default username is "'),s("strong",[e._v("pi")]),e._v('" and the default password is "'),s("strong",[e._v("raspberry")]),e._v('".')])]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/9.command-line.png",width:"100%","figure-number":"6",caption:"Command line after log in"}}),e._v(" "),s("h3",{attrs:{id:"_2-mac-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mac-os"}},[e._v("#")]),e._v(" 2. Mac OS")]),e._v(" "),s("p",[e._v("Open the Terminal of Mac OS. Launch the "),s("strong",[e._v("Terminal")]),e._v(' application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting '),s("strong",[e._v("Command + Spacebar")]),e._v(" and typing “Terminal” and then return:")]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/10.mac-terminal.png",width:"100%","figure-number":"7",caption:"Opening Terminal in Mac OS"}}),e._v(" "),s("p",[e._v("Open the terminal of Mac OS. Enter "),s("strong",[e._v("root mode")]),e._v(' by typing the following command: "'),s("code",[e._v("sudo -i")]),e._v('".')]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/11.mac-ssh.jpg",width:"100%","figure-number":"8",caption:"SSH in Mac OS"}}),e._v(" "),s("ul",[s("li",[e._v('If you are not in root mode, enter "'),s("code",[e._v("ssh pi@192.168.230.1")]),e._v('" in the terminal to login to your gateway, the default password is "'),s("strong",[e._v("raspberry")]),e._v('".')]),e._v(" "),s("li",[e._v('If you connect your PC with the gateway through Ethernet Cable, you should enter "'),s("code",[e._v("ssh pi@192.168.10.10")]),e._v('", the default password is "'),s("strong",[e._v("raspberry")]),e._v('".')])]),e._v(" "),s("p",[e._v("OK, you have logged into the gateway through SSH successfully same with the image shown below:")]),e._v(" "),s("rk-img",{attrs:{src:"/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/12.login-successful.jpg",width:"100%","figure-number":"9",caption:"Log-in Successful Notification"}}),e._v(" "),s("h3",{attrs:{id:"_3-linux-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-linux-os"}},[e._v("#")]),e._v(" 3. Linux OS")]),e._v(" "),s("p",[e._v("If the OS of your PC is Linux, you should do the same as the Mac OS, except the root mode.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);