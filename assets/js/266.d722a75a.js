(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{636:function(t,e,r){"use strict";r.r(e);var a=r(29),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"accessing-your-gateway"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessing-your-gateway"}},[t._v("#")]),t._v(" Accessing Your Gateway")]),t._v(" "),r("p",[t._v("After burning the image into the SD Card, make sure you have inserted the SD Card with the Latest Firmware installed to the "),r("strong",[t._v("RAK7244C LPWAN")]),t._v(" "),r("strong",[t._v("Developer Gateway")]),t._v(" and the LoRa® and GPS Antenna attached to it. After which, you can now safely power on the gateway. In this document, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("Before powering the Raspberry Pi 4 you should install the LoRa® and GPS antennas. Not doing so might damage the boards.")])]),t._v(" "),r("h2",{attrs:{id:"_1-wi-fi-ap-mode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-wi-fi-ap-mode"}},[t._v("#")]),t._v(" 1. Wi-Fi AP Mode")]),t._v(" "),r("p",[t._v('By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "'),r("strong",[t._v("Rakwireless_XXXX")]),t._v('" on your PC Wi-Fi Network List.')]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/1.lz4jkwc4hc5bulz0tial.png",width:"100%","figure-number":"1",caption:"RAKWireless Access Point"}}),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),r("p",[t._v("“XXXX” is the last 2 bytes of your RAK7244C WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note also of the default IP address of the Gateway provided below as this will be needed in connecting via SSH.")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Wi-Fi Password:")]),t._v(" rakwireless")]),t._v(" "),r("li",[r("strong",[t._v("Default IP Address:")]),t._v(" "),r("code",[t._v("192.168.230.1")])])])]),t._v(" "),r("h2",{attrs:{id:"_2-via-the-ethernet-port-on-the-raspberry-pi-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-via-the-ethernet-port-on-the-raspberry-pi-4"}},[t._v("#")]),t._v(" 2. Via the Ethernet Port on the Raspberry Pi 4")]),t._v(" "),r("p",[t._v("You can also connect your PC with the Gateway through an Ethernet cable. By default, the IP address of the Gateway’s Ethernet interface is "),r("code",[t._v("192.168.10.10")]),t._v(", so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, "),r("code",[t._v("192.168.10.20")]),r("em",[t._v(".")])]),t._v(" "),r("ul",[r("li",[t._v("To do this in Windows, go to Control Panel -> Network and Internet -> Network and Sharing Center and Click "),r("strong",[t._v("Ethernet")])])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/2.em5xb92hmbrbk6l0k8ta.png",width:"100%","figure-number":"2",caption:"Network and Sharing Center"}}),t._v(" "),r("ul",[r("li",[t._v("Click "),r("strong",[t._v("Properties")]),t._v(" then Choose "),r("strong",[t._v("Internet Protocol Version 4 (TCP/IPv4).")])])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/3.q1fuiang2vcayglvgirm.png",width:"100%","figure-number":"3",caption:"Ethernet Properties"}}),t._v(" "),r("ul",[r("li",[t._v('By default, it will obtain an IP Address automatically. Click the Option "Use the following IP Address" and enter the IP Address: '),r("code",[t._v("192.168.10.20")]),t._v(" and press OK.")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/4.qdbxt5z0vcc0xuv6kjie.png",width:"100%","figure-number":"4",caption:"TCP/IPv4 Properties"}}),t._v(" "),r("p",[t._v("Now , you should be able to access your Gateway from your PC successfully using the IP Address "),r("code",[t._v("192.168.10.10")]),t._v("through SSH.")]),t._v(" "),r("h2",{attrs:{id:"log-into-the-gateway-via-ssh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log-into-the-gateway-via-ssh"}},[t._v("#")]),t._v(" Log into the Gateway via SSH")]),t._v(" "),r("h3",{attrs:{id:"_1-windows-os"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-windows-os"}},[t._v("#")]),t._v(" 1. Windows OS")]),t._v(" "),r("p",[t._v("SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely "),r("a",{attrs:{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("Putty")]),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://www.bitvise.com/ssh-client-download",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("BitVise SSH Client")]),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://mobaxterm.mobatek.net/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("MobaXterm")]),r("OutboundLink")],1),t._v(" and many more. Feel free to choose one that fits your needs, you will be using Putty for this guide.")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/5.o9zqtf7g3e8ortdutvtd.png",width:"70%","figure-number":"5",caption:"Putty Software for SSH in Windows"}}),t._v(" "),r("ul",[r("li",[t._v("If you have connected to the gateway through "),r("strong",[t._v("Wi-Fi AP Mode")]),t._v(", the IP Address is "),r("code",[t._v("192.168.230.1")])]),t._v(" "),r("li",[t._v("If you have connected to the gateway through "),r("strong",[t._v("Ethernet")]),t._v(", the IP Address is "),r("code",[t._v("192.168.10.10")])]),t._v(" "),r("li",[t._v('It will then prompt you to enter the username and password. The default username is "'),r("strong",[t._v("pi")]),t._v('" and the default password is "'),r("strong",[t._v("raspberry")]),t._v('"')])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/6.wzhirj41gxy8gnjgm0xy.png",width:"100%","figure-number":"6",caption:"Command line after log in"}}),t._v(" "),r("h3",{attrs:{id:"_2-mac-os"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-mac-os"}},[t._v("#")]),t._v(" 2. Mac OS")]),t._v(" "),r("p",[t._v("Open the Terminal of Mac OS. Launch the "),r("strong",[t._v("Terminal")]),t._v(' application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting '),r("strong",[t._v("Command + Spacebar")]),t._v(" and typing “Terminal” and then return:")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/7.ml30pbgwlefwpd72liak.png",width:"100%","figure-number":"7",caption:"Opening Terminal in Mac OS"}}),t._v(" "),r("p",[t._v("Open the terminal of Mac OS. Enter "),r("strong",[t._v("root mode")]),t._v(' by typing the following command: "'),r("code",[t._v("sudo -i")]),t._v('"')]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/8.nwmfjgjta9pulz2ztcns.jpg",width:"100%","figure-number":"8",caption:"SSH in Mac OS"}}),t._v(" "),r("ul",[r("li",[t._v('If you are not in root mode, enter "'),r("code",[t._v("ssh pi@192.168.230.1")]),t._v('" in the terminal to login to your Gateway, the default password is "'),r("strong",[t._v("raspberry")]),t._v('".')]),t._v(" "),r("li",[t._v('If you connect your PC with the Gateway through Ethernet Cable, you should enter "'),r("code",[t._v("ssh pi@192.168.10.10")]),t._v('", the default password is "'),r("strong",[t._v("raspberry")]),t._v('".')])]),t._v(" "),r("p",[t._v("OK, you have logged into the Gateway through SSH successfully same with the image shown below:")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/9.ke0ouxpmixgalqyu5cgk.jpg",width:"100%","figure-number":"9",caption:"Log-in Successful Notification"}}),t._v(" "),r("h3",{attrs:{id:"_3-linux-os"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-linux-os"}},[t._v("#")]),t._v(" 3. Linux OS")]),t._v(" "),r("p",[t._v("If the OS of your PC is Linux, you should do the same as the Mac OS, except the root mode.")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);