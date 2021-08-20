# Cloudflare

## Login After Losing Recovery Codes

I enabled my 2FA with Cloudflare, and I don't know authenticator app codes or recovery codes. So I can't access my account.

I emailed `support@cloudflare.com` with:

```text
The list of domains (1 or more) in your account
The IP address(es) for the web server(s) associated with each those domain(s) (1 or more)
Who your hosting provider is for each of those domain(s) (1 or more)
What your original name servers were for each of those domain(s) (1 or more)
For Authy, the phone number you used to activate Authy on your Cloudflare account
```

Because it is not a Pro or higher level account, sending emails does not have a higher priority. It's worth being alerted to the fact that all 2FAs now seem to require a Security Key.

It was late, but Cloudflare customer service finally turned off my 2FA and I was able to log into my account and save Recovery Codes when I opened the 2FA.

In the process of communication with customer service, customer service asked me to verify the ownership at the root domain `https://yidajiabei.xyz` of my website. At first I verified at `https://www.yidajiabei.xyz`, but the customer service replied no; then I first changed to another DNS server and verified at the root domain; finally, 2FA was temporarily shut down.

---

References:

1. <https://community.cloudflare.com/t/community-tip-best-practices-for-setting-up-and-using-two-factor-authentication/44270>
2. <https://support.cloudflare.com/hc/en-us/articles/200167906-Securing-user-access-with-two-factor-authentication-2FA->
