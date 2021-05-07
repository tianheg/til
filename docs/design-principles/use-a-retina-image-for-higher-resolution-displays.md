---
title: use-a-retina-image-for-higher-resolution-displays
date: 2021-05-01 10:19:14
permalink: /pages/d41ff6/
categories:
  - design-principles
tags:
---
# Use A Retina Image For Higher Resolution Displays

The simplest way to make your images properly appear on High\-Resolution Displays, such as the MacBook Pros "retina display" is to define their `width` and `height` values as only half of what the original file is. Here is an example of an image that is only using half of the original height and width:

```html
<style> img { height: 250px; width: 250px; } </style> <img src="coolPic500x500" alt="A most excellent picture">
```

[source](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/use-a-retina-image-for-higher-resolution-displays)
