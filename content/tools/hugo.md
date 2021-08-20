---
title: Hugo
---
# Hugo
## Install Hugo On Ubuntu

```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.81.0/hugo_extended_0.81.0_Linux-64bit.deb
sudo apt-get install ./hugo_extended_0.81.0_Linux-64bit.deb
```

[source](https://www.atlantic.net/vps-hosting/how-to-install-hugo-website-generator-on-ubuntu-20-04/)

## Hugo Server Bind IP

```bash
hugo server --bind=ip --baseURL=http://ip:1313
```

source:

- <https://discourse.gohugo.io/t/hugo-server-only-serves-to-host-computer/5664/7)>
- <https://github.com/gohugoio/hugo/issues/1582#issuecomment-157080458>

## Use New Archetype Create Post In Posts Folder

the archetype directory:

```txt
archetypes
├── default.md
└── question.md
```

I want to create a new post use `question.md` in `~\content\posts\question-2021-4.md`, I will use order:

```sh
hugo new --kind=question posts/"question-2021-4".md
```

[source](https://gohugo.io/content-management/archetypes/#directory-based-archetypes)