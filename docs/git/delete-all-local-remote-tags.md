---
title: delete-all-local-remote-tags
date: 2021-05-01 10:19:14
permalink: /pages/d73d75/
categories:
  - git
tags:
---
# Delete All Local And Remote Tags

First delete remote tags, then local tags:

```sh
git push origin --delete $(git tag -l)
git tag -d $(git tag -l)
```

[source](https://stackoverflow.com/a/44702758/12539782)
