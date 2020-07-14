---
prev: /wisnode/rak612/quickstart/connecting-to-ttn/ttn-abp.html
next: /wisnode/rak612/quickstart/at-commands.html
---

# Key Functions Customizing

This document walks through the step-by-step discussion on how to customize each key functions of the RAK612 LPWAN Button. For you to enable the message customization, you must at least have the 2.0.2.1.2 firmware version. 

:::tip 📝 NOTE
If your RAK612 LPWAN Button's firmware version is lower than the least version set, please download the latest [RAK612 LPWAN Button Firmware](https://downloads.rakwireless.com/LoRa/RAK612-LoRaButton/Firmware/) and proceed to the [Upgrading the Firmware](upgrading-the-firmware.html) section.
:::

## Defaults

Listed below are the default messages send by the RAK612 LPWAN Button whenever each key is pressed:

| Key   | Message |
| ----- | ------- |
| Key 1 | "Key 1" |
| Key 2 | "Key 2" |
| Key 3 | "Key 3" |
| Key 4 | "Key 4" |


## Customizing

To fully customize the messages sent by the RAK612 LPWAN Button in each key pressed, we must configure it using the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip) with the AT Command below:

```
at+key_config=<key>,<frame_port>,<message>
```

- **key** - The key you want to customize in your  RAK612 LPWAN Button
- **frame_port** - the port you want to send the customized message
- **message** - your customized message in replacement of your default message in every key pressed.

1. **Connect** your RAK612 LPWAN Button to your Windows PC using a Micro USB cable. Follow the steps in the [Interfacing with RAK612 LPWAN Button](interfacing-with-rak612.html) document if this is the first time you are connecting the device into your WIndows PC. 

2. Using the same RAK Serial Port Tool used in the previous step and the AT Command syntax, let us try configuring your RAK612 LPWAN Button keys. As an example, try sending the AT Command same with the image shown below:

```
at+key_config=2,37,Hello Mark Angelo!
```

<rk-img
  src="/assets/images/quick-start-guide/rak612/key-function-customizing/at-command.png"
  width="60%"
  figure-number="1"
  caption="Configuring Each button"
/>

* You should be able to change the message to "**Hello Mark Angelo!**" whenever you press the key "**Key 2**". Congratulations, you have just customized your RAK612 LPWAN Button keys. Go try the other keys with your desired message!

