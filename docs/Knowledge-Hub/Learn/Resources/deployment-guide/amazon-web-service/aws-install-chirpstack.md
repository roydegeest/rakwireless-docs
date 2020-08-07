---
prev: /Knowledge-Hub/Learn/Resources/deployment-guide/amazon-web-service/
next: install-the-gateway-bridge
---
# Installing Chirpstack

It is always a good idea to make an update and upgrade of your packages. In order to do so run the following commands in the terminal:

```sh
sudo apt update
```
```sh
sudo apt upgrade
```

1. After the procedure is completed, install ChirpStack and its dependencies. To do this, first we need to install Git with the command:

```sh
sudo apt install git
```

2. Next, we **clone** the **RAKwireless Ubuntu** ChirpStack repository:

```sh
git clone https://github.com/RAKWireless/ChirpStack_on_Ubuntu
```

3. After the cloning is complete, open the newly created folder with the command:

```sh
cd ChirpStack_on_ubuntu
```

4. Run the installation script:

```sh
sudo ./install.sh
```

5. After the installation is completed, check if all went well by executing these commands:

```sh
journalctl -u chirpstack-network-server -f -n 50
```
```sh
journalctl -u chirpstack-application-server -f -n 50
```

6. You should see no errors as in Figure 1. Make sure you interrupt the output of the commands above with the key combination “Ctrl+z” so you can continue with the configuration process.

<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/16.chirpstack-journal.png"
  width="100%"
  figure-number="1"
  caption="ChirpStack Journal Control Output (no errors)"
/>


In case you want to use the Semtech Packet Forwarder to connect your Gateway to the LoRa Network Server proceed [here](install-the-gateway-bridge). If you are going to use the MQTT Bridge instead proceed directly [here](configure-aws-security)

* Below is the text form of the logs shown in Figure 1:

```sh
ubuntu@ip-172-31-33-125:~$ journalctl -u chirpstack-network-server -f -n 50
-- Logs begin at Wed 2020-06-17 11:59:21 UTC. --
Jun 18 10:20:29 ip-172-31-33-125 systemd[1]: Started ChirpStack Network Server.
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="starting ChirpStack Network Server" band=EU_863_870 docs="https://www.chirpstack.io/" net_id=000000 version=3.9.0
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: setting up storage module"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: setting up Redis client"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: connecting to PostgreSQL"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: applying PostgreSQL data migrations"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: PostgreSQL data migrations applied" count=0
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="gateway/mqtt: connecting to mqtt broker" server="tcp://localhost:1883"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="no geolocation-server configured"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="configuring join-server client" ca_cert= server="http://localhost:8003" tls_cert= tls_key=
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="backend/gateway: connected to mqtt server"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="gateway/mqtt: subscribing to gateway event topic" qos=0 topic=gateway/+/event/+
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="api: starting network-server api server" bind="0.0.0.0:8000" ca-cert= tls-cert= tls-key=
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="starting downlink device-queue scheduler"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="starting multicast scheduler"
^Z
[4]+  Stopped                 journalctl -u chirpstack-network-server -f -n 50
ubuntu@ip-172-31-33-125:~$ journalctl -u chirpstack-application-server -f -n 50
-- Logs begin at Wed 2020-06-17 11:59:21 UTC. --
Jun 18 10:20:29 ip-172-31-33-125 systemd[1]: Started ChirpStack Application Server.
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="starting ChirpStack Application Server" docs="https://www.chirpstack.io/" version=3.10.0
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: setting up storage package"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: setup metrics"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: setting up Redis client"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: connecting to PostgreSQL database"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: applying PostgreSQL data migrations"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: PostgreSQL data migrations applied" count=1
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="integration/mqtt: TLS config is empty"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="integration/mqtt: connecting to mqtt broker" server="tcp://localhost:1883"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="api/as: starting application-server api" bind="0.0.0.0:8001" ca_cert= tls_cert= tls_key=
```