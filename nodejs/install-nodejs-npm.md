# Install Node.js And NPM

## Use `n`

```bash
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n lts

# make cache folder (if missing) and take ownership
sudo mkdir -p /usr/local/n
sudo chown -R $(whoami) /usr/local/n
# take ownership of Node.js install destination folders
sudo chown -R $(whoami) /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share
```

Error: When I exec these commands, just node no npm

## Use Official deb file

[source](https://github.com/nodesource/distributions/blob/master/README.md#deb)

```bash
#Node.js v14.x
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install gcc g++ make #to build native addons
```

source:

- <https://github.com/tj/n>
