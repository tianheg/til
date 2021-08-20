# Arch System Maintenance

Arch 系统维护

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
