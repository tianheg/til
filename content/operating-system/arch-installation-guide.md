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

<https://io-oi.me/tech/hello-arch-linux/#隐藏-grub-除非按下-shift-键>

```sh
sudo vim /etc/grub.d/31_hold_shift
```

Add:

```sh
# 来源：https://gist.githubusercontent.com/anonymous/8eb2019db2e278ba99be/raw/257f15100fd46aeeb8e33a7629b209d0a14b9975/gistfile1.sh

#! /bin/sh
set -e

prefix="/usr"
exec_prefix="${prefix}"
datarootdir="${prefix}/share"

export TEXTDOMAIN=grub
export TEXTDOMAINDIR="${datarootdir}/locale"
. "${datarootdir}/grub/grub-mkconfig_lib"

found_other_os=

make_timeout () {

  if [ "x${GRUB_FORCE_HIDDEN_MENU}" = "xtrue" ] ; then 
    if [ "x${1}" != "x" ] ; then
      if [ "x${GRUB_HIDDEN_TIMEOUT_QUIET}" = "xtrue" ] ; then
    verbose=
      else
    verbose=" --verbose"
      fi

      if [ "x${1}" = "x0" ] ; then
    cat <<EOF
if [ "x\${timeout}" != "x-1" ]; then
  if keystatus; then
    if keystatus --shift; then
      set timeout=-1
    else
      set timeout=0
    fi
  else
    if sleep$verbose --interruptible 3 ; then
      set timeout=0
    fi
  fi
fi
EOF
      else
    cat << EOF
if [ "x\${timeout}" != "x-1" ]; then
  if sleep$verbose --interruptible ${GRUB_HIDDEN_TIMEOUT} ; then
    set timeout=0
  fi
fi
EOF
      fi
    fi
  fi
}

adjust_timeout () {
  if [ "x$GRUB_BUTTON_CMOS_ADDRESS" != "x" ]; then
    cat <<EOF
if cmostest $GRUB_BUTTON_CMOS_ADDRESS ; then
EOF
    make_timeout "${GRUB_HIDDEN_TIMEOUT_BUTTON}" "${GRUB_TIMEOUT_BUTTON}"
    echo else
    make_timeout "${GRUB_HIDDEN_TIMEOUT}" "${GRUB_TIMEOUT}"
    echo fi
  else
    make_timeout "${GRUB_HIDDEN_TIMEOUT}" "${GRUB_TIMEOUT}"
  fi
}

  adjust_timeout

    cat <<EOF
if [ "x\${timeout}" != "x-1" ]; then
  if keystatus; then
    if keystatus --shift; then
      set timeout=-1
    else
      set timeout=0
    fi
  else
    if sleep$verbose --interruptible 3 ; then
      set timeout=0
    fi
  fi
fi
EOF
```

## Problems

### `zsh: command not found: service`

### fcitx

Follow above section works
