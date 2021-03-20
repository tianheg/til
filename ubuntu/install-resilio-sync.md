# Install Resilio Sync

There are 3 ways to install it: manually, from repository and using official docker image.

## Installing Manually

```bash
wget https://download-cdn.resilio.com/2.7.2.1375/Debian/resilio-sync_2.7.2.1375-1_amd64.deb
sudo dpkg -i <resilio-sync.deb>
```

## Installing From Repository

```bash
echo "deb http://linux-packages.resilio.com/resilio-sync/deb resilio-sync non-free" | sudo tee /etc/apt/sources.list.d/resilio-sync.list
curl -L https://linux-packages.resilio.com/resilio-sync/key.asc | sudo apt-key add
sudo apt-get update
sudo apt-get install resilio-sync
```

## Installing From Official Docker Image

[Usage](https://hub.docker.com/r/resilio/sync/)

---

[source](https://help.resilio.com/hc/en-us/articles/206178924)
