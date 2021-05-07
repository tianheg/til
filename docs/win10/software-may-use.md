---
title: software-may-use
date: 2021-05-01 10:19:14
permalink: /pages/c550ec/
categories:
  - win10
tags:
---
# Software May Use

- Dism++ <https://www.chuyu.me/zh-Hans/>
- geek
- Diskgenius

## Keil

1. Download ARM-`MDK533.EXE` from [here](https://www.keil.com/demo/eval/arm.htm)
2. Install it(Don't install on system disk)
3. Download C51-`c51v960a.exe` from [here](https://www.keil.com/demo/eval/c51.htm)
4. Install it(Same location with `MDK533.EXE`)
5. Use keygen activate it [here](https://www.jianguoyun.com/p/DU7-XtQQzZOlBxiAp-YD)
6. Copy the CID to keygen, select `Target` as ARM, select Professional
7. Do 6th step again, but select `Target` as C51

## Proteus 8.11

1. Before install proteus, use "LICENCE.exe" to install the "Key.lxk".
2. Install it from [here](https://www.jianguoyun.com/p/DWqKp2YQzZOlBxiGqeYD)

## Protel 99 SE

1. Download from my Jianguoyun
2. Click `Setup.exe`
3. Input Access Code from `Sn.txt`, check `Use Floating License`
4. Select a disk which isn't a system disk
5. Typical
6. Then click `protel99seservicepack6.exe`
7. Protel 99 SE 在 windows7 下有一些功能使用不了

   1. 进入 C:\Windows 下找到 AdvSch99SE.ini 和 ADVPCB99SE.INI 两个文件；
   2. 用写字板打开 AdvSch99SE.ini 文件,在 `[Change Library File List]` 下找到相应位置，更改程序如下：

   ```txt
   TypeCount=2
   Count=4
   File0=D:\Design Explorer 99 SE\Library\Sch\Miscellaneous Devices.ddb
   File1=D:\Design Explorer 99 SE\Library\Sch\DOS Schematic Libraries.ddb
   File2=D:\Design Explorer 99 SE\Library\Sch\Intel Databooks.ddb
   File3=D:\Design Explorer 99 SE\Library\Sch\sim.ddb
   ```

   1. 同样对 ADVPCB99SE.INI 更改以配置 PCB 库

   进入 C:\Windows 下找到 ADVPCB99SE.INI 文件，如果没有，复制我上传的文件，做相应的路径修改。

   ```txt
   TypeCount=2
   Count=5
   File0=D>MSACCESS:$RP>D:\Design Explorer 99 SE\Library\Pcb\Generic Footprints$RN>Advpcb.ddb$OP>$ON>PCB Footprints.lib$ID>-1$ATTR>0$E>PCBLIB$STF>
   File1=D>MSACCESS:$RP>D:\Design Explorer 99 SE\Library\Pcb\Generic Footprints$RN>Advpcb.ddb$OP>$ON>General IC.lib$ID>-1$ATTR>0$E>PCBLIB$STF>
   File2=D>MSACCESS:$RP>D:\Design Explorer 99 SE\Library\Pcb\Generic Footprints$RN>Advpcb.ddb$OP>$ON>Headers.lib$ID>-1$ATTR>0$E>PCBLIB$STF>
   File3=D>MSACCESS:$RP>D:\Design Explorer 99 SE\Library\Pcb\Generic Footprints$RN>Advpcb.ddb$OP>$ON>International Rectifiers.lib$ID>-1$ATTR>0$E>PCBLIB$STF>
   File4=D>MSACCESS:$RP>D:\Design Explorer 99 SE\Library\Pcb\Generic Footprints$RN>Advpcb.ddb$OP>$ON>Transistors.lib$ID>-1$ATTR>0$E>PCBLIB$STF>
   ```

（注意每次修改时必须保证 protel99se 程序是关闭着的

如果还没有库，就右键 `Client99SE.exe` 属性，兼容性中选择以 xp 兼容性运行。此时库出现了。
