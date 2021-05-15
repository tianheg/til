# 其他

## 问题

### GitHub Action 只生成 `.nojekyll`

有问题的[地址](https://github.com/tianheg/feed/runs/2588088608?check_suite_focus=true#step:6:34)，代码：

```sh
2021-05-14T23:53:50.5691148Z [INFO] copy /home/runner/work/feed/feed/public to /home/runner/actions_github_pages_1621036430543
2021-05-14T23:53:50.5744245Z cp: no such file or directory: /home/runner/work/feed/feed/public/*
2021-05-14T23:53:50.5748693Z cp: no such file or directory: /home/runner/work/feed/feed/public/.*
2021-05-14T23:53:50.5754401Z [INFO] delete excluded assets
2021-05-14T23:53:50.5804394Z rm: no paths given
2021-05-14T23:53:50.5808868Z [INFO] Created /home/runner/actions_github_pages_1621036430543/.nojekyll

[gh-pages (root-commit) e783e47] deploy: 3ccc59a4e70e26668e0189264e8357994c0680ef
   1 file changed, 0 insertions(+), 0 deletions(-)
   create mode 100644 .nojekyll
```

正常的过程不该只生成 `.nojekyll`：

```sh
[INFO] copy /home/runner/work/feed/feed/public to /home/runner/actions_github_pages_1621037030810
  cp: no such file or directory: /home/runner/work/feed/feed/public/.*
  [INFO] delete excluded assets
  rm: no paths given
  [INFO] Created /home/runner/actions_github_pages_1621037030810/.nojekyll
  [INFO] Created /home/runner/actions_github_pages_1621037030810/CNAME

 [gh-pages (root-commit) 7fede38] deploy: 584bbf403bd475f9481986ed57bbc6953687ec31
   8 files changed, 6756 insertions(+)
   create mode 100644 .nojekyll
   create mode 100644 CNAME
   create mode 100644 cache.json
   create mode 100644 favicon.ico
   create mode 100644 feed.atom
   create mode 100644 index.html
   create mode 100644 index.js
   create mode 100644 styles.css
```

怀疑是添加了 `static/CNAME` 的缘故，我为此新建了一个[测试仓库：osmosfeed-demo](https://github.com/tianheg/osmosfeed-demo)：

```text
.github/workflows/update-feed.yaml
includes/before-head-end.html
static/CNAME
.gitignore
README.md
osmosfeed.yaml
package.json
```

但是，它的 GitHub Action 运行是正常的，[生成了全部文件](https://github.com/tianheg/osmosfeed-demo/runs/2588166880?check_suite_focus=true#step:6:67)。我很困惑。

在 osmosfeed-demo 的最近一次 GitHub Action 运行中，只生成 [`.nojekyll`](https://github.com/tianheg/osmosfeed-demo/runs/2588279301?check_suite_focus=true#step:6:68)

## Algolia

### What Is A Usage Unit

4,000 search requests / 1,000 search requests per unit = 4 units per month.

10,000 records / 1,000 records per unit = 10 units per month.

[source](https://www.algolia.com/doc/faq/accounts-billing/what-is-a-usage-unit)

## Cloudflare

### Login After Losing Recovery Codes

I enabled my 2FA with Cloudflare, and I don't know authenticator app codes or recovery codes. So I can't access my account.

I emailed `support@cloudflare.com` with:

```text
The list of domains (1 or more) in your account
The IP address(es) for the web server(s) associated with each those domain(s) (1 or more)
Who your hosting provider is for each of those domain(s) (1 or more)
What your original name servers were for each of those domain(s) (1 or more)
For Authy, the phone number you used to activate Authy on your Cloudflare account

- 您帐户中的域名列表（1 个或更多）
- 与每个域名（1 个或多个）关联的 Web 服务器的 IP 地址/CNAME 记录
- 每个域名的托管服务提供商的名称（1 个或更多）
- 您的域名注册商中每个域名的原始域名服务器（1 个或多个）
- （可选）您用于在 Cloudflare.com 帐户上激活 Authy 的电话号码
```

因为不是 Pro 或者更高级的账户，发送邮件没有更高的优先级。值得警惕的是，现在的 2FA 似乎都需要 Security Key。

虽然很迟，但是 Cloudflare 的客服终于把我的 2FA 关掉，我可以登录账户，在打开 2FA 时保存 Recovery Codes。

在和客服交流过程中，客服要求我在自己网站的根域名 `https://yidajiabei.xyz` 验证所属权。一开始我在 `https://www.yidajiabei.xyz` 验证，客服回复不行；然后我先改成其他 DNS 服务器，在根域名上验证；最终，2FA 被暂时关掉了。

---

References:

1. <https://community.cloudflare.com/t/community-tip-best-practices-for-setting-up-and-using-two-factor-authentication/44270>
2. <https://support.cloudflare.com/hc/zh-cn/articles/200167906-%E9%80%9A%E8%BF%87%E5%8F%8C%E5%9B%A0%E7%B4%A0%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81-2FA-%E4%BF%9D%E6%8A%A4%E7%94%A8%E6%88%B7%E8%AE%BF%E9%97%AE%E6%9D%83>

## Samba

When I install `kubuntu-desktop` use `sudo apt-get install -y kubuntu-desktop`, get error:

```sh
Setting up samba-common-bin (2:4.11.6+dfsg-0ubuntu1.6) ...
Checking smb.conf with testparm
Load smb config files from /etc/samba/smb.conf
Loaded services file OK.
ERROR: lock directory /run/samba does not exist

ERROR: pid directory /run/samba does not exist

Server role: ROLE_STANDALONE

dpkg: error processing package samba-common-bin (--configure):
 installed samba-common-bin package post-installation script subprocess returned error exit status 1
Errors were encountered while processing:
 samba-common-bin
E: Sub-process /usr/bin/dpkg returned an error code (1)
```

samba-common-bin was installed as a dependency of smbclient, the "server role" message is misleading as I don't have any need for a SMB server (and for any lock or pidfile, afaik).

Solved by run `/bin/systemd-tmpfiles --create /usr/lib/tmpfiles.d/samba.conf`.

References:

1. <https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=953530>

- DNS
- Docker
- Emacs
- Emmet
- Gatsby
- Git
- GitHub
- Go
- GPG
- Gulp
- Hugo
- Jekyll
- Let's Encrypt
- LICENSE
- Linux
- Node.js
- Notion
- Open Source
- OpenSSL
- Org
- Project
- Python
- Security
- SSH
- Tech Translate
- Time
- Trello
- Twitter
- Ubuntu
- Vim
- VMware
- VSCode
- VuePress
- Websockets
- Win10
- Yarn
- Zsh

## 图片

### png 和 jpeg 的区别

png 和 jpeg 都是一种用于存储图像的图像格式。png 使用无损压缩算法，没有图像数据丢失；jpeg 使用有损压缩算法，图像可能丢失部分数据。

## 计算机常用英语

### 1 最日常

#### 1.1 数字

| 中文 | 全写 |
| 一 ~ 十 | one, two, three, four, five, six, seven, eight, nine, ten |
| 十一 ~ 十五 | eleven, twelve, thirteen, fourteen, fifteen |
| 十六 ~ 二十 | sixteen, seventeen, eighteen, nineteen, twenty |
| 三十 ~ 一百 | thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred |
| 千 | thousand |
| 万 | ten thousand |
| 十万 | One hundred thousand |
| 百万 | million |
| 千万 | ten million |
| 亿 | billion |
| 十亿 | ten million |

#### 1.2 星期

| 中文 | 全写 | 发音 | 简写 |
| 星期日 | Sunday | \['sʌndeɪ\] | Sun. |
| 星期一 | Monday | \['mʌndeɪ\] | Mon. |
| 星期二 | Tuesday | \['tuːzdeɪ\] | Tues. |
| 星期三 | Wednesday | \['wenzdeɪ\] | Wed. |
| 星期四 | Thursday | \['θɜːrzdeɪ\] | Thu. |
| 星期五 | Friday | \['fraɪdeɪ\] | Fri. |
| 星期六 | Saturday | \['sætərdeɪ\] | Sat. |

#### 1.3 月份

| 中文 | 全写 | 发音 | 简写 |
| 一月 | January | \['dʒænjueri\] | Jan. |
| 二月 | February | \['februeri\] | Feb. |
| 三月 | March | \[mɑːrtʃ\] | Mar. |
| 四月 | April | \['eɪprəl\] | Apr. |
| 五月 | May | \[meɪ\] | \- |
| 六月 | June | \[dʒuːn\] | Jun. |
| 七月 | July | \[dʒu'laɪ\] | Jul. |
| 八月 | August | \['ɔːɡəst\] | Aug. |
| 九月 | September | \[sep'tembər\] | Sep. |
| 十月 | October | \[ɑːk'toʊbər\] | Oct. |
| 十一月 | November | \[noʊ'vembər\] | Nov. |
| 十二月 | December | \[dɪ'sembər\] | Dec. |

#### 1.4 季节

| 中文 | 全写 |
| 春天 | Spring |
| 夏天 | Summer |
| 秋天 | fall |
| 冬天 | Winter |

### 2 单词

- analogous \[əˈnaləgəs\] adj. 类似的
- [anonymous](http://dict.cn/anonymous) \[ə'nɑːnɪməs\] adj. 匿名
- [approaches](http://dict.cn/approaches) \[ə'proʊtʃ\] 方法
- [appropriate](http://dict.cn/appropriate) \[ə'proʊpriət\] adj. 合适的，适当的
- [arise](http://dict.cn/arise) \[ə'raɪz\] vi. 出现，发生
- [concurrency](http://dict.cn/concurrency) \[kən'kʌrənsɪ\] 并行
- [considerations](http://dict.cn/considerations) \[kənsɪdə'reɪʃnz\] n. 注意事项
- [corresponding](http://dict.cn/corresponding) \[ˌkɔːrə'spɑːndɪŋ\] 对应的，相应的
- [collaboration](http://dict.cn/collaboration) \[kəˌlæbə'reɪʃn\] n. 合作
- [deprecated](http://dict.cn/deprecated) \['deprəkeɪt\] 不推荐使用
- [deliver](http://dict.cn/deliver) \[dɪ'lɪvər\] 交付
- embedded 嵌入式的
- [flexibility](http://dict.cn/flexibility) \[ˌfleksə'bɪləti\] 灵活性，弹性 flexible adj. 灵活的
- [fundamental](http://dict.cn/fundamental) \[ˌfʌndə'mentl\] adj. 基本的
- [sophisticated](http://dict.cn/sophisticated) \[sə'fɪstɪkeɪtɪd\] adj. 复杂的
- [failover](http://dict.cn/failover) \[feɪl'oʊvər\] n. \[计算机、] 故障转移
- [idempotent](http://dict.cn/idempotent) \[aɪ'dempətənt\] \[数、] 幂等的
- [independent](http://dict.cn/independent) \[ˌɪndɪ'pendənt\] 独立的
- [machanism](http://dict.cn/mechanism) \['mekənɪzəm\] 机制，机构，原理
- [majority](http://dict.cn/majority) \[mə'dʒɔːrəti\] n. 大多数，多数，部分
- [measure](http://dict.cn/measure) \['meʒər\] v. 测量 eg. measure performance 性能测试
- [orchestration](http://dict.cn/orchestration) \[ˌɔːkɪ'streɪʃn\] 编排
- [overlap](http://dict.cn/overlap) \[ˌoʊvər'læp\] 重叠
- [parallel](http://dict.cn/parallel) \['pærəlel\] 并发
- [pluggable](http://dict.cn/pluggable) \[plʌgəbəl\] adj. 可插拔的
- [robust](http://dict.cn/robust) \[roʊ'bʌst\] adj. 强壮的，强健的，健壮的，健全的
- redundancy \[riˈdəndənsē\] n. 冗余 eg. data redundancy 数据冗余
- [scenario](http://dict.cn/scenario) \[sə'nærioʊ\] n. 场景，情景
- [squirrel](http://dict.cn/squirrel) \['skwɜːrəl\]
  - n. 松鼠 *Go 的一个库名*
  - vt. 存储
- [symmetric](http://dict.cn/symmetric) \[sɪ'metrɪk\] adj. 对称的 eg. Symmetric encryption 对称加密
- [ultimately](http://dict.cn/ultimately) \['ʌltɪmətli\] adv. 最终
- [evolve](http://dict.cn/evolve) \[i'vɑːlv\] v. 演化，进化
- [elegant](http://dict.cn/elegant) \['elɪɡənt\] adj. 优雅的 eg. elegant code 优雅的代码
- [downside](http://dict.cn/downside) \['daʊnsaɪd\] n. 缺点
- [immutable](http://dict.cn/immutable) \[ɪ'mjuːtəbl\] adj. 不可变的，一成不变的
- [semaphore](http://dict.cn/semaphore) \['seməfɔːr\] n. 信号
- [strategy](http://dict.cn/strategy) \['strætədʒi\] n. 策略
- [optimize](https://www.youdao.com/w/eng/optimize) \[ˈɑːptɪmaɪz\] vi. 优化 eg. optimize DB 优化数据库
- [threshold](https://www.youdao.com/w/threshold) \[ˈθreʃhoʊld\] n. 阈值
- [persistence](https://www.youdao.com/w/Persistence) \[pərˈsɪstəns\] n. 持久化

### 3 短语

- compression and decompression 压缩和解压缩
- distributed architecture 分布式架构
- permisson denied 没有权限
- reference material 参考资料
- round-robin 轮询
- scientific computing 科学计算
- serialization and deserialization 序列化和反序列化
- service discovery 服务发现
- strengths and weaknesses 长处和短处
- the former … the latter 前者…后者
- trade offs 权衡取舍
- reference material 参考资料
- benchmarks 基准测试
- design philosophy 设计理念
- dig into 深入挖掘
- in particular 特别是
- the perspective of … 的角度/观点，比如 from the perspective of an administrator 从管理员的角度

### 4 说明

都是动词，vt 和 vi 的区别：

- vt 即 transitive verb，及物动词，直接作用于物体，无需介词；
- vi 即 intransitive verb，不及物动词，不可直接作用于物体，需要介词（at, on, by, to 等）；

其它属性：

- adj. 形容词
- adv. 副词

from <http://www.zhangjiee.com/wiki/growing/computer-english-words.html>

## Prism languages-list

- Markup - `markup`, `html`, `xml`, `svg`, `mathml`, `ssml`, `atom`, `rss`
- CSS - `css`
- C-like - `clike`
- JavaScript - `javascript`, `js`
- ABAP - `abap`
- ABNF - `abnf`
- ActionScript - `actionscript`
- Ada - `ada`
- Agda - `agda`
- AL - `al`
- ANTLR4 - `antlr4`, `g4`
- Apache Configuration - `apacheconf`
- Apex - `apex`
- APL - `apl`
- AppleScript - `applescript`
- AQL - `aql`
- Arduino - `arduino`
- ARFF - `arff`
- AsciiDoc - `asciidoc`, `adoc`
- ASP.NET (C#) - `aspnet`
- 6502 Assembly - `asm6502`
- AutoHotkey - `autohotkey`
- AutoIt - `autoit`
- Bash - `bash`, `shell`
- BASIC - `basic`
- Batch - `batch`
- BBcode - `bbcode`, `shortcode`
- Birb - `birb`
- Bison - `bison`
- BNF - `bnf`, `rbnf`
- Brainfuck - `brainfuck`
- BrightScript - `brightscript`
- Bro - `bro`
- BSL (1C:Enterprise) - `bsl`, `oscript`
- C - `c`
- C# - `csharp`, `cs`, `dotnet`
- C++ - `cpp`
- CFScript - `cfscript`, `cfc`
- ChaiScript - `chaiscript`
- CIL - `cil`
- Clojure - `clojure`
- CMake - `cmake`
- COBOL - `cobol`
- CoffeeScript - `coffeescript`, `coffee`
- Concurnas - `concurnas`, `conc`
- Content-Security-Policy - `csp`
- Coq - `coq`
- Crystal - `crystal`
- CSS Extras - `css-extras`
- CSV - `csv`
- Cypher - `cypher`
- D - `d`
- Dart - `dart`
- DataWeave - `dataweave`
- DAX - `dax`
- Dhall - `dhall`
- Diff - `diff`
- Django/Jinja2 - `django`, `jinja2`
- DNS zone file - `dns-zone-file`, `dns-zone`
- Docker - `docker`, `dockerfile`
- DOT (Graphviz) - `dot`, `gv`
- EBNF - `ebnf`
- EditorConfig - `editorconfig`
- Eiffel - `eiffel`
- EJS - `ejs`, `eta`
- Elixir - `elixir`
- Elm - `elm`
- Embedded Lua templating - `etlua`
- ERB - `erb`
- Erlang - `erlang`
- Excel Formula - `excel-formula`, `xlsx`, `xls`
- F# - `fsharp`
- Factor - `factor`
- False - `false`
- Firestore security rules - `firestore-security-rules`
- Flow - `flow`
- Fortran - `fortran`
- FreeMarker Template Language - `ftl`
- GameMaker Language - `gml`, `gamemakerlanguage`
- G-code - `gcode`
- GDScript - `gdscript`
- GEDCOM - `gedcom`
- Gherkin - `gherkin`
- Git - `git`
- GLSL - `glsl`
- Go - `go`
- GraphQL - `graphql`
- Groovy - `groovy`
- Haml - `haml`
- Handlebars - `handlebars`, `hbs`
- Haskell - `haskell`, `hs`
- Haxe - `haxe`
- HCL - `hcl`
- HLSL - `hlsl`
- HTTP - `http`
- HTTP Public-Key-Pins - `hpkp`
- HTTP Strict-Transport-Security - `hsts`
- IchigoJam - `ichigojam`
- Icon - `icon`
- ICU Message Format - `icu-message-format`
- Idris - `idris`, `idr`
- .ignore - `ignore`, `gitignore`, `hgignore`, `npmignore`
- Inform 7 - `inform7`
- Ini - `ini`
- Io - `io`
- J - `j`
- Java - `java`
- JavaDoc - `javadoc`
- JavaDoc-like - `javadoclike`
- Java stack trace - `javastacktrace`
- Jexl - `jexl`
- Jolie - `jolie`
- JQ - `jq`
- JSDoc - `jsdoc`
- JS Extras - `js-extras`
- JSON - `json`, `webmanifest`
- JSON5 - `json5`
- JSONP - `jsonp`
- JS stack trace - `jsstacktrace`
- JS Templates - `js-templates`
- Julia - `julia`
- Keyman - `keyman`
- Kotlin - `kotlin`, `kt`, `kts`
- KuMir (КуМир) - `kumir`, `kum`
- LaTeX - `latex`, `tex`, `context`
- Latte - `latte`
- Less - `less`
- LilyPond - `lilypond`, `ly`
- Liquid - `liquid`
- Lisp - `lisp`, `emacs`, `elisp`, `emacs-lisp`
- LiveScript - `livescript`
- LLVM IR - `llvm`
- Log file - `log`
- LOLCODE - `lolcode`
- Lua - `lua`
- Makefile - `makefile`
- Markdown - `markdown`, `md`
- Markup templating - `markup-templating`
- MATLAB - `matlab`
- MEL - `mel`
- Mizar - `mizar`
- MongoDB - `mongodb`
- Monkey - `monkey`
- MoonScript - `moonscript`, `moon`
- N1QL - `n1ql`
- N4JS - `n4js`, `n4jsd`
- Nand To Tetris HDL - `nand2tetris-hdl`
- Naninovel Script - `naniscript`, `nani`
- NASM - `nasm`
- NEON - `neon`
- Nevod - `nevod`
- nginx - `nginx`
- Nim - `nim`
- Nix - `nix`
- NSIS - `nsis`
- Objective-C - `objectivec`, `objc`
- OCaml - `ocaml`
- OpenCL - `opencl`
- OpenQasm - `openqasm`, `qasm`
- Oz - `oz`
- PARI/GP - `parigp`
- Parser - `parser`
- Pascal - `pascal`, `objectpascal`
- Pascaligo - `pascaligo`
- PATROL Scripting Language - `psl`
- PC-Axis - `pcaxis`, `px`
- PeopleCode - `peoplecode`, `pcode`
- Perl - `perl`
- PHP - `php`
- PHPDoc - `phpdoc`
- PHP Extras - `php-extras`
- PL/SQL - `plsql`
- PowerQuery - `powerquery`, `pq`, `mscript`
- PowerShell - `powershell`
- Processing - `processing`
- Prolog - `prolog`
- PromQL - `promql`
- .properties - `properties`
- Protocol Buffers - `protobuf`
- Pug - `pug`
- Puppet - `puppet`
- Pure - `pure`
- PureBasic - `purebasic`, `pbfasm`
- PureScript - `purescript`, `purs`
- Python - `python`, `py`
- Q# - `qsharp`, `qs`
- Q (kdb+ database) - `q`
- QML - `qml`
- Qore - `qore`
- R - `r`
- Racket - `racket`, `rkt`
- React JSX - `jsx`
- React TSX - `tsx`
- Reason - `reason`
- Regex - `regex`
- Rego - `rego`
- Ren'py - `renpy`, `rpy`
- reST (reStructuredText) - `rest`
- Rip - `rip`
- Roboconf - `roboconf`
- Robot Framework - `robotframework`, `robot`
- Ruby - `ruby`, `rb`
- Rust - `rust`
- SAS - `sas`
- Sass (Sass) - `sass`
- Sass (Scss) - `scss`
- Scala - `scala`
- Scheme - `scheme`
- Shell session - `shell-session`, `sh-session`, `shellsession`
- Smali - `smali`
- Smalltalk - `smalltalk`
- Smarty - `smarty`
- SML - `sml`, `smlnj`
- Solidity (Ethereum) - `solidity`, `sol`
- Solution file - `solution-file`, `sln`
- Soy (Closure Template) - `soy`
- SPARQL - `sparql`, `rq`
- Splunk SPL - `splunk-spl`
- SQF: Status Quo Function (Arma 3) - `sqf`
- SQL - `sql`
- Squirrel - `squirrel`
- Stan - `stan`
- Structured Text (IEC 61131-3) - `iecst`
- Stylus - `stylus`
- Swift - `swift`
- T4 templating - `t4-templating`
- T4 Text Templates (C#) - `t4-cs`, `t4`
- T4 Text Templates (VB) - `t4-vb`
- TAP - `tap`
- Tcl - `tcl`
- Template Toolkit 2 - `tt2`
- Textile - `textile`
- TOML - `toml`
- Turtle - `turtle`, `trig`
- Twig - `twig`
- TypeScript - `typescript`, `ts`
- TypoScript - `typoscript`, `tsconfig`
- UnrealScript - `unrealscript`, `uscript`, `uc`
- URI - `uri`, `url`
- V - `v`
- Vala - `vala`
- VB.Net - `vbnet`
- Velocity - `velocity`
- Verilog - `verilog`
- VHDL - `vhdl`
- vim - `vim`
- Visual Basic - `visual-basic`, `vb`, `vba`
- WarpScript - `warpscript`
- WebAssembly - `wasm`
- Wiki markup - `wiki`
- Xeora - `xeora`, `xeoracube`
- XML doc (.net) - `xml-doc`
- Xojo (REALbasic) - `xojo`
- XQuery - `xquery`
- YAML - `yaml`, `yml`
- YANG - `yang`
- Zig - `zig`
