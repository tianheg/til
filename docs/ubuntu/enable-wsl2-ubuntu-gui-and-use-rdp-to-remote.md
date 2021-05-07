---
title: enable-wsl2-ubuntu-gui-and-use-rdp-to-remote
date: 2021-05-01 10:19:14
permalink: /pages/8ba891/
categories:
  - ubuntu
tags:
  - 
---
# Enable WSL2 Ubuntu GUI And Use Rdp To Remote

We assume by now you already have WSL2 running and have at least Ubuntu installed. You can follow this guide to upgrade your Ubuntu to the latest 20.04 LTS distro if you haven’t already done so.

```sh
# 1
sudo apt update && sudo apt -y upgrade
# 2 install gui
sudo apt-get install -y kubuntu-desktop # select lightdm
# 3 install xrdp
sudo apt-get install xrdp
sudo cp /etc/xrdp/xrdp.ini /etc/xrdp/xrdp.ini.bak
sudo sed -i 's/3389/3390/g' /etc/xrdp/xrdp.ini
sudo sed -i 's/max_bpp=32/#max_bpp=32\nmax_bpp=128/g' /etc/xrdp/xrdp.ini
sudo sed -i 's/xserverbpp=24/#xserverbpp=24\nxserverbpp=128/g' /etc/xrdp/xrdp.ini
# 4 enable dbus, xrdp
sudo systemctl enable dbus
sudo /etc/init.d/dbus start
sudo /etc/init.d/xrdp start
# check xrdp status
sudo /etc/init.d/xrdp status
# 5 launch your Windows Remote Desktop Connection
wirte localhost:3390
```

But I can't access into the gui.

References:

1. <https://www.nextofwindows.com/how-to-enable-wsl2-ubuntu-gui-and-use-rdp-to-remote>
