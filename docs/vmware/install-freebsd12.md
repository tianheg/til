# Install FreeBSD12

1. Install FreeBSD 12.2-RELEASE from [here](https://download.freebsd.org/ftp/releases/amd64/amd64/ISO-IMAGES/12.2/), select `FreeBSD-12.2-RELEASE-amd64-disc1.iso`.
2. Create a new virtual machine
3. Configuration
4. Login as root, exec:

    ```sh
    pkg update
    pkg upgrade
    pkg install open-vm-tools-nox11
    reboot
    service -l
    service vmware-guestd status
    ```
