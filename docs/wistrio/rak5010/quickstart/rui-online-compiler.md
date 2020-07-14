---
static_root: /assets/images/quick-start-guide/rak5010/9.rui-online-compiler
prev: /wistrio/rak5010/quickstart/upgrading-firmware.html
next: false
---

# RUI Online Compiler

This document is a detailed walk through on how to use the RUI Online Compiler recently release by RAKwireless. 

## Account Creation and Log-in Interface

::: tip 📝 NOTE:
 To avoid errors in the firmware compiling using the RUI Online Compiler, it is best advised to use Google Chrome as your Web Browser as this was the browser our technical team used upon testing. If you have not installed the Google Chrome browser, kindly download and install it from **[here](https://www.google.com/chrome/)**.
:::

1. Using your recently installed Google Chrome Web Browser, open the link, [RUI Online Compiler](http://47.112.137.11:12090/#/user/login) and you should see the log-in interface same as in the image below.

<rk-img
  :src="`${$frontmatter.static_root}/b1osq3zcjjisbeqhbw5v.png`"
  width="60%"
  figure-number="1"
  caption="RUI Online Compiler Log-in Window"
/>

2. If this is your first time doing this, kindly create an account by clicking through "**Create an account**" button.

3. A new window pops-up same as in the image below. You are asked to input your **e-mail address**,your chosen **password** and your **verification code** by clicking the "**Get Verification Code**" button.

<rk-img
  :src="`${$frontmatter.static_root}/braswhitebuh33oaz3ns.png`"
  width="60%"
  figure-number="2"
  caption="RUI Online Compiler Sign-up Window"
/>

::: tip 📝 NOTE:
 Go to your e-mail and check the verification sent when you clicked the "**Get Verification Code**" button. Note that you are only given **120 seconds** to have the verification attached in the **Create Account** window.
:::

4. Once the three information, **e-mail address**, **password** and **verification code** are supplied, click the "**Create an account**" button in the bottom. Once creating an account is successful, you are then asked to log-on your credentials in the link attached in **Step 1**.

## Selecting and uploading

After your successful sign-up and log-in done in the previous section, you should see the following page below:

<rk-img
  :src="`${$frontmatter.static_root}/sc05a2h4fxqgiuit8ltj.png`"
  width="100%"
  figure-number="3"
  caption="RUI Online Compiler Dashboard"
/>

### Product Model Selection

1. Select the **Core Module** which you want to do customization based on.

::: tip 📝 NOTE:
 As of now, we only supply **RAK8212**, **RAK5010**, **RAK4600**, **RAK4400**, **RAK811-L**, **RAK811-H**, and **RAK4200** modules. Our team is still in the processing of having most of our devices be programmable so watch for further updates.
:::

### Choosing the Upload File

2. Click "**Select file to upload**” button to choose the **.zip file** which includes all source code of your own customized Application.

<rk-img
  :src="`${$frontmatter.static_root}/berjqqxwurxifkoikdrb.png`"
  width="100%"
  figure-number="4"
  caption="Choosing your Customized .zip file in the RUI Online Compiler"
/>

Please note that, this .zip file can be made as the following pictures show as an example:

<rk-img
  :src="`${$frontmatter.static_root}/bulgldidt55ohueksrcg.png`"
  width="100%"
  figure-number="5"
  caption="Sample files in the Customized Application .zip File"
/>

3. After choosing the correct .zip file on your chosen directory, press "**Open**" and proceed to the next section.

### File Uploading

4. After choosing the corresponding .zip file from the previous section, press the "**Upload**" button as shown in the image below to begin the uploading process.

<rk-img
  :src="`${$frontmatter.static_root}/dmxy8pph3jd6lzwh3l1z.png`"
  width="100%"
  figure-number="6"
  caption="RUI Online Compiler Uploading"
/>

5. A corresponding "**Upload Success**" notification then pops-up in your window once the uploading of the .zip file is successful same as with the image below:

<rk-img
  :src="`${$frontmatter.static_root}/tjkmvecfptby0ilwwqkc.png`"
  width="100%"
  figure-number="7"
  caption="RUI Online Compiler Uploading Success"
/>

### Compiling

6. Once uploading is done, you can now start compiling your customized application by clicking the "**Compile**" button same as with the image below:

<rk-img
  :src="`${$frontmatter.static_root}/hyrhkcj18gz4tgccqwko.png`"
  width="100%"
  figure-number="8"
  caption="RUI Online Compiler Compiling"
/>

Corresponding logs also can be seen in the "**Compile log output**" monitor same with the image shown below:

<rk-img
  :src="`${$frontmatter.static_root}/hxjpzr1sv5nw0a5ipuhi.png`"
  width="100%"
  figure-number="9"
  caption="RUI Online Compiler Compiling Logs"
/>

7. After compiling successfully, a new **.zip file** which includes two files, one is "**compile log file**", the other is the "**final customized firmware**" same with the image shown below:

<rk-img
  :src="`${$frontmatter.static_root}/eckuj9mipbwefieupcpz.png`"
  width="100%"
  figure-number="10"
  caption=" Final Customized Firmware Auto-downloaded"
/>

::: tip 📝 NOTE:
 For failed compiling instances, the .zip file automatically downloaded shall only contain "**compile log file**" which would contain the errors occurred upon compiling.
:::

::: tip 📝 NOTE:
 For failed auto-downloading of your Final Customized Firmware instances, kindly **turn-off all third party download managers** (i.e. Internet Download Manager) and redo the Compiling process.
:::

8. For the successful compiling, a sample image is shown below with the .zip file containing both "**compile log file**", and the "**final customized firmware**" .bin file.

<rk-img
  :src="`${$frontmatter.static_root}/aca52o0ukf3kzcoriatp.png`"
  width="60%"
  figure-number="11"
  caption="Final Customized Firmware sample File"
/>

9. The **newly compiled .bin file** will then be burned into your device by following the steps in the [Upgrading the Firmware](upgrading-firmware) document.
