# Raspberry Pi

树莓派系统：Ubuntu 20.04.2 LTS

## 连接无线网

在[这篇文章](https://huobur.medium.com/how-to-setup-wifi-on-raspberry-pi-4-with-ubuntu-20-04-lts-64-bit-arm-server-ceb02303e49b)指导下，编辑了 `/etc/netplan/50-cloud-init.yaml`。

直接重启之后，无法连接无线网，插入网线接入网络也不起作用。

- Testing: `sudo netplan --debug try` (continue even if there are errors)
- Generate: `sudo netplan --debug generate` (provides more details in case of issues with the previous command)
- Apply: `sudo netplan --debug apply` (if no issues during the previous commands)

ref:

1. <https://zhuanlan.zhihu.com/p/349823805>
2. <https://blog.lussac.net/archives/57/>
3. <https://openwrt.org/toh/raspberry_pi_foundation/raspberry_pi>
4. <https://www.wxvoid.com/index.php/archives/21/>
