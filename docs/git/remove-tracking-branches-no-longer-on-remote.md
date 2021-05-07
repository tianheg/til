---
title: remove-tracking-branches-no-longer-on-remote
date: 2021-05-01 10:19:14
permalink: /pages/0dc608/
categories:
  - git
tags:
  - 
---
# Remove Tracking Branches No Longer On Remote

```sh
$ git branch -a
* main
  remotes/origin/articles-main
  remotes/origin/gh-pages
  remotes/origin/main

# remote branch articles-main, gh-pages has been deleted
$ git remote prune origin
Pruning origin
URL: git@github.com:tianheg/wiki.git
 * [pruned] origin/articles-main
 * [pruned] origin/gh-pages
```
