---
layout: note
title: Site Info
nav_order: 1
parent: Home
has_children: true
has_toc: false
---

- [[Site ToDo's]]
- [[YAML Tags]] (Templates)
- [[Version History]]

## Obsidian Problem

- When Zettelkasten ID is `Q.Q.Q`, it can't create new Zettelkasten note until `5.5.5.md`

---

- Notes are automatically transformed by [Jekyll](https://jekyllrb.com/) into a static site whenever I push this repo to GitHub and deployed to the web by [Netlify](https://app.netlify.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/7adba10f-2f80-4d2f-830a-f0458d19936f/deploy-status)](https://app.netlify.com/sites/tianheg-til/deploys)

- Backlinks maintained with Andy Matuschak's [Note Link Janitor](https://github.com/andymatuschak/note-link-janitor)

Run Note Link Janitor with GitHub Action:

```yaml
# from https://gist.github.com/rajesh-s/749c99ef9e7c884828a1acda698e477b
# Usage:
# Copy this file with the same name "note-link-janitor-gh-action-workflow.yml" to the <repo>/.github/workflows/ folder
# I keep all my *.md files in SRC and run janitor only on that folder. If you keep it in the root of repository or any other folder, feel free to update it on line 37 of this file
# The workflow gets triggered every time you push to your repository
name: note-link-janitor-gh-action-workflow

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  note-link-janitor-run:
    # Name the Job
    name: Note Link Janitor Run
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2
        with:
          path: '${{ github.event.repository.name }}'
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '12'
      - name: Checkout code from note-link-janitor
        uses: actions/checkout@v2
        with:
          repository: 'thats-all-forks/note-link-janitor'
          path: 'note-link-janitor'
      - run: cd ${{ github.workspace }}/note-link-janitor && yarn install && yarn run build
      - name: Run Note Link Janitor
      # Runs note-link-janitor only on the src folder in the repo where the *.md files are. Modify this as per your own setup
        run: ${{ github.workspace }}/note-link-janitor/dist/index.js ${{ github.workspace }}/${{ github.event.repository.name }}/src
      - run: cd ${{ github.workspace }}/${{ github.event.repository.name }} && git status .
      - name: Commit changes
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          repository: ${{ github.workspace }}/${{ github.event.repository.name }}/
          commit_message: Github Actions - Apply note link janitor changes
          
          # Optional commit user and author settings
          #commit_user_name: Notion Backup GitHub Actions Bot # defaults to "GitHub Actions"
          #commit_user_email: actions@github.com # defaults to "actions@github.com"
          #commit_author: GitHub Actions Bot <actions@github.com> # defaults to author of the commit that triggered the run
```

- Built on the [Just the Docs](https://pmarsceill.github.io/just-the-docs/) framework by [
  Patrick Marsceill](https://github.com/pmarsceill).

- Search by [Lunr.js](https://lunrjs.com/).

- Notes are written in markdown format and related thoughts linked with **[[Wikilinks]]**.

- Hosted under [the MIT license](https://opensource.org/licenses/MIT).

---

References:

1. <https://help.obsidian.md/Index>
2. <https://medium.com/@rebeccawilliams9941/the-zettelkasten-method-examples-to-help-you-get-started-8f8a44fa9ae6>
3. <https://zenkit.com/en/blog/a-beginners-guide-to-the-zettelkasten-method/>
