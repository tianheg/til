---
title: commit-messages-guide
date: 2021-05-01 10:19:14
permalink: /pages/37993f/
categories:
  - git
tags:
  - 
---
# Commit Messages Guide

[source](https://github.com/RomuloOliveira/commit-messages-guide)

## Why are commit messages important?

- To speed up and streamline code reviews
- To help in the understanding of a change
- To explain "the whys" that cannot be described only with code
- To help future maintainers figure out why and how changes were made, making troubleshooting and debugging easier

## Good practices

- Use imperative form
- Capitalize the first letter
- Try to communicate what the change does without having to look at the source code
- Use the message body to explain "why", "for what", "how" and additional details
- Avoid generic messages or messages without any context
- Limit the number of characters
- Keep language consistency
- Template

```txt
Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```

## Rebase vs. Merge

### Rebase

**TL;DR:** Applies your branch commits, one by one, upon the base branch, generating a new tree.

![Rebase](images/rebase.svg)

### Merge

**TL;DR:** Creates a new commit, called (appropriately) a *merge commit*, with the differences between the two branches.

![Merge](images/merge.svg)

### Why do some people prefer to rebase over merge?

I particularly prefer to rebase over merge. The reasons include:

- It generates a "clean" history, without unnecessary merge commits
- *What you see is what you get*, i.e., in a code review all changes come from a specific and entitled commit, avoiding changes hidden in merge commits
- More merges are resolved by the committer, and every merge change is in a commit with a proper message
  - It's unusual to dig in and review merge commits, so avoiding them ensures all changes have a commit where they belong
