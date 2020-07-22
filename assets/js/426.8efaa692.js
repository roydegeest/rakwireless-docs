(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{796:function(t,e,r){"use strict";r.r(e);var a=r(29),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"burning-the-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#burning-the-firmware"}},[t._v("#")]),t._v(" Burning the Firmware")]),t._v(" "),r("p",[t._v("An easy and quick way to get started with your RAK5010 is through using a pre-compiled firmware.  However, if you wanted to compile your own customized firmware, you can visit "),r("a",{attrs:{href:"rui-online-compiler"}},[t._v("here")]),t._v(" to learn how.")]),t._v(" "),r("h2",{attrs:{id:"installing-j-flash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installing-j-flash"}},[t._v("#")]),t._v(" Installing J-Flash")]),t._v(" "),r("ul",[r("li",[t._v("Go to the Official Website of "),r("strong",[t._v("Segger")]),t._v(" where you can Download the J-Flash software: "),r("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/"),r("OutboundLink")],1)])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/rhblajzhsv9pb1fdos3h.jpg",width:"100%","figure-number":"1",caption:" Segger Official Website"}}),t._v(" "),r("ul",[r("li",[t._v("Download the software that corresponds to your Operating System, in this guide we will be using Windows")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/etylt7rqrbcjedteqhqc.jpg",width:"100%","figure-number":"2",caption:"J-link Software in different platforms"}}),t._v(" "),r("ul",[r("li",[t._v("After you have downloaded your corresponding software, install it and wait for a couple of minutes.")])]),t._v(" "),r("h2",{attrs:{id:"creating-project-in-j-flash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-project-in-j-flash"}},[t._v("#")]),t._v(" Creating Project in J-Flash")]),t._v(" "),r("ul",[r("li",[t._v("Upon opening the software, you will be greeted with the following window. Choose "),r("strong",[t._v("Create a new project")]),t._v(". Then Click "),r("strong",[t._v("Start J-Flash.")])])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/qbhdb7hj0cfq0cghohxx.jpg",width:"100%","figure-number":"3",caption:"J-flash Interface"}}),t._v(" "),r("ul",[r("li",[t._v("You will be then prompt to configure your new Project. Select the Target Device by clicking the box labeled red below:")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/sccml4h6imieppibarpy.jpg",width:"100%","figure-number":"4",caption:"Configuring the Project"}}),t._v(" "),r("ul",[r("li",[t._v("Select the Manufacturer to "),r("strong",[t._v("Nordic Semi")]),t._v(" and Select the Device "),r("strong",[t._v("nRF52840_xxAA.")])])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/h3wken4r8z0rfbznrgrc.jpg",width:"100%","figure-number":"5",caption:"Selecting the Device"}}),t._v(" "),r("ul",[r("li",[t._v("Select the Target Interface to be "),r("strong",[t._v("SWD")]),t._v(" and the Speed (kHz) to be "),r("strong",[t._v("4000")]),t._v(" and Press "),r("strong",[t._v("OK.")])])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/hil2ag7u5vavbgpluu1c.jpg",width:"100%","figure-number":"6",caption:"Target Interface and Speed (kHz)"}}),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/s91d5tazgtvl1lgihina.jpg",width:"100%","figure-number":"7",caption:"Created Project Successfully"}}),t._v(" "),r("h2",{attrs:{id:"connecting-the-rak5010-with-jtag"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connecting-the-rak5010-with-jtag"}},[t._v("#")]),t._v(" Connecting the RAK5010 with JTAG")]),t._v(" "),r("ul",[r("li",[t._v("Connect your RAK5010 to your PC through "),r("a",{attrs:{href:"https://store.rakwireless.com/products/emulator-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("JTAG"),r("OutboundLink")],1),t._v(" using the following pinout diagram below:")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/hx3crsaspcr2aadaesnc.jpg",width:"50%","figure-number":"8",caption:"RAK5010 and JTAG Hardware Interface"}}),t._v(" "),r("ul",[r("li",[t._v("Download the latest pre-compiled firmware  "),r("a",{attrs:{href:"https://downloads.rakwireless.com/en/Cellular/RAK5010/Firmware/RAK5010_V3.0.0.8.rar",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(" and extract it in your PC.")]),t._v(" "),r("li",[t._v("In the J-Flash software Menu Bar, Choose Target -> Connect")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/wcw1maqbahdyhqm5hdb6.jpg",width:"100%","figure-number":"9",caption:"Successfully Created Project"}}),t._v(" "),r("ul",[r("li",[t._v("Now, choose the demo firmware that you have downloaded")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/iyk5ueztu9i3eul8jp6z.jpg",width:"100%","figure-number":"10",caption:"Selecting the Hex File"}}),t._v(" "),r("ul",[r("li",[t._v("Select Target -> Production Programming to start the flashing process and wait for a couple of minutes.")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/wechf9fckqgvlw46bfqe.jpg",width:"100%","figure-number":"11",caption:"Connect with the RAK5010"}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);