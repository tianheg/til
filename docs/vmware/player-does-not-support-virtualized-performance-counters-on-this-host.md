---
title: player-does-not-support-virtualized-performance-counters-on-this-host
date: 2021-05-01 10:19:14
permalink: /pages/fbe168/
categories:
  - vmware
tags:
---
# Player Does Not Support Virtualized Performance Counters On This Host

```text
Error while powering on: VMware Player does not support virtualized performance counters on this host. Refer to VMware KB article 81623 at https://kb.vmware.com/s/article/81623 for more details.

Module 'VPMC' power on failed.

Failed to start the virtual machine.
```

second error：

```text
Error while powering on: VMware Player does not support nested virtualization on this host.

Module 'HV' power on failed.

Failed to start the virtual machine.
```

Closed two options:

In Virtual Machine Settings, found Hardware's Processors, on the right of Virtualization engine, uncheck `Virtualize Intel VT-x/EPT or AMD-V/RVI`, `Virtualize CPU performance counters`.
