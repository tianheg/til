---
title: install-portainer-io-on-ubuntu
date: 2021-05-01 10:19:14
permalink: /pages/9d9477/
categories:
  - docker
tags:
---
# Install Portainer.io On Ubuntu

```bash
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent
```

[source](https://documentation.portainer.io/v2.0/deploy/ceinstalldocker/)
