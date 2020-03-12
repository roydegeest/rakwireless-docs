---
title: Accessing the Internet
---


# Accessing the Internet
Assuming you have successfully logged into your LoRaWAN® Gateway using SSH, enter the following command in the command line:
```
sudo gateway-config
```

You will now then see a page like the following picture below

<Cimg src='rak7246/config-options.png' width='100%' figure_number = "1" caption="Configuration Options for the Gateway"/>

1. **Set pi password** - used to set/change the password of the LoRaWAN® Gateway.
2. **Set up RAK Gateway LoRa® Concentrator** - used to configure the frequency, which the LoRaWAN® Gateway will operate on, and the LoRaWAN® Server which the LoRaWAN® Gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
4. **Edit packet-forwarder config**- used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.

## Connect through Wi-Fi
If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi Zero W by choosing "**5 Configure WIFI**". By default, the RAK7246G LoRaWAN® Developer Gateway works in Wi-Fi AP Mode. In order for the Gateway to connect to the router, it must work in Wi-Fi Client Mode.



There are 4 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - the LoRaWAN® Gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the LoRaWAN® Gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

## Test