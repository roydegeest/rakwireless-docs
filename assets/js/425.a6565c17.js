(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{795:function(e,t,o){"use strict";o.r(t);var a=o(29),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"bluetooth-connection-modes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bluetooth-connection-modes"}},[e._v("#")]),e._v(" Bluetooth Connection Modes")]),e._v(" "),o("p",[e._v("There are three BLE modes in RAK5010 from the firmware V3.0.0.6 on, the "),o("strong",[e._v("Peripheral Mode")]),e._v(", the "),o("strong",[e._v("Central Mode")]),e._v(" and the "),o("strong",[e._v("Beacon Scan Mode")]),e._v(". You can change the work mode of RAK5010’s BLE using this command provided below which is defined "),o("a",{attrs:{href:"at-commands"}},[e._v("here")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("at+set_config=ble:work_mode:X:Y\n")])])]),o("p",[o("strong",[e._v("Description:")]),e._v(" Set the work mode for BLE.")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("X")]),e._v(" - 0: BLE peripheral mode, 1: BLE central mode. 2: Beacon scan mode.")]),e._v(" "),o("li",[o("strong",[e._v("Y")]),e._v(" - 0: normal range, 1: BLE long range.")])]),e._v(" "),o("h3",{attrs:{id:"ble-peripheral-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ble-peripheral-mode"}},[e._v("#")]),e._v(" BLE Peripheral Mode")]),e._v(" "),o("p",[e._v("For the Peripheral Mode, you can scan RAK5010’s BLE and connect with it using your mobile device.")]),e._v(" "),o("h3",{attrs:{id:"ble-central-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ble-central-mode"}},[e._v("#")]),e._v(" BLE Central Mode")]),e._v(" "),o("p",[e._v("For the Central Mode, RAK5010’s BLE will not broadcast so that your mobile devices will not be able to scan it.  This is very useful if you want to make the RAK5010 act as a BLE Gateway wherein BLE Sensor Nodes (up to 20 Devices) can send sensor data.")]),e._v(" "),o("h3",{attrs:{id:"beacon-scan-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#beacon-scan-mode"}},[e._v("#")]),e._v(" Beacon Scan Mode")]),e._v(" "),o("p",[e._v("For the Beacon Scan mode, RAK5010 can scan around the Beacon signal, it is useful for Beacon use case like iBeacon.")]),e._v(" "),o("h2",{attrs:{id:"rak5010-ble-default-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rak5010-ble-default-settings"}},[e._v("#")]),e._v(" RAK5010 BLE Default Settings")]),e._v(" "),o("p",[e._v("By default, the RAK5010 LPWAN Evaluation Board will work on "),o("strong",[e._v("Peripheral Mode.")]),e._v(" In this mode users can configure it through BLE including DFU easily. It should be noted that after resetting the RAK5010, the user has only 60 seconds to establish a connection with your Mobile Device through BLE based on its power consumption settings. If no connection has been established within 60 seconds, the RAK5010's BLE signal will not be broadcasted and it will enter power saving mode. On the other hand, there is no limitation once you are already connected with the RAK5010's BLE.")]),e._v(" "),o("p",[e._v("If you set the RAK5010 to work in Central Mode, the RAK5010 will work first on Peripheral Mode for 30 seconds and if no connection is established after 30 seconds, it will automatically work in "),o("strong",[e._v("Central Mode.")]),e._v(" In this mode,the BLE signal of the RAK5010 will stop broadcasting and will not be visible on your mobile devices up until you change the work mode to peripheral mode or reset the RAK5010 again.")])])}),[],!1,null,null,null);t.default=n.exports}}]);