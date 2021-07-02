---
layout: note
title: Staic Site Generator
parent: Home
has_children: true
has_toc: false
---

## Hugo

### Hugo Server Bind IP

```bash
hugo server --bind=ip --baseURL=http://ip:1313
```

source:

- <https://discourse.gohugo.io/t/hugo-server-only-serves-to-host-computer/5664/7)>
- <https://github.com/gohugoio/hugo/issues/1582#issuecomment-157080458>

### Install Hugo On Ubuntu

```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.81.0/hugo_extended_0.81.0_Linux-64bit.deb
sudo apt-get install ./hugo_extended_0.81.0_Linux-64bit.deb
```

[source](https://www.atlantic.net/vps-hosting/how-to-install-hugo-website-generator-on-ubuntu-20-04/)

### Use New Archetype Create Post In Posts Folder

the archetype directory:

```txt
archetypes
├── default.md
└── question.md
```

I want to create a new post use `question.md` in `~\content\posts\question-2021-4.md`, I will use order:

```sh
hugo new --kind question posts/"question-2021-4".md
```

[source](https://gohugo.io/content-management/archetypes/#directory-based-archetypes)

## Jekyll

- [[Setup Jekyll Environment]]
- [[Launch and Run Jekyll Site Locally]]
- [[Update Jekyll]]
- Other [[Common Jekyll Commands]]

### Jekyll Error Building Page Related To Kramdown Parser

When running GitHub action, [error](https://github.com/tianheg/english/runs/2311559049?check_suite_focus=true#step:4:61):

```bash
Dependency Error: Yikes! It looks like you don't have kramdown-parser-gfm or one of its dependencies installed. In order to use Jekyll as currently configured, you'll need to install this gem. The full error message from Ruby is: 'cannot load such file -- kramdown-parser-gfm' If you run into trouble, you can find helpful resources at jekyllrb.com/help/! 
  Conversion error: Jekyll::Converters::Markdown encountered an error while converting '_posts/2020-01-01-accordion.md':
                    kramdown-parser-gfm
             ERROR: YOUR SITE COULD NOT BE BUILT:
                    ------------------------------------
                    kramdown-parser-gfm
```

Just add sth. to `Gemfile`:

```bash
gem "kramdown-parser-gfm"
```

### Use Bundler 2 Or Greater With This Lockfile

[source](https://github.com/jekyll/jekyll/issues/7463#issuecomment-451686361)

`warn_for_outdated_bundler_version': You must use Bundler 2 or greater with this lockfile. (Bundler::LockfileError)`

To use Bundler 2 in your lockfile:

```bash
# update Rubygems
gem update --system
# update bundler
gem install bundler
# update Gemfile.lock in your project
bundler update --bundler
```

## Gatsby

### Change Default Package Manager

```bash
vim ~/.config/gatsby/config.json
```

Change:

```json
"cli": {
        "packageManager": "npm"
}
```

to:

```json
"cli": {
        "packageManager": "yarn"
}
```

[source](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-change-your-default-package-manager-for-your-next-project)

### Set Up Development Environment

Install Node.js(nvm), Git

```bash
sudo apt update
sudo apt -y upgrade
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
npm install -g gatsby-cli
```

source:

1. <https://www.gatsbyjs.com/docs/tutorial/part-zero/#ubuntu-debian-and-other-apt-based-distros>
2. <https://github.com/nvm-sh/nvm#install--update-script>

## Official Documentation

- [Official Jekyll Documentation](https://jekyllrb.com/docs/)
  - [GitHub repo's here](https://github.com/jekyll)
- [Official Hugo Documentation](https://gohugo.io/documentation/)
  - [GitHub repo's here](https://github.com/gohugoio)
