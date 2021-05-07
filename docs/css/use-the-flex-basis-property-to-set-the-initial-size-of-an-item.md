---
title: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
date: 2021-05-01 10:19:14
permalink: /pages/0e6619/
categories:
  - css
tags:
  - 
---
# Use The Flex-basis Property To Set The Initial Size Of An Item

The `flex-basis` property specifies the initial size of the item before CSS makes adjustments with `flex-shrink` or `flex-grow`.

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

[source](https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item)
