---
title: husky-command-husky-run-not-found
date: 2021-05-01 10:19:14
permalink: /pages/a5b0c0/
categories:
  - nodejs
tags:
  - 
---
# Husky Error Command "husky-run" Not Found

```bash
$ git ci "[.gitignore] add"
error Command "husky-run" not found.
```

my `package.json`:

```json
{
    "name": "TIL",
    "version": "1.0.0",
    "license": "CC-BY-SA-4.0",
    "homepage": "https://github.com/tianheg/til#readme",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/tianheg/til.git"
    },
    "bugs": {
        "url": "https://github.com/tianheg/til/issues"
    },
    "devDependencies": {
        "husky": "^5.1.1",
        "lint-md-cli": "^0.1.2",
        "lint-staged": "^10.4.0",
        "prettier": "^2.1.2"
    },
    "prettier": {
        "singleQuote": true,
        "tabWidth": 4
    },
    "lint-staged": {
        "*.{json,yml}": "prettier --write",
        "*.md": "lint-md --fix"
    },
    "scripts": {
        "lint": "lint-md *.md",
        "format": "lint-md *.md --fix",
        "test": "lint-staged",
        "postinstall": "husky install"
    },
    "husky": {
        "hooks": {
            "pre-commit": "yarn test"
        }
    }
}
```

Solved by:

```bash
rm -rf .git/hooks
yarn install
```

source:

- <https://stackoverflow.com/a/66246588>
- <https://github.com/typicode/husky/issues/333#issuecomment-431591451>
