---
title: install-apt-fast
date: 2021-05-01 10:19:14
permalink: /pages/a7610f/
categories:
  - ubuntu
tags:
---
# Install `apt-fast`

```sh
sudo add-apt-repository ppa:apt-fast/stable
sudo apt-get update
sudo apt-get -y install apt-fast
# zsh
cp completions/zsh/_apt-fast /usr/share/zsh/functions/Completion/Debian/
chown root:root /usr/share/zsh/functions/Completion/Debian/_apt-fast
source /usr/share/zsh/functions/Completion/Debian/_apt-fast
```

[source](https://github.com/ilikenwf/apt-fast#installation)
