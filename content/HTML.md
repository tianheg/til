---
title: HTML
---
# HTML

HTML 是超文本标记语言。

HTML5

- [[HTML Basics]]
- [[HTML File Paths]]
- [[HTML Templates]]

## Tags

- [[Div Tags]]
- [[Attributes]]

## Elements

- [[HTML Web Links]]
- [[Nesting Elements]]
- [[Empty Elements]]

## Images

- [[Image Elements]]
- [[Native Image Lazy Loading]]

## Code Snippets

```html
<form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <input type="radio" name="test-name" checked>
    <input type="number" id="number" name="number" min="1" max="5" placeholder="Enter your number">
    <input type="text" required>
    <button type="submit">Submit</button>
</form>

<img src="https://www.freecatphotoapp.com/your-image.jpg">
<img src="https://bit.ly/fcc-relaxing-cat" alt="A Cute Cat">

<input type="checkbox" id="type1" name="A" value="A"><label for="type1" name="A">A</label>
<input type="checkbox" id="type2" name="B" value="B"><label for="type2" name="B">B</label>
<input type="checkbox" id="type3" name="C" value="C"><label for="type3" name="C">C</label>

<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>

<nav id="nav-bar">
    <a href="#nav-bar" class="nav-link">HTML</a> |
    <a href="#nav-bar" class="nav-link">CSS</a> |
    <a href="#nav-bar" class="nav-link">JS</a>
</nav>
<!-- Create Links To Sections On The Same Page(with id)-->

<label for="textarea">You may want to say:</label>
<textarea id="textarea" name="textarea" rows="4" cols="7"></textarea>
```

## What I Want To Know

- [[The difference between js in the head and body]]
- [[Access to web-specific text]]
- [Canonical link element](https://en.wikipedia.org/wiki/Canonical_link_element)

## Notes

DTD: Doctype Declaration

```html
<meta http-equiv="refresh" content="3;https://www.baidu.com"> <!-- redirect to https://www.baidu.com after 3 seconds-->
```

UTF-8 在浏览器中是如何加载的？

转义字符

HTML 标签分类：排版标签，字体标签，图片标签

当表格非常大内容非常多的时候，如果用thead、tbody、tfoot标签的话，那么数据可以边获取边显示。如果不写，则必须等表格的内容全部从服务器获取完成才能显示出来

网页中99.9999%需要换行的时候，是因为另起了一个段落，所以要用p，而不要用<br />。不到万不得已，不要用br标签

H5 的经典网页布局

在 HTML5 中， a 标签中可以包含 div；在 HTML5 中 a > div 是合法的， div > a > div是不合法的

为了严格保证字在行里面居中，我们的工程师有一个约定：**行高、字号，一般都是偶数**。这样可以保证，它们的差一定偶数，就能够被2整除

行高 = 盒子高，就可以保证单行文本垂直居中

如果想让多行文本垂直居中，还需要计算盒子的padding

如果我们把中文字体写在前面 `font-family: "微软雅黑","Times New Roman","宋体";` 上方代码会导致，中文和英文都会采用微软雅黑字体

background-repeat: no-repeat; 设置背景图片是否重复及如何重复，默认平铺满。（重要）

16进制<-->10进制

常用颜色：

```txt
#000   黑
#fff   白
#f00   红
#222   深灰
#333   灰
#ccc   浅灰
```