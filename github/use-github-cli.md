# Use GitHub CLI

## Install [source](https://github.com/cli/cli/blob/trunk/docs/install_linux.md)

for **Debian, Ubuntu Linux (apt)**

```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
sudo apt-add-repository https://cli.github.com/packages
sudo apt update
sudo apt install gh
```

Upgrade:

```bash
sudo apt update
sudo apt install gh
```

## Authentication

```bash
gh auth login
```

## Setting an editor

```bash
gh config set editor <editor>
```

## Setting your git protocol

```bash
gh config set git_protocol { ssh | https }
```

## Disable interactivity

```bash
gh config set prompt disabled
```

## Extending the CLI

1. Create shorthands using [`gh alias set`](https://cli.github.com/manual/gh_alias_set)
2. Make custom API queries using [`gh api`](https://cli.github.com/manual/gh_api)
3. Use [environment variables](https://cli.github.com/manual/gh_help_environment)

## References

- [source: cli/cli](https://github.com/cli/cli)
- [manual](https://cli.github.com/manual/)
- [Official Site](https://cli.github.com/)
