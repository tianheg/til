---
title: configure-docker-to-start-on-boot
date: 2021-05-01 10:19:14
permalink: /pages/b6baa3/
categories:
  - docker
tags:
---
# Configure Docker To Start On Boot

[source](https://docs.docker.com/engine/install/linux-postinstall/#configure-docker-to-start-on-boot)

Most current Linux distributions (RHEL, CentOS, Fedora, Debian, Ubuntu 16.04 and higher) use `systemd` to manage which services start when the system boots. **On Debian and Ubuntu, the Docker service is configured to start on boot by default**. To automatically start Docker and Containerd on boot for other distros, use the commands below:

```sh
$ sudo systemctl enable docker.service
$ sudo systemctl enable containerd.service
```

To disable this behavior, use `disable` instead.

```sh
$ sudo systemctl dsiable docker.service
$ sudo systemctl disable containerd.service
```
