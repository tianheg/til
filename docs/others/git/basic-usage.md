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

---

**参考资料**：

1. <https://git-scm.com/>
