---
title: override-class-declarations-by-styling-id-attributes
date: 2021-05-01 10:19:14
permalink: /pages/984613/
categories:
  - css
tags:
---
# Override Class Declarations By Styling ID Attributes

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .blue-text {
    color: blue;
  }
  .pink-text {
    color: pink;
  }

  #orange-text {
    color: orange;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

[source](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-by-styling-id-attributes)
