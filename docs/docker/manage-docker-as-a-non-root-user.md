---
title: manage-docker-as-a-non-root-user
date: 2021-05-01 10:19:14
permalink: /pages/348061/
categories:
  - docker
tags:
---
# Manage Docker As A Non-root User

```bash
sudo groupadd docker
sudo usermod -aG docker $USER # sudo usermod -aG docker tianheg
newgrp docker
docker run hello-world
```

[source](https://docs.docker.com/engine/install/linux-postinstall/)
