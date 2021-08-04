# MX Linux

## Install

ref: <https://mxlinux.org/download-links/>

- Google Chrome
- VS Code
- ohmyzsh(autojump, zsh-syntax-highlighting, zsh-autosuggestions)
- git
- Aptitude(better than apt)
- apt-fast
- bluez
- gh
- fcitx
- Flameshot
- neovim, gedit
- vlc
- KeePass2(mono)
- Redshift
- Foliate
- Vagrant
- Additional Drivers(rtl8821ce-dkms)
- laptop-mode-tools(power saving), Timeshift(backup)
- node, yarn
- font
- libreoffice
- rsync
- wpasupplicant
- aria2
- filezilla
- nmap
- rbenv
- fdisk
- GnuPG
- neofetch
- curl
- wget
- DevDocs
- Youtube, Twitter, Telegram
- Oracle VM VirtualBox Manager

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
