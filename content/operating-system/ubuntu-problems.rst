.. role:: raw-html-m2r(raw)
   :format: html


Problems on Ubuntu
==================

Bluetooth Cannot Connect Airpods
--------------------------------



   sudo vim /etc/bluetooth/main.conf
   # add `ControllerMode = dual`
   sudo /etc/init.d/bluetooth restart

It works!

References:


#. https://techwiser.com/fix-airpods-not-working-on-ubuntu/

Boot Slowly
-----------

If you have Intel CPU and are using regular Ubuntu (Gnome) and want a user-friendly way to check CPU speed and adjust it, and even set it to auto-scale based on being plugged vs battery, try `CPU Power Manager <https://extensions.gnome.org/extension/945/cpu-power-manager/>`_.



   $ systemd-analyze                             
   Startup finished in 8.653s (firmware) + 4.558s (loader) + 4.153s (kernel) + 1min 14.380s (userspace) = 1min 31.745s 
   graphical.target reached after 1min 14.241s in userspace
   # from https://youtu.be/_nA6RDvDhRk
   $ systemd-analyze blame
   34.544s plymouth-quit-wait.service                                                               
   21.085s snapd.service                                                                            
   19.557s dev-sda1.device                                                                          
   ......

**Plymouth is not slowing your boot-up process!** Plymouth is responsible for the boot-up splash screen. Please read `Plymouth <https://wiki.ubuntu.com/Plymouth>`_.

It loads the boot-up logo at the beginning of the boot-up process and then **waits** until the boot-up process has finished so it unloads the splash screen. That is **all** it does and that is why it has to run in parallel and co-exist throughout the **whole** boot-up process. It does not delay anything, it just **waits**.



   $ systemd-analyze plot > SystemdAnalyzePlot.svg

You can, however, **reduce your boot-up time** by disabling ``NetworkManager-wait-online.service`` so **plymouth** has one less process to wait for. This can indeed reduce your boot-up time. To do this please follow the steps in `this answer <https://askubuntu.com/a/1166492/968501>`_.

From https://askubuntu.com/a/1166492

If this system is not a server in a network, you can start by cutting down on time used by ``NetworkManager-wait-online.service``\ , to do this please disable the service like so:



   sudo systemctl disable NetworkManager-wait-online.service

If it shows up again after reboot, you can follow the above command with this:



   sudo systemctl mask NetworkManager-wait-online.service

The purpose of the ``NetworkManager-wait-online.service`` is to wait for the network to come online before proceeding with the boot process.

This is needed in case of for example servers that rely on network resources as part of the boot process ( eg. mounting remote drives ) or in the case of workstations that rely on the network to boot correctly ( eg. Thin Clients ).

Otherwise, desktop users can disable ``NetworkManager-wait-online.service`` and network will connect normally after boot has finished minus the unneeded wait time.

It is safe to disable in this case.

Next time:



   $ systemd-analyze
   Startup finished in 5.798s (firmware) + 3.640s (loader) + 4.111s (kernel) + 3min 8.299s (userspace) = 3min 21.849s 
   graphical.target reached after 1min 28.245s in userspace

From https://itsfoss.com/speed-up-ubuntu-1310/


#. Reduce the default grub load time
#. Manage startup applications
#. Install preload to speed up application load time
#. Choose the best mirror for software updates
#. Use apt-fast instead of apt-get for a speedy update
#. Remove language related ign from apt-get update
#. Reduce overheating
#. Tweak LibreOffice to make it faster
#. Use a lightweight desktop environment
#. Use lighter alternatives for different applications

----

**References**\ :


#. https://askubuntu.com/questions/1230620/ubuntu-20-04-gnome-very-slow
#. https://itsfoss.community/t/solved-apps-opening-too-slow-in-ubuntu-20-04/4578/4
#. https://askubuntu.com/a/1260993
#. https://askubuntu.com/a/1168249
#. https://askubuntu.com/a/1166492
#. https://youtu.be/vwBoHZuauL8
#. https://superuser.com/questions/1599715/getting-a-very-slow-startup-on-ubuntu-20-seems-to-be-stuck-around-the-stage-whe
#. `10 Killer Tips To Speed Up Ubuntu Linux <https://itsfoss.com/speed-up-ubuntu-1310/>`_

No Pip On Ubuntu20.04
---------------------



   sudo apt update
   sudo apt install python3-pip

`source <https://askubuntu.com/a/1254329>`_

Cannot Connect Wi-Fi Ubuntu20.04
--------------------------------

Tried:

`Way 1 <https://askubuntu.com/a/1231027>`_\ :



   sudo vim /etc/network/interfaces
   # Add following lines:
   # auto wlp5s0
   # iface wlan0 inet static
   ifconfig wlp5s0 down
   ifconfig wlp5s0 up

But ``ifconfig`` is not found.

`Way 2 <https://linuxconfig.org/ubuntu-20-04-connect-to-wifi-from-command-line>`_\ :



   $ ls /sys/class/net
   enp2s0 lo  wlp3s0
   $ ls /etc/netplan/
   01-network-manager-all.yaml
   $ sudoedit /etc/netplan/01-network-manager-all.yaml
   $ sudo netplan apply # or sudo netplan --debug apply
   $ ip a

Finally I found I add my PC to blacklist with the Wi-Fi I want to connect.

Connect Wifi
------------


I just seclect the Using instead of Do not.

`More info <https://www.maketecheasier.com/fix-wi-fi-not-working-ubuntu/>`_

H.264 Not Found
---------------



   sudo apt install ubuntu-restricted-extras

Remap Key Bug
-------------

I check ``Swap Ctrl and Caps Lock``\ , which is under ``Ctrl position`` -> ``Additional Layout Options`` -> ``Keyboard & Mouse`` -> ``GNOME Tweaks``.

But it's lost when I reboot the PC recently.

I found talks about it officially and unofficially:


* https://askubuntu.com/questions/1286997/caps-lock-remapping-stops-working
* https://bugs.launchpad.net/ubuntu/+source/mutter/+bug/1899206

A way to recover it:

:kbd:`Alt` + :kbd:`F2` -> Type ``r`` -> hit :kbd:`enter`, so it works again until it breaks again.

----

**References**\ :


* https://askubuntu.com/questions/1286997/caps-lock-remapping-stops-working
* https://bugs.launchpad.net/ubuntu/+source/mutter/+bug/1899206

Install ``kubuntu-desktop`` error
-------------------------------------

When I install ``kubuntu-desktop`` use ``sudo apt-get install -y kubuntu-desktop``\ , get error:



   Setting up samba-common-bin (2:4.11.6+dfsg-0ubuntu1.6) ...
   Checking smb.conf with testparm
   Load smb config files from /etc/samba/smb.conf
   Loaded services file OK.
   ERROR: lock directory /run/samba does not exist

   ERROR: pid directory /run/samba does not exist

   Server role: ROLE_STANDALONE

   dpkg: error processing package samba-common-bin (--configure):
    installed samba-common-bin package post-installation script subprocess returned error exit status 1
   Errors were encountered while processing:
    samba-common-bin

   E: Sub-process /usr/bin/dpkg returned an error code (1)

samba-common-bin was installed as a dependency of smbclient, the "server role" message is misleading as I don't have any need for a SMB server (and for any lock or pidfile, afaik).

Solved by run ``/bin/systemd-tmpfiles --create /usr/lib/tmpfiles.d/samba.conf``.

References:


#. https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=953530
