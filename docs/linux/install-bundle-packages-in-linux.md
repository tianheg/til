---
title: install-bundle-packages-in-linux
date: 2021-05-01 10:19:14
permalink: /pages/10880a/
categories:
  - linux
tags:
---
# Install `.bundle` Packages In Linux

[reference](https://askubuntu.com/a/521205)

First be warned, installing files from outside of Ubuntu repository may compromise the system. VMware is probably safe, but it still should be mentioned.

1. You need to change permission of the file to make it executable:

```sh
chmod a+x VMware-Player-6.0.3-1895310.x86_64.bundle
```

2. Start the file. You will most probably need root privileges to install VMWare, but that is not always the case. So in this case:

```sh
sudo ./VMware-Player-6.0.3-1895310.x86_64.bundle
```
