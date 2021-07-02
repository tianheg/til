---
layout: note
title: Version Control
parent: Home
has_children: true
has_toc: false
---

## Git and Version Control

Git (/ɡɪt/) is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).

Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server. Git is free and open-source software distributed under GNU General Public License Version 2.

from <https://en.wikipedia.org/wiki/Git>

- [[Git Fundamentals]]
- [[Git Security]]
- [[Git Workflows]]
- [[Local Storage]]
  - [[Dealing With Files and Folders]]
- [[Git Command Line Reference]]
- [[Git Glossary]]
- [[Commit Messages Guide]]

### What Is Credentials

Git has an internal interface for storing and retrieving credentials from system-specific helpers, as well as prompting the user for usernames and passwords. The git-credential command exposes this interface to scripts which may want to retrieve, store, or prompt for credentials in the same manner as Git. The design of this scriptable interface models the internal C API.

[source](https://git-scm.com/docs/git-credential)

## Using Git Collaboratively

- [[Git and GitHub]]
- [[Using Git Collaboratively]]
- [[GitHub Cheatsheet]]

## Mods

- [[Git Custom Shortcuts]]

## [[Want to]]

- [[Git Maybe Useful]]
- [[Branch Name Contain The 'space' Char]]
- [[Create Empty Branch Locally And Remotely]]
- [[Delete A Git Branch Both Locally And Remotely]]
- [[Delete All Local And Remote Tags]]
- [[Delete Commit]]
- [[Merge Two Git Repo]]
- [[Remove Tracking Branches No Longer On Remote]]
- [[Update With Original Repo After Forking on GitHub]]

### Rename Branch

```bash
git branch -m master main
```

rename `master` to `main`

### Rename The `origin` Remote To `upstream`

```bash
$ git remote rename origin upstream
```

You can also do this using `git remote set-url`, but it takes longer and is more steps.

[source](https://github.com/k88hudson/git-flight-rules#suggesting-code-via-pull-requests)

### Reset

Come back last commit, don't delete commit content

```bash
git reset --soft HEAD^
```

### See A File At A Specific Commit

[source](https://github.com/k88hudson/git-flight-rules#what-did-i-just-commit)

```bash
git show <commitid>:filename
```

### Show Helpful Guides That Come With Git

```sh
git help -g
```

[source](https://github.com/git-tips/tips#show-helpful-guides-that-come-with-git)

### Show The Latest Commit

[source](https://github.com/k88hudson/git-flight-rules#what-did-i-just-commit)

```bash
git show
# or
git log -n1 -p
```

### Use `format patch` To Suggest Code Changes

```bash
git format-patch HEAD^
```

[source](https://github.com/k88hudson/git-flight-rules#suggesting-code-via-patches)

### What Will Be Done After Rename Branch On GitHub

```sh
git branch -m master main
git fetch origin
git branch -u origin/main main
```

---

ref:

1. <https://github.com/git-tips/tips>
2. [Git Reference Manual](https://git-scm.com/docs)
3. [GitHub Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)
4. [Visual Git Cheat Sheet](https://ndpsoftware.com/git-cheatsheet.html)
5. [git - the simple guide](https://rogerdudler.github.io/git-guide/index.html)
6. [Think Like (a) Git](http://think-like-a-git.net/)
7. [Pro Git book 2nd Edition](https://git-scm.com/book/en/v2)
8. [A Visual Git Reference](http://marklodato.github.io/visual-git-guide/index-en.html)
9. <https://learngitbranching.js.org/>
10. <https://github.com/sds/overcommit>
