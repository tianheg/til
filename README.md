# til

📝 Today I Learned

GitHub Action Consume Time: about 2min2s

## 改变

- 2021-05-07: Front-end, Server, Others
- 2021-05-22: 前端与服务端的区分是因为业务需求，而不是技术本身。
- 2021-05-23: 组织我的技术体系时，前后端分类的方式一定无法满足我的需要；目前：入门，进阶，自然
- 2021-05-29: 通用基础 basic，行业基础 industry-basic，行业专用 industry-special

## Problems

1. Can't resolve mark head link, like [this](https://til.yidajiabei.xyz/fe/javascript/basic-javascript/#-2), want to access `JavaScript 基础 --> 比较运算符 --> ==`
I think may relate to `themeConfig.smoothScroll`.

## Use Plugins

```sh
$ yarn add @vuepress/plugin-nprogress -D
$ yarn add vuepress-plugin-one-click-copy -D
$ yarn add vuepress-plugin-fulltext-search -D
$ yarn add vuepress-plugin-last-reading -D
$ yarn add vuepress-plugin-element-ui -D
$ yarn add vuepress-plugin-thirdparty-search -D
$ yarn add vuepress-plugin-clean-urls -D
```

### `vuepress-plugin-element-ui`

**`el-tabs`**

```md
:::: el-tabs

::: el-tab-pane label=title

__markdown content__

:::

::: el-tab-pane label=javascript

\`\`\`js
() => {
  console.log('Javascript code example')
}
\`\`\`

:::

::::
```

**`el-tag`**

```md
<el-tag>标签一</el-tag>
<el-tag type="success">标签二</el-tag>
<el-tag type="info">标签三</el-tag>
<el-tag type="warning">标签四</el-tag>
<el-tag type="danger">标签五</el-tag>
```

### `vuepress-plugin-clean-urls`

Use `http://localhost:8080/fe/javascript/basic-javascript/` instead of `http://localhost:8080/fe/javascript/basic-javascript.html`.

---

**References**:

- [jbranchaud/til](https://github.com/jbranchaud/til)
- [daryllxd/til](https://github.com/daryllxd/til)
- [daryllxd/lifelong-learning](https://github.com/daryllxd/lifelong-learning)
- [jwworth/til](https://github.com/jwworth/til)
- [TODAY I LEARNED](https://til.hashrocket.com)
- [simonw/til](https://github.com/simonw/til)
- [thoughtbot/til](https://github.com/thoughtbot/til)
- vuepress-plugin-thirdparty-search - 它可以添加其他搜索引擎
- [教你如何打造舒适、高效、时尚的前端开发环境](https://github.com/ykfe/fe-dev-playbook)
