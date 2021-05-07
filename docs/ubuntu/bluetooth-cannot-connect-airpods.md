---
title: bluetooth-cannot-connect-airpods
date: 2021-05-01 10:19:14
permalink: /pages/bf0885/
categories:
  - ubuntu
tags:
---
# Bluetooth Cannot Connect Airpods

```bash
sudo vim /etc/bluetooth/main.conf
# add `ControllerMode = dual`
sudo /etc/init.d/bluetooth restart
```

It works!

References:

1. <https://techwiser.com/fix-airpods-not-working-on-ubuntu/>
