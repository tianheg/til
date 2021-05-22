# 关于 HTML 的所有事

我的模板：

```html
<!DOCTYPE html>
<html lang="en" class="no-js">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">

    <title>Title</title>

    <script type="module">
      document.documentElement.classList.remove('no-js');
      document.documentElement.classList.add('js');
    </script>

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/print.css" media="print">

    <meta name="description" content="Page description">
    <meta property="og:title" content="Unique page title - My Site">
    <meta property="og:description" content="Page description">
    <meta property="og:image" content="https://www.mywebsite.com/image.jpg">
    <meta property="og:image:alt" content="Image description">
    <meta property="og:locale" content="en_GB">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:url" content="https://www.mywebsite.com/page">
    <link rel="canonical" href="https://www.mywebsite.com/page">

    <link rel="icon" href="/favicon.ico">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/my.webmanifest">
    <meta name="theme-color" content="#FF00FF">
  </head>
  <body>
    <!-- Content -->
    <script src="./js/xy-polyfill.js" nomodules></script>
    <script src="./js/script.js" type="module"></script>
  </body>
</html>
```

对模板的解释：

```html
<!DOCTYPE html>
```

目前唯一的必备的部分

```html
<html lang="en" class="no-js">
```

`lang` 是最重要的属性之一。The `lang` attribute is one of the most important attributes in HTML, because it’s powerful and responsible for many things. You can read more about it in [On Use of the Lang Attribute](https://adrianroselli.com/2015/01/on-use-of-lang-attribute.html) and [The lang attribute: browsers telling lies, telling sweet little lies](https://www.matuzo.at/blog/lang-attribute/). Applied to the `html` element, it defines the natural language of the page. It contains a single “language tag” in the format defined in [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt), for example `en` for English, `de` for German or `ru` for Russian.

- [lang Language tag syntax MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

I use the `no-js` class in case I want to apply styling to specific components in browsers that don’t support JavaScript. This class will be removed in browsers that support and execute modern JavaScript.

```html
<meta charset="UTF-8">
```

This attribute declares the document’s character encoding. Leaving it off might cause specific characters to display incorrectly in some browsers.

Here’s how Safari displays my name with and without the `charset` meta tag.

Manuel Matuzović - Manuel MatuzoviÄ‡

It must come before the `<title>` element to avoid faulty characters in the page title.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

The viewport meta tag allows us to change the width of the viewport, which is necessary for responsive web design. `width=device-width` sets the viewport width to the width of the screen. `initial-scale` controls the zoom level when the page is first loaded.

I’m not sure if setting `initial-scale=1` is still necessary. I believe I read somewhere that it was only needed for Safari on < iOS 9, but I can’t find the article anymore.

The `viewport` meta tag should come as early as possible in the document [to ensure proper document rendering](https://github.com/joshbuchea/HEAD#recommended-minimum).

We dont need the `shrink-to-fit=no` option anymore since iOS 9.3.

- [Time to remove the shrink-to-fit=no band aid?](https://www.scottohara.me/blog/2018/12/11/shrink-to-fit.html)
- [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

Title, description, and social media

```html
<title>Title</title>
```

The unique title of the page. It’s displayed in many places, for example, on the browser tab, in search engine results, when you save a page as a bookmark, etc.

- [Provide informative, unique page titles](https://www.w3.org/WAI/tips/writing/#provide-informative-unique-page-titles)
- [Accessible page titles in a Single Page App](https://hiddedevries.nl/en/blog/2018-07-19-accessible-page-titles-in-a-single-page-app)

```html
<script type="module">
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');
</script>
```

I’m [cutting the mustard](https://fettblog.eu/cutting-the-mustard-2018/) at JS module support. If a browser supports JavaScript modules, it means that it’s a browser that supports modern JavaScript, such as modules, ES 6 syntax, fetch, etc. I ship most JS only to these browsers and I use the `js` class in CSS, if the styling of a component is different, when JS is active.

```html
<link rel="stylesheet" href="./css/style.css">
```

CSS for the site.

```html
<link rel="stylesheet" href="/assets/css/print.css" media="print">
```

Print CSS for the site.

- [I totally forgot about print style sheets](https://www.matuzo.at/blog/i-totally-forgot-about-print-style-sheets/)

```html
<meta name="description" content="Page description">
```

The unique description of the page, for example, displayed on search result pages. It can be any length, but search engines truncate snippets to ~155–160 characters.

```html
<meta property="og:title" content="Unique page title - My Site">
```

The unique title of the page. Used by URL scrapers on social media platforms like Twitter or Facebook.

```html
<meta property="og:description" content="Page description">
```

The unique description of the page. Used by URL scrapers on social media platforms like Twitter or Facebook.

```html
<meta property="og:image" content="image.jpg">
```

The image displayed when you share the link to a page on social media, chat applications, or other sites that scrape URLs.

Ideally, it should be a square image with the important content placed in the middle of the square in a rectangle with a 2:1 ratio. This will make sure that the image will look good in cards with rectangle and square shaped images.

Here’s is how [this image](https://res.cloudinary.com/dp3mem7or/image/upload/w_1200/articles/sm_tables.png) will look on Twitter and on WhatsApp.

Rules for Twitter: <q>Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported.</q>

- [Twitter Developer Docs: Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image)

```html
<meta property="og:image:alt" content="Image description">
```

A description of the image. Don’t use this meta tag if the image is purely decorative and doesn’t provide any meaningful information. Screen readers ignore the image, if we don’t provide alt text.

```html
<meta property="og:locale" content="en_GB">
```

An optional Open Graph property, but recommended. It defines the natural language of the page.

```html
<meta property="og:type" content="website">
```

The [type of content](https://ogp.me/#types) you’re sharing, e.g. `website`, `article`, or `video.movie`. A required property for valid Open Graph pages.

```html
<meta property="og:url" content="https://www.mywebsite.com/page">
```

The canonical URL of the page. A required property for valid Open Graph pages.

- [The Open Graph protocol](https://ogp.me)

```html
<meta name="twitter:card" content="summary_large_image">
```

This meta tag defines how cards will look when shared on Twitter. There are two options for websites, `summary` and `summary_large_image`.

You can see that I’m using a square image to ensure that the card looks good in both variations. I’ve painted the top and bottom part of the card pink so that you can see that these parts will be cut off in a `summary_large_image`.

Icons and address bar

```html
<meta name="theme-color" content="#FF00FF">
```

`theme-color` provides browsers with a CSS color to customize the display of the page or of the surrounding user interface.

Supported browsers: Chrome, Brave and Samsung Internet on Android.

<img src="/images/htmldoc_theme-color800.jpg"  width="400" height="79" alt="Pink UI in Brave browser" loading="lazy">

```html
<link rel="icon" href="/favicon.ico">
```

A 32×32px favicon for legacy browsers. It should live in the root of your website. 

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
```

Most modern browser support [SVG favicons](https://caniuse.com/link-icon-svg). The benefits of the `favicon.svg` are that it looks better when it’s scaled, because it’s a vector and not raster image, and we can add HTML and CSS to the SVG, which means that we can support dark mode.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<style>
  path {
    fill: #153a51;
  }

  @media (prefers-color-scheme: dark) {
    path {
      fill: #FFFFFF;
    } 
  }
</style>
<path d="M397.8 117.9v290h-76.4V273.5h-.8l-46.4 97.2h-36.8l-46-96.8h-.8v134h-76.4v-290h80.4l60.8 150.8h.8l61.2-150.8h80.4z"/>
</svg>
```

- [prefers-color-scheme in SVG favicons for dark mode icons](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/)

```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

The 180×180px icon Apple devices will use if you add the page to your home screen.

```html
<link rel="manifest" href="/my.webmanifest">
```

For Android devices we need a `.webmanifest` file, which provides browsers with the information where the icons needed for the home screen and the splash screen for <abbr title="Progressive Web Apps">PWAs</abbr> are located.

```json
{
    "name": "matuzo.at",
    "icons": [
        { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
        { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
    ]
}
```

- [How to Favicon in 2021: Six files that fit most needs](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)

```html
<link rel="canonical" href="https://www.mywebsite.com/page">
```

Use the `canonical` link element to prevent SEO issues caused by duplicate content by specifying the original source for pages that are available on multiple URLs.

```html
<script src="/assets/js/xy-polyfill.js" nomodule></script>
```

If I want to serve JavaScript targeted specifically at browsers that don’t support modules, I add the `nomodule` attribute, which causes the script to only run in legacy browsers, namely IE 11.

```html
<script src="/assets/js/script.js" type="module"></script>
```

JavaScript with the `type="module"` will only run in browsers that support modules, it’s the opposite of the `nomodule` attribute.

<hr>

This isn’t the absolute minimum, but it’s what I need in most sites I build. To round things up, I’ve added a bunch of tags to this post that we probably don’t need anymore and some others that you might need occasionally. If you want to learn more about the `<head>` element and its children, check out Josh Buchea’s fantastic repository [HEAD](https://github.com/joshbuchea/HEAD).

Stuff we don’t need anymore

```html
<meta name="msapplication-TileColor" content="#efefef">
```

[According to Andrey Sitnik](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs#windows-tile-icon), this is no longer required for recent versions of Windows.

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

> Starting with IE11, document modes are deprecated and should no longer be used, except on a temporary basis. 
>
> Starting with IE11, edge mode is the preferred document mode; it represents the highest support for modern standards available to the browser.

[Compatibility changes in IE11](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/bg182625(v=vs.85)#document-mode-changes)

```html
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#36b1bf">
```

Since Safari 12, we don’t need a separate variation of the icon for pinned tabs anymore.

## Other noteworthy elements

```html
<link rel="preload" href="font.woff2" as="font" type="font/woff2">
```

Use `preload` if you want to ensure that specific resources are available earlier in the page lifecycle.

- [Preloading content with rel="preload"](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
- [Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- [Prefetching, preloading, prebrowsing](https://css-tricks.com/prefetching-preloading-prebrowsing/)

```html
<link type="application/atom+xml" rel="alternate" href="/feed.xml" title="My Blog - Manuel Matuzovic">
```

RSS Feed for your site.

```html
<meta name="format-detection" content="telephone=no">
```

Disable automatic detection and formatting of phone numbers.

```html
<meta name="twitter:dnt" content="on">
```

Disallow Twitter from using your site’s info for personalization purposes.

Check out [HEAD](https://github.com/joshbuchea/HEAD) for much more.

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
4. [My current HTML boilerplate](https://www.matuzo.at/blog/html-boilerplate/)
