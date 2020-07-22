(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{538:function(i,r,e){"use strict";e.r(r);var t=e(29),a=Object(t.a)({},(function(){var i=this,r=i.$createElement,e=i._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[e("h1",{attrs:{id:"interfacing-with-arduino-boards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interfacing-with-arduino-boards"}},[i._v("#")]),i._v(" Interfacing with Arduino Boards")]),i._v(" "),e("p",[i._v("In this document, a set of instruction is written in detail on how to interface your RAK811 LPWAN Evaluation Board with "),e("a",{attrs:{href:"https://www.arduino.cc/",target:"_blank",rel:"noopener noreferrer"}},[i._v("Arduino"),e("OutboundLink")],1),i._v(", which is an open-source electronics platform based on easy-to-use hardware and software.")]),i._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[i._v("#")]),i._v(" Requirements:")]),i._v(" "),e("ul",[e("li",[e("strong",[i._v("RAK811 LPWAN")]),i._v(" "),e("strong",[i._v("Evaluation Board")]),i._v(" (v1.1 or v1.2)")]),i._v(" "),e("li",[i._v("Gateway in range for testing")]),i._v(" "),e("li",[i._v("Arduino Mega 2560")]),i._v(" "),e("li",[i._v("External USB-UART TTL Converter")]),i._v(" "),e("li",[i._v("Jumper wires")])]),i._v(" "),e("h2",{attrs:{id:"arduino-library-preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arduino-library-preparation"}},[i._v("#")]),i._v(" Arduino Library Preparation")]),i._v(" "),e("p",[i._v("Make sure to follow all the steps in this section thoroughly or you will not be able to move on to the next sections. Discussed in here is the installation of the Arduino-RAK811 Library as well as the discussion of the included sample Arduino codes within it.")]),i._v(" "),e("h3",{attrs:{id:"github-repository-downloading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-repository-downloading"}},[i._v("#")]),i._v(" GitHub Repository Downloading")]),i._v(" "),e("p",[i._v("Uploaded in the RAKwireless official Github repository is the Arduino Library needed by this document. Kindly download the library through this "),e("a",{attrs:{href:"https://github.com/RAKWireless/WisNode-Arduino-Library",target:"_blank",rel:"noopener noreferrer"}},[i._v("link"),e("OutboundLink")],1),i._v(".")]),i._v(" "),e("rk-img",{attrs:{src:"/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/vexsae4pqn4x4q4xjb3j.png",width:"100%","figure-number":"1",caption:"RAK811 LPWAN Evaluation Board Arduino Library Repository"}}),i._v(" "),e("h3",{attrs:{id:"adding-the-arduino-rak811-library-to-arduino-ide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-arduino-rak811-library-to-arduino-ide"}},[i._v("#")]),i._v(" Adding the Arduino RAK811 Library to Arduino IDE")]),i._v(" "),e("ol",[e("li",[i._v("Once the Arduino RAK811 Library zip is done downloading, unzip it and you should see these files in the extracted folder:")])]),i._v(" "),e("rk-img",{attrs:{src:"/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/cd0qcew7qxps6intp4mw.png",width:"100%","figure-number":"2",caption:"Items in the Extracted Arduino RAK811 Library Folder"}}),i._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[i._v("Locate the Arduino Libraries folder in which the downloaded Arduino-RAK811 Library folder shall be pasted by navigating through "),e("code",[i._v("Documents>Arduino>libraries")]),i._v(" same as in the image shown below:")])]),i._v(" "),e("rk-img",{attrs:{src:"/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/qbursndkl9i49xm851b9.png",width:"100%","figure-number":"3",caption:"Arduino Libraries Folder Path"}}),i._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[i._v("Copy and Paste")]),i._v(" the Arduino-RAK811 Library folder into the Arduino Libraries folder navigated in the previous step.")])]),i._v(" "),e("rk-img",{attrs:{src:"/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/u9ru5d9zwky5pa46sk5n.png",width:"100%","figure-number":"4",caption:"Arduino-RAK811-Library merged to the Arduino Local Libraries folder"}}),i._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[i._v("To verify if the Arduino-RAK811 Library has been merged successfuly with the local Arduino libraries folder, open the Arduino IDE and navigating through "),e("code",[i._v("File>Examples>Arduino-RAK811-Library.")]),i._v("Shown in the examples that a "),e("strong",[i._v("JoinNetworkOTAA")]),i._v(" sample code is provided proving that the library was successfully merged.")])]),i._v(" "),e("rk-img",{attrs:{src:"/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/egvenp8w2m3eykmu5xdm.png",width:"100%","figure-number":"5",caption:"Examples of codes in the Arduino-RAK811-Library"}}),i._v(" "),e("h3",{attrs:{id:"hex-file-updating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hex-file-updating"}},[i._v("#")]),i._v(" Hex File Updating")]),i._v(" "),e("p",[i._v("On the Arduino-RAK811-Library contains the available functions, the user can refer to the "),e("strong",[i._v("RAK811.h")]),i._v(" file, which has a detailed note on the use of each function.")]),i._v(" "),e("ol",[e("li",[i._v("Using your preferred text editor, open the "),e("strong",[i._v("RAK811.h hex file")]),i._v(" included in the library. Within the codes are the different functionalities and settings used for Arduino boards. For this example, we will be using Sublime Text Editor.")])]),i._v(" "),e("rk-img",{attrs:{src:"/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/rnsjyqg91hbkx4hcuzmc.png",width:"100%","figure-number":"6",caption:"Contents of RAK811.h Hex File"}}),i._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[i._v("Before compiling any Arduino code for RAK811 LPWAN Evaluation Board, user should also consider the "),e("strong",[i._v("Serial RX and TX buffer size")]),i._v(" by manually navigating through "),e("code",[i._v("C:\\Program Files (x86)\\Arduino\\hardware\\arduino\\avr\\cores\\arduino")]),i._v(" and open the "),e("strong",[i._v("HardwareSerial.h")]),i._v(" hex file.")])]),i._v(" "),e("rk-img",{attrs:{src:"/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/j3ccynesxgzp7oekcpsv.png",width:"100%","figure-number":"7",caption:"Editing the HardwareSerial.h Hex file for RX and TX Buffer Size"}}),i._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[i._v("📝 NOTE")]),i._v(" "),e("p",[i._v("Depending on the RAM size of the Arduino Board you are using, the RX and TX buffer size are recommended to be bigger.")])]),i._v(" "),e("rk-img",{attrs:{src:"/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/buvmu1yh5joquqpp3otc.png",width:"100%","figure-number":"8",caption:"Recommended RX and TX Buffer Size"}})],1)}),[],!1,null,null,null);r.default=a.exports}}]);