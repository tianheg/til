# 基础

颜色配比是一门学问。我想改动[这里](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/theme-default/styles/code.styl)的颜色，不过我不知道怎样才是合适的：

```stylus
{$contentClass}
  code
    color lighten($textColor, 20%)
    padding 0.25rem 0.5rem
    margin 0
    font-size 0.85em
    background-color rgba(27,31,35,0.05)
    border-radius 3px
    .token
      &.deleted
        color #EC5975
      &.inserted
        color $accentColor
```
