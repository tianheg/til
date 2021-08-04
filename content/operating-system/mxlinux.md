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
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/plugins/zsh-autosuggestions
sed -i "/# for examples/aif\ test -t l; then\nexec zsh\nfi" ~/.bashrc
# edit ~/.zshrc
```

### git

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

```sh
sudo apt install zenity
sudo apt install fcitx-bin
sudo apt install fcitx-googlepinyin
# Remove classic UI
sudo apt remove fcitx-ui-classic
# Install new UI
sudo apt install fcitx-ui-qimpanel
im-config
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

## Remove

- Geany

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
