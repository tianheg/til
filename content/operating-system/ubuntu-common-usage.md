# Ubuntu Common Usage

## Edit Sources.list

```sh
sudo vim /etc/apt/sources.list
```

使用 HTTPS 可以有效避免国内运营商的缓存劫持，但需要事先安装 `apt-transport-https`。from <https://mirrors.ustc.edu.cn/help/ubuntu-ports.html>

## Local Network Share

![Local Network Share](https://raw.githubusercontent.com/tianheg/til/667631242418dc182e70e1c037b4362f640227c6/docs/industry-special/ubuntu/images/local-network-share.png)

Insert your mobile hard drive, find Properties, find Local Network Share like the image.

So I can transfer files between Vbox guest and my mobile hard drive.

## Flush DNS

```sh
systemd-resolve --flush-caches # Run the command in the terminal
systemd-resolve --statistics # verify that this ran correctly by running the command
```

Output:

```zsh
$ systemd-resolve --statistics
DNSSEC supported by current servers: no

Transactions
Current Transactions: 0
  Total Transactions: 2174

Cache
  Current Cache Size: 106
          Cache Hits: 594
        Cache Misses: 1672

DNSSEC Verdicts
              Secure: 0
            Insecure: 0
               Bogus: 0
       Indeterminate: 0

$ systemd-resolve --flush-caches
$ systemd-resolve --statistics
DNSSEC supported by current servers: no

Transactions
Current Transactions: 0
  Total Transactions: 2174

Cache
  Current Cache Size: 0
          Cache Hits: 594
        Cache Misses: 1672

DNSSEC Verdicts
              Secure: 0
            Insecure: 0
               Bogus: 0
       Indeterminate: 0
```

[source](https://dnschecker.org/flush-dns.php#ubuntu)

## Preview Files And Folders

[source](https://help.ubuntu.com/stable/ubuntu-help/files-preview.html.en)

Install `Sushi`: [install](apt:gnome-sushi)

You can quickly preview files without opening them in a full\-blown application. Select any file and press the space bar. The file will open in a simple preview window. Press the space bar again to dismiss the preview.

The built\-in preview supports most file formats for documents, images, video, and audio. In the preview, you can scroll through your documents or seek through your video and audio.

To view a preview full\-screen, press <kbd>F</kbd> or <kbd>F11</kbd>. Press <kbd>F</kbd> or <kbd>F11</kbd> again to leave full\-screen, or press the space bar to exit the preview completely.

## Auto Mount disk `/dev/sda1` to /mnt/xx

```sh
sudo mount /dev/sda1 /mnt/vd
```

Use Disk software <https://askubuntu.com/a/375319> to mount at system startup

## Set terminal proxy

<https://gist.github.com/fearblackcat/850c6e027d5a03017c44daaa6a7ffc30>

## How do I do when facing `You must choose a longer password`?

```sh
sudo vi /etc/pam.d/common-password
```

改变 25 行的部分，对比：

```txt
password        [success=1 default=ignore]      pam_unix.so obscure sha512 # 改变前
password        [success=1 default=ignore]      pam_unix.so sha512 minlen=3 # 改变后
```

ref: <https://qr.ae/pGwfdq>

## Create a bootable USB stick on Ubuntu

ref: <https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu>

## 验证下载软件

ref: <https://ubuntu.com/tutorials/how-to-verify-ubuntu>

## Install Ubuntu Desktop

ref: <https://ubuntu.com/tutorials/install-ubuntu-desktop>
