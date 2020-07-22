(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{775:function(t,e,a){"use strict";a.r(e);var r=a(29),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"abp-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abp-mode"}},[t._v("#")]),t._v(" ABP Mode")]),t._v(" "),a("ol",[a("li",[t._v("To join the ABP mode, go to device settings and switch the activation method to "),a("strong",[t._v("ABP")]),t._v(".")]),t._v(" "),a("li",[t._v("The "),a("strong",[t._v("Device Address")]),t._v(", "),a("strong",[t._v("Network Session Key")]),t._v(" and "),a("strong",[t._v("App Session Key")]),t._v(" will be generated automatically by default.")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/bs9ladvinybe4v0fqowm.png",width:"100%","figure-number":"1",caption:"Switching to ABP mode"}}),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Save the mode change and return to the "),a("strong",[t._v("Device Overview page")]),t._v(". You can copy the keys by pressing the button after the value fields marked in red in Figure 2.")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ytbwh3dd3u6ul6mw174p.png",width:"100%","figure-number":"2",caption:"ABP parameters screen"}}),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Now we need to update the RAK7204 configuration (mode and parameters). Open the Serial Tool and type the command below to change the region (in case you have not done so already):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:region:EU868\n")])])]),a("ul",[a("li",[t._v("As you can see in Figure 3, as we were in the same region (EU868), there was no change.")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/gkaye44gsjjuxhtptjmv.png",width:"100%","figure-number":"3",caption:"Region setup"}}),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Change the mode to "),a("strong",[t._v("ABP")]),t._v(" with the command:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:join_mode:1\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/xxgmfyq9dkgzu7hcfq4g.png",width:"100%","figure-number":"4",caption:"Join mode setup"}}),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("Now that the mode has been changed, enter the parameters: "),a("strong",[t._v("Device Address, Network Session Key")]),t._v(", and "),a("strong",[t._v("Application Session Key")]),t._v(". Use the commands below. Remember to replace the "),a("strong",[t._v('"XXXX"')]),t._v(" with the corresponding parameter value for your particular case (Figure 2 for reference of the parameters):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:dev_addr:XXXX\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:nwks_key:XXXX\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:apps_key:XXXX\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/yjupd0dh7ytr1rzqe118.png",width:"100%","figure-number":"5",caption:"Setting up the RAK7204 ABP parameters"}}),t._v(" "),a("p",[t._v("You should end up with a window as the one in "),a("strong",[t._v("Figure 5")]),t._v(" above with "),a("strong",[t._v("a series of OK messages")]),t._v(".")]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Finally, execute the join command:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+join\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/y81mijqfbzfvhxlvt8qm.png",width:"100%","figure-number":"6",caption:"Join command"}}),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("You can test the connection by sending an uplink frame. Use the following as an example:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+send=lora:1:12345678\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/tfs0ngbmzluoex9gl3kn.png",width:"100%","figure-number":"7",caption:"Sending an uplink frame"}}),t._v(" "),a("p",[t._v("If you get a response in your TTN live data feed as in Figure 8, then you are all set!")]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/uos1gg9ucwza8nmlt3v6.png",width:"100%","figure-number":"8",caption:"Sending Data to TTN from RAK7204"}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);