---
title: learngitbranching
date: 2021-05-01 10:19:14
permalink: /pages/e79bd8/
categories:
  - git
tags:
  - 
---
# LearnGitBranching

[source](https://github.com/pcottle/learnGitBranching)

## Git Commits

一个 commit 记录了一个 Git 仓库所有被跟踪文件的快照。Git 想保持 commits 的轻量，所以它并不会盲目地复制整个仓库。当文件发生变化时，Git 能压缩这些变化。Git 还保有一个何时 commit 的历史记录。

## Git Branches

Git 中的分支也很轻。它们简单地指向特定的 commit。从逻辑上划分工作要比使用大而粗的分支更容易。Git 2.23 版本中引入了 `git switch`，未来将代替 `git checkout`。

`git checkout -b bugFix`

## Branches and Merging

```sh
$ git checkout -b bugFix
$ git commit -m ""
$ git checkout main
$ git commit -m ""
$ git merge bugFix
```

## Git Rebase

使用 rebase 的好处多是能够生成一个漂亮的线性 commits 序列。

执行 `git rebase main` 后发生的变化：

![git rebase](images/git-rebase.png)

c3' 是 c3 的复制；main 还没更新。执行 `git rebase bugFix` 的变化：

![git rebase 1](images/git-rebase-1.png)

- Checkout a new branch named `bugFix`
- Commit once
- Go back to main and commit again
- Check out bugFix again and rebase onto main

## HEAD
