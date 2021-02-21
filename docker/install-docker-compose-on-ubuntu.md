# Install Docker Compose On Ubuntu

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
docker-compose version 1.28.4, build 1110ad01
```

[source](https://docs.docker.com/compose/install/)
