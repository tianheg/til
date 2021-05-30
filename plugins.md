# Use Plugins

```sh
$ yarn add @vuepress/plugin-nprogress -D
$ yarn add vuepress-plugin-one-click-copy -D
$ yarn add vuepress-plugin-fulltext-search -D
$ yarn add vuepress-plugin-last-reading -D
$ yarn add vuepress-plugin-element-ui -D
$ yarn add vuepress-plugin-thirdparty-search -D
$ yarn add vuepress-plugin-clean-urls -D
```

## `vuepress-plugin-element-ui`

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

## `vuepress-plugin-clean-urls`

Use `http://localhost:8080/fe/javascript/basic-javascript/` instead of `http://localhost:8080/fe/javascript/basic-javascript.html`.
