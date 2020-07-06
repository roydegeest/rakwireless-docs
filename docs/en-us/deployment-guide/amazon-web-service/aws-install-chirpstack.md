---
prev: /en-us/deployment-guide/amazon-web-service/#amazon-web-service
next: install-the-gateway-bridge
---
# Installing Chirpstack
It is assumed that you have a running Ubuntu on an AWS EC2 instance and you are able to access it via an SSH terminal from the previous section.

It is always a good idea to make an update and upgrade of your packages. In order to do so run the following commands in the terminal:

```sh
sudo apt update
```
```sh
sudo apt upgrade
```

1. After the procedure is completed, we are going to install ChirpStack and its dependencies. To do this first we need to install Git with the command:

```sh
sudo apt install git
```

2. Next, we **clone** the **RAKwireless Ubuntu** ChirpStack repository:

```sh
git clone https://github.com/RAKWireless/ChirpStack_on_Ubuntu.git
```

3. After the cloning is complete, open the newly created folder with the command:

```sh
cd install_ChirpStack_on_ubuntu
```

4. Run the installation script:

```sh
sudo ./install.sh
```

5. After the installation is completed, check if all went well by executing these commands:

```sh
sudo journalctl -f -n 100 -u lora-app-server
```
```sh
sudo journalctl -f -n 100 -u ChirpStack
```

6. You should see no errors as in Figure 1. Make sure you interrupt the output of the commands above with the key combination “Ctrl+z” so you can continue with the configuration process.

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/chirpstack-journal.jpg"
  width="100%"
  figure-number="1"
  caption="ChirpStack Journal Control Output (no errors)"
/>


In case you want to use the Semtech Packet Forwarder to connect your Gateway to the LoRa Network Server proceed [here](install-the-gateway-bridge). If you are going to use the MQTT Bridge instead proceed directly [here](configure-aws-security)
