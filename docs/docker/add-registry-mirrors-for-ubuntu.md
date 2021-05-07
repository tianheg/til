---
title: add-registry-mirrors-for-ubuntu
date: 2021-05-01 10:19:14
permalink: /pages/e4c1f1/
categories:
  - docker
tags:
---
# Add Registry Mirrors For Ubuntu

Docker > 1.10.0

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["url"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

source: from Aliyun
