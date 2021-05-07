---
title: override-all-other-styles-by-using-important
date: 2021-05-01 10:19:14
permalink: /pages/8a0968/
categories:
  - css
tags:
---
# Override All Other Styles By Using Important

In many situations, you will use CSS libraries. These may accidentally override your own CSS. So when you absolutely need to be sure that an element has specific CSS, you can use `!important`

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

[source](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-all-other-styles-by-using-important)
