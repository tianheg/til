---
title: list-users
date: 2021-05-01 10:19:14
permalink: /pages/44f7d5/
categories:
  - linux
tags:
  - 
---
# List Users

**1. List All Users in Linux with the /etc/passwd File**

Use `cat /etc/passwd` or `less /etc/passwd`

**2. List All Linux Users with the `getent` Command**

Use `getent passwd`

Each line represents **one user** and has **seven** (7) fields.

The fields are separated by **:** (colons) and each line includes the following information:

1. Username
2. The encrypted password (represented by **x**, located in the **/etc/shadow** file)
3. User ID number (known as **UID**)
4. User group ID (known as **GID**)
5. User full name
6. User home directory
7. The login shell (by default set to **bin/bash**)

![linux-list-users](images/linux-list-users.png)

**3. How to Only List Linux Usernames**

Using the **`awk`** or **`cut`** command.

```bash
awk –F: ‘{ print $1}’ /etc/passwd
# or
cut –d: –f1 /etc/passwd
```

Using the **`getent`** command with **`awk`** and **`cut`**.

```bash
getent passwd | awk -F: ‘{ print $1}’
# or
getent passwd | –d: –f1
```

**4. How to Search for Existing Linux Users**

```bash
getent passwd | grep username
# or
getent passwd username
```

If the user exists, it will display login information. On the other hand, if there is no such user, there will be no output.

[source](https://phoenixnap.com/kb/how-to-list-users-linux)
