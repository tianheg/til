---
title: flush-dns
date: 2021-05-01 10:19:14
permalink: /pages/741415/
categories:
  - ubuntu
tags:
---
# Flush DNS

```bash
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
