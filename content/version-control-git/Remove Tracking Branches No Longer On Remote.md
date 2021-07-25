---
title: Remove Tracking Branches No Longer On Remote
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