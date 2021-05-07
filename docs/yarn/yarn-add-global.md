---
title: yarn-add-global
date: 2021-05-01 10:19:14
permalink: /pages/154cbc/
categories:
  - yarn
tags:
  - 
---
# Yarn Add Global

```bash
yarn global add <package...>
```

If you have used a package manager like npm previously, you may be looking for how to add global dependencies.

For the vast majority of packages it is considered a bad practice to have global dependencies because they are implicit. It is much better to add all of your dependencies locally so that they are explicit and anyone else using your project gets the same set of dependencies.

If you are trying to use a CLI tool that has a `bin` you can access these in your `./node_modules/.bin` directory. You can also use the [`global`](https://classic.yarnpkg.com/en/docs/cli/global) command:

```bash
yarn global add <package...>
```

References:

1. <https://classic.yarnpkg.com/en/docs/cli/add>
