---
title: install-zotero
date: 2021-05-01 10:19:14
permalink: /pages/741a94/
categories:
  - ubuntu
tags:
---
# Install Zotero

```bash
/opt $ sudo wget https://download.zotero.org/client/release/5.0.96/Zotero-5.0.96_linux-x86_64.tar.bz2
/opt $ sudo tar -xf Zotero-5.0.96_linux-x86_64.tar.bz2
/opt $ sudo mv Zotero_linux-x86_64 zotero
/opt $ cd zotero
/opt/zotero $ ./zotero
/opt/zotero $ sudo ./set_launcher_icon
/opt/zotero $ ln -s /opt/zotero/zotero.desktop ~/.local/share/applications/zotero.desktop
/opt $ sudo chown -R tianheg:tianheg zotero # give write permission to zotero folder and its files
```

source:

1. <https://www.zotero.org/download/client/dl?channel=release&platform=linux-x86_64&version=5.0.96>
2. <https://www.zotero.org/support/installation>
