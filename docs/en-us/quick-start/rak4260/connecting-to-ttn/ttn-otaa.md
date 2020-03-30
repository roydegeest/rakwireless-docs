# OTAA Mode

1. After connecting the device and choosing the appropriate COM Port and Baudrate, press the "**Reset button**" on your RAK5005 Baseboard Module and If everything works perfectly, you should see the following message below:

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/rak-serial-port-tool-success.jpg"
  width="100%"
  figure-number="1"
  caption="Serial Port Tool Successful Connection"
/>

2. As you see, RAK4260 has joined with TTN successfully. The default join mode is OTAA, and the default frequency is EU868. After resetting it, RAK4260 will join automatically because the dev_eui, app_eui, and app_key have been configured in the source code.

:::tip Note:
:pencil: You can modify the dev_eui, app_eui, and the app_key as you want. You can find it in the following source [**code**](https://github.com/RAKWireless/RAK4260-LoRaNode-demo/blob/master/APPS_ENDDEVICE_DEMO1/src/config/conf_app.h)
:::

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/otaa-param.png"
  width="100%"
  figure-number="2"
  caption="Device EUI , Application EUI and Application Key"
/>

3. In order for you to send the data from the RAK4260 to the TTN successfully, choose the option 2 then press Enter. The following figure below shows the data received in the TTN.


<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/data-received-ttn.jpg"
  width="100%"
  figure-number="3"
  caption="Data received in the TTN"
/>

