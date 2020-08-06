---
prev: aws-install-chirpstack
next: configure-aws-security
---

# Installing the Gateway Bridge 

In this section, an outline is provided on how to perform the installation. For detailed information, you can visit [Chirpstack.io](https://www.chirpstack.io/).

1. Run the following commands provided below to update the Ubuntu Repositories.

```sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 1CE2AFD36DBCCA00
```

```sh
sudo echo "deb https://artifacts.loraserver.io/packages/3.x/deb stable main" | sudo tee /etc/apt/sources.list.d/loraserver.list
```

```sh
sudo apt-get update
```

* This updates the Ubuntu Repositories.

2. Proceed with installing the Bridge itself:

```sh
sudo apt-get install lora-gateway-bridge
```

3. Start the Bridge service:

```sh
sudo systemctl start lora-gateway-bridge
```

4. Check if it is working as it should using the command as shown same with the snippet below:

```sh
journalctl -u lora-gateway-bridge -f -n 50
```
<rk-img
  src="/assets/images/deployment-guide/amazon-web-service/17.gateway-bridge-journal.png"
  width="100%"
  figure-number="1"
  caption="Gateway Bridge Journal Control Output (no errors)"
/>

```
ubuntu@ip-172-31-33-125:~$ journalctl -u chirpstack-gateway-bridge -f -n 50
-- Logs begin at Wed 2020-06-17 11:59:21 UTC. --
Jun 18 10:20:29 ip-172-31-33-125 systemd[1]: Started ChirpStack Gateway Bridge.
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-gateway-bridge[5596]: time="2020-06-18T10:20:29Z" level=info msg="starting ChirpStack Gateway Bridge" docs="https://www.chirpstack.io/gateway-bridge/" version=3.8.0
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-gateway-bridge[5596]: time="2020-06-18T10:20:29Z" level=info msg="backend/semtechudp: starting gateway udp listener" addr="0.0.0.0:1700"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-gateway-bridge[5596]: time="2020-06-18T10:20:29Z" level=info msg="integration/mqtt: connected to mqtt broker"
```
