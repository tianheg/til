---
title: Gatsby
---
# Gatsby

## Change Default Package Manager

```bash
vim ~/.config/gatsby/config.json
```

Change:

```json
"cli": {
        "packageManager": "npm"
}
```

to:

```json
"cli": {
        "packageManager": "yarn"
}
```

[source](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-change-your-default-package-manager-for-your-next-project)

## Set Up Development Environment

Install Node.js(nvm), Git

```bash
sudo apt update
sudo apt -y upgrade
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
npm install -g gatsby-cli
```

source:

1. <https://www.gatsbyjs.com/docs/tutorial/part-zero/#ubuntu-debian-and-other-apt-based-distros>
2. <https://github.com/nvm-sh/nvm#install--update-script>