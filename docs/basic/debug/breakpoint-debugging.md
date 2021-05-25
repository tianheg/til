# 断点调试

## 调试类型

针对不同的场景不同的应用，开启断点调试的方法也不一样。目前主要分为

- 本地调试 Launch Program 简单说，就是直接执行，上文最简单的断点调试都属于这种模式
- 远程调试 Attach to Process 简单说，是调试某个已启动的线程，常见的场景就是调试启动的 http-server

下面让我们先来介绍一下大部分场景下如何开启使用本地调试，远程调试方式我们着重介绍在 VS Code 中如何调试

### node-inspect

使用 Node.js 自带的 inspect 功能来开启断点调试

**使用方式**

```js
// break.js
const foo = 1
const bar = foo + 1
debugger // 功能类似于浏览器中的断点
console.log(bar)
```

```sh
$ node inspect break.js
```

此时会显示 debug 界面。

显示 debug 界面后，我们通过键盘来进行不同的操作，这里我们介绍最常用的几项操作

- n 单步执行
- c 继续执行，即跳到下一个断点
- s 单步调试 点击后进入到当前方法的内部调试
- o 单步跳出 跳出当前调试的方法，与单步调试对应
- repl 进入 repl（交互解释器）环境，此时可以查看某一个变量的值

**总结**

此方法过于繁琐低效，以了解为主，知道有这种调试方法即可。在一些远程服务器上，我们有时候会用到该方法来进行调试

### Chrome + `node --inspect`

**使用方式**

```sh
$ node --inspect break.js # 启用 debug
$ node --inspect-brk break.js # 启用 debug 并在第一行暂停，即默认第一行设置了断点，建议使用这种方式来启动
```

打开 `chrome://inspect/#devices` , 进入到熟悉的界面，此时是 `远程调试` 模式

![](https://img.alicdn.com/tfs/TB17cIHcBv0gK0jSZKbXXbK2FXa-1346-624.png) ![](https://img.alicdn.com/tfs/TB10VoIcxv1gK0jSZFFXXb0sXXa-1514-534.png)

**总结**

此种方式比较常见，我们经常会在 Chrome 中进行 debug，Chrome 的调试功能也是无比强大

### 借助 VS Code

借助目前的前端开发第一工具，我们可以很方便的来进行断点调试

**本地调试**

打开调试菜单栏，选择 `添加配置` -> `启动程序`

![](https://img.alicdn.com/tfs/TB1e8sMcrH1gK0jSZFwXXc7aXXa-1364-668.png) 生成如下调试配置

```sh
{
    "version": "0.2.0",
    "configurations": [{
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "program": "${workspaceFolder}/break.js", // 选择工作目录下的 break.js
        // "program": "${file}" 使用变量来获取当前打开的文件

    }]
}
```

按 `F5` 启动调试，出现熟悉的界面

![](https://img.alicdn.com/tfs/TB17pkOcuH2gK0jSZJnXXaT1FXa-1002-346.png)

**远程调试**

这里我们以 express 应用为例，我们在本地新建项目并且启动服务

```sh
$ npm install express-generator -g
$ express --view=pug myapp
$ cd myapp
$ npm i
$ npm start
```

通过以上命令，我们新建了一个 express 应用并且启动。点击齿轮按钮，打开 launch.json

![](https://gw.alicdn.com/tfs/TB1iKQHXxv1gK0jSZFFXXb0sXXa-1734-628.png)

点击绿色箭头，选择添加配置，选择附加到进程选项

![](https://gw.alicdn.com/tfs/TB1hUEHXrj1gK0jSZFuXXcrHpXa-1054-716.png)

按 `F5` 启动 debug，选择第一个进程

![](https://gw.alicdn.com/tfs/TB1kkIGXAT2gK0jSZFkXXcIQFXa-1438-662.jpg)

浏览器中访问 `http://localhost:3000` VS Code 就能够检测到触发断点，接下来就是我们熟悉的界面

![](https://gw.alicdn.com/tfs/TB1yHgIXrr1gK0jSZFDXXb9yVXa-1122-436.jpg)

### 断点调试类型

这里说一下从左到右我们的断点调试类型分为 4 种

- 继续调试 点击后代码会执行到下一个断点所在位置，如果没有下一个断点，则认为该次请求执行完毕
- 单步跳过 点击后会跳到当前代码下一行继续执行，不会进入到方法内部
- 单步调试 点击后进入到当前方法的内部调试，例如在 res.render 这一行中执行单步调试，会进入到 res.render 方法内部进行调试
- 单步跳出 跳出当前调试的方法，与单步调试对应

## 总结

我们介绍了本地调试与远程调试两种场景，以及几种开启断点调试的方式，以上几种方式以了解为主，建议熟练掌握一种 VS Code 中如何使用断点调试的方式即可，需要了解每个配置项的含义。 如果想要更进一步详细的了解 debug 的原理，可以查看 [node-debug-tutorial](https://i5ting.github.io/node-debug-tutorial/#1)
