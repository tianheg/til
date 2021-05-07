---
title: unable-to-acquire-the-dpkg-frontend-lock
date: 2021-05-01 10:19:14
permalink: /pages/5494b8/
categories:
  - ubuntu
tags:
  - 
---
# Unable To Acquire The Dpkg Frontend Lock

You see this error because some other program is trying to update Ubuntu. When a command or application is updating the system or installing a new software, it locks the dpkg file (Debian package manager).

This locking is done so that two processes don’t change the content at the same time as it may lead to unwarranted situation and a possible broken system.

[source](https://itsfoss.com/could-not-get-lock-error/)
