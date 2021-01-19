# Branch Name Contain The 'space' Char?

I do not know if you are going to find a pure, technical reason down at the bottom of this. However, I can offer that spaces tend to throw wrenches in all sorts of *nix utilities and filename processing, so it may have been to avoid accidentally doing anything wrong further down the line. After all, a git branch boils down to a file in the repo and this avoids dealing with spaces in that file's name (specifically, a branch is a file in .git/refs/heads/, as mentioned in the comment).

Mostly I would guess the reason is philosophical, and meant to keep things simple. Branch names are human-readable names that have no real reason to be complicated (and require typing two extra chars each time haha, to invoke the ghost of the sysadmin who has aliased every command to an indecipherable three letter combination). Otherwise known as the "why cd is not chdir" argument.

[source](https://stackoverflow.com/a/6619113/12539782)
