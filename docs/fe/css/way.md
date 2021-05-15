# 学习路径

一个伟大的网站的特点是它的配色方案。先忘掉一切，先学习背景和颜色属性。颜色是用户在访问你的网页时首先进行交互的东西。不要认为背景属性只是用来设置纯色的。`background` 是 `background-image`, `background-position` 等的一个简写属性。 Box 是 CSS 中最重要的概念之一。学起来并不难。`box-model` 覆盖：

- Height
- Width
- Margin
- Padding
- Border

![CSS Box](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/css-box.jpeg)
<small><center>from [@Prathkum](https://twitter.com/Prathkum/)</center></small>

`height` 和 `width` 属性非常直观。这些是用来设置固定的高度和宽度的元素，我建议看一下 `width`，`min-width`，`max-width`，`height`，`min-height`，`max-height` 属性。适当而统一的元素分离可以让你的网页看起来更吸引人。`margin`（边界）和 `padding`（填充）可以为你做到这一点。`border` 用于设置元素的颜色，宽度和样式。一些不错的边框选择可以使您的元素看起来更漂亮。

排版是网页的基本要素。 好的字体可以使您的网页建立强大的视觉层次，为网站提供图形平衡，并设置产品的整体色调。您可以从 Google 的官方网站添加免费字体。字体有五种基本分类，[详细介绍](https://www.fonts.com/content/learning/fontology/level-1/type-anatomy/type-classifications)：

1. serif 衬线
2. sans serif 无衬线
3. script 脚本
4. monospaced 等距
5. display 展示

一些字体相关的 CSS 方法：`font-family`，`font-weight`，`font-size`。

**CSS Positioning（定位）**

`position` 的可用属性：`static`，`relative`，`absolute`，`fixed`，`sticky`。重点关注：Relative，Absolute。

相对定位，相对于当前元素的原始位置进行移动；绝对定位，与最接近当前元素的父标签有关。

![CSS Box](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/css-positioning.jpeg)
<small><center>from [@Prathkum](https://twitter.com/Prathkum/)</center></small>

## Layout 布局

### Flex

### Grid

```css
.container {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 300px 600px;
    grid-auto-rows: 20px;
    grid-auto-rows: minmax(20px, auto);
    grid-gap: 10px;
}
```

`grid-template-columns: 200px 200px 200px 200px 200px;` = `grid-template-columns: repeat(5, 200px);`

如果在 `grid-template-columns` 中传递像素单位或百分比，则可能会遇到一些响应性问题。为了防止这种情况，建议使用分数值`fr`。

## 响应式网页设计

响应式网页设计有点棘手，但掌握起来并不那么困难。编写 CSS 代码时需要记住的几点要点：

1. Use meta viewport element
2. Don't use large fixed width
3. Try to use Layouts
4. Use box-sizing: border-box
5. Media Queries are saviour
6. Use "auto" in media
7. Use frameworks if possible

我建议您在编写 CSS 时要注意响应性，而不要最后处理响应性。

**2D Grid**

```css
.container {
    display: grid;
    /* grid-column: 1 / 4; */
    grid-template-areas: 'areaName areaName areaName areaName areaName';
}
.one {
    grid-area: areaName;
}
```
