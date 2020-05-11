---
next: configure-aws-security
---

# Installing the Gateway Bridge 

We are going to provide an outline on how to perform the installation. For detailed information you can visit [Chirpstack.io](https://www.chirpstack.io/).

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

* This will update the Ubuntu Repositories.

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
  src="/assets/images/deployment-guide/amazon-web-service/gateway-bridge-journal.jpg"
  width="100%"
  figure-number="1"
  caption="Gateway Bridge Journal Control Output (no errors)"
/>

