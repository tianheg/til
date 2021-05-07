---
title: disable-microsoft-defender-antivirus
date: 2021-05-01 10:19:14
permalink: /pages/d774f9/
categories:
  - win10
tags:
  - 
---
# Disable Microsoft Defender Antivirus

[source](https://www.windowscentral.com/how-permanently-disable-windows-defender-windows-10#disable-microsoft-defender-with-group-policy)

- Open **Start**.
- Search for **gpedit.msc** and click the top result to open the **Local Group Policy Editor**.
- Browse the following path:

    `Computer Configuration > Administrative Templates > Windows Components > Microsoft Defender Antivirus`

- Double\-click the **Turn off Microsoft Defender Antivirus** policy.

    ![Microsoft Defender Antivirus Group Policy settings](images/microsoft-defender-antivirus-gpedit_2020.jpg)

    *Source: Windows Central*

- Select the **Enabled** option to disable Microsoft Defender Antivirus.

    ![Disable Defender Antivirus Policy permanently on Windows 10](images/disable-microsoft-defender-antivirus-permanentely-windows-10_2020.jpg)

    *Source: Windows Central*

- Click the **Apply** button.
- Click the **OK** button.
- Restart your computer.
