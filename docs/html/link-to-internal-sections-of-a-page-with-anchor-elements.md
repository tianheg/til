---
title: link-to-internal-sections-of-a-page-with-anchor-elements
date: 2021-05-01 10:19:14
permalink: /pages/7b14e7/
categories:
  - html
tags:
  - 
---
# Link To Internal Sections Of A Page With Anchor Elements

`a` (*anchor*) elements can also be used to create internal links to jump to different sections within a webpage.

To create an internal link, you assign a link's href attribute to a hash symbol # plus the value of the id attribute for the element that you want to internally link to, usually further down the page.

You then need to add the same `id` attribute to the element you are linking to. An `id` is an attribute that uniquely describes an element.

Below is an example of an internal anchor link and its target element:

```html
<a href="#footer">Jump to Bottom</a>

<footer id="footer">Copyright Cat Photo App</footer>

```

When users click the Contacts link, they'll be taken to the section of the webpage with the **Jump to Bottom** header element.

[source](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-internal-sections-of-a-page-with-anchor-elements)
