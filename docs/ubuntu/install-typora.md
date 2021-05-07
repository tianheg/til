---
title: install-typora
date: 2021-05-01 10:19:14
permalink: /pages/3746b3/
categories:
  - ubuntu
tags:
---
# Install Typora

for Debian/Ubuntu:

```sh
# or use
# sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BA300B7755AFCFAE
$ wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -

# add Typora's repository
$ sudo add-apt-repository 'deb https://typora.io/linux ./'
$ sudo apt-get update

# install typora
$ sudo apt-get install typora
```

## Upgrade Typora

After installing Typora, the `typora` package will be managed by `apt-get`, so when your system updates installed packages, or you execute `apt-get upgrade`, Typora will be updated to latest version.

```sh
# upgrade all packages include Typora
$ sudo apt-get upgrade
```
