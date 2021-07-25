# CSS

CSS 是层叠样式表。

- [CSS Basics](css-basics.md)

## I Want

- 把 blog 的任务列表样式去掉

## Responsive Web Design

There are many devices that can access the web, and they come in all shapes and sizes. Responsive web design is the practice of designing flexible websites that can respond to different screen sizes, orientations, and resolutions.

- [CSS Code Snippets](css-code-snippets.md)

**引入外部样式表 css 文件**的方式。这种引入方式又分为两种：

1、采用`<link>`标签。例如：`<link rel = "stylesheet" type = "text/css" href = "a.css"></link>`

2、采用 import，必须写在`<style>`标签中，并且必须是第一句。例如：`@import url(a.css) ;`

大多数情况下，不要使用通配符`*`对页面所有标签定义，缺点：1,当页面标签过多时，会增加客户端运行负担

[交集选择器：定义的时候紧密相连](https://github.com/qianguyihao/Web/blob/master/02-CSS%E5%9F%BA%E7%A1%80/03-CSS%E6%A0%B7%E5%BC%8F%E8%A1%A8%E5%92%8C%E9%80%89%E6%8B%A9%E5%99%A8.md#2%E4%BA%A4%E9%9B%86%E9%80%89%E6%8B%A9%E5%99%A8%E5%AE%9A%E4%B9%89%E7%9A%84%E6%97%B6%E5%80%99%E7%B4%A7%E5%AF%86%E7%9B%B8%E8%BF%9E)

子代选择器，用符号`>`表示 和 后代不同

```css
div > p {
    color: red;
}
```

```html
<div>
    <p>Hello World</p>
</div>
<!--
<div>
    <div>
        <p>Hello World</p>
    </div>
</div>
-->
```

div 后紧跟着 p 才会应用 `div > p`

伪类

a标签有4种伪类（即对应四种状态），要求背诵。如下：

- `:link` “链接”：超链接点击之前
- `:visited` “访问过的”：链接被访问过之后
- `:hover` “悬停”：鼠标放到标签上的时候
- `:active` “激活”： 鼠标点击标签，但是不松手时。

在css中，这四种状态**必须按照固定的顺序写**：

> a:link 、a:visited 、a:hover 、a:active

一定要将a标签写在前面，将`:link、:visited、:hover、:active`这些伪类写在后面

前端开发工程师在大量的实践中，发现不写link、visited也挺兼容。写法是：

> a:link、a:visited都是可以省略的，简写在a标签里面。也就是说，a标签涵盖了link、visited的状态（前提是都具有了相同的属性）。

在写`a:link`、`a:visited`这两个伪类的时候，要么同时写，要么同时不写。如果只写`a`属性和`a:link`属性，不规范。

[层叠性：权重计算的问题](https://github.com/qianguyihao/Web/blob/master/02-CSS%E5%9F%BA%E7%A1%80/05-CSS%E6%A0%B7%E5%BC%8F%E8%A1%A8%E7%9A%84%E7%BB%A7%E6%89%BF%E6%80%A7%E5%92%8C%E5%B1%82%E5%8F%A0%E6%80%A7.md#%E5%B1%82%E5%8F%A0%E6%80%A7%E6%9D%83%E9%87%8D%E8%AE%A1%E7%AE%97%E7%9A%84%E9%97%AE%E9%A2%98%E5%A4%A7%E6%80%BB%E7%BB%93%E9%9D%9E%E5%B8%B8%E9%87%8D%E8%A6%81)

`!important`:

1. 它的作用：提升一个属性的权重
2. 无法提升继承的权重？不懂
3. 它不能影响就近原则

`padding: 1em 2em 3em;`: top | horizontal | bottom

一些元素，默认带有padding: `ul`， 做站的时候，为了便于控制，总是喜欢清除这个默认的padding，使用专业的清除默认样式的样式表。

有浮动就有清除。如果一个元素要浮动，那么它的祖先元素一定要有高度。有高度的盒子，才能关住浮动。（记住这句过来人的经验之语）

![](https://camo.githubusercontent.com/1d5ad7f5e78f58b27e0ad20c54591ee41779e8222d83cff86c41129686ddadd2/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303830325f313132332e706e67)

与外墙法相比，内墙法的优势（本质区别）在于：内墙法可以给它所在的家撑出宽度（让box1有高）。即：box1的高度可以自适应内容。

[双倍margin的问题](https://github.com/qianguyihao/Web/blob/master/02-CSS%E5%9F%BA%E7%A1%80/07-%E6%B5%AE%E5%8A%A8.md#ie6%E7%9A%84%E5%8F%8C%E5%80%8Dmargin%E7%9A%84bug)，面试经常问哦

绝对定位的参考点:

- 如果用top描述，那么参考点就是页面的左上角，而不是浏览器的左上角
- 如果用bottom描述，那么参考点就是浏览器首屏窗口尺寸（好好理解“首屏”二字），对应的页面的左下角

由于搜索引擎是搜不到图片的，所以一定要把“博雅互动”这几个文字加上去，然后通过text-indent缩进的属性把文字赶走到视线以外的地方。这是做搜索引擎优化的一个重要的技巧。
