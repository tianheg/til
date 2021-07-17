---
title: Delete All Local And Remote Tags
---
# Delete All Local And Remote Tags

First delete remote tags, then local tags:

```sh
git push origin --delete $(git tag -l)
git tag -d $(git tag -l)
```

[source](https://stackoverflow.com/a/44702758/12539782)