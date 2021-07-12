---
layout: note
title: Reinstall System
parent: Operating System
grand_parent: Home
---

# Reinstall System

1. 传统 to UEFI
2. Ubuntu20.04 通过 Rufus 写入 U盘
3. 系统迁移（机械——>固态，要把原D盘所有文件擦除，无备份因为没有硬盘，用的是 diskgenius，搞错了，系统本来就在固态上，迁移完重启，发现系统在机械盘。重启后复原了）
4.分区，安装 Ubuntu20.04
5. 重装 win10（为了系统启动方便，选择固态硬盘作为 ubuntu 系统启动盘，但是我的ssd只有118g，所以不够用。而ubuntu系统盘要分50g，所以要重装），新系统的用户的安全问题的所有答案都是None
6. 把用户名下的所有文件夹都放到 Files 磁盘
7. 备份分区文件到 u盘
8. 把系统盘的用户文件，移动到非系统盘https://cloud.tencent.com/developer/article/1454442
在安装Win7/Win10的过程中，要求输入用户名及密码的时候，先不如输入任何信息，按“Shift+F10”打开DOS窗口(命令行窗口)，输入以下命令：

```
## 复制C:\Users下所有文件(包含子文件夹)到D:\Users
robocopy "C:\Users" "D:\Users" /E /COPYALL /XJ
## 删除C:\Users文件夹 
rmdir "C:\Users" /S /Q 
## 创建(目录)软连接 C:\Users 指向 D:\Users
mklink /J "C:\Users" "D:\Users"
```

然后关闭DOS窗口，按正常流程继续安装Window直至完成。如此安装的Windows所有“用户文件夹”(User Special Folder)的内容都已经被设置在D盘。

重置系统大约花3时34分钟


执行完上述 用户文件 c到d 的步骤，因为文件缺失无法打开win10桌面（win10 user profile cannot be loaded）

9. 改用 ubuntu 作为主系统，安装需要组件，wifi（bcmwl-kernel-source）,中文输入法（fcitx-googlepinyin）

在安装完中文输入法后，重启电脑，一直停留在惠普图标界面

![](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/reinstall-system.jpg)

在最后那一个log：fail to load /usr

![](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/reinstall-system-1.jpg)

第二次分区信息

![](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/reinstall-system-2.jpg)
![](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/reinstall-system-3.jpg)

分区信息没拍完，想回去重拍，但是又回到未分区之前选择安装方式的选项，没有挂载，报错

![](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/reinstall-system-4.jpg)

重新安装，打开后很长时间才加载出这个页面，半分钟，比过去这个过程需要加载的时间长。

![](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/reinstall-system-5.jpg)

## How to Create a Windows 10 Bootable USB in Ubuntu 20.04
https://orbitgadget.com/create-windows-10-bootable-usb-in-ubuntu/

    1. xiazai win10 iso image: https://www.microsoft.com/en-us/software-download/windows10ISO
https://software-download.microsoft.com/sg/Win10_20H2_v2_English_x64.iso?t=ca48e9a9-6e40-4c84-b837-dce7aa88689e&e=1615179030&h=ca28738d66a8de57c550af0767fc1bd7
    2. Verify the downloaded version on terminal: English  64-bit 6C6856405DBC7674EDA21BC5F7094F5A18AF5C9BACC67ED111E8F53F02E7D13D
sha256sum Win10_20H2_v2_English_x64.iso
    3. Install wimtools via terminal
sudo apt-get update
sudo apt-get install wimtools
    4. Mount the ISO file and copy the 'install.wim' file out
In the file manager, press right-click on the Windows 10 ISO file and  select ‘Open with Disk Image Mounter’. Now open the mounted disk and  inside the folder named ‘sources’ find the file named ‘install.wim’ and  copy it to the Downloads folder.
Now for proper functioning of the wimtools, restart the terminal. Simply close the terminal and open a fresh terminal.
    5. Split the 'install.wim' file to bypass FAT32 memory limitations
Memories formatted in FAT32 format have a limit of file transfer and it  cannot handle a single file of size greater than 4 GB. exFAT is the  newer technology which is capable of doing it but often it is seen that  the option of exFAT is greyed out in systems like Ubuntu and Fedora.
So to bypass the memory limitations of FAT32 format, we will split the  ‘install.wim’ file (which is of size greater than 4 GB) into two parts,  each having size less than or equal to 4 GB. To perform the above  function paste the following command in a fresh terminal.
wimlib-imagex split Downloads/install.wim Downloads/install.swm 4000
You will now see two extra files in the Downloads folder named ‘install.swm’ and ‘install2.swm’ respectively. These are the files you are going to need, now you can delete the ‘install.wim’ file from the Downloads folder.
    6. Format the USB drive in FAT32 format
Search for ‘Disks’ in the applications section, open it and format the USB drive in FAT32 format.
    7. Copy the files from ISO to USB drive
    • Now upon getting the success message in the terminal, close the  terminal. Next, open the mounted ISO file in the file manager and copy  all the files from the mounted drive to the USB drive except the folder  named ‘sources’.
    • In the USB drive, create a folder named ‘sources’.
    • Now navigate to the mounted ISO drive and copy all the files inside the ‘sources’ folder except the ‘install.wim’ file to the newly created ‘sources’ folder in the USB drive.
    • Finally, copy the ‘install.swm’ and ‘install2.swm’ files from the Downloads folder and paste it into the ‘sources folder’ in the USB drive.
    • Wait for the transfer process to finish and then only eject the USB drive from the device.
Now you have successfully created the bootable USB drive for Windows 10 in Ubuntu 20.04. You can use the USB drive to fresh install Windows 10 on any laptop or PC.




install electron-ssr
Ubuntu 20.04 提示找不到 python (No python detected)

Wim 封装助手
https://github.com/dragonflylee/WimHelper

Installing VirtualBox from Ubuntu repositories
Installing VirtualBox from the Ubuntu repositories is a straightforward process. Run the following commands as root or user with sudo privileges to update the package index and install VirtualBox and Extension Pack:
sudo apt update
sudo apt install virtualbox virtualbox-ext-pack
That’s it! You have successfully installed VirtualBox on your Ubuntu machine, and you can start using it  


Install Visual Win10 with Vbox on Ubuntu20.04
used time: 52 min
