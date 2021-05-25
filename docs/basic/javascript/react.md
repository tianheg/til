# React

## React 的优点

- 组件模式：代码复用和团队分工
- 虚拟 DOM：性能优势
- 移动端支持：跨终端

## React 的缺点

- 学习曲线较陡峭
- 全新的一套概念，与其他所有框架截然不同
- 只有采用它的整个技术栈，才能发挥最大威力

总结：React 非常先进和强大，但是学习和实现成本都不低

## JSX 语法

React 使用 JSX 语法，JavaScript 代码中可以写 HTML 代码。

```js
let myTitle = <h1>Hello, world</h1>;
```

## JSX 语法解释

（1）JSX 语法的最外层，只能有一个节点。

```jsx
// 错误
let myTitle = <p>Hello</p><p>World</p>;
```

（2）JSX 语法中可以插入 JavaScript 代码，使用大括号。

```jsx
let myTitle = <p>{'Hello' + 'World'}</p>;
```

## Babel 转码器

JavaScript 引擎（包括浏览器和 Node）都不认识 JSX，需要先用 Babel 转码，然后才能运行。

```html
<script src="react.js"></script>
<script src="react-dom.js"></script>
<script src="babel.min.js"></script>
<script type="text/babel">
    // My code
</script>
```

React 需要加载两个库：React 和 React-DOM，前者是 React 的核心库，后者是 React 的 DOM 适配库。

Babel 用来在浏览器转换 JSX 语法，如果服务器已经转好了，浏览器就不需要加载这个库。
