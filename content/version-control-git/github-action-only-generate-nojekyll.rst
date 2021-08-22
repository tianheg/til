
GitHub Action only Generate ``.nojekyll``
=============================================

problem `source <https://github.com/tianheg/feed/runs/2588088608?check_suite_focus=true#step:6:34>`_\ :



   2021-05-14T23:53:50.5691148Z [INFO] copy /home/runner/work/feed/feed/public to /home/runner/actions_github_pages_1621036430543
   2021-05-14T23:53:50.5744245Z cp: no such file or directory: /home/runner/work/feed/feed/public/*
   2021-05-14T23:53:50.5748693Z cp: no such file or directory: /home/runner/work/feed/feed/public/.*
   2021-05-14T23:53:50.5754401Z [INFO] delete excluded assets
   2021-05-14T23:53:50.5804394Z rm: no paths given
   2021-05-14T23:53:50.5808868Z [INFO] Created /home/runner/actions_github_pages_1621036430543/.nojekyll

   [gh-pages (root-commit) e783e47] deploy: 3ccc59a4e70e26668e0189264e8357994c0680ef
      1 file changed, 0 insertions(+), 0 deletions(-)
      create mode 100644 .nojekyll

it's abnormal, normal display:



   [INFO] copy /home/runner/work/feed/feed/public to /home/runner/actions_github_pages_1621037030810
     cp: no such file or directory: /home/runner/work/feed/feed/public/.*
     [INFO] delete excluded assets
     rm: no paths given
     [INFO] Created /home/runner/actions_github_pages_1621037030810/.nojekyll
     [INFO] Created /home/runner/actions_github_pages_1621037030810/CNAME

    [gh-pages (root-commit) 7fede38] deploy: 584bbf403bd475f9481986ed57bbc6953687ec31
      8 files changed, 6756 insertions(+)
      create mode 100644 .nojekyll
      create mode 100644 CNAME
      create mode 100644 cache.json
      create mode 100644 favicon.ico
      create mode 100644 feed.atom
      create mode 100644 index.html
      create mode 100644 index.js
      create mode 100644 styles.css

I suspect it's because of the addition of ``static/CNAME`` and I created a new `test repository <https://github.com/tianheg/osmosfeed-demo>`_ for this purpose:

.. code:: text

   .github/workflows/update-feed.yaml
   includes/before-head-end.html
   static/CNAME
   .gitignore
   README.md
   osmosfeed.yaml
   package.json

However, it's GitHub Action is running fine, `generating all the files <https://github.com/tianheg/osmosfeed-demo/runs/2588166880?check_suite_focus=true#step:6:67>`_. I'm confused.

The last GitHub Action run for osmosfeed-demo only generated `\ ``.nojekyll`` <https://github.com/tianheg/osmosfeed-demo/runs/2588279301?check_suite_focus=true#step:6:68>`_ (Outdated)
