---
title: Connecting to ResIOT
---

# Connecting to ResIOT
[ResIOT](https://www.resiot.io/en/) is a platform for LoRaWAN®/LPWAN Networks and IoT Projects for Smart City or Industry 4.0. Cost-effective High availability and scalability. Open ResIOT's webpage to sign-up using you e-mail.

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_home.png" width="100%" figure_number = "1" caption="ResIOT Home Page"/>

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_signup.png" width="100%" figure_number = "2" caption="ResIOT Sign-up Page"/>

* After clicking the "**Sign up free**" button, a new window shows up in which you will fill in the necessary information to complete your registration. Afterwhich, click the "SIGN UP FREE" button at the bottom of the webpage.

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_registration.png" width="70%" figure_number = "3" caption="ResIOT Registration Credentials"/>

* Once registration is done, a new page will be shown in your screen with you username and a link which will be is your ResIOT application site.

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_application_site.png" width="100%" figure_number = "4" caption="ResIOT Application Site Link"/>

* Upon clicking the application site link, you will see the login page:

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_application_login.png" width="100%" figure_number = "5" caption="ResIOT Application Log-in Page"/>

* Upon successful log-in, you shall then be asked to choose your LoRaWAN Frequency Plan. For this example, choose **EU868 Region.**

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_freq_plan.png" width="100%" figure_number = "6" caption= "ResIOT LoRaWAN Frequency Plan"/>

* We will now then setup your RAK7246G - LoRaWAN® Developer Gateway by clicking the "**Step 1: Add Gateway Wizard**".

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_add_gateway.png" width="100%" figure_number = "7" caption=" Adding your Gateway in ResIOT"/>

* A list of LoRaWAN Gateways are then shown. Choose the item "**IMST iC880a + Raspberry Pi**".
<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_choose_gateway.png" width="100%" figure_number = "8" caption="Choosing IMST iC880a + Raspberry Pi for your RAK7246G - LoRaWAN® Developer Gateway"/>

* Afterwhich, a new page will show up asking you to fill in the necessary credentials.
<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_credentials_gateway.png" width="100%" figure_number = "9" caption="Adding Credentials in Gateway Setup"/>

1. **Name:** You can fill in any content based on your preference
2. **Mac Address:** This is the Wi-Fi MAC Address of your RAK7246G - LoRaWAN® Developer Gateway. You can get the Mac Address by typing `ifconfig` command in the terminal you accessed through SSH.
<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_ifconfig.png" width="80%" figure_number = "10" caption="Getting the Wi-Fi MAC Address of the RAK7246G - LoRaWAN® Developer Gateway"/>

3. **Gateway EUI/ID:** This is the Gateway ID which you can get in the [Configuring your Gateway](./configuring-the-gateway.md) section.
<Cimg src="/assets/images/quick-start-guide/rak7246/gateway_id.png" width="100%" figure_number = "11" caption="Getting the Gateway ID of the RAK7246G - LoRaWAN® Developer Gateway"/>

* After getting all the necessary credentials, fill in the data ang click "**Save Config**" button.
<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_save_config.png" width="100%" figure_number = "12" caption="Saving the Gateway Configuration for the RAK7246G in ResIOT"/>

* Login back to the RAK7246G - LoRaWAN® Developer Gateway and choose "**4 Edit packet-forwarder config**" through SSH.
<Cimg src="/assets/images/quick-start-guide/rak7246/edit_packet_forwarder.png" width="80%" figure_number = "13" caption=" Editing the packet-forwarder configuration through SSH"/>

* It will then open the "**global_conf.json**" file. Edit it to update the LoRaWAN configuration by modifying the content with the data from the ResIOT website same with the image shown below:

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_data_config.png" width="100%" figure_number = "14" caption="ResIOT Data to be inserted in the LoRaWAN Configuration"/>

* Modify the contents of the Json File with the data from the image shown in the previous step.

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_json.png" width="100%" figure_number = "15" caption=" The Json Configuration File to be Modified"/>

* Click the hotkey "Ctrl + X" to stop editing the Json File and Press "Y" to save the modifications.
* If you could see a Green Check Mark :heavy_check_mark: same with the image shown below, that means that you have successfully connected your RAK7246G - LoRaWAN® Developer Gateway with ResIOT. Congratulations! :tada:

<Cimg src="/assets/images/quick-start-guide/rak7246/resiot_success.png" width="100%" figure_number = "16" caption=" ResIOT Connection Successful"/>

