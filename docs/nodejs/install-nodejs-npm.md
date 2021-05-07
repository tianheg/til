---
title: install-nodejs-npm
date: 2021-05-01 10:19:14
permalink: /pages/37deef/
categories:
  - nodejs
tags:
  - 
---
# Install Node.js And NPM

## Use `n`

```bash
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n lts

# make cache folder (if missing) and take ownership
sudo mkdir -p /usr/local/n
sudo chown -R $(whoami) /usr/local/n
# take ownership of Node.js install destination folders
sudo chown -R $(whoami) /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share
```

Error: When I exec these commands, just node no npm

```sh
$ sudo bash n lts
  installing : node-v14.16.1
       mkdir : /usr/local/n/versions/node/14.16.1
       fetch : https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/v14.16.1/node-v14.16.1-linux-x64.tar.xz
   installed : v14.16.1 (with npm 6.14.12)

Note: the node command changed location and the old location may be remembered in your current shell.
         old : /usr/bin/node
         new : /usr/local/bin/node
To reset the command location hash either start a new shell, or execute PATH="$PATH"
```

## Use Official deb file

[source](https://github.com/nodesource/distributions/blob/master/README.md#deb)

```bash
#Node.js v14.x
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install gcc g++ make #to build native addons
```

source:

- <https://github.com/tj/n>
