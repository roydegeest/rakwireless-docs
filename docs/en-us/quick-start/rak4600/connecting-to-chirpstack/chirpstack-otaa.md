---
static_root: /assets/images/quick-start-guide/rak4200/5. connecting-to-chirpstack/otaa
next: chirpstack-abp
---
# OTAA Mode

1. If you select “**device_profile_otaa**”, it means you want to join ChirpStack in **OTAA mode**.

<rk-img
  :src="`${$frontmatter.static_root}/o1o2cdekg9oyx8nojvcl.png`"
  width="100%"
  figure-number="1"
  caption="Chirpstack OTAA Activation"
/>

2. Click “**CREATE DEVICE**” then generate the application key in this page. You can write it by yourself or generate it automatically by clicking the following icon and press “**SET DEVICE-KEYS**”.

<rk-img
  :src="`${$frontmatter.static_root}/b7nijxtl27bnr6mtgn6u.png`"
  width="100%"
  figure-number="2"
  caption="Chirpstack OTAA Set Device Keys"
/>

3. Set the **Device EUI** for the RAK4600 LPWAN Evaluation Board using the "**dev_eui**" same with the image below:

<rk-img
  :src="`${$frontmatter.static_root}/vlakwnyaoitygjhhn0hx.png`"
  width="100%"
  figure-number="3"
  caption="Chirpstack OTAA Set Device EUI"
/>

4. Set the **Application Key** for the RAK4600 LPWAN Evaluation Board using the "**app_key**" same with the image below:
<rk-img
  :src="`${$frontmatter.static_root}/gomyqs6fsi4limpvngbp.jpg`"
  width="100%"
  figure-number="4"
  caption="Chirpstack OTAA Set Application Key"
/>
::: tip 📝 NOTE:
 The Application EUI which will be set into RAK4600 LPWAN Evaluation Board as “app_eui” is not necessary for ChirpStack, and you can set it to any value with a correct format.
:::

5. Configure RAK4600 LPWAN Evaluation Board by using the available AT Commands found in this [section](configuring-using-at-commands). Connect your RAK4600 LPWAN Evaluation Board in your Windows Machine.

6. Power it **ON** and open **RAK Serial Port Tool** on your PC as instructed [here](interfacing).

::: tip 📝 NOTE:
 The default join mode is **OTAA**, the default class is **Class A** and the default region is **EU868**.
:::

7. If the **join mode** is not in OTAA, just set the LoRa® join mode to **OTAA** as follows:
```
at+set_config=lora:join_mode:0
```
<rk-img
  :src="`${$frontmatter.static_root}/mrydatc2hlwrxiyjpoqw.jpg`"
  width="60%"
  figure-number="5"
  caption="Chirpstack OTAA Join Mode via RAK Serial Port Tool"
/>

8. Set the LoRa® class to **Class A**:
```
at+set_config-lora:class:0
```
<rk-img
  :src="`${$frontmatter.static_root}/edffrutqfohfxvhz0su8.jpg`"
  width="60%"
  figure-number="6"
  caption="Chirpstack OTAA Set Class via RAK Serial Port Tool"
/>

9. Set the frequency/region to **EU868**:
```
at+set_config=lora:region:EU868
```
<rk-img
  :src="`${$frontmatter.static_root}/evudoedib3ovd9ye98gy.jpg`"
  width="60%"
  figure-number="7"
  caption="Chirpstack OTAA Set Region/Frequency via RAK Serial Port Tool"
/>

10. Set the **Device EUI**:
```
at+set_config=lora:dev_eui:XXXX
```
<rk-img
  :src="`${$frontmatter.static_root}/vsbevdit52xkqq0ocn5n.jpg`"
  width="60%"
  figure-number="8"
  caption="Chirpstack OTAA Set Device EUI via RAK Serial Port Tool"
/>



11. Set the **Application EUI**:
```
at+set_config=lora:app_eui:XXXX
```
<rk-img
  :src="`${$frontmatter.static_root}/yzqpmzjhqj58akm7xqcm.jpg`"
  width="60%"
  figure-number="9"
  caption="Chirpstack OTAA Set Application EUI via RAK Serial Port Tool"
/>

12. Set the **Application Key**:
```
at+set_config=lora:app_key:XXXX
```
<rk-img
  :src="`${$frontmatter.static_root}/uf6hawlomc92hhp2dlbl.jpg`"
  width="60%"
  figure-number="10"
  caption="Chirpstack OTAA Set Application Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
 After configuring all parameters, you need to reset RAK4600 LPWAN Evaluation Board to save the parameters.
:::

13. After resetting, start to join:
```
at+join
```
<rk-img
  :src="`${$frontmatter.static_root}/kp0hhztd0d1txr0xlsnd.jpg`"
  width="60%"
  figure-number="11"
  caption="Chirpstack OTAA Join via RAK Serial Port Tool"
/>


14. You can then see the **JoinRequest** and **JoinAccept** on ChirpStack page:
<rk-img
  :src="`${$frontmatter.static_root}/szgnpputwklp26s1epwd.png`"
  width="100%"
  figure-number="12"
  caption=" Chirpstack OTAA JoinRequest and JoinAccept"
/>

15. Let’s try to send a data from RAK4600 LPWAN Evaluation Board to ChirpStack:
```
at+send=lora:2:1234567890
```
<rk-img
  :src="`${$frontmatter.static_root}/sy4nezodryajjldti9ki.jpg`"
  width="60%"
  figure-number="13"
  caption="Chirpstack OTAA Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the message on ChirpStack page:
<rk-img
  :src="`${$frontmatter.static_root}/y8olaqg8ywggopiglkdv.png`"
  width="100%"
  figure-number="14"
  caption="Chirpstack Data Received Preview"
/>

OK, that’s all about “Join in OTAA Mode” with ChirpStack.
