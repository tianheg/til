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

关闭了两个选项：

在 Virtual Machine Settings 中，找到 Hardware 的 Processors，在右侧的 Virtualization engine 中，取消勾选：`Virtualize Intel VT-x/EPT or AMD-V/RVI`，`Virtualize CPU performance counters`。
