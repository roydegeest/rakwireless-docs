(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{793:function(t,e,o){"use strict";o.r(e);var r=o(29),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"at-commands-for-rak5010-wistrio-nb-iot-tracker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#at-commands-for-rak5010-wistrio-nb-iot-tracker"}},[t._v("#")]),t._v(" AT Commands for RAK5010 WisTrio NB-IoT Tracker")]),t._v(" "),o("p",[t._v("The purpose of this document is to demonstrate on how to configure the RAK5010 Wistrio NB-IoT Tracker thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("AT Command")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("at+version")])]),t._v(" "),o("td",[t._v("Get the current firmware version number.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:restart")])]),t._v(" "),o("td",[t._v("After set, the device will restart.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+get_config=device:status")])]),t._v(" "),o("td",[t._v("Get all information about the device’s hardware components and their current status.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:sleep:X")])]),t._v(" "),o("td",[t._v("After set, the device will go to sleep or wake up immediately. "),o("br"),t._v("• 0 - sleep • 1 - wake up")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:gps:X")])]),t._v(" "),o("td",[o("strong",[t._v("• X")]),t._v(" - 0: close, 1: open, 2: sleep, 3: standby")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:cellular:X")])]),t._v(" "),o("td",[o("strong",[t._v("• X")]),t._v(" - 0: close, 1: open")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=cellular:send_interval:X:Y")])]),t._v(" "),o("td",[t._v("Set the interval of sending packet loop. "),o("br"),o("strong",[t._v("• X")]),t._v(" - 0: off, 1: on. "),o("br"),o("strong",[t._v("• Y")]),t._v(" - the interval time (ms) This value must be more than 150000 (150s). If the X is set to 1, it means that the device will sleep for Y ms after sending a packet automatically in a loop, until you set X to 0.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+scan=cellular")])]),t._v(" "),o("td",[t._v("Scan the around Cellular networks")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=cellular:XXX:Y:ZZZ:AAA:BBB:C")])]),t._v(" "),o("td",[t._v("Set the IP address and port which you want to send data to through Cellular. "),o("br"),o("strong",[t._v("• XXX")]),t._v(" - The IP address you want to send data to. "),o("br"),o("strong",[t._v("• Y")]),t._v(" - The port you want to send data to. "),o("br"),o("strong",[t._v("• ZZZ")]),t._v(" - The cellular operator’s long name you want to connect, for example: CHINA MOBILE. • AAA - The short name of the Cellular operator, for example: CMCC. "),o("br"),o("strong",[t._v("• BBB")]),t._v(" - The operator’s APN name, for example CMNET. "),o("br"),o("strong",[t._v("• C")]),t._v(" - The number of the Cellular network type. For example, 0 indicates GSM, 8 indicates LTE cat.M1, and 9 indicates LTE cat.NB1.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=cellular:(XXX)")])]),t._v(" "),o("td",[t._v("Set the Cellular module using the Cellular module’s common AT commands which come from its manufacture. "),o("br"),o("strong",[t._v("• XXX")]),t._v(" - The Cellular module’s common AT commands. For the full list of supported Quectel BG96AT Commands, go "),o("a",{attrs:{href:"https://www.quectel.com/product/bg96.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+send=cellular:XXX")])]),t._v(" "),o("td",[t._v("Send a data through cellular. "),o("br"),o("strong",[t._v("• XXX")]),t._v(" -The data you want to send.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=hologram:XXX")])]),t._v(" "),o("td",[t._v("Configure the Hologram SIM card. "),o("br"),o("strong",[t._v("• XXX")]),t._v(" - the device key of the Hologram SIM card. You can find it on "),o("a",{attrs:{href:"https://dashboard.hologram.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hologram web page"),o("OutboundLink")],1),t._v(" after activating the Hologram SIM card.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+send=hologram:user:XXX")])]),t._v(" "),o("td",[t._v("Send a data to Hologram server. "),o("br"),o("strong",[t._v("• XXX")]),t._v(" - the data you want to send.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+send=hologram:sensor")])]),t._v(" "),o("td",[t._v("Send a packet of the current sensor’s data to Hologram server.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=ble:work_mode:X:Y")])]),t._v(" "),o("td",[t._v("Set the work mode for BLE. "),o("br"),o("strong",[t._v("• X")]),t._v(" - 0: BLE peripheral mode, 1: BLE central mode, 2: Beacon scan mode "),o("br"),o("strong",[t._v("• Y")]),t._v(" - 0: normal range, 1: BLE long range More information about BLE Connection Modes is explained "),o("a",{attrs:{href:"bluetooth-connection-modes"}},[t._v("here")])])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);