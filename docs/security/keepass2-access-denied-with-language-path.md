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
