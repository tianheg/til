---
title: Git Fundamentals
---
# Git Fundamentals

Git 与其他版本控制系统不同的一点，就是它处理数据的方式。大多数其他系统，会备份你的文件，然后保存文档的变化。

而 Git 则是为你的文件系统创建快照。最重要的一点：你每次 commit，Git 都会创建一个快照。为了提高效率，如果当前文件没有被修改的地方，Git 会提供之前的快照。

## Git 的三种状态

- Modified(已修改的) 意思是你已经修改了文件，但还没有提交到 Git 的数据库里。
- Staged(已暂存的) 意思是你已经标记了一个已经修改的文件，下一步就可以为它在当前文件系统进行 commit。
- Committed(已推送的) 意思是你已经为当前文件的修改创建了快照。

## Git 的三个分区

- Working Tree(工作树)，亦称 Working Directory，这里是当前文件的编辑区
- Staging Area(暂存区)，亦称 Index，这里存储着下一个 commit 的信息
- Git Directory(Git 目录)，Git 存储当前仓库元信息和对象数据库的地方。这里是 Git 最重要的部分