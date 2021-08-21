# Install Node.js, NPM and Yarn

## n to install Node.js and npm

```sh
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n lts
```

## Install yarn v1.22.5

```sh
npm install --global yarn
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
