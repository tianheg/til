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

使用 [nrm (opens new window)](https://github.com/Pana/nrm) 可以让我们来切换不同的 npm 源而不用单独安装 cnpm 之类的库

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
