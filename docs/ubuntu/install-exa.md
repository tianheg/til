---
title: install-exa
date: 2021-05-01 10:19:14
permalink: /pages/0fac56/
categories:
  - ubuntu
tags:
  - 
---
# Install Exa

```bash
sudo apt install exa
```

Error:

```bash
$ exa
zsh: command not found: exa
```

Understand from [url](https://askubuntu.com/a/1290552):

The *groovy* name is 20.10, not 20.04 LTS. So [this package](https://packages.ubuntu.com/groovy/exa) is not available for 20.04 LTS.

But you can install it manually with:

```bash
wget http://archive.ubuntu.com/ubuntu/pool/universe/r/rust-exa/exa_0.9.0-4_amd64.deb
sudo apt-get install ./exa_0.9.0-4_amd64.deb
```

and test it via:

```bash
$ exa --version
exa v0.9.0
```

[source](https://the.exa.website/install/linux)
