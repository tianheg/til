# The difference between js in the head and body

When I put `external-link.js` in the `head` tag, it can't work, but when it's in the `body` tag, it works. The code is:

```js
// Open external links in new tab
function external_new_window() {
    for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
        var b = c[a];
        if(b.getAttribute("href") ) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
}
external_new_window();
```

`head`:

```html
<head>
    <script type="text/javascript" src="{{ '/assets/js/external-link.js' | absolute_url }}"></script>
</head>
```

`body`:

```html
<body>
    <script type="text/javascript" src="{{ '/assets/js/external-link.js' | absolute_url }}"></script>
</body>
```

These codes are under Jekyll environment.
