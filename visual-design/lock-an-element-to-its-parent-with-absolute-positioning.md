# Lock An Element To Its Parent With Absolute Positioning

The next option for the CSS `position` property is `absolute`, which locks the element in place relative to its parent container.

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;

  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

[source](https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/lock-an-element-to-its-parent-with-absolute-positioning)
