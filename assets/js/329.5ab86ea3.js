(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{699:function(t,e,a){"use strict";a.r(e);var r=a(29),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"connect-the-gateway-with-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-the-gateway-with-chirpstack"}},[t._v("#")]),t._v(" Connect the Gateway with ChirpStack")]),t._v(" "),a("p",[t._v("The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack "),a("a",{attrs:{href:"https://www.chirpstack.io/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("here")]),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("For the RAK2245 Stamp Edition - LPWAN Gateway Concentrator Module, there are 2 ways to use the ChirpStack:")]),t._v(" "),a("h3",{attrs:{id:"_1-using-the-built-in-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-using-the-built-in-chirpstack"}},[t._v("#")]),t._v(" 1. Using the built-in ChirpStack")]),t._v(" "),a("p",[t._v("There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware.")]),t._v(" "),a("ul",[a("li",[t._v("When you use it for the first time after burning the latest firmware, the Gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa® Server. If you don't want to change the frequency or LoRa® Server, you don't have to do anything as this will be configured automatically when the gateway boots.")]),t._v(" "),a("li",[t._v("However if it is not the first time and you want to use the built-in ChirpStack as the LoRa® Server, follow the steps discussed in "),a("RouterLink",{attrs:{to:"/en-us/quick-start-guide/gateways/rak2245-stamp-edition/configuring-the-gateway.html"}},[t._v("Configuring the Gateway")]),t._v(" section.")],1),t._v(" "),a("li",[a("strong",[t._v("Optional:")]),t._v(" If ever you disabled the AP Mode and you have connected it to your own Wifi network (Client Mode). You can search for your gateway’s IP Address via "),a("a",{attrs:{href:"https://www.advanced-ip-scanner.com/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Advanced IP Scanner")]),a("OutboundLink")],1),t._v(". Copy the IP Address of your Gateway, it should have a Manufacturer name of "),a("strong",[t._v("Raspberry Pi Foundation")]),t._v(":")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/mtfxbfnu0pxildkxayzt.png",width:"100%","figure-number":"1",caption:"IP address of your RAK2245 Stamp Edition - LPWAN Gateway using IP Scanner"}}),t._v(" "),a("p",[t._v("There is a Web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Browser Address")]),t._v(': "Gateway IP Address:8080" ('),a("strong",[t._v("Example")]),t._v(": https:/192.168.254.176:8080)")]),t._v(" "),a("li",[a("strong",[t._v("Username")]),t._v(": admin")]),t._v(" "),a("li",[a("strong",[t._v("Password")]),t._v(": admin")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ WARNING")]),t._v(" "),a("p",[t._v('It is advisable to change your password to tighten the security of your account. You can change this by clicking the "change password" button at the user icon.')])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/twyskhnlh3qztmnjqbal.png",width:"100%","figure-number":"2",caption:"ChirpStack Web-based UI"}}),t._v(" "),a("ul",[a("li",[t._v("Everything should be pre-configured: Device profiles have been created, the Gateway has been registered with the server, etc. If you go to the Gateways tab and click on rak_gateway, you should see the Gateway details page.")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/nm1rcooh5749oeyknm7t.png",width:"100%","figure-number":"3",caption:"Available Gateways in Chirpstack"}}),t._v(" "),a("ul",[a("li",[t._v('Go to the rak_gateway and see the "Last seen" status. It must be a few seconds ago which signifies that the Gateway is visible in the ChirpStack server.')])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/qzfweifwadyreztjellx.png",width:"100%","figure-number":"4",caption:"Last Seen Status"}}),t._v(" "),a("h3",{attrs:{id:"_2-using-an-independent-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-using-an-independent-chirpstack"}},[t._v("#")]),t._v(" 2. Using an Independent ChirpStack")]),t._v(" "),a("p",[t._v("There are 2 ways that you can get an independent ChirpStack:")]),t._v(" "),a("ol",[a("li",[t._v("Use RAK's Cloud TestingChirpStack - If you want to use RAK's Cloud Testing ChirpStack, contact RAK's Technical Support in the Forum: "),a("a",{attrs:{href:"https://forum.rakwireless.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://forum.rakwireless.com/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Setup an Independent ChirpStack by yourself.")])]),t._v(" "),a("p",[t._v("This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it "),a("a",{attrs:{href:"https://www.chirpstack.io/guides/debian-ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/vn6fioh16k6zjdplr0it.png",width:"100%","figure-number":"5",caption:"Chirpstack Getting Started Guide on Ubuntu"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ WARNING")]),t._v(" "),a("p",[t._v('Remember to run the "'),a("code",[t._v("sudo gateway-config")]),t._v('" command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu "'),a("strong",[t._v("Setup RAK Gateway LoRa")]),t._v("® "),a("strong",[t._v("concentrator")]),t._v('"!')])]),t._v(" "),a("ul",[a("li",[t._v('Assuming you have set it up correctly, Login to your ChirpStack to register your Gateway by opening the ChirpStack\'s web page in a browser by entering "IP Address of ChirpStack:8080".')])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/rmibul5ouzluictf9zpq.png",width:"100%","figure-number":"6",caption:"ChirpStack Login Page"}}),t._v(" "),a("ul",[a("li",[t._v('The default username is "'),a("strong",[t._v("admin")]),t._v('" and the password is also "'),a("strong",[t._v("admin")]),t._v('".')])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/pxxn6cq9hox9mtjzqxep.png",width:"100%","figure-number":"7",caption:"ChirpStack Home Page"}}),t._v(" "),a("ul",[a("li",[t._v('Click "Gateways" and Press "'),a("strong",[t._v("+ CREATE")]),t._v('" to register your Gateway.')])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/tqyaaom3kzxbgj51eapl.png",width:"100%","figure-number":"8",caption:"ChirpStack Registered Gateways"}}),t._v(" "),a("ul",[a("li",[t._v('Click "'),a("strong",[t._v("Create")]),t._v('" to register your Gateway and fill up the necessary information.')])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ku6wofqafkogdpndggwu.png",width:"100%","figure-number":"9",caption:"Registering your own Gateway"}}),t._v(" "),a("ul",[a("li",[t._v("Fill in the Gateway ID that we got from the last section ("),a("RouterLink",{attrs:{to:"/en-us/quick-start-guide/gateways/rak2245-stamp-edition/configuring-the-gateway.html"}},[t._v("Configuring the Gateway")]),t._v("), also called Gateway EUI.")],1),t._v(" "),a("li",[t._v("If you have properly configured your Gateway and there is a network connection between the external ChirpStack and your Gateway, you should see the following page and status:")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/p9wtubhkjdsatrhkwvfu.png",width:"100%","figure-number":"10",caption:"Successfully Registered the Gateway"}}),t._v(" "),a("ul",[a("li",[t._v("Congratulations! 🎉 You have connected your Gateway to an external ChirpStack Successfully!")])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);