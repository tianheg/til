# Problems on Ubuntu

## Bluetooth Cannot Connect Airpods

```sh
sudo vim /etc/bluetooth/main.conf
# add `ControllerMode = dual`
sudo /etc/init.d/bluetooth restart
```

It works!

References:

1. <https://techwiser.com/fix-airpods-not-working-on-ubuntu/>

## Boot Slowly

```sh
$ neofetch          
            .-/+oossssoo+/-.               tianheg@tianheg-PC 
        `:+ssssssssssssssssss+:`           ------------------ 
      -+ssssssssssssssssssyyssss+-         OS: Ubuntu 20.04.2 LTS x86_64 
    .ossssssssssssssssssdMMMNysssso.       Host: HP Laptop 14s-cr0xxx 
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: 5.8.0-50-generic 
  +ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: 24 mins 
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Packages: 2072 (dpkg), 9 (snap) 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Shell: zsh 5.8 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Resolution: 1920x1080, 1600x900 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   DE: GNOME 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   WM: Mutter 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   WM Theme: Adwaita 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Theme: Yaru [GTK2/3] 
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    Icons: Yaru [GTK2/3] 
  +sssssssssdmydMMMMMMMMddddyssssssss+     Terminal: gnome-terminal 
   /ssssssssssshdmNNNNmyNMMMMhssssss/      CPU: Intel i5-8250U (8) @ 3.400GHz 
    .ossssssssssssssssssdMMMNysssso.       GPU: Intel UHD Graphics 620 
      -+sssssssssssssssssyyyssss+-         GPU: AMD ATI Radeon R7 M260/M265 / M340/M360 / M440/M445 / 530/535 / 620/625 Mobile 
        `:+ssssssssssssssssss+:`           Memory: 3947MiB / 23809MiB 
            .-/+oossssoo+/-.
```

If you have Intel CPU and are using regular Ubuntu (Gnome) and want a user-friendly way to check CPU speed and adjust it, and even set it to auto-scale based on being plugged vs battery, try [CPU Power Manager](https://extensions.gnome.org/extension/945/cpu-power-manager/).

```sh
$ systemd-analyze                             
Startup finished in 8.653s (firmware) + 4.558s (loader) + 4.153s (kernel) + 1min 14.380s (userspace) = 1min 31.745s 
graphical.target reached after 1min 14.241s in userspace
# from https://youtu.be/_nA6RDvDhRk
$ systemd-analyze blame
34.544s plymouth-quit-wait.service                                                               
21.085s snapd.service                                                                            
19.557s dev-sda1.device                                                                          
......
```

**Plymouth is not slowing your boot-up process!** Plymouth is responsible for the boot-up splash screen. Please read [Plymouth](https://wiki.ubuntu.com/Plymouth).

It loads the boot-up logo at the beginning of the boot-up process and then **waits** until the boot-up process has finished so it unloads the splash screen. That is **all** it does and that is why it has to run in parallel and co-exist throughout the **whole** boot-up process. It does not delay anything, it just **waits**.

```sh
$ systemd-analyze plot > SystemdAnalyzePlot.svg
```

You can, however, **reduce your boot-up time** by disabling `NetworkManager-wait-online.service` so **plymouth** has one less process to wait for. This can indeed reduce your boot-up time. To do this please follow the steps in [this answer](https://askubuntu.com/a/1166492/968501).

From <https://askubuntu.com/a/1166492>

If this system is not a server in a network, you can start by cutting down on time used by `NetworkManager-wait-online.service`, to do this please disable the service like so:

```sh
sudo systemctl disable NetworkManager-wait-online.service
```

If it shows up again after reboot, you can follow the above command with this:

```sh
sudo systemctl mask NetworkManager-wait-online.service
```

The purpose of the `NetworkManager-wait-online.service` is to wait for the network to come online before proceeding with the boot process.

This is needed in case of for example servers that rely on network resources as part of the boot process ( eg. mounting remote drives ) or in the case of workstations that rely on the network to boot correctly ( eg. Thin Clients ).

Otherwise, desktop users can disable `NetworkManager-wait-online.service` and network will connect normally after boot has finished minus the unneeded wait time.

It is safe to disable in this case.

Next time:

```sh
$ systemd-analyze
Startup finished in 5.798s (firmware) + 3.640s (loader) + 4.111s (kernel) + 3min 8.299s (userspace) = 3min 21.849s 
graphical.target reached after 1min 28.245s in userspace
```

From <https://itsfoss.com/speed-up-ubuntu-1310/>

1. Reduce the default grub load time
2. Manage startup applications
3. Install preload to speed up application load time
4. Choose the best mirror for software updates
5. Use apt-fast instead of apt-get for a speedy update
6. Remove language related ign from apt-get update
7. Reduce overheating
8. Tweak LibreOffice to make it faster
9. Use a lightweight desktop environment
10. Use lighter alternatives for different applications

---

**References**:

1. <https://askubuntu.com/questions/1230620/ubuntu-20-04-gnome-very-slow>
2. <https://itsfoss.community/t/solved-apps-opening-too-slow-in-ubuntu-20-04/4578/4>
3. <https://askubuntu.com/a/1260993>
4. <https://askubuntu.com/a/1168249>
5. <https://askubuntu.com/a/1166492>
6. <https://youtu.be/vwBoHZuauL8>
7. <https://superuser.com/questions/1599715/getting-a-very-slow-startup-on-ubuntu-20-seems-to-be-stuck-around-the-stage-whe>
8. [10 Killer Tips To Speed Up Ubuntu Linux](https://itsfoss.com/speed-up-ubuntu-1310/)

## No Pip On Ubuntu20.04

```sh
sudo apt update
sudo apt install python3-pip
```

[source](https://askubuntu.com/a/1254329)

## Cannot Connect Wi-Fi Ubuntu20.04

Tried:

[Way 1](https://askubuntu.com/a/1231027):

```sh
sudo vim /etc/network/interfaces
# Add following lines:
# auto wlp5s0
# iface wlan0 inet static
ifconfig wlp5s0 down
ifconfig wlp5s0 up
```

But `ifconfig` is not found.

[Way 2](https://linuxconfig.org/ubuntu-20-04-connect-to-wifi-from-command-line):

```sh
$ ls /sys/class/net
enp2s0 lo  wlp3s0
$ ls /etc/netplan/
01-network-manager-all.yaml
$ sudoedit /etc/netplan/01-network-manager-all.yaml
$ sudo netplan apply # or sudo netplan --debug apply
$ ip a
```

Finally I found I add my PC to blacklist with the Wi-Fi I want to connect.

## Connect Wifi

![software-update](./images/software-updates.png)

I just seclect the Using instead of Do not.

[More info](https://www.maketecheasier.com/fix-wi-fi-not-working-ubuntu/)

## H.264 Not Found

```sh
sudo apt install ubuntu-restricted-extras
```

## Remap Key Bug

I check `Swap Ctrl and Caps Lock`, which is under `Ctrl position` -> `Additional Layout Options` -> `Keyboard & Mouse` -> `GNOME Tweaks`.

But it's lost when I reboot the PC recently.

I found talks about it officially and unofficially:

- <https://askubuntu.com/questions/1286997/caps-lock-remapping-stops-working>
- <https://bugs.launchpad.net/ubuntu/+source/mutter/+bug/1899206>

A way to recover it:

<kbd>Alt</kbd> + <kbd>F2</kbd> -> Type `r` -> hit <kbd>enter</kbd>, so it works again until it breaks again.

---

**References**:

- <https://askubuntu.com/questions/1286997/caps-lock-remapping-stops-working>
- <https://bugs.launchpad.net/ubuntu/+source/mutter/+bug/1899206>

## Install `kubuntu-desktop` error

When I install `kubuntu-desktop` use `sudo apt-get install -y kubuntu-desktop`, get error:

```sh
Setting up samba-common-bin (2:4.11.6+dfsg-0ubuntu1.6) ...
Checking smb.conf with testparm
Load smb config files from /etc/samba/smb.conf
Loaded services file OK.
ERROR: lock directory /run/samba does not exist

ERROR: pid directory /run/samba does not exist

Server role: ROLE_STANDALONE

dpkg: error processing package samba-common-bin (--configure):
 installed samba-common-bin package post-installation script subprocess returned error exit status 1
Errors were encountered while processing:
 samba-common-bin
E: Sub-process /usr/bin/dpkg returned an error code (1)
```

samba-common-bin was installed as a dependency of smbclient, the "server role" message is misleading as I don't have any need for a SMB server (and for any lock or pidfile, afaik).

Solved by run `/bin/systemd-tmpfiles --create /usr/lib/tmpfiles.d/samba.conf`.

References:

1. <https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=953530>
