---
title: generate-ssh-key
date: 2021-05-01 10:19:14
permalink: /pages/87e2ea/
categories:
  - ssh
tags:
---
# Generate SSH Key

```sh
ssh-keygen -t rsa -b 4096 -C "19855812775@163.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```
