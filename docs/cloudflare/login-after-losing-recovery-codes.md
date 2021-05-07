---
title: login-after-losing-recovery-codes
date: 2021-05-01 10:19:14
permalink: /pages/bd5630/
categories:
  - cloudflare
tags:
---
# Login After Losing Recovery Codes

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
