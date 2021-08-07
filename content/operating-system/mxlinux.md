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

ref: https://stackoverflow.com/a/37779390

MX Linux can't use Ubuntu ppa ref: <https://mxlinux.org/wiki/system/add-ppa-repository/>
