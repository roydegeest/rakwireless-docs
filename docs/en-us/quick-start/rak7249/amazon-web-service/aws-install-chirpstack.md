---
next: install-the-gateway-bridge
---
# Chirpstack
It is always a good idea to make an update and upgrade of your packages. In order to do so, run the following commands in the terminal:

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
git clone https://github.com/RAKWireless/install_ChirpStack_on_ubuntu.git
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

6. You should see no errors same with the image provided below. Make sure you interrupt the output of the commands above with the key combination “**Ctrl+Z**” so you can continue with the configuration process.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/chirpstack-journal.jpg"
  width="100%"
  figure-number="1"
  caption="ChirpStack Journal Control Output (no errors)"
/>

