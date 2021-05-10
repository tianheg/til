# 关于 HTML 的所有事

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="This is an example.">
    <title>Title</title>
  </head>
  <body>
  <h2>Hello World!</h2>
  <p>Hello World!</p>
  </body>
</html>
```

## Basic Tags

`html`, `head`, `body`, `meta`, `title`, `hx`(x=1~6), `p`, `b`(bold), `i`(italic), `br/`, `hr/`, `big`, `small`, `sub`, `sup`, `aside`, `a`, `img`, `video`, `iframe`, `ul`, `ol`, `li`, `dl`, `dt`, `dd`

## Comments

```html
<!-- -->
```

## Style and Colors

```html
<p style="color: green;">Hello World!</p>
```

## Formatting a Page

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="This is an example.">
    <title>Title</title>
  </head>
  <body>
    <header>
      <nav></nav>
    </header>
    <main>
      <article>
        <section>
          <h2>Hello World!</h2>
          <p>Hello World!</p>
        </section>
      </article> 
    </main>
    <footer></footer>
  </body>
</html>
```

## Links

```html
<a href="https://www.google.com" target="_blank"><h1>Google's Homepage</h1></a>
<a href="pages2.html">Pages2</a>
```

`a` 所包含的文本要能表示即将跳转页面的含义。

## Images

```html
<img src="" alt="" width="" height="100"/> <!-- 100px pixels-->

<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```

在进行图片的显示大小设置时，可以只设置一个（width 或 height），之后 HTML 会自动把没有设置的那一个按图片比例调整到合适大小。adjust the aspect ratio for you（为你调整长宽比）。

`alt` 描述图片内容，并提供可选文本。它可以应对图片加载失败或者无法被用户看见的情况。它也能让搜索引擎知道一张图片里包含了什么。

HTML5 引入了新的 `figure` 和与它相关的 `figcaption`，它们可以一起展示可视化的事物（像图像、图表），包裹这些元素能够能够提供双层可访问性加速，通过语义地对相关内容进行分组并提供一个可选文本解释 `figure`。对于数据可视化，像图表，说明可以被用来为有视觉障碍的用户简短地提示趋势或结论。使用它面临的另一个挑战：如何为读屏读者移动脱离屏幕的表格数据。

## Videos and YouTube iFrames

```html
<video src="" width="" height="" poster="" loop autoplay controls></video> <!-- 添加封面 -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/pQN-pnXPaVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

- `controls` 显示基本的操作：播放、暂停等；

## Lists

```html
<ul>
  <li><a href="#">Apples</a></li>
  <li>Oranges
    <ol>
      <li>tetx</li>
    </ol>
  </li>
  <li>Bananas</li>
</ul>

<ol type="a/A/I/i">
  <li>Apples</li>
  <li>Oranges</li>
  <li>Bananas</li>
</ol>

<dl>
  <dt>Apples</dt>
  <dd>- They are red.</dd>
  <dt>Oranges</dt>
  <dd>- They are orange.</dd>
</dl>
```

## Tables

```html
<table>
  <thead>
    <caption><h2>List of Numbers</h2></caption>
    <tr>
      <th>Num1</th>
      <th>Num2</th>
      <th>Num3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">Four</td>
      <td>Five</td>
      <td>Six</td>
    </tr>
  </tbody>
</table>
```

## Divs and Spans

```html
<!-- Inline element -->
<a href="#">link1</a>
<a href="#">linkk2</a>
<span>text</span>

<!-- block element -->
<hr>
  <p>Text</p>
  <p>Tsts</p>
  <div>div1</div>
  <div>div2</div>
```

## Input and Forms

```html
<form>
  <label for="username">Username:</label>
  <input type="text" value="Enter your username" id="username" name=""/>
  <input type="password" />
  <textarea rows="10" cols="30">
  Enter a paragraph
  </textarea>
  <input type="date" />
  <input type="email" />
  <input type="range" />
  <input type="file" />
  <input type="checkbox" />
  <input name="btn" type="radio" />
  <input name="btn" type="radio" />
  <input type="submit" />
</form>
```

使用 `label` 增加 `form` 的可访问性。

## iFrames

```html
<iframe src="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" frameborder="0" width="" height="">
fCC JavaScript
</iframe>
```

有些网站不允许通过 `iframe` 嵌入到其他网站中，因为这会使得浏览网站的人误以为“其他网站”才是真网站，而把那个真正的官方网站视为假网站。

## Meta Tags

```html
<meta charset="UTF-8">
<meta name="description" content="This is an example.">
<meta name="author" content="Jim Gao">
<meta name="keywords" content="Tags, HTML">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## HTML5 引入的新标签们

### `main`

### `header`

它被用来包装介绍信息或导航链接作为它的父标签，与在多页都是重复的目录协作得很好。它共享你从 `main` 那儿看到的嵌入式地标特征，允许辅助技术快速导航到那儿。`header` 是用于 `body` 内部的标签，和 `head` 元素不同，后者包含页面的标题、元信息等等内容。

### `footer`

它内置了一个强大功能：允许辅助设备快速地导航到那里。主要用于包含版权信息或者与文档相关的链接，通常被放置在页面的底部。

### `nav`

它包裹着主要导航链接。

### `article`

### `section`

### `time`

```html
<time datetime="2013-02-13">last Wednesday</time>
```

它的一个属性 `datetime` 可以设置时间格式。它能标准化显示时间。

## 提高网站可访问性

- 小心选择传递信息的颜色；使用足够的对比度，为了避免色盲人群可能遇到的问题。
- 使用高对比度的文本增加可读性（在前置颜色与背景颜色）。网页无障碍性指导原则（Web Content Accessibility Guidelines，WCAG）推荐对于正常文本至少需要 4.5 到 1 的对比度。
- `alt` 中并非总是有内容，对于图片来说，如果它已经有描述标签，就可以留空 `alt`；或者当图片仅为了装饰时。
- 使元素仅对屏幕阅读器可见

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

- 使用 HTML 访问键使链接可导航
  
  ```html
  <button accesskey="b">Important Button</button>
  ```

- 对于标题标签 `hx`，数字越小越往前，顺序不能颠倒；而且不能间隔使用：`h2` 后不能直接接 `h4`，要按顺序接 `h3`。如果担心大小，可通过 CSS 设置相对大小；`h1` 是必须存在的一个元素，它在一个页面只能有一个，它是你内容的主题。标题标签还被用于帮助搜索引擎理解页面的内容。
- _Semantic meaning_ 意味着你使用的标签呢个能够暗示它包含的信息的种类

---

**参考资料**：

1. [Basic HTML and HTML5 - freeCodeCamp](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5)
2. [HTML Full Course - Build a Website Tutorial](https://youtu.be/pQN-pnXPaVg)
3. [HTML Tutorial - W3Schools](https://www.w3schools.com/html/default.asp)
