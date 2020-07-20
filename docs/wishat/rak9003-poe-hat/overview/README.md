---
static_root: /assets/images/wishat/rak9003-poe-hat/datasheet/
rak_img: /assets/images/wishat/rak9003-poe-hat/datasheet/rak9003-poe-hat.png
rak_grp: wishat
prev: false
next: false
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?q=rak4200&i=projects
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:support@rakwireless.com
    resources:
      - name: Datasheet
        href: /wishat/rak9003-poe-hat/datasheet/
      - name: User Manual
        href: /user-manual/
      - name: Deployment Guide
        href: /deployment-guide/
---

# RAK9003 PoE Hat

<rk-img
  :src="`${$frontmatter.static_root}/rak9003-poe-hat.png`"
  width="75%"
  caption="RAK9003 PoE HAT"
/>


## Product Description

The PoE HAT is an add-on board with Raspberry PI form factor which can be plugged into a Raspberry PI directly. The PoE HAT makes it possible to power the Raspberry Pi via a standard CAT 5 Ethernet cable.

The PoE HAT is designed to be compatible with the IEEE 802.3af/at Power-over-Ethernet (PoE), it is compatible with both PoE Mode A and Mode B. The PoE HAT signature and control circuit provides the PoE AT compatibility signature and power classification required by the Power Sourcing Equipment (PSE) before applying up to 30W power to the port. The PoE HAT is compatible with Class 0 to Class 4 equipment. The high efficiency DC/DC converter operates over a wide input voltage range and provides a regulated low ripple and low noise output. The DC/DC converter also has built-in overload and short-circuit output protection.


<rk-btn
  src="/wishat/rak9003-poe-hat/datasheet/"
  label="Get Started with RAK9003 PoE HAT"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />


## Product Features

- Raspberry Pi form factor with a 40pin compatible header (**Pi3 B, Pi4** compatible)
- Conforming to the IEEE 802.3af/at (mode A & mode B), **25W Max Load**.
- Contains physical layer power negotiation circuitry, compatible with **Class 0 to Class 4 equipment**.
- Wide operating voltage: **42V ~ 57V**.
- Output Current: **5V@5A**
- Output voltage ripple: **200mVPP.**
- High Efficiency: **83% (input 48V, 5V@5A).**
- High isolation: **1.5KV isolation** input to output.
- **Overcurrent / short-circuit** protection.
- **RoHS Compliant**.
- Operating Temperature: **-40 ℃ ～+85 ℃.**

<rk-btn
  src="https://store.rakwireless.com/products/rak9003-poe-hat"
  label="Buy a RAK9003 PoE HAT"
  _blank
/>