# Ubuntu Backup

发展出一个备份计划：备份什么，备份到哪里，如何从备份中恢复数据

要做的事：

1. 备份 Ubuntu 数据（云；移动硬盘；云 + 移动硬盘）

## Files

推荐备份的区域：`/home`，`/etc`，`/usr/local`，`/var`。不要备份超过 100M 的媒体文件。可以把这些备份存至 `/var/backup`（最好不要放到被备份的机器上，预防单点故障）

```sh
$ sudo tar czf /backup.tar.gz --exclude=/backup.tar.gz --exclude=/dev --exclude=/mnt --exclude=/proc --exclude=/sys --exclude=/tmp --exclude=/lost+found /
```

BackupPC can be managed through its web interface:
 http://tianheg-PC/backuppc/


For that purpose, a web user named 'backuppc' with 'OucAdvi4' as password has been created. You can change this password by running 'htpasswd /etc/backuppc/htpasswd backuppc'.

BackupPC should run as a dedicated user with limited privileges.  You
need to create a user.  This user will need read/write permission on
the main data directory and read/execute permission on the install
directory (these directories will be setup shortly).

The primary group for this user should also be chosen carefully.
The data directories and files will have group read permission,
so group members can access backup files.

--> BackupPC should run as user [backuppc]?

**Install BackupPC**

The latest version of BackupPC can be fetched from:

- [github.com/backuppc/backuppc/releases](https://github.com/backuppc/backuppc/releases)

You'll need to install the perl module BackupPC::XS, available from:

- [github.com/backuppc/backuppc-xs/releases](https://github.com/backuppc/backuppc-xs/releases)

and the server-side rsync from:

- [github.com/backuppc/rsync-bpc/releases](https://github.com/backuppc/rsync-bpc/releases)

```sh
$ tar zxf BackupPC-__VERSION__.tar.gz
$ cd BackupPC-__VERSION__
$ perl configure.pl
```

```sh
Ok, it looks like we are finished.  There are several more things you
will need to do:

  - Browse through the config file, /etc/BackupPC/config.pl,
    and make sure all the settings are correct.  In particular,
    you will need to set $Conf{CgiAdminUsers} so you have
    administration privileges in the CGI interface.

  - Edit the list of hosts to backup in /etc/BackupPC/hosts.

  - Read the documentation in /usr/local/BackupPC/doc/BackupPC.html.
    Please pay special attention to the security section.

  - Verify that the CGI script BackupPC_Admin runs correctly.  You might
    need to change the permissions or group ownership of BackupPC_Admin.
    If this is an upgrade and you are using mod_perl, you will need
    to restart Apache.  Otherwise it will have stale code.

  - BackupPC should be ready to start.  Don\'t forget to run it
    as user backuppc!  The installation also contains
    a systemd/backuppc.service script that can be installed so
    that BackupPC can auto-start on boot.  This will also enable
    administrative users to start the server from the CGI interface.
    See systemd/README.

Enjoy!
```

## GRUB

Note: Instead of mounting the boot directory or partition from the installation in the live media environment you can specify the path with the `--boot-directory` parameter for grub-install, more information on the manpage.

If you DO NOT have a separate `/boot` partition:

```sh
$ sudo mount /dev/DEVICENAME_FROM_STEP_ONE /mnt
$ sudo rm -rf /boot    # Careful here, make sure YOU ARE USING THE LIVE CD. I tried it, it works.
$ sudo ln -s /mnt/boot /boot
```

If you have a SEPARATE `/boot` partition:

```sh
$ sudo mount /dev/DEVICENAME_FROM_STEP_ONE /boot
```

Note: These instructions were initially written for Windows 7 and BIOS booting computers. If you have UEFI and Windows 8 and above you probably need to replace `grub-pc` with `grub-efi-amd64` in `sudo apt-get install grub-pc`.

```sh
$ sudo apt-get update
$ sudo apt-get install grub-pc
$ sudo grub-install /dev/sda     # NOTE THAT THERE IS NO DIGIT
$ sudo umount /boot
```

---

**参考资料**：

1. [backup and object storage](https://nichi.co/articles/backup-and-object-storage.html)
2. <https://askubuntu.com/a/7811>; <https://askubuntu.com/a/6321>
3. [从个人工作电脑硬盘故障说起](https://mp.weixin.qq.com/s/TAygYrFKJrXnmuMEx__gAA)

restic.net

保护数据不丢失

不信任印象笔记的存储服务，以及其他类似存储类型的服务