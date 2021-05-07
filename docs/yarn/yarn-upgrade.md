---
title: yarn-upgrade
date: 2021-05-01 10:19:14
permalink: /pages/4445cb/
categories:
  - yarn
tags:
---
# Yarn Upgrade

This command updates dependencies to their latest version based on the version range specified in the `package.json` file. The `yarn.lock` file will be recreated as well.

```bash
yarn upgrade
yarn upgrade left-pad
yarn upgrade left-pad@^1.0.0
yarn upgrade left-pad grunt
yarn upgrade @angular
yarn upgrade --latest
yarn upgrade left-pad --latest
yarn upgrade left-pad grunt --latest --tilde
```

[source](https://classic.yarnpkg.com/en/docs/cli/upgrade/)
