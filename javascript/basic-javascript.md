# JavaScript 基础

## Comment JavaScript Code

JavaScript 会忽略被注释掉的代码。写注释能够帮你或别人弄清楚代码的意思。注释的两种方法：

```javascript
// This is an in-line comment.

/* This is a
multi-line comment */
```

好的注释能够帮助代码传达实现意图。

## 声明 JavaScript 变量

在计算机科学中，data 指代一切对计算机有意义的事物。JavaScript 提供了 8 种不同的数据类型，它们分别是 `undefined`，`null`，`boolean`，`string`，`symbol`，`bigint`，`number`，`object`。

计算机可以识别数字，例如 `2`，字符串，例如 `"2"`,`"cat"`， 或者 `"2 cat"`，最后一个是字符的组合。计算机能进行有关数字的数学运算，但它不能运算字符串。

计算机能以动态方式存储操作变量。计算机使用标签指向数据，而不是直接使用数据。变量可以是八种数据类型的任何一个或多个。

这里的变量和你在数学中用到的 x 和 y 变量很像，这说明变量是一个代表我们想用的数据的简单名字。计算机变量不同于数学变量，因为它们可以在不同的时间存储不同的值。

在 JavaScript 中，使用 `var` 创建或声明一个变量：

```js
var ourName;
```

在 JavaScript 中使用分号结束声明。**数字、字母和 `$` 或 `_`是变量名组成范围**，但是：

1. 变量不能含有空格；
2. 首字母不能是数字。

## 使用赋值操作符存储值

```js
myVariable = 5; // assigns the number value 5 to myVariable
```

如果 `=` 右侧有任何计算，在把值赋给操作符左边的变量之前，计算已经结束了。

例子：

```js
var myVar;
myVar = 5;
```

## 把一个变量的值赋给另一个变量

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

## 使用赋值操作副初始化变量

```js
var myVar = 0;
```

## 理解未初始化变量

在 JavaScript 中，刚声明的变量具有初始值：`undefined`。如果使用一个 `undefined` 变量执行数学操作，你的结果会是 `NaN`，意为“不是一个数字”。如果和 `undefined` 变量组成字符串，你会得到一个文字字符串 `undefined`。

## 理解变量的大小写敏感

在 JavaScript 中，所有变量和函数的名字是大小写敏感的。这意味着大写对它们的名字有影响。

`MYVAR` 和 `MyVar` 或 `myvar` 都不一样。可能有多个这样的变量，它们名字相同，但具有不同的大小写。为了清晰强烈推荐不要使用这个语言特点。

**最佳实践**：

在 JavaScript 中使用驼峰命名法。该种方法中，多单词变量的第一个单词首字母小写，第二个单词和之后的单词的首字母大写。

```js
var someVariable;
var anotherVariableName;
var theVariableNameIsSoLong;
```

## 基本运算

### 两数加法

`Number` 是 JavaScript 中的一种数据类型，它可以表示数字数据。`+` 是 JavaScript 的加法操作运算符。

```js
myVar = 1 + 2;
```

### 两数相减

```js
myVar = 2 - 1;
```

### 两数相乘

```js
myVar = 2 * 3;
```

### 两数相除

```js
myVar = 4 / 2;
```

## 自增 1 再赋值

```js
i++;
```

## 自减 1 再赋值

```js
i--;
```

## 创建十进制数

十进制数有时候也可看成 _floating point numbers_ 或 _floats_。

**不过并非所有实数都能用浮点数准确表示。这样会导致化整误差**。

```js
var myDecimal = 2.3;
```

## 两浮点数相乘

```js
var product = 2.0 * 2.5;
```

## 两浮点数相除

```js
var quotient = 4.4 / 2.0;
```

## 取余

余数运算符 `％` 给出两个数字除法的余数（取余操作符 `%` 作为两数相除后的余数标志，括号内的是自己的翻译）。

在数学中，通过检查与 `2` 整除的余数来确定一个数字是偶数还是奇数。

**有时，取余操作符有时会被误认为是模操作符**。它和模操作符很像，但它无法识别负数。

```js
var remainder = 11 % 3;
```
