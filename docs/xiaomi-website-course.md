# Xiaomi Website Course

1. `charset="UTF-8"` 设置字符集

2.

- p 段落文字；
- div 块文字，标签；

3.

<img src="" />

4.

slash `/`; backslash `\`

5.

font-size(默认 16 px), color, background-color

`#xxxxxx`, x<--(0, f)

6.

width, height, line-height, text-align

```css
div {
    width: 100px;

    border: 1px solid red;
}
```

7.

class 的 name：首字母不是数字

8.

页面布局

为什么两个内嵌的 border 之间会有缝隙，代码：

```html
<div class="div1">
        <div class="countdown"></div>
        <div class="prods">
            <div class="prod"></div>
            <div class="prod"></div>
            <div class="prod"></div>
            <div class="prod"></div>
        </div>
</div>
```

```css
.div1 {
    width: 100%; /* 100% */
    height: 500px;
    border: 10px solid #555555;
}

.countdown {
    width: 100%;
    height: 480px;
    border: 10px solid #a21;
}
```

`<div>` 是块元素，尽管已经设置边界大小，但它还会独占一行的剩余部分。解决办法：

1. float
2. 设父元素为：flex-box，子元素不设置
3. justify-content, align-content

```css
.div1 {
    width: 1000px; /* 100% */
    height: 500px;
    border: 10px solid #555555;
    display: flex;
    justify-content: space-between; /* 两端对齐 */
}

.countdown {
    width: 	980px;
    height: 480px;
    border: 10px solid #a21;
}
.prods {
    width: 960px;
    height: 460px;
    border: 10px solid pink;
    display: flex;
    justify-content: space-between;
}
.prod {
    width: 235px;
    height: 440px;
    border: 10px solid green;
}
```
