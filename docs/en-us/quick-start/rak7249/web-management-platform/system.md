## System

### 1. System

This is the section where you configure general device parameters.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/system-tab.png"
  width="100%"
  figure-number="38"
  caption="System Tab"
/>

#### General Settings
The system time is displayed here. Additionally, you can edit the Host Name and select the Time zone. Another way to get the correct time is to use Timing Synchronization. You can Enable NTP client mode, enable NTP server and provide server candidate URLs.

:::tip Note
:pencil: Time Synchronization tab is displayed in all System sub-menus.
:::

#### Logging
In case you want to keep a log of system events you can configure how this is done here. You can set the Buffer size, provide the IP Address and port of an External log server, and set the Log Level.

#### Language
By default, this is in Auto (English), however you can choose from several options including German, Spanish, Russian, etc.

### 2. Administration

This is where you change the administration password of the device.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/admin-tab.png"
  width="100%"
  figure-number="39"
  caption="Administration Tab"
/>

### 3. License

This is the status of your license. You can see the Type, Number of Supported Nodes, Expiration date, and the Number of External Gateways Supported. There is a field to enter the License data in case you are upgrading.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/license-tab.png"
  width="100%"
  figure-number="40"
  caption="License Tab"
/>

### 4. Backup / Flash Firmware

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/backup.png"
  width="100%"
  figure-number="41"
  caption="Backup, reset and firmware update"
/>

- **Generate archive**: Downloads an archive of the current configuration
- **Perform reset**: Resets the Gateway to the default settings
- **Restore**: You can upload a previously generated archive to restore the configuration settings at the time of its making
- **Flash new firmware**: Update the firmware by flashing a bin file. Use the button to select the location of the new firmware file and the blue button to initiate the flashing process. There is a tick box to toggle the option of keeping the current settings of the gateway

:::tip Note
:pencil: The **Keep Settings** check box is selected by default, as unchecking it will results in having a Gateway with stock settings after the firmware update.
:::

### 5. Reboot

Reboots the gateway. All unsaved changes will be discarded. This is not a reset in any way and only power cycles the device. All configuration settings will be left intact.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/reboot.png"
  width="100%"
  figure-number="42"
  caption="System reboot"
/>

### 6. File Browser

 This gives you access to the files in the **root** partition.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/3.web management platform/file-browser.png"
  width="100%"
  figure-number="43"
  caption="File Browser"
/>