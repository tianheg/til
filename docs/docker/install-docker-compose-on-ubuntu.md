---
title: install-docker-compose-on-ubuntu
date: 2021-05-01 10:19:14
permalink: /pages/d19914/
categories:
  - docker
tags:
  - 
---
# Install Docker Compose On Ubuntu

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
# docker-compose version 1.28.6, build 5db8d86f
```

[source](https://docs.docker.com/compose/install/)
