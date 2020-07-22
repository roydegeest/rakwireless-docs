(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{395:function(t,a,s){"use strict";s.r(a);var e=s(29),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"installing-the-gateway-bridge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-gateway-bridge"}},[t._v("#")]),t._v(" Installing the Gateway Bridge")]),t._v(" "),s("p",[t._v("In this section, an outline is provided on how to perform the installation. For detailed information, you can visit "),s("a",{attrs:{href:"https://www.chirpstack.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chirpstack.io"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("ol",[s("li",[t._v("Run the following commands provided below to update the Ubuntu Repositories.")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 1CE2AFD36DBCCA00\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb https://artifacts.loraserver.io/packages/3.x/deb stable main"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/loraserver.list\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])])]),s("ul",[s("li",[t._v("This updates the Ubuntu Repositories.")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Proceed with installing the Bridge itself:")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lora-gateway-bridge\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Start the Bridge service:")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start lora-gateway-bridge\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Check if it is working as it should using the command as shown same with the snippet below:")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("journalctl -u lora-gateway-bridge -f -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n")])])]),s("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/17.gateway-bridge-journal.png",width:"100%","figure-number":"1",caption:"Gateway Bridge Journal Control Output (no errors)"}}),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ubuntu@ip-172-31-33-125:~$ journalctl -u chirpstack-gateway-bridge -f -n 50\n-- Logs begin at Wed 2020-06-17 11:59:21 UTC. --\nJun 18 10:20:29 ip-172-31-33-125 systemd[1]: Started ChirpStack Gateway Bridge.\nJun 18 10:20:29 ip-172-31-33-125 chirpstack-gateway-bridge[5596]: time="2020-06-18T10:20:29Z" level=info msg="starting ChirpStack Gateway Bridge" docs="https://www.chirpstack.io/gateway-bridge/" version=3.8.0\nJun 18 10:20:29 ip-172-31-33-125 chirpstack-gateway-bridge[5596]: time="2020-06-18T10:20:29Z" level=info msg="backend/semtechudp: starting gateway udp listener" addr="0.0.0.0:1700"\nJun 18 10:20:29 ip-172-31-33-125 chirpstack-gateway-bridge[5596]: time="2020-06-18T10:20:29Z" level=info msg="integration/mqtt: connected to mqtt broker"\n')])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);