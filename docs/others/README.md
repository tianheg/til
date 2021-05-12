# 其他

## Algolia

### What Is A Usage Unit

4,000 search requests / 1,000 search requests per unit = 4 units per month.

10,000 records / 1,000 records per unit = 10 units per month.

[source](https://www.algolia.com/doc/faq/accounts-billing/what-is-a-usage-unit)

## Cloudflare

### Login After Losing Recovery Codes

I enabled my 2FA with Cloudflare, and I don't know authenticator app codes or recovery codes. So I can't access my account.

I emailed `support@cloudflare.com` with:

```text
The list of domains (1 or more) in your account
The IP address(es) for the web server(s) associated with each those domain(s) (1 or more)
Who your hosting provider is for each of those domain(s) (1 or more)
What your original name servers were for each of those domain(s) (1 or more)
For Authy, the phone number you used to activate Authy on your Cloudflare account

- 您帐户中的域名列表（1 个或更多）
- 与每个域名（1 个或多个）关联的 Web 服务器的 IP 地址/CNAME 记录
- 每个域名的托管服务提供商的名称（1 个或更多）
- 您的域名注册商中每个域名的原始域名服务器（1 个或多个）
- （可选）您用于在 Cloudflare.com 帐户上激活 Authy 的电话号码
```

因为不是 Pro 或者更高级的账户，发送邮件没有更高的优先级。值得警惕的是，现在的 2FA 似乎都需要 Security Key。

虽然很迟，但是 Cloudflare 的客服终于把我的 2FA 关掉，我可以登录账户，在打开 2FA 时保存 Recovery Codes。

在和客服交流过程中，客服要求我在自己网站的根域名 `https://yidajiabei.xyz` 验证所属权。一开始我在 `https://www.yidajiabei.xyz` 验证，客服回复不行；然后我先改成其他 DNS 服务器，在根域名上验证；最终，2FA 被暂时关掉了。

---

References:

1. <https://community.cloudflare.com/t/community-tip-best-practices-for-setting-up-and-using-two-factor-authentication/44270>
2. <https://support.cloudflare.com/hc/zh-cn/articles/200167906-%E9%80%9A%E8%BF%87%E5%8F%8C%E5%9B%A0%E7%B4%A0%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81-2FA-%E4%BF%9D%E6%8A%A4%E7%94%A8%E6%88%B7%E8%AE%BF%E9%97%AE%E6%9D%83>

## Samba

When I install `kubuntu-desktop` use `sudo apt-get install -y kubuntu-desktop`, get error:

```sh
Setting up samba-common-bin (2:4.11.6+dfsg-0ubuntu1.6) ...
Checking smb.conf with testparm
Load smb config files from /etc/samba/smb.conf
Loaded services file OK.
ERROR: lock directory /run/samba does not exist

ERROR: pid directory /run/samba does not exist

Server role: ROLE_STANDALONE

dpkg: error processing package samba-common-bin (--configure):
 installed samba-common-bin package post-installation script subprocess returned error exit status 1
Errors were encountered while processing:
 samba-common-bin
E: Sub-process /usr/bin/dpkg returned an error code (1)
```

samba-common-bin was installed as a dependency of smbclient, the "server role" message is misleading as I don't have any need for a SMB server (and for any lock or pidfile, afaik).

Solved by run `/bin/systemd-tmpfiles --create /usr/lib/tmpfiles.d/samba.conf`.

References:

1. <https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=953530>

- DNS
- Docker
- Emacs
- Emmet
- Gatsby
- Git
- GitHub
- Go
- GPG
- Gulp
- Hugo
- Jekyll
- Let's Encrypt
- LICENSE
- Linux
- Node.js
- Notion
- Open Source
- OpenSSL
- Org
- Project
- Python
- Security
- SSH
- Tech Translate
- Time
- Trello
- Twitter
- Ubuntu
- Vim
- VMware
- VSCode
- VuePress
- Websockets
- Win10
- Yarn
- Zsh

## 图片

### png 和 jpeg 的区别

png 和 jpeg 都是一种用于存储图像的图像格式。png 使用无损压缩算法，没有图像数据丢失；jpeg 使用有损压缩算法，图像可能丢失部分数据。
