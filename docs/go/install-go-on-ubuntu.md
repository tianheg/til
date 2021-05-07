# Install Go On Ubuntu

```bash
wget https://golang.org/dl/go1.16.4.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.16.4.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go version
```

当我在 Ubuntu Terminal 中运行 `export PATH=$PATH:/usr/local/go/bin` 时，它被写入哪一个配置文件里了？

[source](https://golang.org/dl/)
