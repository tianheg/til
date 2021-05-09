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

## 用括号在字符串中寻找字符

大多数现代编程语言从 0 开始计数。

```js
var firstName = "Tianhe Gao";
var firstLetter = firstName[0];
// ouput: T

// 找第 n 个字符
var firstName = "Ada";
var secondLetterOfFirstName = firstname[1];
// output: d

// 找最后一个字符
var firstName = "Ada";
var lastLetter = firstName[firstName.length - 1];

// 找倒数第 n 个
var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3];
```

## 理解的字符串的不变性

JavaScript 中，字符串的值一经创建无法修改。除非重新赋值。

```js
var myStr = "Amy";
myStr = "Tom";
```

## 填字游戏

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
```

## 变量存储多值

```js
var sandwich = ["A", "B", "C", 12];
```

## 数组嵌套

```js
var myArray = [["Amy", 21], ["Tom", 23]];
```

## 使用索引访问数组数据

```js
var myArray = [50,60,70];
var myData = myArray[0];

// 使用索引修改数组数据
var myArray = [18,64,99];
myArray[0] = 45;

// 使用索引访问多维数组
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
```

## 使用 `push()` 在数组最后添加数据

`push()` 能够很轻松地在数组的最后附加数据。

```js
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
```

## 使用 `unshift()` 在数组开头添加数据

`unshift()` 从数组的开头添加元素

```js
var ourArray = ["A", "B", "C"];
ourArray.shift();
ourArray.unshift("D");
```

## 使用 `pop()` 操作数组

`pop()` 从数组的最后移除元素

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

## 使用 `shift()` 操作数组

`shift()` 从数组的开头移除元素

```js
var ourArray = ["A", "B", "C"];
var removeFromOurArray = ourArray.shift();
```

## 创建 `List`

`List` 是包含几个子数组的多维数组。作为购物清单的话，多维数组的子数组的第一个元素是包含购买物品的名字的字符串，第二个元素应该是表示数量的数字：`["Chocolate", 12]`。

```js
var myList = [["A", 12], ["B", 13], ["C", 14],["D", 15], ["E", 16]];
```

## 使用函数编写可复用的 JavaScript

```js
function functionName() {
    console.log("Hello World");
}
functionName();
```

你可以通过类似 `functionName()` 的形式调用该函数。这个函数每调用一次都会在开发控制台打印输出信息：`Hello World`。每次调用函数时，大括号内的所有代码都会执行一次。

## 使用参数将值传递给函数

参数是用作变量的占位符，这些变量将在调用函数时输入到函数中。

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(12, 13);
```

## 全局作用域和函数

JavaScript中，范围是指变量的可见性。在功能块之外定义的变量具有全局作用域。这意味着它们可以被用于 JavaScript 代码的任何地方。变量创建的作用域为全局，当不使用 `var` 声明时。这样做时会使你代码的其他地方产生意想不到的结果，或者当你再次使用函数时。你应该总是使用 `var` 声明变量。

```js
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

## 局部作用域和函数

在函数中声明的变量以及函数参数具有局部作用域。这意味着他们只在该函数中可见。

```js
function myLocalScope() {

  // Only change code below this line
  var myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

## 函数中的全局和局部变量

有可能局部变量和全局变量的名字相同。当出现这种情况时，局部变量的优先级高于全局变量。

```js
var someVar = "Hat";
function myFun() {
    var someVar = "Head";
    return someVar;
}
```

## 使用 `return` 将值发回函数

```js
function plusThree(num) {
    return num + 3;
}
var answer = plusThree(5);
```

## `undefined` 值

```js
var sum = 0;
function addSum(num) {
    sum = sum + sum;
}
addSum(3);
```
