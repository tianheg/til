# Arch Software Installation

## Proxy

### Clash

```sh
export CLASH_VERSION="1.6.5"
wget -O clash.gz https://github.com/Dreamacro/clash/releases/download/v${CLASH_VERSION}/clash-linux-amd64-v${CLASH_VERSION}.gz
gzip -f clash.gz -d
sudo mv ~/clash /usr/local/bin/clash
chmod +x /usr/local/bin/clash
clash # Generate config.yaml, Country.mmdb in ~/.config/clash
## download yaml file from your service provider, rename it to config.yaml, put it under your clash folder

# open clash at start https://github.com/Dreamacro/clash/wiki/clash-as-a-daemon
sudo vim /etc/systemd/system/clash.service
```

`/etc/systemd/system/clash.service`:

```sh
[Unit]
Description=Clash daemon, A rule-based proxy in Go.
After=network.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/clash -d "/home/archie/.config/clash"

[Install]
WantedBy=multi-user.target
```

```sh
systemctl daemon-reload
systemctl enable clash
```

## Input method

Want to remove ibus, use fcitx.

```sh
sudo pacman -S fcitx-im fcitx-configtool fcitx-googlepinyin
```

Add support for gtk,qt:

```txt
# /etc/profile
export XMODIFIERS="@im=fcitx"
export GTK_IM_MODULE="fcitx"
export QT_IM_MODULE="fcitx"
```

## Font

Default Gnome 40 font:

- Cantarell Regular 11
- Cantarell Regular 11
- Source Code Pro Regular 10
- Cantarell Bold 11

```sh
sudo pacman -S noto-fonts noto-fonts-extra noto-fonts-emoji noto-fonts-cjk ttf-dejavu ttf-liberation ttf-roboto ttf-inconsolata ttf-linux-libertine ttf-droid adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts
yay -S otf-eb-garamond ttf-monaco otf-san-francisco consolas-font
```

中文：

noto-fonts, noto-fonts-cjk, noto-fonts-emoji, noto-fonts-extra

代码：

monaco, menlo

- 命令行安装的字体所在的目录：`/usr/share/fonts/`
- 手动安装的字体所在的目录：`~/.local/share/fonts/`

```sh
fc-cache -fv # update font cache
```

## Config Git

```sh
wget -O ~/.gitconfig https://raw.githubusercontent.com/tianheg/dotfiles/main/git/gitconfig
```

## GPG

Modify `~/.gnupg/` permission:

```sh
# https://superuser.com/a/954536 ; https://superuser.com/a/954639
# Set ownership to your own user and primary group
chown -R "$USER:$(id -gn)" ~/.gnupg
# Set permissions to read, write, execute for only yourself, no others
chmod 700 ~/.gnupg
# Set permissions to read, write for only yourself, no others
chmod 600 ~/.gnupg/*
```

This step is to solve `gpg: WARNING: unsafe permissions on homedir '/home/user/.gnupg'`.

**Save ~/.gnupg safely**, then import public keys from GitHub(user + web-flow):

```sh
wget -O tianheg-pubkeys.txt https://github.com/tianheg.gpg
wget -O github-web-flow.txt https://github.com/web-flow.gpg
gpg --import tianheg-pubkeys.txt
gpg --import github-web-flow.txt
```

## archcn

Add repo:

```conf
[archlinuxcn]
Server = https://repo.archlinuxcn.org/$arch
```

to your `/etc/pacman.conf`.

For mirrors (mainly in China), see [archlinuxcn/mirrorlist-repo](https://github.com/archlinuxcn/mirrorlist-repo).

Import PGP Keys:

```sh
sudo pacman -Syy && sudo pacman -S archlinuxcn-keyring
```

## yay(donot use, only use pacman)

<https://github.com/Jguer/yay>

```sh
pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## Other Software

<https://io-oi.me/tech/hello-arch-linux/>

名字 | 说明 | 类似
:---:|:---:|:---:
google-chrome | Google Chrome 浏览器 | *
visual-studio-code-bin | Visual Studio Code | *
netease-cloud-music | 网易云音乐 | *
Flameshot | 现代、快捷、轻便的截图工具 | *
proxychains-ng | 终端内科学上网代理工具 | *
redshift | 显示屏色温调节工具 | f.lux
vlc | 强大的多媒体播放工具 | *
deadbeef | 终极音频播放软件 | foobar2000
telegram-desktop | 客户端开源的加密聊天工具 | *
liferea | RSS 阅读器 | *
qbittorrent | 好用的 BT 下载工具 | *
calibre | 电子书转换、编辑、阅读工具 | *
gthumb | 图片浏览工具，可简单编辑图片，可清除照片元数据 | *
libreoffice-fresh | 必备的办公软件 | Microsoft Office
peek | 录制 GIF 动图 | *
gimp | 强大的图片编辑工具 | Adobe Photoshop
inkscape | 强大的矢量图形编辑软件 | Adobe Illustrator、CorelDraw
shotcut | 强大的视频剪辑软件 | Adobe Premiere
fontforge | 字体设计、编辑软件 | FontCreator
audacity | 简单的音频编辑软件 | GoldWave
kid3 | 音频元数据编辑软件 | Mp3tag
aria2 | 强大的多线程下载工具 | *
youtube-dl | YouTube 视频下载工具 | *
baidupcs-go-git | 百度网盘下载工具 | *
ncmdump-go | 网易云音乐的 `.ncm` 格式转换工具 | *
glances | monitoring tool | *
keepass | password manage | *
hugo | static site generator | *
foliate | equb ... reader | *
anki | a spaced repetition system | *
mpv | to play audio on anki | vlc

```sh
sudo pacman -S telegram-desktop keepass liferea flameshot glances hugo foliate mpv informant
```

### informant

An Arch Linux News reader and pacman hook. You could use a pacman hook like informantAUR which prevents you from updating if there is fresh Arch News that you have not read since the last update ran.

ref: <https://wiki.archlinux.org/title/System_maintenance#Read_before_upgrading_the_system>

### SSH

```sh
chmod 400 ~/.ssh/id_ed25519 # solve sign_and_send_pubkey: signing failed for ED25519 "/home/user/.ssh/id_ed25519" from agent: agent refused operation; git@github.com: Permission denied (publickey).
```

### Virtualbox

<https://wiki.archlinux.org/title/VirtualBox>

```sh
sudo pacman -S virtualbox virtualbox-host-modules-arch virtualbox-ext-oracle
virtualbox
```

Error message:

```sh
WARNING: The vboxdrv kernel module is not loaded. Either there is no module
         available for the current kernel (5.13.8-arch1-1) or it failed to
         load. Please recompile the kernel module and install it by

           sudo /sbin/vboxconfig

         You will not be able to start VMs until this problem is fixed.
```

```sh
sudo modprobe vboxdrv
```

No message now.

### Vagrant

<https://wiki.archlinux.org/title/Vagrant>

```sh
sudo pacman -S vagrant
mkdir arch-vagrant &&  cd $_
vim Vagrantfile
vagrant up
```

`Vagrantfile`:

```sh
Vagrant.configure("2") do |config|
  config.vm.box = "archlinux/archlinux"
end
```

After exec `vagrant up`, error message:

> No usable default provider could be found for your system.
>
> Vagrant relies on interactions with 3rd party systems, known as
>
> "providers", to provide Vagrant with resources to run development
>
> environments. Examples are VirtualBox, VMware, Hyper-V.
>
> The easiest solution to this message is to install VirtualBox, which
>
> is available for free on all major platforms.
>
> If you believe you already have a provider available, make sure it
>
> is properly installed and configured. You can see more details about
>
> why a particular provider isn't working by forcing usage with
>
> `vagrant up --provider=PROVIDER`, which should give you a more specific
>
> error message for that particular provider.

After exec `sudo modprobe vboxdrv`, no message now.

```sh
vagrant up


Vagrant is currently configured to create VirtualBox synced folders with
the `SharedFoldersEnableSymlinksCreate` option enabled. If the Vagrant
guest is not trusted, you may want to disable this option. For more
information on this option, please refer to the VirtualBox manual:

  https://www.virtualbox.org/manual/ch04.html#sharedfolders

This option can be disabled globally with an environment variable:

  VAGRANT_DISABLE_VBOXSYMLINKCREATE=1

or on a per folder basis within the Vagrantfile:

  config.vm.synced_folder '/host/path', '/guest/path', SharedFoldersEnableSymlinksCreate: false
```

### Remove software

```sh
sudo pacman -Rs gnome-software gnome-calendar gnome-documents gnome-todo gnome-maps gnome-contacts evolution gnome-builder gnome-boxes geary gnome-clocks gnome-books gnome-photos gnome-connections gnome-games ghex gnome-mahjongg gnome-music epiphany
```

### Steam

```sh
sudo nano /etc/pacman.conf
```

```sh
-#[multilib]
-#Include = /etc/pacman.d/mirrorlist
+[multilib]
+Include = /etc/pacman.d/mirrorlist
```

```sh
sudo pacman -Syu
sudo pacman -S steam steam-native-runtime
```

I play Dota2, just a newbie.

### Mutt

终端邮件 <http://www.mutt.org/>

### Tracker

Gnome 自带的文件索引生成软件，它使文件搜索更快。

### Flameshot

可以配置下快捷键，使用起来更加快捷。去 Settings > Keyboard，然后下拉页面到底部，点击 `+` 号，Name 填 `Flameshot`，Command 填 `flameshot gui`，然后点击下 Shortcut 的右方方块，按下 `Alt` + `Super/Win` + `P` 键

### Anki

<https://apps.ankiweb.net/#download>

```sh
tar xjf ~/Downloads/anki-2.1.46-linux.tar.bz2
cd anki-2.1.46-linux
sudo ./install.sh
```

### exercism

```sh
# https://github.com/exercism/cli/releases/ download exercism-linux-64bit.tgz
tar -xf exercism-linux-64bit.tgz
# Once you download and extract the archive, make it available in your $PATH
cd ~/Downloads/exercism-linux-64bit
mkdir -p ~/bin
mv exercism ~/bin
~/bin/exercism
exercism configure --token=
```

### Scheme Programming Language

```sh
guile hello-world.scm
;;; note: source file /home/archie/exercism/scheme/hello-world/hello-world.scm
;;;       newer than compiled /home/archie/.cache/guile/ccache/2.2-LE-8-3.A/home/archie/exercism/scheme/hello-world/hello-world.scm.go
;;; note: auto-compilation is enabled, set GUILE_AUTO_COMPILE=0
;;;       or pass the --no-auto-compile argument to disable.
;;; compiling /home/archie/exercism/scheme/hello-world/hello-world.scm
;;; compiled /home/archie/.cache/guile/ccache/2.2-LE-8-3.A/home/archie/exercism/scheme/hello-world/hello-world.scm.go
Hello World!

guile hello-world.scm --no-auto-compile
```

How to close these info?

```zshrc
alias guile="guile --no-auto-compile"
```

[Install guile](https://www.linuxfromscratch.org/blfs/view/svn/general/guile.html)

## Bluetooth

```sh
sudo systemctl enable --now bluetooth
```

## Theme

```sh
sudo pacman -S gtk-engine-murrine gtk-engines
```

ref: <https://github.com/vinceliuice/Layan-gtk-theme>

## GNOME Extensions

Extensions install: Copy the unziped folder to `~/.local/share/gnome-shell/extensions/`, rename the folder with `metadata.json`'s uuid.

### Extension list

<https://extensions.gnome.org/extension/3088/extension-list/>

### Dash to Dock

```sh
sudo pacman -S sassc
git clone --branch ewlsh-ewlsh/gnome-40 https://github.com/micheleg/dash-to-dock.git
make
make install
```

<https://gitlab.gnome.org/GNOME/gnome-shell-extensions>

### Coverflow Alt-Tab

<https://extensions.gnome.org/extension/97/coverflow-alt-tab/>

### Tray Icons: Reloaded

<https://extensions.gnome.org/extension/2890/tray-icons-reloaded/>

### Simple net speed

<https://extensions.gnome.org/extension/1085/simple-net-speed/>

### GSconnect

<https://extensions.gnome.org/extension/1319/gsconnect/>

Connect PC with phone

## Hide GRUB

Tried [this way](https://io-oi.me/tech/hello-arch-linux/#隐藏-grub-除非按下-shift-键) not work, then try [this](https://www.reddit.com/r/linux4noobs/comments/5372gj/disable_arch_linux_grub_boot_menu/d7qjh6s?utm_source=share&utm_medium=web2x&context=3):

```sh
sudo vim /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

Edit `etc/default/grub`:

```sh
-GRUB_TIMEOUT=1
+GRUB_TIMEOUT=0
```

## Problems

### `command not found: service`

使用 `systemctl` 是可行的。

### fcitx

Follow above section works

### `Unknown download protocol: https`

安装软件时错误，Unknown download protocol: https

更新 pacman 包，但是当用 yay 下载 netease-cloud-music 时，仍然出现这个错误。

### 中文语言不能选择 Hanyu Pinyin (with AltGr dead keys)，当我通过鼠标点击切换到它时，电脑卡了

### Cannot find fcitx input method module for Qt4.

### 2次进入 tplogin.cn 均卡顿，似乎与进入网址无关

本来使用有线接入网络，树莓派需要用到有线，限于网线只有一根。于是，电脑连接无线网络。

进入路由器管理页面，点击〔设备管理〕/〔应用管理〕页面后，出现卡顿现象。具体表现：键盘鼠标失灵

采取措施：按住电源键重启。

依旧卡顿，仅仅打开一个网页。
