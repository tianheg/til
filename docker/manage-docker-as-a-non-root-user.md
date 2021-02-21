# Manage Docker As A Non-root User

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
docker run hello-world
```

[source](https://docs.docker.com/engine/install/linux-postinstall/)
