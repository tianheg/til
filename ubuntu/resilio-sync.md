# Resilio Sync

## Install Resilio Sync

There are 3 ways to install it: manually, from repository and using official docker image.

### Installing Manually

```bash
wget https://download-cdn.resilio.com/2.7.2.1375/Debian/resilio-sync_2.7.2.1375-1_amd64.deb
sudo dpkg -i <resilio-sync.deb>
```

### Installing From Repository

```bash
echo "deb http://linux-packages.resilio.com/resilio-sync/deb resilio-sync non-free" | sudo tee /etc/apt/sources.list.d/resilio-sync.list
curl -L https://linux-packages.resilio.com/resilio-sync/key.asc | sudo apt-key add
sudo apt-get update
sudo apt-get install resilio-sync
```

### Installing From Official Docker Image

[Usage](https://hub.docker.com/r/resilio/sync/)

## Managing Sync

### Systemd

#### Default Sync service settings

By default Sync is running under **rslsync** user with minimum privileges for security reasons. To enable automatic startup of Sync service under **rslsync** user:

```sh
sudo systemctl enable resilio-sync
```

If you need to synchronize files owned by current user - just add **rslsync** user to group of your current user and ensure read-write permissions for the mentioned group for the folder to be synced, for example:

```sh
sudo usermod -aG user_group rslsync
sudo usermod -aG rslsync user_name
sudo chmod g+rw synced_folder
```

where `user_group` is a group name of current user, by default it's the same as user name (can be checked by running `id` command), `synced_folder` - path to the folder to be added to Sync, `user_name` - name of the current user.

#### Running Sync under the current user

If you want to run Sync under your current user - edit file **/usr/lib/systemd/user/resilio-sync.service** and change "WantedBy=multi-user.target" to "WantedBy=default.target". Save this file and then enable the service with `--user` parameter:

```sh
systemctl --user enable resilio-sync
```

Systemctl can be also run with the following arguments: `start, stop, enable, disable, status`

For example, to start Sync under current user:

```sh
systemctl --user start resilio-sync
```

To force the user session to be active on headless linux, you can use command:

```sh
sudo loginctl enable-linger username
```

### Upstart, SysV Init

Run as **rslsync** user:

```sh
sudo service resilio-sync start
```

Service can also be run with the following arguments: `start, stop, restart`

## Removing the package

### For Debian-based Linux:

```sh
sudo apt-get purge resilio-sync
# error log:
# Invalid operation purge resilio-sync
```

### For RPM-based Linux:

```sh
sudo yum remove resilio-sync
```

## Uninstall Sync

Delete rslsync binary, then delete .sync folder which is placed near the binary. If you were launching it with a config, delete the 'storage_path'.

### Linux package

Before uninstalling Sync package, you'd better stop the application process.

- If your OS uses systemd, use the following commands to control Sync:

`sudo systemctl stop resilio-sync`

- If your OS uses sysvinit, upstart, control Sync with the following commands:

`sudo service resilio-sync stop`

Uninstalling on Debian-based OS. To delete resilio-sync package completely, perform these commands:

```sh
sudo apt-get remove resilio-sync
# or
sudo apt-get purge resilio-sync
```

Uninstalling on RPM-based OS. To delete resilio binary, perform this command:

`sudo yum remove resilio-sync` then delete the storage folder: */var/lib/resilio-sync/*.

---

**References**:

1. <https://help.resilio.com/hc/en-us/articles/206178924>
2. <https://help.resilio.com/hc/en-us/articles/204762449-Guide-to-Linux>
3. <https://help.resilio.com/hc/en-us/articles/206178884-Running-Sync-in-configuration-mode>
4. <https://help.resilio.com/hc/en-us/articles/207371636-Power-user-preferences>
5. <https://help.resilio.com/hc/en-us/articles/204775029-How-to-uninstall-Sync->
