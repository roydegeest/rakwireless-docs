(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{507:function(e,t,n){"use strict";n.r(t);var i=n(29),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"connecting-to-the-things-network-ttn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-things-network-ttn"}},[e._v("#")]),e._v(" Connecting to The Things Network (TTN)")]),e._v(" "),n("p",[e._v("The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network "),n("a",{attrs:{href:"https://www.thethingsnetwork.org/docs/",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("here")]),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("In this section, we will be connecting the RAK4600 LPWAN Breakout Module to The Things Network (TTN). If you don't have an account yet, head on to "),n("a",{attrs:{href:"https://www.thethingsnetwork.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.thethingsnetwork.org/"),n("OutboundLink")],1),e._v(" and create one. Once done, log in to your account and go to the console which can be found here:")]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/ttn-home-page.png",width:"100%","figure-number":"1",caption:"The Things Network Home Page"}}),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/ttn-console-main-page.png",width:"100%","figure-number":"2",caption:"TTN Console Page"}}),e._v(" "),n("ul",[n("li",[e._v('Choose "'),n("strong",[e._v("APPLICATIONS")]),e._v('"')])]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/application-page.png",width:"100%","figure-number":"3",caption:"Application Page"}}),e._v(" "),n("h2",{attrs:{id:"adding-an-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-an-application"}},[e._v("#")]),e._v(" Adding an Application")]),e._v(" "),n("ul",[n("li",[e._v('Click the "'),n("strong",[e._v("add application")]),e._v('" button')])]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/adding-application.png",width:"100%","figure-number":"4",caption:"Adding an Application"}}),e._v(" "),n("p",[e._v("Here are the things that you should take note in adding an application:")]),e._v(" "),n("ol",[n("li",[n("strong",[e._v("Application ID")]),e._v(" - this will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.")]),e._v(" "),n("li",[n("strong",[e._v("Description")]),e._v(" - this is a short and concise human readable description of your application.")]),e._v(" "),n("li",[n("strong",[e._v("Application EUI")]),e._v(" - this will be generated automatically by The Things Network for convenience.")]),e._v(" "),n("li",[n("strong",[e._v("Handler Registration")]),e._v(" - handler you want to register this application to.")])]),e._v(" "),n("p",[e._v('After you fill in the necessary information, press the "'),n("strong",[e._v("Add application")]),e._v('" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.')]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/application-overview.png",width:"100%","figure-number":"5",caption:"Application Overview"}}),e._v(" "),n("h3",{attrs:{id:"register-device"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#register-device"}},[e._v("#")]),e._v(" Register Device")]),e._v(" "),n("ul",[n("li",[e._v('Scroll down until you see the Devices section, or you can also click the "'),n("strong",[e._v("Devices")]),e._v('" button at the top:')])]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/device-section.png",width:"100%","figure-number":"6",caption:"Device Section"}}),e._v(" "),n("ul",[n("li",[e._v('Click "'),n("strong",[e._v("Register device")]),e._v('"')])]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/add-device.png",width:"100%","figure-number":"7",caption:"Add your Device"}}),e._v(" "),n("p",[e._v("Here are the things that you should take note in registering your device:")]),e._v(" "),n("ol",[n("li",[n("strong",[e._v("Device ID")]),e._v(" - this is the unique identifier for your RAK4600 LPWAN Breakout Module in your application. You need to enter this manually.")]),e._v(" "),n("li",[n("strong",[e._v("Device EUI")]),e._v(" - this is the unique identifier for your device in the network. You can change it later, if you want.")]),e._v(" "),n("li",[n("strong",[e._v("App Key")]),e._v("– this key will be used to secure the communication between the device and the network.")]),e._v(" "),n("li",[n("strong",[e._v("App EUI")]),e._v("– a unique identifier of the Application that you are registering the device within.")])]),e._v(" "),n("p",[e._v("Populate the "),n("strong",[e._v("Device ID")]),e._v(" and "),n("strong",[e._v("Device EUI")]),e._v(" "),n("em",[e._v("(generate a random one by pressing the arrows)")]),e._v(" fields and leave the rest as is.\nClick “"),n("strong",[e._v("Register")]),e._v("”")]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/wisbee/rak4600-breakout-board/quickstart/connecting-ttn/device-overview-page.png",width:"100%","figure-number":"8",caption:"Device Overview"}}),e._v(" "),n("p",[e._v("Depending on which authentication method you want to use, proceed to either "),n("strong",[e._v("OTAA mode")]),e._v(" or "),n("strong",[e._v("ABP mode")]),e._v(" section.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);