# Create Users

## `useradd`

```bash
useradd [OPTIONS] USERNAME
```

Only root or users with sudo privileges can use the `useradd` command to create new user accounts.

```bash
sudo useradd username
sudo passwd username
#
sudo useradd -m username # Use the `-m` (`--create-home`) option to create the user home directory as `/home/username`
sudo useradd -u 1500 username # Creating a User with Specific User ID
sudo useradd -g users username # Creating a User with Specific Group ID
sudo useradd -g users -G wheel,developers username # Creating a User and Assign Multiple Groups
sudo useradd -s /usr/bin/zsh username # Creating a User with Specific Login Shell
sudo useradd -c "Test User Account" username # Creating a User with Custom Comment
sudo useradd -e 2019-01-22 username # Creating a User with an Expiry Date
sudo useradd -r username # Creating a System User
```

**View current default options**:

```bash
useradd -D
# Output
GROUP=100
HOME=/home
INACTIVE=-1
EXPIRE=
SHELL=/bin/sh
SKEL=/etc/skel
CREATE_MAIL_SPOOL=no
#
sudo useradd -D -s /bin/bash # specify the new default shell
sudo useradd -D | grep -i shell # verify that the default shell value
```

[source](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/)
