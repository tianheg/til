# GitHub

## Show Diff

```diff
- var GITHUB_ISSUES_LINK = "https://api.github.com/repos/nelsontky/gh-pages-url-shortener-db/issues/";
+ var GITHUB_ISSUES_LINK = "https://api.github.com/repos/${your name}/${your db repo}/issues/";
```

[source](https://github.com/mayandev/gh-short-url#before-use)

## 问题

```sh
$ bash bootstrap.sh
Cloning into '/home/tianheg/.vim'...
fatal: unable to access 'https://github.com/carlhuda/janus.git/': gnutls_handshake() failed: The TLS connection was non-properly terminated.
Could not clone the repository to /home/tianheg/.vim
```

This error means that Git cannot establish a secure connection to the server you're trying to use. Your version of Git uses the GnuTLS library to set up TLS (encrypted) connections, and for some reason that setup process is failing.

This could be for a couple of reasons. One is that your server (which one you haven't mentioned) is using an incompatible set of cipher suites or TLS versions, and there's no encryption algorithms in common that can be chosen. It's also possible that you have someone tampering with the connection via a MITM device.

The version of Git and GnuTLS you're using should work just fine with most standard servers. Re-installing it won't help. You can try upgrading to a newer version of Debian, or you can try building Git yourself against a version of libcurl using OpenSSL. You can also just switch to SSH-based remotes, which will avoid this incompatibility altogether.

```sh
Cloning into '/home/tianheg/.vim/janus/vim/colors/base16-vim'...
fatal: unable to access 'https://github.com/chriskempson/base16-vim.git/': gnutls_handshake() failed: Error in the pull function.
```

---

**参考资料**：

1. <https://github.community/t/unable-to-push-to-repo-gnutls-handshake-failed/885/19>
2. <https://askubuntu.com/a/1009764>
