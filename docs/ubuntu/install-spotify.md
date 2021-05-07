---
title: install-spotify
date: 2021-05-01 10:19:14
permalink: /pages/9cc024/
categories:
  - ubuntu
tags:
---
# Install Spotify

[source](https://www.spotify.com/hk-en/download/linux/)

```bash
curl -sS https://download.spotify.com/debian/pubkey_0D811D58.gpg | sudo apt-key add -
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update && sudo apt-get install spotify-client
```
