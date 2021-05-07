---
title: your-computer-isnt-yours
date: 2021-05-01 10:19:14
permalink: /pages/925698/
categories:
  - security
tags:
  - 
---
# Your Computer Isn't Yours

source: <https://sneak.berlin/20201112/your-computer-isnt-yours/>

12 November 2020
( 3897 words, approximately 21 minutes reading time. )

*There have been several updates appended to this page as of 2020\-11\-16, please [see below](#updates).*

Also available in:

[简体中文](https://sneak.berlin/i18n/2020-11-12-your-computer-isnt-yours.zh/)

It’s here. It happened. Did you notice?

I’m speaking, of course, of [the world that Richard Stallman predicted in 1997](https://www.gnu.org/philosophy/right-to-read.en.html). The one [Cory Doctorow also warned us about](https://craphound.com/pc/download/).

On modern versions of macOS, you simply can’t power on your computer, launch a text editor or eBook reader, and write or read, without a log of your activity being transmitted and stored.

It turns out that in the current version of the macOS, the OS sends to Apple a hash (unique identifier) of each and every program you run, when you run it. Lots of people didn’t realize this, because it’s silent and invisible and it fails instantly and gracefully when you’re offline, but today the [server got really slow](https://news.ycombinator.com/item?id=25074959) and it didn’t hit the fail\-fast code path, and everyone’s apps failed to open if they were connected to the internet.

Because it does this using the internet, the server sees your IP, of course, and knows what time the request came in. An IP address allows for coarse, city\-level and ISP\-level geolocation, and allows for a table that has the following headings:

`Date, Time, Computer, ISP, City, State, Application Hash`

Apple (or anyone else) can, of course, calculate these hashes for common programs: everything in the App Store, the Creative Cloud, Tor Browser, cracking or reverse engineering tools, whatever.

This means that Apple knows when you’re at home. When you’re at work. What apps you open there, and how often. They know when you open Premiere over at a friend’s house on their Wi\-Fi, and they know when you open Tor Browser in a hotel on a trip to another city.

“Who cares?” I hear you asking.

Well, it’s not just Apple. This information doesn’t stay with them:

1. These OCSP requests are transmitted *unencrypted*. Everyone who can see the network can see these, including your ISP and [anyone who has tapped their cables](https://en.wikipedia.org/wiki/Room_641A).

2. These requests go to a third\-party CDN run by another company, Akamai.

3. Since October of 2012, Apple is a partner in [the US military intelligence community’s PRISM spying program](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)), which grants the US federal police and military unfettered access to this data without a warrant, any time they ask for it. [In the first half of 2019 they did this over 18,000 times, and another 17,500+ times in the second half of 2019.](https://www.apple.com/legal/transparency/)

This data amounts to a tremendous trove of data about your life and habits, and allows someone possessing all of it to identify your movement and activity patterns. For some people, this can even pose a physical danger to them.

Now, it’s been possible up until today to block this sort of stuff on your Mac using a program called [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) (really, the only thing keeping me using macOS at this point). In the default configuration, it blanket allows all of this computer\-to\-Apple communication, but you can disable those default rules and go on to approve or deny each of these connections, and your computer will continue to work fine without snitching on you to Apple.

The version of macOS that was released today, 11.0, also known as Big Sur, has new APIs that prevent Little Snitch from working the same way. The new APIs don’t permit Little Snitch to inspect or block any OS level processes. Additionally, the [new rules in macOS 11 even hobble VPNs so that Apple apps will simply bypass them](https://appleterm.com/2020/10/20/macos-big-sur-firewalls-and-vpns/).

[@patrickwardle lets us know](https://twitter.com/patrickwardle/status/1327034191523975168) that `trustd`, the daemon responsible for these requests, is in the new `ContentFilterExclusionList` in macOS 11, which means it can’t be blocked by any user\-controlled firewall or VPN. In his screenshot, it also shows that CommCenter (used for making phone calls from your Mac) and Maps will also leak past your firewall/VPN, potentially compromising your voice traffic and future/planned location information.

Those shiny new Apple Silicon macs that Apple just announced, three times faster and 50% more battery life? They won’t run any OS before Big Sur.

These machines are the first general purpose computers ever where you have to make an exclusive choice: you can have a fast and efficient machine, or you can have a private one. (Apple mobile devices have already been this way for several years.) Short of using an external network filtering device like a travel/vpn router that *you* can totally control, there will be no way to boot any OS on the new Apple Silicon macs that *won’t* phone home, and you can’t modify the OS to prevent this (or they won’t boot at all, due to hardware\-based cryptographic protections).

**Update, 2020\-11\-13 07:20 UTC:** It comes to my attention that it may be possible to disable the boot time protections and modify the Signed System Volume (SSV) on Apple Silicon macs, via the [bputil](https://keith.github.io/xcode-man-pages/bputil.1.html) tool. I’ve one on order, and I will investigate and report on this blog. As I understand it, this would still only permit booting of Apple\-signed macOS, albeit perhaps with certain objectionable system processes removed or disabled. More data forthcoming when I have the system in hand.

Your computer now serves a remote master, who has decided that they are entitled to spy on you. If you’ve [the most efficient high\-res laptop in the world](https://www.apple.com/macbook-air/), you *can’t turn this off*.[\*](#turnitoff)

Let’s not think very much right now about [the additional fact that Apple can, via these online certificate checks, prevent you from launching any app they (or their government) demands be censored](https://lapcatsoftware.com/articles/revocation.html).

## Dear Frog, This Water Is Now Boiling

The day that Stallman and Doctorow have been warning us about has arrived this week. It’s been a slow and gradual process, but we are finally here. You will receive no further alerts.

## See Also

- 21 Jan 2020: [Apple dropped plan for encrypting backups after FBI complained](https://www.reuters.com/article/us-apple-fbi-icloud-exclusive/exclusive-apple-dropped-plan-for-encrypting-backups-after-fbi-complained-sources-idUSKBN1ZK1CT)

## Probably Unrelated

In other news, Apple has quietly backdoored the end\-to\-end cryptography of iMessage. Presently, modern iOS will prompt you for your Apple ID during setup, and will automatically enable iCloud and iCloud Backup.

iCloud Backup is not end to end encrypted: it encrypts your device backup to *Apple* keys. Every device with iCloud Backup enabled (it’s on by default) backs up the complete iMessage history to Apple, along with the device’s iMessage secret keys, each night when plugged in. Apple can decrypt and read this information without ever touching the device. Even if *you* have iCloud and/or iCloud Backup disabled: it’s likely that whoever you’re iMessaging with does not, and that your conversation is being uploaded to Apple (and, via PRISM, freely available to the US military intelligence community, FBI, et al—with no warrant or probable cause).

[Use Signal.](https://signal.org/)

## Updates

**Update, 2020\-11\-16 16:06 UTC:**

> “What are the facts? Again and again and again – what are the facts? Shun wishful thinking, ignore divine revelation, forget what “the stars foretell,” avoid opinion, care not what the neighbors think, never mind the unguessable “verdict of history” – what are the facts, and to how many decimal places? You pilot always into an unknown future; facts are your single clue. Get the facts!”

— Robert Heinlein

That guy jacopo who supposedly debunked my primary claim is lying. It’s *evidenced on his own page*, which you can [go see for yourself](https://blog.jacopo.io/en/post/apple-ocsp/):

![wrong](https://sneak.berlin/s/2020/20201112.yourcomputer/wrong.jpg)

Oops.

He also claims that “macOS does actually send out some opaque information about the developer certificate of those apps”. It’s actually not opaque at all: it’s a *publicly known* unique identifier for the developer of an app (which for almost all apps is a public unique identifier for that app, as most developers only publish a single app).

This nicely illustrates the danger of trusting any expert that jams some technical gibberish in your face under a clickbait [Betteridge headline](https://en.wikipedia.org/wiki/Betteridge%27s_law_of_headlines). Make sure you do your homework, and, always, always, our guiding light: *What are the facts?*

The thing that’s sent is *indeed a hash*, is *indeed a unique identifier for almost all apps*, and is *indeed sent to Apple unencrypted in realtime with your IP*. I simplified the explanation above to avoid having to explain OCSP and x509 and the PKI, and was deliberately careful not to claim that it was a hash of the file content of the application binary.

TL;DR: This post is, was, and remains accurate. Clickbait gonna clickbait.

The **good news** is that [Apple has, just today, publicly committed](https://support.apple.com/en-us/HT202491), presumably in response to this page, to:

1. deleting the IP logs

2. encrypting the communication between macOS and Apple to prevent the privacy leak

3. giving users an option of disabling these online checks that leak what apps you’re opening and when.

(Their update is at the very bottom of that page, under the oddly\-capitalized headline “Privacy protections”.)

A quote from Apple’s 16 November update:

> Gatekeeper performs online checks to verify if an app contains known malware and whether the developer’s signing certificate is revoked. We have never combined data from these checks with information about Apple users or their devices. We do not use data from these checks to learn what individual users are launching or running on their devices.
>
> Notarization checks if the app contains known malware using an encrypted connection that is resilient to server failures.

They use deliberately confusing language here to lead you into conflating Gatekeeper with Notarization, so that you will believe that the connections are currently encrypted, while not lying. The Gatekeeper OCSP checks described in this post (“Gatekeeper performs online checks”) **are not encrypted**. (The notarization ones, which aren’t relevant here, are.)

Apple’s spin doctors are among the best in the world, and my hat’s off to them.

This even totally fooled [Jon Porter at The Verge](https://www.theverge.com/2020/11/16/21569316/apple-mac-ocsp-server-developer-id-authentication-privacy-concerns-encryption-promises-fix) into misreporting their insinuation as a statement of fact, inside of a hyperlink to the Apple post itself which says no such thing! Honestly, I’m amazed and impressed, this sort of say\-one\-thing\-but\-readers\-read\-another is to me like magic tricks to a 6 year old. The Verge, to their credit, amended their reporting after I emailed them to point this out, but still: wow. That’s world\-class work.

Further:

> In addition, over the the next year we will introduce several changes to our security checks:
>
> A new encrypted protocol for Developer ID certificate revocation checks

(All of you that are [too\-clever\-by\-half](https://www.epsilontheory.com/too-clever-by-half/) incorrectly commenting about TLS trust circular dependencies and how OCSP *has* to be unencrypted to work [can stop now](https://news.ycombinator.com/item?id=25096990).)

It sucks that they’ve let the NSA, CIA, your ISP, et al slurp up this unencrypted pattern\-of\-life data off the wire for the last 2+ years, and they’re still going to transmit the data (encrypted) to *Apple* in realtime, on by default every single mac, but at least the 0.01% of mac users who know about it now can turn it off, so Apple will only get a realtime log of what apps you open, when, and where for the other 99.99% of mac users. Cool.

It’s possible they’ll use a bloom filter or some other privacy\-preserving way of distributing the certificate revocation data that doesn’t actually transmit app launch activity, but given that *every single version* of iOS now begs me to re\-enable analytics no matter how many times I repeatedly opt out, I’m not holding my breath here. We won’t know until they update this process, which they’ve only committed to doing sometime in the next *year*, which shows you how much of a priority your privacy is to them.

This is, sadly, about as close as you can possibly get to a “we fucked up” from Apple PR: they’re deleting their IP logs, encrypting their shit, and letting you turn it off. This is great, but they have [remained totally silent on the fact that their OS apps will still bypass your firewall and leak your IP and location past your VPN on Big Sur](https://thenextweb.com/plugged/2020/11/16/apple-apps-on-big-sur-bypass-firewalls-vpns-analysis-macos/) and how they’re still [not fixing the key escrow backdoor in iMessage’s encryption so Apple sysadmins and the FBI can keep seeing your nudes and texts in iMessage](https://www.reuters.com/article/us-apple-fbi-icloud-exclusive/exclusive-apple-dropped-plan-for-encrypting-backups-after-fbi-complained-sources-idUSKBN1ZK1CT).

We need to be happy with little victories, I guess.

[dhh puts it best](https://twitter.com/dhh/status/1328337941769367552):

> The whole process of having Apple mix these “protections against malware” into a system that’s also a “protection of our business model” remains deeply problematic.
>
> We need to remain vigilant, and resist these power grabs masquerading purely as benevolent security measures. Yes, there are security benefits. No, we don’t trust Apple to dictate whether our computers should be allowed to run a piece of software. We already lost that on iOS.
>
> Anyway, this is promise of progress. Right now, Apple is still linking your IP address to app openings in an unencrypted way over the open internet. And in Big Sur, have prevented tools like Little Snitch from blocking that. So until the fixes roll out, maybe don’t upgrade?
>
> What this change to logging and promise of future improvements also does, though, is hanging all the Apple apologists that were oh\-so\-quick to dismiss these revelations as nothing out to dry. Yikes jumping on that boat the day before Apple sinks it themselves with this admission.

Three cheers for intelligent voices of reason. Thanks, dhh!

**Update, 2020\-11\-14 05:10 UTC:** There is now a FAQ.

## FAQ

Q: *Is this part of macOS analytics? Does this still happen if I have analytics off?*

A: This has nothing to do with analytics. It seems this is part of Apple’s anti\-malware (and perhaps anti\-piracy) efforts, and happens on all macs running the affected versions of the OS, independent of any analytics settings. There is no user setting in the OS to disable this behavior.

Q: *When did this start?*

A: This has been happening since at least macOS Catalina (10.15.x, released 7 October 2019). This did not just start with yesterday’s release of Big Sur, it has been happening silently for *at least* a year. [According to Jeff Johnson of Lap Cat Software](https://lapcatsoftware.com/articles/notarization-privacy.html), this started with macOS Mojave, which was released on 24 September 2018.

Each new version of macOS that comes out, I install on a blank fresh machine, turn analytics off and log into nothing (no iCloud, no App Store, no FaceTime, no iMessage) and use an external device to monitor all of the network traffic that comes out of the machine. The last few versions of macOS have been quite noisy, even when you don’t use any Apple services. There have been some privacy/tracking concerns in Mojave (10.14.x), but I don’t recall if this specific OCSP issue existed then or not. I have not yet tested Big Sur ([keep in touch for updates](https://sneak.berlin/list)), and the concerns about user firewalls like Little Snitch and the Apple apps bypassing those and VPNs have come from reports from those who have. I imagine I’ll have a big list of issues I find with Big Sur when I install it on a test machine this week, as it just came out yesterday and I don’t use my limited time testing betas that are in flux, only released software.

Q: *How do I protect my privacy?*

A: It varies. There’s a ton of traffic coming out of your mac talking to Apple, and if you’re concerned about your privacy you can start with turning off the things for which there *are* knobs: disable and log out of iCloud, disable and log out of iMessage, disable and log out of FaceTime. Ensure Location Services is off on your computer, iPhone, and iPad. These are the big tracking leaks that you’ve already opted in to, and there is a way out that could not be simpler: turn it off.

As for the OCSP issue, I believe (but have not tested!) that

`echo 127.0.0.1 ocsp.apple.com | sudo tee -a /etc/hosts`

will work for now for this specific issue. I block such traffic using Little Snitch, which still works correctly on 10.15.x (Catalina) and earlier. (You have to disable all of the Little Snitch default allow rules for “macOS Services” and “iCloud Services” to get alerts when macOS tries to talk to Apple, because Little Snitch permits them by default.)

If you have an Intel mac (which is pretty much all of you right now), don’t worry too much about OS changes. If you’re willing to get your hands dirty and change some settings, you’ll likely always be able to modify every OS that Apple ever ships for your machine. (This is especially true for slightly older intel macs that do not have the T2 security chip in them, and it’s likely that even T2 Intel macs will always be permitted to disable all boot security (and thus modify the OS) if the user desires, which is the case today.)

The new ARM64 (“Apple Silicon”) macs that were released this week are the reason for my sounding the alarm: it remains to be seen whether it will be possible for users to modify the OS on these systems at all. On other Apple ARM systems (iPad, iPhone, Apple TV, Watch) it is cryptographically prohibited to disable parts of the OS. In the default configuration for these new ARM macs, it will likely be prohibited as well, although hopefully users that want the ability will be able to disable some of the security protections and modify the system. I’m hoping that the [`bputil(1) utility`](https://keith.github.io/xcode-man-pages/bputil.1.html) will permit disabling of the system volume integrity checks on the new macs, allowing us to disable certain system services at boot, without disabling all of the platform security features. More information will be forthcoming when I have the new M1 hardware in hand this month and have the facts.

Q: *If you don’t like Apple or don’t trust their OS, why are you running it? Why did you say you’re buying one of the new ARM macs?*

A: The simple answer is that without the hardware and software in hand, I can’t speak authoritatively about what it does or does not do, or steps one might take to mitigate any privacy issues. The long answer is that I have 20+ computers that comprise ~6 different processor architectures and I variously run all of the OSes you’ve heard of and some of the ones you probably haven’t. For example, here in my lab, I have 68k macs (16 bit, almost\-32 bit (shoutout to my IIcx), and 32 bit clean), PowerPC macs, Intel 32 bit macs, Intel 64 bit macs (with and without the T2 security chip), and I’d be a total slacker if I didn’t hack at least a little bit on an ARM64 mac.

Q: *Why is Apple spying on us?*

A: I don’t believe that this was explicitly designed as telemetry, but it happens to serve insanely well for that purpose. The simple (assume no malice) explanation is that this is part of Apple’s efforts to prevent malware and ensure platform security on macOS. Additionally, the OCSP traffic that macOS generates is not encrypted, which makes it *perfect* for military surveillance operations (which passively monitor all major ISPs and network backbones) to use it for the *purpose* of telemetry, whether Apple *intended* that when designing the feature or not.

However: Apple recently backdoored iMessage’s cryptography with an iOS update that introduced iCloud Backup, and then [didn’t fix it so the FBI could continue to read all the data on your phone](https://www.reuters.com/article/us-apple-fbi-icloud-exclusive/exclusive-apple-dropped-plan-for-encrypting-backups-after-fbi-complained-sources-idUSKBN1ZK1CT).

As Goldfinger’s famous saying goes: *“Once is happenstance. Twice is coincidence. The third time it’s enemy action.”* There is a finite and small number of times Apple (who employs many absolute stone\-cold cryptography *wizards*) can say “oops sorry it was an accident” that their software transmitted plaintext or encryption keys *off of the device and to the network/Apple* and remain credible in their explanations.

The last time I reported an issue to Apple involving the transmission of plaintext across the network back in 2005, [they fixed it promptly](https://nvd.nist.gov/vuln/detail/CVE-2015-3774), and that was only for dictionary word lookups. Shortly thereafter they introduced [App Transport Security](https://developer.apple.com/documentation/bundleresources/information_property_list/nsapptransportsecurity) to help third\-party app developers stop fucking up their use of network crypto, and made it way more difficult for those same app developers to make unencrypted requests in App Store apps. It’s quite strange to me to see Apple making OCSP requests unencrypted, even if that is the industry default.

If Apple truly cares about user privacy, they should be looking long and hard at every single packet that comes out of a mac on a fresh install before they release a new OS. We are. The longer that they don’t, the less credible their claims about respecting user privacy will become.

Q: *Why are you crying wolf? Don’t you know that OCSP is just to prevent malware and keep the OS secure and isn’t meant as telemetry?*

A: The side effect is that it *functions as telemetry*, regardless of what the original intent of OCSP is or was. Additionally, even though the OCSP responses are signed, it’s borderline negligent that the OCSP requests themselves aren’t encrypted, allowing anyone on the network (which includes the US military intelligence community) to see what apps you’re launching and when.

Many things function as telemetry, even when not originally intended as so. The intelligence services that spy on everyone they can take advantage of this when and where it occurs, regardless of designer intent.

It’s not worth putting everyone in a society under constant surveillance to defeat, for example, violent terrorism, and it’s not worth putting everyone on a platform under the same surveillance to defeat malware. You throw out the baby with the bathwater when, in your effort to produce a secure platform, you produce a platform that is *inherently insecure* due to a lack of privacy.

Q: *They backdoored iMessage’s end\-to\-end encryption?! WTF?!*

A: Yup. More technical details in my HN comments [here](https://news.ycombinator.com/item?id=25078317) and [here](https://news.ycombinator.com/item?id=25078388).

TL;DR: They even say as much on their website; from [https://support.apple.com/en\-us/HT202303](https://support.apple.com/en-us/HT202303):

> Messages in iCloud also uses end\-to\-end encryption. **If you have iCloud Backup turned on, your backup includes a copy of the key protecting your Messages.** This ensures you can recover your Messages if you lose access to iCloud Keychain and your trusted devices. When you turn off iCloud Backup, a new key is generated on your device to protect future messages and isn’t stored by Apple.

(emphasis mine)

Note that iCloud Backup itself is *not* end\-to\-end encrypted, which is what results in the iMessage key escrow issue that backdoors the end\-to\-end encryption of iMessage. There’s a section on that webpage that lists the stuff that *is* end\-to\-end encrypted, and iCloud Backup ain’t in there.

[Neither are your iCloud photos.](https://sneak.berlin/20200604/if-zoom-is-wrong-so-is-apple/) Apple sysadmins (and the US military and feds) can [totally see all your nudes](https://youtu.be/XEVlyP4_11M?t=1493) in iCloud or iMessage.

## Further Reading

- [https://developer.apple.com/videos/play/wwdc2020/10686/](https://developer.apple.com/videos/play/wwdc2020/10686/)
- [https://lapcatsoftware.com/articles/ocsp.html](https://lapcatsoftware.com/articles/ocsp.html)
