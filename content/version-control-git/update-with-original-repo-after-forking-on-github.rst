
Update With Original Repo After Forking on GitHub
=================================================

Way one
-------


#. open your local git repo



   cd repo


#. check your remote repo



   git remote -v
   origin  https://github.com/a/repo.git (fetch)
   origin  https://github.com/a/repo.git (push)


#. set ``upstream`` repo



   git remote add upstream https://github.com/b/original-repo.git


#. check your remote repo again



   git remote -v
   origin  https://github.com/a/repo.git (fetch)
   origin  https://github.com/a/repo.git (push)
   upstream https://github.com/b/original-repo.git (fetch)
   upstream https://github.com/b/original-repo.git (push)


#. execute ``git status`` to check whether there are uncommitted changes locally, if yes, push the commits to GitHub. Then execute ``git status`` again to confirm there are no uncommited changes locally.



   git status


#. fetch update from original repo



   git fetch upstream


#. switch to default branch ``main``



   git checkout main


#. merge original ``main`` branch



   git merge upstream/main


#. push changes to your own forked repo



   git push origin main

Way Two
-------

Use GitHub's Compare, set your forked repo left(base repo), set your original repo right(compare with).

Then create a merge for your forked repo, and merge it.

Last Way
--------


#. delete your forked repo
#. fork again

----

ref:


* `Github 进行 fork 后如何与原仓库同步：重新 fork 很省事，但不如反复练习版本合并 <https://github.com/selfteaching/the-craft-of-selfteaching/issues/67>`_
