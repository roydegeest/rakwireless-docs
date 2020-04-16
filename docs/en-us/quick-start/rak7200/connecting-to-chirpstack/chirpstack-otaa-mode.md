---
static_root: /assets/images/quick-start-guide/rak7200/chirpstack-otaa-mode
---

# OTAA Mode

1. To join ChirpStack in OTAA mode, select “**DeviceProfile_OTAA**”.

<rk-img
  :src="`${$frontmatter.static_root}/kawrl7csak1rbgnaiz1z.png`"
  width="100%"
  figure-number="1"
  caption="Selecting OTAA Activation Mode in ChirpStack"
/>

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.

<rk-img
  :src="`${$frontmatter.static_root}/phw8fn5ram1ubek2lvy8.png`"
  width="100%"
  figure-number="2"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The Device EUI which was set in the previous section to your RAK7200 LPWAN Tracker as "dev_eui" is the same in the image highlighted below

<rk-img
  :src="`${$frontmatter.static_root}/alsltdv3wmn3p36miqza.png`"
  width="100%"
  figure-number="3"
  caption="Device EUI Code"
/>

- Same with the Application Key, which was set in the previous section as "app_key" is the same with the image highlighted

<rk-img
  :src="`${$frontmatter.static_root}/co3zrd6p0w04agsyl5jw.png`"
  width="100%"
  figure-number="4"
  caption="Application Key LoRaWAN®"
/>

::: tip 📝 NOTE
The Application EUI which will be set into RAK7200 LPWAN Tracker as “**app_eui**” is not needed for ChirpStack.
:::

4. Next, let’s **configure** RAK7200 by using **AT commands**. To do this, connect your RAK7200 to a PC, power it on and open **RAK Serial Port Tool** on your computer.

<rk-img
  :src="`${$frontmatter.static_root}/ah9sepdjjxtslo8od3ia.jpg`"
  width="60%"
  figure-number="5"
  caption="RAK Serial Port Tool"
/>

- Now, let us join our RAK811 using the OTAA activation mode.

5. If the join mode is not in OTAA, just set the LoRa® join mode to **OTAA** and LoRa® class to **Class A** by typing the AT commands shown in the picture below.

<rk-img
  :src="`${$frontmatter.static_root}/ivwhtrkjbeohwhwjykhl.jpg`"
  width="100%"
  figure-number="6"
  caption="Setting of LoRaWAN® mode and class"
/>

6. Type the following AT command to set your respective:**Frequency/Region , Device EUI, Application EUI and Application Key**:

<rk-img
  :src="`${$frontmatter.static_root}/p01bw0hgxxgk4rpm5g1z.jpg`"
  width="100%"
  figure-number="7"
  caption="Setting of Frequency and Device EUI"
/>

<rk-img
  :src="`${$frontmatter.static_root}/pphvpa2fnsvazlrsryiz.jpg`"
  width="100%"
  figure-number="8"
  caption="Setting of Application EUI and Key"
/>

7. Then, **join** in OTAA mode.

<rk-img
  :src="`${$frontmatter.static_root}/wmzhsi9rjkdkpykwdfyx.jpg`"
  width="60%"
  figure-number="9"
  caption="Joining in OTAA"
/>

- **Joined Successfully!**

8. You can view the "**JoinRequest**" and "**JoinAccept**" on ChirpStack page:

<rk-img
  :src="`${$frontmatter.static_root}/ee75imnp4eeilgyx15ju.png`"
  width="100%"
  figure-number="10"
  caption="Join Request of the Device in the ChirpStack"
/>
