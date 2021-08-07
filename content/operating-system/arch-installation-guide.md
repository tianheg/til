# Arch Installation Guide

## Proxy

### Clash

```sh
export CLASH_VERSION=""
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

## Other Software

```sh
sudo pacman -S telegram-desktop
```

## Bluetooth

```sh
sudo systemctl enable --now bluetooth
```

## Theme

```sh
sudo pacman -S gtk-engine-murrine gtk-engines
```

ref: <https://github.com/vinceliuice/Layan-gtk-theme>

## Extensions

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



### fcitx

Follow above section works
