---
title: GPG
---
# GPG

## Can Not Change Name Or Comment Without Losing Signatures

Incoming signatures always point to a UID. UIDs can not be modified, only revoked. If you want to change one, it will have to get signed again. If you revoke a UID, you will lose all incoming signatures.

UIDs are simple strings usually adhering to the pattern `Name (comment) <mail@example.com>`, and the signature is created over the whole string including the comment.

Imagine you could change UIDs without losing signatures. You could just change your name to another, and pretend to be this guy and be certified for this name at the same time. Same applies to comment information which is also certified.

[source](https://stackoverflow.com/a/24189287/12539782)

## Import GitHub Key

```sh
$ curl https://github.com/web-flow.gpg | gpg --import
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   919  100   919    0     0    408      0  0:00:02  0:00:02 --:--:--   408
gpg: key 4AEE18F83AFDEB23: public key "GitHub (web-flow commit signing) <noreply@github.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1

$ gpg --sign-key 4AEE18F83AFDEB23

pub  rsa2048/4AEE18F83AFDEB23
     created: 2017-08-16  expires: never       usage: SC  
     trust: unknown       validity: unknown
[ unknown] (1). GitHub (web-flow commit signing) <noreply@github.com>


pub  rsa2048/4AEE18F83AFDEB23
     created: 2017-08-16  expires: never       usage: SC  
     trust: unknown       validity: unknown
 Primary key fingerprint: 5DE3 E050 9C47 EA3C F04A  42D3 4AEE 18F8 3AFD EB23

     GitHub (web-flow commit signing) <noreply@github.com>

Are you sure that you want to sign this key with your
key "tianheg <yidajiabei@163.com>" (CEFB7183F466F99F)

Really sign? (y/N) y
```

在 Github 网页端进行的操作，比如创建仓库。这些 commit 并没有用我们之前生成的密钥进行签名，而是由 Github 代为签名了。这样的结果就是，我们本地无法确认这些签名的真实性。

为了解决这个问题，我们需要导入并信任 [Github 所用的 GPG 密钥](https://github.com/web-flow.gpg)。

[source](https://www.imwzk.com/posts/2019-08-04-how-to-use-gpg-on-github/)
