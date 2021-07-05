---
layout: note
title: JavaScript
parent: Home
has_children: true
has_toc: false
---

# JavaScript

## JavScript 是什么

HTML，CSS 控制网页的内容和样式，JavaScript 控制交互。学习 JavaScript 过程中会涉及它的基础知识，如变量、数组、对象、循环和函数。

在掌握基础知识后，你可以应用它们，如创造操作字符串、因式分解，甚至计算国际空间站的轨道等事情的算法。

在这过程中，我能学得到两种编程范式：面向对象编程（OOP）和函数式编程（FP）。

JavaScript 是 Web 端的核心技术之一，与 HTML 和 CSS 一起，被所有现代浏览器支持。

## JavaScript Basics

- [[JavaScript Basics]]
- [[ES6]]

## 我的学习路径

1. freeCodeCamp's JavaScript Algorithms and Data Structures(not complete)
2. <https://github.com/bradtraversy/50projects50days>


3. <https://javascript.info/> or [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
4. 复习 HTML，CSS：[HTML-W3Schools](https://www.w3schools.com/html/)，[CSS-Tricks](https://css-tricks.com/)
5. 学习 DOM 和 DOM 操作：[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
6. 学习写应用：[JavaScript 30](https://javascript30.com/)

注：**在学习框架之前，打好基础**。

ref:

- <https://github.com/leonardomso/33-js-concepts> - 33 JavaScript concepts every developer should know
- <https://github.com/trekhleb/javascript-algorithms> - Algorithms and data structures implemented in JavaScript with explanations and links to further readings
- [JavaScript DOM 编程艺术](https://rbew.github.io/Javascript_Dom/)

## Great Posts about JS

- [12 JavaScript quirks](https://2ality.com/2013/04/12quirks.html)

## What I learnt

### Use Same Between File Name And Variable

文件的名称要和它所匹配的变量相同，否则代码会出问题，不会报错，但生成的页面有问题 [source](https://github.com/tianheg/good/commit/b7a0d1111aba1d32c1dcb94f1a3d9e8b342a1c13)

### Package.json License Should Be A Valid SPDX License Expression

`CC BY-NC-SA 4.0` to `CC-BY-NC-SA-4.0`

[source](https://spdx.org/licenses/)

### String Does Not Match The Pattern Of

```log
String does not match the pattern of "^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]*$".
```

Some rules:

- The name must be less than or equal to 214 characters. This includes the scope for scoped packages.
- The names of scoped packages can begin with a dot or an underscore. This is not permitted without a scope.
- New packages must not have uppercase letters in the name.
- The name ends up being part of a URL, an argument on the command line, and a folder name. Therefore, the name can't contain any non\-URL\-safe characters.

Some tips:

- Don't use the same name as a core Node module.
- Don't put "js" or "node" in the name. It's assumed that it's js, since you're writing a package.json file, and you can specify the engine using the "engines" field. (See below.)
- The name will probably be passed as an argument to require(), so it should be something short, but also reasonably descriptive.
- You may want to check the npm registry to see if there's something by that name already, before you get too attached to it. <https://www.npmjs.com/>

[source](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#name)

### Unmet Peer Dependency

When I install packages, something always shows like these:

```bash
warning " > @vue/test-utils@1.1.3" has unmet peer dependency "vue@2.x".
warning " > @vue/test-utils@1.1.3" has unmet peer dependency "vue-template-compiler@^2.x".
warning " > eslint-loader@3.0.4" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning " > eslint-plugin-vue@5.2.3" has incorrect peer dependency "eslint@^5.0.0".
warning "eslint-plugin-vue > vue-eslint-parser@5.0.0" has incorrect peer dependency "eslint@^5.0.0".
warning " > sass-loader@10.1.1" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
warning " > vue-jest@3.0.7" has unmet peer dependency "vue@^2.x".
warning " > vue-jest@3.0.7" has unmet peer dependency "vue-template-compiler@^2.x".
```

```bash
$ npm ls                   
til@1.0.0 folder path
├── husky@5.1.3
├─┬ lint-md-cli@0.1.2
│ ├─┬ babel-polyfill@6.26.0
│ │ ├─┬ babel-runtime@6.26.0
│ │ │ ├── core-js@2.6.12 deduped
│ │ │ └── regenerator-runtime@0.11.1
│ │ ├── core-js@2.6.12
│ │ └── regenerator-runtime@0.10.5
│ ├─┬ chalk@2.4.2
│ │ ├─┬ ansi-styles@3.2.1
│ │ │ └─┬ color-convert@1.9.3
│ │ │   └── color-name@1.1.3
│ │ ├── escape-string-regexp@1.0.5
│ │ └─┬ supports-color@5.5.0
│ │   └── has-flag@3.0.0
│ ├── commander@2.20.3
│ ├─┬ glob@7.1.6
│ │ ├── fs.realpath@1.0.0
│ │ ├─┬ inflight@1.0.6
│ │ │ ├── once@1.4.0 deduped
│ │ │ └── wrappy@1.0.2
│ │ ├── inherits@2.0.4
│ │ ├─┬ minimatch@3.0.4
│ │ │ └─┬ brace-expansion@1.1.11
│ │ │   ├── balanced-match@1.0.0
│ │ │   └── concat-map@0.0.1
│ │ ├─┬ once@1.4.0
│ │ │ └── wrappy@1.0.2 deduped
│ │ └── path-is-absolute@1.0.1
│ ├─┬ lint-md@0.2.0
│ │ ├── ast-plugin@0.0.7
│ │ ├── lodash@4.17.21 deduped
│ │ ├─┬ remark-parse@6.0.3
│ │ │ ├── collapse-white-space@1.0.6
│ │ │ ├── is-alphabetical@1.0.4
│ │ │ ├── is-decimal@1.0.4
│ │ │ ├── is-whitespace-character@1.0.4
│ │ │ ├── is-word-character@1.0.4
│ │ │ ├── markdown-escapes@1.0.4
│ │ │ ├─┬ parse-entities@1.2.2
│ │ │ │ ├── character-entities@1.2.4
│ │ │ │ ├── character-entities-legacy@1.1.4
│ │ │ │ ├── character-reference-invalid@1.1.4
│ │ │ │ ├─┬ is-alphanumerical@1.0.4
│ │ │ │ │ ├── is-alphabetical@1.0.4 deduped
│ │ │ │ │ └── is-decimal@1.0.4 deduped
│ │ │ │ ├── is-decimal@1.0.4 deduped
│ │ │ │ └── is-hexadecimal@1.0.4
│ │ │ ├── repeat-string@1.6.1
│ │ │ ├── state-toggle@1.0.3
│ │ │ ├── trim@0.0.1
│ │ │ ├── trim-trailing-lines@1.1.4
│ │ │ ├─┬ unherit@1.1.3
│ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ └── xtend@4.0.2 deduped
│ │ │ ├─┬ unist-util-remove-position@1.1.4
│ │ │ │ └─┬ unist-util-visit@1.4.1
│ │ │ │   └─┬ unist-util-visit-parents@2.1.2
│ │ │ │     └── unist-util-is@3.0.0
│ │ │ ├── vfile-location@2.0.6
│ │ │ └── xtend@4.0.2
│ │ └─┬ unified@7.1.0
│ │   ├── @types/unist@2.0.3
│ │   ├─┬ @types/vfile@3.0.2
│ │   │ ├── @types/node@14.14.34
│ │   │ ├── @types/unist@2.0.3 deduped
│ │   │ └─┬ @types/vfile-message@2.0.0
│ │   │   └─┬ vfile-message@2.0.4
│ │   │     ├── @types/unist@2.0.3 deduped
│ │   │     └─┬ unist-util-stringify-position@2.0.3
│ │   │       └── @types/unist@2.0.3 deduped
│ │   ├── bail@1.0.5
│ │   ├── extend@3.0.2
│ │   ├── is-plain-obj@1.1.0
│ │   ├── trough@1.0.5
│ │   ├─┬ vfile@3.0.1
│ │   │ ├── is-buffer@2.0.5
│ │   │ ├── replace-ext@1.0.0
│ │   │ ├── unist-util-stringify-position@1.1.2
│ │   │ └─┬ vfile-message@1.1.1
│ │   │   └── unist-util-stringify-position@1.1.2 deduped
│ │   └── x-is-string@0.1.0
│ └── lodash@4.17.21
├─┬ lint-staged@10.5.4
│ ├─┬ chalk@4.1.0
│ │ ├─┬ ansi-styles@4.3.0
│ │ │ └─┬ color-convert@2.0.1
│ │ │   └── color-name@1.1.4
│ │ └─┬ supports-color@7.2.0
│ │   └── has-flag@4.0.0
│ ├─┬ cli-truncate@2.1.0
│ │ ├─┬ slice-ansi@3.0.0
│ │ │ ├── ansi-styles@4.3.0 deduped
│ │ │ ├── astral-regex@2.0.0
│ │ │ └── is-fullwidth-code-point@3.0.0
│ │ └─┬ string-width@4.2.2
│ │   ├── emoji-regex@8.0.0
│ │   ├── is-fullwidth-code-point@3.0.0 deduped
│ │   └─┬ strip-ansi@6.0.0
│ │     └── ansi-regex@5.0.0
│ ├── commander@6.2.1
│ ├─┬ cosmiconfig@7.0.0
│ │ ├── @types/parse-json@4.0.0
│ │ ├─┬ import-fresh@3.3.0
│ │ │ ├─┬ parent-module@1.0.1
│ │ │ │ └── callsites@3.1.0
│ │ │ └── resolve-from@4.0.0
│ │ ├─┬ parse-json@5.2.0
│ │ │ ├─┬ @babel/code-frame@7.12.13
│ │ │ │ └─┬ @babel/highlight@7.13.10
│ │ │ │   ├── @babel/helper-validator-identifier@7.12.11
│ │ │ │   ├─┬ chalk@2.4.2
│ │ │ │   │ ├─┬ ansi-styles@3.2.1
│ │ │ │   │ │ └─┬ color-convert@1.9.3
│ │ │ │   │ │   └── color-name@1.1.3
│ │ │ │   │ ├── escape-string-regexp@1.0.5 deduped
│ │ │ │   │ └─┬ supports-color@5.5.0
│ │ │ │   │   └── has-flag@3.0.0
│ │ │ │   └── js-tokens@4.0.0
│ │ │ ├─┬ error-ex@1.3.2
│ │ │ │ └── is-arrayish@0.2.1
│ │ │ ├── json-parse-even-better-errors@2.3.1
│ │ │ └── lines-and-columns@1.1.6
│ │ ├── path-type@4.0.0
│ │ └── yaml@1.10.2
│ ├─┬ debug@4.3.1
│ │ └── ms@2.1.2
│ ├── dedent@0.7.0
│ ├─┬ enquirer@2.3.6
│ │ └── ansi-colors@4.1.1
│ ├─┬ execa@4.1.0
│ │ ├─┬ cross-spawn@7.0.3
│ │ │ ├── path-key@3.1.1
│ │ │ ├─┬ shebang-command@2.0.0
│ │ │ │ └── shebang-regex@3.0.0
│ │ │ └─┬ which@2.0.2
│ │ │   └── isexe@2.0.0
│ │ ├─┬ get-stream@5.2.0
│ │ │ └─┬ pump@3.0.0
│ │ │   ├─┬ end-of-stream@1.4.4
│ │ │   │ └── once@1.4.0 deduped
│ │ │   └── once@1.4.0 deduped
│ │ ├── human-signals@1.1.1
│ │ ├── is-stream@2.0.0
│ │ ├── merge-stream@2.0.0
│ │ ├─┬ npm-run-path@4.0.1
│ │ │ └── path-key@3.1.1 deduped
│ │ ├─┬ onetime@5.1.2
│ │ │ └── mimic-fn@2.1.0
│ │ ├── signal-exit@3.0.3
│ │ └── strip-final-newline@2.0.0
│ ├─┬ listr2@3.4.3
│ │ ├── chalk@4.1.0 deduped
│ │ ├── cli-truncate@2.1.0 deduped
│ │ ├─┬ figures@3.2.0
│ │ │ └── escape-string-regexp@1.0.5 deduped
│ │ ├── indent-string@4.0.0
│ │ ├─┬ log-update@4.0.0
│ │ │ ├─┬ ansi-escapes@4.3.1
│ │ │ │ └── type-fest@0.11.0
│ │ │ ├─┬ cli-cursor@3.1.0
│ │ │ │ └─┬ restore-cursor@3.1.0
│ │ │ │   ├── onetime@5.1.2 deduped
│ │ │ │   └── signal-exit@3.0.3 deduped
│ │ │ ├─┬ slice-ansi@4.0.0
│ │ │ │ ├── ansi-styles@4.3.0 deduped
│ │ │ │ ├── astral-regex@2.0.0 deduped
│ │ │ │ └── is-fullwidth-code-point@3.0.0 deduped
│ │ │ └─┬ wrap-ansi@6.2.0
│ │ │   ├── ansi-styles@4.3.0 deduped
│ │ │   ├── string-width@4.2.2 deduped
│ │ │   └── strip-ansi@6.0.0 deduped
│ │ ├─┬ p-map@4.0.0
│ │ │ └─┬ aggregate-error@3.1.0
│ │ │   ├── clean-stack@2.2.0
│ │ │   └── indent-string@4.0.0 deduped
│ │ ├─┬ rxjs@6.6.6
│ │ │ └── tslib@1.14.1
│ │ ├── through@2.3.8
│ │ └─┬ wrap-ansi@7.0.0
│ │   ├── ansi-styles@4.3.0 deduped
│ │   ├── string-width@4.2.2 deduped
│ │   └── strip-ansi@6.0.0 deduped
│ ├─┬ log-symbols@4.0.0
│ │ └── chalk@4.1.0 deduped
│ ├─┬ micromatch@4.0.2
│ │ ├─┬ braces@3.0.2
│ │ │ └─┬ fill-range@7.0.1
│ │ │   └─┬ to-regex-range@5.0.1
│ │ │     └── is-number@7.0.0
│ │ └── picomatch@2.2.2
│ ├── normalize-path@3.0.0
│ ├─┬ please-upgrade-node@3.2.0
│ │ └── semver-compare@1.0.0
│ ├── string-argv@0.3.1
│ └─┬ stringify-object@3.3.0
│   ├── get-own-enumerable-property-symbols@3.0.2
│   ├── is-obj@1.0.1
│   └── is-regexp@1.0.0
└── prettier@2.2.1
```

What's the meaning of `deduped`?

### Use Npx

如果有些包我们只会使用一次，或者只想尝试以下，不想安装到全局，也不想作为当前项目的依赖
可以使用 npx 的方式来执行

npx 是 npm 5.2+ 版本之后自带的工具，能够帮助我们更高效的执行 npm 软件仓库里的安装包

[source](https://learnku.com/articles/16798/quick-view-of-npm-and-yarn-global-installed-packages)

# Used Packages

 Name | GitHub URL | npm URL | yarn URL
 --- | --- | --- | ---
 lint-md | <https://github.com/lint-md/lint-md> | <https://www.npmjs.com/package/lint-md> | <https://yarn.pm/lint-md>
 husky | <https://github.com/typicode/husky> | <https://www.npmjs.com/package/husky> | <https://yarn.pm/husky>
 gulp | <https://github.com/gulpjs/gulp> | <https://www.npmjs.com/package/gulp> | <https://yarn.pm/gulp>
 npx | <https://github.com/npm/npx> | <https://www.npmjs.com/package/npx> | <https://yarn.pm/npx>
 gatsby-cli| <https://github.com/gatsbyjs/gatsby> | <https://www.npmjs.com/package/gatsby-cli> | <https://yarn.pm/gatsby-cli>
 jest | <https://github.com/facebook/jest> | <https://www.npmjs.com/package/jest> | <https://yarn.pm/jest>
 docsify-cli | <https://github.com/docsifyjs/docsify-cli> | <https://www.npmjs.com/package/docsify-cli> | <https://yarn.pm/docsify-cli>
 dclone | <https://github.com/ykfe/dclone> | <https://www.npmjs.com/package/dclone>| <https://yarn.pm/dclone>

# Install Node.js, NPM and Yarn

## Use Official deb file

[source](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions)

```bash
#Node.js LTS (v14.x)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install gcc g++ make #to build native addons
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
npm install -g n # https://github.com/tj/n
```

## nvm

```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
$ vim ~/.zshrc

添加以下配置：
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

### 使用命令

```sh
$ nvm ls-remote # 列出所有支持的 Node.js 版本
$ nvm ls # 列出本地已安装的 Node.js 版本
$ nvm install 11.5.0 # 安装指定的 Node.js 版本
$ nvm alias default 11 # 设置默认使用的版本
```

## nrm

使用 [nrm](https://github.com/Pana/nrm) 可以让我们来切换不同的 npm 源而不用单独安装 cnpm 之类的库

### 安装 nrm

```sh
$ npm install -g nrm
```

### 使用命令

```sh
$ nrm ls # 列出当前支持切换的源
$ nrm use taobao # 使用 taobao 的源作为默认的 npm 源
```

---

**References**:

1. <https://github.com/tj/n>
2. <https://github.com/nvm-sh/nvm#installing-and-updating>
