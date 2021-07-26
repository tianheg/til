# Vagrant

## 快速上手

```sh
mkdir /mnt/vd/ub1 && cd $_ 
vim Vagrantfile
vagrant box add generic/ubuntu2004
```

## Autocompletion

```sh
vagrant autocomplete install --bash --zsh
```

为 bash 和 zsh 安装。

为 .zshrc 第1行添加了如下内容：

```zshrc
export PATH=$HOME/.local/bin
```

Linux 常用命令全都失效。

ref:

1. <https://learn.hashic是orp.com/vagrant>
2. <https://www.vagrantup.com/docs>
