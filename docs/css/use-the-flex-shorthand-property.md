---
title: use-the-flex-shorthand-property
date: 2021-05-01 10:19:14
permalink: /pages/21c42e/
categories:
  - css
tags:
  - 
---
# Use The Flex Shorthand Property

For example, `flex: 1 0 10px;` will set the item to `flex-grow: 1;`, `flex-shrink: 0;`, and `flex-basis: 10px;`.

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

[source](https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-shorthand-property)
