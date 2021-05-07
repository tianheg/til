---
title: use-openssl-backup-my-keys
date: 2021-05-01 10:19:14
permalink: /pages/bac856/
categories:
  - openssl
tags:
  - 
---
# Use OpenSSL Backup My Keys

```bash
# encrypt
tar -cf keys.tar /path/to/keys/folder
openssl aes-256-cbc -a -in keys.tar -out keys.tar.aes # and give it a secure password
# after executing it, its output:
# WARNING : deprecated key derivation used.
# Using -iter or -pbkdf2 would be better.

# decode
openssl aes-256-cbc -d -in keys.tar.aes -out keys.tar
tar -xvf keys.tar
```

---

**References**:

1. <https://askubuntu.com/a/613563>
