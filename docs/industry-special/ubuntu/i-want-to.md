# 我想

## Edit Sources.list

```sh
sudo vim /etc/apt/sources.list
```

## Local Network Share

![Local Network Share](./images/local-network-share.png)

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
