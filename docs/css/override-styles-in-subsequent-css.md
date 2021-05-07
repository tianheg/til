---
title: override-styles-in-subsequent-css
date: 2021-05-01 10:19:14
permalink: /pages/8c642f/
categories:
  - css
tags:
---
# Override Styles In Subsequent CSS

It doesn't matter which order the classes are listed in the HTML element.

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="blue-text pink-text">Hello World!</h1>
```

However, the order of the `class` declarations in the `<style>` section is what is important. The second declaration will always take precedence over the first. Because `.blue-text` is declared second, it overrides the attributes of `.pink-text`

[source](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-styles-in-subsequent-css)
