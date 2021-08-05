# MX Linux

MX Linux 19.4, based on Debian 10 buster

## Install

ref: <https://mxlinux.org/download-links/>

- Google Chrome
- VS Code
- ohmyzsh(autojump, zsh-syntax-highlighting, zsh-autosuggestions)
- git(default installed)
- Aptitude(better than apt)(default installed)
- apt-fast
- bluez(default installed)
- gh
- fcitx
- Flameshot
- neovim, gedit
- vlc(default installed)
- KeePass2(mono)
- Redshift
- Foliate(default installed)
- Vagrant
- Additional Drivers(rtl8821ce-dkms)
- laptop-mode-tools(power saving), Timeshift(backup)
- node, yarn
- font
- libreoffice(default installed)
- rsync(default installed)
- wpasupplicant
- aria2
- filezilla
- nmap
- rbenv
- fdisk
- GnuPG
- neofetch(default installed)
- curl(default installed)
- wget(default installed)
- DevDocs
- Youtube, Twitter, Telegram
- Oracle VM VirtualBox Manager
- [default background image](adrien-olichon-RCAhiGJsUUE-unsplash.jpg)
- gnome-disk-utility(auto mount drive)
- view log(tried: gnome-system-log,[glogg](https://glogg.bonnefon.org/),journalctl(default installed))

### nvm

```sh
wget https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
sh install.sh
nvm install --lts
npm install -g yarn
```

### Swap Caps Lock with left Ctrl

```sh
sudo vim /etc/default/keyboard
```

```conf
# before
XKBOPTIONS="grp_led:scroll,terminate:ctrl_alt_bksp"
# after
XKBOPTIONS="grp_led:scroll,terminate:ctrl_alt_bksp,ctrl:swapcaps"
```

### Google Chrome

```sh
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update 
sudo apt-get install google-chrome-stable
```

### VS Code

```sh
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gpg
sudo apt install apt-transport-https autojump
sudo apt update
sudo apt install code # or code-insiders
```

### ohmyzsh

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
sed -i "/# for examples/aif\ test -t l; then\nexec zsh\nfi" ~/.bashrc
sudo apt install autojump
curl https://raw.githubusercontent.com/tianheg/config/main/shell/zshrc --output ~/.zshrc
# edit ~/.zshrc
# zsh-syntax-highlighting,zsh-autosuggestions must at the end of plugins
```

ref:

1. <https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md#oh-my-zsh>

### Git

Install it from source code:

```sh
➜  git-2.32.0 make prefix=/usr all doc info
make: curl-config: Command not found # after installing python3-pycurl, error still exist; libcurl4-gnutls-dev installed, solved
    CC fuzz-commit-graph.o
In file included from commit-graph.h:4,
                 from fuzz-commit-graph.c:1:
git-compat-util.h:306:10: fatal error: openssl/ssl.h: No such file or directory # `sudo apt-get install libssl-dev` solved
 #include <openssl/ssl.h>
          ^~~~~~~~~~~~~~~
compilation terminated.
make: *** [Makefile:2489: fuzz-commit-graph.o] Error 1

http-push.c:22:10: fatal error: expat.h: No such file or directory # `sudo apt-get install libexpat1-dev` solved
 #include <expat.h>
          ^~~~~~~~~
compilation terminated.
make: *** [Makefile:2489: http-push.o] Error 1

SUBDIR templates
    MSGFMT po/build/locale/pt_PT/LC_MESSAGES/git.mo
/bin/sh: 1: msgfmt: not found # `sudo apt-get install gettext` solved
make: *** [Makefile:2686: po/build/locale/pt_PT/LC_MESSAGES/git.mo] Error 127

/bin/sh: 2: asciidoc: not found # `sudo apt-get install asciidoc` solved
/bin/sh: 2: xsltproc: not found # `sudo apt-get install xsltproc` solved
/bin/sh: 2: xmlto: not found # `sudo apt-get install xmlto` solved
/bin/sh: 2: docbook2x-texi: not found # `sudo apt-get install docbook2x` solved

sudo make prefix=/usr install # all done
git version
```

ref:

1. <https://gist.github.com/lxneng/1031014#file-gistfile1-txt>
2. <https://stackoverflow.com/a/3016986>
3. <https://github.com/scottcorgan/bucket-list/issues/2#issuecomment-40327294>
4. <https://stackoverflow.com/q/9500898>

### VM VirtualBox

Download deb file from <https://www.virtualbox.org/wiki/Linux_Downloads> Debian 10, Extension Pack from <https://www.virtualbox.org/wiki/Downloads>.

### redshift

Install it from MX Package Installer, ~~but need install geoclue2: `sudo apt-get install geoclue-2.0`~~ geoclue had been installed.

error:

Trying location provider 'geoclue2'...

Waiting for initial location to become available...

Unable to start GeoClue client:

GDBus.Error:org.freedesktop.DBus.Error.AccessDenied: 'redshift'

disallowed, no agent for UID 1000.

from [here](https://github.com/jonls/redshift/issues/318#issue-134184111), I got a way:

1. Run as `sudo redshift-gtk`
2. Add to `/etc/geoclue/geoclue.conf`:

```conf
[redshift]
allowed=true
system=false
users=
```

Can't solved it, donot use it.

### Input method(fcitx)

Need config System Locales: en_US.UTF-8,zh_CN.UTF-8

```sh
sudo apt install zenity
sudo apt install fcitx-bin
sudo apt install fcitx-config-gtk
sudo apt install fcitx-googlepinyin
# Remove classic UI
sudo apt remove fcitx-ui-classic
# Install new UI
sudo apt install fcitx-ui-qimpanel
im-config

# run on login
# Config "Session and Startup"
```

### GPG keys

**Save ~/.gnupg safely**, then import public keys from GitHub(user + web-flow):

```sh
wget -o tianheg-pubkeys.txt https://github.com/tianheg.gpg
wget -o github-web-flow.txt https://github.com/web-flow.gpg
gpg --import tianheg-pubkeys.txt
gpg --import github-web-flow.txt
```

### Docker

ref: <https://docs.docker.com/engine/install/debian/>

```sh
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io # install the latest version of Docker Engine and containerd
###
apt-cache madison docker-ce # List the versions available in your repo
sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io #  Install a specific version using the version string from the second column
###
sudo docker run hello-world # Verify that Docker Engine is installed correctly

###
sudo apt-get purge docker-ce docker-ce-cli containerd.io # Uninstall the Docker Engine, CLI, and Containerd packages
# Images, containers, volumes, or customized configuration files on your host are not automatically removed
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

The contents of `/var/lib/docker/`, including images, containers, volumes, and networks, are preserved. The Docker Engine package is now called `docker-ce`.

### Vagrant

Download deb file

### Wifi

需要安装 `rtl8821ce`（[link](https://github.com/tomaspinho/rtl8821ce)）

Wi-Fi not working for kernel >= 5.9:

The Linux Kernel 5.9 version comes with a broken `rtw88` module developed by Realtek that has poor compatibility with most revision of the 8821ce chip.

You must disable it by adding the following to your module blacklists (`/etc/modprobe.d/blacklist.conf`):

```conf
blacklist rtw88_8821ce
```

Then, make sure you have the rtl8821ce module correctly installed.

Turn off your computer, wait a few seconds (to force firmware reload) and then turn it on again.

```sh
➜  rtl8821ce git:(master) sudo ./dkms-install.sh
[sudo] password for tianheg: 
About to run dkms install steps...

Creating symlink /var/lib/dkms/rtl8821ce/v5.5.2_34066.20200325/source ->
                 /usr/src/rtl8821ce-v5.5.2_34066.20200325

DKMS: add completed.

Kernel preparation unnecessary for this kernel.  Skipping...

Building module:
cleaning build area...
'make' -j8 KVER=5.10.0-5mx-amd64..................
cleaning build area...

DKMS: build completed.

8821ce.ko:
Running module version sanity check.
 - Original module
   - No original module exists within this kernel
 - Installation
   - Installing to /lib/modules/5.10.0-5mx-amd64/updates/dkms/

depmod...

DKMS: install completed.
Finished running dkms install steps.
➜  rtl8821ce git:(master)
```

Wifi 成功启用。

## KDE

给我的感觉和 xfce 是不一样的。

## antix

竟然无法关机，可以了，它（Shutdown）隐藏在 Logout 菜单下。

## Tip

```sh
cryptsetup: WARNING: The initramfs image may not contain cryptsetup binaries 
    nor crypto modules. If that's on purpose, you may want to uninstall the 
    'cryptsetup-initramfs' package in order to disable the cryptsetup initramfs 
    integration and avoid this warning
```

Use my ssh key, gpg:

```sh
➜  github gh repo clone user/repo
Cloning into 'important-doc'...
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0440 for '/home/user/.ssh/id_rsa' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "/home/user/.ssh/id_rsa": bad permissions
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
exit status 128

➜  github chmod 400 ~/.ssh/id_rsa
```

ref: <https://stackoverflow.com/a/37779390>

mxlinux forum registration:

username: tianheg
password: mxlinux.2021
email: yidajiabei@qq.com

MX Linux can't use Ubuntu ppa ref: <https://mxlinux.org/wiki/system/add-ppa-repository/>

### VBoxManage error

```sh
➜  ub1 vagrant up
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Box 'generic/debian10' could not be found. Attempting to find and install...
    default: Box Provider: virtualbox
    default: Box Version: >= 0
==> default: Loading metadata for box 'generic/debian10'
    default: URL: https://vagrantcloud.com/generic/debian10
==> default: Adding box 'generic/debian10' (v3.3.2) for provider: virtualbox
    default: Downloading: https://vagrantcloud.com/generic/boxes/debian10/versions/3.3.2/providers/virtualbox.box
    default: Calculating and comparing box checksum...
==> default: Successfully added box 'generic/debian10' (v3.3.2) for 'virtualbox'!
==> default: Importing base box 'generic/debian10'...
Progress: 90%There was an error while executing `VBoxManage`, a CLI used by Vagrant
for controlling VirtualBox. The command and stderr is shown below.

Command: ["import", "/home/tianheg/.vagrant.d/boxes/generic-VAGRANTSLASH-debian10/3.3.2/virtualbox/box.ovf", "--vsys", "0", "--vmname", "generic-debian10-virtualbox_1628092278549_60819", "--vsys", "0", "--unit", "10", "--disk", "/media/tianheg/vd/vbox/generic-debian10-virtualbox_1628092278549_60819/generic-debian10-virtualbox-disk001.vmdk"]

Stderr: 0%...10%...20%...30%...40%...50%...60%...70%...80%...90%...100%
Interpreting /home/tianheg/.vagrant.d/boxes/generic-VAGRANTSLASH-debian10/3.3.2/virtualbox/box.ovf...
OK.
0%...
Progress state: NS_ERROR_INVALID_ARG
VBoxManage: error: Appliance import failed
VBoxManage: error: Code NS_ERROR_INVALID_ARG (0x80070057) - Invalid argument value (extended info not available)
VBoxManage: error: Context: "RTEXITCODE handleImportAppliance(HandlerArg*)" at line 1119 of file VBoxManageAppliance.cpp
```

原来是我 VM VirtualBox 的默认路径不存在导致的这个问题。

### VBox 里的 MX Linux

- 每隔一段时间卡一次
- 菜单栏的关机、退出当前用户等按钮，经过不知怎么回事的设置后，消失了，取而代之的是我的用户名
- 无法关机
