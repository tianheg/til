---
title: can-not-change-name-or-comment-without-losing-signatures
date: 2021-05-01 10:19:14
permalink: /pages/373f51/
categories:
  - gpg
tags:
---
# Can Not Change Name Or Comment Without Losing Signatures

Incoming signatures always point to a UID. UIDs can not be modified, only revoked. If you want to change one, it will have to get signed again. If you revoke a UID, you will lose all incoming signatures.

UIDs are simple strings usually adhering to the pattern `Name (comment) <mail@example.com>`, and the signature is created over the whole string including the comment.

Imagine you could change UIDs without losing signatures. You could just change your name to another, and pretend to be this guy and be certified for this name at the same time. Same applies to comment information which is also certified.

[source](https://stackoverflow.com/a/24189287/12539782)
