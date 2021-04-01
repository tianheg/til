# Update With Original Repo After Forking on GitHub

## Way one

1. open your local git repo

```bash
cd repo
```

2. check your remote repo

```bash
git remote -v
origin  https://github.com/a/repo.git (fetch)
origin  https://github.com/a/repo.git (push)
```

3. set `upstream` repo

```bash
git remote add upstream https://github.com/b/original-repo.git
```

4. check your remote repo again

```bash
git remote -v
origin  https://github.com/a/repo.git (fetch)
origin  https://github.com/a/repo.git (push)
upstream https://github.com/b/original-repo.git (fetch)
upstream https://github.com/b/original-repo.git (push)
```

5. execute `git status` to check whether there are uncommitted changes locally, if yes, push the commits to GitHub. Then execute `git status` again to confirm there are no uncommited changes locally.

```bash
git status
```

6. fetch update from original repo

```bash
git fetch upstream
```

7. switch to default branch `main`

```bash
git checkout main
```

8. merge original `main` branch

```bash
git merge upstream/main
```

9. push changes to your own forked repo

```bash
git push origin main
```

## Way Two

Use GitHub's Compare, set your forked repo left(base repo), set your original repo right(compare with).

Then create a merge for your forked repo, and merge it.

## Last Way

1. delete your forked repo
2. fork again

---

**References**:

- [Github 进行 fork 后如何与原仓库同步：重新 fork 很省事，但不如反复练习版本合并](https://github.com/selfteaching/the-craft-of-selfteaching/issues/67)
