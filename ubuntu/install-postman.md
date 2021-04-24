# Install Postman

[source](https://speedysense.com/install-postman-on-ubuntu-20-04/)

```sh
# Download Postman from https://dl.pstmn.io/download/latest/linux64
$ cd Downloads
$ tar -xzf Postman-linux-x64-VERSION-NAME.tar.gz
$ sudo rm -rf /opt/Postman # If you have already installed previous version first remove it.
$ sudo mv Postman /opt
$ sudo ln -s /opt/Postman/Postman /usr/local/bin/postman
$ postman # run postman
$ sudo gedit /usr/share/applications/postman.desktop # Create a desktop file for Postman App
```

`/usr/share/applications/postman.desktop`:

```desktop
[Desktop Entry]
Type=Application
Name=Postman
Icon=/opt/Postman/app/resources/app/assets/icon.png
Exec="/opt/Postman/Postman"
Comment=Postman GUI
Categories=Development;Code;
```
