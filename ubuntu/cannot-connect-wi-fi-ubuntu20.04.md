# Cannot Connect Wi-Fi Ubuntu20.04

Tried:

[Way 1](https://askubuntu.com/a/1231027):

```bash
sudo vim /etc/network/interfaces
# Add following lines:
# auto wlp5s0
# iface wlan0 inet static
ifconfig wlp5s0 down
ifconfig wlp5s0 up
```

But `ifconfig` is not found.

[Way 2](https://linuxconfig.org/ubuntu-20-04-connect-to-wifi-from-command-line):

```bash
$ ls /sys/class/net
enp2s0 lo  wlp3s0
$ ls /etc/netplan/
01-network-manager-all.yaml
$ sudoedit /etc/netplan/01-network-manager-all.yaml
$ sudo netplan apply # or sudo netplan --debug apply
$ ip a
```

Finally I found I add my PC to blacklist with the Wi-Fi I want to connect.
