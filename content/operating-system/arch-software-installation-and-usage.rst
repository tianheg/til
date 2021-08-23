.. role:: raw-html-m2r(raw)
   :format: html


Arch Software Installation and Usage
====================================

Hide GRUB
---------

Tried `this way <https://io-oi.me/tech/hello-arch-linux/#隐藏-grub-除非按下-shift-键>`_ not work, then try `this <https://www.reddit.com/r/linux4noobs/comments/5372gj/disable_arch_linux_grub_boot_menu/d7qjh6s?utm_source=share&utm_medium=web2x&context=3>`_\ :



   sudo vim /etc/default/grub
   sudo grub-mkconfig -o /boot/grub/grub.cfg

Edit ``etc/default/grub``\ :



   -GRUB_TIMEOUT=1
   +GRUB_TIMEOUT=0

Mount
-----

挂载外来文件系统，推荐使用 udiskctl(install udisks2, ``pkgfile -b udisksctl``\ ) 命令，很多时候不需要 root 权限就能挂载和卸载 from https://bbs.archlinuxcn.org/viewtopic.php?pid=44067#p44067

reflector
---------

https://wiki.archlinux.org/title/reflector

Automation
^^^^^^^^^^

``/etc/xdg/reflector/reflector.conf``\ :



   --save /etc/pacman.d/mirrorlist
   --country China
   --protocol https
   --latest 5



   systemctl enable reflector
   systemctl start reflector

Pacman hook
^^^^^^^^^^^

``/etc/pacman.d/hooks/mirrorupgrade.hook``\ :



   [Trigger]
   Operation = Upgrade
   Type = Package
   Target = pacman-mirrorlist

   [Action]
   Description = Updating pacman-mirrorlist with reflector and removing pacnew...
   When = PostTransaction
   Depends = reflector
   Exec = /bin/sh -c 'systemctl start reflector.service; [ -f /etc/pacman.d/mirrorlist.pacnew ] && rm /etc/pacman.d/mirrorlist.pacnew'

Proxy
-----

Clash
^^^^^



   export CLASH_VERSION="1.6.5"
   wget -O clash.gz https://github.com/Dreamacro/clash/releases/download/v${CLASH_VERSION}/clash-linux-amd64-v${CLASH_VERSION}.gz
   gzip -f clash.gz -d
   sudo mv ~/clash /usr/local/bin/clash
   chmod +x /usr/local/bin/clash
   clash # Generate config.yaml, Country.mmdb in ~/.config/clash
   ## download yaml file from your service provider, rename it to config.yaml, put it under your clash folder

   # open clash at start https://github.com/Dreamacro/clash/wiki/clash-as-a-daemon
   sudo vim /etc/systemd/system/clash.service

``/etc/systemd/system/clash.service``\ :



   [Unit]
   Description=Clash daemon, A rule-based proxy in Go.
   After=network.target

   [Service]
   Type=simple
   Restart=always
   ExecStart=/usr/local/bin/clash -d "/home/archie/.config/clash"

   [Install]
   WantedBy=multi-user.target



   systemctl daemon-reload
   systemctl enable clash

测试代理是否有效（还不起作用）：

from 依云 https://cfp.vim-cn.com/cb3wN/python

.. code:: py

   def test_youtube(port: int) -> Union[str, bool]:
     output = subprocess.check_output([
       'curl', '-sS', '-m30', '-H', 'Accept-Language: en',
       'https://www.youtube.com/premium', '--socks5-hostname', f'localhost:{port}',
     ], text=True)
     if 'Premium is not available in your country' in output:
       return False
     m = re.search(r'countryCode":"(\w+)', output)
     if m:
       return m.group(1)
     else:
       return 'US'

Input method
------------

Want to remove ibus, use fcitx.



   sudo pacman -S fcitx-im fcitx-configtool fcitx-googlepinyin

Add support for gtk,qt:

.. code:: text

   # /etc/profile
   export XMODIFIERS="@im=fcitx"
   export GTK_IM_MODULE="fcitx"
   export QT_IM_MODULE="fcitx"

fcitx4 to fcitx5:



   sudo pacman -Rsc fcitx
   sudo pacman -S fcitx5-im fcitx5-chinese-addons fcitx5-pinyin-zhwiki fcitx5-material-color

配置开机启动；主题：material-color-black

fcitx5 使用问题
^^^^^^^^^^^^^^^

``Enter`` 回车键异常：中文模式下，按 :raw-html-m2r:`<kbd>；</kbd>` 后再按 :raw-html-m2r:`<kbd>Enter</kbd>` 无法输入英文分号。可能不是问题，刚从 fcitx4 升级到 fcitx5。

ref:


#. https://zhuanlan.zhihu.com/p/341637818

Font
----

Use default Gnome 40 font:


* Cantarell Regular 11
* Cantarell Regular 11
* Source Code Pro Regular 10
* Cantarell Bold 11



   sudo pacman -S noto-fonts noto-fonts-extra noto-fonts-emoji noto-fonts-cjk ttf-dejavu ttf-liberation ttf-roboto ttf-inconsolata ttf-linux-libertine ttf-droid adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts
   yay -S otf-eb-garamond ttf-monaco otf-san-francisco consolas-font

中文：

noto-fonts, noto-fonts-cjk, noto-fonts-emoji, noto-fonts-extra

代码：

monaco, menlo, hack, IBM Plex Mono


* 命令行安装的字体所在的目录：\ ``/usr/share/fonts/``
* 手动安装的字体所在的目录：\ ``~/.local/share/fonts/``



   fc-cache -fv # update font cache

ref:


#. https://realdougwilson.com/writing/coding-with-character

Bluetooth
---------



   sudo systemctl enable --now bluetooth

Git
---



   wget -O ~/.gitconfig https://raw.githubusercontent.com/tianheg/dotfiles/main/git/gitconfig

   ## SSH
   chmod 400 ~/.ssh/id_ed25519
   # solve sign_and_send_pubkey: signing failed for ED25519 "/home/user/.ssh/id_ed25519" from agent: agent refused operation; git@github.com: Permission denied (publickey).

GPG
---

Modify ``~/.gnupg/`` permission:



   # https://superuser.com/a/954536 ; https://superuser.com/a/954639
   # Set ownership to your own user and primary group
   chown -R "$USER:$(id -gn)" ~/.gnupg
   # Set permissions to read, write, execute for only yourself, no others
   chmod 700 ~/.gnupg
   # Set permissions to read, write for only yourself, no others
   chmod 600 ~/.gnupg/*

This step is to solve ``gpg: WARNING: unsafe permissions on homedir '/home/user/.gnupg'``.

**Save ~/.gnupg safely**\ , then import public keys from GitHub(user + web-flow):



   wget -O tianheg-pubkeys.txt https://github.com/tianheg.gpg
   wget -O github-web-flow.txt https://github.com/web-flow.gpg
   gpg --import tianheg-pubkeys.txt
   gpg --import github-web-flow.txt

archcn
------

Add repo:



   [archlinuxcn]
   Server = https://repo.archlinuxcn.org/$arch

to your ``/etc/pacman.conf``.

For mirrors (mainly in China), see `archlinuxcn/mirrorlist-repo <https://github.com/archlinuxcn/mirrorlist-repo>`_.

Import PGP Keys:



   sudo pacman -Syy && sudo pacman -S archlinuxcn-keyring

pacman
------

Is it possible that there is a major kernel update in the repository, and that some of the driver packages have not been updated?

No, it is not possible. Major kernel updates (e.g. linux 3.5.0-1 to linux 3.6.0-1) are always accompanied by rebuilds of all supported kernel driver packages. On the other hand, if you have an unsupported driver package (e.g. from the AUR) installed on your system, then a kernel update might break things for you if you do not rebuild it for the new kernel. Users are responsible for updating any unsupported driver packages that they have installed.

pacman 命令
^^^^^^^^^^^



   ## Common
   pacman -Qe # List all explicitly installed packages
   pacman -Qet # list all packages explicitly installed and not required as dependencies
   pacman -Qent # List all explicitly installed native packages (i.e. present in the sync database) that are not direct or optional dependencies
   pacman -Qn # List all native packages (installed from the sync database(s))
   pacman -Qm # List all foreign packages (typically manually downloaded and installed or packages removed from the repositories)

   sudo pacman -Qtdq | sudo pacman -Rns - # recursively removing orphans and their configuration files

   sudo pacman -Qii | awk '/^MODIFIED/ {print $2}' # print modified files under /etc

   pacman -Qs regex # List packages by regex

   pacman -Qg group_name # List installed packages under this group
   pacman -Sg group # List all packages in the package group named `group`, etc, base-devel, gnome

   pacman -Syu # Update package list and upgrade all packages afterwards
   pacman -Syu git # Update package list, upgrade all packages, and then install git if it wasn’t already installed

   pacman -S package_name1 package_name2 # Installing specific packages
   pacman -S $(pacman -Ssq package_regex) # Install a list of packages with regex
   pacman -S extra/package_name # Install specific repositories' package
   pacman -S plasma-{desktop,mediacenter,nm}
   pacman -S plasma-{workspace{,-wallpapers},pa}

   pacman -S gnome # Install through group of packages
   Enter a selection (default=all): 1-10 15 # which will select packages 1 through 10 and 15 for installation
   Enter a selection (default=all): ^5-8 ^2 # which will select all packages except 5 through 8 and 2 for installation

   pacman -R package_name # remove a single package, leaving all of its dependencies installed
   pacman -Rs package_name # remove a single package and its dependencies which are not required by any other installed package

   pacman -Qtd # check for packages that were installed as a dependency but now, no other packages depend on them

   pacman -Ss string1 string2 ... # search for packages in the database
   pacman -Qs string1 string2 ... # search for already installed packages
   pacman -F string1 string2 ... # search for package file names in remote packages
   pacman -Fy string1 string2 ... # first flush local cache, then search for package file names in remote packages

   pacman -Si package_name # display extensive information about a given package
   pacman -Qi package_name # display extensive information about locally installed packages
   pacman -Qii package_name # also display the list of backup files and their modification states

   pacman -Ql package_name # retrieve a list of the files installed by a package
   pacman -Fl package_name # retrieve a list of the files installed by a remote package


   ## Rarely use
   pacman -Qk package_name # verify the presence of the files installed by a package, Passing the k flag twice will perform a more thorough check
   pacman -Qo /path/to/file_name # query the database to know which package a file in the file system belongs to
   pacman -F /path/to/file_name # query the database to know which remote package a file belongs to

应该避免执行的 ``pacman`` 指令
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



   pacman -Syu # always run
   pacman -Sy # never run!!!
   pacman -Rdd package # never run!!!

When installing packages in Arch, avoid refreshing the package list without upgrading the system (for example, when a package is no longer found in the official repositories). In practice, do not run pacman -Sy package_name instead of pacman -Syu package_name, as this could lead to dependency issues.

list all development/unstable packages
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



   pacman -Qq | grep -Ee '-(bzr|cvs|darcs|git|hg|svn)$'

执行 pacman 命令过程中，遇到的信息/警告/错误
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



   warning: dependency cycle detected # 循环依赖

When ``sudo pacman -Syu``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

WARNING: Possibly missing firmware for module
"""""""""""""""""""""""""""""""""""""""""""""

这是一种警告。

ref:


#. https://wiki.archlinux.org/title/Mkinitcpio#Possibly_missing_firmware_for_module_XXXX
#. https://arcolinuxforum.com/viewtopic.php?t=1174

gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""



   gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
   gpg: key 1EB2638FF56C0C53: no user ID for key signature packet of class 10
   gpg: next trustdb check due at 2021-10-09
   -> Disabled 3 keys.

   ## try 1
   sudo pacman-key --refresh-keys
   sudo pacman -S archlinux-keyring archlinuxcn-keyring
   ## try 2
   sudo rm -R /etc/pacman.d/gnupg/ # No such file or directory
   sudo rm -rf /etc/pacman.d/gnupg/
   sudo rm -R /root/.gnupg/ 
   sudo rm -R /var/cache/pacman/pkg/
   sudo gpg --refresh-keys
   sudo pacman-key --init
   sudo pacman-key --populate archlinux # still display `gpg: key xxx: no user ID for key signature packet of class 10`
   sudo pacman-key --refresh-keys
   sudo pacman -Syyu

ref:


#. https://github.com/yuk7/ArchWSL/issues/91#issuecomment-506806989

warning: /etc/pacman.d/mirrorlist installed as /etc/pacman.d/mirrorlist.pacnew
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

/etc/mkinitcpio.d/linux.preset: 'default' and /etc/mkinitcpio.d/linux.preset: 'fallback'
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

`mkinitcpio - ArchWiki <https://wiki.archlinux.org/title/Mkinitcpio>`_

ref:


#. https://wiki.archlinux.org/title/Arch_User_Repository#Installing_and_upgrading_packages
#. https://wiki.archlinux.org/title/Frequently_asked_questions#Is_it_possible_that_there_is_a_major_kernel_update_in_the_repository,_and_that_some_of_the_driver_packages_have_not_been_updated?
#. https://wiki.archlinux.org/title/Pacman/Tips_and_tricks
#. https://wiki.archlinux.org/title/Pacman
#. https://wiki.archlinux.org/title/System_maintenance#Avoid_certain_pacman_commands
#. https://wiki.archlinux.org/title/Pacman/Rosetta

yay(\ :raw-html-m2r:`<del>donot use, only use pacman</del>`\ )
--------------------------------------------------------------

Yet Another Yogurt: A utility for Arch Linux to build and install packages from the Arch User Repository.

安装 yay
^^^^^^^^



   sudo pacman -S yay
   # pacman -S --needed git base-devel
   # git clone https://aur.archlinux.org/yay.git
   # cd yay
   # makepkg -si

使用 yay
^^^^^^^^



   # Interactively search and install packages from the repos and AUR:
   yay package_name|search_term
   # Synchronize and update all packages from the repos and AUR:
   yay
   #Synchronize and update only AUR packages:
   yay -Sua
   # Install a new package from the repos and AUR:
   yay -S package_name
   # Remove an installed package and both its dependencies and configuration files:
   yay -Rns package_name
   # Search the package database for a keyword from the repos and AUR:
   yay -Ss keyword
   # Remove orphaned packages (installed as dependencies but not required by any package):
   yay -Yc
   # Show statistics for installed packages and system health:
   yay -Ps

yay 问题
^^^^^^^^


#. 安装时总是出现 ``==> WARNING: Using existing $srcdir/ tree``\ ，这个可以忽视，只是说明安装过程。
#. timeout 问题 https://github.com/Jguer/yay/issues/1278#issuecomment-635833427
#. ``Missing AUR Packages``

ref:


#. https://github.com/Jguer/yay
#. https://github.com/Jguer/yay/issues/1248

Imager(rpi-imager)
------------------



   yay -S rpi-imager

对于支持 UEFI 启动的设备，直接复制 iso 镜像中的所有文件到安装介质（如 U 盘）中即可启动。

KDE
---

konsole
^^^^^^^

文档读到 https://docs.kde.org/stable5/en/konsole/konsole/console-dialogs.html

ref: https://forum.kde.org/viewtopic.php?f=21&t=78963#p380065

profile configuration file ``~/.local/share/konsole/archie.profile``\ :



   [Appearance]
   AntiAliasFonts=true
   BoldIntense=true
   ColorScheme=custom
   Font=Monaco,11,-1,5,50,0,0,0,0,0
   UseFontLineChararacters=false

   [General]
   Name=archie
   Parent=FALLBACK/
   TerminalColumns=210

Highlight style: ``~/.local/share/konsole/custom.colorscheme``\ :

.. code:: scheme

   [Background]
   Color=0,0,0
   RandomHueRange=360
   RandomSaturationRange=100

   [BackgroundFaint]
   Color=0,0,0
   RandomHueRange=360
   RandomSaturationRange=100

   [BackgroundIntense]
   Color=0,0,0
   RandomHueRange=360
   RandomSaturationRange=100

   [Color0]
   Color=0,0,0

   [Color0Faint]
   Color=24,24,24

   [Color0Intense]
   Color=104,104,104

   [Color1]
   Color=250,75,75

   [Color1Faint]
   Color=101,25,25

   [Color1Intense]
   Color=255,84,84

   [Color2]
   Color=24,178,24

   [Color2Faint]
   Color=0,101,0

   [Color2Intense]
   Color=84,255,84

   [Color3]
   Color=178,104,24

   [Color3Faint]
   Color=101,74,0

   [Color3Intense]
   Color=255,255,84

   [Color4]
   Color=24,24,178

   [Color4Faint]
   Color=0,0,101

   [Color4Intense]
   Color=84,84,255

   [Color5]
   Color=225,30,225

   [Color5Faint]
   Color=95,5,95

   [Color5Intense]
   Color=255,84,255

   [Color6]
   Color=24,178,178

   [Color6Faint]
   Color=0,101,101

   [Color6Intense]
   Color=84,255,255

   [Color7]
   Color=178,178,178

   [Color7Faint]
   Color=101,101,101

   [Color7Intense]
   Color=255,255,255

   [Foreground]
   Color=24,240,24
   RandomHueRange=360
   RandomSaturationRange=100

   [ForegroundFaint]
   Color=18,200,18
   RandomHueRange=360
   RandomSaturationRange=100

   [ForegroundIntense]
   Color=24,240,24
   RandomHueRange=360
   RandomSaturationRange=100

   [General]
   Blur=true
   ColorRandomization=true
   Description=custom
   Opacity=1
   Wallpaper=/home/archie/Pictures/adrien-olichon-RCAhiGJsUUE-unsplash.jpg

``~/.config/konsolerc``\ :



   MenuBar=Disabled
   State=AAAA/wAAAAD9AAAAAAAAB4AAAAO1AAAABAAAAAQAAAAIAAAACPwAAAABAAAAAgAAAAIAAAAWAG0AYQBpAG4AVABvAG8AbABCAGEAcgEAAAAA/////wAAAAAAAAAAAAAAHABzAGUAcwBzAGkAbwBuAFQAbwBvAGwAYgBhAHIBAAAFlf////8AAAAAAAAAAA==
   StatusBar=Disabled
   eDP1 Window-Maximized 1920x1080=true

   [Desktop Entry]
   DefaultProfile=archie.profile

   [KFileDialog Settings]
   Recent Files[$e]=adrien-olichon-RCAhiGJsUUE-unsplash.jpg,file:$HOME/Pictures/adrien-olichon-RCAhiGJsUUE-unsplash.jpg
   Recent URLs[$e]=file:$HOME/Pictures/
   detailViewIconSize=16

   [KonsoleWindow]
   ShowMenuBarByDefault=false

   [MainWindow]
   RestorePositionForNextInstance=false
   State=AAAA/wAAAAD9AAAAAAAAB4AAAAOWAAAABAAAAAQAAAAIAAAACPwAAAABAAAAAgAAAAIAAAAWAG0AYQBpAG4AVABvAG8AbABCAGEAcgEAAAAA/////wAAAAAAAAAAAAAAHABzAGUAcwBzAGkAbwBuAFQAbwBvAGwAYgBhAHIBAAAFcf////8AAAAAAAAAAA==
   StatusBar=Disabled
   ToolBarsMovable=Disabled
   eDP1 Height 1920x1080=1080
   eDP1 Width 1920x1080=1920
   eDP1 Window-Maximized 1920x1080=true
   eDP1 XPosition 1920x1080=0
   eDP1 YPosition 1920x1080=85

   [MainWindow][Toolbar mainToolBar]
   IconSize=16

   [Notification Messages]
   CloseAllEmptyTabs=true

konsole keyboard shortcut
~~~~~~~~~~~~~~~~~~~~~~~~~


* ``Ctrl Shift M`` Open/Close menu bar
* ``Ctrl Shift (`` split view Left/Right
* ``Ctrl Shift (`` split view Left/Right
* ``Ctrl Shift T`` new Tab

Swap Lctrl with CapsLock
^^^^^^^^^^^^^^^^^^^^^^^^

System Settings --> Keyboard --> Advanced

Error Discover(Software Center)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uninstall it.

kde Connect
^^^^^^^^^^^



   sudo pacman -S kdeconnect

seahorse + kde wallet
^^^^^^^^^^^^^^^^^^^^^



   sudo pacman -S kwalletmanager seahorse

GNOME
-----

Extensions install: Copy the unziped folder to ``~/.local/share/gnome-shell/extensions/``\ , rename the folder with ``metadata.json``\ 's uuid.

Remove software
^^^^^^^^^^^^^^^



   sudo pacman -Rs gnome-software gnome-calendar gnome-documents gnome-todo gnome-maps gnome-contacts evolution gnome-builder gnome-boxes geary gnome-clocks gnome-books gnome-photos gnome-connections gnome-games ghex gnome-mahjongg gnome-music epiphany totem accerciser dconf-editor glade five-or-more four-in-a-row gedit gnome-sudoku gnome-nettool gnome-nibbles gnome-recipes gnome-robots gnome-taquin gnome-tetravex gnome-weather hitori iagno

totem <--> Gnome Video

iagno <--> Reversi

Extension
^^^^^^^^^

https://extensions.gnome.org/extension/3088/extension-list/

Dash to Dock
~~~~~~~~~~~~



   sudo pacman -S sassc
   git clone --branch ewlsh-ewlsh/gnome-40 https://github.com/micheleg/dash-to-dock.git
   make
   make install

https://gitlab.gnome.org/GNOME/gnome-shell-extensions

Coverflow Alt-Tab
~~~~~~~~~~~~~~~~~

https://extensions.gnome.org/extension/97/coverflow-alt-tab/

Tray Icons: Reloaded
~~~~~~~~~~~~~~~~~~~~

https://extensions.gnome.org/extension/2890/tray-icons-reloaded/

Simple net speed
~~~~~~~~~~~~~~~~

https://extensions.gnome.org/extension/1085/simple-net-speed/

GSconnect
~~~~~~~~~

https://extensions.gnome.org/extension/1319/gsconnect/

Connect PC with phone

Other Software
--------------

ref: https://io-oi.me/tech/hello-arch-linux/

   :header-rows: 1

   * - 名字
     - 说明
     - 类似
   * - google-chrome
     - Google Chrome 浏览器
     - *
   * - visual-studio-code-bin
     - Visual Studio Code
     - *
   * - netease-cloud-music
     - 网易云音乐
     - *
   * - flameshot
     - 现代、快捷、轻便的截图工具
     - *
   * - proxychains-ng
     - 终端内科学上网代理工具
     - *
   * - redshift
     - 显示屏色温调节工具
     - f.lux
   * - vlc
     - 强大的多媒体播放工具
     - *
   * - telegram-desktop
     - 客户端开源的加密聊天工具
     - *
   * - gthumb
     - 图片浏览工具，可简单编辑图片，可清除照片元数据
     - *
   * - libreoffice-fresh
     - 必备的办公软件
     - Microsoft Office
   * - inkscape
     - 强大的矢量图形编辑软件
     - Adobe Illustrator、CorelDraw
   * - youtube-dl
     - YouTube 视频下载工具
     - *
   * - glances
     - monitoring tool
     - *
   * - keepass
     - password manage
     - *
   * - hugo
     - static site generator
     - *
   * - foliate
     - equb ... reader
     - *
   * - anki
     - a spaced repetition system
     - *
   * - informant
     - arch news reader and pacman hook
     - *
   * - dnsutils
     - ``dig``
     - *
   * - dnsmasq
     - 使用国外 DNS 造成国内网站访问慢的解决方法
     - *
   * - tldr
     - https://github.com/tldr-pages/tldr
     - *
   * - virtualbox
     - Virtual Machine
     - *
   * - earlyoom
     - Early OOM Daemon for Linux
     - *
   * - gtk2,3,4
     - gtk
     - *
   * - lsb-release
     - LSB version query program
     - *
   * - exa
     - 
     - *
   * - qemu
     - A generic and open source machine emulator and virtualizer
     - virtualbox
   * - python-sphinx
     - a documentation generator
     - *
   * - filezilla
     - Fast and reliable FTP, FTPS and SFTP client
     - *
   * - intellij-idea-community-edition
     - IDE
     - VS Studio
   * - mysql
     - Database
     - a lot
   * - tomcat8
     - Open source implementation of the Java Servlet 3.1 and JavaServer Pages 2.3 technologies
     - *
   * - sagemath
     - Open Source Mathematics Software, free alternative to Magma, Maple, Mathematica, and Matlab
     - Matlab
   * - dkms
     - Dynamic Kernel Modules System
     - *
   * - Maven
     - Java project management and project comprehension tool
     - *


   sudo pacman -S google-chrome visual-studio-code-bin netease-cloud-music flameshot proxychains-ng redshift vlc telegram-desktop gthumb libreoffice-fresh inkscape youtube-dl glances keepass hugo foliate anki informant dnsutils dnsmasq tldr virtualbox virtualbox-host-modules-arch virtualbox-ext-oracle virtualbox earlyoom gtk2 gtk3 gtk4 lsb-release exa qemu python-sphinx filezilla intellij-idea-community-edition mysql tomcat8 sagemath dkms maven

maven
^^^^^

mvn

  Apache Maven.
  Tool for building and managing Java-based projects.
  More information: https://maven.apache.org.

  - Compile a project:
    mvn compile

  - Compile and package the compiled code in its distributable format, such as a `jar`:
    mvn package

  - Compile and package, skipping unit tests:
    mvn package -Dmaven.test.skip=true

  - Install the built package in local maven repository. (This will invoke the compile and package commands too):
    mvn install

  - Delete build artifacts from the target directory:
    mvn clean

  - Do a clean and then invoke the package phase:
    mvn clean package

  - Clean and then package the code with a given build profile:
    mvn clean -Pprofile package

  - Run a class with a main method:
    mvn exec:java -Dexec.mainClass="com.example.Main" -Dexec.args="arg1 arg2"

dkms
^^^^

To solve ``Realtek RTL8821CE Driver`` problem

ref: https://github.com/tomaspinho/rtl8821ce

Sagemath
^^^^^^^^



   ➜  ~ pacin sagemath
   resolving dependencies...
   looking for conflicting packages...
   warning: dependency cycle detected:
   warning: python-ipykernel will be installed before its python-jupyter_client dependency
   warning: dependency cycle detected:
   warning: jupyter will be installed before its python-ipywidgets dependency

Tomcat8
^^^^^^^



   sudo pacman -S tomcat8
   extra/eclipse-ecj          4.6.3-2        1.65 MiB       1.53 MiB
   extra/java-commons-daemon  1.2.4-1        0.02 MiB       0.02 MiB
   extra/java-jsvc            1.2.4-1        0.06 MiB       0.02 MiB
   extra/tomcat8              8.5.70-1       9.83 MiB       5.54 MiB

   Optional dependencies for tomcat8
   tomcat-native: to allow optimal performance in production environments
   \:\: Running post-transaction hooks...
   (1/4) Creating system user accounts...
   Creating group tomcat8 with gid 57.
   Creating user tomcat8 (Tomcat 8 user) with uid 57 and gid 57.

MySQL
^^^^^

   sudo pacman -S mysql
   archlinuxcn/libmysqlclient  8.0.24-1       6.89 MiB       1.31 MiB
   archlinuxcn/mysql-clients   8.0.24-1      52.30 MiB       2.12 MiB
   archlinuxcn/mysql           8.0.24-1     172.41 MiB      19.10 MiB

   :: You need to initialize the MySQL data directory prior to starting
   the service. This can be done with mysqld --initialize command, e.g.:
   mysqld --initialize --user=mysql --basedir=/usr --datadir=/var/lib/mysql
   :: Additionally you should secure your MySQL installation using
   mysql_secure_installation command after starting the mysqld service
   Optional dependencies for mysql
   perl-dbd-mysql: for mysqlhotcopy, mysql_convert_table_format, mysql_setpermission, mysqldumpslow
   :: Running post-transaction hooks...
   (1/4) Creating system user accounts...
   Creating group mysqlrouter with gid 88.
   Creating user mysqlrouter (MySQL) with uid 88 and gid 88.
   Creating group mysql with gid 89.
   Creating user mysql (MySQL) with uid 89 and gid 89.
   (2/4) Reloading system manager configuration...
   (3/4) Creating temporary files...
   (4/4) Arming ConditionNeedsUpdate...

.. code-block:: sh
   :linenos:

   mysqld --initialize --user=mysql --basedir=/usr --datadir=/var/lib/mysql
   mysqld: Can't create directory '/var/lib/mysql/' (OS errno 17 - File exists)
   2021-08-23T03:01:13.567666Z 0 [Warning] [MY-010915] [Server] 'NO_ZERO_DATE', 'NO_ZERO_IN_DATE' and 'ERROR_FOR_DIVISION_BY_ZERO' sql modes should be used with strict mode. They will be merged with strict mode in a future release.
   2021-08-23T03:01:13.568521Z 0 [System] [MY-013169] [Server] /usr/bin/mysqld (mysqld 8.0.24) initializing of server in progress as process 64858
   2021-08-23T03:01:13.579931Z 0 [ERROR] [MY-013236] [Server] The designated data directory /var/lib/mysql/ is unusable. You can remove all files that the server added to it.
   2021-08-23T03:01:13.580098Z 0 [ERROR] [MY-010119] [Server] Aborting
   2021-08-23T03:01:13.583005Z 0 [System] [MY-010910] [Server] /usr/bin/mysqld: Shutdown complete (mysqld 8.0.24)  Source distribution.

IDEA
^^^^



   sudo pacman -S intellij-idea-community-edition
   # select jdk11-openjdk
   extra/java-environment-common              3-3              0.00 MiB       0.00 MiB
   extra/java-runtime-common                  3-3              0.01 MiB       0.00 MiB
   extra/jdk11-openjdk                        11.0.12.u7-1    87.48 MiB      76.32 MiB
   extra/jre11-openjdk                        11.0.12.u7-1     0.52 MiB       0.19 MiB
   extra/jre11-openjdk-headless               11.0.12.u7-1   157.54 MiB      35.20 MiB
   extra/libnet                               1:1.1.6-1        0.30 MiB       0.09 MiB
   community/intellij-idea-community-edition  4:2021.1.3-1  1245.40 MiB     436.08 MiB
   For the complete set of Java binaries to be available in your PATH,
   you need to re-login or source /etc/profile.d/jre.sh
   Please note that this package does not support forcing JAVA_HOME as former package java-common did

   when you use a non-reparenting window manager,
   set _JAVA_AWT_WM_NONREPARENTING=1 in /etc/profile.d/jre.sh

Sphinx
^^^^^^

Sphinx is a documentation generator or a tool that translates a set of plain text source files into various output formats, automatically producing cross-references, indices, etc.



   pip install sphinx-autobuild rstcheck # for VS Code extension: reStructuredText
   pip install sphinx-rtd-theme # sphinx-rtd-theme theme
   pip install m2r2 # converts a markdown file including reStructuredText (rst) markups to a valid rst format

exa
^^^

A modern replacement for ``ls`` (List directory contents) https://the.exa.website



   exa
   exa --oneline # List files one per line
   exa --all # List all files, including hidden files
   exa --long --all # Long format list (permissions, ownership, size and modification date) of all files
   exa --reverse --sort=size # List files with the largest at the top
   exa --long --tree --level=3 # Display a tree of files, three levels deep
   exa --long --sort=modified # List files sorted by modification date (oldest first)
   exa --long --header --icons --git # List files with their headers, icons, and Git statuses
   exa --git-ignore # Don't list files mentioned in `.gitignore`

informant
^^^^^^^^^

An Arch Linux News reader and pacman hook. You could use a pacman hook like informantAUR which prevents you from updating if there is fresh Arch News that you have not read since the last update ran.

ref: https://wiki.archlinux.org/title/System_maintenance#Read_before_upgrading_the_system

Virtualbox
^^^^^^^^^^

https://wiki.archlinux.org/title/VirtualBox

Error message:



   WARNING: The vboxdrv kernel module is not loaded. Either there is no module
            available for the current kernel (5.13.8-arch1-1) or it failed to
            load. Please recompile the kernel module and install it by

              sudo /sbin/vboxconfig

            You will not be able to start VMs until this problem is fixed.



   sudo modprobe vboxdrv

No message now.

earlyoom
^^^^^^^^

如果是为了避免系统卡死，可以安装并使用 earlyoom。

该软件默认将在空余内存、空余swap两者均低于10%时，结束 oom_score 值最高的进程，避免系统内存耗尽卡死。

from https://bbs.archlinuxcn.org/viewtopic.php?pid=45774#p45774



   # after install
   sudo systemctl enable --now earlyoom

Vagrant
^^^^^^^

https://wiki.archlinux.org/title/Vagrant



   sudo pacman -S vagrant
   mkdir arch-vagrant &&  cd $_
   vim Vagrantfile
   vagrant up

``Vagrantfile``:
Vagrant.configure("2") do \|config\|
config.vm.box = "archlinux/archlinux"
end

After exec ``vagrant up``\ , error message:

..

   No usable default provider could be found for your system.

   Vagrant relies on interactions with 3rd party systems, known as

   "providers", to provide Vagrant with resources to run development

   environments. Examples are VirtualBox, VMware, Hyper-V.

   The easiest solution to this message is to install VirtualBox, which

   is available for free on all major platforms.

   If you believe you already have a provider available, make sure it

   is properly installed and configured. You can see more details about

   why a particular provider isn't working by forcing usage with

   ``vagrant up --provider=PROVIDER``\ , which should give you a more specific

   error message for that particular provider.


After exec ``sudo modprobe vboxdrv``\ , no message now.



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

Mutt
^^^^

终端邮件 http://www.mutt.org/

Flameshot
^^^^^^^^^

可以配置下快捷键，使用起来更加快捷。去 Settings > Keyboard，然后下拉页面到底部，点击 ``+`` 号，Name 填 ``Flameshot``\ ，Command 填 ``flameshot gui``\ ，然后点击下 Shortcut 的右方方块，按下 ``Alt`` + ``Super/Win`` + ``P`` 键

Anki
^^^^

https://apps.ankiweb.net/#download



   tar xjf ~/Downloads/anki-2.1.46-linux.tar.bz2
   cd anki-2.1.46-linux
   sudo ./install.sh

exercism
^^^^^^^^



   # https://github.com/exercism/cli/releases/ download exercism-linux-64bit.tgz
   tar -xf exercism-linux-64bit.tgz
   # Once you download and extract the archive, make it available in your $PATH
   cd ~/Downloads/exercism-linux-64bit
   mkdir -p ~/bin
   mv exercism ~/bin
   ~/bin/exercism
   exercism configure --token=

Scheme Programming Language
^^^^^^^^^^^^^^^^^^^^^^^^^^^



   guile hello-world.scm
   ;;; note: source file /home/archie/exercism/scheme/hello-world/hello-world.scm
   ;;;       newer than compiled /home/archie/.cache/guile/ccache/2.2-LE-8-3.A/home/archie/exercism/scheme/hello-world/hello-world.scm.go
   ;;; note: auto-compilation is enabled, set GUILE_AUTO_COMPILE=0
   ;;;       or pass the --no-auto-compile argument to disable.
   ;;; compiling /home/archie/exercism/scheme/hello-world/hello-world.scm
   ;;; compiled /home/archie/.cache/guile/ccache/2.2-LE-8-3.A/home/archie/exercism/scheme/hello-world/hello-world.scm.go
   Hello World!

   guile hello-world.scm --no-auto-compile

How to close these info?



   alias guile="guile --no-auto-compile"

`Install guile <https://www.linuxfromscratch.org/blfs/view/svn/general/guile.html>`_

``nscd`` 自启动
^^^^^^^^^^^^^^^^^^^



   systemctl enable nscd

nscd is a daemon that provides a cache for the most common name service requests. The default configuration file, /etc/nscd.conf, determines the behavior of the cache daemon.

redshift
^^^^^^^^

115.622324,33.165395



   mkdir ~/.config/redshift
   vim ~/.config/redshift/redshift.conf

``~/.config/redshift/redshift.conf``\ :



   [redshift]
   location-provider=manual
   temp-day=5500
   temp-night=3700

   [manual]
   lat=33.165395
   lon=115.622324

ref:


#. https://wiki.archlinux.org/title/redshift
#. https://io-oi.me/tech/hello-arch-linux/#redshift

让 Arch Linux 系统和最新的镜像同步，从最快的镜像下载
----------------------------------------------------

https://blog.lilydjwg.me/2020/10/29/pacsync.215578.html



   #!/bin/bash -e

   unshare -m bash <<'EOF'
   mount --make-rprivate /
   for f in /etc/pacman.d/\*.sync; do

     filename="${f%.\*}"
     mount --bind "$f" "$filename"

   done
   pacman -Sy
   EOF

使用国外 DNS 造成国内网站访问慢的解决方法
-----------------------------------------

https://wzyboy.im/post/874.html



   systemctl status dnsmasq
    dnsmasq.service - dnsmasq - A lightweight DHCP and caching DNS server
        Loaded: loaded (/usr/lib/systemd/system/dnsmasq.service; enabled; vendor preset: disabled)
        Active: inactive (dead)

          Docs: man:dnsmasq(8)

``dnsmasq.service: Start request repeated too quickly.``\ :

The default limit is to allow 5 restarts in a 10sec period. If a service goes over that threshold due to the ``Restart=`` config option in the service definition, it will not attempt to restart any further.

ref:


#. https://github.com/felixonmars/dnsmasq-china-list
#. https://serverfault.com/a/845473
#. https://web.archive.org/web/20191101231638/http://felixc.at:80/Dnsmasq

备份
----


* https://blog.lilydjwg.me/2013/12/29/rsync-btrfs-dm-crypt-full-backup.42219.html
* https://github.com/teejee2008/timeshift



   sudo pacman -S timeshift

timeshift
^^^^^^^^^


#. Snapshot type: rsync :raw-html-m2r:`<del>(btrfs cannot use because of BTRFS snapts are saved on system partition)</del>`
#. User home directories: root-include all files, user-include only hidden files

自动更新 hosts GitHub 相关 IP
-----------------------------

ref:


#. https://bbs.archlinuxcn.org/viewtopic.php?pid=43366#p43366
#. https://gist.github.com/lilydjwg/93d33ed04547e1b9f7a86b64ef2ed058
#. https://github.com/rbew/github-host

前提：\ ``/etc/hosts`` 文件中要先存在 ``github.com``



   sudo pacman -S python-aiohttp

Problems
--------

Protocol not available - Bluetooth
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



   journalctl -n 20
   bluetoothd[445]: src/service.c:btd_service_connect() a2dp-sink profile connect failed for 00:02:5B:FF:10:D0: Protocol not available
   sudo pacman -S pulseaudio-bluetooth

Still can't connect with my wireless earphone.

``command not found: service``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

使用 ``systemctl`` 是可行的。

fcitx
^^^^^

Follow above section works

``Unknown download protocol: https``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

安装软件时错误，Unknown download protocol: https

更新 pacman 包，但是当用 yay 下载 netease-cloud-music 时，仍然出现这个错误。

中文语言不能选择 Hanyu Pinyin (with AltGr dead keys)，当我通过鼠标点击切换到它时，电脑卡了
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Cannot find fcitx input method module for Qt4.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

系统卡顿
^^^^^^^^

2次进入 tplogin.cn 均卡顿，似乎与进入网址无关

本来使用有线接入网络，树莓派需要用到有线，限于网线只有一根。于是，电脑连接无线网络。

进入路由器管理页面，点击〔设备管理〕/〔应用管理〕页面后，出现卡顿现象。具体表现：键盘鼠标失灵

采取措施：按住电源键重启。

依旧卡顿，仅仅打开一个网页。

----

现在暂时不卡顿，解决办法：

设置 BIOS U 盘启动，插入制作好的 USB 启动盘，进入 U 盘中的 arch 系统，然后执行命令：



   mount /dev/sdb2 /mnt
   arch-root /mnt /bin/bash
   cd /var/cache/pacman/pkg
   ls -a | grep linux
   pacman -U linux-5.13.9.arch1-1-x86_64.pkg.tar.zst
   # linux kernel: 5.13.10 --> 5.13.9

依然出现卡顿，推测是无线网的缘故，需要安装驱动。（驱动已安装）

编辑了 /etc/default/grub:

GRUB_CMDLINE_LINUX_DEFAULT="elevator=noop loglevel=3 quiet"

GRUB_CMDLINE_LINUX_DEFAULT="loglevel=3 quiet mds=full,nosmt"

`X freeze/crash with intel driver <https://wiki.archlinux.org/title/Intel_graphics#:~:text=VGA-1%3A1280x800-,X%20freeze/crash%20with%20intel%20driver,-Some%20issues%20with>`_

ref:


#. https://wiki.archlinux.org/title/downgrading_packages#Downgrading_the_kernel
#. https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html
#. https://askubuntu.com/a/1250060
#. https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.linprofs.com/blog/how-to-patch-the-intel-mds-bug/&ved=2ahUKEwjwq-W9jbjyAhWqQPUHHVznB0IQFnoECD4QAQ&usg=AOvVaw1Ijihg0Il1razMVV1yrvM9
#. https://wiki.archlinux.org/title/Security_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)

rpi-imager 能够用 ``yay -S rpi-imager`` 下载，却不能用 ``sudo pacman -S rpi-imager`` 下载
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

gparted ``Too many primary partitions``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create new partition atble, then solved.

amdgpu: TOPAZ  not supported in kfd
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

More error log:



   ➜  ~ sudo dmesg | grep amdgpu
   [    3.647423] [drm] amdgpu kernel modesetting enabled.
   [    3.647749] amdgpu: CRAT table not found
   [    3.647751] amdgpu: Virtual CRAT table created for CPU
   [    3.647760] amdgpu: Topology: Add CPU node
   [    4.446589] amdgpu 0000:01:00.0: enabling device (0000 -> 0003)
   [    4.446708] amdgpu 0000:01:00.0: amdgpu: Trusted Memory Zone (TMZ) feature not supported
   [    4.446906] kfd kfd: amdgpu: TOPAZ  not supported in kfd
   [    4.473165] amdgpu 0000:01:00.0: amdgpu: Fetched VBIOS from ATRM
   [    4.473170] amdgpu: ATOM BIOS: BR34366.001
   [    4.480027] amdgpu 0000:01:00.0: amdgpu: VRAM: 2048M 0x000000F400000000 - 0x000000F47FFFFFFF (2048M used)
   [    4.480031] amdgpu 0000:01:00.0: amdgpu: GART: 256M 0x000000FF00000000 - 0x000000FF0FFFFFFF
   [    4.480074] [drm] amdgpu: 2048M of VRAM memory ready
   [    4.480077] [drm] amdgpu: 3072M of GTT memory ready.
   [    4.487650] amdgpu: hwmgr_sw_init smu backed is iceland_smu
   [    4.504069] amdgpu: can't get the mac of 5
   [    4.509005] amdgpu 0000:01:00.0: amdgpu: SE 1, SH per SE 1, CU per SH 6, active_cu_number 5
   [    4.512216] amdgpu 0000:01:00.0: amdgpu: Using BOCO for runtime pm
   [    4.512580] [drm] Initialized amdgpu 3.41.0 20150101 for 0000:01:00.0 on minor 1
   [   11.011196] amdgpu: VI should always have 2 performance levels
   [   63.292478] amdgpu: can't get the mac of 5
   [   69.617338] amdgpu: VI should always have 2 performance levels
   [   91.291963] amdgpu: can't get the mac of 5
   [   97.654465] amdgpu: VI should always have 2 performance levels
   [  231.210550] amdgpu: can't get the mac of 5
   [  237.586419] amdgpu: VI should always have 2 performance levels
   [  442.652120] amdgpu: can't get the mac of 5
   [  448.914182] amdgpu: VI should always have 2 performance levels
   [  537.714801] amdgpu: can't get the mac of 5
   [  543.975875] amdgpu: VI should always have 2 performance levels
   [ 1423.430405] amdgpu: can't get the mac of 5
   [ 1429.649499] amdgpu: VI should always have 2 performance levels
   [ 2080.668493] amdgpu: can't get the mac of 5
   [ 2086.918590] amdgpu: VI should always have 2 performance levels
   [ 2115.280282] amdgpu: can't get the mac of 5
   [ 2121.495346] amdgpu: VI should always have 2 performance levels
   [ 2226.608091] amdgpu: can't get the mac of 5
   [ 2232.866186] amdgpu: VI should always have 2 performance levels
   [ 2248.077359] amdgpu: can't get the mac of 5
   [ 2254.325451] amdgpu: VI should always have 2 performance levels

a dual gpu system(双 GPU 系统)



   ➜  Downloads xrandr --listproviders
   Providers: number : 2
   Provider 0: id: 0x44 cap: 0xf, Source Output, Sink Output, Source Offload, Sink Offload crtcs: 3 outputs: 2 associated providers: 1 name:modesetting
   Provider 1: id: 0xc7 cap: 0xd, Source Output, Source Offload, Sink Offload crtcs: 0 outputs: 0 associated providers: 1 name:Unknown AMD Radeon GPU @ pci:0000:01:00.0

ref:


#. https://wiki.archlinux.org/title/Xorg#AMD
#. https://bbs.archlinux.org/viewtopic.php?id=236430#:~:text=Since%20this%20is-,a%20dual%20gpu%20system,-%2C%20you%20will%20want

KDE's plasma eating CPU
^^^^^^^^^^^^^^^^^^^^^^^

https://wiki.gentoo.org/wiki/Intel#:~:text=KDE%27s%20plasma%20eating%20CPU,-If%20/usr/bin
