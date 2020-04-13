# RUI ADC Read

```c
RUI_RETURN_STATUS rui_adc_get(RUI_GPIO_ST *rui_gpio, uint16_t* value);
```

| **@brief**  | This API is used to read the value of the ADC Pin                                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@return** | [RUI_RETURN_STATUS](https://doc.rakwireless.com/developer-tools/developer-tools/getting-started#rui_return_status)                                                                                 |
| **@param**  | uint8_t\* value: the value which is read from ADC.<br>[RUI_GPIO_ST](https://doc.rakwireless.com/developer-tools/developer-tools/rui-interface-general-format#rui_gpio_st) \*rui_gpio : GPIO struct |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, RAK5010 and RAK8212-M.                                                                                                                                          |
