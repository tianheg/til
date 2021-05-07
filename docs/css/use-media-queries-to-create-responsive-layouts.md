---
title: use-media-queries-to-create-responsive-layouts
date: 2021-05-01 10:19:14
permalink: /pages/2b785e/
categories:
  - css
tags:
---
# Use Media Queries To Create Responsive Layouts

[source](https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-media-queries-to-create-responsive-layouts)

```css
@media (min-width: 400px){
    .container{
      grid-template-areas:
      /* Only change code below this line */
        "header header "
        "advert content"
        "footer footer";
      /* Only change code above this line */
    }
}
```
