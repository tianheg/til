---
title: Install Node.js, NPM and Yarn
---
# Install Node.js, NPM and Yarn

## Use Official deb file

[source](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions)

```bash
#Node.js LTS (v14.x)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install gcc g++ make #to build native addons
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
npm install -g n # https://github.com/tj/n
```

## nvm

```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
$ vim ~/.zshrc

添加以下配置：
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

### 使用命令

```sh
$ nvm ls-remote # 列出所有支持的 Node.js 版本
$ nvm ls # 列出本地已安装的 Node.js 版本
$ nvm install 11.5.0 # 安装指定的 Node.js 版本
$ nvm alias default 11 # 设置默认使用的版本
```

## nrm

使用 [nrm](https://github.com/Pana/nrm) 可以让我们来切换不同的 npm 源而不用单独安装 cnpm 之类的库

### 安装 nrm

```sh
$ npm install -g nrm
```

### 使用命令

```sh
$ nrm ls # 列出当前支持切换的源
$ nrm use taobao # 使用 taobao 的源作为默认的 npm 源
```

---

**References**:

1. <https://github.com/tj/n>
2. <https://github.com/nvm-sh/nvm#installing-and-updating>
