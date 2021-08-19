# Arch Usage

## 弄清楚 Arch 的更新模式：Arch 系统如何更新、它的 pacman、yay 包如何更新、怎样更新特定包、怎样避免使系统彻底崩溃

Is it possible that there is a major kernel update in the repository, and that some of the driver packages have not been updated?

No, it is not possible. Major kernel updates (e.g. linux 3.5.0-1 to linux 3.6.0-1) are always accompanied by rebuilds of all supported kernel driver packages. On the other hand, if you have an unsupported driver package (e.g. from the AUR) installed on your system, then a kernel update might break things for you if you do not rebuild it for the new kernel. Users are responsible for updating any unsupported driver packages that they have installed.

S1. `pacman` 使用

```sh
pacman -Qe # List all explicitly installed packages
pacman -Qg group_name # List installed packages under this group
pacman -Sg group # List all packages in the package group named `group`, etc, base-devel, gnome
pacman -Qm # List all foreign packages (typically manually downloaded and installed or packages removed from the repositories)
pacman -Qn # List all native packages (installed from the sync database(s))
pacman -Qent # List all explicitly installed native packages (i.e. present in the sync database) that are not direct or optional dependencies
pacman -Qs regex # List packages by regex
sudo pacman -Qtdq | sudo pacman -Rns - # recursively removing orphans and their configuration files
sudo pacman -Qii | awk '/^MODIFIED/ {print $2}' # print modified files under /etc

pacman -Syu # Update package list and upgrade all packages afterwards
pacman -Syu gpm # Update package list, upgrade all packages, and then install gpm if it wasn’t already installed
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
pacman -Si package_name # display extensive information about a given package
pacman -Qi package_name # display extensive information about locally installed packages
pacman -Qii package_name # also display the list of backup files and their modification states
pacman -Ql package_name # retrieve a list of the files installed by a package
pacman -Fl package_name # retrieve a list of the files installed by a remote package
pacman -Qk package_name # verify the presence of the files installed by a package, Passing the k flag twice will perform a more thorough check
pacman -Qo /path/to/file_name # query the database to know which package a file in the file system belongs to
pacman -F /path/to/file_name # query the database to know which remote package a file belongs to

pacman -Qet # list all packages explicitly installed and not required as dependencies
```

应该避免执行的 `pacman` 指令：

```sh
pacman -Syu # always run
pacman -Sy # never run!!!
pacman -Rdd package # never run!!!
```

When installing packages in Arch, avoid refreshing the package list without upgrading the system (for example, when a package is no longer found in the official repositories). In practice, do not run pacman -Sy package_name instead of pacman -Syu package_name, as this could lead to dependency issues.

list all development/unstable packages:

```sh
pacman -Qq | grep -Ee '-(bzr|cvs|darcs|git|hg|svn)$'
```

`warning: dependency cycle detected` 循环依赖

ref:

1. <https://wiki.archlinux.org/title/Arch_User_Repository#Installing_and_upgrading_packages>
2. <https://wiki.archlinux.org/title/Frequently_asked_questions#Is_it_possible_that_there_is_a_major_kernel_update_in_the_repository,_and_that_some_of_the_driver_packages_have_not_been_updated?>
3. <https://wiki.archlinux.org/title/Pacman/Tips_and_tricks>
4. <https://wiki.archlinux.org/title/Pacman>
5. <https://wiki.archlinux.org/title/System_maintenance#Avoid_certain_pacman_commands>
6. <https://wiki.archlinux.org/title/Pacman/Rosetta>

S2. `yay` 使用

```sh
yay -S package # install package
```

安装时总是出现 `==> WARNING: Using existing $srcdir/ tree`，这个可以忽视，只是说明安装过程。

ref:

1. <https://github.com/Jguer/yay/issues/1248>

## When `sudo pacman -Syu`

### WARNING: Possibly missing firmware for module

这是一种警告。

ref:

1. <https://wiki.archlinux.org/title/Mkinitcpio#Possibly_missing_firmware_for_module_XXXX>
2. <https://arcolinuxforum.com/viewtopic.php?t=1174>

### gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10

```sh
786C63F330D7CB92
1EB2638FF56C0C53
```

### warning: /etc/pacman.d/mirrorlist installed as /etc/pacman.d/mirrorlist.pacnew

### /etc/mkinitcpio.d/linux.preset: 'default' and /etc/mkinitcpio.d/linux.preset: 'fallback'

[mkinitcpio - ArchWiki](https://wiki.archlinux.org/title/Mkinitcpio)

## System maintenance 系统维护

## 让 Arch Linux 系统和最新的镜像同步，从最快的镜像下载

<https://blog.lilydjwg.me/2020/10/29/pacsync.215578.html>

```sh
#!/bin/bash -e

unshare -m bash <<'EOF'
mount --make-rprivate /
for f in /etc/pacman.d/*.sync; do
  filename="${f%.*}"
  mount --bind "$f" "$filename"
done
pacman -Sy
EOF
```

## 使用国外 DNS 造成国内网站访问慢的解决方法

<https://wzyboy.im/post/874.html>

```sh
systemctl status dnsmasq
 dnsmasq.service - dnsmasq - A lightweight DHCP and caching DNS server
     Loaded: loaded (/usr/lib/systemd/system/dnsmasq.service; enabled; vendor preset: disabled)
     Active: inactive (dead)
       Docs: man:dnsmasq(8)
```

`dnsmasq.service: Start request repeated too quickly.`:

The default limit is to allow 5 restarts in a 10sec period. If a service goes over that threshold due to the `Restart=` config option in the service definition, it will not attempt to restart any further.

ref:

1. <https://github.com/felixonmars/dnsmasq-china-list>
2. <https://serverfault.com/a/845473>
3. <https://web.archive.org/web/20191101231638/http://felixc.at:80/Dnsmasq>

## 备份

- <https://blog.lilydjwg.me/2013/12/29/rsync-btrfs-dm-crypt-full-backup.42219.html>
- <https://github.com/teejee2008/timeshift>

```sh
sudo pacman -S timeshift
```

### timeshift

1. Snapshot type: rsync ~~(btrfs cannot use because of BTRFS snapts are saved on system partition)~~
2. User home directories: root-include all files, user-include only hidden files

## 自动更新 hosts GitHub 相关 IP

ref:

1. <https://bbs.archlinuxcn.org/viewtopic.php?pid=43366#p43366>
2. <https://gist.github.com/lilydjwg/93d33ed04547e1b9f7a86b64ef2ed058>
3. <https://github.com/rbew/github-host>

前提：`/etc/hosts` 文件中要先存在 `github.com`

```sh
sudo pacman -S python-aiohttp
```

```py
#!/usr/bin/python3

import asyncio
import time
import socket
import argparse

import aiohttp

class MyConnector(aiohttp.TCPConnector):
  def __init__(self, ip):
    self.__ip = ip
    super().__init__()

  async def _resolve_host(
    self, host: str, port: int,
    traces: None = None,
  ):
    return [{
      'hostname': host, 'host': self.__ip, 'port': port,
      'family': self._family, 'proto': 0, 'flags': 0,
    }]

async def test_domain(domain, ip, proto):
  if proto == 'http':
    return await test_domain_http(domain, ip)
  elif proto == 'ssh':
    return await test_domain_ssh(domain, ip)
  else:
    raise ValueError('unknown proto', proto)

async def test_domain_ssh(domain, ip):
  st = time.time()
  r, _w = await asyncio.open_connection(ip, 22)
  await r.read(1)
  return time.time() - st

async def test_domain_http(domain, ip):
  url = 'https://github.com/'
  st = time.time()
  async with aiohttp.ClientSession(
    connector = MyConnector(ip),
    timeout = aiohttp.ClientTimeout(total=10),
  ) as s:
    r = await s.get(url)
    _ = await r.text()

  return time.time() - st

async def producer(q, proto):
  items = await get_items(proto)
  for item in items:
    await q.put(item)

  await q.put(None)

async def printer(q):
  while True:
    try:
      item = await q.get()
    except asyncio.CancelledError:
      break

    if isinstance(item[1], Exception):
      (domain, ip, proto), e = item
      print(f'{domain:21} {ip:15} {proto:4} {e!r}')
    else:
      (domain, ip, proto), t = item
      print(f'{domain:21} {ip:15} {proto:4} {t:6.2f}')

async def fastest_finder(q):
  fastest_ip, latency = None, 1000

  while True:
    try:
      item = await q.get()
    except asyncio.CancelledError:
      return fastest_ip

    if not isinstance(item[1], Exception):
      (_, ip, _), t = item
      if t < latency:
        latency = t
        fastest_ip = ip

async def worker(q, ret_q):
  while True:
    item = await q.get()
    if item is None:
      await q.put(None)
      break

    try:
      t = await test_domain(*item)
    except Exception as e:
      await ret_q.put((item, e))
    else:
      await ret_q.put((item, t))

async def main(proto):
  q = asyncio.Queue()
  ret_q = asyncio.Queue()

  futures = [worker(q, ret_q) for _ in range(40)]
  producer_fu = asyncio.ensure_future(producer(q, proto))
  printer_fu = asyncio.ensure_future(printer(ret_q))

  await asyncio.gather(*futures)
  printer_fu.cancel()
  await producer_fu
  await printer_fu

async def update_hosts():
  import os, sys, subprocess

  if os.geteuid() != 0:
    sys.exit('not root?')

  q = asyncio.Queue()
  ret_q = asyncio.Queue()

  futures = [worker(q, ret_q) for _ in range(40)]
  producer_fu = asyncio.ensure_future(
    producer(q, ['http']))
  finder_fu = asyncio.ensure_future(
    fastest_finder(ret_q))

  await asyncio.gather(*futures)
  finder_fu.cancel()
  await producer_fu
  ip = await finder_fu

  if ip is not None:
    cmd = ['sed', '-Ei', rf'/^[0-9.]+[[:space:]]+(gist\.)?github\.com\>/s/[^[:space:]]+/{ip}/', '/etc/hosts']
    subprocess.check_call(cmd)

async def resolve(domain):
  loop = asyncio.get_event_loop()
  addrinfo = await loop.getaddrinfo(
    domain, None,
    family=socket.AF_INET,
    proto=socket.IPPROTO_TCP,
  )
  ips = [x[-1][0] for x in addrinfo]
  return domain, ips

async def get_items(proto):
  items = [
    ('13.234.210.38',  'Bombay'),
    ('13.234.176.102', 'Bombay'),
    ('52.192.72.89',   'Tokyo'),
    ('13.114.40.48',   'Tokyo'),
    ('52.69.186.44',   'Tokyo'),
    ('15.164.81.167',  'Seoul'),
    ('52.78.231.108',  'Seoul'),
    ('13.229.188.59',  'Singapore'),
    ('13.250.177.223', 'Singapore'),
    ('52.74.223.119',  'Singapore'),
    ('192.30.255.112', 'Seattle'),
    ('192.30.255.113', 'Seattle'),
    ('140.82.112.3',   'Seattle'),
    ('140.82.112.4',   'Seattle'),
    ('192.30.253.112', 'Ashburn'),
    ('192.30.253.113', 'Ashburn'),
    ('140.82.113.3',   'Ashburn'),
    ('140.82.113.4',   'Ashburn'),
    ('140.82.114.3',   'Ashburn'),
    ('140.82.114.4',   'Ashburn'),
    ('140.82.118.3',   'Armsterdam'),
    ('140.82.118.4',   'Armsterdam'),
    ('140.82.121.3',   'Frankfurt'),
    ('140.82.121.4',   'Frankfurt'),
    ('13.237.44.5',    'Sydney'),
    ('52.64.108.95',   'Sydney'),
    ('13.236.229.21',  'Sydney'),
    ('18.231.5.6',     'Sao Paulo'),
    ('18.228.52.138',  'Sao Paulo'),
    ('18.228.67.229',  'Sao Paulo'),
  ]

  return [(x[1], x[0], y) for x in items for y in proto]

if __name__ == '__main__':
  import logging
  logging.getLogger().addHandler(logging.NullHandler())

  parser = argparse.ArgumentParser(
    description='GitHub IP 访问速度测试')
  parser.add_argument('proto', nargs='*',
                      default=['http', 'ssh'],
                      help='测试指定协议')
  parser.add_argument('--hosts',
                      action='store_true',
                      help='更新 /etc/hosts')
  args = parser.parse_args()

  if args.hosts:
    main_fu = update_hosts()
  else:
    main_fu = main(args.proto)

  loop = asyncio.get_event_loop()
  try:
    loop.run_until_complete(main_fu)
  except KeyboardInterrupt:
    pass
```
