---
title: Git Command Line Reference
---
# Git Command Line Reference

This is a reference list of the most commonly used Git commands. Try to familiarize yourself with the commands so that you can eventually remember them all:

## Common Commands

- `git restore --staged file` move file from **staging area** to **working tree**

```sh
git config --global user.name ""
git config --global user.email ""

git reset --hard ^HEAD # 版本回退
git checkout -- [file] # 撤销修改
git stash # 暂存修改
git stash apply # 恢复修改

git remote set-url origin [url of the actual repo] # Change The URL Of Your Origin
```

## Commands related to a remote repository:

- `git clone git@github.com:USER-NAME/REPOSITORY-NAME.git or git clone https://github.com/user-name/repository-name.git`
- `git push origin master`

## Commands related to workflow:

- `git add .`
- `git commit -m "A message describing what you have done to make this snapshot different"`

## Commands related to checking status or log history

- `git status`
- `git log`

## The basic Git syntax is

- `program | action | destination.`

For example,

- `git add .` is read as `git | add | .`, where the period represents everything in the current directory;
- `git commit -m "message"` is read as `git | commit -m | "message";`
  and
- `git status` is read as `git | status | (no destination)`.

---

**A broader reference sheet from GitHub provideing quick instructions for using common commands can be found [here](https://training.github.com/downloads/github-git-cheat-sheet/)**