---
title: install-go-on-ubuntu
date: 2021-05-01 10:19:14
permalink: /pages/0aa37f/
categories:
  - go
tags:
---
# Install Go On Ubuntu

```bash
wget https://golang.org/dl/go1.16.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.16.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go version
```

[source](https://golang.org/dl/)
