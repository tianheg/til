---
title: change-default-package-manager
date: 2021-05-01 10:19:14
permalink: /pages/4d1053/
categories:
  - gatsby
tags:
  - 
---
# Change Default Package Manager

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
