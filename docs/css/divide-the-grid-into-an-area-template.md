---
title: divide-the-grid-into-an-area-template
date: 2021-05-01 10:19:14
permalink: /pages/0db7a2/
categories:
  - css
tags:
  - 
---
# Divide The Grid Into An Area Template

[source](https://www.freecodecamp.org/learn/responsive-web-design/css-grid/divide-the-grid-into-an-area-template)

```css
.container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
      "header header header"
      ". content content"
      "footer footer footer";
}
```
