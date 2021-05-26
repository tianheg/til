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

```js
// 错误
let myTitle = <p>Hello</p><p>World</p>;
```

（2）JSX 语法中可以插入 JavaScript 代码，使用大括号。

```js
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

## React 组件库

React-Bootstrap：[react-bootstrap.github.io](https://react-bootstrap.github.io/)

### ReCharts

ReCharts 是一个 React 图表组件库。[http://recharts.org](http://recharts.org/)

```js
<LineChart width="{1000} height={400} data={data}">
  <XAxis dataKey="name" />
  <YAxis/>
  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
</LineChart>
```

## React 的核心思想

View 是 State 的输出。

```js
view = f(state)
```

上式中，`f` 表示函数关系。只要 State 发生变化，View 也要随之变化。

React 的本质是将图形界面（GUI）函数化。

```js
const person = {
  name: "tim";
  age: 24
}

const App = ({ person }) => <h1>{ person.name }</h1>

ReactDOM.render(<App person={person} />, document.body)
```

## React 没有解决的问题

React 本身只是一个 DOM 的抽象层，使用组件构建虚拟 DOM。

如果开发大应用，还需要解决两个问题：

- 架构：大型应用程序应该如何组织代码？
- 通信：组件之间如何进行通信？

## 架构问题

React 只是视图层的解决方案，可以用于任何一种架构。

- MVC
- MVVM
- Observer
- Reactive
- ...

到底哪一种架构最适合 React？

## 通信问题

组件会发生三种通信：

- 向子组件发消息
- 向父组件发消息
- 向其他组件发消息

React 只提供了一种通信手段：传参。对于大应用，很不方便。

### 状态的同步

通信的本质——状态的同步。

React 同步状态的基本方法：找到通信双方最近的共同父组件，通过它的 `state`，使得子组件的状态保持同步。

## Flux 架构

该概念由 Facebook 提出，被认为是 React 应用的标准架构。

![React Flux](https://cdn.jsdelivr.net/gh/tianheg/static@main/img/react-flux.png)

最大特点：数据单向流动。与 MVVM 的数据双向绑定，形成鲜明对比。

## Flux 的核心思想

- 不同组件的 `state`，存放在一个外部的、公共的 Store 上面
- 组件订阅 Store 的不同部分
- 组建发送（dispatch）动作（action），引发 Store 的更新

Flux 只是一个概念，有 30 多种实现。

## 练习

- JSX 语法
- React 组件语法
- React 组件的参数
- React 组件的状态
- 写简单 React 组件
- React 组件的生命周期
- ReCharts

---

**参考资料**：

1. <https://github.com/ruanyf/jstraining>
