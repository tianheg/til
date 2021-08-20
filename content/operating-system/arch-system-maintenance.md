# Arch System Maintenance

Arch 系统维护

参考资料：

1. <https://wiki.archlinux.org/title/System_maintenance>
2. [Arch Linux 安装使用教程](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/)

## Identify files not owned by any package

ref:

1. <https://wiki.archlinux.org/title/Pacman/Tips_and_tricks#Identify_files_not_owned_by_any_package>
2. <https://bbs.archlinuxcn.org/viewtopic.php?pid=45776#p45776>

```sh
find /etc /usr /opt | LC_ALL=C pacman -Qqo - 2>&1 >&- >/dev/null | cut -d ' ' -f 5-
```

## UEFI 安全启动

<https://zhuanlan.zhihu.com/p/25279889>

- 加密散列函数
- 公匙加密和数字签名
- 荣誉证书

ref:

1. [UEFI和BIOS探秘](https://zhuanlan.zhihu.com/UEFIBlog)

## 不要和 pacman 管的东西打架

<https://bbs.archlinuxcn.org/viewtopic.php?pid=41289#p41289>

你从官方源里安装的 nodejs，已经把它所需要的库依赖给你安装上了。只是你作为用户，安装的东西优先级更高，然而你的 libcrypto.so.1.1 不是 nodejs 能用的，就坏掉了。
不建议你往系统里的 /usr/local 塞核心库。

不知道为什么中文网络上有很多教程都是让你自行编译安装各种东西，和系统的东西打起架来那场面真的壮观。在 Arch Linux 上请不要这样的。请使用 pacman 管理你的系统。如果需要额外的软件包可以到 AUR 或者 [archlinuxcn] 仓库寻找，再不行自己写 PKGBUILD 吧……总之不要和 pacman 管的东西打架。

## Backup

Do-It-Yourself Backup System Using Rsync <https://www.sanitarium.net/golug/rsync_backups_2010.html>
