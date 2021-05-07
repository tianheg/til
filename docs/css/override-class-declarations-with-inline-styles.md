---
title: override-class-declarations-with-inline-styles
date: 2021-05-01 10:19:14
permalink: /pages/e127db/
categories:
  - css
tags:
  - 
---
# Override Class Declarations With Inline Styles

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
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 style="color: white;" id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

[source](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-with-inline-styles)
