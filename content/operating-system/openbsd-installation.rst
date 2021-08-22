
OpenBSD
=======

Install
-------


#. ``I`` to install
#. ``us`` keyboard layout, ``?`` to see layout list
#. ``hostname`` system hostname
#. ``em0`` network interface
#. ``dhcp`` IPv4 address for em0
#. ``none`` IPv6 address for em0
#. ``done`` for network interface
#. ``password`` for root account
#. ``yes`` start sshd(8) by default
#. ``yes`` to run X window system
#. ``yes`` to start X window system by xenodm(1)
#. ``username`` to setup a user
#. ``username`` to user's full name
#. ``password`` to user's password
   WARNING: root is targeted by password guessing attacks, pubkeys are safer.
#. ``no`` don't allow root ssh login
#. ``Asia/Shanghai`` timezone
#. default root disk
#. default(whole) disk MBR
#. default layout
#. ``http`` location of sets
#. default HTTP proxy URL
#. ``?`` to search HTTP Server, then open terminal again, input ``openbsd.hk``
#. default Server directory
#. default Set name(s)
#. default location of sets
#. Fix time
#. reboot
#. If you access the installation again, you should remove the iso file

Common Usage
------------



   su # access root 
   shutdown -p now # shutdown now

ref:


#. https://www.openbsd.org/faq/faq4.html
#. https://youtu.be/3c65Xo_f-O0
