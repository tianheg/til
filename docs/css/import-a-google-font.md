---
title: import-a-google-font
date: 2021-05-01 10:19:14
permalink: /pages/de95d1/
categories:
  - css
tags:
  - 
---
# Import A Google Font

```html
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <style>
    .red-text {
        color: red;
        font-family: 'Lobster', cursive;
    }
    </style>
</head>

<body>
    <h2 class="red-text">CatPhotoApp</h2>
</body>
```

Now you can use the `Lobster` font in your CSS by using `Lobster` as the FAMILY\_NAME as in the following example:
`font-family: FAMILY_NAME, GENERIC_NAME;`.

The GENERIC\_NAME is optional, and is a fallback font in case the other specified font is not available. This is covered in the next challenge.

Family names are case\-sensitive and need to be wrapped in quotes if there is a space in the name. For example, you need quotes to use the `"Open Sans"` font, but not to use the `Lobster` font.

[source](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/import-a-google-font)
