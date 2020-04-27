# OTAA Mode

1. After connecting the device and choosing the appropriate COM Port and Baudrate, press the "**Reset button**" on your RAK5005 Baseboard Module and If everything works perfectly, you should see the following message below:

<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/rak-serial-port-tool-success.jpg"
  width="100%"
  figure-number="1"
  caption="Serial Port Tool Successful Connection"
/>

2. As you see, RAK4260 has joined with TTN successfully. The default join mode is OTAA, and the default frequency is EU868. After resetting it, RAK4260 will join automatically because the dev_eui, app_eui, and app_key have been configured in the source code.

```C
/* ABP Join Parameters */
#define DEMO_DEVICE_ADDRESS                     0xdeafface
#define DEMO_APPLICATION_SESSION_KEY            {0x41, 0x63, 0x74, 0x69, 0x6C, 0x69, 0x74, 0x79, 0x00, 0x04, 0xA3, 0x0B, 0x00, 0x04, 0xA3, 0x0B}
#define DEMO_NETWORK_SESSION_KEY                {0x61, 0x63, 0x74, 0x69, 0x6C, 0x69, 0x74, 0x79, 0x00, 0x04, 0xA3, 0x0B, 0x00, 0x04, 0xA3, 0x0B}

/* OTAA Join Parameters */
#define DEMO_DEVICE_EUI                         {0x35,0x34,0x35,0x31,0x65,0x37,0x53,0x00}
#define DEMO_APPLICATION_EUI                    {0x70,0xB3,0xD5,0x7E,0xD0,0x01,0xA1,0xE2}
#define DEMO_APPLICATION_KEY                    {0xD9,0x98,0x8A,0x5F,0x02,0xD8,0x0F,0xAB,0x8B,0xA5,0xF4,0x53,0xC4,0xA2,0xCD,0x2B}
```

:::tip 📝 NOTE
You can modify the dev_eui, app_eui, and the app_key as you want. You can find it in the following source [**code**](https://github.com/RAKWireless/RAK4260-LoRaNode-demo/blob/master/APPS_ENDDEVICE_DEMO1/src/config/conf_app.h)
:::

3. In order for you to send the data from the RAK4260 to the TTN successfully, choose the option 2 then press Enter. The following figure below shows the data received in the TTN.


<rk-img
  src="/assets/images/quick-start-guide/rak4260/5ttn/data-received-ttn.jpg"
  width="100%"
  figure-number="2"
  caption="Data received in the TTN"
/>

