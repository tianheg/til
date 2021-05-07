---
title: install-yarn
date: 2021-05-01 10:19:14
permalink: /pages/b92ce7/
categories:
  - yarn
tags:
---
# Install Yarn

```bash
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```
