---
title: Create Empty Branch Locally And Remotely
---
# Create Empty Branch Locally And Remotely

```sh
# local
git checkout --orphan empty-branch
git rm -rf .
# remote
git commit --allow-empty -m "root commit"
git push origin empty-branch
```

[source](https://stackoverflow.com/a/34100189/12539782)