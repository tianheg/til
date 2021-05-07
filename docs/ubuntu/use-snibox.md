---
title: use-snibox
date: 2021-05-01 10:19:14
permalink: /pages/b5fdcd/
categories:
  - ubuntu
tags:
---
# Use Snibox

## Emails

Tried [Mailgun](https://www.mailgun.com/), [Sendgrid](https://sendgrid.com/), can't use.

## Setup Ubuntu environment

```bash
# Add node.js
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
# Add yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
# Install needed packages
sudo apt-get update
sudo apt-get install -y build-essential git nodejs postgresql postgresql-contrib libpq-dev libssl-dev libreadline-dev zlib1g-dev yarn
# Install rbenv
sudo apt install rbenv
rbenv init
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
# Install ruby-build, as an rbenv plugin
mkdir -p "$(rbenv root)"/plugins
git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
# Install ruby 2.6.1
rbenv install 2.6.1
# Set ruby global version to 2.6.1
rbenv global 2.6.1
```

If rbenv can't change global ruby version, then:

[source](https://github.com/rbenv/rbenv#basic-github-checkout)

```bash
# add it to .zshrc or others
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
```

## Next Steps

```bash
cp .env.production.sample .env
# Generate secret key
rake secret
# Setup database
RAILS_ENV=production ./bin/rake db:setup
# Precompile assets
RAILS_ENV=production ./bin/rake assets:precompile
# Launch server
RAILS_ENV=production ./bin/rails s
```

[source](https://snibox.github.io/docs/deployment.html)
