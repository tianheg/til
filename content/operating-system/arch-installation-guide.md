# Arch Installation Guide

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

```sh
sudo pacman -S noto-fonts noto-fonts-extra noto-fonts-emoji noto-fonts-cjk ttf-dejavu ttf-liberation ttf-roboto ttf-inconsolata ttf-linux-libertine ttf-droid adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts
yay -S otf-eb-garamond ttf-monaco otf-san-francisco consolas-font
```

中文：

noto-fonts, noto-fonts-cjk, noto-fonts-emoji, noto-fonts-extra

代码：

monaco, menlo

<https://github.com/ueaner/fonts>

- 命令行安装的字体所在的目录：`/usr/share/fonts/`
- 手动安装的字体所在的目录：`~/.local/share/fonts/`

```sh
$ mkdir ~/.config/fontconfig
$ vim ~/.config/fontconfig/fonts.conf
```

```conf
<?xml version='1.0'?>
<!DOCTYPE fontconfig SYSTEM 'fonts.dtd'>
<fontconfig>

  <alias>
    <family>sans-serif</family>
    <prefer>
      <family>Linux Biolinum O</family>
      <family>Source Han Serif CN</family>
      <family>Source Han Sans CN</family>
      <family>Noto Sans CJK TC</family>
      <family>Noto Sans CJK JP</family>
      <family>Noto Sans CJK KR</family>
      <family>Noto Sans</family>
      <family>Noto Color Emoji</family>
    </prefer>
  </alias>

  <alias>
    <family>serif</family>
    <prefer>
      <family>Source Han Serif CN</family>
      <family>Noto Serif CJK TC</family>
      <family>Noto Serif CJK JP</family>
      <family>Noto Serif CJK KR</family>
      <family>Noto Serif</family>
      <family>Noto Color Emoji</family>
    </prefer>
  </alias>

  <alias>
    <family>monospace</family>
    <prefer>
      <family>Menlo</family>
      <family>Source Han Serif CN</family>
      <family>Source Han Sans CN</family>
      <family>Noto Sans CJK TC</family>
      <family>Noto Sans CJK JP</family>
      <family>Noto Sans CJK KR</family>
      <family>Noto Sans</family>
      <family>Noto Color Emoji</family>
    </prefer>
  </alias>

  <dir>~/.local/share/fonts</dir>
</fontconfig>
```

```sh
fc-cache -fv # update font cache
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

### Dash to Dock

```sh
sudo pacman -S sassc
git clone --branch ewlsh-ewlsh/gnome-40 https://github.com/micheleg/dash-to-dock.git
make
make install
```

<https://gitlab.gnome.org/GNOME/gnome-shell-extensions>

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

### `zsh: command not found: service`

### fcitx

Follow above section works
