---
title: keepass2-access-denied-with-language-path
date: 2021-05-01 10:19:14
permalink: /pages/779b4f/
categories:
  - security
tags:
---
# Keepass2 Access Denied With Language Path

Error log:

```text
Access to the path '/usr/lib/keepass2/Languages' is denied.
```

Get other languages [here](https://keepass.info/translations.html)

Way:

```bash
~/Downloads $ wget https://downloads.sourceforge.net/keepass/KeePass-2.46-Chinese_Simplified.zip
~/Downloads $ unzip KeePass-2.46-Chinese_Simplified.zip
~/Downloads $ sudo cp Chinese_Simplified.lngx /usr/lib/keepass2/Languages/Chinese_Simplified.lngx
```
