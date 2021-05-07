---
title: save-file
date: 2021-05-01 10:19:14
permalink: /pages/271d70/
categories:
  - emacs
tags:
  - 
---
# Save File

C\-x C\-s

Save the current buffer to its file (`save-buffer`).

C\-x s

Save any or all buffers to their files (`save-some-buffers`).

M\-~

Forget that the current buffer has been changed (`not-modified`). With prefix argument (C\-u), mark the current buffer as changed.

C\-x C\-w

Save the current buffer with a specified file name (`write-file`).

M\-x set\-visited\-file\-name

Change the file name under which the current buffer will be saved.

C-x C-f

open a file

C-x C-b

view the list of buffers

C-x C-s

save the contents to the current buffers

C-x C-w

save the current buffer to some other file name

C-x k enter the buffer name

close a particular buffer

C-x C-c

completely close and exit Emacs. It is important to note that this action saves the buffers first, before killing Emacs.

---

**References**:

- <https://linuxhint.com/emacs_save_quit/>
- <https://www.gnu.org/software/emacs/manual/html_node/emacs/Save-Commands.html>
