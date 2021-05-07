# DNS 解析平滑迁移

[source](https://help.aliyun.com/document_detail/97785.html)

## 概述

DNS 解析平滑迁移：是指实现修改域名 DNS 服务器，且不影响现有的解析业务的迁移方法。

**DNS 解析平滑迁移的步骤概览：**

- 准备工作
- 将解析数据导入云解析
- 检查工作
- 修改 DNS 服务器
- 等待全球各地 localdns 同步更新

## 准备工作

域名解析转入的前提条件是完成如下准备工作：

- 备案检查：如果只是 DNS 迁移到云解析 DNS，不涉及服务器迁移，则不需要重新备案。

- 实名认证：检查您的阿里云账号是否进行实名认证，如未实名请进行实名认证。

- 解析数据准备：请在原 DNS 服务商处导出解析记录，导出格式优先选择 ZONE 文件，如果选择 EXCEL 的 xls、xlsx 文件格式，请按照 [DNS 解析模板](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/97785/cn_zh/1560846859029/alidns_record.xlsx "云解析 DNS 解析记录模板") 进行编辑。

## 将解析数据导入云解析

1 . 添加域名

登录 [云解析 DNS 控制台](https://dns.console.aliyun.com "云解析 DNS 控制台")，在域名解析页面，全部域名页签下，点击 **添加域名** 按钮。 您可以参阅 [添加域名](https://help.aliyun.com/document_detail/29719.html?spm=a2c4g.11186623.6.560.494940c6pAov0J "添加域名") 的操作文档指南。

**注意：**如果您的域名是阿里云注册域名，您可以跳过此步骤。

2 . 导入解析记录

添加域名完成后，点击域名进入**解析设置**页面，点击 **导入/导出** 按钮，将准备好的解析数据，导入到云解析 DNS。 您可以参阅 [导入/导出](https://help.aliyun.com/document_detail/109167.html?spm=a2c4g.11186623.6.570.7fd314balI3dRQ "导入/导出") 的操作文档指南。

## 检查工作

将解析数据导入云解析后，请按照如下指引进行检查。

1 . 检查解析记录一致性

主要检查在新旧 DNS 解析厂商中配置的解析记录数量是否一致，可避免出现漏配现象。

2 . 检查 CNAME 记录指向的域名是否配置解析。（**如果您未设置 CNAME 记录可忽略此项检查**）

此项检查主要是避免 CNAME 指向的域名未做配置导致的业务影响，可以 dig CNAME 指向的域名（下图 CNAME 值的域名仅为示例使用）来检测。

[![CNAME域名](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/97785/cn_zh/1560851013920/CNAME%E5%9F%9F%E5%90%8D.png)](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/97785/cn_zh/1560851013920/CNAME%E5%9F%9F%E5%90%8D.png)

在 Windows 电脑下左下角单击【开始】\-【搜索】\- 输入 CMD，进入命令提示符页面。

- 输入命令

> dig www.dnswork.top

- 验证方法

CNAME 指向的域名能够正常返回解析结果，则代表检查结果正常。

[![DigCname检查](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/97785/cn_zh/1560851879684/digCNAME%E6%A3%80%E6%9F%A5.png)](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/97785/cn_zh/1560851879684/digCNAME%E6%A3%80%E6%9F%A5.png)

3 . 验证解析是否生效

这里是检查域名在云解析 DNS 上是否已经生效。

- 输入命令

> dig www.dns\-example.com @vip3.alidns.com

**注意**：您可以在解析设置页面，查看到分配给您的 DNS 服务器名称

- 验证方法

对比 dig 命令查询返回的解析结果和解析设置的解析结果是否一致，如一致则代表在云解析 DNS 上已经生效。例如下图示例的 dig 命令和解析设置的结果是一致的，代表此域名在云解析 DNS 上已生效。

[![dig命令解析生效](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/97785/cn_zh/1560851702882/%E9%AA%8C%E8%AF%81%E8%A7%A3%E6%9E%90%E7%94%9F%E6%95%88.png)](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/97785/cn_zh/1560851702882/%E9%AA%8C%E8%AF%81%E8%A7%A3%E6%9E%90%E7%94%9F%E6%95%88.png)

[![验证解析设置配置](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/97785/cn_zh/1560851726472/%E9%AA%8C%E8%AF%81%E8%A7%A3%E6%9E%90%E7%94%9F%E6%95%882.png)](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/97785/cn_zh/1560851726472/%E9%AA%8C%E8%AF%81%E8%A7%A3%E6%9E%90%E7%94%9F%E6%95%882.png)

4 . 检查是否配置 DNSSEC

目前云解析 DNS 收费版已经完全支持 DNSSEC。

- 若您的域名配置了 DNSSEC，您可以参考如下两种方式继续迁移：

  - 方式一，您可以到域名注册商处关闭 DNSSEC，等迁移完成后，再参考 [DNSSEC 设置方法](https://help.aliyun.com/document_detail/149662.html?spm=a2c4g.11174283.6.606.59e1571foG6Hz1 "DNSSEC设置方法") 进行配置。
  - 方式二，您可以参考 [DNSSEC 设置方法](https://help.aliyun.com/document_detail/149662.html?spm=a2c4g.11174283.6.606.59e1571foG6Hz1 "DNSSEC设置方法") 进行配置，并到域名注册商处提交云解析 DNS 的 DNSEC 配置。等迁移完成后，到域名注册商处删除原 DNS 厂商的 DNSSEC。
- 若您的域名未配置 DNSSEC，请忽略此项。

## 修改 DNS 服务器

前往域名注册商处修改域名的 DNS 服务器，如果您的域名是在阿里云注册，您可以参阅 [修改 DNS](https://help.aliyun.com/document_detail/54157.html?spm=a2c4g.11174283.6.603.24b0c8caR37x3L "修改DNS") 的操作文档。

**修改 DNS 服务器 48 小时内的注意事项**：

- 不变更解析记录。
- 原 DNS 服务商中的解析记录数据不要删除，至少保留一周。

注意：如果在 DNS 迁移生效过渡期期间做解析记录变更，请务必在新旧 DNS 服务商都同时做变更，保持新旧 DNS 服务商的解析记录数据一致。

## 等待全球各地 LocalDNS 同步更新

修改 DNS 服务器完毕后，请耐心等待 48 小时。因为各地 localdns 都缓存了该域名以前使用的 DNS 服务器名称，所以在 48 小时内，域名 DNS 服务器的变更会逐步同步到全球各地 Localdns 服务器中，请耐心等待即可。

**注意：**在 48 小时内 DNS 解析仍有可能向旧 DND 厂商发起 DNS 查询，所以在变更同步期间请不要删除原 DNS 服务商处的解析数据。
