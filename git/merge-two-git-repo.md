# Merge Two Git Repo

A: <https://github.com/tianheg/a.git>

B: <https://github.com/tianheg/b.git>

Want merge B into A. Keep A and B's commits.

```bash
git clone https://github.com/tianheg/a.git
git clone https://github.com/tianheg/b.git

git remote add b ../b/
git remote
b
origin

git fetch b
git checkout -b b_main b/main

git checkout main
git merge b --allow-unrelated-histories
git status
git add --all
git commit -m ""
git push origin main
```
