## System Structure
### RAK7244 Structure
Figure 9 summarizes the basic building blocks of RAK7244. The RAK2245 is an essential part of any of the RAK7244 models as it provides all LoRaWAN® connectivity. It receives and transmits LoRa® Frames and takes care of modulating/demodulating the signals among others. The processing of the LoRa® Frames as well as higher level protocol related tasks is done by the embedded host system (Raspberry Pi). Received and processed LoRa® Frames are being sent to a LoRaWAN® Server. The segmentation of protocol related tasks is outside the scope of this document.

<rk-img
  src="/assets/images/datasheet/rak7244/system-structure/h7nold55ednaywcpmhuv.png"
  width="100%"
  figure-number="9"
  caption="RAK7244 System Structure"
/>

### RAK7244P Structure
Figure 10 summarizes the basic building blocks of RAK7244P. It has the same functionality as far as LoRaWAN® goes as RAK7244. In addition, there is the possibility to power the Gateway using a PoE 802.3 af compatible source (42-57VDC). This is made possible by the RAK9003 PoE HAT
<rk-img
  src="/assets/images/datasheet/rak7244/system-structure/f4m73eapflxbk31bjash.png"
  width="100%"
  figure-number="10"
  caption="RAK7244P System Structure"
/>

### RAK7244C Structure

Figure 11 summarizes the basic building blocks of RAK7244C. It has the same functionality as far as LoRaWAN® goes as RAK7244. Its backhaul capabilities, however are enhanced, with the additional of the RAK2013 Cellular HAT. This allows the Gateway to use its LTE modem to forward data to the Cloud.

<rk-img
  src="/assets/images/datasheet/rak7244/system-structure/wmishmfyonwnd31mgbph.png"
  width="100%"
  figure-number="11"
  caption="RAK7244C Gateway System Structure"
/>
