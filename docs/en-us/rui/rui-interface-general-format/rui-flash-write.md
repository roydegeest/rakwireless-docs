# RUI Flash Write

```c
RUI_RETURN_STATUS rui_flash_write(RUI_FLASH_MODE mode, uint8_t *str, uint8_t len);
```

| **@brief**  | This API is auto send data timeout callback by LoRa.                                                                                                                                                                         |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@return** | [RUI_RETURN_STATUS](https://doc.rakwireless.com/developer-tools/developer-tools/getting-started#rui_return_status)                                                                                                           |
| **@param**  | uint8_t \*str<br><br> uint8_t len: should less than 128 byte<br><br>[ RUI_FLASH_MODE](https://doc.rakwireless.com/developer-tools/developer-tools/rui-interface-general-format#rui_flash_mod) mode: user data or origin data |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, RAK5010 and RAK8212-M.                                                                                                                                                                    |
