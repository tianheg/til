# Attach A Fallback Value To A CSS Variable

When using your variable as a CSS property value, you can attach a fallback value that your browser will revert to if the given variable is invalid.

This fallback is not used to increase browser compatibility, and it will not work on IE browsers. Rather, it is used so that the browser has a color to display if it cannot find your variable.

```css
.penguin-bottom {
    /* Change code below this line */
    background: var(--pengiun-skin, black);
    /* Change code above this line */
  }
```

[source](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/attach-a-fallback-value-to-a-css-variable)
