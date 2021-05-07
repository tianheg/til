---
title: workstation-player-does-not-support-nested-virtualization-on-this-host
date: 2021-05-01 10:19:14
permalink: /pages/5e56f2/
categories:
  - vmware
tags:
  - 
---
# VMware Workstation/Player Does Not Support Nested Virtualization On This Host

```text
Error while powering on: VMware Player does not support nested virtualization on this host.

Module 'HV' power on failed.

Failed to start the virtual machine.
```

Hyper-v and Vmvare still can't open together(Workstation 16 Player and Workstation 16 Pro can together with Hyper-v). Details [here](https://www.vmware.com/products/workstation-player.html#compare)

What I did was uninstall Workstation 15 Pro and install Workstation 16 Player on my own windows10.

Still this error. Also, I met [another error](player-does-not-support-virtualized-performance-counters-on-this-host.md), the error told me something about `counters`. So I go to find it. Finally, find `counters` at Virtual Machine Settings's Hardware's Processors: at the right of Virtualization engine, found `Virtualize CPU performance counters`. Uncheck it, solve it.

The `HV` maybe `Hyper-v`, found Virtualization engine's `Virtualize Intel VT-x/EPT or AMD-V/RVI`, still uncheck it, solve it.
