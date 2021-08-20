# Go

## Install Go

```sh
# install
$ wget https://golang.org/dl/go1.16.4.linux-amd64.tar.gz
$ rm -rf /usr/local/go && tar -C /usr/local -xzf go1.16.4.linux-amd64.tar.gz
$ export PATH=$PATH:/usr/local/go/bin
$ go version
# Add env to .zshrc
## Go Global variables
#export GOROOT=/usr/local/go
#export GOPATH=$HOME/go
#export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

When I run `export PATH=$PATH:/usr/local/go/bin` in Ubuntu Terminal, which configuration file is it written to?

[source](https://golang.org/dl/)
