(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{650:function(t,e,a){"use strict";a.r(e);var r=a(29),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"connect-the-gateway-with-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-the-gateway-with-chirpstack"}},[t._v("#")]),t._v(" Connect the Gateway with Chirpstack")]),t._v(" "),a("p",[t._v("The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack "),a("a",{attrs:{href:"https://www.chirpstack.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"using-an-independent-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-an-independent-chirpstack"}},[t._v("#")]),t._v(" Using an Independent ChirpStack")]),t._v(" "),a("p",[t._v("Since the RAK7246G LPWAN Developer Gateway does not include a built-in Chirpstack, choose in the ways provided below so you can get an independent ChirpStack:")]),t._v(" "),a("ol",[a("li",[t._v("Use RAK's Cloud TestingChirpStack - If you want to use RAK's Cloud Testing ChirpStack, contact RAK's Technical Support in the Forum: "),a("a",{attrs:{href:"https://forum.rakwireless.com/t/rak-free-cloud-loraserver-for-testing/344",target:"_blank",rel:"noopener noreferrer"}},[t._v("RAK Free Cloud Server for Testing"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Setup an Independent ChirpStack by yourself.")])]),t._v(" "),a("p",[t._v("This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it "),a("a",{attrs:{href:"https://www.chirpstack.io/guides/debian-ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/wisgate/rak7246g/quickstart/chirpstack_ubuntu.png",width:"100%","figure-number":"1",caption:"Chirpstack Getting Started Guide on Ubuntu"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️WARNING")]),t._v(" "),a("p",[t._v("Remember to run the "),a("code",[t._v("sudo gateway-config")]),t._v(' command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu "'),a("strong",[t._v("Setup RAK Gateway LoRa® concentrator")]),t._v('"!')])]),t._v(" "),a("p",[t._v("Assuming you have set it up correctly, Login to your ChirpStack to register your Gateway by opening the ChirpStack's web page in a browser by entering \""),a("strong",[t._v("IP Address of ChirpStack:8080")]),t._v('".')]),t._v(" "),a("ul",[a("li",[t._v("If you are using an Independent Chirpstack, use the IP Address you have set in the Configuring the Gateway document.")]),t._v(" "),a("li",[t._v("If you are using the RAK Free Cloud Server Chirpstack "),a("code",[t._v("209.250.251.9")])])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/wisgate/rak7246g/quickstart/chirpstack_login.png",width:"100%","figure-number":"2",caption:"ChirpStack Login Page"}}),t._v(" "),a("ul",[a("li",[t._v('The default username is "'),a("strong",[t._v("admin")]),t._v('" and the password is also "'),a("strong",[t._v("admin")]),t._v('"')])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),a("p",[t._v("If you are using the RAK Cloud Testing ChirpStack, input the account and password you have asked in the forum provided beforehand.")])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/wisgate/rak7246g/quickstart/chirpstack_home.png",width:"100%","figure-number":"3",caption:"ChirpStack Home Page"}}),t._v(" "),a("ul",[a("li",[t._v('Click "'),a("strong",[t._v("Gateways")]),t._v('" in the left menu and Press "'),a("strong",[t._v("+ CREATE")]),t._v('" to register your Gateway')])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/wisgate/rak7246g/quickstart/chirpstack_gateway.png",width:"100%","figure-number":"4",caption:"ChirpStack Registered Gateways"}}),t._v(" "),a("ul",[a("li",[t._v('Click "Create" to register your Gateway and fill up the necessary information.')])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/wisgate/rak7246g/quickstart/chirpstack_register_gateway.png",width:"100%","figure-number":"5",caption:"Registering your own Gateway"}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("Fill in the Gateway ID that we got from the last section ("),a("RouterLink",{attrs:{to:"/wisgate/rak7246g/quickstart/configuring-the-gateway.html"}},[t._v("Configuring the Gateway")]),t._v("), also called Gateway EUI.\n"),a("rk-img",{attrs:{src:"/assets/images/wisgate/rak7246g/quickstart/gateway_id.png",width:"100%","figure-number":"6",caption:"Gateway ID"}})],1)]),t._v(" "),a("li",[a("p",[t._v("If you have properly configured your Gateway and there is a network connection between the external ChirpStack and your Gateway, you should see the following page and status:")])])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/wisgate/rak7246g/quickstart/chirpstack_success.png",width:"100%","figure-number":"7",caption:" Successfully Registered the Gateway"}}),t._v(" "),a("ul",[a("li",[t._v("By clicking the Live LORAWAN® FRAMES tab, you can check the LoRa® packets sent by the nodes into your RAK7246G LPWAN Developer Gateway")])]),t._v(" "),a("p",[a("strong",[t._v("Congratulations!")]),t._v(" 🎉 You have connected your Gateway to an external ChirpStack Successfully!")])],1)}),[],!1,null,null,null);e.default=i.exports}}]);