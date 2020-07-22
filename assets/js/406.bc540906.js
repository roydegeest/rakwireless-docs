(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{776:function(t,e,a){"use strict";a.r(e);var r=a(29),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"otaa-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#otaa-mode"}},[t._v("#")]),t._v(" OTAA Mode")]),t._v(" "),a("p",[t._v("When setting up a new device in TTN it defaults to OTAA mode. For configuring it you need the following three parameters: "),a("strong",[t._v("Device EUI, Application EUI")]),t._v(" and "),a("strong",[t._v("App Key")]),t._v(". You can get them all from the "),a("strong",[t._v("Overview page")]),t._v(".")]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/pyqpw2ihstlgeqv68pbs.png",width:"100%","figure-number":"1",caption:"Device OTAA Parameters"}}),t._v(" "),a("p",[t._v("Now, let us configure the RAK7204 to work in OTAA mode in the EU868 band, as an example.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),a("p",[t._v("The default LoRa® working mode for the RAK7204 is LoRaWAN® 1.0.2, while the default LoRa® join mode is OTAA, and the default LoRa® class is Class A.")])]),t._v(" "),a("ol",[a("li",[t._v("Set mode to "),a("strong",[t._v("OTAA")]),t._v(", device class to "),a("strong",[t._v("Class A")]),t._v(" and your LoRaWAN® region to your correct frequency band, with the following set of commands below. Remember to replace "),a("strong",[t._v("XXX")]),t._v(" with the your LoRaWAN® region, check "),a("a",{attrs:{href:"https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" for your frequency plan.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:join_mode:0\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:class:0\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:region:XXX\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/okwyucipaed3fnrarkso.png",width:"100%","figure-number":"2",caption:"Setting up the RAK7204 operation mode"}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Now that the modes are set, enter the parameters: : "),a("strong",[t._v("Device EUI, Application EUI")]),t._v(" and "),a("strong",[t._v("App Key")]),t._v(". Use the commands below. Remember to replace the "),a("strong",[t._v('"XXXX"')]),t._v(" with the corresponding parameter value for your particular case:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:dev_eui:XXXX\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:app_eui:XXXX\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:app_key:XXXX\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/jttmbmkhm0ac0duvap94.png",width:"100%","figure-number":"3",caption:"Setting up the RAK7204 OTAA parameters"}}),t._v(" "),a("ul",[a("li",[t._v("You should end up with a window as the one in "),a("strong",[t._v("Figure 3")]),t._v(" above with "),a("strong",[t._v("a series of OK messages")]),t._v(".")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Finally, execute the join command:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+join\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/eevf8jgjt1p48i17vugw.png",width:"100%","figure-number":"4",caption:"Join Command"}}),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("You can test the connection by sending an uplink frame. Use the following for example:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+send=lora:1:12345678\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/tsyls5mfkzctes7lh1jg.png",width:"100%","figure-number":"5",caption:"Sending an uplink frame"}}),t._v(" "),a("p",[t._v("If you get a response in your TTN live data feed as in Figure 6, than you are all set!")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),a("p",[t._v("Be sure to have this window opened prior to sending data through the RAK Serial Port or you will not be able to receive the packet sent. Logging out your The Things Network acccount would also clear all the data sent and not being able to receive packets sent.")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/tj6whmvvp8hwldemo31b.png",width:"100%","figure-number":"6",caption:"Sending Data to TTN from RAK7204"}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);