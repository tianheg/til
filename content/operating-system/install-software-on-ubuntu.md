# Install Software on Ubuntu

used software: nomacs, Flameshot, kphotoalbum, Krita, xournal, [ImageMagick](https://askubuntu.com/a/764557), pppoeconf, [redshift](https://github.com/jonls/redshift#redshift), gparted

## 安装文件

### Deb File

```sh
# way 1
sudo apt install ./file.deb
# way 2
sudo apt install gdebi
sudo gdebi file.deb
# way 3
sudo dpkg -i file.deb
```

references:

1. <https://help.ubuntu.com/kubuntu/desktopguide/C/manual-install.html>
2. <https://itsfoss.com/install-deb-files-ubuntu/>
3. <https://linuxize.com/post/how-to-install-deb-packages-on-ubuntu/>

## 软件列表

### Albert

```sh
curl https://build.opensuse.org/projects/home:manuelschneid3r/public_key | sudo apt-key add -
echo 'deb http://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_20.04/ /' | sudo tee /etc/apt/sources.list.d/home:manuelschneid3r.list
sudo wget -nv https://download.opensuse.org/repositories/home:manuelschneid3r/xUbuntu_20.04/Release.key -O "/etc/apt/trusted.gpg.d/home:manuelschneid3r.asc"
sudo apt update
sudo apt install albert
```

[source](https://albertlauncher.github.io/installing/#using-official-albert-repositories)

### Anki

Install from [here](https://apps.ankiweb.net/#download)

Then exec these orders:

```sh
$ tar xjf Downloads/anki-2.1.42-linux.tar.bz2
$ cd anki-2.1.42-linux
$ sudo ./install.sh
```

### apt

**`apt-key`**

```sh
apt-key del <keyid>         - remove the key <keyid>
# examples:
# pub   rsa3072 2020-09-02 [SC] [expires: 2022-09-02]
#       2CA3 2056 ED20 6CB8 1F44  A8CA C99B 11DE B975 41F0
# uid           [ unknown] Nate Smith <vilmibm@github.com>
# sub   rsa3072 2020-09-02 [E] [expires: 2022-09-02]
sudo apt-key del "2CA3 2056 ED20 6CB8 1F44  A8CA C99B 11DE B975 41F0"
# or
sudo apt-key del B97541F0
```

keyid is the last 8 characters of the gpg key's fingerprint, which is that long hex-code under `pub`.

### `apt-fast`

```sh
sudo add-apt-repository ppa:apt-fast/stable
sudo apt-get update
sudo apt-get -y install apt-fast
# zsh
cp completions/zsh/_apt-fast /usr/share/zsh/functions/Completion/Debian/
chown root:root /usr/share/zsh/functions/Completion/Debian/_apt-fast
source /usr/share/zsh/functions/Completion/Debian/_apt-fast
```

[source](https://github.com/ilikenwf/apt-fast#installation)

### Curl

```sh
sudo apt-get install curl
```

---

**References**:

1. [curl 错误总结](https://www.cnblogs.com/cposture/p/9029017.html)

### gh

[source](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian-ubuntu-linux-apt)

```sh
# way 1(not work for me)
$ curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg
$ echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
$ sudo apt update
$ sudo apt install gh
# error when first step: OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to 127.0.0.1:7890

# way 2
$ wget https://github.com/cli/cli/releases/download/v1.10.2/gh_1.10.2_linux_amd64.deb && sudo apt install ./gh_1.10.2_linux_amd64.deb
```

### gpg

---

**References**:

1. [GnuPrivacyGuardHowto](https://help.ubuntu.com/community/GnuPrivacyGuardHowto)

### On My Zsh

**Install autojump**

```sh
[[ -s /home/tianheg/.autojump/etc/profile.d/autojump.sh ]] && source /home/tianheg/.autojump/etc/profile.d/autojump.sh

autoload -U compinit && compinit -u
```

### proxychains-ng

### Clash

**Install Clash**

```sh
$ wget -O clash.gz https://github.com/Dreamacro/clash/releases/download/v1.6.0/clash-linux-amd64-v1.6.0.gz
$ gzip -f clash.gz -d
$ sudo mv ~/clash /usr/local/bin/clash
$ chmod +x /usr/local/bin/clash
$ clash -h
$ clash # Generate config.yaml, Country.mmdb in ~/.config/clash
```

**Config**

```sh
$ curl https://....yaml >> ~/.config/clash/config.yaml
# Config ~/.config/clash/config.yaml in terminal or with Web UI: http://clash.razord.top/
# UI port is external-controller's port

# Set daemon
$ sudo vim /etc/systemd/system/clash.service
# Input these words:
# [Unit]
# Description=Clash daemon, A rule-based proxy in Go.
# After=network.target
#
# [Service]
# Type=simple
# Restart=always
# ExecStart=/usr/local/bin/clash -d "/home/tianheg/.config/clash"
#
# [Install]
# WantedBy=multi-user.target

$ systemctl daemon-reload
$ systemctl enable clash
$ service clash start # 启动
$ service clash stop # 停止
$ service clash restart # 重启
$ service clash status # 状态
```

`/etc/systemd/system/clash.service`:

```txt
[Unit]
Description=Clash daemon, A rule-based proxy in Go.
After=network.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/clash -d "/home/tianheg/.config/clash"

[Install]
WantedBy=multi-user.target
```

`.zshrc`:

```txt
# terminal proxy (Ubuntu)
export http_proxy="http://127.0.0.1:7890"
export https_proxy="https://127.0.0.1:7890"
export http_proxy_user=user
export http_proxy_pass=pass
export https_proxy_user=user
export https_proxy_pass=pass

# below didn't work
export http_proxy="socks5://127.0.0.1:1080"    
export socks_proxy="socks5://127.0.0.1:1080" 
```

**Setting System Proxy**

Settings > Network > Network Proxy > Manual:

- HTTP Proxy: `127.0.0.1:7890`
- HTTPS Proxy: `127.0.0.1:7890`
- Socks Host: `127.0.0.1:7891`
- Ignore Host: `localhost, 127.0.0.0/8, ::1`

**Problems**

**Git**: git clone 报错 ：Failed to receive SOCKS4 connect request ack.

```sh
# 7891 是 clash 代理 socket 的端口
git config --global http.proxy 'socks5://127.0.0.1:7891'
git config --global https.proxy 'socks5://127.0.0.1:7891'
```

### Emacs

```sh
sudo apt install emacs
```

### Exa

```sh
sudo apt install exa
```

Error:

```sh
$ exa
zsh: command not found: exa
```

Understand from [url](https://askubuntu.com/a/1290552):

The *groovy* name is 20.10, not 20.04 LTS. So [this package](https://packages.ubuntu.com/groovy/exa) is not available for 20.04 LTS.

But you can install it manually with:

```sh
wget http://archive.ubuntu.com/ubuntu/pool/universe/r/rust-exa/exa_0.9.0-4_amd64.deb
sudo apt-get install ./exa_0.9.0-4_amd64.deb
```

and test it via:

```sh
$ exa --version
exa v0.9.0
```

[source](https://the.exa.website/install/linux)

### Keepass

Install from [here](https://keepass.info/help/v2/setup.html#mono)

### MScorefonts

```sh
$ sudo apt update
$ sudo apt install ttf-mscorefonts-installer
$ sudo fc-cache -f -v
```

### Netease Music

Download *.deb file [here](https://music.163.com/#/download)

### Nnn

```sh
$ wget https://github.com/jarun/nnn/releases/download/v4.0/nnn_4.0-1_ubuntu20.04.amd64.deb
$ sudo apt install ./nnn_4.0-1_ubuntu20.04.amd64.deb
```

[source](https://github.com/jarun/nnn)

### Package Manager

synaptic(Graphical package manager) or aptitude(terminal-based package manager)

Can be installed through `apt`

Snap（能不用就不用） <https://snapcraft.io/>

Apt(Advanced Package Tool) <https://wiki.debian.org/PackageManagement?action=show&redirect=CategoryPackageManagement>

---

**References**:

- <https://packages.ubuntu.com/focal/synaptic>
- <https://packages.ubuntu.com/focal/aptitude>

### Phddns

[花生壳 5.0 for Linux 使用教程](https://service.oray.com/question/11630.html)

```sh
+--------------------------------------------------+
 |             Oray PeanutHull Linux 5.1.0          |
 +--------------------------------------------------+
 |  SN: oray8deecb38e199   Default password: admin  |
 +--------------------------------------------------+
 |    Remote Management Address http://b.oray.com   |
 +--------------------------------------------------+
```

### Postman

[source](https://speedysense.com/install-postman-on-ubuntu-20-04/)

```sh
# Download Postman from https://dl.pstmn.io/download/latest/linux64
$ cd Downloads
$ tar -xzf Postman-linux-x64-VERSION-NAME.tar.gz
$ sudo rm -rf /opt/Postman # If you have already installed previous version first remove it.
$ sudo mv Postman /opt
$ sudo ln -s /opt/Postman/Postman /usr/local/bin/postman
$ postman # run postman
$ sudo gedit /usr/share/applications/postman.desktop # Create a desktop file for Postman App
```

`/usr/share/applications/postman.desktop`:

```desktop
[Desktop Entry]
Type=Application
Name=Postman
Icon=/opt/Postman/app/resources/app/assets/icon.png
Exec="/opt/Postman/Postman"
Comment=Postman GUI
Categories=Development;Code;
```

### Skype

Install `skypeforlinux-64.deb` from [here](https://go.skype.com/skypeforlinux-64.deb)

[source](https://www.skype.com/en/get-skype/download-skype-for-desktop/)

### Spotify

[source](https://www.spotify.com/hk-en/download/linux/)

```sh
curl -sS https://download.spotify.com/debian/pubkey_0D811D58.gpg | sudo apt-key add -
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update && sudo apt-get install spotify-client
sudo apt-get remove spotify-client
# 安装完白屏，打不开
```

### SQLite Database Browser

Install SQLite Database Browser ([sqliteborwser](apt:sqlitebrowser)).

source:

1. <https://ubuntuforums.org/showthread.php?t=1556007)>
2. <https://sqlitebrowser.org/dl/#ubuntu-and-derivatives>

### SwitchHosts

1. Download deb file with here: [source](https://github.com/oldj/SwitchHosts/releases).
2. `sudo apt install ./SwitchHosts_linux_4.0.0.6029.deb`

### Typora

for Debian/Ubuntu:

```sh
# or use
# sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BA300B7755AFCFAE
$ wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -

# add Typora's repository
$ sudo add-apt-repository 'deb https://typora.io/linux ./'
$ sudo apt-get update

# install typora
$ sudo apt-get install typora
```

**Upgrade Typora**

After installing Typora, the `typora` package will be managed by `apt-get`, so when your system updates installed packages, or you execute `apt-get upgrade`, Typora will be updated to latest version.

```sh
# upgrade all packages include Typora
$ sudo apt-get upgrade
```

### VLC

Through these:

**Nota Bene**

If you wish to install the traditional deb package, it is available as usual via [APT](apt://vlc), with all security and critical bug fixes. However, there will be no major VLC version updates until the next Ubuntu release.

[source](https://www.videolan.org/vlc/download-ubuntu.html)

### VMware Workstation Player

Download from [here](https://my.vmware.com/en/web/vmware/downloads/info/slug/desktop_end_user_computing/vmware_workstation_player/16_0)

```sh
chmod a+x VMware-Player-16.1.0-17198959.x86_64.bundle
sudo ./VMware-Player-16.1.0-17198959.x86_64.bundle
```

### Zola

```sh
sudo snap install zola --edge
```

[source](https://www.getzola.org/documentation/getting-started/installation/#snapcraft)

### Zotero

```sh
/opt $ sudo wget https://download.zotero.org/client/release/5.0.96/Zotero-5.0.96_linux-x86_64.tar.bz2
/opt $ sudo tar -xf Zotero-5.0.96_linux-x86_64.tar.bz2
/opt $ sudo mv Zotero_linux-x86_64 zotero
/opt $ cd zotero
/opt/zotero $ ./zotero
/opt/zotero $ sudo ./set_launcher_icon
/opt/zotero $ ln -s /opt/zotero/zotero.desktop ~/.local/share/applications/zotero.desktop
/opt $ sudo chown -R tianheg:tianheg zotero # give write permission to zotero folder and its files
```

source:

1. <https://www.zotero.org/download/client/dl?channel=release&platform=linux-x86_64&version=5.0.96>
2. <https://www.zotero.org/support/installation>

### Manage Fonts

```sh
sudo apt-get install font-manager
```

[source](https://askubuntu.com/a/371320)

### Netplan

[source](https://netplan.io/)

The network configuration abstraction renderer

Netplan is a utility for easily configuring networking on a linux system. You simply create a YAML description of the required network interfaces and what each should be configured to do. From this description Netplan will generate all the necessary configuration for your chosen renderer tool.

### Nmcli

NetworkManager should be installed by default for most Ubuntu installations if the Desktop installation image was used. Use the apt command to find out if it needs to be installed:

```sh
$ apt -qq list network-manager
network-manager/focal-updates,now 1.22.10-1ubuntu2.2 amd64 [installed,automatic]
```

If necessary, install the package as follows:

```sh
$ apt install network-manager
```

Once the package is installed, the NetworkManager daemon will need to be enabled so that it starts each time the system boots:

```sh
$ systemctl status network-manager
```

Finally, start the service running and check the status to verify that the launch was successful:

```sh
$ systemctl status network-manager
● NetworkManager.service - Network Manager
     Loaded: loaded (/lib/systemd/system/NetworkManager.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-04-10 09:08:43 CST; 33min ago
       Docs: man:NetworkManager(8)
   Main PID: 993 (NetworkManager)
      Tasks: 3 (limit: 28502)
     Memory: 16.6M
     CGroup: /system.slice/NetworkManager.service
             └─993 /usr/sbin/NetworkManager --no-daemon
```

**Basic nmcli Commands**

```sh
$ nmcli -h
Usage: nmcli [OPTIONS] OBJECT { COMMAND | help }

OPTIONS
  -a, --ask                                ask for missing parameters
  -c, --colors auto|yes|no                 whether to use colors in output
  -e, --escape yes|no                      escape columns separators in values
  -f, --fields <field,...>|all|common      specify fields to output
  -g, --get-values <field,...>|all|common  shortcut for -m tabular -t -f
  -h, --help                               print this help
  -m, --mode tabular|multiline             output mode
  -o, --overview                           overview mode
  -p, --pretty                             pretty output
  -s, --show-secrets                       allow displaying passwords
  -t, --terse                              terse output
  -v, --version                            show program version
  -w, --wait <seconds>                     set timeout waiting for finishing operations

OBJECT
  g[eneral]       NetworkManager's general status and operations
  n[etworking]    overall networking control
  r[adio]         NetworkManager radio switches
  c[onnection]    NetworkManager's connections
  d[evice]        devices managed by NetworkManager
  a[gent]         NetworkManager secret agent or polkit agent
  m[onitor]       monitor NetworkManager changes
```

```sh
# nmcli device help
# nmcli dev help
# nmcli d help
```

To check the overall status of NetworkManager on the system, use the following command:

```sh
$ nmcli general status
STATE      CONNECTIVITY  WIFI-HW  WIFI     WWAN-HW  WWAN    
connected  full          enabled  enabled  enabled  enabled
```

To check the status of the devices installed on a system, the following command can be used:

```sh
$ nmcli dev status
DEVICE           TYPE      STATE         CONNECTION 
enp2s0           ethernet  connected     ethernet   
wlp3s0           wifi      disconnected  --         
br-7ae3b144feb2  bridge    unmanaged     --         
docker0          bridge    unmanaged     --         
veth2ac2d63      ethernet  unmanaged     --         
vethfeb2ce6      ethernet  unmanaged     --         
vmnet1           ethernet  unmanaged     --         
vmnet8           ethernet  unmanaged     --         
lo               loopback  unmanaged     -- 
```

The output may also be modified by using the -p (pretty) option to make the output more human friendly:

```sh
$ nmcli -p dev status
=====================
  Status of devices
=====================
DEVICE           TYPE      STATE         CONNECTION 
--------------------------------------------------------------------------
enp2s0           ethernet  connected     ethernet   
wlp3s0           wifi      disconnected  --         
br-7ae3b144feb2  bridge    unmanaged     --         
docker0          bridge    unmanaged     --         
veth2ac2d63      ethernet  unmanaged     --         
vethfeb2ce6      ethernet  unmanaged     --         
vmnet1           ethernet  unmanaged     --         
vmnet8           ethernet  unmanaged     --         
lo               loopback  unmanaged     --
```

Conversely, the -t option may be used to make the output more terse and suitable for automated processing:

```sh
$ nmcli -t dev status
enp2s0:ethernet:connected:ethernet
wlp3s0:wifi:disconnected:
br-7ae3b144feb2:bridge:unmanaged:
docker0:bridge:unmanaged:
veth2ac2d63:ethernet:unmanaged:
vethfeb2ce6:ethernet:unmanaged:
vmnet1:ethernet:unmanaged:
vmnet8:ethernet:unmanaged:
lo:loopback:unmanaged:
```

The following command displays information about the connections configured on the system:

```sh
$ nmcli con show
NAME       UUID                                  TYPE      DEVICE 
ethernet   82900ec5-3f45-3d9c-8d10-3e269bf80e38  ethernet  enp2s0 
vivo-Y85A  ec8957b2-9f8a-45c6-9680-9aad8e5fde70  wifi      --
```

To find out the IP address allocated to a connection, the ip tool can be used with the address option:

```sh
$ ip address
...
2: enp2s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether e4:e7:49:9e:c1:35 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.105/24 brd 192.168.1.255 scope global dynamic noprefixroute enp2s0
       valid_lft 6528sec preferred_lft 6528sec
    inet6 fe80::a757:50c2:bb55:ad72/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
3: wlp3s0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 0c:96:e6:09:43:bd brd ff:ff:ff:ff:ff:ff
...
```

The ip command will output information for all of the devices detected on the system. The above output shows that the ethernet device has been assigned an IP address of 192.168.1.105.

If we only wanted to list active connections, the _nmcli_ command could have been used with the -a option:

```sh
$ nmcli con show -a
NAME      UUID                                  TYPE      DEVICE 
ethernet  82900ec5-3f45-3d9c-8d10-3e269bf80e38  ethernet  enp2s0
```

To switch the WiFi device connection from zoneone to zonetwo, we can run the following command:

```sh
# nmcli device wifi connect zonetwo -ask
Password:
```

The _-ask_ flag causes _nmcli_ to prompt the user to enter the password for the WiFi network. To include the WiFi password on the command-line (particularly useful if the command is being executed in a script), use the _password_ option:

```sh
# nmcli device wifi connect zonetwo password <password here>
```

The _nmcli_ tool may also be used to scan for available WiFi networks as follows:

```sh
$ nmcli device wifi list
IN-USE  BSSID              SSID                          MODE   CHAN  RATE        SIGNAL  BARS  SECURITY  
        50:D2:F5:FC:66:C2  Xiaomi_66C1                   Infra  1     130 Mbit/s  97      ▂▄▆█  WPA1 WPA2 
        60:3A:7C:E6:18:E5  a214                          Infra  11    270 Mbit/s  97      ▂▄▆█  WPA1 WPA2 
        3E:86:D1:07:AB:81  小心王占                      Infra  11    117 Mbit/s  94      ▂▄▆█  WPA2      
        60:3A:7C:E6:18:E7  a214                          Infra  149   270 Mbit/s  90      ▂▄▆█  WPA1 WPA2 
        A0:D9:3D:93:66:90  214                           Infra  6     130 Mbit/s  77      ▂▄▆_  WPA1 WPA2 
        18:DE:D7:9B:C1:B0  HUAWEI-gxvD                   Infra  5     270 Mbit/s  70      ▂▄▆_  WPA1 WPA2 
        0C:4B:54:D7:69:E9  213                           Infra  10    270 Mbit/s  70      ▂▄▆_  WPA1 WPA2 
        18:DE:D7:99:99:6C  HUAWEI-7FWK
```

A currently active connection can be deactivated as follows:

```sh
$ nmcli con down <connection name>
```

Similarly, an inactive connection can be brought back up at any time:

```sh
$ nmcli con up <connection name>
```

When a connection is brought down, NetworkManager automatically searches for another connection, activates it and assigns it to the device to which the previous connection was established. To prevent a connection from being used in this situation, disable the autoconnect option as follows:

```sh
$ nmcli con mod <connection name> connection.autoconnect no
```

The following command may be used to obtain additional information about a specific connection. This includes the current values for all the connection properties:

```sh
$ nmcli con show ethernet  
connection.id:                          ethernet
connection.uuid:                        82900ec5-3f45-3d9c-8d10-3e269bf80e38
connection.stable-id:                   --
connection.type:                        802-3-ethernet
connection.interface-name:              enp2s0
connection.autoconnect:                 yes
connection.autoconnect-priority:        -999
connection.autoconnect-retries:         -1 (default)
connection.multi-connect:               0 (default)
connection.auth-retries:                -1
connection.timestamp:                   1618021615
connection.read-only:                   no
connection.permissions:                 --
connection.zone:                        --
connection.master:                      --
connection.slave-type:                  --
connection.autoconnect-slaves:          -1 (default)
connection.secondaries:                 --
connection.gateway-ping-timeout:        0
connection.metered:                     unknown
connection.lldp:                        default
connection.mdns:                        -1 (default)
connection.llmnr:                       -1 (default)
connection.wait-device-timeout:         -1
802-3-ethernet.port:                    --
802-3-ethernet.speed:                   0
802-3-ethernet.duplex:                  --
802-3-ethernet.auto-negotiate:          no
802-3-ethernet.mac-address:             --
802-3-ethernet.cloned-mac-address:      --
802-3-ethernet.generate-mac-address-mask:--
802-3-ethernet.mac-address-blacklist:   --
802-3-ethernet.mtu:                     auto
802-3-ethernet.s390-subchannels:        --
802-3-ethernet.s390-nettype:            --
802-3-ethernet.s390-options:            --
802-3-ethernet.wake-on-lan:             default
802-3-ethernet.wake-on-lan-password:    --
ipv4.method:                            auto
ipv4.dns:                               --
ipv4.dns-search:                        --
ipv4.dns-options:                       --
ipv4.dns-priority:                      0
ipv4.addresses:                         --
ipv4.gateway:                           --
ipv4.routes:                            --
ipv4.route-metric:                      -1
ipv4.route-table:                       0 (unspec)
ipv4.routing-rules:                     --
ipv4.ignore-auto-routes:                no
ipv4.ignore-auto-dns:                   no
ipv4.dhcp-client-id:                    --
ipv4.dhcp-iaid:                         --
ipv4.dhcp-timeout:                      0 (default)
ipv4.dhcp-send-hostname:                yes
ipv4.dhcp-hostname:                     --
ipv4.dhcp-fqdn:                         --
ipv4.dhcp-hostname-flags:               0x0 (none)
ipv4.never-default:                     no
ipv4.may-fail:                          yes
ipv4.dad-timeout:                       -1 (default)
ipv6.method:                            auto
ipv6.dns:                               --
ipv6.dns-search:                        --
ipv6.dns-options:                       --
ipv6.dns-priority:                      0
ipv6.addresses:                         --
ipv6.gateway:                           --
ipv6.routes:                            --
ipv6.route-metric:                      -1
ipv6.route-table:                       0 (unspec)
ipv6.routing-rules:                     --
ipv6.ignore-auto-routes:                no
ipv6.ignore-auto-dns:                   no
ipv6.never-default:                     no
ipv6.may-fail:                          yes
ipv6.ip6-privacy:                       -1 (unknown)
ipv6.addr-gen-mode:                     stable-privacy
ipv6.ra-timeout:                        0 (default)
ipv6.dhcp-duid:                         --
ipv6.dhcp-iaid:                         --
ipv6.dhcp-timeout:                      0 (default)
ipv6.dhcp-send-hostname:                yes
ipv6.dhcp-hostname:                     --
ipv6.dhcp-hostname-flags:               0x0 (none)
ipv6.token:                             --
proxy.method:                           none
proxy.browser-only:                     no
proxy.pac-url:                          --
proxy.pac-script:                       --
GENERAL.NAME:                           ethernet
GENERAL.UUID:                           82900ec5-3f45-3d9c-8d10-3e269bf80e38
GENERAL.DEVICES:                        enp2s0
GENERAL.IP-IFACE:                       enp2s0
GENERAL.STATE:                          activated
GENERAL.DEFAULT:                        yes
GENERAL.DEFAULT6:                       no
GENERAL.SPEC-OBJECT:                    --
GENERAL.VPN:                            no
GENERAL.DBUS-PATH:                      /org/freedesktop/NetworkManager/ActiveConnection/1
GENERAL.CON-PATH:                       /org/freedesktop/NetworkManager/Settings/2
GENERAL.ZONE:                           --
GENERAL.MASTER-PATH:                    --
IP4.ADDRESS[1]:                         192.168.1.105/24
IP4.GATEWAY:                            192.168.1.1
IP4.ROUTE[1]:                           dst = 0.0.0.0/0, nh = 192.168.1.1, mt = 100
IP4.ROUTE[2]:                           dst = 192.168.1.0/24, nh = 0.0.0.0, mt = 100
IP4.ROUTE[3]:                           dst = 169.254.0.0/16, nh = 0.0.0.0, mt = 1000
IP4.DNS[1]:                             192.168.1.1
DHCP4.OPTION[1]:                        dhcp_lease_time = 7200
DHCP4.OPTION[2]:                        domain_name_servers = 192.168.1.1
DHCP4.OPTION[3]:                        expiry = 1618027916
DHCP4.OPTION[4]:                        ip_address = 192.168.1.105
DHCP4.OPTION[5]:                        requested_broadcast_address = 1
DHCP4.OPTION[6]:                        requested_domain_name = 1
DHCP4.OPTION[7]:                        requested_domain_name_servers = 1
DHCP4.OPTION[8]:                        requested_domain_search = 1
DHCP4.OPTION[9]:                        requested_host_name = 1
DHCP4.OPTION[10]:                       requested_interface_mtu = 1
DHCP4.OPTION[11]:                       requested_ms_classless_static_routes = 1
DHCP4.OPTION[12]:                       requested_nis_domain = 1
DHCP4.OPTION[13]:                       requested_nis_servers = 1
DHCP4.OPTION[14]:                       requested_ntp_servers = 1
DHCP4.OPTION[15]:                       requested_rfc3442_classless_static_routes = 1
DHCP4.OPTION[16]:                       requested_root_path = 1
DHCP4.OPTION[17]:                       requested_routers = 1
DHCP4.OPTION[18]:                       requested_static_routes = 1
DHCP4.OPTION[19]:                       requested_subnet_mask = 1
DHCP4.OPTION[20]:                       requested_time_offset = 1
DHCP4.OPTION[21]:                       requested_wpad = 1
DHCP4.OPTION[22]:                       routers = 192.168.1.1
DHCP4.OPTION[23]:                       subnet_mask = 255.255.255.0
IP6.ADDRESS[1]:                         fe80::a757:50c2:bb55:ad72/64
IP6.GATEWAY:                            --
IP6.ROUTE[1]:                           dst = fe80::/64, nh = ::, mt = 100
IP6.ROUTE[2]:                           dst = ff00::/8, nh = ::, mt = 256, table=255
```

All of these properties can be modified using nmcli with the modify option using the following syntax:

```sh
$ nmcli con mod <connection name> connection.<property name> <setting>
```

**Working with Connection Profiles**

The configuration of a connection is referred to as a _connection profile_ and is stored in a file located in the _/etc/NetworkManager/system-connections_ directory, the contents of which might read as follows:

```sh
$ ls /etc/NetworkManager/system-connections
ethernet.nmconnection  vivo-Y85A.nmconnection
```

Each of the files is an interface configuration file containing the connection profile for the corresponding connection.

```nmconnection
[connection]
id=ethernet
uuid=82900ec5-3f45-3d9c-8d10-3e269bf80e38
type=ethernet
autoconnect-priority=-999
interface-name=enp2s0
permissions=
timestamp=1618020718

[ethernet]
mac-address-blacklist=

[ipv4]
dns-search=
method=auto

[ipv6]
addr-gen-mode=stable-privacy
dns-search=
method=auto

[proxy]
```

Changes to the connection profile can be implemented by modifying this file and instructing *nmcli* to reload the connection configuration files:

```sh
$ nmcli con reload
```

New connection profiles can also be created manually or generated automatically by _nmcli_. As an example, assume that a new network device has been installed on the system. When this happens, the NetworkManager service will detect the new hardware and create a device for it. In the example below, the new device has been assigned the name _enp0s8_:

```sh
# nmcli dev status
DEVICE  TYPE      STATE      CONNECTION         
enp0s3  ethernet  connected  Wired connection 1 
enp0s8  ethernet  connected  Wired connection 2 
```

NetworkManager automatically detected the device, activated it and assigned it to a connection named “Wired connection 2”. This is a default connection over which we have no configuration control because there is no interface configuration file for it in _/etc/NetworkManager/systemconnections_. The next steps are to delete the “Wired connection 2” connection and use _nmcli_ to create a new connection and assign it to the device. The command to delete a connection is as follows:

```sh
# nmcli con delete "Wired connection 2"
```

Next, _nmcli_ can be used to create a new connection profile configured either with a static IP address, or a dynamic IP address obtained from a DHCP server. To create a dynamic connection profile named _dyn\_ip_, the following command would be used:

```sh
$ nmcli connection dd type ethernet con-name dyn_ip ifname enp0s8
Connection 'dyn_ip' (160d9e10-bbc8-439a-9c47-a2ec52990472) successfully added.
```

After the connection has been created, a file named _dyn\_ip_ will have been added to the _/etc/NetworkManager/system-connections_ directory and will read as follows:

```nmconnection
[connection]
id=dyn_ip
uuid=3dc0bb6b-33dc-4cf8-b5da-5b9fd560342a
type=ethernet
interface-name=enp0s8
permissions=
 
[ethernet]
mac-address-blacklist=
 
[ipv4]
dns-search=
method=auto
 
[ipv6]
addr-gen-mode=stable-privacy
dns-search=
method=auto
```

Checking the device status should now verify that the enp0s8 device is now using the dyn\_ip connection profile:

```sh
# nmcli dev status
DEVICE  TYPE      STATE      CONNECTION         
enp0s8  ethernet  connected  dyn_ip             
enp0s3  ethernet  connected  Wired connection 1 
```

At this point it is worth noting that the enp0s3 device is also using a default connection profile for which there is no interface file through which to modify the connection settings. The same steps used to create the dyn\_ip profile can also be used for the enp0s3 device. For example, to create a connection named _static\_ip_ assigned a static IP address (in this case 192.168.1.200) assigned to the enp0s3 device, the following command would be used (keeping in mind that if you are connected remotely to the system via the Wired connection 1 interface you will lose the connection):

```sh
# nmcli con delete "Wired connection 1"
# nmcli con add type ethernet con-name static_ip ifname enp0s3 ip4 192.168.1.200/24 gw4 192.168.1.1
Connection 'static_ip' (3fccafb3-e761-4271-b310-ad0f28ee8606) successfully added.
# nmcli reload
```

The corresponding _static\_ip_ file will read as follows:

```nmconnection
[connection]
id=static_ip
uuid=6e03666b-26a1-476e-b5b2-77c8eac6006c
type=ethernet
interface-name=enp0s3
permissions=
 
[ethernet]
mac-address-blacklist=
 
[ipv4]
address1=192.168.1.200/24,192.168.1.1
dns-search=
method=manual
 
[ipv6]
addr-gen-mode=stable-privacy
dns-search=
method=auto
```

The command to add a new connection may be altered slightly to also assign both IPv4 and IPv6 static addresses:

```sh
# nmcli con add type ethernet con-name static_ip ifname enp0s3 ip4 192.168.1.200/24 gw4 192.168.1.1  gw4 192.168.1.1 ip6 cabf::4532 gw6 2010:dfa::1
```

**Interactive Editing**

In addition to using _nmcli_ with command\-line options, the tool also includes an interactive mode that can be used to create and modify connection profiles. The following transcript, for example, shows interactive mode being used to create a new Ethernet connection named _demo\_con_:

```sh
# nmcli con edit
Valid connection types: 6lowpan, 802-11-olpc-mesh (olpc-mesh), 802-11-wireless (wifi), 802-3-ethernet (ethernet), adsl, bluetooth, bond, bridge, cdma, dummy, generic, gsm, infiniband, ip-tunnel, macsec, macvlan, ovs-bridge, ovs-interface, ovs-port, pppoe, team, tun, vlan, vpn, vxlan, wimax, wpan, bond-slave, bridge-slave, team-slave
Enter connection type: ethernet
 
===| nmcli interactive connection editor |===
 
Adding a new '802-3-ethernet' connection
 
Type 'help' or '?' for available commands.
Type 'print' to show all the connection properties.
Type 'describe [<setting>.<prop>]' for detailed property description.
 
You may edit the following settings: connection, 802-3-ethernet (ethernet), 802-1x, dcb, sriov, ethtool, match, ipv4, ipv6, tc, proxy
nmcli> set connection.id demo_con
nmcli> set connection.interface enp0s8
nmcli> set connection.autoconnect yes
nmcli> set ipv4.method auto 
nmcli> set 802-3-ethernet.mtu auto
nmcli> set ipv6.method auto
nmcli> save
Saving the connection with 'autoconnect=yes'. That might result in an immediate activation of the connection.
Do you still want to save? (yes/no) [yes] yes
Connection 'demo_con' (cb837408-6c6f-4572-9548-4932f88b9275) successfully saved.
nmcli> quit
```

The following transcript, on the other hand, modifies the previously created _static\_ip_ connection profile to use a different static IP address to the one originally specified:

```sh
# nmcli con edit static_ip
 
===| nmcli interactive connection editor |===
 
Editing existing '802-3-ethernet' connection: 'static_ip'
 
Type 'help' or '?' for available commands.
Type 'print' to show all the connection properties.
Type 'describe [<setting>.<prop>]' for detailed property description.
 
You may edit the following settings: connection, 802-3-ethernet (ethernet), 802-1x, dcb, sriov, ethtool, match, ipv4, ipv6, tc, proxy
nmcli> print ipv4.addresses
ipv4.addresses: 192.168.1.200/24
nmcli> set ipv4.addresses 192.168.1.201/24
nmcli> save
Connection 'static_ip' (3fccafb3-e761-4271-b310-ad0f28ee8606) successfully updated.
nmcli> quit
```

After modifying an existing connection, remember to instruct NetworkManager to reload the configuration profiles:

```sh
# nmcli con reload
```

When using interactive mode, it is useful to know that there is an extensive built\-in help system available to learn how to use the tool. The help topics can be accessed by typing _help_ or _?_ at the _nmcli >_ prompt:

```sh
nmcli> ?
------------------------------------------------------------------------------
---[ Main menu ]---
goto     [<setting> | <prop>]        :: go to a setting or property
remove   <setting>[.<prop>] | <prop> :: remove setting or reset property value
set      [<setting>.<prop> <value>]  :: set property value
describe [<setting>.<prop>]          :: describe property
print    [all | <setting>[.<prop>]]  :: print the connection
verify   [all | fix]                 :: verify the connection
save     [persistent|temporary]      :: save the connection
activate [<ifname>] [/<ap>|<nsp>]    :: activate the connection
back                                 :: go one level up (back)
help/?   [<command>]                 :: print this help
nmcli    <conf-option> <value>       :: nmcli configuration
quit                                 :: exit nmcli
------------------------------------------------------------------------------
```

**Configuring NetworkManager Permissions**

In addition to making it easier to manage networks on Ubuntu, NetworkManager also allows permissions to be specified for connections. The following command, for example, restricts a connection profile to root and user accounts named john and caitlyn:

```sh
$ nmcli con mod static_ip connection.permissions user:root,john,caitlyn
```

Once the connection profiles have been reloaded by NetworkManager, the _static\_ip_ connection will only be active and accessible to other users when at least one of the designated users is logged in to an active session on the system. As soon as the last of these users logs out, the connection will go down and remain inactive until one of the users signs back in.

In addition, only users with permission are able to make changes to the connection status or configuration.

**Device is strictly Unmanaged**

```sh
$ nmcli device connect enp2s0   
Error: Failed to add/activate new connection: Connection 'enp2s0' is not available on device enp2s0 because device is strictly unmanaged
```

[Way 1](https://askubuntu.com/a/71205)[no use]:

```sh
sudo nano /etc/NetworkManager/NetworkManager.conf
# change
# [ifupdown]
# managed=false
# to
# [ifupdown]
# managed=true
sudo service network-manager restart
```

[Way 2](https://superuser.com/a/1632034)[solved]:

```sh
$ sudo nano /etc/NetworkManager/NetworkManager.conf
$ sudo systemctl restart network-manager
```

```conf
[main]
plugins=ifupdown,keyfile

[ifupdown]
managed=true

[keyfile]
unmanaged-devices=*,except:type:wifi,except:type:gsm,except:type:cdma,except:type:wwan,except:type:ethernet,except:type:vlan

[device]
wifi.scan-rand-mac-address=no
```

---

**References**:

1. <https://www.answertopia.com/ubuntu/ubuntu-network-management/>

### fcitx

It is a input method.

```sh
# Install fcitx input method system
$ sudo apt install fcitx-bin
# Install Google Pinyin Chinese input method
$ sudo apt install fcitx-googlepinyin
```

Change the input method system from `IBus` to `fcitx` in `Region & Language`. Click `Manage Installed Languages`. Click `Install/Remove Languages` to install `Chinese Simplified` and/or `Chinese Traditional` if necessary. Remove all the input sources except `English (US)` under the `Input Sources` in `Region & Language`. Otherwise, there will be two input icons on your system. Reboot the computer and we would see a new input icon at the top right corner of our desktop. We then add Google Pinyin to the `fcitx` method. We start the `fcitx-configtool`by running the following command in the terminal. Click `+` to add input methods. Uncheck `Only Show Current Language`, select `Google Pinyin`, and press `OK`. Now you can start to use `Google Pinyin` by toggling using `Ctrl` + `Space` by default.

The default `fcitx` icon at idle is ugly. We would like to make it look better. We run the following commands in the terminal.

```sh
# Remove classic UI
sudo apt remove fcitx-ui-classic
# Install new UI
sudo apt install fcitx-ui-qimpanel
```

Reboot the computer and we would see a new penguin input icon at the top right corner of our desktop. It will turn to a keyboard icon whenever the cursor is placed somewhere allows inputs.

**全半角切换**

`Alt + Shift + Escape`

---

**References**:

1. <https://leimao.github.io/blog/Ubuntu-Gaming-Chinese-Input/>
2. [What are the meta, super, and hyper keys?](https://askubuntu.com/q/19558)

### Draw.io

```sh
$ wget https://github.com/jgraph/drawio-desktop/releases/download/v14.5.1/drawio-amd64-14.5.1.deb
$ sudo apt install ./drawio-amd64-14.5.1.deb
```

### Remmina

它是一个 SSH、远程桌面工具。

```sh
sudo snap install remmina
sudo snap connect remmina:avahi-observe :avahi-observe # servers discovery
sudo snap connect remmina:cups-control :cups-control # printing
sudo snap connect remmina:mount-observe :mount-observe # mount management
sudo snap connect remmina:password-manager-service :password-manager-service # password manager
cp ~/.ssh/* ~/snap/remmina/common/.ssh/ # donot do this now! I donot learn about its danger
sudo snap refresh remmina --channel=stable
```

ref: <https://remmina.org/how-to-install-remmina/#snap>

## 按类别

### 书籍

- [FBReader](https://fbreader.org/)(ePub, mobi, fb2, HTML, RTF, plain text. The primary formats are ePub and fb2)
- [Buka](https://github.com/oguzhaninan/Buka)(PDF)
- [Calibre](https://www.calibre-ebook.com/)(`sudo -v && wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sudo sh /dev/stdin install_dir=/opt`)
- [Bookworm](https://babluboy.github.io/bookworm/)(ePUB, PDF, MOBI, FB2, CBR, CBZ)
- [Ebook-Viewer](https://github.com/michaldaniel/Ebook-Viewer)
- [Foliate](https://github.com/johnfactotum/foliate)(ePUB, azw, azw3, mobi, fb2, fb2.zip, cbr, cbz, cbt, cb7, txt)
- [Moon+ Reader](https://www.moondownload.com/index.html)
- [Koodo Reader](https://github.com/troyeguo/koodo-reader)
