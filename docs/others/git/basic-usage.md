# 基础用法

## 全局设置

```sh
git config --global user.name ""
git config --global user.email ""
```

## 分支合并

### 场景：基于 main 分支代码，开发新特性

如果直接在 main 分支开发，如果后续对 main 分支又有另外的开发任务，会导致 main 分支的 commits 很乱。所以，当我们开发新特性时，可以在一个新分支进行，待到新特性开发完毕，再整体合并到 main 分支中。

具体做法如下：

（1）基于 main 分支，新建一个分支，名为 `feature_item_recommend`：

```sh
$ git checkout -b feature_item_recommend

Switched to a new branch 'feature_item_recommend'
```

上面这行命令，相当于：

```sh
$ git branch feature_item_recommend # 创建新分支
$ git checkout feature_item_recommend # 切换到新分支
```

（2）在新分支 `feature_item_recommend` 上，完成开发工作，并 commit，push。

（3）将新分支 `feature_item_recommend` 上的代码**合并**到 main 分支：

```sh
$ git checkout main # 切换到 main 分支
$ git merge feature_item_recommend # 合并
```

合并后，`main` 分支和 `feature_item_recommend` 分支会指向同一位置。

（4）删除已合并分支 `feature_item_recommend`：

```sh
$ git branch -d feature_item_recommend
```

注意，当前仓库处于 `main` 分支，可以用以上命令删除目标分支。如果当前所处分支是 `feature_item_recommend`，则无法删除 `feature_item_recommend`。

### 场景：合并分支时，存在分叉

![git-merge.png](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/git-merge.png)

最早 main 分支位于 `C2` 节点，基于 `C2` 节点新建分支 `iss53`，然后在 `iss53` commit。

现在，准备合并 `iss53` 的两个 commits：`C3`、`C5`，到 main 分支。但是，main 分支已经前进到 `C4`。这是该如何把 `iss53` 合并到 main 分支呢？

```sh
$ git checkout main
$ git merge iss53
```

**解释**：

这次合并不同于上一小节的简单合并，这一次，开发历史是从更早的 commit 开始分叉的。由于当前 main 分支指向的 commit(C4) 不是想要并入分支 `iss53` 的直接祖先，Git 需要进行处理。对于这个例子，Git 会用两个分支的末端（C4，C5）和它们的共同祖先（C2）进行一次简单的三方合并计算：

Git 没有简单的把分支指针右移，而是对三方合并的结果作一新的快照，并自动创建一个指向它的 commit（C6）（如下图所示）。我们把这个特殊的 commit 称作**合并提交**（merge commit），因为它的祖先不止一个。

![git-merge-1.png](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/git-merge-1.png)

### 场景：解决合并冲突

![git-merge-2.png](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/git-merge-2.png)

如果 feature1 和 feature2 修改的是同一个文件中**代码的同一个位置**，那么当把 feature2 合并到 feature1 时，就会产生冲突。这个冲突需要手动解决：

（1）对两个分支对相同区域的修改，进行检查，判断如何处理，并取消冲突。

（2）`git add`：解决冲突后，通过 `git status` 得到 `Unmerged paths`。然后，`git add`，**冲突解决，加入存取区**。

（3）`git commit`：提交。

然后，可以继续把 feature1 合并到 main（此时，feature1 和 feature2 指向同一个 commit），最后删除 feature1，feature2。

**注意**：两个分支的同一个文件的不同地方合并时，Git 会自动完成，不会产生冲突。

不论是自动合并还是手动合并，提交之前，都要对代码进行测试。

## 其他

### 修改密码

```sh
$ git config user.name ""
```

然后，当我们再输入 `git pull` 等命令行时，就会被要求重新输入*新的*账号密码。此时，密码就可以修改成功了。最后，我们还要输入如下命令，还原当前仓库的用户名：

```sh
$ git config user.name "username"
```

### 修改已经 push 的某次 commit 的作者/邮箱

已经 push 的记录，如果要修改作者信息的话，只能通过 --force 命令。

下面是来自 [这里](https://stackoverflow.com/a/750182/12539782) 的脚本：

```sh
#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL="your-old-email@example.com"
CORRECT_NAME="Your Correct Name"
CORRECT_EMAIL="your-correct-email@example.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

其他方法：

```sh
$ git filter-branch -f --env-filter \
"GIT_AUTHOR_NAME='Newname'; GIT_AUTHOR_EMAIL='newemail'; \
GIT_COMMITTER_NAME='committed-name'; GIT_COMMITTER_EMAIL='committed-email';" HEAD
# https://stackoverflow.com/a/2920001/12539782
```

**修改 author**：

```sh
$ git rebase -i HEAD~n # 表示要修改前 n 次所有的提交
```

输入此命令后，显示以下结果：

```text
pick ac0fcc6 add file2
pick a0cbfbe add file3
pick 16ee6eb add file4

# Rebase d57f11f..16ee6eb onto d57f11f (3 command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
```

我们要修改第二行和第三行的提交，根据提示，因此把第二行和第三行的 pick 改成 edit 或 e，保存退出。

保存上面的修改并退出后，git 会依次执行上面的操作，当操作为 pick 时，直接 commit。当操作为 edit 时，会中断，并提示以下信息：

```sh
You can amend the commit now, with

    git commit --amend

Once you are satisfied with your changes, run

    git rebase --continue

```

这里的意思是说，你可以使用 `git commit --amend` 来修改此次提交，修改以后，觉得满意了，执行 `git rebase --continue` 继续剩下的流程。

由于我们的主要目的是修改提交者的信息，因此光用 `git commit --amend` 是不够的，我们要使用 `git commit --amend --author "yourname <your email>"` 这样的操作，这一点是修改提交者信息的关键所在。

使用上面的命令成功修改此次提交的提交者信息后，一定要记得执行 `git rebase --continue` 继续。

最终完成以后提示如下：

```sh
$ git rebase --continue
Successfully rebased and updated refs/heads/master.
```

相关讨论：

1. <https://stackoverflow.com/q/750172/12539782>
2. [git 修改已提交的某一次的邮箱和用户信息](https://segmentfault.com/q/1010000006999861)
3. [修改 git repo 历史提交的 author](http://baurine.github.io/2015/08/22/git_update_author.html)

### 将 `branch1` 的某个 `commit1` 合并到 `branch2` 当中

切换到 branch2 中，然后执行如下命令：

```sh
$ git cherry-pick commit1
```

### 将 Git 项目迁移到另一个仓库

我们假设旧仓库的项目名称叫 `old-repository`，新仓库的项目名称叫 `new-repository`。操作如下：

（1）创建旧仓库的裸克隆：

```sh
git clone --bare https://github.com/exampleuser/old-repository.git
```

执行上述命令后，会在本地生成一个名叫 `old-repository.git`的文件夹。

（2）迁移到新仓库：

```sh
cd old-repository.git
git push --mirror https://github.com/exampleuser/new-repository.git
```

这样的话，项目就已经迁移到新仓库了。

注意，我们**不需要**手动新建一个空的新仓库，当我们执行上述命令之后，新仓库就已经自动创建好了。

参考链接：

1. [Duplicating a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository)
2. [Git 本地仓库和裸仓库](https://moelove.info/2016/12/04/Git-%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E5%92%8C%E8%A3%B8%E4%BB%93%E5%BA%93/)

---

**参考资料**：

1. <https://git-scm.com/>
