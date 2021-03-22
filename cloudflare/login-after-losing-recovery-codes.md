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

source:

1. <https://community.cloudflare.com/t/community-tip-best-practices-for-setting-up-and-using-two-factor-authentication/44270>
2. <https://support.cloudflare.com/hc/zh-cn/articles/200167906-%E9%80%9A%E8%BF%87%E5%8F%8C%E5%9B%A0%E7%B4%A0%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81-2FA-%E4%BF%9D%E6%8A%A4%E7%94%A8%E6%88%B7%E8%AE%BF%E9%97%AE%E6%9D%83>
