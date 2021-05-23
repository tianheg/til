# VS Code

## 问题

VS Code 也会出错：在某段时间，`Enter` 和 `BackSpace` 都不好用。最终，我发现 `Project Manager` 正在加载，当它加载完毕，前面的两个按键又好用了。

我又一次遇到这种问题。

## 常用快捷键

### 1、工作区快捷键

| Ubuntu/Win 快捷键      | 作用                                          | 备注                 |
| ---------------------- | --------------------------------------------- | -------------------- |
| `Ctrl + Shift + P`，F1 | 显示命令面板                                  |
| `Alt + Q`             | 显示/隐藏侧边栏                               | 很实用，这是我的自定义 |
| `Ctrl + \`             | `创建多个编辑器`                              | 【重要】抄代码利器   |
| `Ctrl + 1、2`          | 聚焦到第 1、第 2 个编辑器                     | 同上重要             |
| `Ctrl +/-`             | 将工作区放大/缩小（包括代码字体、左侧导航栏） | 在投影仪场景经常用到 |
| `Ctrl + J`             | 显示/隐藏控制台                               |
| `Ctrl + Shift + N`     | 重新开一个软件的窗口                          | 很常用               |
| `Ctrl + Shift + W`     | 关闭软件的当前窗口                            |
| `Ctrl + N`             | 新建文件                                      |
| `Ctrl + W`             | 关闭当前文件                                  |

### 2、跳转操作

| Ubuntu/Win 快捷键        | 作用                               | 备注               |
| ------------------------ | ---------------------------------- | ------------------ |
| 没有                     | 在同一个软件的`多个工作区`之间切换 | 使用很频繁         |
| `Ctrl + Pagedown/Pageup` | 在已经打开的`多个文件`之间进行切换 | 非常实用           |
| `Ctrl + Tab`             | 在已经打开的多个文件之间进行跳转   | 不如上面的快捷键快 |
| `Ctrl + shift + O`       | 在当前文件的各种`方法之间`进行跳转 |
| `Ctrl + G`               | 跳转到指定行                       |
| `Ctrl+Shift+\`           | 跳转到匹配的括号                   |

### 3、移动光标

| Ubuntu/Win 快捷键        | 作用                       | 备注       |
| ------------------------ | -------------------------- | ---------- |
| 方向键                   | 在`单个字符`之间移动光标   | 大家都知道 |
| `Ctrl + 左右方向键`      | 在`单词`之间移动光标       | 很常用     |
| `Fn + 左右方向键`        | 在`整行`之间移动光标       | 很常用     |
| `Fn + ←`（或 `Win + ←`） | 将光标定位到当前行的最左侧 | 很常用     |
| `Fn + →`（或 `Win + →`） | 将光标定位到当前行的最右侧 | 很常用     |
| `Ctrl + Home`            | 将光标定位到文章的第一行   |
| `Ctrl + End`             | 将光标定位到文章的最后一行 |
| &nbsp;                   | 在`代码块`之间移动光标     |

### 4、编辑操作

| Ubuntu/Win 快捷键  | 作用                                 | 备注                                   |
| ------------------ | ------------------------------------ | -------------------------------------- |
| `Ctrl + Enter`     | 在当前行的下方新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向下插入一行 |
| `Ctrl+Shift+Enter` | 在当前行的上方新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向上插入一行 |
| `Alt + ↑`          | 将代码向上移动                       | 很常用                                 |
| `Alt + ↓`          | 将代码向下移动                       | 很常用                                 |
| `Alt + Shift + ↑`  | 将代码向上复制                       |
| `Alt + Shift + ↓`  | 将代码向下复制                       | 写重复代码的利器                       |

### 5、多光标编辑

| Ubuntu/Win 快捷键        | 作用                                 | 备注 |
| ------------------------ | ------------------------------------ | ---- |
| `Ctrl + Alt + 上下键`    | 在连续的多列上，同时出现光标         |
| `Alt + 鼠标点击任意位置` | 在任意位置，同时出现光标             |
| `Alt + Shift + 鼠标拖动` | 在选中区域的每一行末尾，出现光标     |
| `Ctrl + Shift + L`       | 在选中文本的所有相同内容处，出现光标 |

其他的多光标编辑操作（很重要）：

- 选中某个文本，然后反复按住快捷键「 `Ctrl + D` 」键， 即可将全文中相同的词逐一加入选择。

- 选中一堆文本后，按住「`Alt + Shift + I`」键，既可在`每一行的末尾`都创建一个光标。

### 6、删除操作

| Ubuntu/Win 快捷键  | 作用                   | 备注             |
| ------------------ | ---------------------- | ---------------- |
| `Ctrl + Shift + K` | 删除整行               |
| `Ctrl + Backspace` | 删除光标之前的一个单词 | 英文有效，很常用 |
| `Ctrl + delete`    | 删除光标之后的一个单词 |
| &nbsp;             | 删除光标之前的整行内容 | 很常用           |
| &nbsp;             | 删除光标之后的整行内容 |

备注：上面所讲到的移动光标、编辑操作、删除操作的快捷键，在其他编辑器里，大部分都适用。

### 7、编程语言相关

| Ubuntu/Win 快捷键 | 作用                         | 备注                             |
| ----------------- | ---------------------------- | -------------------------------- |
| `Ctrl + /`        | 添加单行注释                 | 很常用                           |
| `Alt + shift + F` | 代码格式化                   | 很常用                           |
| F2                | 以重构的方式进行`重命名`     |
| &nbsp;            | 将多行代码合并为一行         | Win 用户可在命令面板搜索”合并行“ |
| `Ctrl + U`        | 将光标的移动回退到上一个位置 | 撤销光标的移动和选择             |

### 8、搜索相关

| Ubuntu/Win 快捷键 | 作用                                       | 备注   |
| ----------------- | ------------------------------------------ | ------ |
| `Ctrl + Shift +F` | 全局搜索代码                               | 很常用 |
| `Ctrl + P`        | 在当前的项目工程里，`全局`搜索文件名       |
| `Ctrl + F`        | 在当前文件中搜索代码，光标在搜索框里       |
| F3                | 在当前文件中搜索代码，光标仍停留在编辑器里 | 很巧妙 |

### 9、自定义快捷键

按住快捷键「`Ctrl + Shift + P`」，弹出命令面板，在命令面板中输入“快捷键”，可以进入快捷键的设置。

当然，你也可以选择菜单栏「偏好设置 --> 键盘快捷方式」，进入快捷键的设置。

### 10、快捷键列表

你可以点击 VS Code 左下角的齿轮按钮，在展开的菜单中选择「键盘快捷方式」，就可以查看和修改所有的快捷键列表了。

### 快捷键参考链接

- 快捷键速查表 Linux [官方]：<https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf>

## 命令面板

同时按住「`Ctrl + Shift + P`」可以打开命令面板。

### 1、设置字体大小

在面板中输入 `font`。

### 2、设置快捷键

在面板中输入 `keyboard shortcut`。

### 3、大小写转换

选中目标文本，在命令面板中输入 `transform` 按需转换。

### 4、使用命令行启动 VS Code

在面板中输入 `install code command`；然后即可在命令行里，使用 `code` 命令打开 VS Code，还可以打开特定目录下的 VS Code：`code /path/`。

## 个性定制

### 1、面包屑（Breadcrumb）

打开 VS Code 的设置项，选择「 User -> Workbench -> Breadcrumbs 」

### 2、左右显示多个编辑器窗口

### 3、代码行号

在设置中搜索 `editor.lineNumbers`。

### 4、显示代码缩略图

在设置中搜索 `editor.minimap`。

### 5、将当前行代码高亮显示（更改光标所在行的背景色）

当我们把光标放在某一行时，这一行的背景色并没有发生变化。如果想**高亮显示**当前行的代码，需要设置两步：

（1）在设置项里搜索`editor.renderLineHighlight`，将选项值设置为`all`或者`line`。

（2）在设置项里增加如下内容：

```json
"workbench.colorCustomizations": {
    "editor.lineHighlightBackground": "#00000090",
    "editor.lineHighlightBorder": "#ffffff30"
}
```

上方代码，第一行代码的意思是：修改光标所在行的背景色（背景色设置为全黑，不透明度 90%）；第二行代码的意思是：修改光标所在行的边框色。

### 6、自动保存

1、在设置中搜索 `files.autoSave`。

2、直接在菜单栏选择「文件-自动保存」

### 7、保存代码后，是否立即格式化

在设置中搜索 `editor.formatOnSave`。

### 8、空格 or 制表符

VS Code 会根据你所打开的文件来决定该使用空格还是制表。也就是说，如果你的项目中使用的都是制表符，那么，当你在写新的代码时，按下 tab 键后，编辑器就会识别成制表符。

常见的设置项如下：

- **editor.detectIndentation**：自动检测（默认开启）。
- **editor.insertSpaces**：按 Tab 键时插入空格（默认）。
- **editor.tabSize**：一个制表符默认等于四个空格。

### 9、新建文件后的默认文件类型

当我们按下快捷键「 `Ctrl + N` 」新建文件时，VS Code 默认无法识别这个文件到底是什么类型的，因此也就无法识别相应的语法高亮。

如果你想修改默认的文件类型，可以在设置项里搜索`files.defaultLanguage` 修改。

### 10、删除文件时，是否弹出确认框

在设置项里搜索 `explorer.confirmDelete`

### 11、文件对比

VS Code 自带的对比功能并不够强大，我们可以安装插件`compareit`，进行更丰富的对比。比如说，安装完插件`compareit`之后，我们可以将「当前文件」与「剪切板」里的内容进行对比。

### 12、查找某个函数在哪些地方被调用了

比如我已经在`a.js`文件里调用了 `foo()`函数。那么，如果我想知道`foo()`函数在其他文件中是否也被调用了，该怎么做呢？

做法如下：在 `a.js` 文件里，选中`foo()`函数（或者将光标放置在`foo()`函数上），然后按住快捷键「Shift + F12」，就能看到 `foo()`函数在哪些地方被调用了，比较实用。

### 13、鼠标操作

- 在当前行的位置，鼠标三击，可以选中当前行。
- 用鼠标单击文件的**行号**，可以选中当前行。
- 在某个**行号**的位置，**上下移动鼠标，可以选中多行**。

### 14、重构

重构分很多种，我们来举几个例子。

**命名重构**：

当我们尝试去修改某个函数（或者变量名）时，我们可以把光标放在上面，然后按下「F2」键，那么，这个函数（或者变量名）出现的地方都会被修改。

**方法重构**：

选中某一段代码，这个时候，代码的左侧会出现一个「灯泡图标」，点击这个图标，就可以把这段代码提取为一个单独的函数。

### 15、在当前文件中搜索

在上面的快捷键列表中，我们已经知道如下快捷键：

Ctrl + F：在当前文件中搜索，光标在搜索框里

F3：在当前文件中搜索，光标仍停留在编辑器里

另外，你可能会注意到，搜索框里有很多按钮，每个按钮都对应着不同的功能，如下图所示：

![search-in-local](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/search-in-local.png)

上图中，你可以通过「Tab」键和「Shift + Tab」键在输入框和替换框之间进行切换。

「在选定内容中查找」这个功能还是比较实用的。你也可以在设置项里搜索 `editor.find.autoFindInSelection`，勾选该设置项后，那么，当你选中指定内容后，然后按住「Ctrl + F」，就可以**自动**只在这些内容里进行查找。

### 16、全局搜索

快捷键：Ctrl + Shift + F

### 17、Git 版本管理

VS Code 自带 Git 版本管理，可配合插件 GitLens 使用

### 18、将工作区放大/缩小

我们在上面的设置项里修改字体大小后，仅仅只是修改了代码的字体大小。

如果你想要缩放整个工作区（包括代码的字体、左侧导航栏的字体等），可以按下快捷键「 Ctrl +/\-」。

**当我们在投影仪上给别人演示代码的时候，这一招十分管用**。

如果你想恢复默认的工作区大小，可以在命令面板输入`重置缩放`（英文是`reset zoom`）。

### 19、创建多层子文件夹

我们可以在新建文件夹的时候，如果直接输入`aa/bb/cc`

### 20、`.vscode` 文件夹的作用

为了统一团队的 vscode 配置，我们可以在项目的根目录下建立 `.vscode` 目录，在里面放置一些配置内容，比如：

- `settings.json`：工作空间设置、代码格式化配置、插件配置。
- `sftp.json`：ftp 文件传输的配置。

`.vscode` 目录里的配置只针对当前项目范围内生效。将 `.vscode` 提交到代码仓库，大家统一配置时，会非常方便。

### 21、Markdown 语法支持

VS Code 自带 md 语法高亮。也就是说，如果你是用 md 格式写文章，则完全可以用 VS Code 进行写作。

写完 md 文件之后，你可以点击右上角的按钮进行预览。可以使用「Markdown Preview Github Styling」插件，以 GitHub 风格预览 md 样式。

### 22、Emmet in VS Code

`Emmet` 可以极大的提高 html 和 css 的编写效率，它提供了一种非常简练的语法规则。

举个例子，我们在编辑器中输入缩写代码：`ul>li*6` ，然后按下 Tab 键，即可得到如下代码片段：

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

VS Code 默认支持 Emmet。更多 Emmet 语法规则，请自行查阅。

### 23、代码格式化：Prettier

我们可以使用 `Prettier`进行代码格式化，会让代码的展示更加美观。步骤如下：

（1）安装插件 `Prettier`。

（2）在项目的根路径下，新建文件`.prettierrc`，并在文件中添加如下内容：

```json
{
  "printWidth": 150,
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tslintIntegration": true,
  "insertSpaceBeforeFunctionParenthesis": false
}
```

上面的内容，是我自己的配置，你可以参考。

更多配置，可以参考官方文档：[prettier.io/docs/en/options.html](https://prettier.io/docs/en/options.html)

### 24、在新的窗口中打开文件

```json
"workbench.editor.enablePreview": false,
```

### 25、如何查看代码结构

「Ctrl + Shift + O」

### 26、在本地开启服务器

使用插件 Live Server

## [插件使用](https://marketplace.visualstudio.com/vscode)

1、`compareit`

2、`GitLens` | Git History

3、`Markdown Preview Github Styling` | Markdown Preview Enhanced | Markdown All in One

4、`Prettier`

5、Live Server

6、Bracket Pair Colorizer 2：突出显示成对的括号

7、sftp：文件传输

8、highlight-icemode：选中相同的代码时，让高亮显示更加明显

VSCode 自带的高亮显示，实在是不够显眼。用插件支持一下吧。

所用了这个插件之后，VS Code 自带的高亮就可以关掉了：

在用户设置里添加`"editor.selectionHighlight": false`即可。

参考链接：[vscode 选中后相同内容高亮插件推荐](https://blog.csdn.net/palmer_kai/article/details/79548164)

9、vscode-icons

10、Project Manager

11、TODO Highlight

写代码过程中，突然发现一个 Bug，但是又不想停下来手中的活，以免打断思路，怎么办？按照代码规范，我们一般是在代码中加个 TODO 注释。比如：（注意，一定要写成大写`TODO`，而不是小写的`todo`）

```txt
//TODO:这里有个bug，我一会儿再收拾你
```

或者：

```txt
//FIXME:我也不知道为啥， but it works only that way.
```

安装了插件 `TODO Highlight`之后，按住「Cmd + Shift + P」打开命令面板，输入「Todohighlist」，选择相关的命令，我们就可以看到一个 todoList 的清单。

12、WakaTime

13、Vetur

14、ES7 React/Redux/GraphQL/React-Native snippets

15、Prettier：代码格式化

Prettier 是一个代码格式化工具，只关注格式化，但不具备校验功能。在一个多人协同开发的团队中，统一的代码编写规范非常重要。一套规范可以让我们编写的代码达到一致的风格，提高代码的可读性和统一性。自然维护性也会有所提高。

16、ESLint：代码格式校验

日常开发中，建议用可以用 Prettier 做代码格式化，然后用 ESlint 做校验。

17、JavaScript(ES6) code snippets

18、Search node_modules

`node_modules`模块里面的文件夹和模块实在是太多了，根本不好找。好在安装 `Search node_modules` 这个插件后，输入快捷键「Cmd + Shift + P」，然后输入 `node_modules`，在弹出的选项中选择 `Search node_modules`，即可搜索 node\_modules 里的模块。

19、indent-rainbow：突出显示代码缩进

20、javascript console utils：快速打印 log 日志【荐】

安装这个插件后，当我们按住快捷键「Cmd + Shift + L」后，即可自动出现日志 `console.log()`。简直是日志党福音。

当我们选中某个变量 `name`，然后按住快捷键「Cmd + Shift + L」，即可自动出现这个变量的日志 `console.log(name)`。

其他的同类插件还有：Turbo Console Log。

不过，生产环境的代码，还是尽量少打日志比较好，避免出现一些异常。

编程有三等境界：

- 第三等境界是打日志，这是最简单、便捷的方式，略显低级，一般新手或资深程序员偷懒时会用。
- 第二等境界是断点调试，在前端、Java、PHP、iOS 开发时非常常用，通过断点调试可以很直观地跟踪代码执行逻辑、调用栈、变量等，是非常实用的技巧。
- 第一等境界是测试驱动开发，在写代码之前先写测试。与第二等的断点调试刚好相反，大部分人不是很习惯这种方式，但在国外开发者或者敏捷爱好者看来，这是最高效的开发方式，在保证代码质量、重构等方面非常有帮助，是现代编程开发必不可少的一部分。

21、Code Spell Checker：单词拼写错误检查

这个拼写检查程序的目标是帮助捕获常见的单词拼写错误，可以检测驼峰命名。从此告别 Chinglish。

22、Local History

维护文件的本地历史记录，强烈建议安装。代码意外丢失时，有时可以救命。

23、RayThis: Instant Beautiful Code Screenshots 代码截图

同类：CodeSnap，<https://carbon.now.sh/>，Polacode-2020

24、Image Preview

图片预览。鼠标移动到图片 url 上的时候，会自动显示图片的预览和图片尺寸。

25、Auto Close Tag、Auto Rename Tag

自动闭合标签、自动对标签重命名。

26、Better Comments

为注释添加更醒目、带分类的色彩。

27、CSS Peek

增强 HTML 和 CSS 之间的关联，快速查看该元素上的 CSS 样式。

28、Vue CSS Peek

CSS Peek 对 Vue 没有支持，该插件提供了对 Vue 文件的支持。

29、Color Info

这个便捷的插件，将为你提供你在 CSS 中使用颜色的相关信息。你只需在颜色上悬停光标，就可以预览色块中色彩模型的（HEX、 RGB、HSL 和 CMYK）相关信息了。

30、RemoteHub

不要惊讶，RemoteHub 和 GitLens 是同一个作者开发出来的。

`RemoteHub`插件的作用是：可以在本地查看 GitHub 网站上的代码，而不需要将代码下载到本地。

31、Live Share：实时编码分享

`Live Share`这个神奇的插件是由微软官方出品，它的作用是：**实时编码分享**。也就是说，它可以实现你和你的同伴一起写代码。这绝对就是**结对编程**的神器啊。

安装方式：

打开插件管理，搜索“live share”，安装。安装后重启 VS Code，在左侧会多出一个按钮。

32、Import Cost

在项目开发过程中，我们会引入很多 npm 包，有时候可能只用到了某个包里的一个方法，却引入了整个包，导致代码体积增大很多。`Import Cost`插件可以在代码中友好的提示我们，当前引入的包会增加多少体积，这很有助于帮我们优化代码的体积。

33、Paste JSON as Code

此插件可以将剪贴板中的 JSON 字符串转换成工作代码。支持多种语言。

34、markdownlint

检查并提示规范 md 文档。使用 `<!-- markdownlint-disable MD041 -->` 可以禁用当前文档的规则。

---

**参考资料**：

1. <https://github.com/qianguyihao/Web/blob/master/00-%E5%89%8D%E7%AB%AF%E5%B7%A5%E5%85%B7/01-VS%20Code%E7%9A%84%E4%BD%BF%E7%94%A8.md>
