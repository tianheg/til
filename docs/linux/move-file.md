---
title: move-file
date: 2021-05-01 10:19:14
permalink: /pages/154f9d/
categories:
  - linux
tags:
---
# Move File

将目录`/usr/men`中的所有文件移到当前目录（用`.`表示）中：

```shell
mv /usr/men/* .

```

移动文件

```shell
mv file_1.txt /home/office/

```

移动多个文件

```shell
mv file_2.txt file_3.txt file_4.txt /home/office/
mv *.txt /home/office/

```

移动目录

```shell
mv directory_1/ /home/office/

```

重命名文件或目录

```shellbash
mv file_1.txt file_2.txt # 将文件file_1.txt改名为file_2.txt

```

重命名目录

```shell
mv directory_1/ directory_2/

```

打印移动信息

```shellbash
mv -v *.txt /home/office

```

提示是否覆盖文件

```shell
mv -i file_1.txt /home/office

```

源文件比目标文件新时才执行更新

```shell
mv -uv *.txt /home/office

```

不要覆盖任何已存在的文件

```shell
mv -vn *.txt /home/office

```

复制时创建备份

```shell
mv -bv *.txt /home/office

```

无条件覆盖已经存在的文件

```shell
mv -f *.txt /home/office
```

[source](https://wangchujiang.com/linux-command/c/mv.html)
