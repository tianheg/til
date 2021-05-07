---
title: create-empty-branch-locally-and-remotely
date: 2021-05-01 10:19:14
permalink: /pages/f9f9bf/
categories:
  - git
tags:
  - 
---
# Create Empty Branch Locally And Remotely

```sh
# local
git checkout --orphan empty-branch
git rm -rf .
# remote
git commit --allow-empty -m "root commit"
git push origin empty-branch
```

[source](https://stackoverflow.com/a/34100189/12539782)
