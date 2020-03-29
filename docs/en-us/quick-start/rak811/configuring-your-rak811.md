---
type: page
title: Configuring your RAK811 LPWAN Evaluation Board
listed: true
slug: configuring-your-rak811-evaluation-board
---published

The purpose of this document is to demonstrate on how to configure the RAK811 LPWAN Evaluation Board thru the use of AT Commands via a **Serial Port Tool** running in your Windows PC. The list below shows the AT Commands available for use:

| \*\*AT Command\*\* | \*\*Description\*\* | 
| ---- | ---- | 
| at+help | This AT command can show all available AT commands of this module/product for you | 
| at+version | Get the current firmware version number. | 
| at+get\_config=device:status | Get all information about the device’s hardware components and their current status. | 
| at+set\_config=device:restart | After set, the device will restart. | 
| at+set\_config=device:boot | Lets the device work in boot mode | 
| at+run | Stop boot mode and run as normal. Only valid when the device works in boot mode. | 
| at+set\_config=device:sleep:\*\*X\*\* | After setting, the device will go to sleep mode or wake up immediately. • \*\*0\*\* - wake up • \*\*1\*\* - sleep | 
| at+set\_config=device:gpio:\*\*X\*\*:\*\*Y\*\* | Set a certain GPIO pin to high/low level. • \*\*X\*\* - the pin number of a certain GPIO on RAK811 module. • \*\*Y\*\* - \*\*0\*\*: low level, \*\*1\*\*: high level. | 
| at+get\_config=device:gpio:\*\*X\*\* | Get a certain GPIO’s level. • \*\*X\*\* -the pin number of the GPIO on RAK811 module. | 
| at+get\_config=device:adc:\*\*X\*\* | Get the ADC value. • \*\*X\*\* - the pin number of the ADC on RAK811 module. | 
| at+set\_config=device:iic:\*\*X\*\*:\*\*YY\*\*:\*\*ZZ\*\*:\*\*A AA\*\* | Read data from I2C or write a data to I2C. • \*\*X\*\* - \*\*0\*\*: read, \*\*1\*\*: write. • \*\*YY\*\* - device address, in HEX format. • \*\*ZZ\*\* - sensor’s register address, in HEX format. • \*\*AAA\*\* - if read, this parameter means the length you want to read. If write, this parameter means the data you want to write. It must be in HEX format too. | 
| at+set\_config=device:uart\_mode:\*\*X\*\*: \*\*Y\*\* | Set the UART work mode. Parameters • \*\*X\*\* - UART number on RAK811 module. • \*\*Y\*\* - \*\*1\*\*: Passthrough mode. \*\*Note:\*\* If you want to go back to configuration mode, enter `+++`in the serial port. | 
| at+set\_config=device:uart:\*\*X\*\*:\*\*Y\*\* | Set a certain UART’s Baud rate. • \*\*X -\*\* the UART number • \*\*Y -\*\* the Baud rate value. | 
| at+send=uart:\*\*X\*\*:\*\*YYY\*\* | Send data through UART. • \*\*X\*\* - the UART number of RAK811 module • \*\*YYY\*\* - the data you want to send through UART | 
| at+join | Start LoRa® Network join procedure. | 
| at+send=lora:\*\*X\*\*:\*\*YYY\*\* | Send a customized data. • \*\*X\*\* - LoRa® port • \*\*YYY\*\* - the data which you want to send. The limited length is 50 Bytes, and the data must be in HEX format. | 
| at+set\_config=lora:work\_mode:\*\*X\*\* | Set the work mode for LoRa®. • \*\*X\*\* - \*\*0\*\*: LoRaWAN®, \*\*1\*\*: LoRaP2P, \*\*2\*\*: Test Mode. | 
| at+set\_config=lora:join\_mode:\*\*X\*\* | Set the join mode for LoRaWAN®. • \*\*X\*\* - \*\*0\*\*: OTAA, \*\*1\*\*: ABP | 
| at+set\_config=lora:class:\*\*X\*\* | Set the class for LoRa®. • \*\*X\*\* - \*\*0\*\*: Class A, \*\*1\*\*: Class B, \*\*2\*\*: Class C | 
| at+set\_config=lora:region:\*\*XXX\*\* | Set the region for LoRa®. • \*\*XXX\*\* - one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923. | 
| at+set\_config=lora:confirm:\*\*X\*\* | Set the type of messages which will be sent out through LoRa®. • \*\*X\*\* - \*\*0\*\*: unconfirm, \*\*1\*\*: confirm | 
| at+set\_config=lora:dev\_eui:\*\*XXXX\*\* | Set the device EUI for OTAA. • \*\*XXXX\*\* - the device EUI. | 
| at+set\_config=lora:app\_eui:\*\*XXXX\*\* | Set the application EUI for OTAA. • \*\*XXXX\*\* - the application EUI. | 
| at+set\_config=lora:app\_key:\*\*XXXX\*\* | Set the application key for OTAA. • \*\*XXXX\*\* - the application key. | 
| at+set\_config=lora:dev\_addr:\*\*XXXX\*\* | Set the device address for ABP. • \*\*XXXX\*\* - the device address. | 
| at+set\_config=lora:apps\_key:\*\*XXXX\*\* | Set the application session key for ABP. • \*\*XXXX -\*\* the application session key. | 
| at+set\_config=lora:nwks\_key:\*\*XXXX\*\* | Set the network session key for ABP. • \*\*XXXX\*\* - the network session key. | 
| at+set\_config=lora:ch\_mask:\*\*X:Y\*\* | Set a certain channel on or off. • \*\*X -\*\* the channel number, and you can check which channel can be set before you set it. • \*\*Y\*\* - \*\*0\*\*: off, \*\*1\*\*: on | 
| at+set\_config=lora:adr:\*\*X\*\* | Open or close the ADR function of LoRa® Node. • \*\*X - 0\*\*: Close ADR; \*\*1\*\*: Open ADR. | 
| at+set\_config=lora:dr:\*\*X\*\* | Set the DR of LoRa® Node. • \*\*X\*\* - the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN® 1.0.2 specification. | 
| at+set\_config=lora:tx\_power:\*\*X\*\* | Set the TX power level. • \*\*X\*\* - The level of TX power. If you want to know the relationship between TX power level and dbm, please have a look at LoRaWAN® 1.0.2 region specification on this \[link\](https://github.com/RAKWireless/Update-File/blob/master/LoRaWANRegionalParametersv1.0.2.pdf). | 
| at+get\_config=lora:status | It will return all of the current information of LoRa®, except LoRa® channel. | 
| at+get\_config=lora:channel | It will return the state of all LoRa® channels, then you can see which channel is closed and which channel is open very clearly. | 
| at+set\_config=lorap2p:\*\*XXX\*\*:\*\*Y\*\*:\*\*Z\*\*:\*\*A\*\*:\*\*B\*\*: \*\*C\*\* | Set the parameters for LoRa® P2P mode. This AT command is valid when the work mode is ·LoRa® P2P. • \*\*XXX\*\* - Frequency in Hz. • \*\*Y\*\* - Spreading factor, \[6, 7, 8, 9, 10, 11, 12\]. • \*\*Z\*\* - Bandwidth, \*\*0\*\*: 125 kHz, \*\*1\*\*: 250 kHz, \*\*2\*\*: 500kHz. • \*\*A\*\* - Coding Rate, \*\*1\*\*: 4/5, \*\*2\*\*: 4/6, \*\*3\*\*: 4/7, \*\*4\*\*: 4/8. • \*\*B\*\* - Preamble Length, 5-65535. • \*\*C\*\* - Power in dbm, 5-20. | 
| at+send=lorap2p:\*\*XXX\*\* | Send data through LoRaP2P. This AT command is valid when it works in LoRaP2P mode. • \*\*XXX\*\* - Data in HEX | 


