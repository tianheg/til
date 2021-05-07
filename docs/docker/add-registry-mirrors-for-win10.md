---
title: add-registry-mirrors-for-win10
date: 2021-05-01 10:19:14
permalink: /pages/fc13a0/
categories:
  - docker
tags:
  - 
---
# Add Registry Mirrors For Win10

**1. Install Docker for Windows**

from <https://hub.docker.com/editions/community/docker-ce-desktop-windows/>, installation manuals [here](https://docs.docker.com/docker-for-windows/install/).

**2. Add Aliyun Mirror Accelerator**

1. Open Docker Desktop
2. Click `Settings`
3. Click `Docker Engine`
4. Add url to `registry-mirrors`, like this: `"registry-mirrors": ["url"],`

[阿里云加速器 (点击管理控制台 \-> 登录账号 \-> 右侧镜像中心 \-> 镜像加速器 \-> 复制地址)](https://www.aliyun.com/product/acr?source=5176.11533457&userCode=8lx5zmtu)

[网易云加速器](https://www.163yun.com/help/documents/56918246390157312)：`https://hub-mirror.c.163.com`

[百度云加速器](https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A8)：`https://mirror.baidubce.com`

由于镜像服务可能出现宕机，建议同时配置多个镜像。各个镜像站测试结果请到 docker-practice/docker-registry-cn-mirror-test 查看。
