# Docker

## Add Registry Mirrors For Ubuntu

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

## Add Registry Mirrors For Win10

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

## Configure Docker To Start On Boot

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

## Docker Pull EOF

error log:

```bash
Unable to find image 'algolia/docsearch-scraper:latest' locally
latest: Pulling from algolia/docsearch-scraper
f08d8e2a3ba1: Downloading [=>                                                 ]  560.3kB/26.7MB
3baa9cb2483b: Downloading [>                                                  ]     422B/35.36kB
94e5ff4c0b15: Download complete
1860925334f9: Download complete
......
docker: error pulling image configuration: Get https://production.cloudflare.docker.com/registry-v2/docker/registry/v2/blobs/sha256/25/2525d47820b9b2830cf42ca0dd4254ddd0d9f0a8f3eecf27df2b36f02d3e568f/data?verify=1613641483-Yr3Gy3gmkRLnxHeiMpLfmkef%2BHE%3D: EOF.
See 'docker run --help'.
```

Get advice from [here](https://stackoverflow.com/a/62763902):

This was mainly because of weak network. Configured the **docker daemon** to reduce the **tcp packets**

```bash
$ dockerd --max-concurrent-downloads <int>
```

here suggests the number of docker pull layers you want to download concurrently(default is 3)

**For me**:

I run the order again, it didn't display this error.

## Install Docker Compose On Ubuntu

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
# docker-compose version 1.28.6, build 5db8d86f
```

[source](https://docs.docker.com/compose/install/)

## Install Docker On Ubuntu

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
# for x86_64/amd64
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo docker run hello-world
```

[source](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

## Install Portainer.io

## MX

```sh
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

### Ubuntu

```sh
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

[source](https://documentation.portainer.io/v2.0/deploy/ceinstalldocker/)

## Manage Docker As A Non-root User

```bash
sudo groupadd docker
sudo usermod -aG docker $USER # sudo usermod -aG docker tianheg
newgrp docker
docker run hello-world
```

[source](https://docs.docker.com/engine/install/linux-postinstall/)

## Use Sysvinit manage docker

ref:

1. <https://github.com/kata-containers/documentation/blob/master/install/docker/debian-docker-install.md>
