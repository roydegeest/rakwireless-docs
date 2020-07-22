(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{549:function(t,e,o){"use strict";o.r(e);var r=o(29),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"at-commands-for-rak4200-lpwan-evaluation-board"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#at-commands-for-rak4200-lpwan-evaluation-board"}},[t._v("#")]),t._v(" AT Commands for RAK4200 LPWAN Evaluation Board")]),t._v(" "),o("p",[t._v("The purpose of this document is to demonstrate on how to configure the  RAK4200 LPWAN Evaluation Board thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("AT Command")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("at+help")])]),t._v(" "),o("td",[t._v("This AT command can show all available AT commands of this module/product for you.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+version")])]),t._v(" "),o("td",[t._v("Get the current firmware version number.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+get_config=device:status")])]),t._v(" "),o("td",[t._v("Get all information about the device’s hardware components and their current status.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:restart")])]),t._v(" "),o("td",[t._v("After set, the device will restart.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:boot")])]),t._v(" "),o("td",[t._v("Let the device work in boot mode")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+run")])]),t._v(" "),o("td",[t._v("Stop boot mode and run as normal. It is valid when the device works in boot mode.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:sleep:X")])]),t._v(" "),o("td",[t._v("After setting, the device will go to sleep mode or wake up immediately.  "),o("br"),t._v(" "),o("strong",[t._v("• X")]),t._v(" - 0 - wake up ; 1 - sleep")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=device:uart_mode:X:Y")])]),t._v(" "),o("td",[t._v("Set the UART work mode."),o("br"),t._v(" "),o("strong",[t._v("• X")]),t._v(" - UART number on RAK4200 module. "),o("br"),o("strong",[t._v("• Y")]),t._v(" - 0: Configuration mode;1: Passthrough mode.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+join")])]),t._v(" "),o("td",[t._v("Start to join LoRa® network")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+send=lora:X:YYY")])]),t._v(" "),o("td",[t._v("Send a customized data. "),o("br"),t._v(" "),o("strong",[t._v("• X")]),t._v(" - LoRa® port "),o("br"),o("strong",[t._v("• YYY")]),t._v(" - the data which you want to send. The limited length is 50 Bytes, and the data must be in HEX format.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:work_mode:X")])]),t._v(" "),o("td",[t._v("Set the work mode for LoRa®. "),o("br"),o("strong",[t._v("• X")]),t._v(" - 0: LoRaWAN®, 1: LoRaP2P, 2: Test Mode.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:join_mode:X")])]),t._v(" "),o("td",[t._v("Set the join mode for LoRaWAN®. "),o("br"),o("strong",[t._v("• X")]),t._v(" - 0: OTAA, 1: ABP")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:class:X")])]),t._v(" "),o("td",[t._v("Set the class for LoRa®. "),o("br"),o("strong",[t._v("• X")]),t._v(" - 0: Class A, 1: Class B, 2: Class C")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:region:XXXX")])]),t._v(" "),o("td",[t._v("Sets the region for LoRa®. "),o("br"),t._v(" "),o("strong",[t._v("• XXXX")]),t._v(" - EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:confirm:XXXX")])]),t._v(" "),o("td",[t._v("Sets the type of messages which will be sent out through LoRa®. "),o("br"),t._v(" "),o("strong",[t._v("• XXXX")]),t._v(" - 0: unconfirmed, 1: confirm")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:dev_eui:XXXX")])]),t._v(" "),o("td",[t._v("Sets the device EUI for OTAA. "),o("br"),o("strong",[t._v("• XXXX")]),t._v(" - the Device EUI.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:app_eui:XXXX")])]),t._v(" "),o("td",[t._v("Set the application EUI for OTAA. "),o("br"),o("strong",[t._v("• XXXX")]),t._v(" - the Application EUI.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:app_key:XXXX")])]),t._v(" "),o("td",[t._v("Set the application key for OTAA. "),o("br"),o("strong",[t._v("• XXXX")]),t._v(" - the Application Key.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:dev_addr:XXXX")])]),t._v(" "),o("td",[t._v("Set the device address for ABP. "),o("br"),o("strong",[t._v("• XXXX")]),t._v(" - the Device Address")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:apps_key:XXXX")])]),t._v(" "),o("td",[t._v("Set the application session key for ABP. "),o("br"),o("strong",[t._v("• XXXX")]),t._v(" - the Application Session Key.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:nwks_key:XXXX")])]),t._v(" "),o("td",[t._v("Set the network session key for ABP. "),o("br"),o("strong",[t._v("• XXXX")]),t._v(" - the Network Session Key.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:ch_mask:X:Y")])]),t._v(" "),o("td",[t._v("Set a certain channel on or off. "),o("br"),o("strong",[t._v("• X")]),t._v(" - the channel number, and you can check which channel can be set before you set it. "),o("br"),o("strong",[t._v("• Y")]),t._v(" - 0: off, 1: on")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:adr:X")])]),t._v(" "),o("td",[t._v("Open or close the ADR function of Node. "),o("br"),o("strong",[t._v("• X")]),t._v(" - 0: Close ADR; 1: Open ADR.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:dr:X")])]),t._v(" "),o("td",[t._v("Set the DR of Node. "),o("br"),o("strong",[t._v("• X")]),t._v(" - the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN® 1.0.2 specification.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lora:tx_power:X")])]),t._v(" "),o("td",[o("strong",[t._v("• X")]),t._v(" - The level of TX power. If you want to know the relationship between TX power level and dbm, please have a look at LoRaWAN® 1.0.2 region specification")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+get_config=lora:status")])]),t._v(" "),o("td",[t._v("It will return all of the current information of LoRa®, except LoRa® channel.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+get_config=lora:channel")])]),t._v(" "),o("td",[t._v("It will return the state of all LoRa® channels, then you can see which channel is closed and which channel is open very clearly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=lorap2p:XXX:Y:Z:A:B:C")])]),t._v(" "),o("td",[t._v("Set the parameters for LoRa® P2P mode. This AT command is valid when the work mode is LoRaP2P. "),o("br"),o("strong",[t._v("• XXX")]),t._v(" - Frequency in Hz. "),o("br"),o("strong",[t._v("• Y")]),t._v(" - Spreading factor, [6, 7, 8, 9, 10, 11, 12]. "),o("br"),o("strong",[t._v("• Z")]),t._v(" - Bandwidth, 0: 125 kHz, 1: 250 kHz, 2: 500kHz. "),o("br"),o("strong",[t._v("• A")]),t._v(" - Coding Rate, 1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8. "),o("br"),o("strong",[t._v("• B")]),t._v(" - Preamble Length, 5 - 65535. "),o("br"),o("strong",[t._v("• C")]),t._v(" - Power in dbm, 5-20.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+send=lorap2p:XXX")])]),t._v(" "),o("td",[t._v("Send data through LoRaP2P. This AT command is valid when it works in LoRaP2P mode. "),o("br"),o("strong",[t._v("• XXX")]),t._v(" - the data in HEX.")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);