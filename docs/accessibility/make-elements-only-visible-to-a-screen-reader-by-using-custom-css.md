---
title: make-elements-only-visible-to-a-screen-reader-by-using-custom-css
date: 2021-05-01 10:19:14
permalink: /pages/8d342b/
categories:
  - accessibility
tags:
  - 
---
# Make Elements Only Visible To A Screen Reader By Using Custom CSS

However, CSS's magic can also improve accessibility on your page when you want to visually hide content meant only for screen readers. This happens when information is in a visual format (like a chart), but screen reader users need an alternative presentation (like a table) to access the data. CSS is used to position the screen reader-only elements off the visual area of the browser window.

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**Note:** The following CSS approaches will NOT do the same thing:

- `display: none;` or `visibility: hidden;` hides content for everyone, including screen reader users
- Zero values for pixel sizes, such as `width: 0px; height: 0px;` removes that element from the flow of your document, meaning screen readers will ignore it

[source](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-elements-only-visible-to-a-screen-reader-by-using-custom-css)
