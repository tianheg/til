---
title: install-pipenv-on-ubuntu
date: 2021-05-01 10:19:14
permalink: /pages/defe2b/
categories:
  - python
tags:
  - 
---
# Install Pipenv On Ubuntu

```bash
sudo apt-get update; sudo apt-get install --no-install-recommends make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
cd ~/.pyenv && src/configure && make -C src
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc
exec "$SHELL"
sudo apt-get update; sudo apt-get install --no-install-recommends make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
pyenv install 2.7.8
# Upgrading
cd $(pyenv root)
git pull
# To upgrade to a specific release of pyenv, check out the corresponding tag:
cd $(pyenv root)
git fetch
git tag
git checkout v0.1.0
# Uninstalling pyenv
# To **disable** pyenv managing your Python versions, simply remove the `pyenv init` line from your shell startup configuration.
# To completely **uninstall** pyenv, perform step (1) and then remove its root directory.
rm -rf $(pyenv root)
```

[source](https://github.com/pyenv/pyenv#installation)
