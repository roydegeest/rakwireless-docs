---
next: configure-your-gateway
---

# Amazon Web Service Security

By default, all inbound traffic to an AWS Instance is blocked, only port 22 (SSH) is open. You need to add a set of rules in order for the Gateway and LoRa® Network Server to be able to communicate:

* The Semtech Packet Forwarder needs **UDP port 1700;**
* MQTT Bridge (unsecured) needs **TCP port 1883**;
* MQTT Bridge (secured) needs **TCP port 8883**; 
* Chirpstack Web Ui needs **TCP port 8080**.

1. Open the Security Groups tab in the AWS Dashboard:

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/aws-sec-group.jpg"
  width="100%"
  figure-number="1"
  caption="AWS Security Groups"
/>

2. Select your desired Security Group (**Ubuntu Instance**). If you have multiple instances you can use the date and time of creation of the group as a guide to which is the one you want. Click the “**Action**” button and from the drop-down menu select **Edit Inbound Rules**:

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/inbound-rules.jpg"
  width="100%"
  figure-number="2"
  caption="Security Group Inbound Rules"
/>

3. In the opened window, press the “**Add Rule**” button and add all the 4 rules mentioned before.

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/add-inbound-rules.jpg"
  width="100%"
  figure-number="3"
  caption="Adding Inbound Rules"
/>

:::tip 📝 NOTE
 It is a good practice to name them in accordance with what each of them represents.
:::

4. Make sure to **Save** with the button in the lower right corner.

5. Finally check if the rules you created are working by entering your instance Public IP address using port 8080 in a browser window. You should see the Login page of the Chirpstack Web UI (for example `3.120.237.38:8080` as in the image below).

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/chirpstack-login.jpg"
  width="100%"
  figure-number="4"
  caption="Chirpstack Login Page"
/>

:::tip 📝 NOTE
 The log-in credentials are provided below. Additionally, there are profiles created in the RAKwireless Chirpstack installation, so you do not need to make those yourself and you can directly proceed to adding your Gateway.
* **Username**: admin
* **Password**: admin
:::

