# VMware Workstation/Player Does Not Support Nested Virtualization On This Host

```text
Error while powering on: VMware Player does not support nested virtualization on this host.

Module 'HV' power on failed.

Failed to start the virtual machine.
```

Hyper-v 和 Vmvare 仍然不能同时开启（Workstation 16 Player 和 Workstation 16 Pro 可以与 Hyper-v 共存）。详见 [这里](https://www.vmware.com/products/workstation-player.html#compare)

不过，我在自己的 win10 机器上，卸载 Workstation 15 Pro 之后，安装了 Workstation 16 Player。

仍然出现该错误，又因为我刚好碰到了 [另一个错误](player-does-not-support-virtualized-performance-counters-on-this-host.md)，错误提示中出现了 `counters` 于是我就找，哪里出现了它。

结果在 Virtual Machine Settings 中的 Hardware 的 Processors 下找到了答案：在右侧的 Virtualization engine 中，出现了 `Virtualize CPU performance counters`。然后就取消勾选，问题解决。

根据错误提示中的 `HV` 推测它表示 `Hyper-v`，在 Virtualization engine 中找到 `Virtualize Intel VT-x/EPT or AMD-V/RVI`，取消勾选。

问题解决。
