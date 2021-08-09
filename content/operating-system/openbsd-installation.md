# OpenBSD

## Install

1. `I` to install
2. `us` keyboard layout, `?` to see layout list
3. `hostname` system hostname
4. `em0` network interface
5. `dhcp` IPv4 address for em0
6. `none` IPv6 address for em0
7. `done` for network interface
8. `password` for root account
9. `yes` start sshd(8) by default
10. `yes` to run X window system
11. `yes` to start X window system by xenodm(1)
12. `username` to setup a user
13. `username` to user's full name
14. `password` to user's password
  WARNING: root is targeted by password guessing attacks, pubkeys are safer.
15. `no` don't allow root ssh login
16. `Asia/Shanghai` timezone
17. default root disk
18. default(whole) disk MBR
19. default layout
20. `http` location of sets
21. default HTTP proxy URL
22. `?` to search HTTP Server, then open terminal again, input `openbsd.hk`
23. default Server directory
24. default Set name(s)
25. default location of sets
26. Fix time
27. reboot
28. If you access the installation again, you should remove the iso file

## Common Usage

```sh
su # access root 
shutdown -p now # shutdown now
```

ref:

1. <https://www.openbsd.org/faq/faq4.html>
2. <https://youtu.be/3c65Xo_f-O0>
